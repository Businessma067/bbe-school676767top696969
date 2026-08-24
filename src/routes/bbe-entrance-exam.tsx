import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Languages,
  XCircle,
} from "lucide-react";
import {
  BbeDemoCta,
  BbeFullPrepCta,
  BbeGhostButton,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection, BbeStatGrid } from "@/components/bbe-exam/BbeExamShell";
import {
  BBE_EXAM_FORMAT,
  BBE_FORMAT_NOTE,
  BBE_PRACTICE_ROUTES,
} from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bbe-entrance-exam")({
  head: () => ({
    meta: [
      {
        title: "WU Vienna BBE Entrance Exam: Format, Topics & Preparation Guide | BBE School",
      },
      {
        name: "description",
        content:
          "What is the WU Vienna BBE entrance exam? Format, topics, scoring overview, difficulty and how to prepare — with links to practice and the free demo course.",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Entrance Exam: Format, Topics & Preparation Guide",
      },
      {
        property: "og:description",
        content:
          "A practical overview of the WU BBE entrance exam — structure, subjects, scoring, and preparation paths.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeEntranceExamHubPage,
});

const faqs = [
  {
    question: "What is the WU BBE entrance exam?",
    answer:
      "A written, in-person, multiple-choice exam that is part of the selection procedure for WU Vienna's English-taught Bachelor's Program in Business and Economics, held if registrations exceed available places.",
  },
  {
    question: "What subjects are tested?",
    answer: "Economics & Business, English language skills, and mathematics.",
  },
  {
    question: "How many questions are on the exam?",
    answer:
      "Based on the most recent exam: 34 questions total — 10 Economics & Business, 11 English, and 13 Mathematics.",
  },
  {
    question: "How long is the exam?",
    answer: "2 hours, based on the most recent exam structure.",
  },
  {
    question: "Is the BBE exam difficult?",
    answer:
      "Difficulty varies by section — math typically demands the most preparation time, economics rewards precise reading of definitions, and English rewards general proficiency built over time.",
  },
  {
    question: "How is the BBE exam scored?",
    answer:
      "Via a partial-credit system where correct and incorrect selections under the same stem are weighed against each other. Approximate score weighting from the most recent exam: Economics 40%, English 20%, Mathematics 40%.",
  },
  {
    question: "How are applicants ranked?",
    answer:
      "By written exam performance against the 240 available places; the OSA is ungraded and does not factor into ranking.",
  },
];

const faqJsonLd = buildFaqJsonLd(faqs);

const glanceRows: { field: string; detail: ReactNode }[] = [
  { field: "University", detail: "Vienna University of Economics and Business (WU Vienna)" },
  { field: "Programme", detail: "Bachelor's Program in Business and Economics (BBE), English-taught" },
  { field: "Program start", detail: "Winter semester only" },
  { field: "Exam type", detail: "Written, in person, multiple-choice only" },
  { field: "Exam location", detail: BBE_EXAM_FORMAT.location },
  { field: "Exam duration", detail: `${BBE_EXAM_FORMAT.durationHours} hours` },
  { field: "Exam date / time", detail: BBE_EXAM_FORMAT.cycle.examDate },
  { field: "Alternative date / online option", detail: "None — no exceptions" },
  {
    field: "Exam sections",
    detail: "Economics & Business, English, Mathematics",
  },
  {
    field: "Question count (most recent exam)",
    detail: `34 total — ${BBE_EXAM_FORMAT.economicsQuestions} Economics & Business, ${BBE_EXAM_FORMAT.englishQuestions} English, ${BBE_EXAM_FORMAT.mathQuestions} Mathematics`,
  },
  {
    field: "Approximate score weighting",
    detail: `Economics & Business ${BBE_EXAM_FORMAT.scoreWeighting.economics}, English ${BBE_EXAM_FORMAT.scoreWeighting.english}, Mathematics ${BBE_EXAM_FORMAT.scoreWeighting.mathematics}`,
  },
  {
    field: "Question format",
    detail: (
      <>
        Multiple-choice with partial credit — see{" "}
        <Link
          to="/bbe-exam-scoring"
          className="font-semibold text-foreground underline-offset-4 hover:underline"
        >
          BBE Exam Scoring Explained
        </Link>
      </>
    ),
  },
  { field: "Available places", detail: String(BBE_EXAM_FORMAT.places) },
  { field: "Registration window", detail: BBE_EXAM_FORMAT.cycle.registrationWindow },
  { field: "Registration fee", detail: BBE_EXAM_FORMAT.cycle.registrationFee },
  { field: "OSA deadline", detail: BBE_EXAM_FORMAT.cycle.osaDeadline },
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

function BbeEntranceExamHubPage() {
  return (
    <BbeExamShell
      jsonLd={faqJsonLd}
      h1="WU Vienna BBE Entrance Exam: Format, Topics & Preparation Guide"
      lead="What is the WU Vienna BBE entrance exam and what should you expect? This hub covers format, subjects, scoring overview, difficulty and preparation — then points you to deeper guides and free practice."
      heroActions={
        <>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>Start the Free Demo Course</BbePrimaryButton>
          <BbeGhostButton to={BBE_PRACTICE_ROUTES.mockExams}>Take a Diagnostic Test</BbeGhostButton>
        </>
      }
    >
      <div className="space-y-16">
        <BbeSection id="introduction" title="Introduction">
          <p>
            The Bachelor in Business and Economics (BBE) at WU Vienna is an English-taught undergraduate
            programme. When registrations exceed available places, admission includes a written entrance
            exam. This page is BBE School&apos;s independent overview of what that exam looks like and how
            applicants typically prepare.
          </p>
          <p>
            Use it as a map: skim the format, sample the question style, then follow the subject and
            preparation guides for depth — and practice with BBE-style materials when you are ready.
          </p>
        </BbeSection>

        <BbeSection id="at-a-glance" title="Exam at a glance">
          <BbeStatGrid
            items={[
              { label: "Questions", value: String(BBE_EXAM_FORMAT.questionCount) },
              { label: "Duration", value: `${BBE_EXAM_FORMAT.durationHours} hours` },
              { label: "Places", value: String(BBE_EXAM_FORMAT.places) },
              { label: "Format", value: "In-person MC" },
            ]}
          />
          <BbeInfoCallout label="Most recent exam structure" tone="official">
            {BBE_FORMAT_NOTE}
          </BbeInfoCallout>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
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
          <BbeTextLink to="/bbe-exam-scoring">Learn how BBE partial-credit scoring works →</BbeTextLink>
        </BbeSection>

        <BbeSection id="how-it-works" title="How the exam works">
          <p>
            Every BBE question follows the same structure: a stem — a scenario, claim, short passage, or
            calculation setup — followed by a set of answer options. Your job is to go through the options
            and decide, one by one, whether each is correct. This is not “pick the best answer out of four”
            — it is a series of independent judgment calls under one shared stem.
          </p>
          <QuestionFormatVisual />
          <p>
            Some questions have exactly one correct option; others have several. There is no reliable
            pattern to lean on — you cannot assume a fixed split between true and false — so each option
            has to be evaluated on its own merits, every time. One constraint is worth knowing, though: at
            least one statement is always true. A stem where all five options are false does not happen —
            five true is possible, but all-false is not.
          </p>
        </BbeSection>

        <BbeSection id="sample" title="Sample BBE-style question">
          <p className="text-sm italic">BBE-style practice example — not an official WU question.</p>
          <blockquote className="rounded-xl border-l-4 border-primary/70 bg-secondary/40 px-5 py-4 text-base leading-relaxed text-foreground">
            A factory receives components from two suppliers. Supplier A provides 60% of all components,
            and Supplier B provides the remaining 40%. 3% of Supplier A’s components are defective, and 5%
            of Supplier B’s components are defective. A component is selected at random and found to be
            defective.
          </blockquote>
          <div className="space-y-3">
            {sampleOptions.map((option) => (
              <SampleOption key={option.letter} option={option} />
            ))}
          </div>
          <p>
            Options A, B, and D are true for different reasons — a direct calculation, a comparison of two
            posteriors, and a conceptual “what if” case. Option C confuses the posterior with the prior;
            option E assumes the information is irrelevant when it is not.
          </p>
          <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice BBE-style mathematics questions →</BbeTextLink>
        </BbeSection>

        <BbeSection id="what-is-tested" title="What is tested?">
          <p>
            The exam covers three areas. Question counts below reflect the most recent exam; approximate
            score weighting is the share of the overall result, not the share of questions.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-secondary/60 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Section</th>
                  <th className="px-4 py-3 font-semibold">Questions</th>
                  <th className="px-4 py-3 font-semibold">Approx. score weighting</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">Economics &amp; Business</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.economicsQuestions}</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.scoreWeighting.economics}</td>
                </tr>
                <tr className="border-t border-border bg-secondary/30">
                  <td className="px-4 py-3 text-foreground">English</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.englishQuestions}</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.scoreWeighting.english}</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">Mathematics</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.mathQuestions}</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.scoreWeighting.mathematics}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BbeSection>

        <BbeSection id="mathematics-overview" title="Mathematics overview">
          <SectionCard icon={<Calculator className="h-5 w-5" />} title="Mathematics — highest time demand">
            <p>
              Covers logic, elementary algebra, elementary financial mathematics, equations, linear
              equations in two unknowns, inequalities, linear and quadratic functions, power functions,
              polynomial functions, exponential and logarithmic functions, differentiation and
              single-variable optimization, elementary probability, and binomial distribution. The level is
              comparable to Austria’s “Standardised Competence-Oriented Written School-Leaving Examination,”
              and a formula sheet is provided at the exam.
            </p>
            <p>
              Math is typically the hardest section and the most time-consuming — plan on a large share of
              the 2-hour exam here. WU also varies question styles within these topics from year to year, so
              volume and variety of practice matter.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <BbeTextLink to="/bbe-mathematics">See the complete BBE mathematics topic guide →</BbeTextLink>
              <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice BBE mathematics →</BbeTextLink>
            </div>
          </SectionCard>
        </BbeSection>

        <BbeSection id="economics-overview" title="Economics & Business overview">
          <SectionCard icon={<BookOpen className="h-5 w-5" />} title="Economics & Business — 40% approximate weighting">
            <p>
              Tested via independent literature study of Fuhrmann, B. (2019),{" "}
              <cite className="font-medium not-italic text-foreground">
                Introduction to Business and Economics
              </cite>
              , Chapters 1–6. The material covers basic economic concepts and market mechanisms, types and
              forms of businesses, ownership structures, sources of finance, marketing fundamentals, and
              interpreting short business scenarios and terminology.
            </p>
            <p>
              Exam wording is often precise: a single qualifier can flip a statement. With strong weighting
              relative to question count, this section rewards accuracy and speed once you know the book’s
              definitions.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <BbeTextLink to="/bbe-economics-english">
                Read what to study for Economics &amp; English →
              </BbeTextLink>
              <BbeTextLink to={BBE_PRACTICE_ROUTES.economics}>Practice economics questions →</BbeTextLink>
            </div>
          </SectionCard>
        </BbeSection>

        <BbeSection id="english-overview" title="English overview">
          <SectionCard icon={<Languages className="h-5 w-5" />} title="English — proficiency and speed">
            <p>
              Tests comprehension of English texts on contemporary social issues, vocabulary, and grammar,
              at an expected B2 level. WU recommends practicing on BBC Learning English, British Council
              LearnEnglish, and Cambridge English Language Assessment, and reading business-focused outlets
              such as BBC Worklife, CNN Business, The Guardian Business, Business Insider, and The
              Conversation.
            </p>
            <p>
              This section carries the smallest approximate score share and is harder to “study for”
              directly — it examines general command of English rather than a fixed chapter list.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <BbeTextLink to="/bbe-economics-english">See the Economics &amp; English study guide →</BbeTextLink>
              <BbeTextLink to={BBE_PRACTICE_ROUTES.english}>Practice English questions →</BbeTextLink>
            </div>
          </SectionCard>
        </BbeSection>

        <BbeSection id="difficulty" title="Is the BBE exam difficult?">
          <ul className="space-y-4">
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-base font-semibold text-foreground">
                Mathematics — high preparation demand
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Wide-ranging topics and yearly variation in question style mean volume and variety of
                practice matter more than memorizing fixed problem types.
              </p>
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-base font-semibold text-foreground">
                Economics — concept- and wording-focused
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                The material is bounded to one required text, but exam statements hinge on precise phrasing.
              </p>
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-base font-semibold text-foreground">
                English — proficiency- and speed-focused
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Harder to prepare for with a fixed syllabus; reading speed and vocabulary help most.
              </p>
            </li>
          </ul>
        </BbeSection>

        <BbeSection id="how-to-prepare" title="How should I prepare?">
          <p>
            Most applicants find that 7–9 months of preparation is a reasonable baseline for covering all
            three sections properly. If you have fewer months available, plan for higher intensity. The most
            reliable way to set your timeline is to take a diagnostic or mock early, then adjust focus by
            subject.
          </p>
          <ol className="space-y-3">
            {[
              "Understand the exam format and scoring before you grind questions.",
              "Diagnose Mathematics, Economics, and English separately.",
              "Study topic-by-topic, then mix BBE-style stems.",
              "Add timed practice, then full mock exams.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm sm:text-base">{step}</span>
              </li>
            ))}
          </ol>
          <BbeTextLink to="/bbe-exam-preparation">Read our complete BBE preparation guide →</BbeTextLink>
        </BbeSection>

        <BbeSection id="mistakes" title="Common mistakes">
          <ol className="space-y-3">
            {mistakes.map((item, i) => (
              <li key={item} className="flex gap-3 text-sm sm:text-base">
                <span className="mt-0.5 w-6 shrink-0 font-display font-semibold text-foreground">
                  {i + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </BbeSection>

        <BbeSection id="faq" title="Short FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeSection id="resources" title="Detailed BBE resources">
          <div className="grid gap-4 sm:grid-cols-2">
            <ResourceCard
              icon={<ClipboardList className="h-4 w-4" />}
              title="Exam scoring"
              to="/bbe-exam-scoring"
              body="Partial credit, points per question, and worked scoring examples"
            />
            <ResourceCard
              icon={<Calculator className="h-4 w-4" />}
              title="Mathematics guide"
              to="/bbe-mathematics"
              body="Full topic breakdown with preparation advice and practice links"
            />
            <ResourceCard
              icon={<BookOpen className="h-4 w-4" />}
              title="Economics & English"
              to="/bbe-economics-english"
              body="Fuhrmann chapters, English skills, and study approach"
            />
            <ResourceCard
              icon={<Languages className="h-4 w-4" />}
              title="Admission & application"
              to="/bbe-admission"
              body="Registration, OSA, entrance exam and ranking overview"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ResourceCard
              icon={<Calculator className="h-4 w-4" />}
              title="Mathematics practice"
              to={BBE_PRACTICE_ROUTES.math}
              body="BBE-style math tasks by syllabus chapter"
            />
            <ResourceCard
              icon={<BookOpen className="h-4 w-4" />}
              title="Economics practice"
              to={BBE_PRACTICE_ROUTES.economics}
              body="Economics questions · flashcards available separately"
            />
            <ResourceCard
              icon={<Languages className="h-4 w-4" />}
              title="English practice"
              to={BBE_PRACTICE_ROUTES.english}
              body="Vocabulary, reading and language skills practice"
            />
            <ResourceCard
              icon={<ClipboardList className="h-4 w-4" />}
              title="Mock & diagnostic"
              to={BBE_PRACTICE_ROUTES.mockExams}
              body="Diagnostic-style sets and full mock exams"
            />
          </div>
        </BbeSection>

        <BbeDemoCta
          title="Want to try BBE School preparation for free?"
          body="Start the free demo course to experience sample lessons, BBE-style questions and explanations."
        />

        <BbeFullPrepCta />
      </div>
    </BbeExamShell>
  );
}

function QuestionFormatVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        One stem
      </p>
      <div className="mx-auto mt-3 max-w-md rounded-xl border border-border bg-secondary/50 px-4 py-3 text-center text-sm font-medium text-foreground">
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
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-secondary font-display text-xs font-bold text-foreground">
              {letter}
            </span>
            <span>Select or don’t select</span>
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
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary font-display text-sm font-bold text-foreground">
          {option.letter}
        </span>
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-foreground sm:text-[15px]">
          {option.statement}
        </p>
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
      <p className="mt-3 text-sm leading-relaxed sm:pl-11">{option.explanation}</p>
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
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-foreground">
          {icon}
        </span>
        <div className="min-w-0 space-y-4">
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{title}</h3>
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
  to: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-foreground">
          {icon}
        </span>
        <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed">{body}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:text-primary">
        Open
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
