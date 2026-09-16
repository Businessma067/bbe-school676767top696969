import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import { WISO_EXAM_FORMAT, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/admission" as const;

export const Route = createFileRoute("/wiso/admission")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "WU Vienna WiSo Admission: Registration, OSA & Exam | BBE School",
      },
      {
        name: "description",
        content:
          "How WU Vienna WiSo admission works: registration, €50 fee, ungraded OSA, entrance exam, places, and enrollment window.",
      },
      { property: "og:title", content: "WU Vienna WiSo Admission & Application" },
      {
        property: "og:description",
        content: "Registration, OSA, exam and enrollment for WiSo — independent overview.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoAdmissionPage,
});

const faqs = [
  {
    question: "Is the WiSo OSA graded?",
    answer:
      "No. It is ungraded and does not affect ranking, but it must be fully completed by the deadline to advance.",
  },
  {
    question: "Can I apply to BBE and WiSo?",
    answer:
      "Yes. Fees are paid separately per programme. Prepare for each exam’s language section (English vs German).",
  },
];

const cycleDates: { field: string; detail: string }[] = [
  { field: "Registration window", detail: WISO_EXAM_FORMAT.cycle.registrationWindow },
  { field: "Registration fee", detail: WISO_EXAM_FORMAT.cycle.registrationFee },
  { field: "OSA deadline", detail: WISO_EXAM_FORMAT.cycle.osaDeadline },
  { field: "Entrance exam", detail: WISO_EXAM_FORMAT.cycle.examDate },
  { field: "Exam location", detail: WISO_EXAM_FORMAT.location },
  { field: "Available places", detail: String(WISO_EXAM_FORMAT.places) },
  { field: "Enrollment window", detail: WISO_EXAM_FORMAT.cycle.enrollmentWindow },
  { field: "Program start", detail: "Winter or summer semester possible" },
];

export function WisoAdmissionPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Admission: Registration, OSA & Entrance Exam"
      lead="Registration, the ungraded OSA, the written exam, and enrollment form one pipeline. Dates below are for the 2026 cycle — always confirm on official WU pages."
      heroActions={
        <WisoPrimaryButton to="/wiso/entrance-exam">Read the exam overview</WisoPrimaryButton>
      }
    >
      <div className="space-y-14">
        <WisoInfoCallout label="Fees" tone="official">
          The registration fee is paid per programme and is non-refundable, even if you apply to
          multiple WU bachelors.
        </WisoInfoCallout>

        <WisoSection id="dates" title="2026 cycle snapshot">
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[28rem] border-collapse text-left text-[0.95rem]">
              <tbody>
                {cycleDates.map((row) => (
                  <tr key={row.field} className="border-b border-border last:border-b-0">
                    <th className="w-[40%] px-4 py-3 align-top font-medium">{row.field}</th>
                    <td className="px-4 py-3 align-top">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </WisoSection>

        <WisoSection id="next" title="Next steps">
          <p>
            After you understand admission logistics, move to content: Wirtschaft verstehen, German
            reading, and math — then timed practice on WiSo URLs.
          </p>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo demo</WisoPrimaryButton>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
