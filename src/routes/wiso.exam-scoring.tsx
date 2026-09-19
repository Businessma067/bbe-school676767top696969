import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import {
  ScoringExampleCard,
  type ScoringExample,
} from "@/components/bbe-exam/ScoringExampleCard";
import { WISO_EXAM_FORMAT, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { SCORING_CONFIG } from "@/config/scoring-config";
import { calculateTaskScore, type StatementResult } from "@/lib/scoring";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/exam-scoring" as const;

export const Route = createFileRoute("/wiso/exam-scoring")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "WU Vienna WiSo Exam Scoring: Teilpunktesystem Explained | BBE School",
      },
      {
        name: "description",
        content:
          "How WU Vienna WiSo entrance exam scoring works: gemischtes Teilpunktesystem, max/r and max/f partial credit, single-correct rules, floor at zero, and worked examples.",
      },
      { property: "og:title", content: "WU Vienna WiSo Exam Scoring Explained" },
      {
        property: "og:description",
        content:
          "Official WiSo Teilpunktesystem in plain language — the same partial-credit engine as BBE, with German content.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoExamScoringPage,
});

const faqs = [
  {
    question: "Is WiSo scoring different from BBE?",
    answer:
      "No — not in mechanism. WU’s Teilpunktesystem WISO PDF describes the same gemischtes Teilpunktesystem / wi2-style rules: credit for correctly marked options, penalties for incorrectly marked ones, and a floor at zero per question. Only the language and content differ.",
  },
  {
    question: "What do max, r, and f mean?",
    answer:
      "max is the question’s published maximum. r is the number of correct options; f is the number of incorrect options. Multi-correct questions typically award max/r per correctly marked option and subtract max/f per incorrectly marked option.",
  },
  {
    question: "What about single-correct questions?",
    answer:
      "All-or-nothing: you get the full max only if the one correct option is marked and no incorrect option is marked. Marking an incorrect option alongside the correct one drops that question to zero.",
  },
  {
    question: "Can a WiSo question score go negative?",
    answer:
      "No. After combining credit and penalties, each question is floored at zero. Over-ticking can wipe a question, but it cannot dig into other questions’ points.",
  },
  {
    question: "Do unanswered options cost points?",
    answer:
      "Leaving an option unmarked does not award the credit you would get for correctly marking a true option, and it does not apply the penalty for marking a false one. Strategic non-selection matters.",
  },
  {
    question: "Does the OSA affect my WiSo exam score?",
    answer:
      "No. The OSA is ungraded and must be completed to advance, but it does not enter the written-exam ranking.",
  },
  {
    question: "How many total points does WiSo use in BBE School mocks?",
    answer: `BBE School’s WiSo-cycle comparison figure is ${SCORING_CONFIG.wisoExamTotalPoints} points overall for the written exam in the same cycle as BBE’s ${SCORING_CONFIG.examTotalPoints}-point mock total. Always treat WU’s official PDF as authoritative if numbers are republished.`,
  },
];

function marks(pattern: boolean[], truths: boolean[]): StatementResult[] {
  return truths.map((isTrue, i) => ({
    isTrue,
    userMarked: pattern[i] ?? false,
  }));
}

type WorkedEx = {
  title: string;
  note: string;
  maxPoints: number;
  truths: boolean[];
  pattern: boolean[];
};

