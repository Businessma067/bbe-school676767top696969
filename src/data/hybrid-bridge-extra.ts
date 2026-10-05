/** Extra Bridge cases. Same concept, English (BBE) then German (WiSo). */

import type { BridgeCase, BridgeSide } from "@/data/hybrid-bridge-cases";

function side(stem: string, rows: readonly (readonly [string, boolean, string])[]): BridgeSide {
  return {
    stem,
    statements: rows.map(([text, answer, explanation]) => ({ text, answer, explanation })),
  };
}

export const HYBRID_BRIDGE_EXTRA: BridgeCase[] = [
  {
    id: "bridge-scarcity",
    conceptId: "scarcity",
    conceptTitle: "Scarcity and incentives",
    bbe: side(
      "A WU prep seat is limited, and the price of that seat rises when more students want it. Evaluate:",
      [
        [
          "Scarcity means the seat has to be rationed by some rule, such as price, grades, or a queue.",
          true,
          "Scarcity is not 'running out'. It means wants exceed what is available, so a rationing rule appears.",
        ],
        [
          "A higher price is an incentive that can reduce quantity demanded for the seat.",
          true,
          "Prices steer behaviour: a higher price makes some students choose another option.",
        ],
        [
          "If every student wants the seat, scarcity disappears as soon as the university prints more brochures.",
          false,
          "Advertising does not create seats. Scarcity is about the real limit, not the brochure.",
        ],
        [
          "Incentives only matter when the government sets them.",
          false,
          "Prices, wages, time, and grades are incentives whether or not the state designed them.",
        ],
      ],
    ),
    wiso: side(
      "Ein Vorbereitungsplatz an der WU ist knapp, und der Preis steigt, wenn mehr Studierende ihn wollen. Bewerte:",
      [
        [
          "Knappheit bedeutet, dass der Platz nach einer Regel verteilt werden muss, etwa Preis, Note oder Warteschlange.",
          true,
          "Knappheit heißt nicht 'alles ist leer'. Wünsche übersteigen das Angebot, also braucht es eine Zuteilungsregel.",
        ],
        [
          "Ein höherer Preis ist ein Anreiz, der die nachgefragte Menge senken kann.",
          true,
          "Preise lenken Verhalten: ein höherer Preis lässt manche auf eine andere Option ausweichen.",
        ],
        [
          "Wenn alle den Platz wollen, verschwindet Knappheit, sobald die Universität mehr Broschüren druckt.",
          false,
          "Werbung schafft keine Plätze. Knappheit betrifft die reale Grenze.",
        ],
        [
          "Anreize zählen nur, wenn der Staat sie setzt.",
          false,
          "Preise, Löhne, Zeit und Noten sind Anreize, auch ohne staatliche Planung.",
        ],
      ],
    ),
  },
  {
    id: "bridge-sunk-cost",
    conceptId: "sunk-cost",
    conceptTitle: "Sunk cost versus the next hour",
    bbe: side(
      "A student has already paid a non-refundable €180 for a weekend course. A better mock is now offered the same weekend for €40. Evaluate:",
      [
        [
          "The €180 should be ignored when deciding whether to attend the better mock.",
          true,
          "The fee is sunk. The decision looks at the next costs and benefits, not money already gone.",
        ],
        [
          "The relevant cost of the mock is the €40 plus whatever is given up by skipping the weekend course.",
          true,
          "Forward-looking cost includes the new fee and the opportunity cost of the alternative.",
        ],
        [
          "Attending the weaker course is rational purely because €180 was already paid.",
          false,
          "That is the sunk-cost fallacy. Past spending does not improve the next choice.",
        ],
        [
          "A sunk cost can still be recovered by spending more time on the weaker option.",
          false,
          "More time does not refund a non-refundable fee. It only uses more of the next scarce hours.",
        ],
      ],
    ),
    wiso: side(
      "Eine Studentin hat bereits €180 nicht erstattungsfähig für einen Wochenendkurs gezahlt. Am selben Wochenende gibt es eine bessere Probeprüfung für €40. Bewerte:",
      [
        [
          "Die €180 sollten bei der Entscheidung für die bessere Probeprüfung keine Rolle mehr spielen.",
          true,
          "Die Gebühr ist versunken. Es zählen die nächsten Kosten und Nutzen.",
        ],
        [
          "Relevante Kosten der Probeprüfung sind die €40 plus das, was durch den Verzicht auf den Kurs entgeht.",
          true,
          "Vorausschauend zählen die neue Gebühr und die Opportunitätskosten der Alternative.",
        ],
        [
          "Der schwächere Kurs ist allein deshalb rational, weil €180 schon bezahlt sind.",
          false,
          "Das ist der Sunk-Cost-Fehlschluss. Vergangene Ausgaben verbessern die nächste Wahl nicht.",
        ],
        [
          "Versunkene Kosten lassen sich zurückholen, indem man mehr Zeit in die schwächere Option steckt.",
          false,
          "Mehr Zeit erstattet eine nicht erstattbare Gebühr nicht.",
        ],
      ],
    ),
  },
  {
    id: "bridge-marginal",
    conceptId: "marginal-analysis",
    conceptTitle: "Marginal benefit and marginal cost",
    bbe: side(
      "One more hour of calculus revision is expected to raise a student's score by 2 points. That hour costs a shift worth €25. Evaluate:",
      [
        [
          "The student should compare the marginal benefit of the hour with its marginal cost.",
          true,
          "Decisions at the margin compare the next unit, not the average of all hours already studied.",
        ],
        [
          "If the 2 points are worth more to the student than €25 of forgone pay, the extra hour can be worth taking.",
          true,
          "Take the next unit when marginal benefit exceeds marginal cost.",
        ],
        [
          "The average benefit of the first ten hours decides the eleventh hour by itself.",
          false,
          "A high average can hide a low marginal benefit on the next hour.",
        ],
        [
          "Marginal cost includes only costs that have already been paid.",
          false,
          "Marginal cost is the extra cost of the next unit. Sunk payments are not part of it.",
        ],
      ],
    ),
    wiso: side(
      "Eine weitere Stunde Analysis bringt voraussichtlich 2 Punkte. Diese Stunde kostet eine Schicht im Wert von €25. Bewerte:",
      [
        [
          "Die Studentin sollte den Grenznutzen der Stunde mit den Grenzkosten vergleichen.",
          true,
          "Entscheidungen am Rand betreffen die nächste Einheit, nicht den Durchschnitt aller bisherigen Stunden.",
        ],
        [
          "Wenn die 2 Punkte ihr mehr wert sind als €25 entgangener Lohn, kann die zusätzliche Stunde sinnvoll sein.",
          true,
          "Die nächste Einheit lohnt sich, wenn der Grenznutzen die Grenzkosten übersteigt.",
        ],
        [
          "Der Durchschnittsnutzen der ersten zehn Stunden entscheidet allein über die elfte Stunde.",
          false,
          "Ein hoher Durchschnitt kann einen niedrigen Grenznutzen der nächsten Stunde verdecken.",
        ],
        [
          "Grenzkosten umfassen nur Kosten, die bereits bezahlt sind.",
          false,
          "Grenzkosten sind die zusätzlichen Kosten der nächsten Einheit. Versunkene Zahlungen zählen nicht.",
        ],
      ],
    ),
  },
  {
    id: "bridge-demand",
    conceptId: "demand-shift",
    conceptTitle: "A shift of demand",
    bbe: side(
      "Student incomes rise, and entrance-exam workbooks are a normal good. The supply curve of workbooks does not move. Evaluate:",
      [
        [
          "The demand curve shifts to the right.",
          true,
          "Higher income raises demand for a normal good at each price.",
        ],
        [
          "Equilibrium price and equilibrium quantity both tend to rise.",
          true,
          "Rightward demand, unchanged supply: the intersection moves up and right.",
        ],
        [
          "A movement along the demand curve is the same thing as this income change.",
          false,
          "A movement along demand is caused by the good's own price. Income shifts the curve.",
        ],
        [
          "If workbooks were an inferior good, higher income would shift demand to the right as well.",
          false,
          "For an inferior good, higher income shifts demand left.",
        ],
      ],
    ),
    wiso: side(
      "Die Einkommen der Studierenden steigen, und Prüfungsbücher sind ein normales Gut. Die Angebotskurve verschiebt sich nicht. Bewerte:",
      [
        [
          "Die Nachfragekurve verschiebt sich nach rechts.",
          true,
          "Höheres Einkommen erhöht bei einem normalen Gut die Nachfrage zu jedem Preis.",
        ],
        [
          "Gleichgewichtspreis und Gleichgewichtsmenge tendieren beide nach oben.",
          true,
          "Mehr Nachfrage bei unverändertem Angebot: der Schnittpunkt wandert nach oben rechts.",
        ],
        [
          "Eine Bewegung entlang der Nachfragekurve ist dasselbe wie diese Einkommensänderung.",
          false,
          "Entlang der Kurve bewegt der eigene Preis. Einkommen verschiebt die Kurve.",
        ],
        [
          "Wären die Bücher ein inferiores Gut, würde höheres Einkommen die Nachfrage ebenfalls nach rechts verschieben.",
          false,
          "Bei einem inferioren Gut verschiebt höheres Einkommen die Nachfrage nach links.",
        ],
      ],
    ),
  },
  {
    id: "bridge-supply",
    conceptId: "supply-shift",
    conceptTitle: "A shift of supply",
    bbe: side(
      "Printing costs for exam workbooks rise. Student demand for the books is unchanged. Evaluate:",
      [
        [
          "The supply curve shifts to the left.",
          true,
          "Higher production cost means firms supply less at each price.",
        ],
        [
          "Equilibrium price tends to rise and equilibrium quantity tends to fall.",
          true,
          "Leftward supply, fixed demand: higher price, lower quantity.",
        ],
        [
          "The demand curve must shift left because the books are now more expensive to print.",
          false,
          "A cost shock moves supply. Demand moves when preferences, income, or related prices change.",
        ],
        [
          "A higher equilibrium price here is a movement along the demand curve.",
          true,
          "Demand stayed put. Buyers react to the new price by moving along the existing demand curve.",
        ],
      ],
    ),
    wiso: side(
      "Die Druckkosten für Prüfungsbücher steigen. Die Nachfrage der Studierenden bleibt unverändert. Bewerte:",
      [
        [
          "Die Angebotskurve verschiebt sich nach links.",
          true,
          "Höhere Produktionskosten: zum gleichen Preis wird weniger angeboten.",
        ],
        [
          "Der Gleichgewichtspreis tendiert nach oben, die Gleichgewichtsmenge nach unten.",
          true,
          "Weniger Angebot bei fester Nachfrage: höherer Preis, geringere Menge.",
        ],
        [
          "Die Nachfragekurve muss nach links rücken, weil das Drucken teurer wurde.",
          false,
          "Ein Kostenschock verschiebt das Angebot. Die Nachfrage reagiert auf Präferenzen, Einkommen oder verwandte Preise.",
        ],
        [
          "Der höhere Gleichgewichtspreis ist hier eine Bewegung entlang der Nachfragekurve.",
          true,
          "Die Nachfrage bleibt liegen. Käufer reagieren auf den neuen Preis entlang der bestehenden Kurve.",
        ],
      ],
    ),
  },
  {
    id: "bridge-substitutes",
    conceptId: "substitutes",
    conceptTitle: "Substitutes and complements",
    bbe: side(
      "Tea and coffee are substitutes for a student. Printer paper and a printer are complements. The price of coffee rises, and the price of printers falls. Evaluate:",
      [
        [
          "Demand for tea tends to rise when coffee becomes more expensive.",
          true,
          "A higher price of a substitute shifts demand for tea to the right.",
        ],
        [
          "A cheaper printer tends to raise demand for printer paper.",
          true,
          "A lower price of a complement raises demand for the related good.",
        ],
        [
          "Substitutes are goods that are used together, like a printer and paper.",
          false,
          "Goods used together are complements. Substitutes replace each other.",
        ],
        [
          "If two goods are substitutes, a rise in the price of one lowers demand for the other.",
          false,
          "The opposite is true: the other good becomes more attractive.",
        ],
      ],
    ),
    wiso: side(
      "Tee und Kaffee sind Substitute. Druckerpapier und ein Drucker sind Komplemente. Der Kaffeepreis steigt, der Druckerpreis sinkt. Bewerte:",
      [
        [
          "Die Nachfrage nach Tee tendiert dazu zu steigen, wenn Kaffee teurer wird.",
          true,
          "Ein höherer Preis des Substituts verschiebt die Teennachfrage nach rechts.",
        ],
        [
          "Ein günstigerer Drucker erhöht tendenziell die Nachfrage nach Druckerpapier.",
          true,
          "Ein niedrigerer Preis des Komplements erhöht die Nachfrage nach dem verbundenen Gut.",
        ],
        [
          "Substitute sind Güter, die gemeinsam genutzt werden, wie Drucker und Papier.",
          false,
          "Gemeinsam genutzte Güter sind Komplemente. Substitute ersetzen einander.",
        ],
        [
          "Bei Substituten senkt ein steigender Preis des einen Gutes die Nachfrage nach dem anderen.",
          false,
          "Umgekehrt: das andere Gut wird attraktiver.",
        ],
      ],
    ),
  },
  {
    id: "bridge-price-controls",
    conceptId: "price-controls",
    conceptTitle: "Price ceiling and price floor",
    bbe: side(
      "The market rent for a room is €700. A ceiling is set at €550, and a separate market for tutoring has an equilibrium wage of €20 with a floor of €30. Evaluate:",
      [
        [
          "The €550 ceiling is binding and tends to create a shortage of rooms.",
          true,
          "A ceiling below equilibrium means quantity demanded exceeds quantity supplied.",
        ],
        [
          "The €30 wage floor is binding and tends to create a surplus of tutoring hours offered.",
          true,
          "A floor above equilibrium means quantity supplied exceeds quantity demanded.",
        ],
        [
          "A ceiling set above the equilibrium price changes the market outcome.",
          false,
          "A ceiling above equilibrium does not bind. The market price can still sit at equilibrium.",
        ],
        [
          "A shortage means suppliers want to sell more than buyers want to buy at that price.",
          false,
          "That describes a surplus. A shortage is the reverse.",
        ],
      ],
    ),
    wiso: side(
      "Die Marktmiete für ein Zimmer beträgt €700. Ein Höchstpreis liegt bei €550. Auf einem Nachhilfemarkt liegt der Gleichgewichtslohn bei €20, ein Mindestpreis bei €30. Bewerte:",
      [
        [
          "Der Höchstpreis von €550 bindet und erzeugt tendenziell einen Wohnungsmangel.",
          true,
          "Ein Höchstpreis unter dem Gleichgewicht: Nachfragemenge > Angebotsmenge.",
        ],
        [
          "Der Mindestlohn von €30 bindet und erzeugt tendenziell ein Überschussangebot an Nachhilfestunden.",
          true,
          "Ein Mindestpreis über dem Gleichgewicht: Angebotsmenge > Nachfragemenge.",
        ],
        [
          "Ein Höchstpreis über dem Gleichgewichtspreis verändert das Marktergebnis.",
          false,
          "Er bindet nicht. Der Marktpreis kann im Gleichgewicht bleiben.",
        ],
        [
          "Ein Mangel bedeutet, dass Anbieter zu diesem Preis mehr verkaufen wollen, als Nachfrager kaufen wollen.",
          false,
          "Das ist ein Überschuss. Ein Mangel ist das Gegenteil.",
        ],
      ],
    ),
  },
  {
    id: "bridge-costs",
    conceptId: "costs",
    conceptTitle: "Fixed, variable, and marginal cost",
    bbe: side(
      "A tutor pays €400 rent per month whether she teaches or not. Each extra hour costs €15 in materials and transport. Evaluate:",
      [
        [
          "The rent is a fixed cost for the month.",
          true,
          "Fixed cost does not change with the number of hours taught.",
        ],
        [
          "The €15 is the marginal cost of one more hour, in this simple case.",
          true,
          "Marginal cost is the extra cost of the next hour. Here that extra cost is €15.",
        ],
        [
          "Average fixed cost rises as she teaches more hours.",
          false,
          "The same rent is spread over more hours, so average fixed cost falls.",
        ],
        [
          "Variable cost for 10 hours is €400.",
          false,
          "Variable cost is 10 × €15 = €150. The €400 is fixed.",
        ],
      ],
    ),
    wiso: side(
      "Eine Nachhilfelehrerin zahlt €400 Miete im Monat, egal ob sie unterrichtet. Jede weitere Stunde kostet €15 für Material und Fahrt. Bewerte:",
      [
        [
          "Die Miete ist für den Monat Fixkosten.",
          true,
          "Fixkosten ändern sich nicht mit der Stundenzahl.",
        ],
        [
          "Die €15 sind in diesem einfachen Fall die Grenzkosten einer weiteren Stunde.",
          true,
          "Grenzkosten sind die zusätzlichen Kosten der nächsten Stunde.",
        ],
        [
          "Die durchschnittlichen Fixkosten steigen, wenn sie mehr Stunden gibt.",
          false,
          "Dieselbe Miete verteilt sich auf mehr Stunden, also sinken die durchschnittlichen Fixkosten.",
        ],
        [
          "Die variablen Kosten für 10 Stunden betragen €400.",
          false,
          "Variable Kosten: 10 × €15 = €150. Die €400 sind fix.",
        ],
      ],
    ),
  },
  {
    id: "bridge-diminishing",
    conceptId: "diminishing-returns",
    conceptTitle: "Diminishing returns",
    bbe: side(
      "A student revises one topic for a fixed evening. The first hour adds 8 points of practice score, the second adds 5, the third adds 2. Evaluate:",
      [
        [
          "Marginal product of study time is falling.",
          true,
          "Each extra hour adds less than the hour before. That is diminishing marginal returns.",
        ],
        [
          "Total score can still rise while marginal gains shrink.",
          true,
          "Falling marginal product can stay positive, so the total still increases.",
        ],
        [
          "Diminishing returns means the third hour reduces the total score.",
          false,
          "Not automatically. The total falls only if the marginal product becomes negative.",
        ],
        [
          "The pattern requires that every input, including sleep and materials, is increasing together.",
          false,
          "Diminishing returns is about adding one input while others stay fixed.",
        ],
      ],
    ),
    wiso: side(
      "Ein Student lernt an einem Abend ein Thema. Die erste Stunde bringt 8 Übungspunkte, die zweite 5, die dritte 2. Bewerte:",
      [
        [
          "Das Grenzprodukt der Lernzeit sinkt.",
          true,
          "Jede weitere Stunde bringt weniger als die vorige. Das sind abnehmende Grenzerträge.",
        ],
        [
          "Der Gesamtpunktstand kann steigen, während die zusätzlichen Gewinne schrumpfen.",
          true,
          "Das Grenzprodukt kann fallen und trotzdem positiv bleiben.",
        ],
        [
          "Abnehmende Erträge bedeuten, dass die dritte Stunde den Gesamtpunktstand senkt.",
          false,
          "Nur wenn das Grenzprodukt negativ wird, sinkt die Summe.",
        ],
        [
          "Das Muster setzt voraus, dass jeder Input, auch Schlaf und Material, gleichzeitig steigt.",
          false,
          "Abnehmende Erträge betreffen einen zusätzlichen Input bei sonst festen Inputs.",
        ],
      ],
    ),
  },
  {
    id: "bridge-ppc",
    conceptId: "ppc",
    conceptTitle: "Production possibility curve",
    bbe: side(
      "An economy can produce exams-prep books and meals. It is currently inside its production possibility curve. Evaluate:",
      [
        [
          "Inside the curve, some labour or machines are idle or used inefficiently.",
          true,
          "Points inside the PPC are feasible but inefficient.",
        ],
        [
          "A point outside the current curve is not feasible with today's resources and technology.",
          true,
          "The curve is the frontier. Beyond it is not attainable yet.",
        ],
        [
          "Moving along the curve raises output of both goods at the same time.",
          false,
          "Along the curve, more of one good costs some of the other. That is the opportunity cost.",
        ],
        [
          "A better technology can shift the whole curve outward.",
          true,
          "Growth or better technology expands the feasible set.",
        ],
      ],
    ),
    wiso: side(
      "Eine Volkswirtschaft kann Prüfungsbücher und Mahlzeiten erzeugen. Sie produziert derzeit innerhalb ihrer Transformationskurve. Bewerte:",
      [
        [
          "Innerhalb der Kurve sind Arbeit oder Maschinen ungenutzt oder ineffizient eingesetzt.",
          true,
          "Punkte innerhalb der Kurve sind möglich, aber ineffizient.",
        ],
        [
          "Ein Punkt außerhalb der heutigen Kurve ist mit heutigen Ressourcen und heutiger Technik nicht erreichbar.",
          true,
          "Jenseits der Grenze ist derzeit nicht möglich.",
        ],
        [
          "Eine Bewegung entlang der Kurve erhöht die Menge beider Güter gleichzeitig.",
          false,
          "Entlang der Kurve kostet mehr vom einen Gut etwas vom anderen.",
        ],
        [
          "Bessere Technik kann die gesamte Kurve nach außen verschieben.",
          true,
          "Wachstum oder bessere Technik erweitert die Möglichkeiten.",
        ],
      ],
    ),
  },
  {
    id: "bridge-unemployment",
    conceptId: "unemployment",
    conceptTitle: "Types of unemployment",
    bbe: side(
      "Three people are not working: Ana is between jobs and interviewing, Ben's factory job disappeared after automation and his skills do not match openings, and Cara is a full-time student who is not looking for work. Evaluate:",
      [
        [
          "Ana is an example of frictional unemployment.",
          true,
          "Frictional unemployment is the short search between jobs.",
        ],
        [
          "Ben is an example of structural unemployment.",
          true,
          "Structural unemployment is a mismatch of skills or location, not a brief search.",
        ],
        [
          "Cara is counted as unemployed because she has no job.",
          false,
          "Unemployment requires being out of work and actively looking. A full-time student not searching is outside the labour force.",
        ],
        [
          "Frictional and structural unemployment can exist even when the economy is not in a recession.",
          true,
          "Cyclical unemployment is the recession piece. The other two exist in normal times.",
        ],
      ],
    ),
    wiso: side(
      "Drei Personen arbeiten nicht: Ana sucht zwischen zwei Jobs, Bens Fabrikarbeit fiel durch Automatisierung weg und seine Kenntnisse passen nicht, Cara studiert Vollzeit und sucht nicht. Bewerte:",
      [
        [
          "Ana ist ein Beispiel für friktionelle Arbeitslosigkeit.",
          true,
          "Friktionell ist die kurze Suchphase zwischen Jobs.",
        ],
        [
          "Ben ist ein Beispiel für strukturelle Arbeitslosigkeit.",
          true,
          "Strukturell ist ein Mismatch von Qualifikation oder Ort, nicht eine kurze Suche.",
        ],
        [
          "Cara zählt als arbeitslos, weil sie keinen Job hat.",
          false,
          "Arbeitslos heißt ohne Arbeit und aktiv suchend. Wer nicht sucht, steht außerhalb der Erwerbsbevölkerung.",
        ],
        [
          "Friktionelle und strukturelle Arbeitslosigkeit kann es auch ohne Rezession geben.",
          true,
          "Konjunkturell ist der Rezessionsteil. Die anderen beiden gibt es auch in normalen Zeiten.",
        ],
      ],
    ),
  },
  {
    id: "bridge-surplus",
    conceptId: "surplus",
    conceptTitle: "Consumer and producer surplus",
    bbe: side(
      "A student would pay up to €40 for a workbook. The market price is €25. The publisher would have supplied that copy for €18. Evaluate:",
      [
        [
          "Consumer surplus on this copy is €15.",
          true,
          "Willingness to pay minus price: 40 − 25 = 15.",
        ],
        [
          "Producer surplus on this copy is €7.",
          true,
          "Price minus the minimum the seller would accept: 25 − 18 = 7.",
        ],
        [
          "A higher market price raises this student's consumer surplus.",
          false,
          "A higher price shrinks the gap between willingness to pay and the price paid.",
        ],
        [
          "Total surplus on the copy is the sum of consumer and producer surplus, €22.",
          true,
          "15 + 7 = 22, which is also willingness to pay minus seller cost.",
        ],
      ],
    ),
    wiso: side(
      "Ein Student würde bis zu €40 für ein Buch zahlen. Der Marktpreis ist €25. Der Verlag hätte das Exemplar für €18 angeboten. Bewerte:",
      [
        [
          "Die Konsumentenrente bei diesem Exemplar beträgt €15.",
          true,
          "Zahlungsbereitschaft minus Preis: 40 − 25 = 15.",
        ],
        [
          "Die Produzentenrente bei diesem Exemplar beträgt €7.",
          true,
          "Preis minus Mindestpreis des Anbieters: 25 − 18 = 7.",
        ],
        [
          "Ein höherer Marktpreis erhöht die Konsumentenrente dieses Studenten.",
          false,
          "Ein höherer Preis verkleinert die Lücke zwischen Zahlungsbereitschaft und gezahltem Preis.",
        ],
        [
          "Die Gesamtrente dieses Exemplars ist die Summe beider Renten, €22.",
          true,
          "15 + 7 = 22, zugleich Zahlungsbereitschaft minus Kosten des Anbieters.",
        ],
      ],
    ),
  },
];
