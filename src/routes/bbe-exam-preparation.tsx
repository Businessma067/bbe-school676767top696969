import { createFileRoute } from "@tanstack/react-router";
import {
  BbeDemoCta,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection } from "@/components/bbe-exam/BbeExamShell";
import { BBE_EXAM_FORMAT, BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/bbe-exam-preparation")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
    links: [...hreflangLinks("/bbe-exam-preparation"), { rel: "canonical", href: "https://bbe-school.com/bbe-exam-preparation" }],
    meta: [
      {
        title: "How to Prepare for the WU Vienna BBE Entrance Exam | BBE School",
      },
      {
        name: "description",
        content:
          "How to prepare for the WU Vienna BBE entrance exam: diagnostic testing, subject assessment, study schedules, timed practice, mock exams and example 4/8/12-week timelines.",
      },
      {
        property: "og:title",
        content: "How to Prepare for the WU Vienna BBE Entrance Exam",
      },
      {
        property: "og:description",
        content:
          "A practical BBE study plan from diagnostic testing through mock exams, with links to free demo practice.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeExamPreparationPage,
});

const faqs = [
  {
    question: "How long should I prepare for the BBE exam?",
    answer:
      "Many applicants use 7 to 9 months as a baseline to cover all three sections properly. With less calendar time, increase weekly intensity. Shorter example plans (4, 8, 12 weeks) on this page assume focused weekly hours.",
  },
  {
    question: "Should I start with a diagnostic?",
    answer:
      "Yes. A diagnostic or early mock shows which section leaks the most points so your schedule is evidence-based rather than guesswork.",
  },
  {
    question: "In what order should I study subjects?",
    answer:
      "Build Mathematics fundamentals early (highest time demand), study Economics from Fuhrmann chapters 1 to 6 in parallel, and keep English as a steady reading habit. Then mix all three under timed conditions.",
  },
  {
    question: "When should I take full mock exams?",
    answer:
      "After you can handle topic-level and mixed practice with decent accuracy. Use mocks to train pacing and scoring behaviour, not as your first exposure to the format.",
  },
];

const steps = [
  {
    id: "understand",
    title: "Understand the exam first",
    body: "Learn the multi-statement format, approximate section weighting, and partial-credit scoring before you grind. Format mistakes are expensive.",
    link: { to: "/bbe-entrance-exam", label: "BBE Entrance Exam Guide →" },
  },
  {
    id: "diagnostic",
    title: "Take a diagnostic test",
    body: "Sit a diagnostic-style set or early mock to see how you handle Economics, English and Mathematics under the real stem style.",
    link: { to: BBE_PRACTICE_ROUTES.mockExams, label: "Open mock exams / diagnostics →" },
  },
  {
    id: "assess-math",
    title: "Assess Mathematics",
    body: "Identify weak chapters (algebra, functions, probability, binomial, etc.). Math usually needs the largest share of weekly hours.",
    link: { to: "/bbe-mathematics", label: "BBE mathematics topic guide →" },
  },
  {
    id: "assess-econ",
    title: "Assess Economics",
    body: "Check whether misses come from missing Fuhrmann definitions or from misreading qualifiers. Flashcards help lock terminology.",
    link: { to: "/bbe-economics-english", label: "Economics & English study guide →" },
  },
  {
    id: "assess-english",
    title: "Assess English",
    body: "Note reading speed, vocabulary gaps and grammar slips on contemporary-issue texts. Plan steady exposure, not only last-week cramming.",
    link: { to: BBE_PRACTICE_ROUTES.english, label: "Practice English →" },
  },
];

export function BbeExamPreparationPage() {
  return (
    <BbeExamShell
      h1="How to Prepare for the WU Vienna BBE Entrance Exam"
      lead="A practical preparation path: diagnose your starting point, plan by subject, practise BBE-style questions, then move into timed mocks. Example timelines below are there to adapt, not copy."
      heroActions={
        <>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>Try the Free Demo Course →</BbePrimaryButton>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.mockExams}>Start with a diagnostic</BbePrimaryButton>
        </>
      }
    >
      <div className="space-y-14">
        <BbeSection id="introduction" title="Introduction">
          <p>
            Preparing for the BBE entrance exam is less about collecting random PDFs and more about a
            repeatable loop. Understand the format, measure your starting point, close topic gaps, practise
            in the real question style, then add time pressure. This page focuses on that process.
          </p>
          <p>
            Most applicants find that <span className="font-medium text-foreground">7 to 9 months</span> is a
            reasonable baseline for covering all three sections properly. If you have fewer months, raise
            weekly intensity rather than skipping Mathematics fundamentals.
          </p>
        </BbeSection>

        {steps.map((step) => (
          <BbeSection key={step.id} id={step.id} title={step.title}>
            <p>{step.body}</p>
            <BbeTextLink to={step.link.to}>{step.link.label}</BbeTextLink>
          </BbeSection>
        ))}

        <BbeSection id="schedule" title="Build a preparation schedule">
          <p>
            Block weekly hours by subject based on your diagnostic, not equal thirds by default.
            Mathematics often deserves the largest block; Economics needs consistent chapter coverage;
            English needs frequent shorter sessions.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Protect recurring study slots (same days/times beat occasional marathons).</li>
            <li>Keep one weekly mixed review so subjects do not stay siloed forever.</li>
            <li>Reserve later weeks for timed practice and full mocks.</li>
          </ul>
        </BbeSection>

        <BbeSection id="topic-by-topic" title="Study topic-by-topic">
          <p>
            For Mathematics, finish a chapter’s core skills before jumping to mixed papers. For Economics,
            move through Fuhrmann chapters 1 to 6 with active recall (flashcards or closed-book definitions).
            For English, pair reading with BBE-style statement practice.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to={BBE_PRACTICE_ROUTES.math}>Mathematics practice →</BbeTextLink>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.economics}>Economics practice →</BbeTextLink>
            <BbeTextLink
              to={BBE_PRACTICE_ROUTES.economicsFlashcards}
              params={{ subject: "economics" }}
            >
              Economics flashcards →
            </BbeTextLink>
          </div>
        </BbeSection>

        <BbeSection id="bbe-style" title="Practice BBE-style questions">
          <p>
            Switch early to stems with multiple independent statements. Accuracy on textbook exercises does
            not automatically transfer to “mark each option true/false” under partial credit.
          </p>
          <BbeTextLink to="/bbe-exam-scoring">Understand scoring while you practise →</BbeTextLink>
        </BbeSection>

        <BbeSection id="review" title="Review mistakes">
          <p>
            After each set, log why a statement fooled you: definition gap, algebra slip, Bayes mix-up, or
            over-ticking. Re-drill the same error type within 48 hours so it does not recur on mocks.
          </p>
        </BbeSection>

        <BbeSection id="timed" title="Introduce timed practice">
          <p>
            Once untimed accuracy is acceptable, add timed blocks. Train section pacing, especially clearing
            Economics efficiently so Mathematics keeps enough of the {BBE_EXAM_FORMAT.durationHours}-hour
            window.
          </p>
        </BbeSection>

        <BbeSection id="mocks" title="Take full mock exams">
          <p>
            Full-length mocks (34 questions, three sections) teach endurance and scoring behaviour. Review
            every mock as carefully as you sat it. The value is in the error analysis, not the raw total
            alone.
          </p>
          <BbeTextLink to={BBE_PRACTICE_ROUTES.mockExams}>Take a full mock exam →</BbeTextLink>
        </BbeSection>

        <BbeSection id="final-week" title="Final-week strategy">
          <ul className="list-disc space-y-2 pl-5">
            <li>Stop learning brand-new math techniques; reinforce high-frequency weak spots.</li>
            <li>Re-read tricky Fuhrmann definitions and common qualifier traps.</li>
            <li>Keep light English reading for fluency; avoid exhausting all-nighters.</li>
            <li>Confirm exam-day logistics: ID, invitation, permitted calculator, travel to {BBE_EXAM_FORMAT.location}.</li>
            <li>Do one shorter timed set for confidence, not a demoralising cram mock the night before.</li>
          </ul>
          <BbeTextLink to="/bbe-admission">Review admission &amp; exam-day requirements →</BbeTextLink>
        </BbeSection>

        <BbeSection id="prep-mistakes" title="Common preparation mistakes">
          <ul className="list-disc space-y-2 pl-5">
            <li>Studying content without practising the multi-statement format</li>
            <li>Ignoring scoring incentives and over-ticking under time pressure</li>
            <li>Leaving probability/binomial until too late</li>
            <li>Treating English as optional because weighting is smaller</li>
            <li>Taking mocks without reviewing statement-level mistakes</li>
            <li>No diagnostic, which means discovering weak chapters only weeks before the exam</li>
          </ul>
        </BbeSection>

        <BbeSection id="timelines" title="Example preparation timelines">
          <BbeInfoCallout label="BBE School examples" tone="advice">
            These timelines are illustrative study structures, not official WU requirements. Stretch to 7 to 9
            months when you can. Compress only if your diagnostic supports it.
          </BbeInfoCallout>

          <TimelineCard
            title="4 weeks (intensive)"
            items={[
              "Week 1: Diagnostic + algebra/equations/inequalities + Fuhrmann 1 to 2 + daily English reading",
              "Week 2: Functions & calculus basics + Fuhrmann 3 to 4 + economics practice stems",
              "Week 3: Probability & binomial + financial maths + Fuhrmann 5 to 6 + mixed timed blocks",
              "Week 4: Two full mocks, targeted weak-topic drills, exam logistics check",
            ]}
          />
          <TimelineCard
            title="8 weeks (focused)"
            items={[
              "Weeks 1 to 2: Diagnostic; rebuild algebra/equations; start Fuhrmann 1 to 3; English habit",
              "Weeks 3 to 4: Functions & optimisation; Fuhrmann 4 to 6; economics flashcards",
              "Weeks 5 to 6: Probability, binomial, financial maths; mixed BBE-style sets",
              "Weeks 7 to 8: Timed section practice, 2 to 3 full mocks, final-week consolidation",
            ]}
          />
          <TimelineCard
            title="12 weeks (balanced)"
            items={[
              "Weeks 1 to 3: Diagnostic; logic through inequalities; Fuhrmann 1 to 2; English routine",
              "Weeks 4 to 6: Functions family + differentiation/optimisation; Fuhrmann 3 to 4",
              "Weeks 7 to 9: Financial maths, probability, binomial; Fuhrmann 5 to 6; mixed practice",
              "Weeks 10 to 12: Timed practice, full mocks, error-log cleanup, exam-day readiness",
            ]}
          />
        </BbeSection>

        <BbeSection id="bbe-school" title="Preparing with a structured system">
          <p>
            You can prepare with BBE School&apos;s structured system instead of collecting materials from
            different sources. It includes topic practice, explanations, flashcards, diagnostics, and mock
            exams.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>Try the Free Demo Course →</BbePrimaryButton>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.products}>Explore Full BBE Preparation →</BbeTextLink>
          </div>
        </BbeSection>

        <BbeSection id="faq" title="FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeDemoCta />

        <BbeTextLink to="/bbe-entrance-exam">Back to the BBE Entrance Exam Guide →</BbeTextLink>
      </div>
    </BbeExamShell>
  );
}

function TimelineCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-[15px]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
