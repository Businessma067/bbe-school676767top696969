import { createFileRoute } from "@tanstack/react-router";
import {
  WisoGhostButton,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { WisoExamShell, WisoSection, WisoStatGrid } from "@/components/wiso-exam/WisoExamShell";
import { WISO_EXAM_FORMAT, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/wu-vienna" as const;

export const Route = createFileRoute("/wiso/wu-vienna")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WU Vienna for WiSo Applicants | BBE School" },
      {
        name: "description",
        content:
          "Why WU Vienna matters for WiSo applicants: triple accreditation, German-taught bachelor scale, and how the entrance exam fits the university.",
      },
      { property: "og:title", content: "WU Vienna for WiSo Applicants" },
      {
        property: "og:description",
        content: "Campus context for WiSo applicants preparing for the Aufnahmeprüfung.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoWuViennaPage,
});

export function WisoWuViennaPage() {
  return (
    <WisoExamShell
      h1="WU Vienna for WiSo Applicants"
      lead="WiSo is WU’s large German-taught bachelor pathway. Same campus and prestige as BBE — different language of instruction, cohort size, and entrance-exam content."
      heroActions={
        <>
          <WisoPrimaryButton to="/wiso/entrance-exam">WiSo exam overview</WisoPrimaryButton>
          <WisoGhostButton to="/wu-vienna">Full WU overview (shared)</WisoGhostButton>
        </>
      }
    >
      <div className="space-y-14">
        <WisoStatGrid
          items={[
            { label: "WiSo places", value: String(WISO_EXAM_FORMAT.places) },
            { label: "Exam", value: "In person" },
            { label: "Language", value: "German" },
            { label: "Start", value: "Wi / Su" },
          ]}
        />

        <WisoInfoCallout label="Independent guide" tone="official">
          BBE School is not affiliated with WU Vienna. Use official WU pages for binding rules,
          fees, and dates.
        </WisoInfoCallout>

        <WisoSection id="why" title="Why applicants choose WiSo at WU">
          <p>
            Triple-accredited WU education at a tuition level far below many UK/US peers, with a
            German-taught curriculum and more places than BBE. The filter is still a timed
            multiple-choice exam with partial-credit scoring.
          </p>
          <WisoTextLink to={WISO_PRACTICE_ROUTES.home}>Back to WiSo home →</WisoTextLink>
        </WisoSection>
      </div>
    </WisoExamShell>
  );
}
