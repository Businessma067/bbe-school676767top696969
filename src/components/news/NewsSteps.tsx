import { useState } from "react";
import { cn } from "@/lib/utils";

const INK = "#161616";
const MUTED = "#5a584f";
const EMBER = "#c45f1a";

export type NewsStep = {
  id: string;
  title: string;
  detail: string;
};

type Props = {
  title: string;
  caption: string;
  steps: NewsStep[];
};

/** Step-through tool: click each stage to open the note. */
export function NewsSteps({ title, caption, steps }: Props) {
  const [openId, setOpenId] = useState<string | null>(steps[0]?.id ?? null);

  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)] px-4 py-5 sm:px-6 sm:py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: MUTED }}>
          Walk through
        </p>
        <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
          {title}
        </p>
        <ol className="mt-5 space-y-2">
          {steps.map((step, index) => {
            const open = openId === step.id;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : step.id)}
                  className={cn(
                    "flex w-full gap-3 rounded-md border px-3.5 py-3 text-left transition-colors",
                    open
                      ? "border-foreground/25 bg-background"
                      : "border-border/80 bg-background/50 hover:bg-background",
                  )}
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      background: open ? EMBER : `${INK}14`,
                      color: open ? "#fff" : INK,
                    }}
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold" style={{ color: INK }}>
                      {step.title}
                    </span>
                    {open ? (
                      <span className="mt-1.5 block text-sm leading-relaxed" style={{ color: MUTED }}>
                        {step.detail}
                      </span>
                    ) : null}
                  </span>
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
