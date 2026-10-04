/** Mirror Drill: alternating EN/DE micro-statements on one concept. */

export type MirrorItem = {
  id: string;
  lang: "en" | "de";
  text: string;
  answer: boolean;
  explanation: string;
};

export type MirrorSet = {
  id: string;
  conceptId: string;
  title: string;
  items: MirrorItem[];
};

export const HYBRID_MIRROR_SETS: MirrorSet[] = [
  {
    id: "mirror-scarcity",
    conceptId: "scarcity",
    title: "Scarcity & choice",
    items: [
      {
        id: "m1",
        lang: "en",
        text: "Scarcity means resources are limited relative to wants, so choices are necessary.",
        answer: true,
        explanation: "Core definition of scarcity in economics.",
      },
      {
        id: "m2",
        lang: "de",
        text: "Knappheit bedeutet, dass Ressourcen relativ zu den Bedürfnissen begrenzt sind.",
        answer: true,
        explanation: "Gleiche Idee auf Deutsch.",
      },
      {
        id: "m3",
        lang: "en",
        text: "If a good is scarce, its opportunity cost of use is always zero.",
        answer: false,
        explanation: "Scarce goods have positive opportunity cost when used.",
      },
      {
        id: "m4",
        lang: "de",
        text: "Bei Knappheit sind Trade-offs unvermeidlich.",
        answer: true,
        explanation: "Knappheit erzwingt Abwägungen.",
      },
      {
        id: "m5",
        lang: "en",
        text: "Only poor economies face scarcity; rich economies do not.",
        answer: false,
        explanation: "Scarcity is universal relative to unlimited wants.",
      },
      {
        id: "m6",
        lang: "de",
        text: "Auch in reichen Volkswirtschaften bleibt Knappheit ein Grundproblem.",
        answer: true,
        explanation: "Knappheit verschwindet nicht mit Wohlstand.",
      },
    ],
  },
  {
    id: "mirror-marginal",
    conceptId: "marginal-thinking",
    title: "Marginal thinking",
    items: [
      {
        id: "m1",
        lang: "en",
        text: "Rational decisions compare marginal benefit and marginal cost of one more unit.",
        answer: true,
        explanation: "Marginal analysis is the standard decision rule.",
      },
      {
        id: "m2",
        lang: "de",
        text: "Entscheidungen sollten Grenzvorteil und Grenzkosten der nächsten Einheit vergleichen.",
        answer: true,
        explanation: "Gleiche Regel auf Deutsch.",
      },
      {
        id: "m3",
        lang: "en",
        text: "Sunk costs should dominate the marginal decision about continuing a project.",
        answer: false,
        explanation: "Sunk costs are irrelevant to forward-looking marginal choices.",
      },
      {
        id: "m4",
        lang: "de",
        text: "Versunkene Kosten sollen die Entscheidung über die nächste Einheit bestimmen.",
        answer: false,
        explanation: "Versunkene Kosten sind entscheidungsirrelevant.",
      },
      {
        id: "m5",
        lang: "en",
        text: "If MB > MC for one more hour of study, studying that hour raises net benefit.",
        answer: true,
        explanation: "Do more when marginal benefit exceeds marginal cost.",
      },
      {
        id: "m6",
        lang: "de",
        text: "Wenn der Grenzvorteil einer weiteren Lernstunde über den Grenzkosten liegt, lohnt sie sich.",
        answer: true,
        explanation: "Gleiche Logik.",
      },
    ],
  },
  {
    id: "mirror-demand",
    conceptId: "law-of-demand",
    title: "Law of demand",
    items: [
      {
        id: "m1",
        lang: "en",
        text: "Other things equal, a higher price of a good reduces quantity demanded.",
        answer: true,
        explanation: "Law of demand.",
      },
      {
        id: "m2",
        lang: "de",
        text: "Ceteris paribus sinkt die nachgefragte Menge, wenn der Preis steigt.",
        answer: true,
        explanation: "Gesetz der Nachfrage.",
      },
      {
        id: "m3",
        lang: "en",
        text: "A change in consumer income shifts quantity demanded along a fixed demand curve only.",
        answer: false,
        explanation: "Income changes typically shift the demand curve.",
      },
      {
        id: "m4",
        lang: "de",
        text: "Eine Einkommensänderung verschiebt in der Regel die Nachfragekurve.",
        answer: true,
        explanation: "Nicht nur Bewegung auf der Kurve.",
      },
      {
        id: "m5",
        lang: "en",
        text: "A movement along the demand curve is caused by a change in the good's own price.",
        answer: true,
        explanation: "Own-price → movement along the curve.",
      },
      {
        id: "m6",
        lang: "de",
        text: "Eine Bewegung entlang der Nachfragekurve entsteht durch den eigenen Preis des Gutes.",
        answer: true,
        explanation: "Gleiche Aussage.",
      },
    ],
  },
  {
    id: "mirror-money",
    conceptId: "functions-of-money",
    title: "Functions of money",
    items: [
      {
        id: "m1",
        lang: "en",
        text: "Money serves as a medium of exchange, unit of account, and store of value.",
        answer: true,
        explanation: "Standard three functions.",
      },
      {
        id: "m2",
        lang: "de",
        text: "Geld dient als Tauschmittel, Recheneinheit und Wertaufbewahrungsmittel.",
        answer: true,
        explanation: "Drei Funktionen des Geldes.",
      },
      {
        id: "m3",
        lang: "en",
        text: "High and volatile inflation strengthens money's store-of-value function.",
        answer: false,
        explanation: "Inflation weakens money as a store of value.",
      },
      {
        id: "m4",
        lang: "de",
        text: "Hohe Inflation schwächt die Wertaufbewahrungsfunktion des Geldes.",
        answer: true,
        explanation: "Kaufkraft wird unzuverlässig.",
      },
      {
        id: "m5",
        lang: "en",
        text: "Using prices in euro is an example of the unit-of-account function.",
        answer: true,
        explanation: "Unit of account = measuring / quoting value.",
      },
      {
        id: "m6",
        lang: "de",
        text: "Preise in Euro anzugeben ist ein Beispiel für die Recheneinheit.",
        answer: true,
        explanation: "Gleiche Funktion.",
      },
    ],
  },
];
