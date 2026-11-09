import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BbeDemoCta,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
  BbeWuSourceLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection } from "@/components/bbe-exam/BbeExamShell";
import {
  BBE_EXAM_FORMAT,
  BBE_FORMAT_NOTE,
  BBE_OFFICIAL_LINKS,
  BBE_PRACTICE_ROUTES,
} from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/bbe-admission")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "WU Vienna BBE Admission 2027/2028: Dates, OSA & Entrance Exam",
          description:
            "Official WU Vienna BBE selection procedure dates for 2027/2028: registration March 1–May 24 2027, OSA until June 2 noon CEST, in-person exam July 7 2027 at VIECON.",
          dateModified: BBE_EXAM_FORMAT.cycle.lastUpdatedIso,
          datePublished: BBE_EXAM_FORMAT.cycle.lastUpdatedIso,
          author: { "@type": "Organization", name: "BBE School" },
          mainEntityOfPage: "https://bbe-school.com/bbe-admission",
        }),
      },
    ],
    links: [...hreflangLinks("/bbe-admission"), { rel: "canonical", href: "https://bbe-school.com/bbe-admission" }],
    meta: [
      {
        title:
          "WU Vienna BBE Admission 2027/2028: Exam July 7, OSA & Registration Dates | BBE School",
      },
      {
        name: "description",
        content:
          "WU Vienna BBE selection procedure 2027/2028: register March 1–May 24 2027, finish the ungraded OSA by June 2 noon CEST, sit the in-person exam July 7 at VIECON (Messeplatz 1), then enroll July 12–September 5.",
      },
      {
        name: "keywords",
        content:
          "WU Vienna BBE admission 2027, BBE entrance exam July 7 2027, BBE OSA deadline, BBE selection procedure 2027/2028, VIECON Messeplatz, WU BBE registration",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Admission 2027/2028: Exam July 7, OSA & Registration Dates",
      },
      {
        property: "og:description",
        content:
          "Registration, OSA, July 7 VIECON exam, admission window and Welcome Days for WU Vienna’s BBE programme — independent overview of the official 2027/2028 timeline.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath("/bbe-admission"),
    ],
  }),
  component: BbeAdmissionPage,
});

