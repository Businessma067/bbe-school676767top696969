/**
 * Rebuild Mock Exam 4 — fresh econ bank + new CVP chart MOCK; Glacier English;
 * hard unused math bank at Mock 1–3 exam difficulty (no elementary plug-ins).
 * Order: economics → english (Doomsday Glacier T.12) → math.
 *
 * Run: node scripts/run-rebuild-mock-4.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";
import { scrubKatexDeep } from "../src/lib/scrub-katex.ts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-4-sourced.json");

function loadEcon(ch: number) {
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, `economics-cases-ch${ch}-subtopics.json`), "utf8"),
  ) as Array<Record<string, unknown>>;
}

function byId(ch: number, caseId: string) {
  const t = loadEcon(ch).find((c) => c.case_id === caseId);
  if (!t) throw new Error(`Econ ${caseId} missing in ch${ch}`);
  return t;
}

function splitBalanceSheet(context: string): string {
  if (!/\|\s*\*\*ASSETS\*\*\s*\|/.test(context)) return context;
  const lines = context.split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (/^\|\s*€ in thousands\s*\|\s*Amount\s*\|/i.test(line)) {
      const table: string[] = [];
      while (i < lines.length && (lines[i]!.includes("|") || lines[i]!.trim() === "")) {
        if (lines[i]!.includes("|")) table.push(lines[i]!);
        else if (table.length) break;
        i++;
      }
      const rows = table
        .filter((r) => !/^\|\s*-+/.test(r))
        .map((r) =>
          r
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((c) => c.trim()),
        );
      const data = rows.slice(1);
      const sections: Record<string, string[][]> = { ASSETS: [], EQUITY: [], LIABILITIES: [] };
      let cur: keyof typeof sections | null = null;
      for (const [label, amount = ""] of data) {
        const key = label.replace(/\*\*/g, "").trim().toUpperCase();
        if (key === "ASSETS" || key === "EQUITY" || key === "LIABILITIES") {
          cur = key as keyof typeof sections;
          continue;
        }
        if (!cur) continue;
        if (/^total equity and liabilities$/i.test(label.replace(/\*\*/g, "").trim())) continue;
        sections[cur].push([label, amount]);
      }
      const emit = (title: string, sectionRows: string[][]) => {
        if (!sectionRows.length) return;
        out.push("");
        out.push(`**${title}**`);
        out.push("");
        out.push("| Item (€ thousands) | Amount |");
        out.push("| --- | ---: |");
        for (const [lab, amt] of sectionRows) {
          out.push(`| ${lab.replace(/\*\*/g, "")} | ${amt.replace(/\*\*/g, "")} |`);
        }
      };
      emit("Assets", sections.ASSETS);
      emit("Equity", sections.EQUITY);
      emit("Liabilities", sections.LIABILITIES);
      out.push("");
      continue;
    }
    out.push(line);
    i++;
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

function mapEcon(t: Record<string, unknown>) {
  return {
    case_id: t.case_id,
    title: t.title,
    subsection: t.subsection,
    chapter: Number(String(t.case_id).match(/CASE (\d+)/)?.[1] ?? 0),
    context: splitBalanceSheet(String(t.context ?? "")),
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    difficulty_level: t.difficulty_level,
  };
}

/**
 * NEW chart engine (not P/E, not bonds/YTM, not rights, not WC/ROCE):
 * contribution, break-even, margin of safety, degree of operating leverage.
 */
