import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type SeoFaqItem = { question: string; answer: ReactNode };

/**
 * SEO-safe FAQ accordion.
 *
 * Unlike the Radix Accordion, every answer is always rendered into the DOM
 * (server-rendered HTML included) and only visually collapsed with CSS
 * (grid-template-rows 0fr -> 1fr + overflow hidden). Crawlers therefore see
 * the full answer text on first paint, while users keep expand/collapse.
 */
export function SeoFaq({
  items,
  className,
  itemClassName,
  questionClassName,
  answerClassName,
  defaultOpenIndex = null,
}: {
  items: SeoFaqItem[];
  className?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={index} className={cn("border-b border-border/60", itemClassName)}>
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-foreground transition-colors hover:text-primary",
                  questionClassName,
                )}
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              // Never unmounted / never `hidden`: the answer stays in the DOM.
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className={cn("pb-5 text-sm leading-relaxed text-muted-foreground", answerClassName)}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function buildFaqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
