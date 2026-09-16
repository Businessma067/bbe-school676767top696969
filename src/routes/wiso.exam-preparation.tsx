import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import { WISO_EXAM_FORMAT, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/exam-preparation" as const;

export const Route = createFileRoute("/wiso/exam-preparation")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "How to Prepare for the WU WiSo Entrance Exam | BBE School" },
      {
        name: "description",
        content:
          "How to prepare for the WU Vienna WiSo entrance exam: format, Wirtschaft verstehen, German reading, math fluency, Teilpunktesystem, timed mocks, and example timelines.",
      },
      { property: "og:title", content: "How to Prepare for the WU WiSo Entrance Exam" },
      {
        property: "og:description",
        content:
          "A practical WiSo study plan from diagnostics through mocks, without mixing up BBE English content.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoExamPreparationPage,
});

const faqs = [
  {
    question: "How long should I prepare for WiSo?",
    answer:
      "Many applicants use several months to cover Wirtschaft verstehen, German reading stamina, and math properly. With less calendar time, increase weekly intensity. The example 4/8/12-week plans below assume focused weekly hours.",
  },
  {
    question: "Can I reuse BBE prep for WiSo?",
    answer:
      "Math and some economics concepts overlap. German reading and WiSo-specific economics chapters (sustainability, digitalisation) do not. Never study BBE English as a substitute for WiSo German.",
  },
  {
    question: "Should I start with a diagnostic?",
    answer:
      "Yes. An early timed set shows which section leaks the most points so your schedule is based on evidence rather than guesswork.",
  },
  {
    question: "When should I take full mock exams?",
    answer:
      "After you can handle topic-level and mixed practice with decent accuracy. Use mocks to train pacing and Teilpunktesystem behaviour, not as your first exposure to the format.",
  },
  {
    question: "What order should I study subjects?",
    answer:
      "Learn scoring and format early. Build math fundamentals in parallel with Wirtschaft verstehen chapters 1 and 3. Schedule explicit weeks for chapters 2 and 4. Keep German reading as a weekly habit from day one.",
  },
];

const steps = [
  {
    id: "understand",
    title: "Understand the exam first",
    body: "Learn the two-stage process, the three content areas (no English), and gemischtes Teilpunktesystem before you grind volume. Format mistakes are expensive.",
    link: { to: "/wiso/entrance-exam", label: "WiSo Entrance Exam Guide →" },
  },
  {
    id: "scoring",
    title: "Get comfortable with scoring",
    body: "Practice max/r and max/f mentally. Know when leaving an option unmarked protects points, and when you should mark confidently.",
    link: { to: "/wiso/exam-scoring", label: "Scoring explained →" },
  },
  {
    id: "diagnostic",
    title: "Take a diagnostic",
    body: "Sit an early timed mixed set on WiSo URLs to see how you handle economics, German, and math under the real stem style.",
    link: { to: WISO_PRACTICE_ROUTES.mockExams, label: "Open WiSo mocks →" },
  },
  {
    id: "econ",
    title: "Cover Wirtschaft verstehen",
    body: "Work all four chapters. Flag WiSo-only chapters 2 and 4 so they are not skipped because “BBE economics felt familiar.”",
    link: { to: "/wiso/economics-german", label: "Economics & German guide →" },
  },
  {
    id: "german",
    title: "Build German reading stamina",
    body: "Use short daily academic German passages with statement-style questions. Fluency applicants still lose points on scope and implication traps.",
    link: { to: "/wiso/economics-german", label: "German section notes →" },
  },
  {
    id: "math",
    title: "Build math speed and accuracy",
    body: "Algebra first, then statistics, calculus, and logic under time. Train German word-problem vocabulary early so exam day is not your first translation attempt.",
    link: { to: "/wiso/mathematics", label: "Mathematics guide →" },
  },
  {
    id: "mocks",
    title: "Full mocks and builder",
    body: "Finish with full timed mocks and custom sets on /wiso URLs so you do not accidentally drift into BBE English drills.",
    link: { to: WISO_PRACTICE_ROUTES.mockBuilder, label: "Mock builder →" },
  },
];