/** Same official PDF cases as BBE — WiSo uses the identical Teilpunktesystem engine. */
const PDF_EXAMPLES: WorkedEx[] = [
  {
    title: "Multi-correct: full marks",
    maxPoints: 3,
    truths: [true, true, false, false, false],
    pattern: [true, true, false, false, false],
    note: "Mark both correct options, leave all false blank → max/r + max/r = 3.",
  },
  {
    title: "Multi-correct: one true + one false",
    maxPoints: 3,
    truths: [true, true, false, false, false],
    pattern: [true, false, true, false, false],
    note: "One correct mark (+1.5) and one false mark (−1) → 0.5.",
  },
  {
    title: "Multi-correct: floors at zero",
    maxPoints: 3,
    truths: [true, true, false, false, false],
    pattern: [true, false, false, true, true],
    note: "One correct (+1.5) minus two false (−1 each) nets −0.5 → floored at 0.",
  },
  {
    title: "Single correct: all-or-nothing",
    maxPoints: 5,
    truths: [true, false, false, false, false],
    pattern: [true, true, true, true, true],
    note: "Exactly one correct option: marking it with any false option scores 0.",
  },
  {
    title: "Single false: half-max penalty",
    maxPoints: 4,
    truths: [true, true, true, false, true],
    pattern: [true, true, true, true, true],
    note: "Exactly one false option: all trues plus that false → max − max/2 = 2.",
  },
  {
    title: "Single false: partial trues + penalty",
    maxPoints: 4,
    truths: [true, true, true, false, true],
    pattern: [true, true, true, true, false],
    note: "Three of four trues (+1 each) plus the single false (−2) → 1.",
  },
];

const workedExamples: ScoringExample[] = PDF_EXAMPLES.map((ex) => {
  const statements = marks(ex.pattern, ex.truths);
  const score = calculateTaskScore(ex.maxPoints, statements);
  return {
    title: ex.title,
    note: ex.note,
    pattern: ex.pattern,
    statements,
    score,
    maxPoints: ex.maxPoints,
  };
});

