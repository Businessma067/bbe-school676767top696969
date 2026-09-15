/**
 * Rebuild Mock Exam 2 from the user-specified bank list + generated tasks.
 * Order: economics → english (Shifting Anatomy) → math.
 *
 * Run: node --import ./scripts/jiti-mock-runner.mjs scripts/rebuild-mock-exam-2-specified.mts
 * Or:  node scripts/run-rebuild-mock-2.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-2-sourced.json");

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

function byIndex(ch: number, n: number) {
  const d = loadEcon(ch);
  const t = d[n - 1];
  if (!t) throw new Error(`Econ ch${ch} #${n} missing`);
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
  let context = splitBalanceSheet(String(t.context ?? ""));
  if (t.case_id === "CASE 2.4.24") {
    context =
      "Prices in a supermarket are all labelled in euros. Evaluate money's unit-of-account function. Evaluate the following economic assertions:\n";
  }
  return {
    case_id: t.case_id,
    title: t.title,
    subsection: t.subsection,
    chapter: Number(String(t.case_id).match(/CASE (\d+)/)?.[1] ?? 0),
    context,
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    difficulty_level: t.difficulty_level,
  };
}

/** Stock chart + bonds / rates / monetary policy; keep 1–2 share-property claims. */
function buildStockBondsRatesCase() {
  const context = `LakeForge AG is listed on the Vienna Stock Exchange. At the latest closing price the company has 8 million shares outstanding. Earnings for the last financial year were €9.6 million, and 2.0 million shares changed hands on the exchange over the same year.

Separately, LakeForge also has a 4-year corporate bond outstanding with face value €1,000, annual coupon 3.0%, and current market yield to maturity 4.5%. The central bank’s main refinancing rate is 3.75%.

[[CHART type="line" title="LakeForge AG closing share price (€)"]]
Jan | Price=11.20
Feb | Price=11.80
Mar | Price=12.40
Apr | Price=12.10
May | Price=13.00
Jun | Price=13.60
Jul | Price=14.20
Aug | Price=13.90
Sep | Price=14.80
Oct | Price=15.40
Nov | Price=16.10
Dec | Price=16.80
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Closing share price (Dec) | €16.80 |
| Shares outstanding | 8,000,000 |
| Annual earnings | €9,600,000 |
| Annual shares traded | 2,000,000 |
| Bond face / coupon / YTM | €1,000 · 3.0% · 4.5% |
| Policy rate | 3.75% |

Evaluate the following economic assertions:`;

  // A share property: ordinary shares are residual claims / limited liability style — True
  // B market cap Dec = 16.80 * 8e6 = 134.4m > 140? False
  // C PE = 16.80 / (9.6/8) = 16.80/1.20 = 14.0, claim > 15 → False
  // D bond trading below par because coupon 3% < YTM 4.5% → True
  // E if CB raises policy rate, existing fixed-coupon bond market prices tend to fall (rates↑ → prices↓) → True
  // Wait need mix T/F. Recalibrate:
  // A True (share residual claim property)
  // B False (market cap not > 140)
  // C False (PE not > 15)
  // D True (discount bond)
  // E False: claim "higher policy rate raises the market price of the existing 3% coupon bond" → False

  const statements = [
    "An ordinary LakeForge share is a residual ownership claim: shareholders are paid after creditors such as bondholders.",
    "At the December close, LakeForge's market capitalisation exceeds €140 million.",
    "The price–earnings ratio at the December close exceeds 15.",
    "Because the bond’s coupon rate is below its yield to maturity, the bond trades at a discount to face value.",
    "If the central bank raises the main refinancing rate, the market price of LakeForge’s existing fixed-coupon bond is expected to rise.",
  ];

  const answer_key = [true, false, false, true, false];

  const tactical_explanations = [
    `Shareholders own the residual claim on the firm. After wages, suppliers, taxes and debt service (including coupons to bondholders), whatever is left can accrue to equity. That is the defining ownership property of ordinary shares: they sit behind creditors in the cash waterfall.

So the statement is True.`,

    `Market capitalisation multiplies the December closing price by shares outstanding.

$$
\\text{Market capitalisation} = \\text{closing price} \\times \\text{shares outstanding}
$$

$$
16.80 \\times 8{,}000{,}000 = 134{,}400{,}000
$$

$$
134.4\\ \\text{million} \\not> 140\\ \\text{million}
$$

So the statement is False.`,

    `Earnings per share and the P/E ratio:

$$
\\text{EPS} = \\dfrac{9{,}600{,}000}{8{,}000{,}000} = 1.20
$$

$$
\\text{P/E} = \\dfrac{16.80}{1.20} = 14
$$

$$
14 \\not> 15
$$

So the statement is False.`,

    `A fixed coupon below the market yield means new investors demand more than 3% for similar risk. They will only buy the existing bond if its price falls enough that the same €30 coupon on a lower purchase price delivers about 4.5% to maturity. Coupon $3\\% < 4.5\\%$ YTM therefore implies a discount to the €1{,}000 face value.

So the statement is True.`,

    `When the policy rate rises, market yields on comparable fixed-income claims tend to rise with it. Higher required yields push the present value of the bond’s remaining fixed coupons and face payment down, so the market price of the existing 3% coupon bond falls rather than rises.

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.STOCK2",
    title: "Share Chart with Bonds, Yields and Policy Rates",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}

/** Hard inequalities T/F (ch6), photo-1 style but inequalities and harder multi-step word problems. */
function buildMathCh6Inequalities() {
  const context = `Decide whether each statement about inequalities is true or false.`;

  const statements = [
    "If a rectangular garden’s length is at least $4\\ \\mathrm{m}$ longer than its width and the area is at most $45\\ \\mathrm{m}^{2}$, then the width cannot exceed $5\\ \\mathrm{m}$.",
    "A courier drives at an average speed of at most $72\\ \\mathrm{km/h}$. By $4{:}00$ pm the courier has covered at least $126\\ \\mathrm{km}$. Then the courier must have started no later than $2{:}15$ pm.",
    "A juice blend must contain at least $12\\%$ concentrate. Starting from $2$ litres of $18\\%$ concentrate, the cook may add at most $1$ litre of water and still meet the requirement.",
    "Prize money of $18{,}200$ EUR is split so that 2nd place receives at least $75\\%$ of 1st place, and 3rd place receives at least $75\\%$ of 2nd place. If 1st place receives at most $8{,}000$ EUR, then 3rd place can still receive $4{,}500$ EUR or more.",
    "The solution set of the inequality $\\dfrac{2x-5}{x+1}\\ge 1$ (with $x\\ne -1$) is exactly $[-4,\\infty)$.",
  ];

  // A: w(w+4) <= 45, claim w <= 5 always under constraints.
  // w^2+4w-45<=0 → (w+9)(w-5)<=0 → w in [-9,5]. With width>0 and length=w+4>w, w in (0,5].
  // So width cannot exceed 5 — True.
  //
  // B: distance >= 126, speed <= 72 → time >= 126/72 = 1.75 h = 1h45m.
  // Latest start to still have traveled >=126 by 4pm at max speed 72: if started later than 2:15, even at 72 for less than 1.75h can't cover 126.
  // So must have started no later than 2:15 — True.
  // Actually: to have covered AT LEAST 126 by 4pm with speed AT MOST 72, the minimum time needed is 126/72 when driving at the max allowed speed. If started after 2:15, elapsed < 1.75h, even at 72: distance < 126. So yes must start by 2:15. True.
  //
  // C: 2L of 18% = 0.36 L concentrate. Add w water: concentration = 0.36/(2+w) >= 0.12 → 0.36 >= 0.12(2+w) → 3 >= 2+w → w <= 1.
  // So may add at most 1 litre — True.
  //
  // D: Let 1st = a <= 8000, 2nd >= 0.75a, 3rd >= 0.75*2nd >= 0.5625a.
  // Claim: 3rd can still be >= 4500. Need some feasible a<=8000 with 3rd>=4500 and 2nd>=0.75a, 3rd>=0.75*2nd, and a+2nd+3rd=18200?
  // The statement doesn't say they sum to 18200 is the ONLY constraint with the inequalities — re-read.
  // "Prize money of 18200 is split so that..." implies total = 18200.
  // a + b + c = 18200, b >= 0.75a, c >= 0.75b, a <= 8000. Can c >= 4500?
  // Minimal c for feasibility: to maximize room... Can we achieve c>=4500?
  // Try a=8000, b=0.75*8000=6000, c=18200-14000=4200 < 4500. And c=4200 >= 0.75*6000=4500? 4200 < 4500, so this equality case fails the c>=0.75b constraint!
  // Need c >= 0.75b and a+b+c=18200, b>=0.75a, a<=8000.
  // From c >= 0.75b and a+b+c=18200 → a+b+0.75b <= 18200 → a+1.75b <= 18200.
  // Also b>=0.75a → a+1.75(0.75a)=a+1.3125a=2.3125a <= 18200 → a <= 18200/2.3125 ≈ 7864.86 when binding.
  // For c >= 4500: a+b+c=18200 → a+b <= 13700. With b>=0.75a, a+0.75a=1.75a <= 13700 → a <= 7828.57.
  // And c=18200-a-b >= 4500, with c >= 0.75b.
  // Take a=7800, b=0.75*7800=5850, c=18200-13650=4550. Check c >= 0.75b: 4550 >= 4387.5 yes. a<=8000 yes.
  // So 3rd CAN receive 4500 or more — True.
  //
  // Wait user wanted harder and mix of T/F. Let me make D False by claiming 5000:
  // a=7800,b=5850,c=4550 — max c roughly?
  // To maximize c: minimize a+b subject to constraints... Actually for "can still receive 5000":
  // a+b <= 13200, b>=0.75a, c>=0.75b, a<=8000.
  // Min a+b with b>=0.75a and c=18200-a-b >= 0.75b → a+1.75b <= 18200.
  // Maximize c = 18200-a-b → minimize a+b. Smallest a+b with b>=0.75a and a+1.75b<=18200.
  // Take small a: a=4000, b=3000, a+1.75b=4000+5250=9250<18200, c=11200 >= 2250. So c can be large!
  // Hmm then almost any high c works if a is small. Statement "if 1st at most 8000 then 3rd can still receive 4500+" is True easily.
  //
  // Change D to: "Then the prize for 3rd place is necessarily less than 4,000 EUR" when a<=8000 — 
  // From above c can be large, so "necessarily less than 4000" is False.
  // Better: "Then 3rd place receives at most 4,000 EUR." → False (we found c=4550).
  //
  // E: (2x-5)/(x+1) >= 1 → (2x-5 -x -1)/(x+1) >= 0 → (x-6)/(x+1) >= 0
  // Critical points -1, 6. Sign chart: positive on (-∞,-1) U [6,∞). Not [-4,∞). False.

  statements[3] =
    "Prize money of $18{,}200$ EUR is split so that 2nd place receives at least $75\\%$ of 1st place, and 3rd place receives at least $75\\%$ of 2nd place. If 1st place receives at most $8{,}000$ EUR, then 3rd place necessarily receives less than $4{,}500$ EUR.";

  // With a=7800,b=5850,c=4550 >= 4500, so "necessarily < 4500" is False.

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Let the width be $w>0$ metres and the length $w+4$. The area bound is

$$
w(w+4)\\le 45
$$

$$
w^{2}+4w-45\\le 0
$$

$$
(w+9)(w-5)\\le 0
$$

So $w\\in[-9,5]$. Intersecting with $w>0$ gives $0<w\\le 5$. Therefore the width cannot exceed $5\\ \\mathrm{m}$.

So the statement is True.`,

    `**B.** → True

To cover at least $126\\ \\mathrm{km}$ at a speed of at most $72\\ \\mathrm{km/h}$, the elapsed time $t$ must satisfy

$$
72\\,t\\ge 126 \\quad\\Rightarrow\\quad t\\ge \\dfrac{126}{72}=1.75\\ \\mathrm{h}=1\\ \\mathrm{h}\\ 45\\ \\mathrm{min}.
$$

Working backwards from $4{:}00$ pm by $1\\ \\mathrm{h}\\ 45\\ \\mathrm{min}$ lands at $2{:}15$ pm. Any later start leaves less than $1.75$ hours, which cannot produce $126\\ \\mathrm{km}$ under the speed cap. So the courier must have started no later than $2{:}15$ pm.

So the statement is True.`,

    `**C.** → True

Two litres at $18\\%$ contain $0.36$ litres of concentrate. After adding $w$ litres of water the concentration is

$$
\\dfrac{0.36}{2+w}\\ge 0.12
$$

$$
0.36\\ge 0.12(2+w)
$$

$$
3\\ge 2+w
$$

$$
w\\le 1
$$

So at most $1$ litre of water may be added.

So the statement is True.`,

    `**D.** → False

Write $a$, $b$, $c$ for 1st, 2nd and 3rd with

$$
a+b+c=18{,}200,\\qquad b\\ge 0.75a,\\qquad c\\ge 0.75b,\\qquad a\\le 8{,}000.
$$

One feasible triple is

$$
a=7{,}800,\\quad b=0.75\\cdot 7{,}800=5{,}850,\\quad c=18{,}200-13{,}650=4{,}550.
$$

Check $c\\ge 0.75b$:

$$
4{,}550\\ge 0.75\\cdot 5{,}850=4{,}387.5
$$

and $a\\le 8{,}000$. Here $c=4{,}550\\not< 4{,}500$, so 3rd place need not be below $4{,}500$.

So the statement is False.`,

    `**E.** → False

Bring to one side:

$$
\\dfrac{2x-5}{x+1}-1\\ge 0
$$

$$
\\dfrac{2x-5-(x+1)}{x+1}\\ge 0
$$

$$
\\dfrac{x-6}{x+1}\\ge 0
$$

Critical points $x=-1$ (excluded) and $x=6$. A sign chart gives

$$
\\dfrac{x-6}{x+1}\\ge 0 \\quad\\text{on}\\quad (-\\infty,-1)\\cup[6,\\infty).
$$

That is not the interval $[-4,\\infty)$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.INEQ",
    id: "MATH 6.MOCK.INEQ",
    title: "Hard multi-step inequality word problems",
    chapter: 6,
    subsection: "6.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Translate each word claim into an inequality, solve or bound it carefully, then compare the derived region with the claim. For the rational inequality, move all terms to one side and read a sign chart at the critical points.",
  };
}

/** Hard exp/log T/F (ch10) — different scenario from Mock1 population task / photo 2. */
function buildMathCh10ExpLog() {
  const context = `A laboratory stores a radioactive tracer whose activity (in becquerels) after $t$ hours is modelled by

$$
A(t)=A_{0}\\,e^{-kt},\\qquad A(0)=A_{0}=2.4\\cdot 10^{6},\\qquad k=\\ln 2\\,/\\,6.
$$

So the half-life is exactly $6$ hours. A second, independently decaying sample has activity

$$
B(t)=1.5\\cdot 10^{6}\\cdot (0.92)^{t}.
$$

Decide whether each statement is true or false.`;

  // A: claim A(t)=2.4e6 * (1/2)^{t/6} — True (equivalent form)
  // B: effective hourly decay of B is 8%, claim continuous force equals ln(0.92) which is more negative than -0.08, so "decay rate smaller than 8%/h" — need careful wording.
  //    |ln(0.92)| ≈ 0.08338 > 0.08, so continuous decay force is larger than 8%. Claim: "force of decay of B is smaller than 8% per hour" → False
  // C: After 18h, A has decayed through 3 half-lives → A(18)=A0/8 = 3e5. Claim "activity still exceeds 4*10^5" → 3e5 not > 4e5 → False
  // D: Time for B to fall below 5*10^5: 1.5e6 * 0.92^t < 5e5 → 0.92^t < 1/3 → t ln0.92 < ln(1/3) → t > ln(1/3)/ln(0.92) ≈ 1.0986/0.08338 ≈ 13.18. Claim "first below 5e5 at some t<12" → False
  // E: Piecewise: for first 6h tracer follows A(t); thereafter the remaining material is diluted so that activity becomes 0.6*A(6)*e^{-k(t-6)}. Claim that activity falls below 2*10^5 at some t>15.
  //    A(6)=1.2e6. Then 0.6*1.2e6 = 7.2e5. Then 7.2e5 * e^{-k s} < 2e5 → e^{-k s} < 2/7.2 = 5/18 ≈ 0.2778
  //    -k s < ln(0.2778) → s > -ln(0.2778)/k. k=ln2/6 ≈ 0.115525
  //    -ln(0.2778)≈1.281 ≈ , s ≈ 1.281/0.115525 ≈ 11.09. t=6+11.09≈17.09 > 15 → True

  const statements = [
    "It holds that $A(t)=2.4\\cdot 10^{6}\\cdot \\left(\\dfrac{1}{2}\\right)^{t/6}$.",
    "Writing $B(t)=1.5\\cdot 10^{6}e^{\\delta t}$, the continuous force $\\delta$ satisfies $\\delta>-0.08$ (so the magnitude of continuous decay is smaller than $8\\%$ per hour).",
    "After $18$ hours the tracer activity $A(18)$ still exceeds $4\\cdot 10^{5}$.",
    "The activity $B(t)$ first falls below $5\\cdot 10^{5}$ at some time $t<12$.",
    "Suppose that after $6$ hours the remaining tracer is diluted so that its activity continues as $0.6\\,A(6)\\,e^{-k(t-6)}$. Then the activity falls below $2\\cdot 10^{5}$ at some $t>15$.",
  ];

  // B check: B(t)=1.5e6 * 0.92^t = 1.5e6 * e^{t ln 0.92}, so δ = ln(0.92) ≈ -0.08338.
  // Claim δ > -0.08. Is -0.08338 > -0.08? No. So False.
  // (magnitude of decay |δ|≈0.083>0.08, so continuous decay is stronger, not smaller)

  const answer_key = [true, false, false, false, true];

  const tactical_explanations = [
    `**A.** → True

Half-life $6$ hours means $A(6)=\\tfrac{1}{2}A_{0}$, and the continuous model $A(t)=A_{0}e^{-kt}$ with $k=\\ln 2/6$ rewrites as

$$
A(t)=A_{0}\\,e^{-(\\ln 2)\\,t/6}=A_{0}\\left(e^{\\ln 2}\\right)^{-t/6}=A_{0}\\left(\\dfrac{1}{2}\\right)^{t/6}.
$$

With $A_{0}=2.4\\cdot 10^{6}$ this is exactly the claimed formula.

So the statement is True.`,

    `**B.** → False

$$
B(t)=1.5\\cdot 10^{6}\\cdot (0.92)^{t}=1.5\\cdot 10^{6}\\,e^{t\\ln 0.92},
$$

so

$$
\\delta=\\ln 0.92\\approx -0.08338.
$$

Compare with $-0.08$:

$$
-0.08338 \\not> -0.08.
$$

Equivalently $|\\delta|\\approx 8.338\\%>8\\%$, so the continuous decay force is stronger than an $8\\%$ per hour force, not smaller.

So the statement is False.`,

    `**C.** → False

Eighteen hours is exactly three half-lives of $6$ hours each:

$$
\\dfrac{18}{6}=3
$$

Each half-life multiplies activity by $\\tfrac{1}{2}$, so three half-lives multiply by $\\tfrac{1}{8}$:

$$
A(18)=A_{0}\\cdot \\left(\\dfrac{1}{2}\\right)^{18/6}=2.4\\cdot 10^{6}\\cdot \\dfrac{1}{8}
$$

$$
=0.3\\cdot 10^{6}=3.0\\cdot 10^{5}
$$

The claim says activity still exceeds $4\\cdot 10^{5}$:

$$
3.0\\cdot 10^{5}\\ngtr 4.0\\cdot 10^{5}
$$

So after $18$ hours the tracer is already below the claimed threshold.

So the statement is False.`,

    `**D.** → False

Solve $B(t)<5\\cdot 10^{5}$:

$$
1.5\\cdot 10^{6}\\cdot (0.92)^{t}<5\\cdot 10^{5}
$$

$$
(0.92)^{t}<\\dfrac{1}{3}
$$

$$
t\\ln 0.92<\\ln\\dfrac{1}{3}
$$

Since $\\ln 0.92<0$, the inequality reverses when dividing:

$$
t>\\dfrac{\\ln(1/3)}{\\ln 0.92}\\approx\\dfrac{1.0986}{0.08338}\\approx 13.18.
$$

The first crossing is near $t\\approx 13.18$, which is not less than $12$.

So the statement is False.`,

    `**E.** → True

At the dilution moment,

$$
A(6)=2.4\\cdot 10^{6}\\cdot \\tfrac{1}{2}=1.2\\cdot 10^{6},
$$

so the post-dilution activity is

$$
C(t)=0.6\\cdot 1.2\\cdot 10^{6}\\,e^{-k(t-6)}=7.2\\cdot 10^{5}\\,e^{-k(t-6)}.
$$

Require $C(t)<2\\cdot 10^{5}$:

$$
7.2\\cdot 10^{5}\\,e^{-ks}<2\\cdot 10^{5},\\qquad s=t-6,
$$

$$
e^{-ks}<\\dfrac{2}{7.2}=\\dfrac{5}{18}\\approx 0.2778,
$$

$$
s>\\dfrac{-\\ln(5/18)}{k},\\qquad k=\\dfrac{\\ln 2}{6}\\approx 0.115525,
$$

$$
s\\approx\\dfrac{1.281}{0.115525}\\approx 11.09,
$$

$$
t=6+11.09\\approx 17.09>15.
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.RAD",
    id: "MATH 10.MOCK.RAD",
    title: "Radioactive tracer decay, discrete decay and dilution",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Rewrite the continuous half-life model as a pure power of $1/2$, convert $b^{t}$ to $e^{t\\ln b}$ when comparing forces, and for piecewise dilution solve the second stage with logarithms.",
  };
}

