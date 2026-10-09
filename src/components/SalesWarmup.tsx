import { ReviewQuote } from "@/components/ReviewQuote";
import { pinnedNote } from "@/data/acceptance-notes";

/** Short acceptance notes and one honest line, placed under a sales-page buy button. */
export function SalesWarmup({ noteIds }: { noteIds: readonly string[] }) {
  const notes = noteIds.map((id) => pinnedNote(id));

  return (
    <div className="mt-5 border-t border-border pt-5">
      <p className="text-sm leading-relaxed text-muted-foreground">
        The free tasks are enough to try the format. The mocks and the mock builder are in the
        course.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {notes.map((note) => (
          <li key={note.id} className="min-w-0 rounded-xl border border-border bg-background p-3">
            <ReviewQuote
              original={note.quote}
              english={note.english}
              ukrainian={note.ukrainian}
              sourceLang={note.sourceLang}
              className="line-clamp-3 text-[13px] leading-relaxed text-muted-foreground"
            />
            <p className="mt-2 font-display text-xs font-semibold text-foreground" data-no-i18n>
              {note.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
