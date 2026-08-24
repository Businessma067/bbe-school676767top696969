import { createFileRoute } from "@tanstack/react-router";
import {
  BbeDemoCta,
  BbeFullPrepCta,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection } from "@/components/bbe-exam/BbeExamShell";
import { BBE_EXAM_FORMAT, BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { SCORING_CONFIG } from "@/config/scoring-config";
import { calculateTaskScore, type StatementResult } from "@/lib/scoring";

export const Route = createFileRoute("/bbe-exam-scoring")({
  head: () => ({
    meta: [
      {
        title: "WU Vienna BBE Exam Scoring Explained: Points & Partial Credit | BBE School",
      },
      {
        name: "description",
        content:
          "How WU Vienna BBE entrance exam scoring works: points per question, correct vs incorrect selections, partial credit, floor at zero, and worked examples.",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Exam Scoring Explained: Points & Partial Credit",
      },
      {
        property: "og:description",
        content:
          "Understand BBE partial-credit scoring with plain-language rules and worked point examples.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeExamScoringPage,
});

const faqs = [
  {
    question: "Is BBE scoring simply right or wrong per question?",
    answer:
      "No. Each question has multiple statements. Points depend on which true statements you correctly select and which false statements you incorrectly select, with a floor at zero for that question.",
  },
  {
    question: "Do unanswered statements cost points?",
    answer:
      "Leaving a statement unmarked does not award the points you would get for correctly marking a true statement, and it does not apply the penalty that comes from marking a false statement. Strategic non-selection matters.",
  },
  {
    question: "Can a question score go negative?",
    answer:
      "No. After combining credit for correct selections and penalties for incorrect selections, the score for that question is floored at zero.",
  },
  {
    question: "What are the section point totals used in BBE School mocks?",
    answer: `BBE School practice scoring uses ${SCORING_CONFIG.economics.totalPoints} points for Economics (${SCORING_CONFIG.economics.taskCount} tasks), ${SCORING_CONFIG.english.totalPoints} for English (${SCORING_CONFIG.english.taskCount} tasks), and ${SCORING_CONFIG.math.totalPoints} for Mathematics (${SCORING_CONFIG.math.taskCount} tasks), for ${SCORING_CONFIG.examTotalPoints} points overall — aligning with the most recent exam’s question counts and approximate 40/20/40 score weighting.`,
  },
  {
    question: "Does the OSA affect my exam score?",
    answer:
      "No. The OSA is ungraded and does not enter the ranking based on written-exam performance.",
  },
];

function marks(pattern: boolean[], truths: boolean[]): StatementResult[] {
  return truths.map((isTrue, i) => ({
    isTrue,
    userMarked: pattern[i] ?? false,
  }));
}

const EXAMPLE_TRUTHS = [true, true, false, true, false]; // r=3, f=2
const MAX_EXAMPLE = SCORING_CONFIG.math.defaultMaxPerTask;

const workedExamples = [
  {
    title: "Perfect selection",
    pattern: [true, true, false, true, false],
    note: "You mark exactly the three true statements and leave both false ones unmarked.",
  },
  {
    title: "Partial credit with one miss",
    pattern: [true, true, false, false, false],
    note: "You find two of three true statements and avoid both false ones.",
  },
  {
    title: "Correct marks plus one wrong tick",
    pattern: [true, true, true, true, false],
    note: "All three true statements are marked, but one false statement is also selected.",
  },
  {
    title: "Over-ticking cancels progress",
    pattern: [true, true, true, true, true],
    note: "Marking every statement includes both false ones — penalties can wipe the task to zero.",
  },
].map((ex) => {
  const statements = marks(ex.pattern, EXAMPLE_TRUTHS);
  const score = calculateTaskScore(MAX_EXAMPLE, statements);
  return { ...ex, score, statements };
});

function BbeExamScoringPage() {
  const r = EXAMPLE_TRUTHS.filter(Boolean).length;
  const f = EXAMPLE_TRUTHS.length - r;
  const perCorrect = MAX_EXAMPLE / r;
  const perWrong = MAX_EXAMPLE / f;

  return (
    <BbeExamShell
      jsonLd={buildFaqJsonLd(faqs)}
      h1="WU Vienna BBE Exam Scoring Explained: Points & Partial Credit"
      lead="How BBE exam points work — why the test is not simple right/wrong, how partial credit is awarded, and what common ticking mistakes cost you."
      heroActions={
        <BbePrimaryButton to={BBE_PRACTICE_ROUTES.mockExams}>
          See scoring on a mock exam
        </BbePrimaryButton>
      }
    >
      <div className="space-y-14">
        <BbeSection id="introduction" title="Introduction">
          <p>
            Applicants often search for “BBE exam scoring” because the written test does not behave like a
            classic single-answer multiple-choice paper. Under each stem you judge several statements
            independently. Credit and penalties interact — so understanding the scoring logic is part of
            preparing well, not a minor detail.
          </p>
          <p>
            This page explains the partial-credit approach used for BBE-style tasks, with plain-language
            rules and worked examples. For the broader exam format, see the{" "}
            <BbeTextLink to="/bbe-entrance-exam" className="inline-flex">
              BBE Entrance Exam Guide →
            </BbeTextLink>
          </p>
        </BbeSection>

        <BbeSection id="how-scoring-works" title="How BBE scoring works">
          <p>
            Each task has a maximum point value. Your score for that task depends on:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>how many statements are actually true (r) and false (f),</li>
            <li>which true statements you correctly select,</li>
            <li>which false statements you incorrectly select,</li>
            <li>and a rule that the task score cannot fall below zero.</li>
          </ul>
          <p>
            Approximate score weighting across sections (most recent exam): Economics &amp; Business{" "}
            {BBE_EXAM_FORMAT.scoreWeighting.economics}, English {BBE_EXAM_FORMAT.scoreWeighting.english},
            Mathematics {BBE_EXAM_FORMAT.scoreWeighting.mathematics}. That weighting is about contribution to
            the overall result — not the percentage of questions in each section.
          </p>
        </BbeSection>

        <BbeSection id="not-right-wrong" title="Why the BBE exam is not simply right/wrong">
          <p>
            A “question” is really a bundle of yes/no decisions. You can be partly right: mark some true
            statements, miss others, and avoid false ones — and still earn a share of the task maximum. You
            can also lose progress by ticking a false statement, even if you found several true ones.
          </p>
          <p>
            That is why blindly selecting everything is a poor strategy, and why leaving a doubtful false
            statement unmarked can be better than guessing.
          </p>
        </BbeSection>

        <BbeSection id="max-points" title="Maximum points per question">
          <p>
            In BBE School practice and mocks, task maxima are calibrated so section totals reflect the most
            recent exam’s question counts and approximate weighting:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-secondary/60 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Section</th>
                  <th className="px-4 py-3 font-semibold">Tasks</th>
                  <th className="px-4 py-3 font-semibold">Section total</th>
                  <th className="px-4 py-3 font-semibold">Default max / task</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">Economics &amp; Business</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.economics.taskCount}</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.economics.totalPoints}</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.economics.defaultMaxPerTask}</td>
                </tr>
                <tr className="border-t border-border bg-secondary/30">
                  <td className="px-4 py-3 text-foreground">English</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.english.taskCount}</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.english.totalPoints}</td>
                  <td className="px-4 py-3">~{SCORING_CONFIG.english.defaultMaxPerTask}</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">Mathematics</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.math.taskCount}</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.math.totalPoints}</td>
                  <td className="px-4 py-3">{SCORING_CONFIG.math.defaultMaxPerTask}</td>
                </tr>
                <tr className="border-t border-border bg-secondary/30">
                  <td className="px-4 py-3 font-semibold text-foreground">Exam total</td>
                  <td className="px-4 py-3">{BBE_EXAM_FORMAT.questionCount}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    {SCORING_CONFIG.examTotalPoints}
                  </td>
                  <td className="px-4 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <BbeInfoCallout label="BBE School practice scoring" tone="advice">
            These point allocations are what BBE School uses so mocks feel comparable to the most recent
            exam structure. Always treat official communications from WU as authoritative for any published
            administrative rules.
          </BbeInfoCallout>
        </BbeSection>

        <BbeSection id="correct-selections" title="Correct selections">
          <p>
            When more than one statement is true, each correctly marked true statement typically contributes
            an equal share of the task maximum:{" "}
            <span className="font-medium text-foreground">perCorrect ≈ maxPoints / r</span>, where{" "}
            <span className="font-medium text-foreground">r</span> is the number of true statements.
          </p>
          <p>
            Special case: if exactly one statement is true (r = 1), the task behaves in an all-or-nothing
            way for that single truth — marking the true statement can earn the full maximum, but marking a
            false statement can cancel it entirely.
          </p>
        </BbeSection>

        <BbeSection id="incorrect-selections" title="Incorrect selections">
          <p>
            Marking a false statement applies a penalty. When there is more than one false statement, the
            usual penalty per wrong mark is{" "}
            <span className="font-medium text-foreground">perWrong ≈ maxPoints / f</span>, where{" "}
            <span className="font-medium text-foreground">f</span> is the number of false statements.
          </p>
          <p>
            Special case: if exactly one statement is false (f = 1), the penalty for marking that false
            statement is half the task maximum (maxPoints / 2), while correct marks still split the maximum
            across the true statements.
          </p>
        </BbeSection>

        <BbeSection id="partial-credit" title="Partial credit">
          <p>
            Putting the pieces together, a typical task score (before the zero floor) is:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground">
            score = (correctMarks × perCorrect) − (wrongMarks × perWrong)
          </div>
          <p>
            In plain language: you earn a share of the maximum for each true statement you correctly select,
            and you lose a share for each false statement you incorrectly select. Missed true statements
            simply withhold the credit you could have earned — they are not an extra penalty beyond that.
          </p>
        </BbeSection>

        <BbeSection id="minimum-zero" title="Minimum score of zero">
          <p>
            After credit and penalties are combined, the task score is never reported below zero. Heavy
            over-ticking can therefore wipe a task completely, but it does not dig into other questions’
            points.
          </p>
        </BbeSection>

        <BbeSection id="question-types" title="Different question types">
          <p>
            The same scoring idea applies across Economics, English, and Mathematics: one stem, several
            statements, independent judgments. What changes is the content and the maximum points assigned
            to the task. At least one statement is always true — all-false stems do not occur — but any
            number of statements from one up to all may be true.
          </p>
        </BbeSection>

        <BbeSection id="worked-examples" title="Worked scoring examples">
          <p>
            Assume a mathematics-style task worth{" "}
            <span className="font-medium text-foreground">{MAX_EXAMPLE} points</span> with five
            statements whose truth pattern is T, T, F, T, F (so r = {r}, f = {f}). Then perCorrect ={" "}
            {MAX_EXAMPLE} / {r} = {perCorrect.toFixed(1)} and perWrong = {MAX_EXAMPLE} / {f} ={" "}
            {perWrong.toFixed(1)}.
          </p>
          <div className="space-y-4">
            {workedExamples.map((ex) => (
              <article
                key={ex.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">{ex.title}</h3>
                  <p className="font-display text-lg font-bold text-foreground">
                    Score: {ex.score.toFixed(1)} / {MAX_EXAMPLE}
                  </p>
                </div>
                <p className="mt-2 text-sm">{ex.note}</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-5">
                  {ex.statements.map((s, i) => (
                    <li
                      key={`${ex.title}-${i}`}
                      className="rounded-lg border border-border bg-secondary/40 px-2 py-2 text-center text-xs"
                    >
                      <span className="font-semibold text-foreground">{String.fromCharCode(65 + i)}</span>
                      <span className="mt-1 block text-muted-foreground">
                        {s.isTrue ? "True" : "False"} · {s.userMarked ? "marked" : "left"}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </BbeSection>

        <BbeSection id="ranking" title="How scoring relates to ranking and admission">
          <p>
            Applicants are ranked by written-exam performance for the {BBE_EXAM_FORMAT.places} available
            places. The OSA is ungraded and does not enter that ranking. There is no separate “cutoff score”
            published as a fixed pass mark on this site — relative performance against other candidates in
            the cycle determines selection.
          </p>
          <BbeTextLink to="/bbe-admission">Learn how the WU BBE admission process works →</BbeTextLink>
        </BbeSection>

        <BbeSection id="common-mistakes" title="Common scoring mistakes">
          <ul className="list-disc space-y-2 pl-5">
            <li>Selecting every statement “to be safe” and wiping the task with false-statement penalties.</li>
            <li>Treating the stem like a single best-answer question instead of five independent judgments.</li>
            <li>Assuming a fixed number of true statements per question.</li>
            <li>Ignoring that leaving a doubtful option unmarked can protect points.</li>
            <li>Practicing untimed accuracy only — never seeing how mixed patterns convert into scores.</li>
          </ul>
        </BbeSection>

        <BbeSection id="faq" title="FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeDemoCta
          title="Want to practice questions using the BBE-style format and scoring approach?"
          body="Start the free BBE demo course and work through sample tasks with explanations."
          cta="Start the Free BBE Demo Course →"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BbeTextLink to={BBE_PRACTICE_ROUTES.mockExams}>Try a scored mock exam →</BbeTextLink>
          <BbeTextLink to="/bbe-entrance-exam">Back to the BBE Entrance Exam Guide →</BbeTextLink>
          <BbeTextLink to={BBE_PRACTICE_ROUTES.products}>Explore full preparation materials →</BbeTextLink>
        </div>

        <BbeFullPrepCta />
      </div>
    </BbeExamShell>
  );
}