function buildCvpBreakEvenCase() {
  // p=48, vc=30 → cm=18; FC=54,000 → BE = 54000/18 = 3000 units
  // Monthly units: 210+195+230+250+280+310+340+325+290+270+255+245 = 3200
  // MoS = (3200-3000)/3200 = 200/3200 = 6.25%
  // Profit at 3200: 3200*18 - 54000 = 57600-54000 = 3600
  // DOL = (Q*CM)/(Q*CM-FC) = 57600/3600 = 16
  // If Q rises 5% → 3360; profit = 3360*18-54000 = 6480; rise = 6480/3600-1 = 80%

  const context = `NordTrail GmbH sells one standardised hiking jacket. Selling price is EUR 48 per unit; variable cost is EUR 30 per unit. Annual fixed costs are EUR 54,000. The chart records units sold each month; treat the twelve monthly figures as the full year’s volume.

[[CHART type="line" title="NordTrail GmbH jackets sold (units)"]]
Jan | Units=210
Feb | Units=195
Mar | Units=230
Apr | Units=250
May | Units=280
Jun | Units=310
Jul | Units=340
Aug | Units=325
Sep | Units=290
Oct | Units=270
Nov | Units=255
Dec | Units=245
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Selling price per jacket | EUR 48 |
| Variable cost per jacket | EUR 30 |
| Annual fixed costs | EUR 54,000 |

Evaluate the following economic assertions:`;

  const statements = [
    "Contribution per jacket is strictly greater than EUR 15.",
    "The annual break-even volume is strictly greater than 3,200 jackets.",
    "Using the chart year’s total volume, the margin of safety is strictly less than 10% of that volume.",
    "At the chart year’s total volume, the degree of operating leverage exceeds 12.",
    "If volume next year rises by exactly 5% from the chart total while price, unit variable cost and fixed costs stay unchanged, operating profit rises by less than 40%.",
  ];

  // A: CM=18>15 → True
  // B: BE=3000, not >3200 → False
  // C: MoS=6.25%<10% → True
  // D: DOL=16>12 → True
  // E: profit rise 80%, not <40% → False
  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Contribution per unit is price minus variable cost. Keep the euro amounts in prose:

$$
\\text{Contribution}=48-30=18
$$

$$
18>15
$$

So the statement is True.`,

    `**B.** → False

Break-even volume divides fixed costs by contribution per unit:

$$
\\text{Break-even}=\\dfrac{54{,}000}{18}=3{,}000
$$

$$
3{,}000\\ngtr 3{,}200
$$

So the statement is False.`,

    `**C.** → True

Sum the chart months:

$$
210+195+230+250+280+310+340+325+290+270+255+245=3{,}200
$$

Margin of safety as a share of actual volume:

$$
\\dfrac{3{,}200-3{,}000}{3{,}200}=\\dfrac{200}{3{,}200}=0.0625=6.25\\%
$$

$$
6.25\\%<10\\%
$$

So the statement is True.`,

    `**D.** → True

At $Q=3{,}200$:

$$
Q\\cdot\\mathrm{CM}=3{,}200\\cdot 18=57{,}600
$$

$$
\\text{Operating profit}=57{,}600-54{,}000=3{,}600
$$

$$
\\mathrm{DOL}=\\dfrac{57{,}600}{3{,}600}=16>12
$$

So the statement is True.`,

    `**E.** → False

A $5\\%$ volume rise gives $Q=3{,}200\\cdot 1.05=3{,}360$. New profit:

$$
3{,}360\\cdot 18-54{,}000=60{,}480-54{,}000=6{,}480
$$

$$
\\dfrac{6{,}480}{3{,}600}-1=0.80=80\\%
$$

That is not less than $40\\%$. (Equivalently: $\\mathrm{DOL}\\times 5\\%=80\\%$.)

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.CVP",
    title: "Contribution, Break-Even, Margin of Safety and Operating Leverage",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}


function mapMath(chapter: number, t: Record<string, unknown>) {
  return {
    case_id: t.case_id,
    id: t.id ?? t.case_id,
    title: t.title ?? t.case_id,
    chapter,
    subsection: t.subsection ?? String(chapter),
    context: String(t.context ?? "")
      .replace(/\n?\s*[●•]\s*\([a-e]\)\s*Find[\s\S]*$/i, "")
      .replace(/\n?\s*\([a-e]\)\s*Find[\s\S]*$/i, "")
      .trim(),
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    difficulty_level: t.difficulty_level ?? "",
    solution_overview: t.solution_overview ?? "",
    figure: t.figure || undefined,
    tables_markdown: t.tables_markdown || undefined,
  };
}

