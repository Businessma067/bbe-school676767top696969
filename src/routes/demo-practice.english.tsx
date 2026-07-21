import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Check, X, ChevronLeft, ChevronRight, ChevronDown, RotateCcw,
  BookOpen, AlertTriangle, Lock, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/demo-practice/english")({
  head: () => ({
    meta: [
      { title: "English Tasks — BBE School" },
      { name: "description", content: "Reading, Grammar and Vocabulary practice for the WU BBE entrance exam." },
    ],
  }),
  component: EnglishTasks,
});

// ---------------- Data ----------------

const READING_PASSAGE = `(1) For much of the late nineteenth and early twentieth centuries, the majority of the world's major economies operated under a monetary arrangement known as the classical gold standard, in which a country's currency was directly convertible into a fixed quantity of gold at a legally defined rate. Britain formally adopted the system in 1821, fixing the pound sterling at a rate of approximately 3.89 pounds per fine ounce of gold, a rate that would remain essentially unchanged for over a century. Other major powers followed at varying intervals: Germany adopted gold convertibility in 1871 following its unification and the receipt of French war reparations, while the United States, despite earlier bimetallic experiments, did not formally commit to a gold standard in law until the Gold Standard Act of 1900.

(2) Under this system, the core promise made to citizens and foreign governments alike was that paper currency and bank deposits could, in principle, be exchanged for physical gold on demand at the fixed rate. This convertibility was intended to impose automatic discipline on national monetary policy: if a country ran a persistent trade deficit, gold would flow out to pay foreign creditors, its domestic money supply would contract, prices would fall, and its exports would eventually become cheaper and more competitive again, restoring balance without any deliberate policy intervention. Economists later termed this self-correcting mechanism the "price-specie flow mechanism," and it was often cited as one of the standard's principal theoretical virtues.

(3) In practice, however, the system's stability during its so-called golden age, roughly 1870 to 1914, depended heavily on factors beyond the automatic mechanism itself. London functioned as the unquestioned financial center of the system, and the Bank of England's discount rate served as a coordinating signal that other central banks frequently followed, lending the network a degree of cooperative stability that the theoretical model alone did not guarantee. Estimates suggest that global gold production roughly tripled between 1890 and 1914, driven substantially by major discoveries in South Africa's Witwatersrand basin, which alone was estimated to account for close to 40% of total world gold output by the early 1900s, easing what might otherwise have been a persistently deflationary bias in a system reliant on a fixed physical commodity.

(4) The outbreak of the First World War in 1914 effectively suspended the classical gold standard, as belligerent governments abandoned convertibility in order to finance enormous wartime expenditures through the printing of paper currency rather than through gold-backed borrowing alone. Britain's wartime spending, for instance, rose to a figure estimated at roughly ten times its pre-war annual government expenditure by 1918, a scale of financing that would have been effectively impossible to sustain while maintaining strict gold convertibility throughout.

(5) Following the war, several countries attempted to restore a version of the system, an effort historians now generally refer to as the "gold exchange standard" of the 1920s. Britain famously returned to the gold standard in 1925 at the pre-war parity of 3.89 pounds per ounce, a decision championed by then-Chancellor of the Exchequer Winston Churchill on the advice of Bank of England officials, despite wartime inflation having left British prices roughly 10% higher, relative to America's, than the old fixed rate could comfortably support. Critics, most famously the economist John Maynard Keynes, argued at the time that this restoration at an overvalued rate would force painful wage and price deflation onto the British economy simply to remain competitive, a prediction many economic historians now regard as substantially vindicated by Britain's subdued growth and elevated unemployment throughout the remainder of the 1920s.

(6) The interwar gold exchange standard proved considerably more fragile than its prewar predecessor. Unlike the classical system, in which only Britain held gold reserves at the system's core, the interwar arrangement allowed multiple countries to hold not only gold itself but also foreign currencies, chiefly pounds sterling and US dollars, as reserve backing for their own currencies. This layering of promises meant that a loss of confidence in sterling or the dollar could, in principle, trigger a cascading crisis of convertibility across many countries simultaneously, a vulnerability the classical system had not shared to nearly the same degree.

(7) That vulnerability was realised in dramatic fashion during the early 1930s. Following a wave of banking crises across Central Europe in 1931, Britain abandoned the gold standard permanently in September of that year, and the pound's value fell by approximately 25% against gold-backed currencies within a matter of months. The United States held on longer, but in 1933 President Franklin Roosevelt suspended domestic gold convertibility and, through the Gold Reserve Act of 1934, devalued the dollar from $20.67 to $35.00 per ounce of gold, an adjustment of roughly 69%, in an explicit effort to raise domestic price levels and combat the deflationary pressures of the Great Depression.

(8) By 1936, when France, the last major holdout, also abandoned gold convertibility, the classical gold standard era was, in every meaningful sense, over. Historians remain divided as to whether the system's collapse should be understood primarily as a consequence of the First World War's disruption of underlying economic fundamentals, or as evidence that the gold standard itself, once shorn of the informal cooperative arrangements that had quietly sustained it before 1914, was never truly capable of self-correction under the stress of a major global economic shock.`;

type ReadingTask = {
  id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical: string[];
  // Verbatim substring of READING_PASSAGE that proves/disproves each statement.
  highlights: string[];
  difficulty: string;
};

