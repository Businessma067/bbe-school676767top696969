import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import { WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
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
          "A practical WiSo preparation sequence: Wirtschaft verstehen, German reading, math fluency, scoring awareness, then timed mocks.",
      },
      { property: "og:title", content: "How to Prepare for the WU WiSo Entrance Exam" },
      {
        property: "og:description",
        content: "Step-by-step WiSo prep plan without mixing up BBE English content.",
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
    question: "Can I reuse BBE prep for WiSo?",
    answer:
      "Math and some economics concepts overlap. German reading and WiSo-specific economics chapters (sustainability, digitalisation) do not. Never study BBE English as a substitute for WiSo German.",
  },
];

export function WisoExamPreparationPage() {
  return (
    <WisoExamShell
      h1="How to Prepare for the WU WiSo Entrance Exam"
      lead="A high-leverage sequence: learn the format and Teilpunktesystem, cover Wirtschaft verstehen, build German reading speed, lock math fluency, then add timed mocks on WiSo URLs."
      heroActions={
        <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.products}>See WiSo products</WisoPrimaryButton>
      }
    >
      <div className="space-y-14">
        <WisoInfoCallout label="Stay on the WiSo track" tone="note">
          Demo practice, mocks, mock builder, and flashcards for WiSo live under /wiso/... so you do
          not accidentally jump into BBE English drills.
        </WisoInfoCallout>

        <WisoSection id="sequence" title="Recommended sequence">
          <ol className="list-decimal space-y-3 pl-5">
            <li>Read the exam overview and scoring pages so partial credit feels intuitive.</li>
            <li>Work through Wirtschaft verstehen chapter by chapter; flag WiSo-only chapters 2 and 4.</li>
            <li>Add daily German academic reading with statement-style questions.</li>
            <li>Drill math for speed — formulas first, then mixed timed sets.</li>
            <li>Finish with full mocks and the mock builder on WiSo URLs.</li>
          </ol>
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/entrance-exam">Exam overview →</WisoTextLink>
            <WisoTextLink to="/wiso/economics-german">Economics & German →</WisoTextLink>
            <WisoTextLink to={WISO_PRACTICE_ROUTES.mockExams}>WiSo mocks →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