export function WisoExamScoringPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Exam Scoring: Teilpunktesystem Explained"
      lead="WU publishes an official Teilpunktesystem for WiSo. Mechanically it matches BBE’s partial-credit engine — credit for correct marks, penalties for incorrect ones, floor at zero. This page walks through the rules with worked examples from the same formula."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.mockExams}>
            See scoring on a WiSo mock
          </WisoPrimaryButton>
          <WisoTextLink to="/bbe-exam-scoring">Compare with BBE scoring →</WisoTextLink>
        </>
      }
    >
      <div className="space-y-14">
        <WisoSection id="introduction" title="Introduction">
          <p>
            Applicants often search for “WiSo scoring” because the Aufnahmeprüfung is not a classic
            single-answer paper. Under each stem you judge several options, and credit and penalties
            interact. Understanding that logic is part of preparing well — especially under German
            wording where a single qualifier can flip an option.
          </p>
          <p>
            WU’s official PDF is titled Teilpunktesystem WISO and describes the{" "}
            <em>gemischtes Teilpunktesystem</em>. For the broader exam format, see the{" "}
            <WisoTextLink to="/wiso/entrance-exam" className="inline-flex">
              WiSo Entrance Exam Guide →
            </WisoTextLink>
          </p>
        </WisoSection>

        <WisoInfoCallout label="Official source" tone="official">
          Rules below follow WU’s Teilpunktesystem WISO PDF on wu.ac.at. Always verify against the
          current official PDF if WU revises the wording. BBE School’s practice engine reuses the same
          formula so WiSo mocks score consistently with BBE mocks.
        </WisoInfoCallout>

        <WisoSection id="how-scoring-works" title="How WiSo scoring works">
          <p>Each question has a stated maximum score (<em>max</em>). Your score for that question depends on:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>how many options are actually correct (r) and incorrect (f),</li>
            <li>which correct options you mark,</li>
            <li>which incorrect options you mark,</li>
            <li>and a rule that the question score cannot fall below zero.</li>
          </ul>
          <p>
            Ranking for the {WISO_EXAM_FORMAT.places} WiSo places is by written-exam performance. The OSA
            is ungraded and does not enter that ranking.
          </p>
        </WisoSection>

        <WisoSection id="multi-correct" title="Multi-correct questions (max / r and max / f)">
          <p>
            When more than one option is correct, each correctly marked option typically earns{" "}
            <span className="font-medium">max / r</span>, and each incorrectly marked option loses{" "}
            <span className="font-medium">max / f</span>. Positive and negative points net against each
            other on that question only.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm">
            score = (correctMarks × max/r) − (wrongMarks × max/f)
          </div>
          <p>
            Missed correct options simply withhold credit. They are not an extra penalty beyond that.
            Leaving a doubtful incorrect option unmarked can protect points when the penalty is large.
          </p>
        </WisoSection>

        <WisoSection id="single-correct" title="Single-correct questions">
          <p>
            For questions with exactly one correct option, scoring is all-or-nothing: full marks only if
            that option is marked and no incorrect option is marked. Any incorrect mark alongside the
            correct one drops the question to zero.
          </p>
          <p>
            WU confirms the exam is entirely multiple choice; the mix of single- vs multi-correct stems
            can vary by cycle. Train both behaviours so you do not over-generalise from BBE’s five
            true/false statement pattern.
          </p>
        </WisoSection>

        <WisoSection id="single-false" title="Single-false questions">
          <p>
            When exactly one option is false (f = 1), marking that false option costs half the question
            maximum (max / 2). Correct marks still earn max / r each. If you miss some correct options,
            partial credit still applies with that half-max penalty — same rule as BBE.
          </p>
        </WisoSection>

        <WisoSection id="minimum-zero" title="Floor at zero">
          <p>
            After credit and penalties are combined, the question score is never reported below zero.
            Heavy over-ticking can wipe a question completely, but it does not dig into other questions’
            points. That is why “mark everything to be safe” is usually a losing strategy.
          </p>
        </WisoSection>

        <WisoSection id="worked-examples" title="Worked scoring examples">
          <p className="text-sm text-muted-foreground">
            Examples use the same official partial-credit cases as BBE (and the same scoring engine as
            mocks and the custom mock builder).
          </p>
          <div className="mt-6 space-y-6">
            {workedExamples.map((ex) => (
              <ScoringExampleCard
                key={ex.title}
                example={ex}
                maxPoints={ex.maxPoints ?? 3}
              />
            ))}
          </div>
        </WisoSection>

        <WisoSection id="practice-totals" title="Practice totals on BBE School">
          <p>
            BBE School’s WiSo-cycle comparison total is{" "}
            <strong>{SCORING_CONFIG.wisoExamTotalPoints} points</strong> for the written exam (versus{" "}
            {SCORING_CONFIG.examTotalPoints} for BBE mocks in the same tooling). Use mocks to see how
            mixed ticking patterns convert into scores — not only whether individual options feel “right.”
          </p>
          <WisoInfoCallout label="BBE School practice scoring" tone="note">
            Point allocations in mocks are chosen so practice feels comparable to recent cycles. Always
            treat official WU communications as authoritative for administrative rules.
          </WisoInfoCallout>
        </WisoSection>

        <WisoSection id="ranking" title="How scoring relates to ranking">
          <p>
            Applicants are ranked by written-exam performance against about {WISO_EXAM_FORMAT.places}{" "}
            places. There is no separate fixed “pass mark” published on this site. Relative performance
            in the cycle determines selection. If registrations never exceed places, the written exam
            stage can be skipped entirely.
          </p>
          <WisoTextLink to="/wiso/admission">Learn how WiSo admission works →</WisoTextLink>
        </WisoSection>

        <WisoSection id="common-mistakes" title="Common scoring mistakes">
          <ul className="list-disc space-y-2 pl-5">
            <li>Selecting every option “to be safe” and wiping the question with false-option penalties.</li>
            <li>Treating the stem like a single best-answer question instead of independent judgments.</li>
            <li>Assuming a fixed number of correct options on every question.</li>
            <li>Ignoring that leaving a doubtful option unmarked can protect points.</li>
            <li>Practicing only untimed accuracy without ever seeing how patterns convert into scores.</li>
            <li>Importing BBE English timing habits into WiSo German reading without re-training pace.</li>
          </ul>
        </WisoSection>

        <WisoSection id="next" title="What to do next">
          <p>
            Once the formula feels intuitive, practice it on WiSo content: Wirtschaft verstehen stems,
            German reading, and math under time pressure.
          </p>
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/economics-german">Economics & German →</WisoTextLink>
            <WisoTextLink to="/wiso/mathematics">Mathematics →</WisoTextLink>
            <WisoTextLink to="/wiso/exam-preparation">Preparation plan →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
