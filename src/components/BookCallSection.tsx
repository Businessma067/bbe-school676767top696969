import { useEffect } from "react";
import { CalendlyInlineEmbed, warmCalendlyConnections } from "@/components/CalendlyInlineEmbed";
import { cn } from "@/lib/utils";

const DEFAULT_DESCRIPTION =
  "Pick a time that works for you. We can walk through BBE, WiSo, or Hybrid and help you choose a prep plan.";

/** Shared "Book a 30-minute call" block with the inline Calendly scheduler. */
export function BookCallSection({
  id = "book",
  title = "Book a 30-minute call",
  description = DEFAULT_DESCRIPTION,
  headingLevel = "h2",
  className,
}: {
  id?: string;
  title?: string;
  description?: string;
  headingLevel?: "h1" | "h2";
  className?: string;
}) {
  useEffect(() => {
    warmCalendlyConnections();
  }, []);

  const Heading = headingLevel;
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 bg-background px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20", className)}
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Heading className="font-display text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            {title}
          </Heading>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <CalendlyInlineEmbed />
        </div>
      </div>
    </section>
  );
}