const timelines = [
  {
    title: "12-week plan",
    hours: "~10–12 h / week",
    bullets: [
      "Weeks 1–2: format, scoring, diagnostic, algebra rebuild",
      "Weeks 3–6: Wirtschaft verstehen ch.1–3 + weekly German",
      "Weeks 7–8: ch.2 & ch.4 deep dive + math mixed sets",
      "Weeks 9–10: full section mixes under partial timing",
      "Weeks 11–12: full mocks, error logs, light review",
    ],
  },
  {
    title: "8-week plan",
    hours: "~12–15 h / week",
    bullets: [
      "Week 1: format + scoring + diagnostic",
      "Weeks 2–4: econ ch.1–3 + math fundamentals + German daily",
      "Weeks 5–6: WiSo-only chapters + timed mixed stems",
      "Weeks 7–8: mocks and weak-spot builder sets",
    ],
  },
  {
    title: "4-week sprint",
    hours: "~15–20 h / week",
    bullets: [
      "Only viable if foundations already exist",
      "Prioritise scoring behaviour, German timing, and math speed",
      "Skim Wirtschaft verstehen with heavy practice, not passive reading",
      "At least two full mocks before exam week",
    ],
  },
];

export function WisoExamPreparationPage() {
  return (
    <WisoExamShell
      h1="How to Prepare for the WU WiSo Entrance Exam"
      lead="A practical preparation path: learn the format, diagnose your starting point, cover Wirtschaft verstehen and German reading, practise math under time, then move into timed mocks on WiSo URLs. Example timelines below are there to adapt, not copy."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Start WiSo demo</WisoPrimaryButton>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.products}>See products</WisoPrimaryButton>
        </>
      }
    >
      <div className="space-y-14">
        <WisoSection id="introduction" title="Introduction">
          <p>
            Preparing for WiSo is less about collecting random PDFs and more about a repeatable loop.
            Understand the format, measure your starting point, close topic gaps, practise in the real
            question style, then add time pressure. This page focuses on that process before{" "}
            {WISO_EXAM_FORMAT.cycle.examDate}.
          </p>
          <p>
            Prep usually goes wrong in a few familiar ways: treating WiSo like BBE with German labels,
            skipping Wirtschaft verstehen chapters 2 and 4, ignoring Teilpunktesystem strategy, or never
            timing German reading until the last week.
          </p>
        </WisoSection>

        <WisoInfoCallout label="Stay on the WiSo track" tone="note">
          Demo practice, mocks, mock builder, and flashcards for WiSo live under /wiso/... so you do not
          accidentally jump into BBE English drills. Products for both tracks are listed together on{" "}
          <WisoTextLink to="/products" className="inline-flex">
            /products
          </WisoTextLink>
          .
        </WisoInfoCallout>

        <WisoSection id="sequence" title="Recommended sequence">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.id} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">{step.body}</p>
                <div className="mt-3">
                  <WisoTextLink to={step.link.to}>{step.link.label}</WisoTextLink>
                </div>
              </div>
            ))}
          </div>
        </WisoSection>

        <WisoSection id="timelines" title="Example timelines">
          <p>
            These are intensity examples, not guarantees. Adjust for your starting level and whether you
            are also preparing BBE in parallel.
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {timelines.map((plan) => (
              <div key={plan.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-bold">{plan.title}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-800 dark:text-indigo-300">
                  {plan.hours}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
                  {plan.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </WisoSection>

        <WisoSection id="weekly" title="What a strong week looks like">
          <ul className="list-disc space-y-2 pl-5">
            <li>2 to 3 math blocks (fundamentals plus timed mixed stems)</li>
            <li>2 Wirtschaft verstehen sessions with statement practice</li>
            <li>German reading on most days (short beats rare and long)</li>
            <li>One scoring-aware review: replay misses with “mark / leave blank” decisions</li>
            <li>Optional: flashcards for definitions and formula triggers</li>
          </ul>
        </WisoSection>

        <WisoSection id="mistakes" title="Prep mistakes to avoid">
          <ul className="list-disc space-y-2 pl-5">
            <li>Using only BBE English packs because “math is the same.”</li>
            <li>Reading Wirtschaft verstehen passively without statement drills.</li>
            <li>Skipping sustainability and digitalisation chapters.</li>
            <li>Sitting your first full mock the week of the exam.</li>
            <li>Ignoring admission logistics until after content prep. OSA deadlines still bind.</li>
          </ul>
          <WisoTextLink to="/wiso/admission">Admission timeline →</WisoTextLink>
        </WisoSection>

        <WisoSection id="next" title="Start practicing">
          <div className="flex flex-wrap gap-3">
            <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>WiSo demo</WisoPrimaryButton>
            <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.fullCourse}>Full WiSo Course</WisoPrimaryButton>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