const READING_TASKS: ReadingTask[] = [
  {
    id: "en-r-1",
    title: "TASK 1 — Paragraphs 1–3",
    context: "Short statements testing precise recall of dates, figures, and the theoretical mechanism described, including a calculation-based trap.",
    statements: [
      "Britain fixed the pound at approximately 3.89 pounds per ounce of gold beginning in 1821.",
      "The United States formally committed to a gold standard in law before Germany did.",
      "The price-specie flow mechanism describes automatic self-correction of trade imbalances without deliberate policy intervention.",
      "If global gold production was approximately 5 million ounces in 1890, tripling by 1914 would put 1914 production at approximately 15 million ounces.",
      "The Witwatersrand basin is described as accounting for close to 40% of world gold output by the early 1900s.",
    ],
    answer_key: [true, false, true, true, true],
    tactical: [
      "TRUE. Matches the explicit date and rate given for Britain's adoption.",
      "FALSE. Germany adopted gold convertibility in 1871; the US did not formally commit in law until 1900 — the order is reversed.",
      "TRUE. Matches the explicit description of this self-correcting mechanism.",
      "TRUE. Correct arithmetic: tripling means multiplying by 3, so 5 million × 3 = 15 million.",
      "TRUE. Matches the explicit statistic given for the Witwatersrand basin's share of output.",
    ],
    highlights: [
      "Britain formally adopted the system in 1821, fixing the pound sterling at a rate of approximately 3.89 pounds per fine ounce of gold",
      "Germany adopted gold convertibility in 1871",
      'Economists later termed this self-correcting mechanism the "price-specie flow mechanism,"',
      "global gold production roughly tripled between 1890 and 1914",
      "close to 40% of total world gold output by the early 1900s",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-r-2",
    title: "TASK 2 — Paragraphs 4–6",
    context: "Short statements testing wartime financing details, Britain's 1925 return to gold, and a percentage-based math trap.",
    statements: [
      "Britain's wartime spending by 1918 rose to roughly ten times its pre-war annual government expenditure.",
      "Britain returned to gold in 1925 at a rate lower than its pre-war parity.",
      "If Britain's pre-war annual government expenditure was £200 million, ten times that figure would be £1.8 billion.",
      "Keynes argued that Britain's 1925 return to gold at the old rate would force deflation to remain competitive.",
      "The interwar gold exchange standard allowed only gold, not foreign currencies, to serve as reserves.",
    ],
    answer_key: [true, false, false, true, false],
    tactical: [
      "TRUE. Matches the explicit wartime spending multiple stated in the passage.",
      "FALSE. Britain returned at the same pre-war parity of 3.89 pounds per ounce.",
      "FALSE. Ten times £200 million is £2 billion, not £1.8 billion.",
      "TRUE. Matches Keynes's explicitly described critique.",
      "FALSE. The interwar system explicitly allowed foreign currencies (sterling and dollars) as reserves alongside gold.",
    ],
    highlights: [
      "Britain's wartime spending, for instance, rose to a figure estimated at roughly ten times its pre-war annual government expenditure by 1918",
      "Britain famously returned to the gold standard in 1925 at the pre-war parity of 3.89 pounds per ounce",
      "roughly ten times its pre-war annual government expenditure by 1918",
      "this restoration at an overvalued rate would force painful wage and price deflation onto the British economy",
      "the interwar arrangement allowed multiple countries to hold not only gold itself but also foreign currencies",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-r-3",
    title: "TASK 3 — Paragraphs 7–8",
    context: "Short statements testing the 1930s collapse details, including a percentage-calculation trap regarding the dollar's devaluation.",
    statements: [
      "The pound fell by approximately 25% against gold-backed currencies after Britain left gold in 1931.",
      "The dollar was devalued from $20.67 to $35.00 per ounce, an adjustment of roughly 69%.",
      "If the devaluation had instead been exactly 50%, the new gold price from $20.67 would be approximately $31.00.",
      "France was the first major country to abandon gold convertibility in the 1930s.",
      "Historians are described as being in full agreement that the war alone caused the gold standard's collapse.",
    ],
    answer_key: [true, true, true, false, false],
    tactical: [
      "TRUE. Matches the explicit percentage decline stated for the pound.",
      "TRUE. ($35.00 − $20.67) / $20.67 ≈ 69.3%.",
      "TRUE. A 50% increase on $20.67 is $20.67 × 1.5 ≈ $31.00.",
      "FALSE. France was explicitly the last major holdout in 1936, not the first.",
      "FALSE. Historians are explicitly described as \"divided\", not in full agreement.",
    ],
    highlights: [
      "the pound's value fell by approximately 25% against gold-backed currencies within a matter of months",
      "devalued the dollar from $20.67 to $35.00 per ounce of gold, an adjustment of roughly 69%",
      "devalued the dollar from $20.67 to $35.00 per ounce of gold",
      "By 1936, when France, the last major holdout, also abandoned gold convertibility",
      "Historians remain divided as to whether the system's collapse",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-r-4",
    title: "TASK 4 — Percentage & Chronology Traps",
    context: "Short statements testing whether percentage changes and the sequence of events across decades have been subtly altered.",
    statements: [
      "Global gold production roughly tripled between 1890 and 1914, meaning it grew by approximately 300%.",
      "The Gold Standard Act, formally committing the US to gold in law, was passed before Germany adopted gold convertibility in 1871.",
      "If Britain's prices were 10% higher than America's relative to the old fixed rate, a good priced at $100 in America would need to sell at $90 in Britain to match that gap.",
      "Britain abandoned the gold standard permanently in 1931, several years after the US suspended domestic gold convertibility in 1933.",
      "The Bank of England's discount rate served as a coordinating signal that other central banks frequently followed during the system's golden age.",
    ],
    answer_key: [false, false, false, false, true],
    tactical: [
      "FALSE. Tripling means growth to 300% of the original value, which is an increase of 200%, not 300%.",
      "FALSE. Germany adopted gold convertibility in 1871; the US Gold Standard Act was passed in 1900 — decades later.",
      "FALSE. If British prices were 10% higher, a $100 US good would correspond to $110 in Britain, not $90.",
      "FALSE. Britain left gold in 1931, two years before the US suspended convertibility in 1933.",
      "TRUE. Matches the explicit description of the Bank of England's coordinating role during 1870–1914.",
    ],
    highlights: [
      "global gold production roughly tripled between 1890 and 1914",
      "did not formally commit to a gold standard in law until the Gold Standard Act of 1900",
      "British prices roughly 10% higher, relative to America's",
      "Britain abandoned the gold standard permanently in September of that year",
      "the Bank of England's discount rate served as a coordinating signal that other central banks frequently followed",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-r-5",
    title: "TASK 5 — Rate, Date & Magnitude Traps",
    context: "Short statements combining specific rates, dates, and calculated magnitudes, each engineered to sound correct at a glance.",
    statements: [
      "The pound's decline of approximately 25% against gold-backed currencies occurred within months of Britain's September 1931 departure from gold.",
      "If the pound had instead fallen by exactly one third against gold-backed currencies, this would represent a larger decline than the 25% actually recorded.",
      "The Witwatersrand basin's roughly 40% share of world gold output was reached by the early 1930s, shortly before Britain left gold.",
      "France abandoned gold convertibility in 1936, the same year the classical gold standard era is described as having definitively ended.",
      "The dollar's devaluation under the Gold Reserve Act represented a rise in the gold price of exactly $14.33 per ounce.",
    ],
    answer_key: [true, true, false, true, true],
    tactical: [
      "TRUE. Matches the explicit timeline and percentage decline following Britain's September 1931 departure.",
      "TRUE. One third (≈33.3%) is numerically greater than 25%.",
      "FALSE. The Witwatersrand's ~40% share is explicitly dated to \"the early 1900s\", not the 1930s.",
      "TRUE. The passage explicitly links France's 1936 departure with the end of the classical gold standard era.",
      "TRUE. $35.00 − $20.67 = $14.33.",
    ],
    highlights: [
      "the pound's value fell by approximately 25% against gold-backed currencies within a matter of months",
      "the pound's value fell by approximately 25% against gold-backed currencies",
      "close to 40% of total world gold output by the early 1900s",
      "By 1936, when France, the last major holdout, also abandoned gold convertibility, the classical gold standard era was, in every meaningful sense, over",
      "devalued the dollar from $20.67 to $35.00 per ounce of gold",
    ],
    difficulty: "5/5",
  },
];

type GrammarTask = {
  id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical: string[];
  // Substring inside each statement that pinpoints the error/key structure.
  highlights: string[];
  difficulty: string;
};


const GRAMMAR_TASKS: GrammarTask[] = [
  {
    id: "en-g-1",
    title: "TASK 1 — Grammar Correctness I",
    context: "Determine whether each sentence is grammatically correct as written. Errors, where present, are subtle and may involve agreement, tense, prepositions, or conditional structures.",
    statements: [
      "Neither the manager nor the employees was aware that the policy had changed.",
      "Had the company invested earlier, it would have avoided the losses it later suffered.",
      "The data, which was collected over several years, suggests a clear upward trend.",
      "By the time the meeting starts, the report will have already been submitted.",
      "She is used to work late hours, since she has managed remote teams for years.",
    ],
    answer_key: [false, true, false, true, false],
    tactical: [
      "FALSE. With \"neither…nor,\" the verb must agree with the nearer subject (\"employees,\" plural), so it should read \"…nor the employees were aware…\" — \"was\" incorrectly agrees with the singular \"manager\" instead. This is a classic proximity-agreement trap: the eye locks onto the first noun and lets a singular verb slip through.",
      "TRUE. This is a correctly formed third conditional: \"Had the company invested earlier\" (inverted past perfect, omitting \"if\") + \"it would have avoided\" (would have + past participle) — both clauses are properly matched. The inversion is what usually feels \"off\" to students, but it is fully standard formal English.",
      "FALSE. \"Data\" is treated as a plural noun in formal/academic English (\"data…are\" or \"data…were\"), so the correct relative clause should be \"which were collected,\" not \"which was collected.\" Informally this varies, but the exam-style formal register expects the plural agreement — this is exactly the register-trap the examiners exploit.",
      "TRUE. This is a correct future perfect construction: \"will have already been submitted\" correctly expresses an action completed before another future point in time (\"by the time the meeting starts\"). The present-tense \"starts\" after \"by the time\" is required — future tense there would be wrong.",
      "FALSE. \"Used to\" + base verb means a past habit (\"she used to work\"), while \"be used to\" + gerund means accustomed to something (\"she is used to working\"). The sentence mixes the two structures — it should be \"used to working,\" not \"used to work,\" to match \"is used to.\" The trap is that both forms exist and both sound familiar.",
    ],
    highlights: [
      "nor the employees was aware",
      "Had the company invested earlier",
      "which was collected",
      "will have already been submitted",
      "is used to work late hours",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-g-2",
    title: "TASK 2 — Grammar Correctness II",
    context: "Determine whether each sentence is grammatically correct as written.",
    statements: [
      "If I would have known about the delay, I would have left earlier.",
      "The committee has reduced the number of employees who are eligible for the bonus.",
      "Despite of the rising costs, the company decided to expand its operations.",
      "Not only did the report highlight the risks, but it also proposed several solutions.",
      "The results were less conclusive than what we had anticipated.",
    ],
    answer_key: [false, true, false, true, true],
    tactical: [
      "FALSE. Third-conditional \"if\" clauses use the past perfect, not \"would have\" — it should read \"If I had known,\" not \"If I would have known.\" Using \"would have\" in the if-clause is one of the single most common — and most heavily tested — errors in formal English.",
      "TRUE. Subject-verb agreement is correct throughout: \"committee has reduced\" (singular collective noun) and \"employees who are eligible\" (plural relative clause subject). The sentence looks like it might contain a \"number of\" trap, but here \"the number of employees\" is not the subject being described as plural.",
      "FALSE. \"Despite\" is never followed by \"of\" — it must be either \"despite the rising costs\" or \"in spite of the rising costs.\" \"Despite of\" is a hybrid error combining both correct forms. Examiners love this one because it sounds fluent when spoken quickly.",
      "TRUE. \"Not only…but also\" correctly triggers subject-auxiliary inversion after the fronted negative (\"Not only did the report highlight…\"), and the parallel structure with \"also proposed\" is correctly formed. Without \"did,\" the sentence would be ungrammatical — the inversion is mandatory here.",
      "TRUE. The comparative structure \"less conclusive than what we had anticipated\" is grammatically valid, with the past perfect correctly indicating an expectation formed prior to the results being known. Some students flag \"than what\" as wrong, but it is acceptable formal English.",
    ],
    highlights: [
      "If I would have known",
      "committee has reduced",
      "Despite of the rising costs",
      "Not only did the report highlight",
      "less conclusive than what we had anticipated",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-g-3",
    title: "TASK 3 — Grammar Correctness III",
    context: "Determine whether each sentence is grammatically correct as written.",
    statements: [
      "Each of the proposals have their own advantages and drawbacks.",
      "By next year, the firm will have operated in this market for over a decade.",
      "The manager insisted that the report be submitted by Friday.",
      "There is several reasons why the merger failed to proceed as planned.",
      "Whoever is responsible for the error should acknowledge it immediately.",
    ],
    answer_key: [false, true, true, false, true],
    tactical: [
      "FALSE. \"Each of\" takes a singular verb regardless of the plural noun that follows — it should read \"Each of the proposals has its own advantages,\" not \"have their own.\" The plural noun \"proposals\" is a distractor; the grammatical subject is \"Each,\" which is singular.",
      "TRUE. This is a correctly formed future perfect: \"will have operated\" correctly expresses an ongoing action continuing up to a future point in time (\"by next year\"). The time marker \"by next year\" is the standard trigger for this tense.",
      "TRUE. This uses the correct subjunctive mood after \"insisted that,\" where the base form of the verb (\"be submitted\") is required, not \"is submitted.\" Verbs of demand/insistence/recommendation systematically trigger this bare-infinitive subjunctive in formal English.",
      "FALSE. \"There is\" must agree with the plural noun \"reasons\" that follows — it should read \"There are several reasons,\" not \"There is several reasons.\" The dummy subject \"there\" pushes agreement onto the noun that follows.",
      "TRUE. \"Whoever\" correctly functions as the subject of the subordinate clause (\"whoever is responsible\"), and the main clause verb \"should acknowledge\" is properly formed. Students often want to \"correct\" this to \"whomever,\" but that would be wrong here — case is set by the subordinate clause, not the main one.",
    ],
    highlights: [
      "Each of the proposals have their own",
      "will have operated",
      "insisted that the report be submitted",
      "There is several reasons",
      "Whoever is responsible",
    ],
    difficulty: "5/5",
  },
  {
    id: "en-g-4",
    title: "TASK 4 — Grammar Correctness IV",
    context: "Determine whether each sentence is grammatically correct as written.",
    statements: [
      "The number of employees affected by the restructuring have doubled since last year.",
      "It is essential that every candidate submits their application before the deadline.",
      "Having reviewed the evidence, the conclusion was reached by the committee that reforms were necessary.",
      "No sooner had the announcement been made than the stock price began to fall.",
      "The proposal, along with several amendments, were rejected by the board.",
    ],
    answer_key: [false, false, false, true, false],
    tactical: [
      "FALSE. \"The number of\" takes a singular verb, since \"number\" (not \"employees\") is the grammatical subject — it should read \"The number…has doubled,\" not \"have doubled.\" Contrast this with \"a number of employees,\" which does take a plural verb — the definite article flips the rule.",
      "FALSE. Formal subjunctive mood after \"It is essential that\" requires the base form of the verb — it should read \"every candidate submit their application,\" not \"submits.\" Impersonal expressions of necessity (\"it is essential/imperative/vital that\") behave exactly like verbs of insistence for this rule.",
      "FALSE. This is a dangling participle: \"Having reviewed the evidence\" should logically modify \"the committee,\" not \"the conclusion\" — the sentence incorrectly implies the conclusion reviewed the evidence. It should read \"Having reviewed the evidence, the committee reached the conclusion that…\" Passive voice is what enables the trap here.",
      "TRUE. \"No sooner…than\" correctly triggers inversion (\"No sooner had the announcement been made\"), and the past perfect followed by simple past (\"began to fall\") correctly sequences the two rapid events. A common wrong \"correction\" would swap \"than\" for \"when\" — that would be ungrammatical.",
      "FALSE. \"Along with several amendments\" is a parenthetical phrase, not part of the compound subject — the verb must agree with the singular \"the proposal,\" so it should read \"The proposal…was rejected,\" not \"were rejected.\" The same rule applies to \"together with,\" \"as well as,\" and \"in addition to.\"",
    ],
    highlights: [
      "The number of employees affected by the restructuring have doubled",
      "every candidate submits their application",
      "Having reviewed the evidence, the conclusion was reached",
      "No sooner had the announcement been made than",
      "The proposal, along with several amendments, were rejected",
    ],
    difficulty: "5/5",
  },
];

const CHAPTERS = [
  { key: "reading", num: 1, title: "Reading", tasks: READING_TASKS as (ReadingTask | GrammarTask)[] },
  { key: "grammar", num: 2, title: "Grammar", tasks: GRAMMAR_TASKS as (ReadingTask | GrammarTask)[] },
  { key: "vocabulary", num: 3, title: "Vocabulary", tasks: [] as (ReadingTask | GrammarTask)[] },
];


// ---------------- Progress ----------------

const STORAGE_KEY = "bbe.english.progress.v1";
type Progress = { passed: string[]; revision: string[] };

function loadProgress(): Progress {
  if (typeof window === "undefined") return { passed: [], revision: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { passed: [], revision: [] };
    const p = JSON.parse(raw) as Progress;
    return { passed: p.passed ?? [], revision: p.revision ?? [] };
  } catch {
    return { passed: [], revision: [] };
  }
}
function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

// ---------------- Component ----------------

function EnglishTasks() {
  const [activeChapter, setActiveChapter] = useState<string | "revision" | null>("reading");
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    reading: true, grammar: false, vocabulary: false,
  });

  type ExplanationState = {
    key: string;
    caseId: string;
    statementIndex: number;
    statementText: string;
    correctAnswer: boolean;
    highlight: string;
  };
  const [explanation, setExplanation] = useState<ExplanationState | null>(null);

  useEffect(() => { setActiveIdx(0); setExplanation(null); }, [activeChapter]);
  useEffect(() => { setExplanation(null); }, [activeIdx]);

  const revisionCases = useMemo(
    () => [...READING_TASKS, ...GRAMMAR_TASKS].filter((t) => progress.revision.includes(t.id)),
    [progress.revision],
  );

  const activeList: (ReadingTask | GrammarTask)[] =
    activeChapter === "revision"
      ? revisionCases
      : activeChapter === "reading"
        ? READING_TASKS
        : activeChapter === "grammar"
          ? GRAMMAR_TASKS
          : [];
  const activeCase = activeList[activeIdx];
  const isGrammarCase =
    !!activeCase && GRAMMAR_TASKS.some((t) => t.id === activeCase.id);

  const recordResult = (id: string, allCorrect: boolean) => {
    setProgress((prev) => {
      const passed = new Set(prev.passed);
      const revision = new Set(prev.revision);
      if (allCorrect) { passed.add(id); revision.delete(id); }
      else { revision.add(id); passed.delete(id); }
      const next = { passed: [...passed], revision: [...revision] };
      saveProgress(next);
      return next;
    });
  };

  const resetCaseIds = (ids: string[]) => {
    if (ids.length === 0) return;
    const s = new Set(ids);
    setProgress((prev) => {
      const next = {
        passed: prev.passed.filter((x) => !s.has(x)),
        revision: prev.revision.filter((x) => !s.has(x)),
      };
      saveProgress(next);
      return next;
    });
  };

  const requestExplanation = (t: ReadingTask | GrammarTask, i: number) => {
    const key = `${t.id}:${i}`;
    if (explanation?.key === key) return;
    setExplanation({
      key,
      caseId: t.id,
      statementIndex: i,
      statementText: t.statements[i],
      correctAnswer: t.answer_key[i],
      highlight: t.highlights[i] ?? "",
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link to="/demo-practice" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">All subjects</span>
          </Link>
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="font-display text-sm font-bold tracking-tight">English</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU BBE · Reading · Grammar · Vocabulary</span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8 lg:py-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-80 lg:shrink-0">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Chapters
            </h3>
            <ul className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {CHAPTERS.map((ch) => {
                const total = ch.tasks.length;
                const done = ch.tasks.filter((t) => progress.passed.includes(t.id)).length;
                const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                const isOpen = !!expanded[ch.key];
                const isActiveCh = activeChapter === ch.key;
                const isComingSoon = total === 0;
                return (
                  <li key={ch.key} className={cn(
                    "rounded-xl border transition-colors",
                    isActiveCh ? "border-primary/40 bg-primary/5" : "border-transparent",
                  )}>
                    <div className="flex items-stretch">
                      <button
                        onClick={() => setExpanded((e) => ({ ...e, [ch.key]: !e[ch.key] }))}
                        className="flex flex-1 items-center gap-2 rounded-l-xl px-3 py-2.5 text-left hover:bg-secondary/60"
                      >
                        <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", !isOpen && "-rotate-90")} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="truncate text-sm font-bold text-foreground">{ch.num}. {ch.title}</span>
                            <span className="shrink-0 text-[10px] font-bold text-muted-foreground">{done}/{total}</span>
                          </div>
                          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                              className={cn("h-full rounded-full transition-all", pct === 100 && total > 0 ? "bg-emerald-500" : "bg-primary")}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="border-t border-border/60 py-1">
                        {isComingSoon && (
                          <li className="px-4 py-2 text-[11px] italic text-muted-foreground">Coming soon.</li>
                        )}
                        {ch.tasks.map((t, i) => {
                          const passed = progress.passed.includes(t.id);
                          const rev = progress.revision.includes(t.id);
                          const active = isActiveCh && activeList[activeIdx]?.id === t.id;
                          return (
                            <li key={t.id}>
                              <button
                                onClick={() => {
                                  setActiveChapter(ch.key);
                                  setTimeout(() => setActiveIdx(i), 0);
                                }}
                                className={cn(
                                  "flex w-full items-center gap-2.5 px-3 py-1.5 pl-9 text-left text-xs transition-colors",
                                  active ? "text-primary font-semibold" : "text-foreground hover:bg-secondary/60",
                                )}
                              >
                                <span className={cn(
                                  "grid h-4 w-4 shrink-0 place-items-center rounded border",
                                  passed ? "border-muted-foreground/40 bg-transparent text-muted-foreground"
                                    : rev ? "border-destructive bg-destructive/10 text-destructive"
                                      : "border-border bg-background",
                                )}>
                                  {passed && <Check className="h-3 w-3" strokeWidth={3} />}
                                  {!passed && rev && <X className="h-3 w-3" strokeWidth={3} />}
                                </span>
                                <span className={cn("truncate", passed && "line-through text-muted-foreground")}>
                                  Task {i + 1}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                        {isComingSoon && Array.from({ length: 3 }).map((_, p) => {
                          const opacity = Math.max(0.08, 0.45 - p * 0.15);
                          return (
                            <li key={`ph-${ch.key}-${p}`}>
                              <button
                                type="button"
                                disabled
                                style={{ opacity }}
                                className="flex w-full cursor-not-allowed items-center gap-2.5 px-3 py-1.5 pl-9 text-left text-xs text-muted-foreground"
                              >
                                <span className="grid h-4 w-4 shrink-0 place-items-center rounded border border-transparent bg-transparent text-muted-foreground">
                                  <Lock className="h-2.5 w-2.5" strokeWidth={2.5} />
                                </span>
                                <span className="truncate">Task {p + 1} · Locked</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 border-t border-border pt-3">
              <button
                onClick={() => setActiveChapter("revision")}
                className={cn(
                  "w-full rounded-xl border p-3 text-left transition-all",
                  activeChapter === "revision"
                    ? "border-destructive bg-destructive/10"
                    : "border-transparent bg-background hover:border-border hover:bg-secondary",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <AlertTriangle className="h-4 w-4 text-destructive" /> Revision
                  </span>
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold",
                    revisionCases.length > 0 ? "bg-destructive text-destructive-foreground" : "bg-secondary text-muted-foreground",
                  )}>
                    {revisionCases.length}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <StatsOverview progress={progress} />

          {activeChapter !== null && (
            <div className="mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                {activeChapter === "revision" ? "Revision folder" : `Chapter ${CHAPTERS.find((c) => c.key === activeChapter)?.num}`}
              </span>
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {activeChapter === "revision"
                  ? "Fix what tripped you up"
                  : CHAPTERS.find((c) => c.key === activeChapter)?.title}
              </h1>
            </div>
          )}

          {activeChapter !== null && activeChapter !== "reading" && activeChapter !== "revision" && (
            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-bold">Coming soon</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                {CHAPTERS.find((c) => c.key === activeChapter)?.title} tasks will land in the next update.
              </p>
            </div>
          )}

          {activeChapter === "revision" && activeList.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              Nothing to revise — all attempted tasks are clean. Keep going.
            </div>
          )}

          {activeCase && (
            <CaseCard
              key={activeCase.id}
              data={activeCase}
              index={activeIdx}
              inRevision={progress.revision.includes(activeCase.id)}
              alreadyPassed={progress.passed.includes(activeCase.id)}
              onGraded={(ok) => recordResult(activeCase.id, ok)}
              onResetProgress={() => resetCaseIds([activeCase.id])}
              activeExplanationIndex={explanation?.caseId === activeCase.id ? explanation.statementIndex : null}
              onRequestExplanation={(i) => requestExplanation(activeCase, i)}
            />
          )}

          {activeList.length > 0 && activeChapter !== null && (
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                disabled={activeIdx === 0}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <span className="text-xs text-muted-foreground">
                {activeIdx + 1} / {activeList.length}
              </span>
              <button
                onClick={() => setActiveIdx((i) => Math.min(activeList.length - 1, i + 1))}
                disabled={activeIdx >= activeList.length - 1}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </main>

        {/* Right panel — always shows the passage; when explanation active, highlight the phrase */}
        <aside className="lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:w-96 lg:shrink-0">
          <ReadingPanel
            passage={READING_PASSAGE}
            explanation={explanation}
            onClose={() => setExplanation(null)}
          />
        </aside>
      </div>
    </div>
  );
}

// ---------------- Case Card ----------------

function CaseCard({
  data, index, onGraded, inRevision, alreadyPassed, onResetProgress,
  activeExplanationIndex, onRequestExplanation,
}: {
  data: ReadingTask; index: number;
  onGraded: (allCorrect: boolean) => void;
  inRevision: boolean; alreadyPassed: boolean;
  onResetProgress: () => void;
  activeExplanationIndex: number | null;
  onRequestExplanation: (i: number) => void;
}) {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setAnswers([null, null, null, null, null]);
    setChecked(false);
    setOpenExpl({});
  }, [data.id]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = data.answer_key.reduce<number>(
    (acc, key, i) => acc + ((answers[i] === true) === key ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    setChecked(true);
    onGraded(correctCount === 5);
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers([null, null, null, null, null]);
    setOpenExpl({});
  };

  const handleFullReset = () => {
    handleReset();
    onResetProgress();
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task {index + 1}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          Difficulty {data.difficulty}
        </span>
        {alreadyPassed && (
          <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
            Passed
          </span>
        )}
        {inRevision && (
          <span className="rounded-md bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-destructive">
            In revision
          </span>
        )}
        <span className="flex-1" />
        {(alreadyPassed || inRevision || checked) && (
          <button
            onClick={handleFullReset}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            <RotateCcw className="h-3 w-3" /> Reset task
          </button>
        )}
      </div>

      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {data.context}
      </p>

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-14 text-center">Correct</span>
          {checked && <span className="w-6" aria-hidden />}
        </li>
        {data.statements.map((stmt, i) => {
          const userAns = answers[i];
          const isChecked = userAns === true;
          const correctAns = data.answer_key[i];
          const effective = isChecked;
          const isCorrect = checked && effective === correctAns;
          const isWrong = checked && effective !== correctAns;
          return (
            <li key={i} className={cn(
              "px-4 py-3 transition-colors",
              isCorrect && "bg-emerald-500/5",
              isWrong && "bg-destructive/5",
            )}>
              <div className="flex items-center gap-3">
                <span className="w-6 text-center text-xs font-bold text-muted-foreground">{i + 1}.</span>
                <p className="flex-1 text-sm leading-relaxed text-foreground">{stmt}</p>
                <div className="flex w-14 justify-center">
                  <button
                    role="checkbox"
                    aria-checked={isChecked}
                    disabled={checked}
                    onClick={() => setAt(i, !isChecked)}
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                      isChecked
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/60",
                      checked && "cursor-default",
                    )}
                  >
                    {isChecked && <Check className="h-4 w-4" strokeWidth={3} />}
                  </button>
                </div>
                {checked && (
                  <span className={cn(
                    "grid h-6 w-6 place-items-center rounded-full",
                    isCorrect ? "bg-emerald-500 text-white" : "bg-destructive text-destructive-foreground",
                  )}>
                    {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                )}
              </div>

              {checked && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setOpenExpl((s) => ({ ...s, [i]: !s[i] }))}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
                  >
                    Explanation
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openExpl[i] && "rotate-180")} />
                  </button>
                  <button
                    onClick={() => onRequestExplanation(i)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                      activeExplanationIndex === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/60 bg-primary/10 text-primary hover:bg-primary/20",
                    )}
                  >
                    <Sparkles className="h-3 w-3" />
                    {activeExplanationIndex === i ? "Highlighted in passage →" : "Show AI text explanation"}
                  </button>
                  {openExpl[i] && (
                    <p className={cn(
                      "mt-1 w-full rounded-md p-3 text-xs leading-relaxed",
                      isCorrect ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200" : "bg-destructive/10 text-destructive",
                    )}>
                      {data.tactical[i]}
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {!checked ? (
          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Check Answers / Submit
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </button>
        )}

        {checked && (
          <div className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold",
            correctCount === 5 ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
              : "bg-destructive/15 text-destructive",
          )}>
            {correctCount === 5 ? "5/5 — case counted ✓" : `${correctCount}/5 — sent to Revision`}
          </div>
        )}
      </div>
    </article>
  );
}

// ---------------- Stats ----------------

function StatsOverview({ progress }: { progress: Progress }) {
  const total = READING_TASKS.length; // only Reading has tasks for now
  const passed = progress.passed.length;
  const rev = progress.revision.length;
  const attempted = passed + rev;
  const accuracy = attempted > 0 ? Math.round((passed / attempted) * 100) : 0;

  return (
    <section className="mb-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Your progress · English
        </h2>
        <span className="text-[10px] font-semibold text-muted-foreground">
          {passed}/{total} tasks passed
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Attempted" value={attempted} />
        <StatTile label="Passed" value={passed} tone="pass" />
        <StatTile label="In revision" value={rev} tone="rev" />
        <StatTile label="Accuracy" value={`${accuracy}%`} />
      </div>
      <ul className="mt-5 space-y-2">
        {CHAPTERS.map((ch) => {
          const list = ch.tasks;
          const done = list.filter((t) => progress.passed.includes(t.id)).length;
          const pct = list.length ? Math.round((done / list.length) * 100) : 0;
          const soon = list.length === 0;
          return (
            <li key={ch.key} className="flex items-center gap-3">
              <span className="w-8 shrink-0 text-xs font-bold text-muted-foreground">Ch.{ch.num}</span>
              <span className="flex-1 truncate text-xs text-foreground">
                {ch.title}
                {soon && (
                  <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-secondary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    <Lock className="h-2.5 w-2.5" /> Coming soon
                  </span>
                )}
              </span>
              <div className="h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
                <div
                  className={cn("h-full rounded-full", pct === 100 && list.length > 0 ? "bg-emerald-500" : "bg-primary")}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-14 shrink-0 text-right text-[11px] font-semibold text-muted-foreground">
                {done}/{list.length}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function StatTile({ label, value, tone }: { label: string; value: number | string; tone?: "pass" | "rev" }) {
  return (
    <div className={cn(
      "rounded-lg border p-3",
      tone === "pass" ? "border-emerald-500/30 bg-emerald-500/5"
        : tone === "rev" ? "border-destructive/30 bg-destructive/5"
          : "border-border bg-secondary/40",
    )}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

// ---------------- Reading passage panel with highlight ----------------

function ReadingPanel({
  passage,
  explanation,
  onClose,
}: {
  passage: string;
  explanation: { key: string; statementIndex: number; statementText: string; correctAnswer: boolean; highlight: string } | null;
  onClose: () => void;
}) {
  const [reveal, setReveal] = useState(false);
  const highlightRef = useRef<HTMLSpanElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setReveal(false);
    if (!explanation) return;
    const t = setTimeout(() => setReveal(true), 250);
    return () => clearTimeout(t);
  }, [explanation?.key, explanation]);

  useEffect(() => {
    if (!reveal || !highlightRef.current) return;
    const el = highlightRef.current;
    const done = () => el.classList.add("done");
    el.addEventListener("animationend", done, { once: true });
    // Scroll the highlighted phrase into view
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    return () => el.removeEventListener("animationend", done);
  }, [reveal]);

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {explanation ? `AI Highlight · Statement ${explanation.statementIndex + 1}` : "Reading Passage"}
          </span>
        </div>
        {explanation && (
          <button
            onClick={onClose}
            aria-label="Close explanation"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {explanation && (
        <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Statement {explanation.statementIndex + 1}
            </span>
            <span className={cn(
              "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
              explanation.correctAnswer ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-destructive/15 text-destructive",
            )}>
              {explanation.correctAnswer ? "TRUE" : "FALSE"}
            </span>
          </div>
          <p className="text-[11px] italic text-muted-foreground">"{explanation.statementText}"</p>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-border bg-[#fdf9f0] shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 bg-white/60 px-4 py-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-taupe">
            <BookOpen className="h-3.5 w-3.5" /> Reading Text
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            The Classical Gold Standard
          </span>
        </div>
        <div ref={scrollRef} className="h-[calc(100%-2.25rem)] overflow-y-auto px-5 py-4 font-serif text-[13px] leading-relaxed text-[#3a2e1f]">
          <PassageBody
            passage={passage}
            highlight={explanation?.highlight ?? ""}
            reveal={reveal && !!explanation}
            highlightRef={highlightRef}
          />
        </div>
      </div>
    </div>
  );
}

function PassageBody({
  passage, highlight, reveal, highlightRef,
}: {
  passage: string;
  highlight: string;
  reveal: boolean;
  highlightRef: React.MutableRefObject<HTMLSpanElement | null>;
}) {
  const paragraphs = passage.split(/\n\n+/);
  const idx = highlight ? passage.indexOf(highlight) : -1;

  if (idx === -1 || !highlight) {
    return (
      <>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 whitespace-pre-line">{p}</p>
        ))}
      </>
    );
  }

  // Find which paragraph contains the highlight and split it
  let cursor = 0;
  return (
    <>
      {paragraphs.map((p, i) => {
        const start = cursor;
        const end = cursor + p.length;
        cursor = end + 2; // account for "\n\n"
        if (idx >= start && idx < end) {
          const rel = idx - start;
          const before = p.slice(0, rel);
          const match = p.slice(rel, rel + highlight.length);
          const after = p.slice(rel + highlight.length);
          return (
            <p key={i} className="mb-3 whitespace-pre-line">
              {before}
              <span
                ref={highlightRef}
                className={reveal ? "neon-highlight" : undefined}
                style={reveal ? undefined : { padding: "0 2px" }}
              >
                {match}
              </span>
              {after}
            </p>
          );
        }
        return <p key={i} className="mb-3 whitespace-pre-line">{p}</p>;
      })}
    </>
  );
}
