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
import { wisoGuideJsonLdScripts, wisoShareMeta } from "@/lib/seo/wiso-seo";

const PATH = "/wiso/wu-vienna" as const;

export const Route = createFileRoute("/wiso/wu-vienna")({
  head: () => ({
    scripts: [
      ...wisoGuideJsonLdScripts({
        path: PATH,
        crumb: "WU Vienna",
        headline: "WU Vienna for WiSo Applicants",
        description:
          "Why WU Vienna matters for WiSo applicants: triple accreditation, German-taught bachelor scale, places, and how the entrance exam fits the university.",
      }),
    ],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WU Vienna for WiSo Applicants | BBE School" },
      {
        name: "description",
        content:
          "Why WU Vienna matters for WiSo applicants: triple accreditation, German-taught bachelor scale, places, and how the entrance exam fits the university.",
      },
      { property: "og:title", content: "WU Vienna for WiSo Applicants" },
      {
        property: "og:description",
        content: "Campus context for WiSo applicants preparing for the Aufnahmeprüfung.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...wisoShareMeta(
        PATH,
        "WU Vienna for WiSo Applicants",
        "Campus context for WiSo applicants preparing for the Aufnahmeprüfung.",
      ),
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoWuViennaPage,
});

export function WisoWuViennaPage() {
  return (
    <WisoExamShell
      h1="WU Vienna for WiSo Applicants"
      lead="WiSo is WU’s large German-taught bachelor pathway. Same campus and prestige as BBE, but a different language of instruction, cohort size, and entrance-exam content."
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

        <WisoInfoCallout label="Unofficial guide" tone="official">
          BBE School is not affiliated with WU Vienna. Use official WU pages for binding rules, fees,
          and dates.
        </WisoInfoCallout>

        <WisoSection id="why" title="Why applicants choose WiSo at WU">
          <p>
            Triple-accredited WU education at a tuition level far below many UK/US peers, with a
            German-taught curriculum and far more places than BBE (~{WISO_EXAM_FORMAT.places} vs ~240).
            The filter is still a timed multiple-choice exam with gemischtes Teilpunktesystem scoring,
            held in person at VIECON when demand exceeds supply.
          </p>
          <p>
            WiSo also allows winter or summer program start after a successful procedure, unlike BBE’s
            winter-only start. That flexibility matters for planning, but it does not change the need to
            finish registration and the OSA on time.
          </p>
        </WisoSection>

        <WisoSection id="exam-fit" title="How the entrance exam fits">
          <p>
            The Aufnahmeprüfung tests wirtschaftliche Grundkenntnisse (Wirtschaft verstehen), Mathematik,
            and deutsches Sprachverständnis. You are aiming for the same campus reputation as BBE
            applicants, with a different language pillar and economics guide. Scoring uses the same
            partial-credit rules as BBE.
          </p>
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/admission">Admission pipeline →</WisoTextLink>
            <WisoTextLink to="/bbe-vs-wiso">BBE vs WiSo →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoSection id="prep" title="Preparing on this site">
          <p>
            Stay on the WiSo track for demos, mocks, and tools. Products for both tracks are listed
            together on /products so you can compare Full BBE and Full WiSo side by side.
          </p>
          <div className="flex flex-wrap gap-3">
            <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>WiSo demo</WisoPrimaryButton>
            <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.products}>Products</WisoPrimaryButton>
            <WisoTextLink to={WISO_PRACTICE_ROUTES.home}>Back to WiSo home →</WisoTextLink>
          </div>
        </WisoSection>
      </div>
    </WisoExamShell>
  );
}