const faqs = [
  {
    question: "When is the WU Vienna BBE entrance exam in 2027?",
    answer:
      `The in-person BBE entrance exam for the ${BBE_EXAM_FORMAT.cycle.academicYear} academic year is on ${BBE_EXAM_FORMAT.cycle.examDate} at ${BBE_EXAM_FORMAT.location}. Duration is ${BBE_EXAM_FORMAT.durationHours} hours. Results are announced ${BBE_EXAM_FORMAT.cycle.examResults.toLowerCase()}. Confirm the session clock time on your official invitation.`,
  },
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
    question: "When is the BBE OSA deadline for 2027?",
    answer: `Complete the Online Self-Assessment by ${BBE_EXAM_FORMAT.cycle.osaDeadline}. The OSA window runs ${BBE_EXAM_FORMAT.cycle.osaWindow}.`,
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

/** Time-sensitive fields — update yearly from official WU selection procedure. */
const cycleDates: { field: string; detail: string }[] = [
  { field: "Academic year", detail: BBE_EXAM_FORMAT.cycle.academicYear },
  { field: "Registration window", detail: BBE_EXAM_FORMAT.cycle.registrationWindow },
  { field: "Registration fee", detail: BBE_EXAM_FORMAT.cycle.registrationFee },
  { field: "OSA window", detail: BBE_EXAM_FORMAT.cycle.osaWindow },
  { field: "OSA deadline", detail: BBE_EXAM_FORMAT.cycle.osaDeadline },
  { field: "Entrance exam", detail: BBE_EXAM_FORMAT.cycle.examDate },
  { field: "Exam location", detail: BBE_EXAM_FORMAT.location },
  { field: "Exam results", detail: BBE_EXAM_FORMAT.cycle.examResults },
  { field: "Admission / enrollment", detail: BBE_EXAM_FORMAT.cycle.admissionWindow },
  { field: "Admission location", detail: BBE_EXAM_FORMAT.cycle.admissionLocation },
  { field: "BBE Welcome Days", detail: BBE_EXAM_FORMAT.cycle.welcomeDays },
  { field: "Available places", detail: String(BBE_EXAM_FORMAT.places) },
  {
    field: "Approx. admission rate",
    detail: "About 8% (roughly 2,900 exam-takers last year)",
  },
  { field: "Program start", detail: "Winter semester only" },
];

export function BbeAdmissionPage() {
  return (
    <BbeExamShell
      h1="WU Vienna BBE Admission 2027/2028: Requirements, OSA & Entrance Exam Dates"
      lead="WU has published the official selection-procedure timeline for the Bachelor in Business and Economics academic year 2027/2028. Here is how registration, the OSA, the July 7 in-person exam, and enrollment connect — and which details you should still confirm on wu.ac.at."
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
            the winter semester of {BBE_EXAM_FORMAT.cycle.academicYear}. When registrations exceed available
            places, selection includes a written, in-person multiple-choice entrance exam. Applicants are
            ranked by written-exam performance for the {BBE_EXAM_FORMAT.places} places described in the exam
            guide.
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Register online from {BBE_EXAM_FORMAT.cycle.registrationWindow} and pay the registration fee.
              Students in their last year of school may register before they receive their secondary-school
              leaving certificate.
            </li>
            <li>
              Complete the ungraded Online Self-Assessment (OSA) by {BBE_EXAM_FORMAT.cycle.osaDeadline}.
            </li>
            <li>
              Sit the in-person entrance exam on {BBE_EXAM_FORMAT.cycle.examDate} at{" "}
              {BBE_EXAM_FORMAT.location} ({BBE_EXAM_FORMAT.durationHours} hours).
            </li>
            <li>Await ranking / results ({BBE_EXAM_FORMAT.cycle.examResults.toLowerCase()}).</li>
            <li>
              If you receive an offer, enroll at the Study Service Center during{" "}
              {BBE_EXAM_FORMAT.cycle.admissionWindow}.
            </li>
          </ol>
          <BbeInfoCallout label="Independent guide" tone="official">
            This page summarises WU’s published {BBE_EXAM_FORMAT.cycle.academicYear} selection-procedure
            timeline and BBE School&apos;s BBE Entrance Exam Guide. Always confirm requirements, fees and
            dates on the official WU Vienna website (
            <a
              href={BBE_OFFICIAL_LINKS.selectionProcedureShort}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline-offset-4 hover:underline"
            >
              short.wu.ac.at/sp-bbe
            </a>
            ).
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
            Online registration for the {BBE_EXAM_FORMAT.cycle.academicYear} selection procedure runs{" "}
            {BBE_EXAM_FORMAT.cycle.registrationWindow}. Fill in the online registration tool and pay the
            fee ({BBE_EXAM_FORMAT.cycle.registrationFee}). Applicants in their final school year can
            register even if the secondary-school leaving certificate is not yet available.
          </p>
          <DateTable rows={cycleDates.filter((r) => r.field.startsWith("Registration"))} />
        </BbeSection>

        <BbeSection id="osa" title="OSA">
          <p>
            The Online Self-Assessment runs {BBE_EXAM_FORMAT.cycle.osaWindow} and must be completed by{" "}
            <span className="font-medium text-foreground">{BBE_EXAM_FORMAT.cycle.osaDeadline}</span>. It is{" "}
            <span className="font-medium text-foreground">ungraded</span> and does not factor into ranking
            based on written-exam performance. Missing the OSA deadline can still block your application.
            Treat it as a hard administrative step even though it does not produce a score.
          </p>
          <DateTable
            rows={cycleDates.filter((r) => r.field.startsWith("OSA"))}
          />
        </BbeSection>

        <BbeSection id="entrance-exam" title="Entrance exam">
          <BbeInfoCallout label="2027/2028 exam day" tone="official">
            <p>
              In-person exam on <span className="font-medium">{BBE_EXAM_FORMAT.cycle.examDate}</span> at{" "}
              {BBE_EXAM_FORMAT.location}. Duration: {BBE_EXAM_FORMAT.durationHours} hours. Results:{" "}
              {BBE_EXAM_FORMAT.cycle.examResults.toLowerCase()}.
            </p>
            <p className="mt-2">{BBE_FORMAT_NOTE}</p>
            <p className="mt-2">
              <BbeWuSourceLink />
            </p>
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
            After you pass the selection procedure and receive an admission offer, enrollment at the{" "}
            {BBE_EXAM_FORMAT.cycle.admissionLocation} runs {BBE_EXAM_FORMAT.cycle.admissionWindow}. The
            programme starts in the winter semester only. New students are invited to BBE Welcome Days in{" "}
            {BBE_EXAM_FORMAT.cycle.welcomeDays}.
          </p>
          <DateTable
            rows={cycleDates.filter((r) =>
              ["Admission / enrollment", "Admission location", "BBE Welcome Days", "Program start"].includes(
                r.field,
              ),
            )}
          />
          <p className="mt-4">
            Preparation resources on BBE School stop at helping you perform on the written test; visa /
            residence topics and tuition questions belong on official WU pages.
          </p>
        </BbeSection>

        <BbeSection id="dates" title="Important dates for 2027/2028">
          <BbeInfoCallout label="Update each cycle" tone="advice">
            Dates below reflect WU’s published {BBE_EXAM_FORMAT.cycle.academicYear} selection-procedure
            timeline (last updated on this site {BBE_EXAM_FORMAT.cycle.lastUpdated}). Re-check official WU
            pages before you rely on them for planning.
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
            <dd className="text-[0.975rem] leading-relaxed text-foreground sm:text-[1.0625rem]">
              {row.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
