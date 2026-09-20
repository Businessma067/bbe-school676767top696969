import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoGhostButton,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection, WisoStatGrid } from "@/components/wiso-exam/WisoExamShell";
import {
  WISO_EXAM_FORMAT,
  WISO_FORMAT_NOTE,
  WISO_MATH_TOPICS,
  WISO_PRACTICE_ROUTES,
} from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/mathematics" as const;

export const Route = createFileRoute("/wiso/mathematics")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WU Vienna WiSo Mathematics: Topics, Syllabus & Practice | BBE School" },
      {
        name: "description",
        content:
          "What to study for WU Vienna WiSo mathematics: algebra, statistics, calculus, logical reasoning, formula fluency, and timed practice in German.",
      },
      { property: "og:title", content: "WU Vienna WiSo Mathematics: Topics & Practice" },
      {
        property: "og:description",
        content:
          "How WiSo mathematics works when WU publishes no official math skriptum, and how to prepare for accuracy and speed.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoMathematicsPage,
});

const faqs = [
  {
    question: "Does WU publish a WiSo math skriptum?",
    answer:
      "No. Unlike economics (Wirtschaft verstehen), there is no official WU math study guide for WiSo. Prep focuses on Matura-level business mathematics, practiced in German.",
  },
  {
    question: "Is WiSo math the same as BBE math?",
    answer:
      "Topic depth is similar: algebra, statistics, calculus, and logical reasoning under time pressure. Stems and explanations for WiSo prep are in German; BBE is English. Scoring uses the same Teilpunktesystem mechanism.",
  },
  {
    question: "Why is WiSo mathematics time-consuming?",
    answer:
      "Many stems require evaluating several options individually, so one scenario can mean multiple calculations. Accuracy and speed both need deliberate practice.",
  },
  {
    question: "Is a formula sheet provided?",
    answer:
      "Confirm the current exam-day materials on official WU pages for your cycle. Do not assume BBE’s formula-sheet rules apply unchanged without checking WiSo communications.",
  },
  {
    question: "What calculator can I use?",
    answer:
      "Only calculators on WU’s published permitted list for the entrance exams. Confirm the current list on the official WU site before exam day.",
  },
];

const topicBlocks: { title: string; body: string; bullets: string[] }[] = [
  {
    title: "Algebra & equations",
    body: "Rearranging formulas, linear and quadratic equations, systems, and inequalities, practiced fast enough that German word problems do not become translation bottlenecks.",
    bullets: [
      "Solve for a variable in multi-step business formulas",
      "Interpret inequalities in “at least / at most” wording",
      "Check which statements follow from a shared stem",
    ],
  },
  {
    title: "Functions & calculus (Kalkül)",
    body: "Elementary functions and differentiation appear in business contexts (cost, revenue, optimisation). Know when a statement about a derivative or extremum is true.",
    bullets: [
      "Linear, quadratic, power, exponential basics",
      "Derivative meaning vs mechanical differentiation",
      "Single-variable optimisation intuition",
    ],
  },
  {
    title: "Statistics & probability",
    body: "Descriptive stats, elementary probability, and conditional reasoning under partial-credit scoring, where one wrong tick can erase hard-won calculation credit.",
    bullets: [
      "Means, shares, and percentage-point language",
      "Independent vs dependent events",
      "Reading tables/graphs and evaluating claims",
    ],
  },
  {
    title: "Logical reasoning",
    body: "WiSo math is not only computation. Many options test whether a conclusion is forced by the stem, including carefully worded German quantifiers.",
    bullets: [
      "Necessary vs sufficient conditions",
      "“Always / never / can be” traps",
      "Spotting statements that sound plausible but are not implied",
    ],
  },
];

const mistakes = [
  "Translating every stem into English mid-exam instead of training German math vocabulary early.",
  "Practicing only familiar textbook drills and skipping statement-style multi-option stems.",
  "Spending too long on one hard option and starving easier credit elsewhere.",
  "Guessing on close calls without checking whether the penalty is worth it.",
  "Memorising formulas without knowing when they apply.",
  "Never timing mixed sets, because untimed accuracy does not transfer to a 2-hour paper.",
  "Ignoring review: repeating the same algebra slip across multiple practice sessions.",
];

