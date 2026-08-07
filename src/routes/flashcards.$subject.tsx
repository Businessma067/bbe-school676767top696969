import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import {
  countCards,
  getFlashcardSubject,
  type Flashcard,
  type FlashcardSection,
} from "@/data/flashcards";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Layers,
  RotateCcw,
  Shuffle,
} from "lucide-react";

export const Route = createFileRoute("/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/flashcards" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    const title = subject ? `${subject.title} Flashcards — BBE School` : "Flashcards — BBE School";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: subject?.description ?? "BBE flashcards for the WU entrance exam.",
        },
      ],
    };
  },
  component: FlashcardSubjectPage,
});

type DeckCard = Flashcard & { sectionTitle: string };

function buildDeck(sections: FlashcardSection[], sectionId: string | "all"): DeckCard[] {
  const filtered =
    sectionId === "all" ? sections : sections.filter((s) => s.id === sectionId);
  return filtered.flatMap((s) =>
    s.cards.map((c) => ({ ...c, sectionTitle: s.title })),
  );
}

function shuffle<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function FlashcardSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getFlashcardSubject(subjectId)!;
  const total = countCards(subject.sections);

  const [sectionId, setSectionId] = useState<string | "all">("all");
  const [order, setOrder] = useState<DeckCard[]>(() => buildDeck(subject.sections, "all"));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setOrder(buildDeck(subject.sections, sectionId));
    setIndex(0);
    setFlipped(false);
  }, [sectionId, subject.sections]);

  const card = order[index];
  const progress = order.length ? ((index + 1) / order.length) * 100 : 0;

  const sectionOptions = useMemo(
    () => [
      { id: "all" as const, label: `All topics (${total})` },
      ...subject.sections.map((s) => ({
        id: s.id,
        label: `${s.title} (${s.cards.length})`,
      })),
    ],
    [subject.sections, total],
  );

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => {
      const next = i + delta;
      if (next < 0) return order.length - 1;
      if (next >= order.length) return 0;
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/flashcards"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Subjects
          </Link>
        }
      />

      <main className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                Flashcards
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {subject.title}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">{subject.description}</p>
            </div>
            {subject.downloadHref && (
              <a
                href={subject.downloadHref}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
              >
                <Download className="h-3.5 w-3.5" />
                {subject.downloadLabel ?? "Download .docx"}
              </a>
            )}
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Topic
            </label>
            <select
              value={sectionId}
              onChange={(e) => setSectionId(e.target.value)}
              className="min-w-[220px] flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/30"
            >
              {sectionOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {
                setOrder((prev) => shuffle(prev));
                setIndex(0);
                setFlipped(false);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Shuffle
            </button>
            <button
              type="button"
              onClick={() => {
                setOrder(buildDeck(subject.sections, sectionId));
                setIndex(0);
                setFlipped(false);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>

          <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${progress}%`, backgroundColor: subject.accent }}
            />
          </div>
          <p className="mb-4 text-center text-xs font-semibold text-muted-foreground">
            Card {order.length ? index + 1 : 0} of {order.length}
            {card ? ` · ${card.sectionTitle}` : ""}
          </p>

          {card ? (
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              className="group relative w-full min-h-[280px] rounded-2xl border border-border bg-card p-8 text-left shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 sm:min-h-[320px]"
              aria-label={flipped ? "Show term" : "Show explanation"}
            >
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Layers className="h-3 w-3" />
                {flipped ? "Explanation" : "Term / Formula"}
              </div>
              <div className="flex min-h-[220px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[260px]">
                {flipped ? (
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {card.explanation}
                  </p>
                ) : (
                  <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {card.term}
                  </p>
                )}
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Tap to {flipped ? "see the term" : "reveal the explanation"}
              </p>
            </button>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
              No cards in this topic.
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={!order.length}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              disabled={!order.length}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 disabled:opacity-40"
              style={{ backgroundColor: subject.accent }}
            >
              Flip
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={!order.length}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
