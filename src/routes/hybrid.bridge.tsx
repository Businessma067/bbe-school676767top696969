import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BridgeWorkshop } from "@/components/hybrid/BridgeWorkshop";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { getBridgeCase } from "@/data/hybrid-bridge-library";

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
    <HybridShell
      title="Bridge Cases"
      lead="Twenty economics concepts in four units. English first, then German. The concept counts once when both sides clear 75%."
    >
      <BridgeWorkshop
        caseId={caseId}
        onOpenCase={(id) => {
          void navigate({ search: id ? { case: id } : {} });
        }}
      />
    </HybridShell>
  );
}