function buildEnglish() {
  const texts = JSON.parse(fs.readFileSync(path.join(ROOT, "english/texts.json"), "utf8"));
  const grammar = JSON.parse(fs.readFileSync(path.join(ROOT, "english/grammar.json"), "utf8"));
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.12");
  if (!sub?.passage) throw new Error("Doomsday Glacier passage t.12 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.12.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.12.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.12.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.12.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.12.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.12.19", kind: "grammar", withPassage: false, src: "grammar" },
  ];

  const stemByKind: Record<string, string> = {
    text: "Based on the passage, decide whether each statement is true or false.",
    grammar: "Decide whether each sentence is grammatically correct as written.",
    vocabulary: "Decide whether each vocabulary claim is true or false.",
  };

  const tasks = order.map((o) => {
    const bank = o.src === "texts" ? texts.tasks : grammar.tasks;
    const t = bank.find((x: { case_id: string }) => x.case_id === o.id);
    if (!t) throw new Error(`Missing English task ${o.id}`);
    let context = stemByKind[o.kind]!;
    if (o.id === "ENG T.12.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "Thwaites holds enough ice to raise global sea levels by more than half a metre if it collapsed entirely.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.12.08" || o.id === "ENG T.12.09") {
      context =
        "Based on the passage, decide whether each given meaning matches the word's actual use.";
    }
    return {
      case_id: t.case_id,
      id: t.id ?? t.case_id,
      title: t.title ?? t.case_id,
      subsection: t.subsection,
      context,
      statements: t.statements,
      answer_key: t.answer_key,
      tactical_explanations: t.tactical_explanations,
      kind: o.kind,
      with_passage: o.withPassage,
      difficulty_level: t.difficulty_level ?? "",
    };
  });

  return {
    passage: sub.passage,
    passageTitle: sub.title,
    tasks,
  };
}


// ---- assemble ----
const economics = [
  mapEcon(byId(2, "CASE 2.6.14")),
  mapEcon(byId(2, "CASE 2.3.11")),
  mapEcon(byId(3, "CASE 3.2.11")),
  mapEcon(byId(3, "CASE 3.4.03")),
  mapEcon(byId(4, "CASE 4.3.49")),
  mapEcon(byId(4, "CASE 4.5.02")),
  mapEcon(byId(5, "CASE 5.4.14")),
  mapEcon(byId(6, "CASE 6.5.013")),
  mapEcon(byId(6, "CASE 6.2.013")),
  buildCvpBreakEvenCase(),
];

const english = buildEnglish();

const allMath = await loadAllMathChapterTasks();
function takeMath(caseId: string, chapter: number) {
  const chapterBank = allMath.find((c) => c.num === chapter);
  if (!chapterBank) throw new Error(`Missing math chapter ${chapter}`);
  const t = chapterBank.tasks.find((x) => x.case_id === caseId);
  if (!t) throw new Error(`Missing math ${caseId} in chapter ${chapter}`);
  const mapped = mapMath(chapter, t as unknown as Record<string, unknown>);
  const usd = (s: string) => s.replace(/\\\$/g, "USD ");

  if (caseId === "MATH 1.107") {
    // Truth table once in overview (not under letters) — same pattern as Mock 3 logic.
    const table = `**Truth table of valid assignments.**

Write $P,Q,R,S,T$ for Petra, Quinn, Ravi, Sana, Theo.

| $P$ | $Q$ | $R$ | $S$ | $T$ | Valid? |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 1 | 1 | yes |
| 0 | * | * | * | * | no (rules (4) and (6) force $P$) |
| 1 | 1 | * | * | * | no ($P\\Rightarrow\\neg Q$ fails) |
| 1 | 0 | 1 | * | 1 | no ($T\\Rightarrow\\neg R$ fails) |
| 1 | 0 | 0 | 0 | 1 | no ($R\\lor S$ fails) |

Exactly one valid assignment survives: Petra, Sana, and Theo review; Quinn and Ravi do not.`;
    const ov = String(mapped.solution_overview || "").trim();
    mapped.solution_overview = ov.includes("| $P$ |")
      ? ov
      : `${ov}\n\n${table}`;
  }

  if (caseId === "MATH 11.56") {
    mapped.context = `An orchard's standalone timber value is modeled by $P(t)=3000(t+4)^{2}$ dollars. The continuous interest rate is $9\\%$ per year.

Management wants the optimal harvest time, confirmation that it is a present-value maximum, and the sensitivity of that optimal time to the interest rate.`;
    mapped.statements = (mapped.statements as string[]).map(usd);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(usd);
    if (mapped.solution_overview) mapped.solution_overview = usd(String(mapped.solution_overview));
  }

  if (caseId === "MATH 5.62") {
    mapped.statements = (mapped.statements as string[]).map(usd);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(usd);
    if (mapped.solution_overview) mapped.solution_overview = usd(String(mapped.solution_overview));
    mapped.context = `Decide whether each statement is true or false. The five claims are independent word problems (mixture, ages, linear systems, ticket revenue, and protein blend).`;
  }

  if (caseId === "MATH 2.13") {
    mapped.context = `Decide whether each algebraic identity / simplification claim is true or false. The claims are independent; none of them is a plug-in numerical check.`;
    if (!String(mapped.solution_overview || "").trim()) {
      mapped.solution_overview =
        "Expand or rewrite each proposed identity carefully, check domain restrictions, and compare both sides symbolically — do not substitute a single lucky number and stop.";
    }
  }

  if (caseId === "MATH 6.55") {
    mapped.context = `Decide whether each inequality claim is true or false. Claims state full solution sets; verify every boundary and every compound piece.`;
  }

  if (caseId === "MATH 10.3.1") {
    mapped.context = `A fund starts at $A=1000$, grows at continuous force $\\alpha=0.05$ until $t=\\tau$ with $\\alpha\\tau=\\ln 2$, then continues at force $\\beta=0.025$. The target level is $M=4A$.

Decide whether each statement is true or false.`;
  }

  if (caseId === "MATH 13.52") {
    mapped.context = `A vaccine trial has lab technicians classify antibody responses across $35$ samples.

Tech A is a first-year analyst (probability $0.38$ of correctly classifying a sample).
Tech B is a lead analyst (probability $0.94$).

To pass certification, a technician must correctly classify at least $30$ of the $35$ samples.

(Scoring scheme used in one claim: $+5$ points for each correct classification, $-2$ points for each miss.)`;
  }

  return mapped;
}

