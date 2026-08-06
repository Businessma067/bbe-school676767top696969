/**
 * Build ch3-fc150-data-32.mjs and -33.mjs in quad format from triplet source.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"));

async function loadTripletRaw(name) {
  const mod = await import(pathToFileURL(path.join(dir, `_triplet-${name}.mjs`)).href);
  return mod.default;
}

const q = (a, b, c, d) => [a, b, c, d];

function cap(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function ensureDot(s) {
  return s.endsWith(".") ? s : s + ".";
}

function trueFromFalse(falseStmt, expl) {
  // Prefer explanation as the true statement when it states the fact clearly
  const candidates = [
    ensureDot(cap(expl.trim())),
    ensureDot(
      cap(
        falseStmt
          .replace(/ belong to the primary sector because .+$/i, " belong to the tertiary sector.")
          .replace(/ are primary because .+$/i, " are tertiary services.")
          .replace(/ is primary because .+$/i, " is tertiary activity.")
          .replace(/ are secondary because .+$/i, " are tertiary activity.")
          .replace(/ is secondary because .+$/i, " is tertiary activity.")
          .replace(/ are tertiary because .+$/i, " are secondary manufacturing.")
          .replace(/ is tertiary because .+$/i, " is secondary manufacturing.")
          .replace(/ belong to the tertiary sector because .+$/i, " belong to the secondary sector.")
          .replace(/^(.+) does not (.+)$/, "$1 does $2")
          .replace(/^(.+) cannot (.+)$/, "$1 can $2")
          .replace(/^(.+) need no (.+)$/, "$1 need $2")
          .replace(/^(.+) ignore (.+)$/, "$1 require $2")
          .replace(/^(.+) excludes (.+)$/, "$1 includes $2")
          .replace(/^(.+) alone (.+)$/, "$1 with surplus $2")
          .replace(/^(.+) without (.+)$/, "$1 with $2")
          .replace(/^(.+) must be paid as shareholder dividends\.$/, "$1 are reinvested into the mission.")
          .replace(/^(.+) must be distributed immediately and cannot be reinvested\.$/, "$1 can be reinvested in the business.")
          .replace(/^(.+) satisfies the profit objective\.$/, "$1 does not satisfy the profit objective without cost control.")
          .replace(/^(.+) lowers GDP because .+$/i, "$1 is included in GDP measurement.")
          .replace(/^(.+) proves GDP always equals citizen wellbeing after disasters\.$/, "$1 does not prove wellbeing improved.")
          .replace(/^(.+) always equals real economic growth\.$/, "$1 can differ from real growth when prices rise.")
          .replace(/^(.+) cannot be counted in GDP\.$/, "$1 can count in home-country GDP when produced domestically.")
          .replace(/^(.+) is a software helpdesk is tertiary even when supporting manufactured devices\.$/, "A software helpdesk is tertiary even when supporting manufactured devices.")
      )
    ),
  ];
  for (const c of candidates) {
    if (c && c.length > 15 && c.toLowerCase() !== falseStmt.toLowerCase()) return c;
  }
  return ensureDot(cap(expl));
}

function falseFromTrue(trueStmt, expl) {
  const traps = [
    [/The primary sector covers farming, fishing, mining, and forestry extracting raw materials\./, "The primary sector is limited to urban building plots and excludes fisheries or forests.", "Primary activity includes fisheries, forests, and mineral extraction—not merely urban plots."],
    [/The secondary sector transforms raw materials into manufactured goods\./, "The secondary sector delivers banking and insurance services to households.", "Banking and insurance are tertiary services, not secondary manufacturing."],
    [/The tertiary sector comprises services such as banking, insurance, and coaching\./, "The tertiary sector covers only farming, mining, and forestry extraction.", "Tertiary activity delivers services; extraction belongs to the primary sector."],
    [/Commercial fishing that lands herring for sale is primary-sector extraction\./, "Commercial fishing that lands herring for sale is tertiary distribution.", "Commercial fishing extracts natural resources and is primary activity."],
    [/A car plant assembling vehicles from stamped panels operates in the secondary sector\./, "A car plant assembling vehicles operates in the tertiary sector because it serves customers.", "Vehicle assembly from processed materials is secondary manufacturing."],
    [/Construction spending on bridge rebuilds is included in GDP measurement\./, "Construction spending on bridge rebuilds is excluded from GDP to avoid counting damage twice.", "Rebuild spending adds to measured GDP."],
    [/GDP totals the monetary value of final goods and services produced within a country's borders\./, "GDP totals intermediate goods sold between factories at each production stage.", "GDP counts final goods and services, not intermediate double counting."],
    [/Emerging economies usually depend largely on the primary sector\./, "Emerging economies typically report tertiary output above seventy percent of GDP.", "Emerging economies depend more on primary activity, not dominant tertiary shares."],
    [/In highly developed EU economies the tertiary sector often exceeds seventy percent of output\./, "In highly developed EU economies primary output exceeds seventy percent because food is essential.", "In developed EU countries the tertiary sector usually exceeds seventy percent."],
    [/Most profit-oriented businesses aim for revenues above costs and expenses\./, "Most profit-oriented businesses aim to match costs exactly with no surplus.", "Profit orientation means targeting higher revenues than total costs."],
    [/Not-for-profit organisations mainly aim to cover costs while pursuing a mission\./, "Not-for-profit organisations mainly aim to maximise owner profit like corporations.", "NPOs focus on covering costs rather than maximising owner profit."],
    [/Profits reward owners and investors for the risk they have taken\./, "Profits reward owners with a fixed wage unrelated to risk accepted.", "Returns compensate capital providers for bearing business risk."],
    [/Retained profit can be reinvested to improve durability and sustainability of a business\./, "Retained profit must be distributed immediately and cannot be reinvested.", "Reinvested profit strengthens long-run business capacity."],
    [/Donations can keep an NPO operating when fee income alone is insufficient\./, "Donations replace all need for cost control in humanitarian NGOs.", "Donations are a key revenue source but NPOs must still cover costs responsibly."],
    [/The Red Cross is cited as an example of a non-profit organisation\./, "The Red Cross is a profit-maximising corporation distributing dividends to shareholders.", "Red Cross operates as a well-known NPO example."],
  ];
  for (const [re, fStmt, fExpl] of traps) {
    if (re.test(trueStmt)) return [fStmt, fExpl];
  }
  // Generic inversion
  let f = trueStmt;
  if (/^(.+) is (.+)\.$/.test(f)) {
    f = f.replace(/^(.+) is (.+)\.$/, "$1 is not $2.");
  } else if (/^(.+) are (.+)\.$/.test(f)) {
    f = f.replace(/^(.+) are (.+)\.$/, "$1 are not $2.");
  } else if (/^(.+) can (.+)\.$/.test(f)) {
    f = f.replace(/^(.+) can (.+)\.$/, "$1 cannot $2.");
  } else if (/^(.+) includes (.+)\.$/.test(f)) {
    f = f.replace(/^(.+) includes (.+)\.$/, "$1 excludes $2.");
  } else {
    f = "It is incorrect that " + trueStmt.charAt(0).toLowerCase() + trueStmt.slice(1);
  }
  return [ensureDot(f), ensureDot(expl)];
}

function tripletToQuad([stmt, isTrue, expl]) {
  if (isTrue) {
    const [fStmt, fExpl] = falseFromTrue(stmt, expl);
    return q(stmt, expl, fStmt, fExpl);
  }
  const tStmt = trueFromFalse(stmt, expl);
  return q(tStmt, expl, stmt, expl);
}

function emit(exportName, section, raw) {
  const lines = [
    `/** Ch3 section ${section} — quad format for author-ch3-fc150.mjs */`,
    `const q = (a, b, c, d) => [a, b, c, d];`,
    ``,
    `export const ${exportName} = [`,
  ];
  for (const [title, context, diff, triplets] of raw) {
    lines.push(`  ["${title.replace(/"/g, '\\"')}", "${context.replace(/"/g, '\\"')}", "${diff}", [`);
    for (const t of triplets) {
      const quad = tripletToQuad(t);
      lines.push(`    q(${JSON.stringify(quad[0])}, ${JSON.stringify(quad[1])}, ${JSON.stringify(quad[2])}, ${JSON.stringify(quad[3])}),`);
    }
    lines.push(`  ]],`);
  }
  lines.push(`];`, ``);
  return lines.join("\n");
}