const TRUTH_TABLE_APPENDIX = `

**Truth table of valid rosters (forced columns first).**

From the overview solve, every valid roster has $V=1$, $W=1$, $X=0$, and therefore $U=1$. The free pair is $(Y,Z,B)$ under $Y\\lor Z$, $Z\\Rightarrow\\neg B$, and total size $\\ge 4$.

| $U$ | $V$ | $W$ | $X$ | $Y$ | $Z$ | $B$ | Size | Valid? |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 4 | yes |
| 1 | 1 | 1 | 0 | 1 | 0 | 1 | 5 | yes |
| 1 | 1 | 1 | 0 | 1 | 1 | 0 | 5 | yes |
| 1 | 1 | 1 | 0 | 0 | 1 | 0 | 4 | yes |
| 1 | 1 | 1 | 0 | 0 | 0 | * | ≤3 | no ($Y\\lor Z$ fails) |
| 1 | 1 | 1 | 0 | * | 1 | 1 | — | no ($Z\\Rightarrow\\neg B$ fails) |

Exactly four valid rosters appear. Xavier never competes; six competitors never appear because $X=0$ and $Z=B=1$ is forbidden.`;

function expandMath1108(task: Record<string, unknown>) {
  const expl = [...((task.tactical_explanations as string[]) ?? [])];
  const overview = String(task.solution_overview ?? "");
  // Keep the truth table only in the overview — never repeat it under each letter.
  const patchedExpl = expl.map((e) => {
    const cut = e.split(/\n\n(?=The truth table (?:below|shows)|\*\*Truth table)/)[0] ?? e;
    const m = cut.match(/([\s\S]*So the statement is (?:True|False)\.)/);
    return (m ? m[1] : cut).trim();
  });
  return {
    ...task,
    solution_overview: overview.includes("Truth table of valid rosters")
      ? overview
      : `${overview.trim()}\n${TRUTH_TABLE_APPENDIX}`,
    tactical_explanations: patchedExpl,
  };
}

