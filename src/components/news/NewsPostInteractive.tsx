import { useState } from "react";
import { cn } from "@/lib/utils";

const INK = "#161616";
const MUTED = "#5a584f";
const RULE = "#d8d6ce";
const EMBER = "#c45f1a";

export type NewsCriterion = {
  id: string;
  title: string;
  weight: string;
  detail: string;
};

type CriteriaExplorerProps = {
  caption: string;
  intro: string;
  criteria: NewsCriterion[];
};

/** Click a criterion to see why it can block a task from shipping. */
export function NewsCriteriaExplorer({ caption, intro, criteria }: CriteriaExplorerProps) {
  const [openId, setOpenId] = useState<string | null>(criteria[0]?.id ?? null);

  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)] px-4 py-5 sm:px-6 sm:py-6">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: MUTED }}
        >
          Open a check
        </p>
        <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
          What we weigh before something ships
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: MUTED }}>
          {intro}
        </p>

        <ul className="mt-5 space-y-2">
          {criteria.map((item) => {
            const open = openId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className={cn(
                    "w-full rounded-md border px-3.5 py-3 text-left transition-colors",
                    open ? "border-foreground/25 bg-background" : "border-border/80 bg-background/50 hover:bg-background",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-sm font-semibold" style={{ color: INK }}>
                      {item.title}
                    </span>
                    <span
                      className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: open ? EMBER : MUTED }}
                    >
                      {item.weight}
                    </span>
                  </div>
                  {open ? (
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                      {item.detail}
                    </p>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}

export type NewsLane = {
  id: string;
  label: string;
  tone: string;
  blurb: string;
  example: string;
};

type FeedLanesProps = {
  caption: string;
  lanes: NewsLane[];
};

/** Click a feed lane to see what kind of post lands there. */
export function NewsFeedLanesExplorer({ caption, lanes }: FeedLanesProps) {
  const [openId, setOpenId] = useState<string | null>(lanes[0]?.id ?? null);

  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)] px-4 py-5 sm:px-6 sm:py-6">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: MUTED }}
        >
          Tap a lane
        </p>
        <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
          How we decide what belongs here
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {lanes.map((lane) => {
            const open = openId === lane.id;
            return (
              <button
                key={lane.id}
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(lane.id)}
                className={cn(
                  "rounded-md border px-3.5 py-3.5 text-left transition-colors",
                  open ? "border-foreground/30 bg-background" : "border-border/80 bg-background/45 hover:bg-background",
                )}
                style={{ borderColor: open ? undefined : RULE }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: lane.tone }}
                    aria-hidden="true"
                  />
                  <span className="font-display text-sm font-semibold" style={{ color: INK }}>
                    {lane.label}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {lane.blurb}
                </p>
              </button>
            );
          })}
        </div>
        {openId ? (
          <div
            className="mt-4 rounded-md border px-3.5 py-3"
            style={{ borderColor: RULE, background: "rgba(255,255,255,0.55)" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: MUTED }}
            >
              Example post shape
            </p>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: INK }}>
              {lanes.find((l) => l.id === openId)?.example}
            </p>
          </div>
        ) : null}
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
