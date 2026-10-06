import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { BridgeWorkshop } from "@/components/hybrid/BridgeWorkshop";
import { SiteHeader } from "@/components/SiteHeader";
import { getBridgeCase } from "@/data/hybrid-bridge-library";
import { PRACTICE_BODY_STACK, PRACTICE_PAGE } from "@/lib/practice-layout";

type BridgeSearch = { case?: string };

export const Route = createFileRoute("/hybrid/bridge")({
  validateSearch: (search: Record<string, unknown>): BridgeSearch => {
    const id = typeof search.case === "string" ? search.case : "";
    return getBridgeCase(id) ? { case: id } : {};
  },
  head: () => ({
    meta: [
      { title: "Bridge Cases — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridBridgePage,
});

function HybridBridgePage() {
  const { case: caseId } = Route.useSearch();
  const navigate = useNavigate({ from: "/hybrid/bridge" });

  return (
    <div className={PRACTICE_PAGE}>
      <SiteHeader
        maxWidthClassName="max-w-none"
        compact
        actions={
          <Link
            to="/hybrid/course"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Hybrid Course
          </Link>
        }
      />
      <div className={PRACTICE_BODY_STACK}>
        <main className="min-w-0 flex-1">
          <div className="mb-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
              Economics
            </span>
            <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Bridge cases
            </h1>
          </div>
          <BridgeWorkshop
            caseId={caseId}
            onOpenCase={(id) => {
              void navigate({ search: id ? { case: id } : {} });
            }}
          />
        </main>
      </div>
    </div>
  );
}
