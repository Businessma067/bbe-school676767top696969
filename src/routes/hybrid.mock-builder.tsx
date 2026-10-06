import { createFileRoute } from "@tanstack/react-router";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { HybridPaperBuilder } from "@/components/hybrid/HybridPaperBuilder";
import type { HybridLeanId } from "@/config/hybrid-mock-builder";

type PaperSearch = { lean?: HybridLeanId };

function parseLean(value: unknown): HybridLeanId | undefined {
  return value === "bbe" || value === "half" || value === "wiso" ? value : undefined;
}

export const Route = createFileRoute("/hybrid/mock-builder")({
  validateSearch: (search: Record<string, unknown>): PaperSearch => {
    const lean = parseLean(search.lean);
    return lean ? { lean } : {};
  },
  head: () => ({
    meta: [
      { title: "Hybrid paper — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridMockBuilderPage,
});

function HybridMockBuilderPage() {
  const { lean } = Route.useSearch();
  return (
    <HybridShell
      title="Hybrid paper"
      lead="One builder for shared mathematics and German reading. Set the lean to BBE, half, or WiSo. Mathematics stays one bank; only the stem language and the size of the German block move."
    >
      <HybridPaperBuilder key={lean ?? "half"} initialLean={lean ?? "half"} />
    </HybridShell>
  );
}
