import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Clock,
  GraduationCap,
  Languages,
  XCircle,
} from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bbe-entrance-exam-guide")({
  head: () => ({
    meta: [
      {
        title: "WU BBE Entrance Exam 2027: Format, Topics & Scoring Guide | BBE School",
      },
      {
        name: "description",
        content:
          "A complete guide to the WU Vienna BBE entrance exam — format, question breakdown by section, math/economics/English topics, scoring rules, and how to prepare.",
      },
      { property: "og:title", content: "The WU BBE Entrance Exam, Fully Explained" },
      {
        property: "og:description",
        content:
          "Format, topics, scoring, and a practical prep plan for WU Vienna's BBE entrance exam.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeEntranceExamGuidePage,
});

const faqs = [
  {
    question: "What is the WU BBE entrance exam?",
    answer:
      "A written, in-person, multiple-choice exam that is part of the selection procedure for WU Vienna's English-taught Bachelor's Program in Business and Economics, held if registrations exceed available places.",
  },
  {
    question: "What subjects are tested?",
    answer: "Economics, English language skills, and mathematics.",
  },
  {
    question: "How does the BBE exam work?",
    answer:
      "Each question is multiple-choice, scored with a partial-credit system rather than simple right/wrong. A shared stem is followed by several statements; you judge each statement independently.",
  },
  {
    question: "Are BBE questions multiple choice?",
    answer: "Yes.",
  },
  {
    question: "How many questions are on the exam?",
    answer: "34 questions total — 10 Economics, 11 English, and 13 Mathematics.",
  },
  {
    question: "Is the BBE exam difficult?",
    answer:
      "Difficulty varies by section — math demands the most preparation time, economics rewards precise reading, and English rewards general proficiency built over time.",
  },
  {
    question: "What mathematics topics are tested?",
    answer:
      "Logic, elementary algebra, elementary financial mathematics, equations, linear equations in two unknowns, inequalities, linear and quadratic functions, power functions, polynomial functions, exponential and logarithmic functions, differentiation and single-variable optimization, elementary probability, and binomial distribution.",
  },
  {
    question: "Is probability included?",
    answer:
      "Yes — elementary probability, conditional probability, Bayes' theorem, and binomial distribution.",
  },
  {
    question: "Is binomial distribution included?",
    answer: "Yes.",
  },
  {
    question: "What economics topics should I study?",
    answer: "Chapters 1–6 of Fuhrmann (2019), Introduction to Business and Economics.",
  },
  {
    question: "What English skills are tested?",
    answer:
      "Reading comprehension of texts on contemporary social issues, vocabulary, and grammar, at a B2 level.",
  },
  {
    question: "How should I prepare?",
    answer:
      "Follow the seven-step strategy on this page: learn the syllabus, get used to the question format, build subject knowledge, drill topics, mix questions, practise under time pressure, then sit full mock exams.",
  },
  {
    question: "How long should I prepare?",
    answer:
      "7–9 months is a common baseline; less time available means higher-intensity study is needed to cover the same ground. Take a mock exam early to see your starting level and adjust from there.",
  },
  {
    question: "How is the BBE exam scored?",
    answer:
      "Via a partial-credit system, where correct and incorrect answer options are weighted against each other per question. Section weights are Economics 40%, English 20%, and Mathematics 40%.",
  },
  {
    question: "How are applicants ranked?",
    answer:
      "By written exam performance against the 240 available places; the OSA is ungraded and does not factor into ranking.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const toc = [
  { id: "at-a-glance", label: "Exam at a glance" },
  { id: "how-it-works", label: "How the exam works" },
  { id: "sections", label: "The three sections" },
  { id: "difficulty", label: "How difficult is it?" },
  { id: "how-long", label: "How long to prepare" },
  { id: "how-to-prepare", label: "How to prepare" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "scoring", label: "Scoring" },
  { id: "resources", label: "Practice resources" },
  { id: "faq", label: "FAQ" },
];

const glanceRows: { field: string; detail: ReactNode }[] = [
  { field: "University", detail: "Vienna University of Economics and Business (WU Vienna)" },
  { field: "Programme", detail: "Bachelor's Program in Business and Economics (BBE), English-taught" },
  { field: "Program start", detail: "Winter semester only" },
  { field: "Exam type", detail: "Written, in person, multiple-choice only" },
  { field: "Exam location", detail: "VIECON – Vienna Congress and Convention Center (Messe Wien)" },
  { field: "Exam duration", detail: "2 hours" },
  { field: "Exam date / time", detail: "June 30, 2026, 3:00–5:00 p.m. CEST" },
  { field: "Alternative date / online option", detail: "None — no exceptions" },
  { field: "Exam sections", detail: "Economics, English, Mathematics" },
  { field: "Question count", detail: "34 questions total — 10 Economics, 11 English, 13 Mathematics" },
  { field: "Section weighting", detail: "Economics 40%, English 20%, Mathematics 40%" },
  {
    field: "Question format",
    detail: (
      <>
        Multiple-choice, partial-credit system — full breakdown in{" "}
        <a href="#scoring" className="font-semibold text-foreground underline-offset-4 hover:underline">
          BBE Exam Scoring Explained
        </a>
      </>
    ),
  },
  { field: "Available places", detail: "240" },
  { field: "Registration window", detail: "March 2 – May 19, 2026" },
  { field: "Registration fee", detail: "€50 (waived for Ukrainian citizens)" },
  { field: "OSA deadline", detail: "May 28, 2026, 12:00 noon CEST" },
  { field: "OSA graded?", detail: "No — ungraded" },
  {
    field: "Required exam-day items",
    detail:
      "Physical government-issued photo ID (original), printed exam invitation, blue/black ballpoint pen, permitted calculator, snack/drink optional",
  },
  { field: "Calculator rules", detail: "Only calculators on WU's published permitted list" },
  { field: "Formula sheet", detail: "Provided at the exam" },
];

const sampleOptions = [
  {
    letter: "A",
    statement: "The overall probability that a randomly selected component is defective is 3.8%.",
    answer: "True" as const,
    explanation: "P(defective) = 0.6 × 0.03 + 0.4 × 0.05 = 0.018 + 0.02 = 0.038 = 3.8%.",
  },
  {
    letter: "B",
    statement:
      "Given that the component is defective, it is more likely to have come from Supplier B than Supplier A.",
    answer: "True" as const,
    explanation:
      "By Bayes' theorem: P(B | defective) = 0.02 / 0.038 ≈ 52.6%, versus P(A | defective) ≈ 47.4%.",
  },
  {
    letter: "C",
    statement: "P(A | defective) is exactly 60%, the same as the prior P(A).",
    answer: "False" as const,
    explanation:
      "The posterior P(A | defective) ≈ 47.4% — lower than the 60% prior, since observing a defect shifts the odds toward Supplier B.",
  },
  {
    letter: "D",
    statement:
      "If both suppliers had identical defect rates, the posterior probabilities would equal the priors.",
    answer: "True" as const,
    explanation:
      "With equal defect rates, the defect carries no information distinguishing the suppliers, so the posteriors equal the priors (60% / 40%).",
  },
  {
    letter: "E",
    statement: "Knowing the component is defective tells us nothing about which supplier it came from.",
    answer: "False" as const,
    explanation: "It does shift the probabilities, since the two suppliers have different defect rates.",
  },
];

const prepSteps = [
  {
    title: "Understand the syllabus",
    text: "Start with the exam overview on this page, then work through the required Fuhrmann chapters for economics and the official math topic list.",
  },
  {
    title: "Learn the question format",
    text: "Take a diagnostic-style practice set to get comfortable evaluating multiple options per stem in the real BBE style before you commit to a study plan.",
  },
  {
    title: "Build subject knowledge",
    text: "Work through BBE School's economics flashcards chapter by chapter, and our math lessons topic by topic, in the order they appear on the exam syllabus.",
  },
  {
    title: "Practice individual topics",
    text: "Use topic-specific practice sets (Algebra, Inequalities, Functions, Probability, Binomial Distribution, Financial Mathematics, and more) to isolate and fix weak areas before mixing them.",
  },
  {
    title: "Practice mixed questions",
    text: "Move into mixed practice once individual topics feel solid, so you are training the same across-topic thinking the real exam demands.",
  },
  {
    title: "Practice under time pressure",
    text: "Switch on Timed Practice Mode to build pacing instincts across all three sections, not just accuracy.",
  },
  {
    title: "Complete full mock exams",
    text: "Finish your prep with full-length mock exams, built to the real 34-question, three-section format and scored with the same logic as the actual exam.",
  },
];

const mistakes = [
  "Assuming answer options within a question must “balance” in some predictable way.",
  "Treating the options under one stem as a single multiple-choice question with one best answer, rather than evaluating each independently.",
  "Spending too long on one difficult option at the expense of easier ones elsewhere.",
  "Guessing on a close call without working through the actual calculation or definition.",
  "Confusing “at least” and “exactly” in probability or math phrasing.",
  "Ignoring precise wording in economics statements — a single qualifier can flip an answer.",
  "Memorizing math formulas without understanding when and why they apply.",
  "Practicing only familiar problem types and skipping unfamiliar question styles.",
  "Not practicing under real time pressure before exam day.",
  "Not reviewing mistakes after practice sessions — repeating the same error type across multiple practice sets.",
];

function BbeEntranceExamGuidePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.72), rgba(0,0,0,0.86)), url(${wuAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
              Independent, unofficial guide — not affiliated with WU Vienna
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
              Last updated: August 22, 2026
            </span>
          </div>
          <h1 className="mt-6 font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl sm:leading-[1.1] lg:text-5xl">
            WU Vienna BBE Entrance Exam 2027: Format, Topics, Questions &amp; Preparation Guide
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Everything you need to know about the WU Vienna Bachelor in Business and Economics entrance
            exam — exam format, mathematics, economics, English, scoring, difficulty, and how to prepare.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta to="/demo-practice">Start Practicing</PrimaryCta>
            <Link
              to="/mock-exams"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Take a Diagnostic Test
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[16.5rem_minmax(0,1fr)]">
          <nav aria-label="On this page" className="mb-10 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              On this page
            </p>
            <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {toc.map((item) => (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    className="block whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:whitespace-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-16">
            <section id="at-a-glance" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                BBE Exam at a Glance
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <dl>
                  {glanceRows.map((row, i) => (
                    <div
                      key={row.field}
                      className={cn(
                        "grid gap-1 px-4 py-3 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:gap-6 sm:px-5",
                        i % 2 === 0 ? "bg-card" : "bg-secondary/40",
                      )}
                    >
                      <dt className="text-sm font-semibold text-foreground">{row.field}</dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">{row.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <section id="how-it-works" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                How the BBE Entrance Exam Works — and What a Question Looks Like
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every BBE question follows the same structure: a stem — a scenario, claim, short passage,
                or calculation setup — followed by a set of answer options. Your job is to go through the
                options and decide, one by one, whether each is correct. This is not “pick the best answer
                out of four” — it is a series of independent judgment calls under one shared stem.
              </p>
              <QuestionFormatVisual />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Some questions have exactly one correct option; others have several. There is no reliable
                pattern to lean on — you cannot assume a fixed split between true and false — so each option
                has to be evaluated on its own merits, every time. One constraint is worth knowing, though:
                at least one statement is always true. A stem where all five options are false does not
                happen — five true is possible, but all-false is not.
              </p>
              <h3 className="mt-10 font-display text-xl font-bold tracking-tight">
                Sample question (Mathematics / Probability)
              </h3>
              <p className="mt-2 text-sm italic text-muted-foreground">
                BBE-style practice example — not an official WU question.
              </p>
              <blockquote className="mt-4 rounded-xl border-l-4 border-primary/70 bg-secondary/40 px-5 py-4 text-base leading-relaxed">
                A factory receives components from two suppliers. Supplier A provides 60% of all
                components, and Supplier B provides the remaining 40%. 3% of Supplier A’s components are
                defective, and 5% of Supplier B’s components are defective. A component is selected at
                random and found to be defective.
              </blockquote>
              <div className="mt-5 space-y-3">
                {sampleOptions.map((option) => (
                  <SampleOption key={option.letter} option={option} />
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Options A, B, and D are all true for different reasons — a direct calculation, a comparison
                of two posteriors, and a conceptual “what if” case. Option C is the classic trap: confusing
                the posterior with the prior. Option E is the other trap: assuming the information is
                irrelevant when it is not. Evaluating each option independently, rather than
                pattern-matching, is what separates a strong score here from a mediocre one.
              </p>
              <TextLink to="/demo-practice/math">Practice more Bayes’ theorem questions</TextLink>
            </section>

            <section id="sections" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                The Three Exam Sections
              </h2>
              <SectionCard
                icon={<BookOpen className="h-5 w-5" />}
                title="Economics — 10 questions, 40% of the exam"
              >
                <p>
                  Tested via independent literature study of Fuhrmann, B. (2019),{" "}
                  <cite className="font-medium not-italic text-foreground">Introduction to Business and Economics</cite>,
                  Chapters 1–6. The material covers the fundamentals of business and economics: basic
                  economic concepts and market mechanisms, types and forms of businesses, ownership
                  structures, sources of finance, marketing fundamentals, and interpreting short business
                  scenarios and terminology.
                </p>
                <p>
                  This is the most straightforward section for anyone who has studied economics or business
                  before — the underlying logic is not difficult to follow. For newcomers, the book needs to
                  be read thoroughly and its definitions memorized, because exam wording is often precise
                  to the point of being tricky: a single qualifier or ambiguous phrase can flip a statement
                  from true to false. With 10 questions carrying 40% of the exam’s weight, this section
                  rewards accuracy and speed — the goal is to move through it quickly (10–20 minutes) once
                  you are familiar with the exam’s phrasing style, which only comes from practicing a high
                  volume of exam-style questions.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <TextLink to="/flashcards/$subject" params={{ subject: "economics" }}>
                    Study BBE economics flashcards
                  </TextLink>
                  <TextLink to="/demo-practice/economics">Practice economics questions</TextLink>
                </div>
              </SectionCard>
              <SectionCard
                icon={<Languages className="h-5 w-5" />}
                title="English — 11 questions, 20% of the exam"
              >
                <p>
                  Tests comprehension of English texts on contemporary social issues, vocabulary, and
                  grammar, at an expected B2 level. WU recommends practicing on BBC Learning English,
                  British Council LearnEnglish, and Cambridge English Language Assessment, and reading
                  business-focused outlets such as BBC Worklife, CNN Business, The Guardian Business,
                  Business Insider, and The Conversation.
                </p>
                <p>
                  This section carries the smallest share of the exam and is, ironically, the hardest to
                  prepare for directly — it examines general command of English rather than a fixed
                  syllabus you can study cover to cover. Strong readers with solid vocabulary and grammar
                  instincts will do well; for everyone else, the practical approach is to build
                  business-relevant vocabulary and reading speed over time, since these are the free points
                  available for the taking.
                </p>
                <TextLink to="/demo-practice/english">Practice English vocabulary &amp; reading</TextLink>
              </SectionCard>
              <SectionCard
                icon={<Calculator className="h-5 w-5" />}
                title="Mathematics — 13 questions, 40% of the exam"
              >
                <p>
                  Covers logic, elementary algebra, elementary financial mathematics, equations, linear
                  equations in two unknowns, inequalities, linear and quadratic functions, power functions,
                  polynomial functions, exponential and logarithmic functions, differentiation and
                  single-variable optimization, elementary probability, and binomial distribution. The
                  level is comparable to Austria’s “Standardised Competence-Oriented Written School-Leaving
                  Examination,” and a formula sheet is provided at the exam.
                </p>
                <p>
                  Math is the hardest section and the most time-consuming — plan on at least 1 hour 20
                  minutes of the 2-hour exam here. How much preparation you personally need depends on your
                  starting point, but with enough time invested, anyone can master these topics; there is
                  no natural ceiling the way there is with English. WU also varies question styles within
                  these topics from year to year, so the only real defense is practicing a large volume of
                  varied questions until unfamiliar formats stop feeling unfamiliar — while staying fast
                  enough not to run out of time.
                </p>
                <TextLink to="/demo-practice/math">Practice BBE-style math questions</TextLink>
              </SectionCard>
            </section>

            <section id="difficulty" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                How Difficult Is the BBE Entrance Exam?
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="rounded-xl border border-border bg-card p-5">
                  <p className="font-display text-base font-semibold">Mathematics — high preparation demand</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Wide-ranging topics and yearly variation in question style mean volume and variety of
                    practice matter more than memorizing fixed problem types.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card p-5">
                  <p className="font-display text-base font-semibold">Economics — concept- and wording-focused</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The material is bounded to one required text, but exam statements hinge on precise
                    phrasing.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card p-5">
                  <p className="font-display text-base font-semibold">English — proficiency- and speed-focused</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Harder to “study for” directly since it examines general command of the language rather
                    than a fixed syllabus.
                  </p>
                </li>
              </ul>
            </section>

            <section id="how-long" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                How Long Should I Prepare?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Most applicants find that 7–9 months of preparation is a reasonable baseline for covering
                all three sections properly. If you have fewer months available than that, the trade-off is
                intensity — plan for more hours per week to cover the same ground in less time.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The most reliable way to set your own timeline is to stop guessing and check: take a full
                mock exam early on to see where you actually stand across Economics, English, and
                Mathematics, then adjust your preparation time and focus based on the result rather than a
                generic rule of thumb.
              </p>
              <TextLink to="/mock-exams">Take a mock exam to find your starting point</TextLink>
            </section>

            <section id="how-to-prepare" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                How to Prepare for the BBE Exam
              </h2>
              <ol className="mt-6 space-y-4">
                {prepSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-display text-base font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="mistakes" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Common BBE Exam Mistakes
              </h2>
              <ol className="mt-6 space-y-3">
                {mistakes.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span className="mt-0.5 w-6 shrink-0 font-display font-semibold text-foreground">
                      {i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="scoring" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                BBE Exam Scoring Explained
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Scoring is a partial-credit system: correct and incorrect options under the same stem are
                weighed against each other, so blindly ticking everything is a poor strategy. Leaving an
                option unanswered does not earn points and does not subtract in the same way a confident
                wrong tick can.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Section weights on the final result are Economics 40%, English 20%, and Mathematics 40%.
                Applicants are ranked by written-exam performance for the 240 places. The OSA is ungraded
                and does not enter the ranking.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The most reliable way to internalise the marking is to sit a scored mock: the platform
                applies the same per-statement logic used in prep, so you see how a mixed true/false
                pattern actually converts into points.
              </p>
              <TextLink to="/mock-exams">See scoring on a mock exam</TextLink>
            </section>

            <section id="resources" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                BBE Practice Resources
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ResourceCard
                  icon={<Calculator className="h-4 w-4" />}
                  title="Mathematics"
                  to="/demo-practice/math"
                  body="Algebra · Equations · Inequalities · Functions · Probability · Binomial Distribution · Financial Mathematics"
                />
                <ResourceCard
                  icon={<BookOpen className="h-4 w-4" />}
                  title="Economics"
                  to="/demo-practice/economics"
                  body="Economics practice questions · Economics flashcards"
                />
                <ResourceCard
                  icon={<Languages className="h-4 w-4" />}
                  title="English"
                  to="/demo-practice/english"
                  body="Vocabulary · Reading · Grammar"
                />
                <ResourceCard
                  icon={<ClipboardList className="h-4 w-4" />}
                  title="Also"
                  to="/mock-exams"
                  body="Diagnostic test · Mock exam · Scoring explained above"
                />
              </div>
            </section>

            <section id="faq" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
              <Accordion type="single" collapsible className="mt-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="rounded-2xl border border-[#C2643A]/30 bg-gradient-to-br from-[#fff7f0] to-[#ffe9d6] p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/80">
                  <GraduationCap className="h-5 w-5 text-[#C2643A]" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    Ready to prepare for the BBE entrance exam?
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to="/mock-exams"
                      className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
                      style={{ background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)" }}
                    >
                      Take the Diagnostic Test
                    </Link>
                    <GhostCta to="/demo-practice">Practice BBE Questions</GhostCta>
                    <GhostCta to="/flashcards">Study BBE Flashcards</GhostCta>
                    <GhostCta to="/mock-exams">Try a Mock Exam</GhostCta>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Independent preparation guide. Not affiliated with WU Vienna. Dates and rules can change —
            always confirm details on the official WU website.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Last updated August 22, 2026
          </div>
        </div>
      </footer>
    </div>
  );
}

function PrimaryCta({ to, children }: { to: "/demo-practice"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
      style={{
        background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)",
        boxShadow: "0 8px 20px -8px rgba(232,93,58,0.55)",
      }}
    >
      {children}
    </Link>
  );
}

function GhostCta({
  to,
  children,
}: {
  to: "/demo-practice" | "/flashcards" | "/mock-exams";
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
    >
      {children}
    </Link>
  );
}

function TextLink({
  to,
  params,
  children,
}: {
  to:
    | "/demo-practice/math"
    | "/demo-practice/economics"
    | "/demo-practice/english"
    | "/mock-exams"
    | "/flashcards/$subject";
  params?: { subject: string };
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      params={params}
      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function QuestionFormatVisual() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        One stem
      </p>
      <div className="mx-auto mt-3 max-w-md rounded-xl border border-border bg-secondary/50 px-4 py-3 text-center text-sm font-medium">
        Scenario, claim, passage, or calculation
      </div>
      <div className="my-3 text-center text-muted-foreground" aria-hidden="true">
        ↓
      </div>
      <ul className="mx-auto max-w-md space-y-2">
        {["A", "B", "C", "D", "E"].map((letter) => (
          <li
            key={letter}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-secondary font-display text-xs font-bold">
              {letter}
            </span>
            <span className="text-muted-foreground">Select or don’t select</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SampleOption({ option }: { option: (typeof sampleOptions)[number] }) {
  return (
    <article className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-start gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary font-display text-sm font-bold">
          {option.letter}
        </span>
        <p className="min-w-0 flex-1 text-sm leading-relaxed sm:text-[15px]">{option.statement}</p>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
            option.answer === "True" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800",
          )}
        >
          {option.answer === "True" ? (
            <CheckCircle2 className="h-3.5 w-3.5" />
          ) : (
            <XCircle className="h-3.5 w-3.5" />
          )}
          {option.answer}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:pl-11">{option.explanation}</p>
    </article>
  );
}

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mt-5 rounded-2xl border border-border bg-card p-6 shadow-sm first:mt-8">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary">{icon}</span>
        <div className="min-w-0 space-y-4">
          <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
          {children}
        </div>
      </div>
    </article>
  );
}

function ResourceCard({
  icon,
  title,
  to,
  body,
}: {
  icon: ReactNode;
  title: string;
  to: "/demo-practice/math" | "/demo-practice/economics" | "/demo-practice/english" | "/mock-exams";
  body: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary">{icon}</span>
        <h3 className="font-display text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold group-hover:text-primary">
        Open
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
