import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  FlashcardsSubjectArt,
  MatchingSubjectArt,
  TutorSubjectArt,
  type StudyArtSubjectId,
} from "@/components/study-modes/ModeArt";
import { countCards, type FlashcardSection } from "@/data/flashcards";
import {
  WISO_STUDY_INDEX_COPY,
  type StudyUiLocale,
} from "@/lib/wiso-study-ui";

export type StudyToolSubjectCard = {
  id: string;
  title: string;
  description: string;
  accent: string;
  sections: FlashcardSection[];
  comingSoon?: boolean;
  artSubject: StudyArtSubjectId;
};

type StudyToolKind = "flashcards" | "matching" | "tutor-exam";

const COPY_EN: Record<
  StudyToolKind,
  {
    title: string;
    subtitle: string;
    cta: string;
    pairLabel: (n: number, topics: number, id: string) => string;
    matchingBlurb: (title: string) => string;
    tutorBlurb: (title: string) => string;
    comingSoon: string;
  }
> = {
  flashcards: {
    title: "Flashcards",
    subtitle: "Choose a subject to drill terms and formulas.",
    cta: "Study flashcards →",
    pairLabel: (n, topics, id) =>
      id === "english" ? `${n} cards · 3 modes` : `${n} cards · ${topics} topics`,
    matchingBlurb: (title) =>
      `Match terms and formulas to their definitions from the ${title.toLowerCase()} deck.`,
    tutorBlurb: (title) =>
      `Tutor Bot asks random definition and identification questions from the ${title.toLowerCase()} theory deck.`,
    comingSoon: "Coming soon",
  },
  matching: {
    title: "Matching",
    subtitle: "Connect each concept to the right meaning. Same study bank as flashcards, different drill.",
    cta: "Start matching →",
    pairLabel: (n, topics) => `${n} pairs · ${topics} topics`,
    matchingBlurb: (title) =>
      `Match terms and formulas to their definitions from the ${title.toLowerCase()} deck.`,
    tutorBlurb: (title) =>
      `Tutor Bot asks random definition and identification questions from the ${title.toLowerCase()} theory deck.`,
    comingSoon: "Coming soon",
  },
  "tutor-exam": {
    title: "Tutor Exam",
    subtitle: "A study robot quizzes you on theory. Fully random questions each run, per subject.",
    cta: "Start exam →",
    pairLabel: (n) => `${n} concepts · new shuffle every exam`,
    matchingBlurb: (title) =>
      `Match terms and formulas to their definitions from the ${title.toLowerCase()} deck.`,
    tutorBlurb: (title) =>
      `Tutor Bot asks random definition and identification questions from the ${title.toLowerCase()} theory deck.`,
    comingSoon: "Coming soon",
  },
};

function resolveCopy(kind: StudyToolKind, locale: StudyUiLocale) {
  if (locale !== "de") return COPY_EN[kind];
  const de = WISO_STUDY_INDEX_COPY[kind];
  return {
    title: de.title,
    subtitle: de.subtitle,
    cta: de.cta,
    pairLabel: (n: number, topics: number, _id: string) => {
      if (kind === "tutor-exam") {
        return WISO_STUDY_INDEX_COPY["tutor-exam"].pairLabel(n);
      }
      return WISO_STUDY_INDEX_COPY[kind].pairLabel(n, topics);
    },
    matchingBlurb: de.matchingBlurb,
    tutorBlurb: de.tutorBlurb,
    comingSoon: de.comingSoon,
  };
}

function SubjectArt({
  kind,
  subject,
  accent,
  locale,
}: {
  kind: StudyToolKind;
  subject: StudyArtSubjectId;
  accent: string;
  locale: StudyUiLocale;
}) {
  if (kind === "matching") {
    return <MatchingSubjectArt subject={subject} accent={accent} locale={locale} />;
  }
  if (kind === "tutor-exam") {
    return <TutorSubjectArt subject={subject} accent={accent} locale={locale} />;
  }
  return <FlashcardsSubjectArt subject={subject} accent={accent} locale={locale} />;
}

export function StudyToolsSubjectIndex({
  kind,
  subjects,
  subjectPath,
  blurbFor,
  locale = "en",
}: {
  kind: StudyToolKind;
  subjects: StudyToolSubjectCard[];
  /** e.g. "/flashcards/$subject" or "/wiso/flashcards/$subject" */
  subjectPath:
    | "/flashcards/$subject"
    | "/matching/$subject"
    | "/tutor-exam/$subject"
    | "/wiso/flashcards/$subject"
    | "/wiso/matching/$subject"
    | "/wiso/tutor-exam/$subject";
  blurbFor?: (title: string) => string;
  locale?: StudyUiLocale;
}) {
  const copy = resolveCopy(kind, locale);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader compact maxWidthClassName="max-w-7xl" />

      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{copy.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {subjects.map((s) => {
              const n = countCards(s.sections);
              const description =
                blurbFor?.(s.title) ??
                (kind === "flashcards"
                  ? s.description
                  : kind === "matching"
                    ? copy.matchingBlurb(s.title)
                    : copy.tutorBlurb(s.title));

              const cardInner = (
                <>
                  <SubjectArt
                    kind={kind}
                    subject={s.artSubject}
                    accent={s.accent}
                    locale={locale}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      <span
                        className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                        style={{ backgroundColor: s.accent }}
                      />
                      {s.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-muted-foreground">
                      {s.comingSoon
                        ? copy.comingSoon
                        : copy.pairLabel(n, s.sections.length, s.id)}
                    </p>
                    <span
                      className={
                        "mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm " +
                        (s.comingSoon
                          ? "cursor-not-allowed opacity-70"
                          : "transition-all group-hover:brightness-110")
                      }
                      style={{
                        backgroundColor: s.accent,
                        boxShadow: s.comingSoon
                          ? undefined
                          : `0 4px 14px -4px ${s.accent}80`,
                      }}
                    >
                      {s.comingSoon ? copy.comingSoon : copy.cta}
                    </span>
                  </div>
                </>
              );

              if (s.comingSoon) {
                return (
                  <div
                    key={s.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                    style={{ borderTop: `4px solid ${s.accent}` }}
                  >
                    {cardInner}
                  </div>
                );
              }

              return (
                <Link
                  key={s.id}
                  to={subjectPath}
                  params={{ subject: s.id }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderTop: `4px solid ${s.accent}` }}
                >
                  {cardInner}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
