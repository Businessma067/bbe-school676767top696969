/**
 * Insert official nested book subtopics (###) into chapter .mjs sources.
 * Run: node scripts/insert-nested-subheads.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ch2 from "../economics-book/chapters/ch02.mjs";
import ch3 from "../economics-book/chapters/ch03.mjs";
import ch4 from "../economics-book/chapters/ch04.mjs";
import ch5 from "../economics-book/chapters/ch05.mjs";
import ch6 from "../economics-book/chapters/ch06.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chaptersDir = path.join(__dirname, "..", "economics-book", "chapters");

function sh(id, title) {
  return id ? { type: "subhead", id, title } : { type: "subhead", title };
}

function hasSubhead(blocks, id) {
  return blocks.some((b) => b.type === "subhead" && b.id === id);
}

function section(ch, id) {
  return ch.sections.find((s) => s.id === id);
}

function writeChapter(filename, ch) {
  const out = `export default ${JSON.stringify(ch, null, 2)};\n`;
  fs.writeFileSync(path.join(chaptersDir, filename), out, "utf8");
  console.log("updated", filename);
}

// ——— Chapter 2: 2.6.1–2.6.3 ———
{
  const s = section(ch2, "2.6");
  if (s && !hasSubhead(s.blocks, "2.6.1")) {
    const byTerm = (term) => (b) => b.type === "idea" && b.term === term;
    const byFormula = (label) => (b) => b.type === "formula" && b.label === label;
    const blocks = [...s.blocks];
    // Reorder idea blocks under their law headings if needed
    const market = blocks.find(byTerm("Market"));
    const supply = blocks.find(byTerm("Supply"));
    const demand = blocks.find(byTerm("Demand"));
    const ceteris = blocks.find(byTerm("Ceteris paribus"));
    const rest = blocks.filter(
      (b) =>
        b !== market &&
        b !== supply &&
        b !== demand &&
        b !== ceteris &&
        !(b.type === "p" && String(b.text || "").startsWith("Parents message")),
    );
    const intro = blocks.find((b) => b.type === "p" && String(b.text || "").startsWith("Parents message"));

    // Split rest around equilibrium formula
    const eqIdx = rest.findIndex(byFormula("Market equilibrium condition"));
    const beforeEq = eqIdx >= 0 ? rest.slice(0, eqIdx) : rest;
    const fromEq = eqIdx >= 0 ? rest.slice(eqIdx) : [];

    // beforeEq should be supply curve stuff then demand curve stuff
    const demandCurveIdx = beforeEq.findIndex(
      (b) => b.type === "p" && String(b.text || "").includes("demand curve"),
    );
    const supplyPart = demandCurveIdx >= 0 ? beforeEq.slice(0, demandCurveIdx) : beforeEq;
    const demandPart = demandCurveIdx >= 0 ? beforeEq.slice(demandCurveIdx) : [];

    s.blocks = [
      intro || { type: "p", text: "Buyers and sellers meet in a market and agree terms of exchange." },
      market,
      sh("2.6.1", "The law of supply"),
      supply,
      ceteris,
      ...supplyPart,
      sh("2.6.2", "The law of demand"),
      demand,
      ...demandPart,
      sh("2.6.3", "The market equilibrium"),
      ...fromEq,
    ].filter(Boolean);

    // Light style: open 2.6 with clearer explanation (keep tutoring example, less novelistic)
    if (s.blocks[0]?.type === "p") {
      s.blocks[0].text =
        "A market is where buyers and sellers agree the terms of exchange. Take online maths tutoring: at a low hourly rate many families want hours, but few skilled tutors bother to log on; at a very high rate tutors flood the platform, but fewer families book. Somewhere in the middle the hours people want line up with the hours tutors offer — that meeting point is the market at work.";
    }
  }
  writeChapter("ch02.mjs", ch2);
}

// ——— Chapter 3: optional GDP subhead under 3.2 (unnumbered, already may exist as prose) ———
{
  const s = section(ch3, "3.2");
  if (s && !s.blocks.some((b) => b.type === "subhead" && /GDP/i.test(b.title || ""))) {
    const gdpIdx = s.blocks.findIndex(
      (b) =>
        (b.type === "idea" && /GDP/i.test(b.term || "")) ||
        (b.type === "p" && /\bGDP\b/.test(b.text || "")),
    );
    if (gdpIdx >= 0) {
      s.blocks.splice(gdpIdx, 0, sh("", "GDP: definition and limitations"));
    }
  }
  writeChapter("ch03.mjs", ch3);
}

// ——— Chapter 4: funds subheads + 4.3.1–4.3.3 ———
{
  const s41 = section(ch4, "4.1");
  if (s41 && !s41.blocks.some((b) => b.type === "subhead" && /financial funds/i.test(b.title || ""))) {
    const financeIdx = s41.blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").includes("Finance for a sole trader"),
    );
    if (financeIdx >= 0) {
      s41.blocks.splice(financeIdx, 0, sh("", "Available financial funds for sole proprietors"));
    }
  }

  const s42 = section(ch4, "4.2");
  if (s42 && !s42.blocks.some((b) => b.type === "subhead" && /financial funds/i.test(b.title || ""))) {
    // Book places funds after general partnership setup; before limited partnership detail is OK,
    // or after unlimited liability discussion. Put before the general/limited contrast paragraph that mentions finance.
    const idx = s42.blocks.findIndex(
      (b) => b.type === "idea" && b.term === "Limited partnership",
    );
    if (idx >= 0) {
      s42.blocks.splice(
        idx,
        0,
        sh("", "Available financial funds for partnerships"),
        {
          type: "p",
          text:
            "Funding for partnerships works much like sole trading, but two or more partners can usually pool more savings and offer more private assets as collateral for loans. Each **general partner** remains **solely liable** for all debts of the business (**unlimited liability**). Internal finance still comes from retained profit left in the firm; external finance includes partners’ capital contributions, bank loans, overdrafts and trade credit.",
        },
      );
    }
  }

  const s43 = section(ch4, "4.3");
  if (s43 && !hasSubhead(s43.blocks, "4.3.1")) {
    const blocks = s43.blocks;
    const intro = blocks[0];
    const corp = blocks.find((b) => b.type === "idea" && /Corporation/i.test(b.term || ""));
    const limited = blocks.find((b) => b.type === "idea" && b.term === "Limited liability");
    const shareCap = blocks.find((b) => b.type === "idea" && b.term === "Share capital");
    const formula = blocks.find((b) => b.type === "formula");
    const separateP = blocks.find(
      (b) => b.type === "p" && String(b.text || "").startsWith("Separate person"),
    );
    const sharesP = blocks.find(
      (b) => b.type === "p" && String(b.text || "").startsWith("Shares can be bought"),
    );
    const namesP = blocks.find(
      (b) => b.type === "p" && String(b.text || "").startsWith("Names differ"),
    );
    const worked = blocks.find(
      (b) => b.type === "p" && String(b.text || "").startsWith("Worked:"),
    );

    // Soften opening toward clear explanation (keep SensorCo scene lightly)
    const newIntro = {
      type: "p",
      text:
        "A corporation is a business that is a **legal person** of its own: it can own assets, hire staff, sign contracts, sue and be sued in its own name. Owners hold **shares**; they need not manage day to day, and managers need not own shares. Setup is harder than for unincorporated forms, but shareholders’ liability is typically **limited** to the capital they invested. Three engineers building sensor modules often choose this shell when they need serious capital, outside investors, and a clear wall between company debts and private homes.",
    };

    s43.blocks = [
      newIntro,
      corp,
      sh("4.3.1", "Shareholders are not (necessarily) managers of the business"),
      separateP || {
        type: "p",
        text:
          "Shareholders provide share capital; they are neither obliged nor automatically entitled to manage day to day. Shareholders elect a **board of directors** to make major decisions and represent owners. The top executive is often called CEO; other roles may include CFO, COO, CIO, or CMO.",
      },
      limited,
      sh("4.3.2", "Available financial funds for corporations"),
      shareCap,
      formula,
      sharesP,
      sh("4.3.3", "Private Limited Companies"),
      namesP,
      worked,
    ].filter(Boolean);
  }

  writeChapter("ch04.mjs", ch4);
}

// ——— Chapter 5: 5.5.1–4, 5.7.1–5 ———
{
  const s55 = section(ch5, "5.5");
  if (s55 && !hasSubhead(s55.blocks, "5.5.1")) {
    const blocks = s55.blocks;
    const intro = blocks[0];
    const mr = blocks.find((b) => b.type === "idea" && b.term === "Market research");
    const primary = blocks.find((b) => b.type === "idea" && /Primary/i.test(b.term || ""));
    const secondary = blocks.find((b) => b.type === "idea" && /Secondary/i.test(b.term || ""));
    const mixP = blocks.find(
      (b) => b.type === "p" && String(b.text || "").includes("Qualitative research"),
    );
    const customerP = blocks.find(
      (b) => b.type === "p" && String(b.text || "").includes("Customer analysis"),
    );
    const size = blocks.find((b) => b.type === "idea" && /Market size/i.test(b.term || ""));
    const share = blocks.find((b) => b.type === "idea" && b.term === "Market share");
    const absF = blocks.find((b) => b.type === "formula" && /Absolute/i.test(b.label || ""));
    const relF = blocks.find((b) => b.type === "formula" && /Relative/i.test(b.label || ""));
    const measuresP = blocks.find(
      (b) => b.type === "p" && String(b.text || "").includes("Market potential"),
    );

    s55.blocks = [
      {
        type: "p",
        text:
          "Guesswork is expensive. Market research collects and interprets information about customers, rivals and the industry so marketing decisions rest on **structured evidence** rather than hope. GlassHarbor Cycles, for example, wants to know whether commuters will pay €45/month for a battery-swap add-on — street interviews, a short questionnaire and published city mobility statistics all feed that decision.",
      },
      mr,
      sh("5.5.1", "Primary sources"),
      primary,
      {
        type: "p",
        text:
          "Primary research gathers **original data** for the firm’s own questions — surveys, interviews, observation or experiments, sometimes via a research institute. It is tailored and specific, but often costly in time, money and design skill. Use it when secondary sources cannot answer the exact concept, price or satisfaction question you face.",
      },
      sh("5.5.2", "Secondary sources"),
      secondary,
      {
        type: "p",
        text:
          "Secondary research uses **existing data** collected by others — government statistics, trade association reports, published studies. It is usually cheaper and faster, but more general and not built for the firm’s exact problem. A free mobility report can size a market yet still leave willingness-to-pay unanswered.",
      },
      mixP,
      sh("5.5.3", "Customer analysis"),
      customerP,
      sh("5.5.4", "Market measures"),
      size,
      share,
      absF,
      relF,
      measuresP,
    ].filter(Boolean);
  }

  const s57 = section(ch5, "5.7");
  if (s57 && !hasSubhead(s57.blocks, "5.7.1")) {
    const blocks = s57.blocks;
    const idxProduct = blocks.findIndex((b) => b.type === "idea" && /Product \(as a mix/i.test(b.term || ""));
    const idxPrice = blocks.findIndex((b) => b.type === "idea" && b.term === "Price");
    const idxPlace = blocks.findIndex((b) => b.type === "idea" && /Place/i.test(b.term || ""));
    const idxPromo = blocks.findIndex((b) => b.type === "idea" && b.term === "Promotion");
    const idxMix = blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").includes("harmonised mix"),
    );

    if (idxProduct >= 0 && idxPrice > idxProduct) {
      const head = blocks.slice(0, idxProduct);
      const product = blocks.slice(idxProduct, idxPrice);
      const price = blocks.slice(idxPrice, idxPlace >= 0 ? idxPlace : idxPromo);
      const place =
        idxPlace >= 0 ? blocks.slice(idxPlace, idxPromo >= 0 ? idxPromo : idxMix) : [];
      const promo =
        idxPromo >= 0 ? blocks.slice(idxPromo, idxMix >= 0 ? idxMix : blocks.length) : [];
      const mix = idxMix >= 0 ? blocks.slice(idxMix) : [];

      // Soften mix intro
      if (head[0]?.type === "p") {
        head[0].text =
          "The **marketing mix** is a harmonised blend of tools that meets the needs of the target market. Classically it is the **four Ps**: **product**, **price**, **place** and **promotion**. If price screams luxury while the sales channel is a discount warehouse — or promotion promises glove-friendly numerals while the product ships tiny markings — customers will not know what to believe. The craft is to set all four so they play in tune.";
      }

      s57.blocks = [
        ...head,
        sh("5.7.1", "Product"),
        ...product,
        sh("5.7.2", "Price"),
        ...price,
        sh("5.7.3", "Place"),
        ...place,
        sh("5.7.4", "Promotion"),
        ...promo,
        sh("5.7.5", "Mixing the four Ps for a harmonised blend"),
        ...mix,
      ];
    }
  }

  writeChapter("ch05.mjs", ch5);
}

// ——— Chapter 6: 6.1 classification heads, 6.2.1–2, 6.5.1–3 ———
{
  const s61 = section(ch6, "6.1");
  if (s61 && !s61.blocks.some((b) => b.type === "subhead")) {
    const assetClassIdx = s61.blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").includes("Fixed** or **non-current"),
    );
    const liabIdx = s61.blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").startsWith("Liabilities follow"),
    );
    if (assetClassIdx >= 0) {
      s61.blocks.splice(assetClassIdx, 0, sh("", "Fixed assets, current assets and intangibles"));
    }
    // liabIdx shifts if we inserted before it
    const liabIdx2 = s61.blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").startsWith("Liabilities follow"),
    );
    if (liabIdx2 >= 0) {
      s61.blocks.splice(liabIdx2, 0, sh("", "Liabilities and equity"));
    }
  }

  const s62 = section(ch6, "6.2");
  if (s62 && !hasSubhead(s62.blocks, "6.2.1")) {
    const blocks = s62.blocks;
    const idxPl = blocks.findIndex(
      (b) => b.type === "idea" && /Income statement|profit and loss/i.test(b.term || ""),
    );
    const idxCf = blocks.findIndex(
      (b) => b.type === "idea" && /Cash flow statement/i.test(b.term || ""),
    );
    if (idxPl >= 0 && idxCf > idxPl) {
      const head = blocks.slice(0, idxPl);
      const pl = blocks.slice(idxPl, idxCf);
      const cf = blocks.slice(idxCf);
      if (head[0]?.type === "p") {
        head[0].text =
          "The balance sheet alone is not enough. It shows assets, liabilities and equity at a **point in time**, but not total sales, production costs or which cash movements came from operations versus a new loan. The **financial statement** of a business therefore combines the balance sheet, the **income statement** (profit and loss account) and the **cash flow statement** — together they reveal performance over a **period**.";
      }
      s62.blocks = [
        ...head,
        sh("6.2.1", "Profit and loss account"),
        ...pl,
        sh("6.2.2", "Cash flow statement"),
        ...cf,
      ];
    }
  }

  const s65 = section(ch6, "6.5");
  if (s65 && !hasSubhead(s65.blocks, "6.5.1")) {
    const blocks = s65.blocks;
    const idxLiq = blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").startsWith("Liquidity starts"),
    );
    const idxProf = blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").startsWith("Profitability starts"),
    );
    const idxEff = blocks.findIndex(
      (b) => b.type === "p" && String(b.text || "").startsWith("Efficiency asks"),
    );
    if (idxLiq >= 0 && idxProf > idxLiq && idxEff > idxProf) {
      const head = blocks.slice(0, idxLiq);
      const liq = blocks.slice(idxLiq, idxProf);
      const prof = blocks.slice(idxProf, idxEff);
      const rest = blocks.slice(idxEff);
      // Split efficiency from gearing: gearing paragraph starts with **Gearing**
      const gearIdx = rest.findIndex(
        (b) => b.type === "p" && String(b.text || "").includes("**Gearing**"),
      );
      const eff = gearIdx >= 0 ? rest.slice(0, gearIdx) : rest;
      const afterEff = gearIdx >= 0 ? rest.slice(gearIdx) : [];

      s65.blocks = [
        ...head,
        sh("6.5.1", "Liquidity"),
        ...liq,
        sh("6.5.2", "Profitability"),
        ...prof,
        sh("6.5.3", "Financial efficiency"),
        ...eff,
        ...afterEff,
      ];
    }
  }

  writeChapter("ch06.mjs", ch6);
}

console.log("done");
