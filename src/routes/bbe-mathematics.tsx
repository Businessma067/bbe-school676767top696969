import { createFileRoute } from "@tanstack/react-router";
import {
  BbeDemoCta,
  BbeFullPrepCta,
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
  MATH_TOPICS,
} from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bbe-mathematics")({
  head: () => ({
    meta: [
      {
        title: "WU Vienna BBE Mathematics: Topics, Syllabus & Practice | BBE School",
      },
      {
        name: "description",
        content:
          "What mathematics is on the WU Vienna BBE entrance exam? Topic breakdown, preparation order, common mistakes, a sample question, and links to BBE math practice.",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Mathematics: Topics, Syllabus & Practice",
      },
      {
        property: "og:description",
        content:
          "Complete BBE mathematics topic guide with preparation advice and practice links.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeMathematicsPage,
});

const faqs = [
  {
    question: "What mathematics is on the BBE exam?",
    answer:
      "Logic, elementary algebra, elementary financial mathematics, equations, linear equations in two unknowns, inequalities, linear and quadratic functions, power functions, polynomial functions, exponential and logarithmic functions, differentiation and single-variable optimization, elementary probability, and binomial distribution.",
  },
  {
    question: "How many math questions are there?",
    answer: `Based on the most recent exam: ${BBE_EXAM_FORMAT.mathQuestions} mathematics questions, with approximately ${BBE_EXAM_FORMAT.scoreWeighting.mathematics} score weighting.`,
  },
  {
    question: "Is a formula sheet provided?",
    answer: "Yes — a formula sheet is provided at the exam.",
  },
  {
    question: "Is probability included?",
    answer:
      "Yes — elementary probability (including conditional probability / Bayes-style reasoning) and binomial distribution.",
  },
  {
    question: "What calculator can I use?",
    answer:
      "Only calculators on WU’s published permitted list. Confirm the current list on the official WU site before exam day.",
  },
];

const sampleOptions = [
  {
    letter: "A",
    text: "The overall probability that a randomly selected component is defective is 3.8%.",
    answer: "True",
  },
  {
    letter: "B",
    text: "Given that the component is defective, it is more likely to have come from Supplier B than Supplier A.",
    answer: "True",
  },
  {
    letter: "C",
    text: "P(A | defective) is exactly 60%, the same as the prior P(A).",
    answer: "False",
  },
];

function BbeMathematicsPage() {
  return (
    <BbeExamShell
      jsonLd={buildFaqJsonLd(faqs)}
      h1="WU Vienna BBE Mathematics: Topics, Syllabus & Practice"
      lead="What mathematics appears on the WU Vienna BBE entrance exam, how the section fits the overall paper, and how to prepare topic by topic with BBE-style practice."
      heroActions={
        <BbePrimaryButton to={BBE_PRACTICE_ROUTES.math}>Practice BBE Mathematics</BbePrimaryButton>
      }
    >
      <div className="space-y-14">
        <BbeSection id="introduction" title="Introduction">
          <p>
            Mathematics is the section most applicants treat as the preparation bottleneck: broad syllabus,
            varied question styles across years, and a large share of exam time. This guide walks through
            the topic list used in BBE School’s preparation materials, aligned with the mathematics areas
            described in the BBE Entrance Exam Guide.
          </p>
        </BbeSection>

        <BbeSection id="role" title="Role of mathematics in the BBE exam">
          <BbeStatGrid
            items={[
              {
                label: "Math questions",
                value: String(BBE_EXAM_FORMAT.mathQuestions),
              },
              {
                label: "Approx. weighting",
                value: BBE_EXAM_FORMAT.scoreWeighting.mathematics,
              },
              { label: "Exam length", value: `${BBE_EXAM_FORMAT.durationHours} hours` },
              { label: "Formula sheet", value: "Provided" },
            ]}
          />
          <BbeInfoCallout label="Most recent exam structure" tone="official">
            {BBE_FORMAT_NOTE} Mathematics carried {BBE_EXAM_FORMAT.mathQuestions} of the{" "}
            {BBE_EXAM_FORMAT.questionCount} questions with approximately{" "}
            {BBE_EXAM_FORMAT.scoreWeighting.mathematics} score weighting.
          </BbeInfoCallout>
          <p>
            Plan for mathematics to take a large share of the two hours — many applicants budget well over
            an hour here so Economics and English can be completed without rushing earlier.
          </p>
        </BbeSection>

        <BbeSection id="overview" title="Mathematics exam overview">
          <p>
            The level is comparable to Austria’s “Standardised Competence-Oriented Written School-Leaving
            Examination.” Questions use the same multi-statement format as the rest of the paper: evaluate
            each option independently under one stem. A formula sheet is provided; calculators must be on
            WU’s permitted list.
          </p>
          <p>
            WU varies question styles within these topics from year to year. Memorising a narrow set of
            “typical” drills is weaker preparation than practising volume and variety until unfamiliar
            wording stops slowing you down.
          </p>
          <BbeTextLink to="/bbe-exam-scoring">Learn how BBE partial-credit scoring works →</BbeTextLink>
        </BbeSection>

        <BbeSection id="topics" title="Complete topic breakdown">
          <BbeInfoCallout label="Topic list source" tone="official">
            The topic areas below match the mathematics syllabus described in the BBE Entrance Exam Guide
            (logic through binomial distribution). Within BBE School practice, these areas are organised as
            chapters so you can drill one theme at a time.
          </BbeInfoCallout>
          <BbeInfoCallout label="BBE School recommendation" tone="advice">
            Use the order further down this page if you are rebuilding fundamentals: algebra and equations
            before functions, then calculus/optimisation, then probability and binomial. Always finish with
            mixed BBE-style stems under time pressure.
          </BbeInfoCallout>

          <div className="space-y-5">
            {MATH_TOPICS.map((topic) => (
              <article
                key={topic.id}
                id={topic.id}
                className="scroll-mt-28 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {topic.title}
                </h3>
                <dl className="mt-4 space-y-3 text-sm sm:text-[15px]">
                  <div>
                    <dt className="font-semibold text-foreground">What you should know</dt>
                    <dd className="mt-1 text-muted-foreground">{topic.know}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Important concepts</dt>
                    <dd className="mt-1 text-muted-foreground">{topic.concepts}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Typical mistakes</dt>
                    <dd className="mt-1 text-muted-foreground">{topic.mistakes}</dd>
                  </div>
                </dl>
                <div className="mt-4">
                  <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>
                    Practice BBE {topic.title} →
                  </BbeTextLink>
                </div>
              </article>
            ))}
          </div>
        </BbeSection>

        <BbeSection id="how-to-prepare" title="How to prepare for BBE mathematics">
          <ol className="space-y-3">
            {[
              "Confirm the topic list and question format (this page + the exam guide).",
              "Diagnose with a mixed math set or mock so you know which chapters leak points.",
              "Study one chapter at a time: definitions → worked examples → BBE-style stems.",
              "Keep an error log for recurring traps (signs, “at least”, Bayes mix-ups).",
              "Mix chapters, then add timed blocks matching exam pacing.",
              "Finish with full mocks that include all three sections.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <BbeTextLink to="/bbe-exam-preparation">Read our complete BBE preparation guide →</BbeTextLink>
        </BbeSection>

        <BbeSection id="order" title="Recommended order of preparation">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Logic &amp; elementary algebra (accuracy under statement-style wording)</li>
            <li>Equations, two-unknown linear systems, inequalities</li>
            <li>Linear/quadratic, power, polynomial, exponential &amp; logarithmic functions</li>
            <li>Differentiation and single-variable optimization</li>
            <li>Elementary financial mathematics</li>
            <li>Elementary probability, then binomial distribution</li>
            <li>Mixed review and timed full-section practice</li>
          </ol>
          <p className="text-sm italic">
            BBE School recommendation — adjust if a diagnostic shows a different weak-area profile.
          </p>
        </BbeSection>

        <BbeSection id="sample" title="Sample BBE-style mathematics question">
          <p className="text-sm italic">BBE-style practice example — not an official WU question.</p>
          <blockquote className="rounded-xl border-l-4 border-primary/70 bg-secondary/40 px-5 py-4 text-foreground">
            A factory receives components from two suppliers. Supplier A provides 60% of all components,
            and Supplier B provides the remaining 40%. 3% of Supplier A’s components are defective, and 5%
            of Supplier B’s components are defective. A component is selected at random and found to be
            defective.
          </blockquote>
          <ul className="space-y-2">
            {sampleOptions.map((opt) => (
              <li
                key={opt.letter}
                className="flex flex-wrap items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-secondary font-display text-xs font-bold text-foreground">
                  {opt.letter}
                </span>
                <span className="min-w-0 flex-1 text-foreground">{opt.text}</span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[11px] font-bold uppercase",
                    opt.answer === "True"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-800",
                  )}
                >
                  {opt.answer}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Full five-statement walkthrough with explanations lives on the{" "}
            <BbeTextLink to="/bbe-entrance-exam" className="inline-flex">
              exam guide sample →
            </BbeTextLink>
          </p>
          <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice more BBE mathematics →</BbeTextLink>
        </BbeSection>

        <BbeSection id="faq" title="FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeDemoCta
          title="Want to practice BBE mathematics in the real question format?"
          body="Try the free demo course for sample math lessons, tasks and explanations."
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BbeTextLink to="/bbe-entrance-exam">Back to the BBE Entrance Exam Guide →</BbeTextLink>
          <BbeTextLink to="/bbe-economics-english">Study Economics &amp; English next →</BbeTextLink>
        </div>

        <BbeFullPrepCta />
      </div>
    </BbeExamShell>
  );
}
