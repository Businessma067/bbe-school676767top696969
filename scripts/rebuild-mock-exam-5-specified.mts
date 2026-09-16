/**
 * Rebuild Mock Exam 5 — DCF econ chart + Octopus English + deep custom / bank math.
 * Fully different case IDs and themes from Mocks 1–4.
 * Order: economics → english (Alien Mind / Octopus T.14) → math.
 *
 * Run: node scripts/run-rebuild-mock-5.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";
import { scrubKatexDeep } from "../src/lib/scrub-katex.ts";
import {
  buildMathQ22Chests,
  buildMathQ23Radical,
  buildMathQ25Pipes,
  buildMathQ26Traffic,
  buildMathQ28Throw,
  buildMathQ30Cubic,
  buildMathQ31Growth,
  buildMathQ32Marginal,
  buildMathQ33Urns,
  buildMathQ34QC,
} from "./mock5-math-customs.mts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-5-sourced.json");

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
 * NEW chart engine (not CVP, not P/E stock, not rights issue):
 * undiscounted payback and a simple NPV check from a cash-flow chart.
 */
function buildDcfPaybackCase() {
  // Outlay 100 at t=0. Inflows: Y1=25, Y2=30, Y3=35, Y4=40 → cumulative 25,55,90,130
  // Undiscounted payback between Y3 and Y4: need 10 more after 90 → 10/40 = 0.25 → 3.25 years
  // NPV at 10%: -100 + 25/1.1 + 30/1.21 + 35/1.331 + 40/1.4641
  // = -100 + 22.727 + 24.793 + 26.296 + 27.320 = 1.136 > 0
  // Sum of inflows = 130 > 100

  const context = `HarborLink AG is evaluating a four-year logistics upgrade. The project requires an immediate cash outlay of EUR 100,000 at $t=0$. Operating cash inflows arrive at each year-end as shown in the chart (figures already in thousands of euros).

[[CHART type="bar" title="HarborLink upgrade — year-end cash inflows (EUR thousands)"]]
Year 1 | Inflow=25
Year 2 | Inflow=30
Year 3 | Inflow=35
Year 4 | Inflow=40
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Initial outlay at $t=0$ | EUR 100,000 |
| Discount rate (for NPV) | 10% per year |

Treat chart inflows as thousands of euros (so Year 1 contributes EUR 25,000, and so on). Evaluate the following economic assertions:`;

  const statements = [
    "The four chart inflows sum to more than EUR 120,000.",
    "Undiscounted payback occurs strictly before the end of Year 3.",
    "Undiscounted payback is strictly between 3 and 3.5 years.",
    "At a 10% discount rate, project NPV is positive.",
    "Discounting every inflow at 10% leaves a present-value total of inflows strictly below the EUR 100,000 outlay.",
  ];

  // A: 130k > 120k True
  // B: after Y3 cumulative 90 < 100, so not before end Y3 False
  // C: 3 + 10/40 = 3.25 ∈ (3, 3.5) True
  // D: NPV ≈ +1.14k > 0 True
  // E: PV inflows ≈ 101.14 > 100 False

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Sum the chart inflows (thousands):

$$
25+30+35+40=130
$$

In euros that is EUR 130,000, which exceeds EUR 120,000.

So the statement is True.`,

    `**B.** → False

Cumulative undiscounted inflows:

$$
25,\\quad 25+30=55,\\quad 55+35=90,\\quad 90+40=130
$$

After Year 3 the project has recovered only EUR 90,000 of the EUR 100,000 outlay, so payback has not yet occurred by the end of Year 3.

So the statement is False.`,

    `**C.** → True

After Year 3 one still needs EUR 10,000. Year 4 contributes EUR 40,000, so the fractional year is

$$
\\dfrac{10}{40}=0.25
$$

Payback time:

$$
3+0.25=3.25\\in(3,\\,3.5)
$$

So the statement is True.`,

    `**D.** → True

NPV at 10% (working in thousands of euros):

$$
-100+\\dfrac{25}{1.1}+\\dfrac{30}{1.1^{2}}+\\dfrac{35}{1.1^{3}}+\\dfrac{40}{1.1^{4}}
$$

$$
\\approx -100+22.727+24.793+26.296+27.321=+1.137>0
$$

So the statement is True.`,

    `**E.** → False

The present value of the four inflows is about EUR 101,137, which is **above** the EUR 100,000 outlay (that is why NPV is positive).

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.DCF",
    title: "Project cash flows — payback and NPV from a chart",
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.14");
  if (!sub?.passage) throw new Error("Octopus / Alien Mind passage t.14 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.14.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.14.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.14.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.14.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.14.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.14.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.14.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "An octopus can change colour, pattern and even the texture of its skin within a fraction of a second.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.14.08" || o.id === "ENG T.14.09") {
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

/** Hard absolute / radical inequalities — custom (not mock3/4 ineq banks). */
function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false. Check every boundary and every compound piece carefully.`;

  const statements = [
    "The solution set of $|x-3|+|x+1|\\le 8$ is exactly $[-3,5]$.",
    "The solution set of $\\sqrt{x+2}\\ge x$ is exactly $[0,2]$.",
    "Every $x\\in(0,1)$ satisfies $\\dfrac{x-4}{x+1}<0$.",
    "The inequality $x^{2}-5x+6>0$ holds on $(-\\infty,2)\\cup(3,+\\infty)$.",
    "The system $|x|\\le 2$ and $x>0$ has exactly two integer solutions.",
  ];

  // A: critical -1,3. On (-∞,-1): -(x-3)-(x+1)= -x+3-x-1=2-2x ≤8 always for x≤-1? Wait
  // |x-3|+|x+1|: for x≤-1: (3-x)+(-1-x)=2-2x; =8 ⇒ 2-2x=8 ⇒ -2x=6 ⇒ x=-3. On [-1,3]: (3-x)+(x+1)=4 ≤8 always. On x≥3: (x-3)+(x+1)=2x-2=8 ⇒ x=5. So [-3,5] True.
  // B: domain x≥-2; square on x≥0: x+2≥x^2 ⇒ x^2-x-2≤0 ⇒ (x-2)(x+1)≤0 ⇒ x∈[-1,2], intersect x≥0 → [0,2]. Also need check (-2,0): √(x+2)≥x always since RHS negative. So solution is [-2,2], NOT [0,2]. False.
  // C: (x-4)/(x+1)<0 → roots -1,4; negative on (-1,4). (0,1) subset → True
  // D: (x-2)(x-3)>0 → (-∞,2)∪(3,∞) True
  // E: |x|≤2 and x>0 → (0,2]; integers 1,2 — exactly two True

  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

Critical points $x=-1$ and $x=3$. Piecewise:

- $x\\le -1$: $|x-3|+|x+1|=2-2x\\le 8\\Rightarrow x\\ge -3$, so $[-3,-1]$;
- $-1\\le x\\le 3$: sum equals $4\\le 8$ throughout;
- $x\\ge 3$: $2x-2\\le 8\\Rightarrow x\\le 5$.

Union: $[-3,5]$.

So the statement is True.`,

    `**B.** → False

Domain $x\\ge -2$. For $x\\in[-2,0)$ the right-hand side is negative while the square root is nonnegative, so the inequality holds on all of $[-2,0)$. On $x\\ge 0$ squaring yields $x\\in[0,2]$. Full solution $[-2,2]$, not $[0,2]$.

So the statement is False.`,

    `**C.** → True

$$
\\dfrac{x-4}{x+1}<0
$$

on the open interval $(-1,4)$. Every point of $(0,1)$ lies in that set.

So the statement is True.`,

    `**D.** → True

$$
x^{2}-5x+6=(x-2)(x-3)>0
$$

precisely on $(-\\infty,2)\\cup(3,+\\infty)$.

So the statement is True.`,

    `**E.** → True

$|x|\\le 2$ and $x>0$ give $(0,2]$. The integers there are $1$ and $2$ — exactly two.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.ABS5",
    id: "MATH 6.MOCK.ABS5",
    title: "Absolute, radical, and sign inequalities",
    chapter: 6,
    subsection: "6.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Absolute sum → $[-3,5]$. Radical inequality → $[-2,2]$ (claim too small). Rational sign on $(-1,4)$. Quadratic sign as factored. $|x|\\le 2$, $x>0$ → integers $\\{1,2\\}$.`,
  };
}