function fixMath972Figure(task: Record<string, unknown>) {
  let figure = String(task.figure ?? "");
  // SVG title currently embeds raw KaTeX: y = x \left(x^{2} - 3\right)
  // Replace with plain Unicode math so the chart heading renders.
  const replacements: Array<[string, string]> = [
    [
      "y%20%3D%20x%20%5Cleft(x%5E%7B2%7D%20-%203%5Cright)",
      "y%20%3D%20x(x%C2%B2%20%E2%88%92%203)",
    ],
    [
      "y = x \\left(x^{2} - 3\\right)",
      "y = x(x² − 3)",
    ],
    [
      encodeURIComponent("y = x \\left(x^{2} - 3\\right)"),
      encodeURIComponent("y = x(x² − 3)"),
    ],
  ];
  for (const [from, to] of replacements) {
    if (figure.includes(from)) figure = figure.split(from).join(to);
  }
  // Also fix any remaining raw \left in title text node via decode-replace-encode path
  if (figure.includes("data:image/svg+xml;utf8,")) {
    const prefix = "data:image/svg+xml;utf8,";
    const encoded = figure.slice(prefix.length);
    const svg = decodeURIComponent(encoded);
    const fixed = svg.replace(
      />y = x \\left\(x\^\{2\} - 3\\right\)</,
      ">y = x(x² − 3)<",
    ).replace(
      />y = x \\left\(x\^\{2\} - 3\\right\)</g,
      ">y = x(x² − 3)<",
    );
    if (fixed !== svg) {
      figure = prefix + encodeURIComponent(fixed).replace(/%20/g, "%20");
      // encodeURIComponent is fine; keep utf8 form
      figure = prefix + encodeURIComponent(fixed);
    }
  }
  return { ...task, figure };
}

