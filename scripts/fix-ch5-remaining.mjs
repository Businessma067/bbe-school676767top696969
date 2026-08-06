/**
 * Finish remaining Ch5 audit fixes (round2 crashed before 5.4 diversify).
 * Idempotent on already-paraphrased bodies.
 */
import fs from "node:fs";

function load(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function save(p, d) {
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
}

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
  const seen = new Map();

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
        if (count === 0) break;
        c.statements[i] = rule.alts[(count - 1) % rule.alts.length](prefix);
        n++;
        break;
      }
    }
  }
  return n;
}

function diversifyShareWording(cases) {
  // Same pedagogical formula, different sentence frames — lowers template smell without changing math.
  const frames = [
    (firm, mkt, pct) =>
      `A firm with sales of ${firm} million euros in a market of ${mkt} million euros holds a ${pct} per cent absolute market share.`,
    (firm, mkt, pct) =>
      `Absolute market share is ${pct} per cent when firm sales are ${firm} million euros and total market sales are ${mkt} million euros.`,
    (firm, mkt, pct) =>
      `With firm sales of ${firm} million euros against a ${mkt} million euro market, absolute share equals ${pct} per cent.`,
    (firm, mkt, pct) =>
      `Sales of ${firm} million euros out of a ${mkt} million euro market represent a ${pct} per cent absolute market share.`,
  ];
  const producerFrames = [
    (ind, firm, mkt, pct) =>
      `If a ${ind} producer sells ${firm} million euros in a ${mkt} million euro market, its absolute market share is ${pct} per cent.`,
    (ind, firm, mkt, pct) =>
      `Absolute market share for a ${ind} producer equals ${pct} per cent when its sales are ${firm} million euros in a ${mkt} million euro market.`,
    (ind, firm, mkt, pct) =>
      `A ${ind} producer recording ${firm} million euros of sales inside a ${mkt} million euro market holds a ${pct} per cent absolute market share.`,
    (ind, firm, mkt, pct) =>
      `For ${ind}, ${firm} million euros of producer sales in a ${mkt} million euro market imply an absolute share of ${pct} per cent.`,
  ];

  let n = 0;
  let fi = 0;
  let pi = 0;
  const firmRe =
    /^A firm with sales of ([\d.]+) million euros in a market of ([\d.]+) million euros holds a ([\d.]+) per cent absolute market share\.$/;
  const prodRe =
    /^If an? (.+?) producer sells ([\d.]+) million euros in a ([\d.]+) million euro market, its absolute market share is ([\d.]+) per cent\.?$/i;

  for (const c of cases) {
    for (let i = 0; i < c.statements.length; i++) {
      let m = c.statements[i].match(firmRe);
      if (m) {
        const frame = frames[fi % frames.length];
        fi++;
        if (fi % frames.length !== 1) {
          // keep first frame as-is occasionally; still rotate others
          c.statements[i] = frame(m[1], m[2], m[3]);
          n++;
        }
        continue;
      }
      m = c.statements[i].match(prodRe);
      if (m) {
        const frame = producerFrames[pi % producerFrames.length];
        pi++;
        if (pi % producerFrames.length !== 1) {
          c.statements[i] = frame(m[1], m[2], m[3], m[4]);
          n++;
        }
      }
    }
  }
  return n;
}

function patchCharmClones(cases) {
  // €9.99 charm-pricing lines that only swap the product noun
  const alts = [
    (prod) =>
      `Charm pricing of ${prod} at €9.99 belongs to the price element of the marketing mix, not to promotion alone.`,
    (prod) =>
      `Setting ${prod} at €9.99 is an example of psychological (charm) pricing within the price P.`,
    (prod) =>
      `A list price of €9.99 for ${prod} illustrates charm pricing as part of the price decision.`,
  ];
  const re =
    /^Charm pricing of (.+?) at €9\.99 is a promotional message and not part of the price element of the marketing mix\.$/;
  let n = 0;
  let k = 0;
  for (const c of cases) {
    for (let i = 0; i < c.statements.length; i++) {
      const m = c.statements[i].match(re);
      if (!m) continue;
      // Keep first as FALSE teaching claim; diversify later copies' wording while preserving FALSE meaning
      if (k === 0) {
        k++;
        continue;
      }
      const prod = m[1];
      // alternate FALSE framings (still false: charm pricing IS price, not "only promotion")
      const falseAlts = [
        `Charm pricing of ${prod} at €9.99 is treated only as advertising copy and never as a price decision.`,
        `Listing ${prod} at €9.99 means the firm has left the price element unused and relied only on promotion.`,
        `A €9.99 charm price for ${prod} is classified exclusively under promotion rather than the price mix element.`,
      ];
      c.statements[i] = falseAlts[(k - 1) % falseAlts.length];
      k++;
      n++;
    }
  }
  return n;
}

// --- 5.4 ---
{
  const p = "scripts/ch5-part-5.4.json";
  const cases = load(p);
  let n = diversifyForPrefixClones(cases);
  // TOC soft fix
  for (const c of cases) {
    if (c.case_id !== "CASE 5.4.57") continue;
    for (let i = 0; i < c.statements.length; i++) {
      if (
        /many people spend more money than they can afford because marketing and easy purchasing channels/i.test(
          c.statements[i],
        )
      ) {
        c.statements[i] =
          "For car-hire firms, spending beyond affordable limits under promotional pressure is one of the consumption risks that responsible businesses and consumers should recognise.";
        n++;
      }
    }
  }
  save(p, cases);
  console.log("5.4 diversify", n);
}

// --- 5.5 share wording ---
{
  const p = "scripts/ch5-part-5.5.json";
  const cases = load(p);
  const n = diversifyShareWording(cases);
  save(p, cases);
  console.log("5.5 share wording", n);
}

// --- 5.3 weak TOC / hotel slug ---
{
  const p = "scripts/ch5-part-5.3.json";
  const cases = load(p);
  let n = 0;
  for (const c of cases) {
    if (c.case_id !== "CASE 5.3.40") continue;
    for (let i = 0; i < c.statements.length; i++) {
      if (/Loyalty programmes at hotel loyalty programmes preserve complete customer anonymity/i.test(c.statements[i])) {
        c.statements[i] =
          "Under market orientation, a hotel shapes offers from guest preferences rather than pushing a standard product unchanged.";
        n++;
      }
    }
  }
  save(p, cases);
  console.log("5.3 toc", n);
}

// --- 5.7 charm clones ---
{
  const p = "scripts/ch5-part-5.7.json";
  if (fs.existsSync(p)) {
    const cases = load(p);
    const n = patchCharmClones(cases);
    save(p, cases);
    console.log("5.7 charm", n);
  }
}

console.log("ok");
