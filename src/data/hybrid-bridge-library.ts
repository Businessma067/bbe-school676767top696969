/**
 * Bridge library: units, bilingual term cards, and the ordered case list.
 * Cases live in the seed bank plus the extra bank. A concept is one item.
 */

import { HYBRID_BRIDGE_CASES, type BridgeCase } from "@/data/hybrid-bridge-cases";
import { HYBRID_BRIDGE_EXTRA } from "@/data/hybrid-bridge-extra";

export type BridgeTerm = { en: string; de: string };

export type BridgeUnit = {
  id: string;
  title: string;
  blurb: string;
  caseIds: readonly string[];
};

export const BRIDGE_PASS_RATIO = 0.75;

export const BRIDGE_UNITS: readonly BridgeUnit[] = [
  {
    id: "choice",
    title: "Choice",
    blurb: "Scarcity, incentives, opportunity cost, sunk cost, and the next hour.",
    caseIds: ["bridge-opportunity-cost", "bridge-scarcity", "bridge-sunk-cost", "bridge-marginal"],
  },
  {
    id: "markets",
    title: "Markets",
    blurb: "Demand, supply, equilibrium, elasticity, related goods, and price controls.",
    caseIds: [
      "bridge-demand",
      "bridge-supply",
      "bridge-supply-demand",
      "bridge-elasticity",
      "bridge-substitutes",
      "bridge-price-controls",
    ],
  },
  {
    id: "production",
    title: "Production and trade",
    blurb: "Costs, diminishing returns, the production frontier, and comparative advantage.",
    caseIds: ["bridge-costs", "bridge-diminishing", "bridge-ppc", "bridge-comparative-advantage"],
  },
  {
    id: "macro",
    title: "Macro and surplus",
    blurb: "GDP, inflation, real interest, unemployment, externalities, and surplus.",
    caseIds: [
      "bridge-gdp",
      "bridge-inflation",
      "bridge-interest",
      "bridge-unemployment",
      "bridge-externalities",
      "bridge-surplus",
    ],
  },
];

