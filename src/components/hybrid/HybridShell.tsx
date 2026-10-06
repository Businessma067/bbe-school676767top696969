import type { ReactNode } from "react";
import { LocalizedLink } from "@/components/LocalizedLink";
import { SiteHeader } from "@/components/SiteHeader";
import { HYBRID_ACCENT, HYBRID_NAV } from "@/lib/hybrid-course";
import { cn } from "@/lib/utils";
import { useRouterState } from "@tanstack/react-router";

export function HybridShell({
  children,
  title,
  lead,
}: {
  children: ReactNode;
  title?: string;
  lead?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <LocalizedLink
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </LocalizedLink>
        }
      />

      <div className="border-b border-border/70 bg-card/40">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3 lg:px-8">
          {HYBRID_NAV.map((item) => {
            const active = pathname.includes(item.to);
            return (
              <LocalizedLink
                key={item.to}
                to={item.to}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all",
                  active
                    ? "text-white shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
                style={
                  active
                    ? { backgroundColor: HYBRID_ACCENT, borderColor: HYBRID_ACCENT }
                    : undefined
                }
              >
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </LocalizedLink>
            );
          })}
        </nav>
      </div>

      <main className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {(title || lead) && (
            <header className="mb-10 text-center">
              {title ? (
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                  {title}
                </h1>
              ) : null}
              {lead ? (
                <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{lead}</p>
              ) : null}
            </header>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
