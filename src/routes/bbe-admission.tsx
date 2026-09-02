import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BbeDemoCta,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection } from "@/components/bbe-exam/BbeExamShell";
import { BBE_EXAM_FORMAT, BBE_FORMAT_NOTE, BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bbe-admission")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
    links: [{ rel: "canonical", href: "https://bbe-school.com/bbe-admission" }],
    meta: [
      {
        title:
          "WU Vienna BBE Admission & Application: Requirements, OSA & Entrance Exam | BBE School",
      },
      {
        name: "description",
        content:
          "How WU Vienna BBE admission works: application overview, registration, OSA, entrance exam, ranking and dates, with a reminder that administrative details can change.",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Admission & Application: Requirements, OSA & Entrance Exam",
      },
      {
        property: "og:description",
        content:
          "Registration, OSA, entrance exam and ranking for WU Vienna’s BBE programme: an independent overview.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeAdmissionPage,
});

const faqs = [
  {
    question: "Is there an entrance exam every year?",
    answer:
      "The written entrance exam is part of the selection procedure when registrations exceed available places. Confirm the current cycle on the official WU website.",
  },
  {
    question: "Is the OSA graded?",
    answer: "No. The OSA is ungraded and does not enter the ranking based on written-exam performance.",
  },
  {
    question: "How many places are available?",
    answer: `${BBE_EXAM_FORMAT.places} places are referenced in the BBE Entrance Exam Guide overview.`,
  },
  {
    question: "Is there an alternative or online exam date?",
    answer: "None. No exceptions, per the exam overview in the guide.",
  },
  {
    question: "What must I bring on exam day?",
    answer:
      "Physical government-issued photo ID (original), printed exam invitation, blue/black ballpoint pen, a calculator from WU’s permitted list; snack/drink optional.",
  },
];

/** Time-sensitive fields — update yearly from official WU info via the exam guide source. */
const cycleDates: { field: string; detail: string }[] = [
  { field: "Registration window", detail: BBE_EXAM_FORMAT.cycle.registrationWindow },
  { field: "Registration fee", detail: BBE_EXAM_FORMAT.cycle.registrationFee },
  { field: "OSA deadline", detail: BBE_EXAM_FORMAT.cycle.osaDeadline },
  { field: "Entrance exam", detail: BBE_EXAM_FORMAT.cycle.examDate },
  { field: "Exam location", detail: BBE_EXAM_FORMAT.location },
  { field: "Available places", detail: String(BBE_EXAM_FORMAT.places) },
  {
    field: "Approx. admission rate",
    detail: "About 8% (roughly 2,900 exam-takers last year)",
  },
  { field: "Program start", detail: "Winter semester only" },
];

function BbeAdmissionPage() {
  return (
    <BbeExamShell
      h1="WU Vienna BBE Admission & Application: Requirements, OSA & Entrance Exam"
      lead="Application, registration, the OSA, and the entrance exam all fit into WU Vienna’s Bachelor in Business and Economics selection process. Here is how they connect, and which details change from one cycle to the next."
      heroActions={
        <>
          <BbePrimaryButton to="/bbe-entrance-exam">Read the exam overview</BbePrimaryButton>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>Start free demo prep</BbePrimaryButton>
        </>
      }
    >
      <div className="space-y-14">
        <BbeSection id="overview" title="Overview of the admission process">
          <p>
            WU Vienna’s English-taught Bachelor&apos;s Program in Business and Economics (BBE) admits for
            the winter semester. When registrations exceed available places, selection includes a written,
            in-person multiple-choice entrance exam. Applicants are ranked by written-exam performance for
            the {BBE_EXAM_FORMAT.places} places described in the exam guide.
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Check eligibility and prepare required application materials via official WU channels.</li>
            <li>Register within the published window and pay the fee if applicable.</li>
            <li>Complete the OSA by the deadline (ungraded).</li>
            <li>Sit the entrance exam if it forms part of that cycle’s selection procedure.</li>
            <li>Await ranking / admission outcome based on written-exam performance.</li>
          </ol>
          <BbeInfoCallout label="Independent guide" tone="official">
            This page summarises information already presented in BBE School&apos;s BBE Entrance Exam Guide.
            Always confirm requirements, fees and dates on the official WU Vienna website.
          </BbeInfoCallout>
        </BbeSection>

        <BbeSection id="eligibility" title="Eligibility / application requirements">
          <p>
            Formal eligibility, secondary-school credentials, language proof and document checklists are
            defined by WU for each cycle. This independent guide does not replace WU’s application
            instructions. Use official pages for binding requirements.
          </p>
          <p>
            What this hub can help with is the entrance-exam side of selection: format, subjects, scoring
            behaviour and preparation.
          </p>
          <BbeTextLink to="/bbe-entrance-exam">Open the BBE Entrance Exam Guide →</BbeTextLink>
        </BbeSection>

        <BbeSection id="registration" title="Registration">
          <p>
            Registration for the selection procedure runs in a published window. The guide’s current cycle
            details list a fee of {BBE_EXAM_FORMAT.cycle.registrationFee}.
          </p>
          <DateTable rows={cycleDates.filter((r) => r.field.startsWith("Registration"))} />
        </BbeSection>

        <BbeSection id="osa" title="OSA">
          <p>
            The OSA must be completed by the published deadline. It is{" "}
            <span className="font-medium text-foreground">ungraded</span> and does not factor into ranking
            based on written-exam performance. Missing the OSA deadline can still block your application.
            Treat it as a hard administrative step even though it does not produce a score.
          </p>
          <DateTable
            rows={cycleDates.filter((r) => r.field.startsWith("OSA"))}
          />
        </BbeSection>

        <BbeSection id="entrance-exam" title="Entrance exam">
          <BbeInfoCallout label="Most recent exam structure" tone="official">
            {BBE_FORMAT_NOTE}
          </BbeInfoCallout>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              {BBE_EXAM_FORMAT.questionCount} questions in {BBE_EXAM_FORMAT.durationHours} hours (most recent
              structure)
            </li>
            <li>
              {BBE_EXAM_FORMAT.economicsQuestions} Economics &amp; Business ·{" "}
              {BBE_EXAM_FORMAT.englishQuestions} English · {BBE_EXAM_FORMAT.mathQuestions} Mathematics
            </li>
            <li>
              Approximate score weighting: Economics{" "}
              {BBE_EXAM_FORMAT.scoreWeighting.economics}, English{" "}
              {BBE_EXAM_FORMAT.scoreWeighting.english}, Mathematics{" "}
              {BBE_EXAM_FORMAT.scoreWeighting.mathematics}
            </li>
            <li>Written, in person, multiple-choice only</li>
            <li>Location: {BBE_EXAM_FORMAT.location}</li>
            <li>No alternative date / online option</li>
            <li>Formula sheet provided; calculator must be on WU’s permitted list</li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to="/bbe-exam-scoring">BBE scoring explained →</BbeTextLink>
            <BbeTextLink to="/bbe-exam-preparation">How to prepare →</BbeTextLink>
          </div>
        </BbeSection>

        <BbeSection id="ranking" title="Ranking / selection">
          <p>
            Applicants are ranked by written-exam performance for the {BBE_EXAM_FORMAT.places} available
            places. The OSA does not enter that ranking. Relative standing among candidates in the cycle
            matters. There is no separate fixed “pass mark” published in this guide.
          </p>
          <p>
            The exam is very competitive. Last year there were about 2,900 exam-takers for roughly{" "}
            {BBE_EXAM_FORMAT.places} places, so the admission rate was about 8%.
          </p>
        </BbeSection>

        <BbeSection id="after-exam" title="Admission after the exam">
          <p>
            After the exam, WU communicates outcomes through its official admission channels. Preparation
            resources on BBE School stop at helping you perform on the written test; enrolment steps,
            visa/residence topics and tuition questions belong on official WU pages.
          </p>
        </BbeSection>

        <BbeSection id="dates" title="Important dates">
          <BbeInfoCallout label="Update each cycle" tone="advice">
            Dates below reflect the cycle details currently recorded in the BBE Entrance Exam Guide (last
            updated {BBE_EXAM_FORMAT.cycle.lastUpdated}). Re-check official WU pages before you rely on them
            for planning.
          </BbeInfoCallout>
          <DateTable rows={cycleDates} />
        </BbeSection>

        <BbeSection id="what-can-change" title="What can change from year to year">
          <ul className="list-disc space-y-2 pl-5">
            <li>Registration windows, fees and OSA deadlines</li>
            <li>Exact exam date and session time</li>
            <li>Whether an entrance exam is required (if demand vs places changes)</li>
            <li>Permitted calculator lists and exam-day instructions</li>
            <li>Question-style emphasis within the mathematics topic areas</li>
          </ul>
          <p>
            The multi-section structure and preparation logic remain useful even when administrative details
            shift. Even so, never treat an independent prep site as a substitute for WU’s published rules.
          </p>
        </BbeSection>

        <BbeSection id="faq" title="FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeDemoCta
          title="Preparing while you track admission deadlines?"
          body="Use the free demo course to start BBE-style practice early, then deepen with full materials as registration approaches."
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BbeTextLink to="/bbe-entrance-exam">Back to the BBE Entrance Exam Guide →</BbeTextLink>
          <BbeTextLink to="/bbe-exam-preparation">Build your preparation plan →</BbeTextLink>
        </div>
      </div>
    </BbeExamShell>
  );
}

function DateTable({ rows }: { rows: { field: string; detail: ReactNode }[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <dl>
        {rows.map((row, i) => (
          <div
            key={row.field}
            className={cn(
              "grid gap-1 px-4 py-3 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6 sm:px-5",
              i % 2 === 0 ? "bg-card" : "bg-secondary/40",
            )}
          >
            <dt className="text-[0.975rem] font-semibold text-foreground">{row.field}</dt>
            <dd className="text-[0.975rem] leading-relaxed text-neutral-800 sm:text-[1.0625rem]">
              {row.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
