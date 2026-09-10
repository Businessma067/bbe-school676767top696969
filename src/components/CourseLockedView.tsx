import { Link, useRouterState } from "@tanstack/react-router";
import { Clock, FileText, Layers, Lock, Shuffle, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { FLASHCARD_SUBJECTS, countCards } from "@/data/flashcards";
import type { AccessTier } from "@/lib/entitlements";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { MOCK_EXAMS } from "@/lib/mock-exams";
import { cn } from "@/lib/utils";

export type CourseLockFeature =
  | "mock-exams"
  | "flashcards"
  | "matching"
  | "tutor-exam"
  | "mock-builder"
  | "practice"
  | "course";

export function courseLockFeatureForPath(pathname: string): CourseLockFeature {
  const path = stripLocalePrefix(pathname);
  if (path.startsWith("/mock-exams")) return "mock-exams";
  if (path.startsWith("/flashcards")) return "flashcards";
  if (path.startsWith("/matching")) return "matching";
  if (path.startsWith("/tutor-exam")) return "tutor-exam";
  if (path.startsWith("/products/custom-mock-builder")) return "mock-builder";
  if (path.startsWith("/practice")) return "practice";
  if (
    path.startsWith("/products/full-course-") ||
    path.startsWith("/products/lite-bbe-course-")
  ) {
    return "course";
  }
  return "course";
}

const FEATURE_LABEL: Record<CourseLockFeature, string> = {
  "mock-exams": "Mock Exams",
  flashcards: "Flashcards",
  matching: "Matching",
  "tutor-exam": "Tutor Exam",
  "mock-builder": "Mock Builder",
  practice: "Practice",
  course: "Course content",
};

export function courseLockCopy(feature: CourseLockFeature, minTier: AccessTier) {
  const label = FEATURE_LABEL[feature];
  const verb = feature === "course" || feature === "practice" ? "is" : "are";
  if (minTier === "full") {
    return {
      message: `${label} ${verb} part of the Full Course`,
      ctaLabel: "Unlock Full Course",
      ctaTo: "/products/full-course" as const,
    };
  }
  return {
    message: `${label} ${verb} part of the Full Course`,
    ctaLabel: "See Pricing",
    ctaTo: "/products" as const,
  };
}

/**
 * Blurred / greyed feature shell + lock overlay for signed-in users
 * who need a paid course. Keeps them on the route instead of redirecting.
 */
export function CourseLockedView({
  feature,
  minTier = "lite",
}: {
  feature?: CourseLockFeature;
  minTier?: AccessTier;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const resolved = feature ?? courseLockFeatureForPath(pathname);
  const { message, ctaLabel, ctaTo } = courseLockCopy(resolved, minTier);

  return (
    <div className="relative min-h-dvh bg-background font-sans text-foreground antialiased">
      <div
        className="pointer-events-none select-none opacity-55 grayscale-[35%]"
        aria-hidden="true"
      >
        <div className="blur-[2px]">
          <SiteHeader compact />
          <FeatureShell feature={resolved} />
        </div>
      </div>

      <div className="absolute inset-0 z-40 flex items-center justify-center bg-background/55 px-4 backdrop-blur-[2px]">
        <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
          <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card shadow-sm">
            <Lock className="h-6 w-6 text-caramel-deep" aria-hidden="true" />
          </div>
          <p className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {message}
          </p>
          <Link
            to={ctaTo}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureShell({ feature }: { feature: CourseLockFeature }) {
  switch (feature) {
    case "mock-exams":
      return <MockExamsShell />;
    case "flashcards":
      return <SubjectsShell mode="Flashcards" icon={Layers} />;
    case "matching":
      return <SubjectsShell mode="Matching" icon={Shuffle} />;
    case "tutor-exam":
      return <SubjectsShell mode="Tutor Exam" icon={Sparkles} />;
    case "mock-builder":
      return <MockBuilderShell />;
    case "practice":
    case "course":
    default:
      return <PracticeShell />;
  }
}

function MockExamsShell() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Mock Exams</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Full-length simulations of the WU BBE entrance exam.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {MOCK_EXAMS.map((exam) => (
          <div
            key={exam.id}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-caramel-deep" />
              <h3 className="font-display text-lg font-semibold">{exam.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {exam.questionCount} questions · {exam.durationMinutes / 60} hours
            </p>
            <div className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background">
              <Clock className="h-4 w-4" />
              Start Exam
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function SubjectsShell({
  mode,
  icon: Icon,
}: {
  mode: string;
  icon: typeof Layers;
}) {
  return (
    <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{mode}</h1>
          <p className="mt-4 text-lg text-muted-foreground">Choose a subject to begin.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FLASHCARD_SUBJECTS.map((s) => (
            <div
              key={s.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              style={{ borderTop: `4px solid ${s.accent}` }}
            >
              <div
                className="flex h-28 items-center justify-center"
                style={{ background: `${s.accent}18` }}
              >
                <Icon className="h-8 w-8" style={{ color: s.accent }} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                <p className="mt-3 text-xs font-semibold text-muted-foreground">
                  {countCards(s.sections)} cards
                </p>
                <span
                  className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: s.accent }}
                >
                  Open {mode.toLowerCase()} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function MockBuilderShell() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight">Custom Mock Builder</h1>
      <p className="mt-3 text-muted-foreground">
        Mix Economics, Math, and English into a personal mock exam.
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
          {["Economics", "Mathematics", "English Texts"].map((subject, i) => (
            <div
              key={subject}
              className={cn(
                "flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3",
                i === 0 && "ring-1 ring-primary/30",
              )}
            >
              <span className="text-sm font-semibold">{subject}</span>
              <span className="text-xs text-muted-foreground">{8 + i * 2} tasks</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Preview
          </p>
          <p className="mt-2 font-display text-2xl font-bold">32 questions</p>
          <p className="mt-1 text-sm text-muted-foreground">~110 minutes</p>
          <div className="mt-6 rounded-md bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background">
            Build exam
          </div>
        </div>
      </div>
    </main>
  );
}

function PracticeShell() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight">Course practice</h1>
      <p className="mt-3 text-muted-foreground">Chapter drills, theory, and exam-style tasks.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Economics", "Mathematics", "English"].map((subject) => (
          <div
            key={subject}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h2 className="font-display text-xl font-semibold">{subject}</h2>
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="h-9 rounded-lg border border-border bg-secondary/40"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