// ---- assemble ----
const economics = [
  mapEcon(byId(2, "CASE 2.6.23")),
  mapEcon(byId(2, "CASE 2.5.15")),
  mapEcon(byId(3, "CASE 3.5.07")),
  mapEcon(byId(3, "CASE 3.5.15")),
  mapEcon(byId(4, "CASE 4.5.13")),
  mapEcon(byId(4, "CASE 4.6.01")),
  mapEcon(byId(5, "CASE 5.4.02")),
  mapEcon(byId(6, "CASE 6.2.028")),
  mapEcon(byId(6, "CASE 6.3.009")),
  buildDcfPaybackCase(),
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

  if (caseId === "MATH 11.133") {
    mapped.context = usd(String(mapped.context || ""));
    mapped.statements = (mapped.statements as string[]).map(usd);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(usd);
    if (mapped.solution_overview) mapped.solution_overview = usd(String(mapped.solution_overview));
  }

  if (caseId === "MATH 8.102") {
    mapped.context = `A power model $y=A x^{p}$ is calibrated from data. Decide whether each claim about exponents, scaling, and fitted values is true or false.`;
  }

  return mapped;
}

const math = [
  buildMathQ22Chests(),
  buildMathQ23Radical(),
  takeMath("MATH 11.133", 3),
  buildMathQ25Pipes(),
  buildMathQ26Traffic(),
  buildMathQ27Ineq(),
  buildMathQ28Throw(),
  takeMath("MATH 8.102", 8),
  buildMathQ30Cubic(),
  buildMathQ31Growth(),
  buildMathQ32Marginal(),
  buildMathQ33Urns(),
  buildMathQ34QC(),
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
