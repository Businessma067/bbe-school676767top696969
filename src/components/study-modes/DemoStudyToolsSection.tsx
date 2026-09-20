import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  FlashcardsModeArt,
  MatchingModeArt,
  TutorModeArt,
} from "@/components/study-modes/ModeArt";
import { WISO_DASHBOARD_STUDY } from "@/lib/wiso-study-ui";
import type { DemoStudyTrack } from "@/components/study-modes/DemoStudyToolPages";

type ToolCard = {
  to: string;
  title: string;
  blurb: string;
  cta: string;
  art: ReactNode;
};

function cardsFor(track: DemoStudyTrack): ToolCard[] {
  if (track === "wiso") {
    return [
      {
        to: "/wiso/demo-practice/flashcards",
        title: WISO_DASHBOARD_STUDY.flashcardsTitle,
        blurb: WISO_DASHBOARD_STUDY.flashcardsBlurb,
        cta: WISO_DASHBOARD_STUDY.flashcardsCta,
        art: <FlashcardsModeArt locale="de" />,
      },
      {
        to: "/wiso/demo-practice/matching",
        title: WISO_DASHBOARD_STUDY.matchingTitle,
        blurb: WISO_DASHBOARD_STUDY.matchingBlurb,
        cta: WISO_DASHBOARD_STUDY.matchingCta,
        art: <MatchingModeArt locale="de" />,
      },
      {
        to: "/wiso/demo-practice/tutor-exam",
        title: WISO_DASHBOARD_STUDY.tutorTitle,
        blurb: WISO_DASHBOARD_STUDY.tutorBlurb,
        cta: WISO_DASHBOARD_STUDY.tutorCta,
        art: <TutorModeArt locale="de" />,
      },
    ];
  }

  return [
    {
      to: "/demo-practice/flashcards",
      title: "Flashcards",
      blurb: "Drill Economics terms, Math formulas, and English vocabulary with flip cards.",
      cta: "Open demo flashcards →",
      art: <FlashcardsModeArt />,
    },
    {
      to: "/demo-practice/matching",
      title: "Matching",
      blurb: "Connect each concept to the right definition. Same decks, different interaction.",
      cta: "Open demo matching →",
      art: <MatchingModeArt />,
    },
    {
      to: "/demo-practice/tutor-exam",
      title: "Tutor Exam",
      blurb: "A tutor robot runs a random theoretical quiz. New questions every time.",
      cta: "Open demo tutor exam →",
      art: <TutorModeArt />,
    },
  ];
}

export function DemoStudyToolsSection({ track }: { track: DemoStudyTrack }) {
  const isWiso = track === "wiso";
  const cards = cardsFor(track);

  return (
    <section className="mt-14">
      <div className="mb-8 text-center">
        <p
          className={
            "text-xs font-semibold uppercase tracking-wider " +
            (isWiso ? "text-indigo-700 dark:text-indigo-300" : "text-caramel-deep")
          }
        >
          {isWiso ? WISO_DASHBOARD_STUDY.sectionEyebrow : "BBE course"}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {isWiso ? WISO_DASHBOARD_STUDY.studyToolsHeading : "Study tools"}
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          {isWiso
            ? "Karteikarten, Zuordnung und Tutor-Prüfung ausprobieren — Antworten sind im Full Course freigeschaltet."
            : "Try flashcards, matching, and tutor exam — answers unlock with the full course."}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="h-32 w-full overflow-hidden bg-secondary">{card.art}</div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.blurb}</p>
              <p
                className={
                  "mt-4 text-xs font-semibold " +
                  (isWiso ? "text-indigo-800 dark:text-indigo-300" : "text-caramel-deep")
                }
              >
                {card.cta}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
