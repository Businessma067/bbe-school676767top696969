import { hreflangLinks } from "@/lib/i18n/locale-path";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BbeDemoCta,
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

export const Route = createFileRoute("/bbe-mathematics")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
    links: [...hreflangLinks("/bbe-mathematics"), { rel: "canonical", href: "https://bbe-school.com/bbe-mathematics" }],
    meta: [
      {
        title: "WU Vienna BBE Mathematics: Topics, Syllabus & Practice | BBE School",
      },
      {
        name: "description",
        content:
          "WU Vienna BBE mathematics syllabus and preparation: algebra, functions, differentiation, probability, binomial distribution and financial mathematics, with BBE-style practice links.",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Mathematics: Topics, Syllabus & Practice",
      },
      {
        property: "og:description",
        content:
          "How BBE mathematics works, what is tested, and how to prepare for accuracy and speed.",
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
      "The official syllabus covers logic, elementary algebra, elementary financial mathematics, equations, linear equations in two unknowns, inequalities, linear and quadratic functions, power functions, polynomial functions, exponential and logarithmic functions, differentiation and single-variable optimization, elementary probability, and binomial distribution.",
  },
  {
    question: "How many math questions are there?",
    answer: `Based on the most recent exam: ${BBE_EXAM_FORMAT.mathQuestions} mathematics questions, with approximately ${BBE_EXAM_FORMAT.scoreWeighting.mathematics} score weighting.`,
  },
  {
    question: "Is a formula sheet provided?",
    answer: "Yes. A formula sheet is provided at the exam.",
  },
  {
    question: "Why is BBE mathematics time-consuming?",
    answer:
      "Many questions require evaluating several statements individually, so one stem can mean multiple calculations. Accuracy and speed both need practice.",
  },
  {
    question: "What calculator can I use?",
    answer:
      "Only calculators on WU’s published permitted list. Confirm the current list on the official WU site before exam day.",
  },
];