// Read triplet files by stripping export and using dynamic import of backup
const readTripletExport = (file) => {
  const src = fs.readFileSync(path.join(dir, file), "utf8");
  if (src.includes("const q =")) throw new Error(`${file} already quad format`);
  const body = src.replace(/^\/\*\*[\s\S]*?\*\/\n/, "").replace(/^export const RAW_\d+ = /, "export default ");
  const tmp = path.join(dir, `_tmp_${file}`);
  fs.writeFileSync(tmp, body);
  return import(pathToFileURL(tmp).href).then((m) => {
    fs.unlinkSync(tmp);
    return m.default;
  });
};

const main = async () => {
  const raw32 = await readTripletExport("ch3-fc150-data-32.mjs");
  const raw33 = await readTripletExport("ch3-fc150-data-33.mjs");
  if (raw32.length !== 50) throw new Error(`RAW_32: ${raw32.length} cases`);
  if (raw33.length !== 50) throw new Error(`RAW_33: ${raw33.length} cases`);
  fs.writeFileSync(path.join(dir, "ch3-fc150-data-32.mjs"), emit("RAW_32", "3.2", raw32));
  fs.writeFileSync(path.join(dir, "ch3-fc150-data-33.mjs"), emit("RAW_33", "3.3", raw33));
  console.log("Wrote quad files:", raw32.length, raw33.length);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
