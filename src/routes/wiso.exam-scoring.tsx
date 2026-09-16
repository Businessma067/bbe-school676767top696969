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
          "How WU Vienna WiSo entrance exam scoring works: gemischtes Teilpunktesystem, partial credit, penalties, and floor at zero — identical in mechanism to BBE.",
      },
      { property: "og:title", content: "WU Vienna WiSo Exam Scoring Explained" },
      {
        property: "og:description",
        content: "WiSo partial-credit scoring (Teilpunktesystem) in plain language.",
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
      "The official WiSo Teilpunktesystem PDF describes the same mechanism as BBE’s wi2-style partial credit: credit for correctly marked options, penalties for incorrectly marked ones, and a floor at zero per question.",
  },
  {
    question: "Can a WiSo question score go negative?",
    answer:
      "No. After combining credit and penalties, each question is floored at zero.",
  },
  {
    question: "Does the OSA affect my WiSo exam score?",
    answer:
      "No. The OSA is ungraded and must be completed to advance, but it does not enter the written-exam ranking.",
  },
];

export function WisoExamScoringPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Exam Scoring: Teilpunktesystem Explained"
      lead="WU publishes an official Teilpunktesystem for WiSo. Mechanically it matches the partial-credit rules you already know from BBE — only the question content and language differ."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Practice on WiSo URLs</WisoPrimaryButton>
          <WisoTextLink to="/bbe-exam-scoring">See BBE scoring page →</WisoTextLink>
        </>
      }
    >
      <div className="space-y-14">
        <WisoInfoCallout label="Official naming" tone="official">
          WU calls this the gemischtes Teilpunktesystem. Source: Teilpunktesystem WISO PDF on wu.ac.at.
          Always verify against the current official PDF if WU revises the wording.
        </WisoInfoCallout>

        <WisoSection id="rules" title="How points are awarded">
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Each question has a stated maximum score (<em>max</em>).
            </li>
            <li>
              For multi-correct questions: each correctly marked option earns <em>max/r</em> (r =
              number of correct options); each incorrectly marked option loses <em>max/f</em> (f =
              number of incorrect options). Positive and negative points net per question.
            </li>
            <li>
              For single-correct questions: all-or-nothing — full marks only if the one correct
              option is marked and no incorrect option is marked.
            </li>
            <li>Floor at zero per question — a question never scores below zero.</li>
          </ul>
        </WisoSection>

        <WisoSection id="strategy" title="What this means for prep">
          <p>
            Blind ticking hurts. Leaving uncertain options unmarked can be better than guessing when
            the penalty for a false mark is large. Train the same risk management you would use on
            BBE — just with German stems and WiSo economics content.
          </p>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