export function WisoMathematicsPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Mathematics: Topics, Syllabus & Practice"
      lead="Mathematics is typically the most time-pressured WiSo section. There is no official WU math skriptum, so treat it as secondary-school business math with formula fluency under the clock, in German."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo practice</WisoPrimaryButton>
          <WisoGhostButton to="/wiso/exam-scoring">Understand scoring first</WisoGhostButton>
        </>
      }
    >
      <div className="space-y-14">
        <WisoSection id="introduction" title="Introduction">
          <p>
            WU’s WiSo FAQ lists Mathematik as one of three content areas alongside wirtschaftliche
            Grundkenntnisse and deutsches Sprachverständnis. Unlike economics, WU does not publish an
            official math Lernunterlage equivalent to Wirtschaft verstehen. That means your syllabus has
            to be built from secondary-school business math depth (the same framing BBE applicants use),
            with language adapted to German.
          </p>
          <p>
            {WISO_FORMAT_NOTE}
          </p>
        </WisoSection>

        <WisoInfoCallout label="Source note" tone="official">
          Topic coverage below is aligned with common third-party descriptions of WiSo math and with
          BBE’s published math framing. It is marked as inferred where WU does not publish a skriptum.
          Confirm any official updates on wu.ac.at.
        </WisoInfoCallout>

        <WisoStatGrid
          items={[
            { label: "Duration", value: `${WISO_EXAM_FORMAT.durationHours}h exam` },
            { label: "Language", value: "German" },
            { label: "Official skriptum", value: "None" },
            { label: "Scoring", value: "Teilpunkte" },
          ]}
        />

        <WisoSection id="topics" title="Core topic areas">
          <ul className="grid gap-3 sm:grid-cols-2">
            {WISO_MATH_TOPICS.map((topic) => (
              <li
                key={topic.id}
                className="rounded-xl border border-border bg-card px-4 py-3 text-[0.98rem] font-medium"
              >
                <span className="block font-semibold">{topic.title}</span>
                <span className="mt-1 block text-sm font-normal text-muted-foreground">
                  {topic.body}
                </span>
              </li>
            ))}
          </ul>
        </WisoSection>

        <WisoSection id="depth" title="What “business math depth” means here">
          <div className="space-y-5">
            {topicBlocks.map((block) => (
              <div key={block.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{block.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </WisoSection>

        <WisoSection id="vs-bbe" title="WiSo math vs BBE math">
          <p>
            Conceptually, much of the calculation toolkit overlaps with BBE mathematics. The differences
            that matter in prep are language and exam-track isolation: train on German stems so exam day
            is not your first time parsing “mindestens”, “höchstens”, or conditional clauses under the
            clock. Do not use BBE English math packs as your only WiSo practice.
          </p>
          <WisoTextLink to="/bbe-vs-wiso">Full BBE vs WiSo comparison →</WisoTextLink>
        </WisoSection>

        <WisoSection id="scoring" title="How math interacts with Teilpunktesystem">
          <p>
            Because each stem can hide several independent judgments, a single calculation error can
            cascade across options, and an incorrect tick can erase correct credit via max/f penalties.
            Learn the{" "}
            <WisoTextLink to="/wiso/exam-scoring" className="inline-flex">
              scoring rules
            </WisoTextLink>{" "}
            before you grind volume.
          </p>
        </WisoSection>

        <WisoSection id="approach" title="How to practice">
          <ol className="list-decimal space-y-3 pl-5">
            <li>Rebuild weak fundamentals (algebra first) with short daily drills.</li>
            <li>Add German word-problem vocabulary deliberately, not only symbols.</li>
            <li>Move to multi-option stems and mark/unmark strategically.</li>
            <li>Time mixed sets that include easier and harder options under one stem.</li>
            <li>Review every miss: was it calculation, language, or scoring behaviour?</li>
          </ol>
          <p>
            Timed mixed sets beat endless untimed drills. Aim for the same 2-hour pressure you will face
            at VIECON on {WISO_EXAM_FORMAT.cycle.examDate}.
          </p>
        </WisoSection>

        <WisoSection id="mistakes" title="Common mistakes">
          <ul className="list-disc space-y-2 pl-5">
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </WisoSection>

        <WisoSection id="next" title="What to do next">
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/economics-german">Economics & German →</WisoTextLink>
            <WisoTextLink to="/wiso/exam-preparation">Full prep sequence →</WisoTextLink>
            <WisoTextLink to={WISO_PRACTICE_ROUTES.mockExams}>WiSo mocks →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
