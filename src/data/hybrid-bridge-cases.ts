/** Bridge cases: one concept, EN (BBE) + DE (WiSo) stems. */

export type BridgeStatement = {
  text: string;
  answer: boolean;
  explanation: string;
};

export type BridgeSide = {
  stem: string;
  statements: BridgeStatement[];
};

export type BridgeCase = {
  id: string;
  conceptId: string;
  conceptTitle: string;
  bbe: BridgeSide;
  wiso: BridgeSide;
};

export const HYBRID_BRIDGE_CASES: BridgeCase[] = [
  {
    id: "bridge-opportunity-cost",
    conceptId: "opportunity-cost",
    conceptTitle: "Opportunity cost",
    bbe: {
      stem: "A student can work a weekend job for €120 or spend the weekend revising for the WU exam. Consider the following claims:",
      statements: [
        {
          text: "The opportunity cost of revising includes the €120 of forgone wages.",
          answer: true,
          explanation: "Opportunity cost is the value of the best alternative forgone — here, the wages.",
        },
        {
          text: "If the student already paid for a prep course, that sunk fee is the main opportunity cost of revising this weekend.",
          answer: false,
          explanation: "Sunk costs are already incurred; opportunity cost looks forward to forgone alternatives.",
        },
        {
          text: "Choosing the job means forgoing revision benefits, so that forgone progress is part of the job's opportunity cost.",
          answer: true,
          explanation: "Both choices have opportunity costs in terms of what is given up.",
        },
        {
          text: "Opportunity cost is zero if the student enjoys revising.",
          answer: false,
          explanation: "Enjoyment may affect net benefit, but the forgone alternative still exists.",
        },
      ],
    },
    wiso: {
      stem: "Eine Studentin kann am Wochenende €120 verdienen oder für die Aufnahmeprüfung lernen. Bewerte die Aussagen:",
      statements: [
        {
          text: "Die Opportunitätskosten des Lernens enthalten die entgangenen €120 Lohn.",
          answer: true,
          explanation: "Opportunitätskosten = Wert der besten entgangenen Alternative.",
        },
        {
          text: "Bereits bezahlte Kursgebühren sind die entscheidenden Opportunitätskosten dieses Wochenendes.",
          answer: false,
          explanation: "Sunk costs zählen nicht als vorausschauende Opportunitätskosten.",
        },
        {
          text: "Wer arbeitet, verzichtet auf Lernfortschritt — das gehört zu den Opportunitätskosten der Arbeit.",
          answer: true,
          explanation: "Auch der Job hat Opportunitätskosten in Form entgangenen Lernens.",
        },
        {
          text: "Wenn Lernen Spaß macht, sind die Opportunitätskosten null.",
          answer: false,
          explanation: "Nutzen ändert nicht, dass eine Alternative entgeht.",
        },
      ],
    },
  },
  {
    id: "bridge-elasticity",
    conceptId: "price-elasticity",
    conceptTitle: "Price elasticity of demand",
    bbe: {
      stem: "A café raises latte prices by 10% and quantity demanded falls by 20%. Evaluate:",
      statements: [
        {
          text: "Demand is price elastic in this range (|ε| > 1).",
          answer: true,
          explanation: "20%/10% = 2 > 1, so elastic.",
        },
        {
          text: "Total revenue from lattes must rise after the price increase.",
          answer: false,
          explanation: "With elastic demand, a price rise cuts total revenue.",
        },
        {
          text: "If demand were perfectly inelastic, quantity would not change after the price rise.",
          answer: true,
          explanation: "Perfectly inelastic demand means quantity is fixed when price changes.",
        },
        {
          text: "Elasticity only measures how supply responds to price.",
          answer: false,
          explanation: "Price elasticity of demand measures quantity demanded vs price.",
        },
      ],
    },
    wiso: {
      stem: "Ein Café erhöht den Latte-Preis um 10%, die nachgefragte Menge sinkt um 20%. Bewerte:",
      statements: [
        {
          text: "Die Nachfrage ist in diesem Bereich preiselastisch (|ε| > 1).",
          answer: true,
          explanation: "20%/10% = 2 > 1, also elastisch.",
        },
        {
          text: "Der Umsatz mit Lattes muss nach der Preiserhöhung steigen.",
          answer: false,
          explanation: "Bei elastischer Nachfrage senkt eine Preiserhöhung den Umsatz.",
        },
        {
          text: "Bei vollkommen unelastischer Nachfrage bliebe die Menge nach der Preiserhöhung gleich.",
          answer: true,
          explanation: "Vollkommen unelastisch: Menge reagiert nicht auf den Preis.",
        },
        {
          text: "Elastizität misst nur, wie das Angebot auf den Preis reagiert.",
          answer: false,
          explanation: "Preiselastizität der Nachfrage betrifft die Nachfragemenge.",
        },
      ],
    },
  },
  {
    id: "bridge-supply-demand",
    conceptId: "market-equilibrium",
    conceptTitle: "Market equilibrium",
    bbe: {
      stem: "In a competitive market for exam prep books, demand rises while supply is unchanged. Evaluate:",
      statements: [
        {
          text: "Equilibrium price tends to rise.",
          answer: true,
          explanation: "Higher demand shifts the demand curve right; price rises if supply is fixed.",
        },
        {
          text: "Equilibrium quantity tends to fall.",
          answer: false,
          explanation: "With higher demand and unchanged supply, quantity also rises.",
        },
        {
          text: "A binding price ceiling below the new equilibrium can create a shortage.",
          answer: true,
          explanation: "Ceiling below equilibrium → quantity demanded > quantity supplied.",
        },
        {
          text: "In equilibrium, quantity demanded always exceeds quantity supplied.",
          answer: false,
          explanation: "Equilibrium means quantity demanded equals quantity supplied.",
        },
      ],
    },
    wiso: {
      stem: "Auf dem Markt für Prüfungsbücher steigt die Nachfrage, das Angebot bleibt unverändert. Bewerte:",
      statements: [
        {
          text: "Der Gleichgewichtspreis tendiert dazu zu steigen.",
          answer: true,
          explanation: "Höhere Nachfrage bei unverändertem Angebot treibt den Preis.",
        },
        {
          text: "Die Gleichgewichtsmenge tendiert dazu zu sinken.",
          answer: false,
          explanation: "Menge steigt ebenfalls, wenn die Nachfrage steigt.",
        },
        {
          text: "Ein bindender Höchstpreis unter dem neuen Gleichgewicht kann Knappheit erzeugen.",
          answer: true,
          explanation: "Höchstpreis unter Gleichgewicht → Nachfrage > Angebot.",
        },
        {
          text: "Im Gleichgewicht ist die Nachfragemenge stets größer als die Angebotsmenge.",
          answer: false,
          explanation: "Gleichgewicht: Nachfragemenge = Angebotsmenge.",
        },
      ],
    },
  },
  {
    id: "bridge-inflation",
    conceptId: "inflation",
    conceptTitle: "Inflation and real values",
    bbe: {
      stem: "Nominal wages rise 3% while the price level rises 5%. Evaluate:",
      statements: [
        {
          text: "Real wages fall.",
          answer: true,
          explanation: "Prices rise faster than nominal wages, so purchasing power falls.",
        },
        {
          text: "Inflation always means every household is worse off in the same way.",
          answer: false,
          explanation: "Effects differ across income sources, debts, and consumption baskets.",
        },
        {
          text: "If inflation is fully anticipated in contracts, real effects can be smaller.",
          answer: true,
          explanation: "Anticipated inflation can be built into wages and interest rates.",
        },
        {
          text: "A rise in the price level is the same thing as a one-time relative price change of a single good.",
          answer: false,
          explanation: "Inflation is a general rise in the price level, not one relative price move.",
        },
      ],
    },
    wiso: {
      stem: "Nominallöhne steigen um 3%, das Preisniveau um 5%. Bewerte:",
      statements: [
        {
          text: "Die Reallöhne sinken.",
          answer: true,
          explanation: "Preise steigen schneller als Nominallöhne → Kaufkraft sinkt.",
        },
        {
          text: "Inflation trifft jeden Haushalt immer gleich stark.",
          answer: false,
          explanation: "Wirkungen hängen von Einkommen, Schulden und Warenkorb ab.",
        },
        {
          text: "Wenn Inflation in Verträgen antizipiert wird, können reale Effekte kleiner sein.",
          answer: true,
          explanation: "Antizipierte Inflation kann in Löhnen und Zinsen eingepreist sein.",
        },
        {
          text: "Ein Anstieg des Preisniveaus ist dasselbe wie die relative Preisänderung eines einzelnen Gutes.",
          answer: false,
          explanation: "Inflation = allgemeiner Anstieg des Preisniveaus.",
        },
      ],
    },
  },
  {
    id: "bridge-comparative-advantage",
    conceptId: "comparative-advantage",
    conceptTitle: "Comparative advantage",
    bbe: {
      stem: "Country A needs fewer hours than Country B to produce both cars and cloth, but A's advantage is relatively larger in cars. Evaluate:",
      statements: [
        {
          text: "A has absolute advantage in both goods.",
          answer: true,
          explanation: "Fewer hours for both goods means absolute advantage in both.",
        },
        {
          text: "B can still have a comparative advantage in cloth.",
          answer: true,
          explanation: "Comparative advantage depends on relative opportunity costs, not absolute productivity.",
        },
        {
          text: "Trade can only benefit A, never B.",
          answer: false,
          explanation: "Both can gain from specializing according to comparative advantage.",
        },
        {
          text: "Comparative advantage is identical to absolute advantage.",
          answer: false,
          explanation: "They are different concepts; comparative uses opportunity costs.",
        },
      ],
    },
    wiso: {
      stem: "Land A braucht für Autos und Stoff weniger Stunden als Land B, der Vorsprung ist bei Autos relativ größer. Bewerte:",
      statements: [
        {
          text: "A hat einen absoluten Vorteil bei beiden Gütern.",
          answer: true,
          explanation: "Weniger Stunden bei beiden Gütern = absoluter Vorteil.",
        },
        {
          text: "B kann trotzdem einen komparativen Vorteil bei Stoff haben.",
          answer: true,
          explanation: "Komparativer Vorteil hängt von relativen Opportunitätskosten ab.",
        },
        {
          text: "Handel kann nur A nützen, nie B.",
          answer: false,
          explanation: "Beide können durch Spezialisierung gewinnen.",
        },
        {
          text: "Komparativer Vorteil ist dasselbe wie absoluter Vorteil.",
          answer: false,
          explanation: "Unterschiedliche Konzepte.",
        },
      ],
    },
  },
  {
    id: "bridge-gdp",
    conceptId: "gdp",
    conceptTitle: "GDP basics",
    bbe: {
      stem: "Consider how GDP accounts for activity in an economy. Evaluate:",
      statements: [
        {
          text: "GDP aims to measure the market value of final goods and services produced in a period.",
          answer: true,
          explanation: "That is the standard GDP definition focus.",
        },
        {
          text: "Resale of a used textbook written years ago counts as current GDP production.",
          answer: false,
          explanation: "Used-good resale is not current production (except dealer margins where counted).",
        },
        {
          text: "Nominal GDP can rise even if real output is unchanged, if prices rise.",
          answer: true,
          explanation: "Nominal GDP is in current prices.",
        },
        {
          text: "GDP automatically includes all unpaid household work at market prices.",
          answer: false,
          explanation: "Much unpaid household production is outside standard GDP.",
        },
      ],
    },
    wiso: {
      stem: "Wie das BIP wirtschaftliche Aktivität erfasst. Bewerte:",
      statements: [
        {
          text: "Das BIP misst den Marktwert der in einer Periode produzierten Endgüter und -dienstleistungen.",
          answer: true,
          explanation: "Standarddefinition des BIP.",
        },
        {
          text: "Der Weiterverkauf eines gebrauchten Lehrbuchs aus früheren Jahren zählt als heutige BIP-Produktion.",
          answer: false,
          explanation: "Gebrauchtwarenverkauf ist keine aktuelle Produktion.",
        },
        {
          text: "Das nominale BIP kann steigen, auch wenn die reale Produktion gleich bleibt, wenn Preise steigen.",
          answer: true,
          explanation: "Nominal = in laufenden Preisen.",
        },
        {
          text: "Unbezahlte Haushaltsarbeit geht automatisch vollständig zu Marktpreisen ins BIP ein.",
          answer: false,
          explanation: "Viel unbezahlte Arbeit liegt außerhalb des BIP.",
        },
      ],
    },
  },
  {
    id: "bridge-externalities",
    conceptId: "externalities",
    conceptTitle: "Externalities",
    bbe: {
      stem: "A factory emits pollution that harms nearby residents without paying them. Evaluate:",
      statements: [
        {
          text: "This is a negative externality.",
          answer: true,
          explanation: "Third parties bear a cost not reflected in the factory's private costs.",
        },
        {
          text: "The free-market quantity of the polluting good tends to be too high relative to the social optimum.",
          answer: true,
          explanation: "Private marginal cost < social marginal cost → overproduction.",
        },
        {
          text: "A Pigouvian tax equal to the marginal external cost can move the market toward the social optimum.",
          answer: true,
          explanation: "That is the classic Pigouvian correction.",
        },
        {
          text: "Externalities only exist when government already regulates the market.",
          answer: false,
          explanation: "Externalities are about unpriced third-party effects, not the presence of regulation.",
        },
      ],
    },
    wiso: {
      stem: "Eine Fabrik verursacht Emissionen, die Anwohner belasten, ohne sie zu entschädigen. Bewerte:",
      statements: [
        {
          text: "Das ist eine negative Externalität.",
          answer: true,
          explanation: "Dritte tragen Kosten, die nicht in den privaten Kosten der Firma liegen.",
        },
        {
          text: "Die Marktmenge des schädlichen Gutes tendiert dazu, über dem sozialen Optimum zu liegen.",
          answer: true,
          explanation: "Private Grenzkosten < soziale Grenzkosten → zu viel Produktion.",
        },
        {
          text: "Eine Pigou-Steuer in Höhe der marginalen externen Kosten kann zum sozialen Optimum hinwirken.",
          answer: true,
          explanation: "Klassische Pigou-Korrektur.",
        },
        {
          text: "Externalitäten gibt es nur, wenn der Staat den Markt bereits reguliert.",
          answer: false,
          explanation: "Externalitäten sind unpreisliche Drittwirkungen, unabhängig von bestehender Regulierung.",
        },
      ],
    },
  },
  {
    id: "bridge-interest",
    conceptId: "interest-real-nominal",
    conceptTitle: "Real vs nominal interest",
    bbe: {
      stem: "The nominal interest rate is 6% and expected inflation is 2%. Evaluate:",
      statements: [
        {
          text: "The approximate real interest rate is about 4%.",
          answer: true,
          explanation: "Fisher approximation: real ≈ nominal − inflation.",
        },
        {
          text: "Higher unexpected inflation helps borrowers who pay a fixed nominal rate.",
          answer: true,
          explanation: "Fixed nominal payments become cheaper in real terms.",
        },
        {
          text: "The real rate is always exactly equal to the nominal rate.",
          answer: false,
          explanation: "They differ when inflation is not zero.",
        },
        {
          text: "If inflation rises and nominal rates do not adjust, real rates fall.",
          answer: true,
          explanation: "Real ≈ nominal − inflation; inflation up ⇒ real down if nominal fixed.",
        },
      ],
    },
    wiso: {
      stem: "Der Nominalzins beträgt 6%, die erwartete Inflation 2%. Bewerte:",
      statements: [
        {
          text: "Der ungefähre Realzins liegt bei etwa 4%.",
          answer: true,
          explanation: "Näherung: Real ≈ Nominal − Inflation.",
        },
        {
          text: "Unerwartet höhere Inflation begünstigt Schuldner mit festem Nominalzins.",
          answer: true,
          explanation: "Feste Nominalzahlungen werden real billiger.",
        },
        {
          text: "Der Realzins ist immer genau gleich dem Nominalzins.",
          answer: false,
          explanation: "Sie unterscheiden sich bei Inflation ≠ 0.",
        },
        {
          text: "Steigt die Inflation und der Nominalzins bleibt, sinkt der Realzins.",
          answer: true,
          explanation: "Real ≈ Nominal − Inflation.",
        },
      ],
    },
  },
];

export function getBridgeCase(id: string): BridgeCase | undefined {
  return HYBRID_BRIDGE_CASES.find((c) => c.id === id);
}