export function BbeMathematicsPage() {
  return (
    <BbeExamShell
      h1="WU Vienna BBE Mathematics: Topics, Syllabus & Practice"
      lead="Mathematics is one of the three BBE entrance exam sections. Here is what WU tests, why the section tends to run long, and how to work through the syllabus topic by topic."
      heroActions={
        <BbePrimaryButton to={BBE_PRACTICE_ROUTES.math}>Practice BBE Mathematics</BbePrimaryButton>
      }
    >
      <div className="space-y-14">
        <BbeSection id="introduction" title="Mathematics">
          <p>
            Mathematics is one of the three sections of the BBE entrance exam. The syllabus spans algebra
            and equations through functions, differentiation, probability, binomial distribution, and
            financial mathematics.
          </p>
          <p>
            The section is not necessarily hard because the concepts are unusually advanced. More often,
            the challenge is the amount of work each question demands and the time you have to do it.
          </p>
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
        </BbeSection>

        <BbeSection id="time-consuming" title="Why BBE Mathematics can be time-consuming">
          <p>
            Many BBE mathematics questions present several statements that have to be evaluated individually.
            Instead of finding one answer and moving on, you may need to solve or verify multiple statements
            within the same question.
          </p>
          <p>
            For example, a five-option question may require five separate calculations or pieces of
            reasoning.
          </p>
          <p>
            This means that even when you know the mathematics, you can lose a significant amount of time if
            you:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>spend too long on one statement;</li>
            <li>recalculate unnecessarily;</li>
            <li>make small algebraic or sign errors;</li>
            <li>don&apos;t recognize the required method quickly;</li>
            <li>fail to check all of the statements.</li>
          </ul>
          <p>
            For BBE Mathematics, preparation therefore needs to train both accuracy and speed.
          </p>
          <BbeTextLink to="/bbe-exam-scoring">Learn how BBE partial-credit scoring works →</BbeTextLink>
        </BbeSection>

        <BbeSection id="what-is-tested" title="What Mathematics is tested?">
          <TopicBlock title="Algebra &amp; Equations">
            <p>The mathematics syllabus begins with the fundamentals:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Logic</li>
              <li>Elementary algebra</li>
              <li>Equations</li>
              <li>Linear equations in two unknowns</li>
            </ul>
            <p>
              These skills are also used throughout other parts of the mathematics section, so weaknesses in
              algebra can affect your performance on otherwise unrelated topics.
            </p>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice Algebra &amp; Equations →</BbeTextLink>
          </TopicBlock>

          <TopicBlock title="Inequalities">
            <p>Inequalities are an important part of the BBE mathematics preparation.</p>
            <p>
              You should be comfortable solving inequalities and interpreting their solution sets, including
              questions involving different algebraic forms and boundary conditions.
            </p>
            <p>
              Because several answer statements may need to be checked separately, being able to solve
              inequalities quickly and reliably is particularly useful in the exam.
            </p>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice BBE Inequalities →</BbeTextLink>
          </TopicBlock>

          <TopicBlock title="Functions">
            <p>The syllabus includes:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Linear functions</li>
              <li>Quadratic functions</li>
              <li>Power functions</li>
              <li>Polynomial functions</li>
              <li>Exponential functions</li>
              <li>Logarithmic functions</li>
            </ul>
            <p>
              Preparation should cover both the algebraic side of functions and their interpretation,
              including properties and graphs.
            </p>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice BBE Functions →</BbeTextLink>
          </TopicBlock>

          <TopicBlock title="Differentiation &amp; Optimization">
            <p>The syllabus includes:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Differentiation</li>
              <li>Single-variable optimization</li>
              <li>Extreme-value problems</li>
            </ul>
            <p>
              These topics can require several steps in one problem: understanding the function,
              differentiating it, finding relevant points and interpreting the result.
            </p>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>
              Practice Differentiation &amp; Optimization →
            </BbeTextLink>
          </TopicBlock>

          <TopicBlock title="Probability &amp; Binomial Distribution">
            <p>Probability deserves particular attention because it contains several distinct types of problems.</p>
            <p>The core areas to prepare are:</p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Elementary Probability
            </h4>
            <p>
              You should understand the basic rules and relationships used to calculate probabilities and
              combine events.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Conditional Probability
            </h4>
            <p>
              Conditional probability is one of the key probability topics to focus on. Questions can require
              you to determine how the probability of an event changes when additional information is given.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">Bayes&apos; Theorem</h4>
            <p>
              Bayes&apos; theorem is another particularly important area for preparation. You should be
              comfortable identifying when a problem requires you to reverse conditional probabilities and
              working through the relevant probabilities carefully.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">Independence</h4>
            <p>
              You should also understand the difference between dependent and independent events and how
              independence affects probability calculations.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Binomial Distribution
            </h4>
            <p>
              Binomial distribution is explicitly included in the BBE mathematics syllabus and should be
              prepared alongside the broader probability topics.
            </p>
            <p>
              You should be comfortable identifying when a binomial model applies and calculating the
              relevant probabilities.
            </p>

            <BbeInfoCallout label="Official syllabus vs preparation depth" tone="official">
              Elementary probability and binomial distribution are part of the official topic list.
              Conditional probability, Bayes&apos; theorem and independence are emphasised here as BBE School
              preparation within the probability area. They help with exam-style reasoning but are not
              separately confirmed as standalone WU syllabus headings.
            </BbeInfoCallout>

            <BbeInfoCallout label="BBE preparation tip" tone="advice">
              Don&apos;t treat probability as one single topic. Make sure you can distinguish elementary
              probability, conditional probability, Bayes&apos; theorem, independence and binomial
              distribution. The correct method often depends on recognizing which type of probability problem
              you are dealing with.
            </BbeInfoCallout>

            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice BBE Probability →</BbeTextLink>
          </TopicBlock>

          <TopicBlock title="Financial Mathematics">
            <p>
              Financial mathematics is another area where the BBE School preparation goes beyond simply
              learning one formula.
            </p>
            <BbeInfoCallout label="Official syllabus" tone="official">
              Elementary financial mathematics is included in the official topic list. The official public
              syllabus does not provide a detailed subtopic breakdown, so the structure below is how BBE
              School organises preparation, not a separately published WU checklist.
            </BbeInfoCallout>
            <p>The preparation material is divided into several important subtopics:</p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Interest Periods &amp; Effective Rates
            </h4>
            <p>
              Understand how interest rates relate to different compounding periods and how to work with
              effective rates.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Continuous Compounding
            </h4>
            <p>Be comfortable with continuous interest growth and the calculations associated with it.</p>

            <h4 className="font-display text-base font-semibold text-foreground">Geometric Series</h4>
            <p>
              Geometric series provide the mathematical foundation for several financial calculations, so you
              should be able to recognize and work with them.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Annuities, Annuities Due &amp; Perpetuities
            </h4>
            <p>You should understand the differences between:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>ordinary annuities;</li>
              <li>annuities due;</li>
              <li>perpetuities;</li>
            </ul>
            <p>and know how the timing of payments affects the calculation.</p>

            <h4 className="font-display text-base font-semibold text-foreground">Mortgage Repayments</h4>
            <p>
              This includes calculations involving loan repayment schedules and regular mortgage payments.
            </p>

            <h4 className="font-display text-base font-semibold text-foreground">
              Internal Rate of Return
            </h4>
            <p>
              You should understand the concept of the internal rate of return and how it is used to evaluate
              financial investments.
            </p>

            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Practice BBE Financial Mathematics →</BbeTextLink>
          </TopicBlock>
        </BbeSection>

        <BbeSection id="what-makes-different" title="What makes BBE Mathematics different?">
          <div className="space-y-5">
            <DifferenceItem title="The breadth">
              You need to move between very different areas of mathematics: algebra, functions, calculus,
              probability and finance.
            </DifferenceItem>
            <DifferenceItem title="The question format">
              A question can require you to evaluate several statements individually. This means that the
              number of calculations you actually perform can be considerably greater than the number of
              questions suggests.
            </DifferenceItem>
            <DifferenceItem title="The time pressure">
              Being able to solve a problem eventually is different from being able to solve it quickly enough
              during the entrance exam.
            </DifferenceItem>
            <DifferenceItem title="The need to recognize the method">
              The formula sheet provided during the exam means that preparation should not focus only on
              memorizing formulas. You need to recognize which mathematical concept applies and how to use it
              correctly.
            </DifferenceItem>
          </div>
        </BbeSection>

        <BbeSection id="how-to-prepare" title="How should you prepare?">
          <p>A good preparation sequence is:</p>
          <ol className="space-y-4">
            {[
              {
                title: "Build the fundamentals",
                body: "Make sure algebra, equations and functions are solid.",
              },
              {
                title: "Study each topic separately",
                body: "Work through inequalities, functions, differentiation, probability, binomial distribution and financial mathematics individually.",
              },
              {
                title: "Pay particular attention to probability",
                body: "Make sure you can distinguish between elementary probability, conditional probability, Bayes’ theorem, independence and binomial distribution.",
              },
              {
                title: "Practice financial mathematics by subtopic",
                body: "Don’t treat financial mathematics as one chapter. Practice effective rates, continuous compounding, geometric series, annuities, mortgage repayments and internal rate of return separately.",
              },
              {
                title: "Learn the BBE question format",
                body: "Practice questions where several statements need to be checked individually.",
              },
              {
                title: "Combine topics",
                body: "Once you are comfortable with individual topics, solve mixed sets without knowing in advance which method you will need.",
              },
              {
                title: "Train for speed",
                body: "Finally, introduce time limits and practice deciding when to continue working on a question and when to move on.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-display text-base font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed sm:text-base">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to="/bbe-exam-preparation">Read our complete BBE preparation guide →</BbeTextLink>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.mockExams}>Take a diagnostic or mock exam →</BbeTextLink>
          </div>
        </BbeSection>

        <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Prepare for BBE Mathematics
          </h2>
          <p className="mt-2 text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]">
            Work through the syllabus in order. Learn the question format. Then train yourself to solve
            accurately under time pressure.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbePrimaryButton to={BBE_PRACTICE_ROUTES.math}>
              Practice BBE Mathematics →
            </BbePrimaryButton>
            <BbeGhostButton to={BBE_PRACTICE_ROUTES.demo}>
              Try the Free BBE Demo Course →
            </BbeGhostButton>
          </div>
        </aside>

        <BbeSection id="faq" title="FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeDemoCta
          title="Want to practice BBE mathematics in the real question format?"
          body="The free demo course includes sample math lessons, tasks, and explanations in BBE style."
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BbeTextLink to="/bbe-entrance-exam">Back to the BBE Entrance Exam Guide →</BbeTextLink>
          <BbeTextLink to="/bbe-economics-english">Study Economics &amp; English next →</BbeTextLink>
        </div>
      </div>
    </BbeExamShell>
  );
}

function TopicBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className="mt-3 space-y-3 text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]">
        {children}
      </div>
    </article>
  );
}

function DifferenceItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]">{children}</p>
    </article>
  );
}
