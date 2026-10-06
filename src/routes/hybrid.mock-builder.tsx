import { createFileRoute } from "@tanstack/react-router";
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
  return <HybridPaperBuilder key={lean ?? "half"} initialLean={lean ?? "half"} />;
}
