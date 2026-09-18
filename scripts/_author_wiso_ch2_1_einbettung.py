#!/usr/bin/env python3
"""Author WiSo Wirtschaft verstehen §2.1 (Einbettung) practice cases."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch2.json"

CTX = (
    "Analysieren Sie die Einbettung der Wirtschaft in Gesellschaft und Umwelt "
    "laut der Lernunterlage „Wirtschaft verstehen“. Bewerten Sie die folgenden Aussagen:"
)


def T(text: str) -> str:
    return text.rstrip() + "\n\nDie Aussage ist daher wahr."


def F(text: str) -> str:
    return text.rstrip() + "\n\nDie Aussage ist daher falsch."


def case(
    n: int,
    title: str,
    statements: list[str],
    answers: list[bool],
    expl: list[str],
    diff: str,
    context: str = CTX,
) -> dict:
    assert len(statements) == 5 == len(answers) == len(expl)
    return {
        "subsection": "2.1",
        "case_id": f"CASE W2.1.{n:02d}",
        "title": title,
        "context": context,
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": expl,
        "difficulty_level": diff,
        "tier": "full",
    }


cases: list[dict] = []

# --- 01 easy ---
cases.append(
    case(
        1,
        "Wirtschaft als eingebettetes System",
        [
            "Wirtschaft ist ein isoliertes, autarkes System, das unabhängig von Gesellschaft und Natur funktioniert.",
            "Das Wohlergehen der Menschen, der Erfolg der Wirtschaft und die Stabilität des Erdsystems sind eng miteinander verknüpft.",
            "Wirtschaftliches Handeln findet immer innerhalb sozialer Strukturen und ökologischer Grenzen statt.",
            "Natürliche Ressourcen wie Wasser, Boden, Energie und Biodiversität sind Voraussetzungen menschlicher Existenz und damit auch wirtschaftlicher Aktivität.",
            "Weil Unternehmen Güter produzieren, brauchen sie keinerlei gesellschaftliche Rahmenbedingungen.",
        ],
        [False, True, True, True, False],
        [
            F(
                "Die Lernunterlage betont ausdrücklich das Gegenteil: Wirtschaft ist kein isoliertes, autarkes System, "
                "sondern in Gesellschaft und Natur eingebettet. Autarkie würde bedeuten, dass Produktion und Märkte "
                "ohne soziale Regeln und ohne ökologische Grundlagen auskämen – genau das verneint Kapitel 2.\n\n"
                "Wer „isoliert“ und „autark“ als Beschreibung akzeptiert, verfehlt den Kern der Einbettungsthese."
            ),
            T(
                "Zu Beginn von Kapitel 2 werden Wohlergehen, wirtschaftlicher Erfolg und Erdsystemstabilität als eng "
                "verknüpft dargestellt. Die drei Größen stehen nicht als getrennte Welten nebeneinander, sondern "
                "bedingen einander."
            ),
            T(
                "Wirtschaftliches Handeln setzt soziale Strukturen (Institutionen, Normen, Regeln) und ökologische "
                "Grenzen voraus. Die Lernunterlage formuliert das als Grundsatz: Handeln findet immer innerhalb dieser "
                "beiden Rahmen statt, nicht außerhalb davon."
            ),
            T(
                "Wasser, Boden, Energie und Biodiversität werden ausdrücklich als Voraussetzungen menschlicher Existenz "
                "genannt; zugleich hängen alle wirtschaftlichen Aktivitäten von natürlichen Ressourcen und "
                "Umweltdienstleistungen ab. Ohne diese Grundlagen gibt es weder Produktion noch gesellschaftliche Reproduktion."
            ),
            F(
                "Unternehmen produzieren Güter und Dienstleistungen, agieren aber innerhalb institutioneller "
                "Rahmenbedingungen, die Gesellschaft und Staat bereitstellen. Bildung, Eigentumsrechte, Arbeitsstandards "
                "und Vertrauen sind zentrale Ressourcen der Wirtschaft – nicht optionale Dekoration.\n\n"
                "Die Behauptung, gesellschaftliche Rahmenbedingungen seien überflüssig, widerspricht dem Text."
            ),
        ],
        "1/5",
    )
)

# --- 02 easy ---
cases.append(
    case(
        2,
        "Unternehmen als gesellschaftliche Akteure",
        [
            "Unternehmen sind ausschließlich Produzenten und haben darüber hinaus keine gesellschaftliche Funktion.",
            "Unternehmen können Beschäftigung schaffen und Arbeitsbedingungen gestalten.",
            "Zu den gesellschaftlichen Rollen von Unternehmen zählen unter anderem soziale Verantwortung und das Vorantreiben von Innovationen.",
            "Weil Unternehmen marktwirtschaftlich handeln, entfällt jede soziale Verantwortung automatisch.",
            "Unternehmen sind gesellschaftliche Akteure, nicht nur technische Produktionseinheiten.",
        ],
        [False, True, True, False, True],
        [
            F(
                "Die Lernunterlage stellt klar, dass Unternehmen nicht nur Produzenten sind, sondern gesellschaftliche "
                "Akteure. Die Verengung auf reine Produktion streicht genau die Rollen, die der Text betont: Beschäftigung, "
                "Arbeitsbedingungen, soziale Verantwortung und Innovation."
            ),
            T(
                "Beschäftigung schaffen und Arbeitsbedingungen gestalten werden ausdrücklich als Gestaltungsfelder von "
                "Unternehmen genannt. Das sind soziale Wirkungen des Wirtschaftens, nicht bloß technische Nebeneffekte."
            ),
            T(
                "Soziale Verantwortung übernehmen und Innovationen vorantreiben gehören laut Text zu den "
                "gesellschaftlichen Rollen von Unternehmen. Beides geht über die bloße Herstellung von Gütern hinaus."
            ),
            F(
                "Marktwirtschaftliches Handeln und soziale Verantwortung schließen sich in der Lernunterlage nicht aus. "
                "Gerade weil Unternehmen gesellschaftliche Akteure sind, bleibt Verantwortung ein Thema – sie „entfällt“ "
                "nicht automatisch durch Marktlogik."
            ),
            T(
                "Der Text formuliert ausdrücklich: Unternehmen sind gesellschaftliche Akteure. Das kontrastiert mit dem "
                "Bild einer bloß technischen Produktionseinheit ohne soziale Einbettung."
            ),
        ],
        "1/5",
    )
)

# --- 03 easy ---
cases.append(
    case(
        3,
        "Gesellschaft prägt die Wirtschaft",
        [
            "Die Gesellschaft stellt institutionelle Rahmenbedingungen bereit, etwa Gesetze, Eigentumsrechte sowie Arbeits- und Sozialstandards.",
            "Institutionelle Rahmenbedingungen erhöhen typischerweise die wirtschaftliche Unsicherheit und zerstören Stabilität.",
            "Bildung, Ausbildung und Forschung tragen zur Qualifikation der Arbeitskräfte bei.",
            "Soziale Kohäsion und Vertrauen sind für die Funktionsfähigkeit von Märkten und Organisationen irrelevant.",
            "Gesellschaft und Staat bilden nicht nur den Kontext, sondern eine zentrale Ressource der Wirtschaft.",
        ],
        [True, False, True, False, True],
        [
            T(
                "Gesetze, Eigentumsrechte, Arbeits- und Sozialstandards werden als Beispiele institutioneller "
                "Rahmenbedingungen genannt, die die Gesellschaft bereitstellt. Das ist der direkte Beitrag der "
                "Gesellschaft zur Organisation wirtschaftlichen Handelns."
            ),
            F(
                "Der Text sagt das Gegenteil: Diese Rahmenbedingungen verringern wirtschaftliche Unsicherheit und "
                "schaffen Stabilität. Die Aussage dreht Ursache und Wirkung um."
            ),
            T(
                "Über Bildung, Ausbildung und Forschung sorgt die Gesellschaft für die Qualifikation der Arbeitskräfte. "
                "Qualifikation ist damit keine rein betriebliche Privatangelegenheit, sondern gesellschaftlich mitproduziert."
            ),
            F(
                "Soziale Kohäsion und Vertrauen tragen laut Lernunterlage gerade zur Funktionsfähigkeit von Märkten und "
                "Organisationen bei. „Irrelevant“ ist die klare Gegenbehauptung zum Text."
            ),
            T(
                "Der Text betont: Gesellschaft und Staat sind nicht nur Kontext, sondern zentrale Ressource – sie "
                "sichern Kooperation, Planbarkeit und Innovationsfähigkeit. Wer sie nur als äußeren Rahmen denkt, "
                "unterschätzt ihre produktive Rolle."
            ),
        ],
        "2/5",
    )
)

# --- 04 easy-mid ---
cases.append(
    case(
        4,
        "Naturleistungen für Güter, Dienstleistungen und System",
        [
            "Leistungen der Natur sind nur für die Produktion materieller Güter relevant, nicht für Dienstleistungen.",
            "Auch Dienstleistungen wie Tourismus und Versicherungen stehen im Zusammenhang mit einem von der Natur getragenen Wirtschaftssystem.",
            "Natürliche Leistungen bilden laut Lernunterlage auch die Grundlage unseres Wirtschaftssystems.",
            "Nahrungsmittel und Laptops werden als Beispiele für Güter genannt, deren Produktion ohne Naturleistungen auskommt.",
            "Abbildung 13 verdeutlicht vereinfacht die Einbettung wirtschaftlicher Aktivitäten in Gesellschaft und Umwelt.",
        ],
        [False, True, True, False, True],
        [
            F(
                "Der Text nennt ausdrücklich Güter und Dienstleistungen: Naturleistungen sind für beides unverzichtbar. "
                "Die Einschränkung auf materielle Güter allein ist falsch."
            ),
            T(
                "Tourismus und Versicherungen werden als Dienstleistungsbeispiele angeführt; zugleich bilden "
                "Naturleistungen die Grundlage des Wirtschaftssystems insgesamt. Dienstleistungen stehen damit nicht "
                "außerhalb der natürlichen Einbettung."
            ),
            T(
                "Die Lernunterlage formuliert: Naturleistungen sind nicht nur für die Produktion unverzichtbar, sondern "
                "bilden auch die Grundlage des Wirtschaftssystems. Das geht über einzelne Inputs hinaus und betrifft die Systemebene."
            ),
            F(
                "Nahrungsmittel und Laptops sind Beispiele für Güter, deren Produktion auf Naturleistungen angewiesen "
                "ist – nicht Beispiele für Unabhängigkeit von der Natur. Die Aussage verdreht die Beispielfunktion."
            ),
            T(
                "Abbildung 13 wird als bewusst vereinfachte Darstellung der zentralen Zusammenhänge eingeführt: "
                "Wirtschaft eingebettet in gesellschaftliches Umfeld und biophysische Sphäre."
            ),
        ],
        "2/5",
    )
)

# --- 05 mid ---
cases.append(
    case(
        5,
        "Akteure wirtschaftlicher Aktivitäten",
        [
            "Wirtschaftliche Aktivitäten werden ausschließlich von privatwirtschaftlich geführten Unternehmen durchgeführt.",
            "Zum öffentlichen Sektor zählen in der Darstellung von Abbildung 13 Staat und NGOs.",
            "Haushalte und Gemeinschaften führen ebenfalls wirtschaftliche Aktivitäten durch.",
            "NGOs gehören in dieser Darstellung nicht zum öffentlichen Sektor und liegen außerhalb jeder wirtschaftlichen Aktivität.",
            "Privatunternehmen, öffentlicher Sektor sowie Haushalte und Gemeinschaften sind die genannten Träger wirtschaftlicher Aktivitäten.",
        ],
        [False, True, True, False, True],
        [
            F(
                "Der Text nennt drei Trägergruppen: privatwirtschaftliche Unternehmen, öffentlichen Sektor sowie "
                "Haushalte und Gemeinschaften. „Ausschließlich Unternehmen“ streicht zwei der drei Gruppen."
            ),
            T(
                "Explizit heißt es: öffentlicher Sektor (Staat und NGOs). In dieser vereinfachten Abbildung werden NGOs "
                "dem öffentlichen Sektor zugeordnet – prüfungsrelevant, weil das vom Alltagssprachgebrauch abweichen kann."
            ),
            T(
                "Haushalte und Gemeinschaften werden ausdrücklich als Akteure wirtschaftlicher Aktivitäten genannt. "
                "Wirtschaften ist damit nicht auf Firmen und Staat beschränkt."
            ),
            F(
                "In Abbildung 13 stehen NGOs beim öffentlichen Sektor. Später erscheint die Zivilgesellschaft "
                "(einschließlich NGOs) zusätzlich als kritische Instanz – das sind komplementäre Rollen. Die Aussage "
                "behauptet fälschlich, NGOs gehörten hier nicht zum öffentlichen Sektor und lägen außerhalb jeder "
                "wirtschaftlichen Aktivität."
            ),
            T(
                "Die Dreiteilung Privatunternehmen / öffentlicher Sektor / Haushalte und Gemeinschaften gibt den Text korrekt wieder."
            ),
        ],
        "2/5",
    )
)

# --- 06 mid ---
cases.append(
    case(
        6,
        "Inputs und Outputs im Erdsystem",
        [
            "Die Wirtschaft bezieht Inputs wie natürliche Ressourcen und Umweltdienstleistungen aus dem Erdsystem.",
            "Die Bestäubung von Nahrungsmittelpflanzen ist ein Beispiel für eine Umweltdienstleistung.",
            "Outputs der Wirtschaft an das Erdsystem sind unter anderem Klimagase und Abfall.",
            "Die biophysische Sphäre nimmt nur Inputs der Wirtschaft auf; Outputs fließen ausschließlich innerhalb der Gesellschaft.",
            "Wirtschaftliche Aktivitäten geben Belastungen an die Umwelt zurück, während sie zugleich Ressourcen aus ihr entnehmen.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der Inputfluss aus dem Erdsystem – natürliche Ressourcen und Umweltdienstleistungen – ist ein Kernpunkt von Abbildung 13."
            ),
            T(
                "Bestäubung wird ausdrücklich als Beispiel für Umweltdienstleistungen genannt. Es geht um eine "
                "ökologische Leistung, nicht um ein vom Menschen hergestelltes Zwischenprodukt."
            ),
            T(
                "Klimagase und Abfall sind die genannten Output-Beispiele, die an das Erdsystem bzw. die biophysische Sphäre zurückgegeben werden."
            ),
            F(
                "Die Lernunterlage beschreibt beides: Inputs aus der biophysischen Sphäre und Outputs (Abfall, "
                "Emissionen, Umweltschädigung) zurück an sie. Die Behauptung, Outputs blieben nur in der Gesellschaft, "
                "widerspricht dem Modell."
            ),
            T(
                "Entnahme von Ressourcen bzw. Umweltdienstleistungen und Rückgabe von Abfällen bzw. Emissionen sind die "
                "beiden Richtungen des Austauschs. Genau dieses Doppelverhältnis macht die Einbettung in die Umwelt aus."
            ),
        ],
        "2/5",
    )
)

# --- 07 mid ---
cases.append(
    case(
        7,
        "Treibhausgase und Klimawandel",
        [
            "Zu den wichtigsten atmosphärischen Treibhausgasen zählen unter anderem Wasserdampf, CO₂, Methan (CH₄), Distickstoffmonoxid (N₂O) und Ozon (O₃).",
            "Treibhausgase bilden in der Atmosphäre eine Art Isolierschicht, die einen Teil der von der Erdoberfläche abgestrahlten Wärme zurückhält.",
            "Menschliche Aktivitäten wie die Verbrennung fossiler Brennstoffe, Abholzung und landwirtschaftliche Intensivierung können die Konzentrationen dieser Gase erhöhen.",
            "Steigende Treibhausgaskonzentrationen senken typischerweise die globale Durchschnittstemperatur und bremsen den Klimawandel.",
            "Distickstoffmonoxid wird in der Lernunterlage auch als Lachgas bezeichnet.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Die Aufzählung entspricht dem Kasten in Abschnitt 2.1. Wasserdampf gehört dazu – eine häufige Falle ist, "
                "nur CO₂ zu nennen und den Rest zu streichen."
            ),
            T(
                "Die Isolierschicht-Metapher und das Zurückhalten abgestrahlter Wärme sind die im Text genannte Wirkungsweise des Treibhauseffekts."
            ),
            T(
                "Verbrennung fossiler Brennstoffe, Abholzung und landwirtschaftliche Intensivierung werden als menschliche "
                "Treiber steigender Konzentrationen genannt."
            ),
            F(
                "Der Text verknüpft steigende Konzentrationen mit einem Anstieg der globalen Durchschnittstemperatur und "
                "einer Beschleunigung des Klimawandels. Die Aussage behauptet das Gegenteil."
            ),
            T(
                "N₂O wird ausdrücklich auch Lachgas genannt. Das ist eine reine Texttreue-Detailfrage."
            ),
        ],
        "3/5",
    )
)

# --- 08 mid ---
cases.append(
    case(
        8,
        "Naturabhängige Wirtschaftszweige",
        [
            "Alle wirtschaftlichen Aktivitäten haben Auswirkungen auf die Natur.",
            "Fischerei, Land- und Forstwirtschaft sowie Tourismus sind in besonders hohem Maße auf natürliche Ressourcen und intakte Ökosysteme angewiesen.",
            "Weil alle Branchen die Natur beeinflussen, sind sie alle gleich stark von intakten Ökosystemen abhängig.",
            "Die langfristige Existenz und Produktivität naturabhängiger Branchen hängen von der Erhaltung und nachhaltigen Nutzung natürlicher Grundlagen ab.",
            "Tourismus ist laut Lernunterlage ein Beispiel für einen Sektor, der von der Natur weitgehend unabhängig ist.",
        ],
        [True, True, False, True, False],
        [
            T(
                "Der Text stellt voran: Alle wirtschaftlichen Aktivitäten haben Auswirkungen auf die Natur. Das ist die "
                "allgemeine Wirkungsrichtung Wirtschaft → Umwelt."
            ),
            T(
                "Genau diese Branchen werden als in hohem Maße abhängig von natürlichen Ressourcen und intakten "
                "Ökosystemen genannt. Die Aussage gibt die Beispiele korrekt wieder."
            ),
            F(
                "Der Text unterscheidet: Alle Aktivitäten wirken auf die Natur, aber einige sind besonders stark von "
                "ihr abhängig. Aus der allgemeinen Wirkungsrichtung folgt keine Gleichheit der Abhängigkeit.\n\n"
                "Die Formulierung „gleich stark“ ist die typische Absolutismus-Falle."
            ),
            T(
                "Langfristige Existenz und Produktivität hängen laut Text unmittelbar von Erhaltung und nachhaltiger "
                "Nutzung der natürlichen Grundlagen ab. Kurzfristige Ausbeutung sichert keine Dauerhaftigkeit."
            ),
            F(
                "Tourismus wird ausdrücklich als besonders naturabhängig genannt. „Weitgehend unabhängig“ ist die "
                "Gegenbehauptung zum Text."
            ),
        ],
        "3/5",
    )
)

# --- 09 mid ---
cases.append(
    case(
        9,
        "Staat, Unternehmen und Rahmenbedingungen",
        [
            "Der Staat spielt eine zentrale Rolle, indem er Gesetze erlässt, Regulierungen durchsetzt und wirtschaftliche Rahmenbedingungen schafft.",
            "Steuerpolitik und Umweltauflagen sind Beispiele dafür, wie der Staat wirtschaftliche Rahmenbedingungen gestaltet.",
            "Unternehmen agieren nur passiv innerhalb staatlicher Regeln und beeinflussen diese Rahmenbedingungen niemals aktiv.",
            "Lobbying, Selbstregulierung und Corporate Social Responsibility (CSR) sind Wege, über die Unternehmen Rahmenbedingungen mitgestalten können.",
            "Umweltauflagen betreffen ausschließlich private Haushalte und niemals Unternehmen.",
        ],
        [True, True, False, True, False],
        [
            T(
                "Gesetze, Regulierungen und das Schaffen wirtschaftlicher Rahmenbedingungen werden als zentrale "
                "Staatsrollen genannt. Der Staat ist damit Mitgestalter der Wirtschaftsordnung, nicht bloßer Zuschauer."
            ),
            T(
                "Steuerpolitik und Umweltauflagen erscheinen ausdrücklich als Beispiele staatlicher Rahmenbedingungen."
            ),
            F(
                "Der Text sagt: Unternehmen agieren innerhalb der Rahmenbedingungen, beeinflussen sie aber auch aktiv. "
                "„Niemals aktiv“ widerspricht dieser Doppelrolle."
            ),
            T(
                "Lobbying, Selbstregulierung und CSR-Initiativen werden als aktive Einflusswege von Unternehmen genannt. "
                "CSR ist damit nicht nur Imagepflege außerhalb der Politik, sondern Teil der Mitgestaltung."
            ),
            F(
                "Umweltauflagen werden als Teil der vom Staat gesetzten wirtschaftlichen Rahmenbedingungen für "
                "Unternehmen genannt. Die Beschränkung auf Haushalte allein ist falsch."
            ),
        ],
        "3/5",
    )
)

# --- 10 mid ---
cases.append(
    case(
        10,
        "Zivilgesellschaft und individuelle Akteure",
        [
            "Zur Zivilgesellschaft zählen laut Lernunterlage unter anderem NGOs, Verbände, Wissenschaft und Medien.",
            "Die Zivilgesellschaft fungiert als kritische Instanz, die wirtschaftliches Handeln hinterfragt und Missstände thematisiert.",
            "Konsument:innen und Arbeitnehmer:innen prägen wirtschaftliche Strukturen und Normen durch ihr Verhalten mit, etwa über Kaufentscheidungen, Arbeitsmobilität oder Proteste.",
            "Wirtschaftliche Prozesse sind ausschließlich das Ergebnis technischer Optimierung und niemals sozialer oder politischer Aushandlung.",
            "Gesellschaftliche Erwartungen an nachhaltiges und ethisches Wirtschaften werden unter anderem von der Zivilgesellschaft formuliert.",
        ],
        [True, True, True, False, True],
        [
            T(
                "NGOs, Verbände, Wissenschaft und Medien werden ausdrücklich als Teile der Zivilgesellschaft genannt."
            ),
            T(
                "Kritisches Hinterfragen, Thematisieren von Missständen und Formulieren von Erwartungen sind die im Text "
                "beschriebenen Funktionen der Zivilgesellschaft."
            ),
            T(
                "Kaufentscheidungen, Arbeitsmobilität und Proteste sind die genannten Kanäle, über die Individuen und "
                "kollektive Akteure Strukturen und Normen mitprägen."
            ),
            F(
                "Der Text hält fest: Wirtschaftliche Prozesse sind immer auch Ergebnis sozialer und politischer "
                "Aushandlungsprozesse. Die Behauptung rein technischer Optimierung ohne Aushandlung widerspricht dem Kern von 2.1."
            ),
            T(
                "Die Zivilgesellschaft formuliert gesellschaftliche Erwartungen an nachhaltiges und ethisches Wirtschaften – "
                "so der Wortlaut der Lernunterlage."
            ),
        ],
        "3/5",
    )
)

# --- 11 mid-hard ---
cases.append(
    case(
        11,
        "Rückwirkungen: direkte und indirekte Umweltschäden",
        [
            "Umweltzerstörung verursacht erhebliche Kosten für die Wirtschaft.",
            "Zerstörte Infrastruktur durch Extremwetterereignisse, Produktionsausfälle und steigende Versicherungsansprüche sind Beispiele direkter Folgen.",
            "Ernteausfälle, erhöhte Gesundheitskosten und Produktivitätsverluste gelten in der Lernunterlage als indirekte Auswirkungen.",
            "Direkte und indirekte Schäden sind identische Kategorien; die Unterscheidung hat im Text keine Bedeutung.",
            "Steigende Versicherungsansprüche nach Extremwetter werden dem Bereich der direkten Folgen zugeordnet.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der Text stellt klar: Umweltzerstörung verursacht erhebliche Kosten für die Wirtschaft. Ökologie und "
                "Ökonomie sind hier über Schadenskosten verknüpft, nicht getrennt."
            ),
            T(
                "Infrastrukturschäden durch Extremwetter, Produktionsausfälle und steigende Versicherungsansprüche sind "
                "die genannten direkten Folgen."
            ),
            T(
                "Ernteausfälle, Gesundheitskosten und Produktivitätsverluste werden ausdrücklich als indirekte Auswirkungen aufgezählt."
            ),
            F(
                "Die Lernunterlage unterteilt Schäden bewusst in direkte und indirekte. Die Behauptung, die Unterscheidung "
                "sei bedeutungslos oder die Kategorien seien identisch, widerspricht dem Textaufbau."
            ),
            T(
                "Steigende Versicherungsansprüche stehen in der Liste der direkten Folgen neben Infrastrukturzerstörung "
                "und Produktionsausfällen."
            ),
        ],
        "3/5",
    )
)

# --- 12 mid-hard ---
cases.append(
    case(
        12,
        "Langfristige Herausforderungen und Anpassung",
        [
            "Langfristig verschärfen unter anderem die Degradierung von Ökosystemen, klimabedingte Migration, steigende Investitionsrisiken und Störungen globaler Lieferketten die wirtschaftlichen Herausforderungen.",
            "Die Anpassung an Klimafolgen erfordert erhebliche Investitionen in widerstandsfähige Infrastrukturen, erneuerbare Energien und nachhaltige Wirtschaftsmodelle.",
            "Klimabedingte Migration wird in der Lernunterlage ausschließlich als rein kulturelles Phänomen ohne wirtschaftliche Relevanz behandelt.",
            "Gesellschaftliche Werte und veränderte Konsumgewohnheiten können auf die Wirtschaft zurückwirken.",
            "Sobald Extremwetter direkte Schäden verursacht hat, entfallen langfristige Herausforderungen wie Lieferkettenstörungen automatisch.",
        ],
        [True, True, False, True, False],
        [
            T(
                "Degradierung, klimabedingte Migration, Investitionsrisiken und Lieferkettenstörungen sind die genannten "
                "langfristigen Verstärker wirtschaftlicher Herausforderungen."
            ),
            T(
                "Widerstandsfähige Infrastruktur, erneuerbare Energien und nachhaltige Wirtschaftsmodelle werden als "
                "Investitionsfelder der Anpassung genannt, um wirtschaftliche Stabilität zu sichern."
            ),
            F(
                "Klimabedingte Migration erscheint in der Liste wirtschaftlicher Herausforderungen. Sie als rein "
                "kulturell und wirtschaftlich irrelevant zu bezeichnen, widerspricht dem Text."
            ),
            T(
                "Die Gesellschaft wirkt auf die Wirtschaft unter anderem durch veränderte Konsumgewohnheiten und "
                "gesellschaftliche Werte – so der Schlussteil von 2.1 auf S. 32."
            ),
            F(
                "Direkte Schäden und langfristige Herausforderungen stehen nebeneinander; das eine ersetzt das andere "
                "nicht. Lieferkettenstörungen gehören gerade zu den längerfristigen Belastungen."
            ),
        ],
        "4/5",
    )
)

# --- 13 hard ---
cases.append(
    case(
        13,
        "Ökosysteme als natürlicher Schutz",
        [
            "Gesunde Ökosysteme können als natürlicher Schutz vor Naturkatastrophen dienen.",
            "Wälder können Überschwemmungen abschwächen, indem sie Regenwasser speichern und kontrolliert wieder abgeben.",
            "In hochalpinen Regionen können Wälder als natürliche Barrieren Lawinen abfangen und so Siedlungen sowie Infrastruktur schützen.",
            "Feuchtgebiete wirken eher wie undurchlässige Betonflächen: Sie leiten Hochwasser möglichst schnell weiter, statt es zurückzuhalten.",
            "Solche ökologischen Funktionen können direkte Schäden an Infrastruktur und Eigentum verringern und die Regeneration nach Katastrophen fördern.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Die Lernunterlage beschreibt gesunde Ökosysteme ausdrücklich als natürlichen Schutz vor Naturkatastrophen."
            ),
            T(
                "Wasserspeicherung und kontrollierte Abgabe sind der im Text genannte Mechanismus, über den Wälder "
                "Überschwemmungen verhindern oder abschwächen können."
            ),
            T(
                "Lawinenschutz durch Wälder als natürliche Barrieren in Hochlagen wird explizit genannt; geschützt werden "
                "Siedlungen, Verkehrswege und Infrastrukturen."
            ),
            F(
                "Feuchtgebiete wirken laut Text wie Schwämme, die Hochwasser aufnehmen und zurückhalten – also genau "
                "nicht wie schnell ableitende Betonflächen. Die Analogie ist verdreht."
            ),
            T(
                "Verringerung direkter Schäden und Förderung der Regeneration nach Katastrophen sind die genannten "
                "wirtschaftlich relevanten Folgen dieser ökologischen Funktionen."
            ),
        ],
        "4/5",
        context=(
            "Analysieren Sie die Schutz- und Versicherungsfunktion intakter Ökosysteme laut Abschnitt 2.1. "
            "Bewerten Sie die folgenden Aussagen:"
        ),
    )
)

# --- 14 hard ---
cases.append(
    case(
        14,
        "Biodiversität, Resilienz und Innovation",
        [
            "Die Artenvielfalt in einem Ökosystem erhöht dessen Widerstandsfähigkeit.",
            "Biodiversität ermöglicht es einem Ökosystem, sich an Veränderungen anzupassen und sich nach Störungen schneller zu erholen.",
            "Biodiversität ist auch eine wichtige Quelle für Innovationen etwa in Pharmazie, Biotechnologie und Landwirtschaft.",
            "Weil Biodiversität Innovationen fördern kann, ist der Schutz biologischer Vielfalt für abhängige Gemeinschaften wirtschaftlich bedeutungslos.",
            "Viele wertvolle Verbindungen und genetische Ressourcen stammen aus der Natur und können zu neuen Produkten und Technologien führen.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Artenvielfalt erhöht laut Text die Widerstandsfähigkeit eines Ökosystems. Monotone Systeme sind "
                "störungsanfälliger."
            ),
            T(
                "Anpassungsfähigkeit und schnellere Erholung nach Störungen sind die genannten Resilienzgewinne der Biodiversität."
            ),
            T(
                "Pharmazie, Biotechnologie und Landwirtschaft werden ausdrücklich als Innovationsfelder genannt, die von Biodiversität profitieren."
            ),
            F(
                "Der Text verknüpft den Schutz der biologischen Vielfalt mit der Stabilität natürlicher Systeme und "
                "damit mit der Widerstandsfähigkeit abhängiger Gemeinschaften. „Wirtschaftlich bedeutungslos“ ist die "
                "Gegenbehauptung; zudem widerspricht es der Innovationsrolle."
            ),
            T(
                "Natürliche Verbindungen und genetische Ressourcen als Ausgangspunkt neuer Produkte und Technologien "
                "werden im Text direkt genannt."
            ),
        ],
        "4/5",
    )
)

# --- 15 hard ---
cases.append(
    case(
        15,
        "Umwelt, Gesundheit und Abbildung 13",
        [
            "Eine intakte Umwelt trägt unmittelbar zur Gesundheit der Menschen bei.",
            "Saubere Luft, sauberes Wasser und der Zugang zu Naturräumen fördern die physische und psychische Gesundheit.",
            "Gesunde Gemeinschaften sind widerstandsfähiger gegenüber Gesundheitskrisen und können besser auf Krankheitsausbrüche reagieren.",
            "Laut Zusammenfassung zu Abbildung 13 beziehen wirtschaftliche Aktivitäten Inputs aus der Natur und geben Outputs wie Abfälle und Emissionen in sie zurück.",
            "Abbildung 13 zeigt, dass wirtschaftliche Aktivitäten außerhalb sozialer Institutionen, Normen und politischer Regeln stattfinden.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Der Text stellt einen unmittelbaren Beitrag intakter Umwelt zur menschlichen Gesundheit fest – nicht nur "
                "einen entfernten, indirekten Zusammenhang."
            ),
            T(
                "Saubere Luft, sauberes Wasser und Zugang zu Naturräumen sind die genannten Gesundheitsfaktoren für "
                "physische und psychische Gesundheit."
            ),
            T(
                "Widerstandsfähigkeit gegenüber Gesundheitskrisen und bessere Reaktion auf Ausbrüche werden als Vorteile "
                "gesunder Gemeinschaften genannt."
            ),
            T(
                "Die Bullet-Zusammenfassung zu Abbildung 13 nennt genau diesen Input-Output-Kreislauf mit der Natur."
            ),
            F(
                "Die Zusammenfassung betont im Gegenteil: Wirtschaftliche Aktivitäten sind in soziale Institutionen, "
                "Normen und politische Regeln eingebettet. „Außerhalb“ ist die Umkehrung."
            ),
        ],
        "4/5",
    )
)

# --- 16 hard ---
cases.append(
    case(
        16,
        "Tricky Wortlaute: Autonomie und Gerechtigkeit",
        [
            "Wirtschaft ist ein autonomer Prozess, der von gesellschaftlichen Entscheidungen über Ressourcennutzung, Verteilung und Gerechtigkeit unabhängig abläuft.",
            "Wirtschaft ist Ausdruck gesellschaftlicher Entscheidungen über Ressourcennutzung, Verteilung und Gerechtigkeit.",
            "Weil Märkte Preise bilden, entfällt jede gesellschaftliche Entscheidung über Verteilung und Gerechtigkeit.",
            "Die Einbettungsthese besagt, dass wirtschaftliche Aktivitäten von Haushalten, Unternehmen und Staat ausgeführt werden.",
            "„Eingebettet“ bedeutet in diesem Kapitel vor allem, dass die Wirtschaft Gesellschaft und Umwelt vollständig ersetzen kann.",
        ],
        [False, True, False, True, False],
        [
            F(
                "Der Schlusssatz zu 2.1 formuliert ausdrücklich: Wirtschaft ist kein autonomer Prozess. Autonomie würde "
                "die gesellschaftliche und ökologische Einbettung leugnen."
            ),
            T(
                "Genau so formuliert die Lernunterlage den Gegenpol zur Autonomie: Wirtschaft als Ausdruck "
                "gesellschaftlicher Entscheidungen über Ressourcennutzung, Verteilung und Gerechtigkeit."
            ),
            F(
                "Preisbildung in Märkten ersetzt in diesem Kapitel nicht die gesellschaftliche Dimension von Verteilung "
                "und Gerechtigkeit. Die Einbettungsthese hält diese Entscheidungen gerade für zentral."
            ),
            T(
                "Die Zusammenfassung zu Abbildung 13 nennt Haushalte, Unternehmen und Staat als Ausführende "
                "wirtschaftlicher Aktivitäten."
            ),
            F(
                "Einbettung heißt Abhängigkeit und Einordnung in Gesellschaft und Umwelt – nicht Ersetzung. Die Wirtschaft "
                "kann Gesellschaft und Umwelt nicht „vollständig ersetzen“; sie ist in sie hineingestellt."
            ),
        ],
        "4/5",
    )
)

# --- 17 very hard ---
cases.append(
    case(
        17,
        "Rollenvertauschung: Staat, Unternehmen, Zivilgesellschaft",
        [
            "Wenn Unternehmen durch Lobbying Einfluss nehmen, bedeutet das laut Lernunterlage, dass der Staat keinerlei Rahmenbedingungen mehr setzt.",
            "CSR-Initiativen von Unternehmen schließen aus, dass die Zivilgesellschaft wirtschaftliches Handeln kritisch hinterfragt.",
            "Der Staat setzt Rahmenbedingungen; Unternehmen können diese zugleich aktiv mitbeeinflussen – beides schließt sich nicht aus.",
            "Wissenschaft und Medien gehören in der Darstellung der Zivilgesellschaft zu jenen Akteuren, die Missstände thematisieren können.",
            "Arbeitsmobilität von Arbeitnehmer:innen kann wirtschaftliche Strukturen mitprägen, während Kaufentscheidungen von Konsument:innen keinerlei Einfluss haben.",
        ],
        [False, False, True, True, False],
        [
            F(
                "Lobbying ist ein zusätzlicher Einflusskanal von Unternehmen, kein Ersatz für staatliche "
                "Rahmenbedingungen. Der Staat setzt weiterhin Gesetze und Regulierungen; Unternehmen versuchen, sie "
                "mitzugestalten. „Keinerlei Rahmenbedingungen mehr“ ist eine unzulässige Absolutfolgerung."
            ),
            F(
                "CSR und kritische Zivilgesellschaft stehen im Text nebeneinander. Unternehmensseitige "
                "Selbstverpflichtungen heben die kritische Instanz von NGOs, Medien und Wissenschaft nicht auf."
            ),
            T(
                "Genau diese Doppelstruktur formuliert der Text: Agieren innerhalb der Regeln und aktives Beeinflussen "
                "derselben Regeln. Das ist eine typische Prüfungsfalle gegen Entweder-oder-Denken."
            ),
            T(
                "Wissenschaft und Medien werden neben NGOs und Verbänden als Teile der Zivilgesellschaft genannt, die "
                "Missstände thematisieren und Erwartungen formulieren."
            ),
            F(
                "Der Text nennt Kaufentscheidungen und Arbeitsmobilität parallel als Einflusskanäle. Die Halbierung "
                "„Mobilität ja, Kaufentscheidungen nie“ ist falsch."
            ),
        ],
        "5/5",
    )
)

# --- 18 very hard ---
cases.append(
    case(
        18,
        "Direkte vs. indirekte Schäden – Abgrenzungsfallen",
        [
            "Ernteausfälle nach klimatischen Störungen sind in der Lernunterlage als direkte Infrastrukturzerstörung klassifiziert.",
            "Produktionsausfälle gehören zu den direkten Folgen von Umweltzerstörung.",
            "Erhöhte Gesundheitskosten werden den indirekten Auswirkungen zugeordnet.",
            "Wenn Versicherungsansprüche steigen, liegt laut Text stets nur eine indirekte Wirkung vor, niemals eine direkte.",
            "Die Unterscheidung direkt/indirekt hilft, unterschiedliche Kostenkanäle der Umweltzerstörung für die Wirtschaft zu ordnen.",
        ],
        [False, True, True, False, True],
        [
            F(
                "Ernteausfälle stehen in der Liste der indirekten Auswirkungen – nicht bei der direkten "
                "Infrastrukturzerstörung. Die Aussage vertauscht die Kategorien."
            ),
            T(
                "Produktionsausfälle werden ausdrücklich unter den direkten Folgen genannt."
            ),
            T(
                "Erhöhte Gesundheitskosten erscheinen in der indirekten Liste neben Ernteausfällen und Produktivitätsverlusten."
            ),
            F(
                "Steigende Versicherungsansprüche sind im Text den direkten Folgen zugeordnet. „Stets nur indirekt“ "
                "widerspricht der Zuordnung und das Absolutwort „niemals“ verschärft den Fehler."
            ),
            T(
                "Genau dazu dient die Unterteilung: direkte Schäden (z. B. Infrastruktur, Ausfälle, Versicherungen) "
                "versus indirekte (Ernten, Gesundheit, Produktivität). Die Ordnung ist didaktisch und prüfungsrelevant."
            ),
        ],
        "5/5",
    )
)

# --- 19 very hard ---
cases.append(
    case(
        19,
        "NGOs, öffentlicher Sektor und Zivilgesellschaft",
        [
            "In Abbildung 13 werden NGOs dem öffentlichen Sektor zugeordnet.",
            "Später im Text erscheint die Zivilgesellschaft – einschließlich NGOs – als kritische Instanz gegenüber wirtschaftlichem Handeln.",
            "Aus der Zuordnung von NGOs zum öffentlichen Sektor in Abbildung 13 folgt, dass NGOs keine kritische Rolle gegenüber der Wirtschaft einnehmen können.",
            "Die vereinfachte Abbildung und die spätere Akteursbeschreibung widersprechen sich so stark, dass eines von beiden laut Lernunterlage zu ignorieren ist.",
            "Eine prüfungssichere Lesart lautet: NGOs können sowohl als Teil öffentlicher bzw. gemeinwohlorientierter Aktivität in der Abbildung erscheinen als auch als kritische zivilgesellschaftliche Instanz beschrieben werden.",
        ],
        [True, True, False, False, True],
        [
            T(
                "Der Begleittext zu Abbildung 13 nennt den öffentlichen Sektor ausdrücklich als „Staat und NGOs“."
            ),
            T(
                "Im Absatz zum gesellschaftlichen Umfeld fungiert die Zivilgesellschaft – bestehend aus NGOs, Verbänden, "
                "Wissenschaft und Medien – als kritische Instanz."
            ),
            F(
                "Die Zuordnung in der vereinfachten Abbildung schließt die kritische Rolle nicht aus. Der Text beschreibt "
                "komplementäre Perspektiven auf dieselben Akteure, keine logische Unmöglichkeit."
            ),
            F(
                "Die Lernunterlage kennzeichnet Abbildung 13 als bewusst vereinfacht. Vereinfachung heißt nicht, dass man "
                "einen der beiden Textteile verwerfen muss; man muss die Ebenen unterscheiden."
            ),
            T(
                "Das ist die konsistente Lesart: Abbildung 13 ordnet Träger wirtschaftlicher Aktivität zu; der spätere "
                "Absatz beschreibt Macht, Kritik und Aushandlung. Beides kann NGOs betreffen, ohne sich auszuschließen."
            ),
        ],
        "5/5",
    )
)

# --- 20 very hard ---
cases.append(
    case(
        20,
        "Gesamtzusammenhang: Einbettung unter Prüfungsdruck",
        [
            "Wenn Gesellschaft und Staat Kooperation, Planbarkeit und Innovationsfähigkeit sichern, fungieren sie als zentrale Ressource der Wirtschaft – nicht bloß als äußerer Kontext.",
            "Weil alle wirtschaftlichen Aktivitäten Outputs an die Umwelt abgeben, sind Inputs aus dem Erdsystem für die Wirtschaft entbehrlich.",
            "Eine Aussage der Form „Wirtschaft beeinflusst die Natur, hängt aber in keiner Weise von ihr ab“ widerspricht der Einbettungslogik von Abschnitt 2.1.",
            "Individuelle Proteste können Normen mitprägen; gleichzeitig können Extremwetterschäden direkte wirtschaftliche Kosten erzeugen – beide Richtungen der Wechselwirkung sind im Kapitel angelegt.",
            "Die Stabilität des Erdsystems ist laut Kapitelbeginn mit menschlichem Wohlergehen und wirtschaftlichem Erfolg verknüpft; sie als rein externes Thema ohne Wirtschaftsbezug zu behandeln, ist daher unzutreffend.",
        ],
        [True, False, True, True, True],
        [
            T(
                "Der Text hebt Gesellschaft und Staat von „nur Kontext“ auf „zentrale Ressource“ und nennt Kooperation, "
                "Planbarkeit und Innovationsfähigkeit als gesicherte Funktionen."
            ),
            F(
                "Outputs und Inputs sind zwei Seiten desselben Einbettungsverhältnisses. Aus der Existenz von Emissionen "
                "und Abfällen folgt nicht, dass Ressourcen und Umweltdienstleistungen entbehrlich wären – im Gegenteil."
            ),
            T(
                "Abschnitt 2.1 betont beides: Wirkungen auf die Natur und Abhängigkeit von natürlichen Grundlagen. "
                "Einseitige Beeinflussung ohne Abhängigkeit ist genau die Position, die das Kapitel verwirft."
            ),
            T(
                "Proteste (Gesellschaft → Wirtschaft) und Extremwetterkosten (Umwelt → Wirtschaft) sind beide im Text "
                "angelegt. Die Einbettung ist wechselseitig, nicht einbahnig."
            ),
            T(
                "Der Eröffnungssatz von Kapitel 2 verknüpft Wohlergehen, Wirtschaftserfolg und Erdsystemstabilität. "
                "„Rein externes Thema ohne Wirtschaftsbezug“ widerspricht dieser Ausgangsthese."
            ),
        ],
        "5/5",
    )
)

assert len(cases) == 20
for c in cases:
    assert len(c["statements"]) == 5
    assert len(c["answer_key"]) == 5
    assert len(c["tactical_explanations"]) == 5
    assert all(e.endswith("Die Aussage ist daher wahr.") or e.endswith("Die Aussage ist daher falsch.") for e in c["tactical_explanations"])
    for i, (a, e) in enumerate(zip(c["answer_key"], c["tactical_explanations"])):
        if a:
            assert e.endswith("wahr."), (c["case_id"], i)
        else:
            assert e.endswith("falsch."), (c["case_id"], i)

# Preserve any future non-2.1 rows if present
existing: list[dict] = []
if OUT.exists():
    raw = json.loads(OUT.read_text(encoding="utf-8") or "[]")
    if isinstance(raw, list):
        existing = [r for r in raw if r.get("subsection") != "2.1"]

merged = existing + cases
OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {len(cases)} cases for 2.1 (+ {len(existing)} other) → {OUT.relative_to(ROOT)}")
print("Difficulty mix:", {d: sum(1 for c in cases if c["difficulty_level"] == d) for d in sorted({c["difficulty_level"] for c in cases})})
print("True/False balance:", sum(sum(c["answer_key"]) for c in cases), "true /", sum(5 - sum(c["answer_key"]) for c in cases), "false across statements")
