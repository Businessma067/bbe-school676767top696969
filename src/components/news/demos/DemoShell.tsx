import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DemoProps = {
  caption: string;
};

export function DemoShell({
  url,
  caption,
  children,
  className,
  stageClassName,
}: {
  url: string;
  caption: string;
  children: ReactNode;
  className?: string;
  stageClassName?: string;
}) {
  return (
    <figure
      className={cn("my-8 overflow-hidden rounded-lg border border-border bg-card", className)}
    >
      <div className="border-b border-border bg-secondary/50 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </span>
          <div className="min-w-0 flex-1 truncate rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">
            bbe-school.com{url}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "news-ui-demo news-uniq-demo relative overflow-hidden bg-background",
          stageClassName ?? "aspect-[16/11] px-3 py-3 sm:aspect-[16/10] sm:px-5 sm:py-4",
        )}
      >
        {children}
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