export const BRIDGE_TERMS: Record<string, readonly BridgeTerm[]> = {
  "bridge-opportunity-cost": [
    { en: "opportunity cost", de: "Opportunitätskosten" },
    { en: "best alternative", de: "beste Alternative" },
    { en: "sunk cost", de: "versunkene Kosten" },
  ],
  "bridge-scarcity": [
    { en: "scarcity", de: "Knappheit" },
    { en: "incentive", de: "Anreiz" },
    { en: "rationing", de: "Zuteilung" },
  ],
  "bridge-sunk-cost": [
    { en: "sunk cost", de: "versunkene Kosten" },
    { en: "non-refundable", de: "nicht erstattungsfähig" },
    { en: "forward-looking", de: "vorausschauend" },
  ],
  "bridge-marginal": [
    { en: "marginal benefit", de: "Grenznutzen" },
    { en: "marginal cost", de: "Grenzkosten" },
    { en: "at the margin", de: "am Rand" },
  ],
  "bridge-demand": [
    { en: "normal good", de: "normales Gut" },
    { en: "inferior good", de: "inferiores Gut" },
    { en: "shift of demand", de: "Verschiebung der Nachfrage" },
  ],
  "bridge-supply": [
    { en: "shift of supply", de: "Verschiebung des Angebots" },
    { en: "movement along demand", de: "Bewegung entlang der Nachfrage" },
    { en: "production cost", de: "Produktionskosten" },
  ],
  "bridge-supply-demand": [
    { en: "equilibrium", de: "Gleichgewicht" },
    { en: "shortage", de: "Mangel / Knappheit" },
    { en: "price ceiling", de: "Höchstpreis" },
  ],
  "bridge-elasticity": [
    { en: "price elastic", de: "preiselastisch" },
    { en: "total revenue", de: "Umsatz" },
    { en: "perfectly inelastic", de: "vollkommen unelastisch" },
  ],
  "bridge-substitutes": [
    { en: "substitutes", de: "Substitute" },
    { en: "complements", de: "Komplemente" },
    { en: "related goods", de: "verbundene Güter" },
  ],
  "bridge-price-controls": [
    { en: "binding ceiling", de: "bindender Höchstpreis" },
    { en: "price floor", de: "Mindestpreis" },
    { en: "surplus", de: "Überschuss" },
  ],
  "bridge-costs": [
    { en: "fixed cost", de: "Fixkosten" },
    { en: "variable cost", de: "variable Kosten" },
    { en: "average fixed cost", de: "durchschnittliche Fixkosten" },
  ],
  "bridge-diminishing": [
    { en: "marginal product", de: "Grenzprodukt" },
    { en: "diminishing returns", de: "abnehmende Erträge" },
    { en: "fixed inputs", de: "feste Inputs" },
  ],
  "bridge-ppc": [
    { en: "production possibility curve", de: "Transformationskurve" },
    { en: "inefficient", de: "ineffizient" },
    { en: "feasible", de: "erreichbar" },
  ],
  "bridge-comparative-advantage": [
    { en: "absolute advantage", de: "absoluter Vorteil" },
    { en: "comparative advantage", de: "komparativer Vorteil" },
    { en: "specialisation", de: "Spezialisierung" },
  ],
  "bridge-gdp": [
    { en: "final goods", de: "Endgüter" },
    { en: "nominal GDP", de: "nominales BIP" },
    { en: "real output", de: "reale Produktion" },
  ],
  "bridge-inflation": [
    { en: "price level", de: "Preisniveau" },
    { en: "real wage", de: "Reallohn" },
    { en: "anticipated inflation", de: "antizipierte Inflation" },
  ],
  "bridge-interest": [
    { en: "nominal interest", de: "Nominalzins" },
    { en: "real interest", de: "Realzins" },
    { en: "unexpected inflation", de: "unerwartete Inflation" },
  ],
  "bridge-unemployment": [
    { en: "frictional", de: "friktionell" },
    { en: "structural", de: "strukturell" },
    { en: "labour force", de: "Erwerbsbevölkerung" },
  ],
  "bridge-externalities": [
    { en: "negative externality", de: "negative Externalität" },
    { en: "social cost", de: "soziale Kosten" },
    { en: "Pigouvian tax", de: "Pigou-Steuer" },
  ],
  "bridge-surplus": [
    { en: "consumer surplus", de: "Konsumentenrente" },
    { en: "producer surplus", de: "Produzentenrente" },
    { en: "willingness to pay", de: "Zahlungsbereitschaft" },
  ],
};

const ALL_CASES: BridgeCase[] = [...HYBRID_BRIDGE_CASES, ...HYBRID_BRIDGE_EXTRA];

const BY_ID = new Map(ALL_CASES.map((item) => [item.id, item]));

export function getBridgeCase(id: string): BridgeCase | undefined {
  return BY_ID.get(id);
}

export function bridgeCasesInOrder(): BridgeCase[] {
  return BRIDGE_UNITS.flatMap((unit) =>
    unit.caseIds.map((id) => {
      const item = BY_ID.get(id);
      if (!item) throw new Error(`Missing bridge case ${id}`);
      return item;
    }),
  );
}

export function bridgeUnitFor(caseId: string): BridgeUnit | undefined {
  return BRIDGE_UNITS.find((unit) => unit.caseIds.includes(caseId));
}

export function nextBridgeCaseId(caseId: string): string | null {
  const ordered = bridgeCasesInOrder();
  const index = ordered.findIndex((item) => item.id === caseId);
  if (index < 0 || index >= ordered.length - 1) return null;
  return ordered[index + 1]?.id ?? null;
}

export const BRIDGE_CASE_COUNT = bridgeCasesInOrder().length;
