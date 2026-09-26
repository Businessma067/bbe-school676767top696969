import { useState } from "react";
import { cn } from "@/lib/utils";

const INK = "#161616";
const MUTED = "#5a584f";
const RULE = "#d8d6ce";
const EMBER = "#c45f1a";

export type NewsTimelineEntry = {
  id: string;
  dateLabel: string;
  title: string;
  note: string;
};

type Props = {
  caption: string;
  entries: NewsTimelineEntry[];
};

/** Click a ship date to read the short note behind it. */
export function NewsShippingTimeline({ caption, entries }: Props) {
  const [openId, setOpenId] = useState<string | null>(entries[0]?.id ?? null);

  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)] px-4 py-5 sm:px-6 sm:py-6">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: MUTED }}
        >
          Shipping diary
        </p>
        <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
          Dates we actually put things in front of students
        </p>
        <ol className="mt-5 space-y-0">
          {entries.map((entry, index) => {
            const active = openId === entry.id;
            return (
              <li key={entry.id} className="relative flex gap-3 pb-3 last:pb-0">
                <div className="flex w-4 shrink-0 flex-col items-center">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 rounded-full"
                    style={{ background: active ? EMBER : INK, opacity: active ? 1 : 0.35 }}
                    aria-hidden="true"
                  />
                  {index < entries.length - 1 ? (
                    <span className="mt-1 w-px flex-1" style={{ background: RULE }} aria-hidden="true" />
                  ) : null}
                </div>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpenId(entry.id)}
                  className={cn(
                    "mb-1 min-w-0 flex-1 rounded-md border px-3 py-2.5 text-left transition-colors",
                    active
                      ? "border-foreground/25 bg-background"
                      : "border-transparent bg-transparent hover:border-border hover:bg-background/60",
                  )}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: active ? EMBER : MUTED }}
                  >
                    {entry.dateLabel}
                  </p>
                  <p className="mt-0.5 font-display text-sm font-semibold" style={{ color: INK }}>
                    {entry.title}
                  </p>
                  {active ? (
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: MUTED }}>
                      {entry.note}
                    </p>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