/**
 * Hard exam-bank math — same difficulty bar as Mocks 1–3, different knowledge.
 * No elementary plug-in algebra; unused IDs only.
 */
const math = [
  takeMath("MATH 1.107", 1),
  takeMath("MATH 2.13", 2),
  takeMath("MATH 11.56", 3),
  takeMath("MATH 4.158", 4),
  takeMath("MATH 5.62", 5),
  takeMath("MATH 6.55", 6),
  takeMath("MATH 7.E04", 7),
  takeMath("MATH 8.62", 8),
  takeMath("MATH 9.46", 9),
  takeMath("MATH 10.3.1", 10),
  takeMath("MATH 11.58", 11),
  takeMath("MATH 12.32", 12),
  takeMath("MATH 13.52", 13),
];

function audit(label: string, tasks: Array<Record<string, unknown>>) {
  for (const t of tasks) {
    const s = (t.statements as string[]) || [];
    const a = (t.answer_key as boolean[]) || [];
    const e = (t.tactical_explanations as string[]) || [];
    if (s.length !== 5 || a.length !== 5) {
      console.error("LEN", label, t.case_id, { s: s.length, a: a.length, e: e.length });
    }
    if (!t.context || !String(t.context).trim()) console.error("NOCTX", t.case_id);
    for (let i = 0; i < 5; i++) {
      if (!s[i]?.trim()) console.error("EMPTYSTMT", t.case_id, i);
      if (!e[i]?.trim()) console.error("EMPTYEXPL", t.case_id, i);
    }
  }
}
audit("econ", economics);
audit("eng", english.tasks);
audit("math", math);

const bundle = scrubKatexDeep({ economics, english, math }) as {
  economics: typeof economics;
  english: typeof english;
  math: typeof math;
};
fs.writeFileSync(outPath, JSON.stringify(bundle, null, 2) + "\n");
console.log(
  "Wrote",
  outPath,
  "counts",
  economics.length,
  english.tasks.length,
  math.length,
  "total",
  economics.length + english.tasks.length + math.length,
);
console.log("econ ids", economics.map((t) => t.case_id).join(", "));
console.log(
  "eng ids",
  english.tasks.map((t) => `${t.case_id}${t.with_passage ? "+P" : ""}`).join(", "),
);
console.log("math ids", math.map((t) => t.case_id).join(", "));