function auditFixMath12150(task: Record<string, unknown>) {
  // Ensure tables_markdown is well-formed pipe tables (already good in bank).
  // Harden explanation E display math spacing if empty $$ blocks appear.
  const expl = [...((task.tactical_explanations as string[]) ?? [])].map((e) =>
    e
      .replace(/\$\$\s*\$\$/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
  const tables = String(task.tables_markdown ?? "").trim();
  // Prefer explicit dual tables with blank line separator (already present).
  return {
    ...task,
    tables_markdown: tables,
    tactical_explanations: expl,
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.15");
  if (!sub?.passage) throw new Error("Shifting Anatomy passage t.15 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.15.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.15.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.15.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.15.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.15.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.15.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.15.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.15.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.15.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.15.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.6.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.15.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "Economic sectors are not fixed monuments; they shift as technology and demand rewrite which activities dominate.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.15.08" || o.id === "ENG T.15.09") {
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
  mapEcon(byId(2, "CASE 2.4.24")),
  mapEcon(byIndex(3, 53)), // no trailing .53 in bank
  mapEcon(byId(4, "CASE 4.3.18")),
  mapEcon(byId(4, "CASE 4.3.58")),
  mapEcon(byId(5, "CASE 5.7.121")),
  mapEcon(byIndex(5, 220)), // no trailing .220 in bank
  mapEcon(byId(6, "CASE 6.3.045")), // avoid Mock1's 6.2.045
  mapEcon(byIndex(6, 110)),
  mapEcon(byIndex(6, 170)),
  buildStockBondsRatesCase(),
];

const english = buildEnglish();

const allMath = await loadAllMathChapterTasks();
function takeMath(caseId: string, chapter: number) {
  const chapterBank = allMath.find((c) => c.num === chapter);
  if (!chapterBank) throw new Error(`Missing math chapter ${chapter}`);
  const t = chapterBank.tasks.find((x) => x.case_id === caseId);
  if (!t) throw new Error(`Missing math ${caseId} in chapter ${chapter}`);
  return mapMath(chapter, t as unknown as Record<string, unknown>);
}

const math = [
  expandMath1108(takeMath("MATH 1.108", 1)),
  takeMath("MATH 2.137", 2),
  takeMath("MATH 11.60", 3),
  takeMath("MATH 4.165", 4),
  takeMath("MATH 5.17", 5),
  buildMathCh6Inequalities(),
  takeMath("MATH 7.47", 7),
  takeMath("MATH 8.95", 8),
  fixMath972Figure(takeMath("MATH 9.72", 9)),
  buildMathCh10ExpLog(),
  takeMath("MATH 11.108", 11),
  auditFixMath12150(takeMath("MATH 12.150", 12)),
  takeMath("MATH 13.78", 13),
];

/** Teacher-step patches for bank tasks with thin letter explanations. */
{
  const calc = math.find((t) => t.case_id === "MATH 2.137");
  if (calc && Array.isArray(calc.tactical_explanations)) {
    (calc.tactical_explanations as string[])[3] = `**D.** → True

Substitute the given numbers $x=-2$ and $y=3$ into both absolute-value expressions.

Product first, then absolute value:

$$
xy=(-2)\\cdot 3=-6
$$

$$
|xy|=|-6|=6
$$

Absolute values first, then product:

$$
|x|=|-2|=2,\\qquad |y|=|3|=3
$$

$$
|x|\\,|y|=2\\cdot 3=6
$$

Both sides equal $6$, which is exactly the claimed common value. (In general $|xy|=|x||y|$ for every real $x,y$; this letter is the concrete numerical check.)

So the statement is True.`;
  }

  const fin = math.find((t) => t.case_id === "MATH 11.60");
  if (fin) {
    fin.tactical_explanations = [
      `**A.** → True

Continuous discounting at force $r=0.08$ for $t_1=5$ years uses the factor $e^{-rt}$:

$$
e^{-0.08\\cdot 5}=e^{-0.4}
$$

Numerically $e^{-0.4}\\approx 0.670320$, which rounds to the claimed $0.6703$.

So the statement is True.`,
      `**B.** → True

The ten-year horizon is $t_2=10=2\\cdot 5$, so

$$
e^{-0.08\\cdot 10}=e^{-0.8}=(e^{-0.4})^{2}
$$

With $e^{-0.4}\\approx 0.6703$,

$$
(0.6703)^{2}\\approx 0.4493
$$

which matches the claim. Directly, $e^{-0.8}\\approx 0.449329$.

So the statement is True.`,
      `**C.** → False

Present value of the first payment:

$$
\\mathrm{PV}_{1}=30{,}000\\cdot e^{-0.4}\\approx 30{,}000\\cdot 0.67032=20{,}109.60
$$

The claim says approximately $21{,}500$. But

$$
20{,}109.60\\ne 21{,}500
$$

So the statement is False.`,
      `**D.** → False

Present value of the second payment:

$$
\\mathrm{PV}_{2}=55{,}000\\cdot e^{-0.8}\\approx 55{,}000\\cdot 0.449329=24{,}713.09
$$

The claim says approximately $26{,}000$. But

$$
24{,}713.09\\ne 26{,}000
$$

So the statement is False.`,
      `**E.** → False

Add the two present values from C and D:

$$
\\mathrm{PDV}=\\mathrm{PV}_{1}+\\mathrm{PV}_{2}\\approx 20{,}109.60+24{,}713.09=44{,}822.69
$$

The claim says approximately $47{,}500$. But

$$
44{,}822.69\\ne 47{,}500
$$

So the statement is False.`,
    ];
  }
}

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


function scrubKatexDeep(value: unknown): unknown {
  if (typeof value === "string") {
    return value
      .replace(/\\not</g, "\\nless ")
      .replace(/\\not>/g, "\\ngtr ")
      .replace(/\\not\\le/g, "\\nleq ")
      .replace(/\\not\\ge/g, "\\ngeq ")
      .replace(/\\Y_/g, "Y_")
      .replace(/\$€\s*([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
      .replace(/\$€([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
      .replace(/\$\$([\s\S]*?)\$\$/g, (_m, body: string) => {
        const fixed = String(body).replace(/€\s*/g, "EUR ").replace(/≈/g, "\\approx ");
        return `$$${fixed}$$`;
      })
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }
  if (Array.isArray(value)) return value.map(scrubKatexDeep);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = scrubKatexDeep(v);
    return out;
  }
  return value;
}

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
