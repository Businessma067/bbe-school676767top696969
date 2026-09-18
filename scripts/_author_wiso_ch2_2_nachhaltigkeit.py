#!/usr/bin/env python3
"""Author WiSo Wirtschaft verstehen §2.2 (Nachhaltigkeit) practice cases."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch2.json"

CTX = (
    "Analysieren Sie Nachhaltigkeit laut der Lernunterlage „Wirtschaft verstehen“ "
    "(Abschnitt 2.2). Bewerten Sie die folgenden Aussagen:"
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
        "subsection": "2.2",
        "case_id": f"CASE W2.2.{n:02d}",
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
        "Was Nachhaltigkeit bedeutet",
        [
            "Nachhaltigkeit bedeutet, dass das gemeinsame System von Wirtschaft und Umwelt die Bedürfnisse der Menschen auch in der Zukunft befriedigen kann.",
            "Nachhaltigkeit bezieht sich laut Lernunterlage ausschließlich auf aktuelle Quartalsgewinne von Unternehmen.",
            "Wechselwirkungen zwischen Natur und Wirtschaft zu verstehen ist entscheidend für nachhaltige und widerstandsfähige Wirtschaftssysteme.",
            "Nachhaltige Systeme sollen das Wohlergehen der Menschen fördern und zugleich Gesundheit und Integrität der Ökosysteme erhalten.",
            "Sobald heutige Bedürfnisse gedeckt sind, ist die Fähigkeit künftiger Bedürfnisbefriedigung laut Definition irrelevant.",
        ],
        [True, False, True, True, False],
        [
            T(
                "Der Definitionskasten in 2.2 formuliert genau das: Nachhaltigkeit heißt, dass Wirtschaft und Umwelt "
                "gemeinsam menschliche Bedürfnisse auch künftig erfüllen können."
            ),
            F(
                "Die Lernunterlage bindet Nachhaltigkeit an das gemeinsame System von Wirtschaft und Umwelt und an "
                "zukünftige Bedürfnisbefriedigung – nicht an kurzfristige Quartalsgewinne."
            ),
            T(
                "Der Einstieg von 2.2 betont: Wechselwirkungen zwischen Natur und Wirtschaft zu erkennen und zu verstehen "
                "ist entscheidend für nachhaltige, widerstandsfähige Systeme."
            ),
            T(
                "Genau diese Doppelzielsetzung steht im Text: Wohlergehen der Menschen und zugleich Erhalt der "
                "Ökosystemgesundheit und -integrität."
            ),
            F(
                "Die Zukunftsperspektive ist der Kern der Definition. Heutige Deckung ohne künftige Fähigkeit wäre "
                "gerade nicht nachhaltig."
            ),
        ],
        "1/5",
    )
)

# --- 02 easy ---
cases.append(
    case(
        2,
        "Nachhaltiges System: Grenzen und Bedürfnisse",
        [
            "Ein System aus Wirtschaft, Gesellschaft und Umwelt gilt als nachhaltig, wenn wirtschaftliches Handeln innerhalb der biophysischen Grenzen des Planeten erfolgt, ohne die natürlichen Lebensgrundlagen zu zerstören.",
            "Nachhaltige Wirtschaftsstrukturen sollen die Bedürfnisse aller Menschen decken und zugleich soziale Inklusion und gesellschaftlichen Zusammenhalt fördern.",
            "Entscheidend ist unter anderem, wie Ressourcen entnommen, genutzt und wieder in Kreisläufe zurückgeführt werden.",
            "Ökologische Belastungsgrenzen dürfen im Nachhaltigkeitsverständnis der Lernunterlage problemlos dauerhaft überschritten werden.",
            "Ein Wirtschaftssystem, das Nachhaltigkeitsprinzipien ignoriert, gefährdet laut Text nur die Umwelt, niemals die eigene Stabilität oder die gesellschaftliche Wohlfahrt.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Diese Formulierung entspricht dem Text: biophysische Grenzen einhalten und natürliche Lebensgrundlagen "
                "nicht zerstören."
            ),
            T(
                "Bedürfnisdeckung für alle sowie soziale Inklusion und Zusammenhalt werden ausdrücklich als Gestaltungsziel "
                "nachhaltiger Wirtschaftsstrukturen genannt."
            ),
            T(
                "Entnahme, Nutzung und Rückführung in Kreisläufe stehen im Zentrum, damit Belastungsgrenzen nicht "
                "überschritten werden."
            ),
            F(
                "Der Text fordert ausdrücklich, ökologische Belastungsgrenzen nicht zu überschreiten. „Problemlos dauerhaft "
                "überschreiten“ widerspricht dem Nachhaltigkeitsbegriff."
            ),
            F(
                "Der Text warnt: Wer die Prinzipien nicht berücksichtigt, gefährdet Umwelt und zugleich eigene Stabilität "
                "sowie gesellschaftliche Wohlfahrt – nicht nur die Umwelt allein."
            ),
        ],
        "1/5",
    )
)

# --- 03 easy-mid ---
cases.append(
    case(
        3,
        "Verantwortungsbewusstes Wirtschaften und entschlossenes Handeln",
        [
            "Langfristig erfolgreiches Wirtschaften schließt laut Verweis auf Kapitel 1.3 ein, dass Unternehmen und Konsument:innen Auswirkungen auf andere und die Umwelt einbeziehen.",
            "Verantwortungsbewusstes und nachhaltiges Handeln bedeutet in diesem Zusammenhang, externe Wirkungen bei Entscheidungen mitzudenken.",
            "Entschlossenes Handeln ist erforderlich, damit Wirtschaft und Gesellschaft innerhalb biophysischer Grenzen erfolgreich agieren und soziale Gerechtigkeit gewährleisten.",
            "Weil Nachhaltigkeit ein Systemziel ist, entfällt jede Verantwortung einzelner Unternehmen und Konsument:innen.",
            "Soziale Gerechtigkeit gehört laut Abschnitt 2.2 zu den Gestaltungszielen nachhaltigen Wirtschaftens.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der Text erinnert an 1.3: Auswirkungen auf andere und die Umwelt einzubeziehen ist Teil langfristig "
                "erfolgreichen Wirtschaftens."
            ),
            T(
                "Genau so wird „verantwortungsbewusst und nachhaltig handeln“ im Text angebunden: externe Wirkungen "
                "werden mitgedacht, nicht ausgeblendet."
            ),
            T(
                "Der Schlusssatz des Einstiegs fordert entschlossenes Handeln für biophysische Grenzen und soziale Gerechtigkeit."
            ),
            F(
                "Systemziel und individuelle Verantwortung schließen sich nicht aus. Der Text spricht explizit "
                "Unternehmen und Konsument:innen an."
            ),
            T(
                "Soziale Gerechtigkeit wird neben dem Agieren innerhalb biophysischer Grenzen ausdrücklich genannt."
            ),
        ],
        "2/5",
    )
)

# --- 04 mid ---
cases.append(
    case(
        4,
        "Externe Kosten und kurzfristige Anreize",
        [
            "Für einzelne Akteure lohnt es sich oft, kurzfristige Gewinne zu maximieren und Produktionskosten zu senken, während externe Kosten auf andere oder künftige Generationen abgewälzt werden.",
            "Externe Kosten entstehen typischerweise nicht beim Unternehmen oder den Konsument:innen selbst, sondern werden von der Gesellschaft oder durch ökologische Schäden getragen.",
            "Umweltzerstörung und soziale Ausbeutung können Beispiele für solche abgewälzten externen Kosten sein.",
            "Externe Kosten bedeuten laut Lernunterlage, dass alle ökologischen Folgekosten vollständig im Marktpreis des Produkts enthalten sind.",
            "Wirtschaftliches Handeln berücksichtigt in vielen Bereichen die ökologischen Belastungsgrenzen noch nicht ausreichend.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der Text beschreibt genau diesen Anreiz: kurzfristige Gewinn- und Kostenvorteile bei Abwälzung externer Kosten."
            ),
            T(
                "Externe Kosten werden von Gesellschaft oder über ökologische Schäden getragen – nicht vom Verursacher "
                "im engen Sinn der Transaktion."
            ),
            T(
                "Umweltzerstörung und soziale Ausbeutung werden ausdrücklich als Beispiele genannt."
            ),
            F(
                "Wenn Kosten vollständig im Preis stecken würden, wären sie gerade nicht „extern“. Die Aussage verdreht "
                "die Definition."
            ),
            T(
                "Der Text stellt fest: Intensives Entnehmen und Nutzen natürlicher Ressourcen erfolgt oft ohne ausreichende "
                "Berücksichtigung ökologischer Belastungsgrenzen."
            ),
        ],
        "2/5",
    )
)

# --- 05 mid ---
cases.append(
    case(
        5,
        "Lineares Wirtschaften: Take – Make – Waste",
        [
            "Ein lineares Wirtschaftssystem folgt oft dem Prinzip „Take – Make – Waste“: Rohstoffe entnehmen, Produkte herstellen, konsumieren und entsorgen.",
            "Im linearen Modell werden ökologische Folgekosten von Ressourcenabbau, Emissionen oder Abfall häufig nicht ausreichend einbezogen.",
            "Die Möglichkeit zirkulärer Nutzung – Wiederverwendung, Reparatur oder Wiederverwertung – wird im linearen Modell vielfach vernachlässigt.",
            "„Take – Make – Waste“ beschreibt laut Lernunterlage bereits das Ideal der Kreislaufwirtschaft.",
            "Ein linearer Ressourcenfluss kann zu wachsender Umweltbelastung, steigendem Ressourcenverbrauch und zunehmendem Druck auf die planetaren Grenzen führen.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Take – Make – Waste ist die im Text genannte Kurzformel des linearen Modells."
            ),
            T(
                "Gerade die unzureichende Einbeziehung ökologischer Folgekosten charakterisiert das lineare System im Text."
            ),
            T(
                "Wiederverwendung, Reparatur und Wiederverwertung werden als vernachlässigte zirkuläre Optionen genannt."
            ),
            F(
                "Take – Make – Waste ist das lineare Gegenbild zur Kreislaufwirtschaft, nicht deren Ideal."
            ),
            T(
                "Genau diese Folgenkette – Belastung, Verbrauch, Druck auf planetare Grenzen – steht im Text."
            ),
        ],
        "2/5",
    )
)

# --- 06 mid ---
cases.append(
    case(
        6,
        "Folgen linearer Wirtschaftsweise und Gegenentwurf",
        [
            "Eine lineare Wirtschaftsweise kann zentrale biophysische Systeme wie Klima, Artenvielfalt, Land und Wasser destabilisieren.",
            "Klimakrise, Verlust der Biodiversität und Übernutzung natürlicher Ressourcen gefährden laut Text nicht nur die Umwelt, sondern auch wirtschaftliche Stabilität und menschliches Wohlergehen.",
            "Eine nachhaltige Wirtschaft muss innerhalb ökologischer Grenzen agieren und zugleich das Wohlergehen aller Menschen sichern.",
            "Neue Modelle für eine nachhaltige Transformation setzen unter anderem auf Kreislaufwirtschaft, regenerative Ressourcenströme und soziale Gerechtigkeit.",
            "Weil lineare Systeme historisch verbreitet sind, sind regenerative Ressourcenströme laut Lernunterlage überflüssig.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Klima, Artenvielfalt, Land und Wasser werden als durch lineare Flüsse destabilisierte biophysische Systeme genannt."
            ),
            T(
                "Der Text verknüpft ökologische Folgen ausdrücklich mit wirtschaftlicher Stabilität und Wohlergehen."
            ),
            T(
                "Ökologische Grenzen und Wohlergehen aller Menschen sind die Doppelanforderung an eine nachhaltige Wirtschaft."
            ),
            T(
                "Kreislaufwirtschaft, regenerative Ströme und soziale Gerechtigkeit sind die genannten Bausteine neuer Modelle."
            ),
            F(
                "Gerade weil lineare Muster problematisch sind, fordert der Text neue Modelle mit regenerativen Strömen. "
                "„Überflüssig“ widerspricht dem Argument."
            ),
        ],
        "2/5",
    )
)

# --- 07 mid ---
cases.append(
    case(
        7,
        "Kreislaufwirtschaft: Kernidee",
        [
            "In der Kreislaufwirtschaft werden Abfälle minimiert und Ressourcen möglichst lange im Wirtschaftskreislauf gehalten.",
            "Wiederverwenden, Reparieren oder Recyceln von Produkten, Materialien und Rohstoffen sind zentrale Strategien der Kreislaufwirtschaft.",
            "Ziel der Kreislaufwirtschaft ist es unter anderem, den Wert der Ressourcen möglichst lange zu erhalten.",
            "Kreislaufwirtschaft soll Umweltbelastung reduzieren und zugleich wirtschaftliche Vorteile schaffen.",
            "Kreislaufwirtschaft bedeutet laut Lernunterlage vor allem, Abfälle möglichst rasch und vollständig zu beseitigen, ohne Materialien erneut zu nutzen.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Abfälle minimieren und Ressourcen lange im Kreislauf halten – so der Definitionskasten."
            ),
            T(
                "Wiederverwendung, Reparatur und Recycling sind die genannten konkreten Strategien."
            ),
            T(
                "Werterhalt der Ressourcen so lange wie möglich ist ein explizites Ziel."
            ),
            T(
                "Der Text nennt beide Seiten: weniger Umweltbelastung und wirtschaftliche Vorteile."
            ),
            F(
                "Rasche Beseitigung ohne erneute Nutzung ist eher linear (Waste). Kreislaufwirtschaft hält Materialien "
                "im System, statt sie nur zu entsorgen."
            ),
        ],
        "3/5",
    )
)

# --- 08 mid ---
cases.append(
    case(
        8,
        "Verwandte Konzepte der Kreislaufwirtschaft",
        [
            "Reparaturbonus, Circular Design, langlebige Produkte und Urban Mining werden als verwandte Konzepte zur Kreislaufwirtschaft genannt.",
            "Circular Design zielt darauf, Produkte so zu gestalten, dass zirkuläre Nutzung leichter möglich wird.",
            "Urban Mining bezeichnet in diesem Zusammenhang Ansätze, Wertstoffe aus bereits genutzten urbanen Beständen zurückzugewinnen.",
            "Langlebige Produkte widersprechen dem Ziel, Ressourcen möglichst lange im Wirtschaftskreislauf zu halten.",
            "Ein Reparaturbonus kann Anreize setzen, Produkte zu reparieren statt sofort zu ersetzen.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Diese vier Begriffe stehen ausdrücklich im Kasten zu verwandten Konzepten der Kreislaufwirtschaft."
            ),
            T(
                "Circular Design ist darauf angelegt, Kreislauffähigkeit bereits in der Produktgestaltung zu verankern – "
                "passend zu Wiederverwendung, Reparatur und Recycling."
            ),
            T(
                "Urban Mining meint die Rückgewinnung von Rohstoffen/Wertstoffen aus bestehenden (städtischen) "
                "Materialbeständen statt nur aus Neuabbau."
            ),
            F(
                "Langlebigkeit hält Nutzen und Materialwert länger im System – das unterstützt das Kreislaufziel, "
                "widerspricht ihm nicht."
            ),
            T(
                "Ein Reparaturbonus ist ein politisches/ökonomisches Instrument, Reparatur gegenüber Neukauf zu stärken."
            ),
        ],
        "3/5",
    )
)

# --- 09 mid ---
cases.append(
    case(
        9,
        "Armut als Herausforderung nachhaltiger Transformation",
        [
            "Mit der Transformation der Wirtschaft soll laut Lernunterlage auch weit verbreitete Armut adressiert werden.",
            "Heute leben fast 700 Millionen Menschen (rund 8,5 % der Weltbevölkerung) in extremer Armut – mit weniger als 2,15 US-Dollar pro Tag.",
            "Rund 3,5 Milliarden Menschen (44 % der Weltbevölkerung) gelten als arm, wenn man von 6,85 USD pro Tag ausgeht.",
            "Die Fortschritte bei der Armutsbekämpfung sind laut Text ungebrochen beschleunigt und durch COVID-19 gestärkt worden.",
            "In Ländern mit niedrigem Einkommen sind die Armutsraten teilweise sogar höher als vor der Krise.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der Übergangssatz vor den Armutsdaten nennt Armut ausdrücklich als drängendes Problem, das mit der "
                "Transformation adressiert werden soll."
            ),
            T(
                "Die Zahlen 700 Millionen, 8,5 % und die 2,15-USD-Schwelle stammen aus dem Faktenkasten."
            ),
            T(
                "3,5 Mrd. bzw. 44 % bei 6,85 USD/Tag sind die genannten Werte für die höhere Armutsschwelle."
            ),
            F(
                "Der Text sagt das Gegenteil: Fortschritte sind aufgrund schwachen Wachstums, COVID-19 und zunehmender "
                "Fragilität ins Stocken geraten – nicht beschleunigt und gestärkt."
            ),
            T(
                "Genau dieser Befund steht im Faktenkasten zu Ländern mit niedrigem Einkommen."
            ),
        ],
        "3/5",
        context=(
            "Prüfen Sie die Armutsdaten und ihre Rolle für nachhaltige Transformation laut Abschnitt 2.2. "
            "Bewerten Sie die folgenden Aussagen:"
        ),
    )
)

# --- 10 mid ---
cases.append(
    case(
        10,
        "Armut regional und in Österreich",
        [
            "Obwohl Afrika südlich der Sahara nur etwa 16 Prozent der Weltbevölkerung stellt, entfallen dort laut Lernunterlage 67 Prozent der Menschen in extremer Armut.",
            "In Österreich gelten Menschen als armutsgefährdet, wenn ihr Einkommen unter der Armutsgefährdungsschwelle von 1.572 € pro Monat für einen Einpersonenhaushalt liegt.",
            "Im Jahr 2023 waren in Österreich rund 14,9 % der Bevölkerung armutsgefährdet, etwa 1.314.000 Personen.",
            "Die österreichische Armutsgefährdungsschwelle von 1.572 € entspricht laut Text derselben Messlatte wie die weltweite Extremarmutsschwelle von 2,15 USD pro Tag.",
            "Die Zahl der Menschen unter der 6,85-USD-Schwelle hat sich seit den 1990er Jahren kaum verändert, weil Bevölkerungswachstum Fortschritte weitgehend kompensiert hat.",
        ],
        [True, True, True, False, True],
        [
            T(
                "16 % der Weltbevölkerung, aber 67 % der extrem Armen – so der regionale Schwerpunkt im Faktenkasten."
            ),
            T(
                "1.572 € monatlich für einen Einpersonenhaushalt ist die genannte österreichische Schwelle."
            ),
            T(
                "14,9 % bzw. rund 1.314.000 Personen im Jahr 2023 stehen so im Text (Statistik Austria)."
            ),
            F(
                "Der Text betont ausdrücklich: In Österreich ist die Definition eine andere. Nationale Armutsgefährdung "
                "und globale Extremarmut sind nicht dieselbe Messlatte."
            ),
            T(
                "Kaum veränderte Absolute seit den 1990ern wegen kompensierenden Bevölkerungswachstums ist der "
                "genannte Befund zur 6,85-USD-Gruppe."
            ),
        ],
        "3/5",
    )
)

# --- 11 mid-hard ---
cases.append(
    case(
        11,
        "Das Wachstumsdilemma",
        [
            "Wirtschaftswachstum wird häufig als zentrale Lösung angesehen, verstanden als Steigerung wirtschaftlicher Aktivitäten.",
            "Das derzeitige Niveau globaler wirtschaftlicher Aktivität überschreitet bereits mehrere planetare Grenzen.",
            "Zugleich gilt wirtschaftliches Wachstum vielen als notwendig, um Armut zu reduzieren und gesellschaftliche Entwicklung zu fördern.",
            "Maßnahmen zur Armutsbekämpfung können durch ökologische Auswirkungen langfristig neue Risiken schaffen, insbesondere wenn sie auf ressourcenintensivem Wachstum basieren.",
            "Weil Wachstum Armut verringern kann, entfällt laut Lernunterlage jedes Dilemma mit den planetaren Grenzen.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Wachstum als Steigerung wirtschaftlicher Aktivitäten und als vermeintlich zentrale Lösung wird so eingeführt."
            ),
            T(
                "Der Text stellt klar: Mehrere planetare Grenzen sind bereits überschritten."
            ),
            T(
                "Armutsreduktion und gesellschaftliche Entwicklung sind die genannten Gründe, warum Wachstum als notwendig gilt."
            ),
            T(
                "Genau dieses Risiko – neue wirtschaftliche und gesellschaftliche Risiken durch ökologische Folgen "
                "ressourcenintensiven Wachstums – formuliert der Text."
            ),
            F(
                "Der scheinbare Widerspruch ist gerade die zentrale Herausforderung. Wachstum als Armutshelfer hebt "
                "das Grenzproblem nicht auf."
            ),
        ],
        "3/5",
    )
)

# --- 12 mid-hard ---
cases.append(
    case(
        12,
        "Anforderungen an nachhaltige Transformation",
        [
            "Eine nachhaltige Transformation erfordert Ansätze, die wirtschaftliche Entwicklung innerhalb biophysischer Grenzen ermöglichen.",
            "Soziale Gerechtigkeit gehört zu den Zielen dieser Transformation.",
            "Ökologische Kipppunkte sollen dabei nicht überschritten werden.",
            "Nachhaltige Transformation bedeutet laut Lernunterlage vor allem, planetare Grenzen bewusst weiter zu überschreiten, um kurzfristig mehr Output zu erzeugen.",
            "Das Dilemma besteht darin, Armut und Entwicklung zu fördern, ohne die langfristige Fähigkeit zur Bedürfnisbefriedigung ökologisch zu untergraben.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Entwicklung innerhalb biophysischer Grenzen ist die zentrale Anforderung an nachhaltige Transformation."
            ),
            T(
                "Soziale Gerechtigkeit wird ausdrücklich mitgenannt."
            ),
            T(
                "Keine Überschreitung ökologischer Kipppunkte ist Teil der Formulierung."
            ),
            F(
                "Bewusstes Weiterüberschreiten der Grenzen widerspricht dem gesamten Abschnitt. Ziel ist Begrenzung, "
                "nicht Beschleunigung der Überschreitung."
            ),
            T(
                "Das ist die kompakte Formulierung des im Text beschriebenen Widerspruchs und seiner Lösungsrichtung."
            ),
        ],
        "4/5",
    )
)

# --- 13 hard ---
cases.append(
    case(
        13,
        "Our Common Future und der Brundtland-Bericht",
        [
            "„Our Common Future“ wurde 1987 von der Weltkommission für Umwelt und Entwicklung (WCED) veröffentlicht.",
            "Der Bericht wird manchmal auch als Brundtland-Bericht bezeichnet, weil Gro Harlem Brundtland die Vorsitzende der Kommission war.",
            "Der Bericht beschreibt sowohl das Ausmaß der Armut als auch Bedrohungen der Nachhaltigkeit.",
            "Der Brundtland-Bericht hält die Quadratur des Kreises für unmöglich und lehnt jedes Wirtschaftswachstum ab.",
            "Laut Bericht darf das zur Armutsbekämpfung notwendige Wirtschaftswachstum nicht durch Umweltauswirkungen zu künftigen wirtschaftlichen Problemen führen.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Jahr 1987 und WCED sind die genannten Veröffentlichungsangaben."
            ),
            T(
                "Der Alternativname Brundtland-Bericht wird über den Vorsitz von Gro Harlem Brundtland erklärt."
            ),
            T(
                "Armut und Nachhaltigkeitsbedrohungen sind die beiden Inhaltsachsen, die der Text dem Bericht zuschreibt."
            ),
            F(
                "Der Text sagt ausdrücklich: Die Quadratur des Kreises wird für möglich gehalten. Es geht um eine neue "
                "Art des Wachstums, nicht um pauschale Wachstumablehnung."
            ),
            T(
                "Genau diese Bedingung – Wachstum ohne künftige Wirtschaftsprobleme durch Umweltfolgen – formuliert der Text."
            ),
        ],
        "4/5",
    )
)

# --- 14 hard ---
cases.append(
    case(
        14,
        "Nachhaltige Entwicklung nach Brundtland",
        [
            "Was gebraucht wird, ist laut Brundtland-Bericht eine neue Art des Wirtschaftswachstums, die die Umwelt weit weniger belastet.",
            "Diese neue Wachstumsart soll die Fähigkeit des gemeinsamen Systems von Wirtschaft und Umwelt erhöhen, die Menschen zufriedenzustellen – statt Nachhaltigkeit zu gefährden.",
            "Nachhaltige Entwicklung ist eine Form des Wirtschaftswachstums, die Bedürfnisse und Wünsche der Gegenwart befriedigt, ohne die Fähigkeit des Wirtschafts- und Umweltsystems zu gefährden, diese in der Zukunft zu erfüllen.",
            "Wege dorthin können Sharing-Modelle, langlebige Designs und Remanufacturing (Wiederaufbereitung gebrauchter Teile) sein.",
            "Remanufacturing erhöht laut Lernunterlage typischerweise den Rohstoffverbrauch und die Emissionen, ohne wirtschaftliche Chancen zu schaffen.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Weniger Umweltbelastung bei neuer Wachstumsart ist die zentrale Forderung des Berichts im Text."
            ),
            T(
                "Erhöhung der Systemfähigkeit zur Zufriedenstellung der Menschen – so die positive Formulierung gegenüber "
                "bloßer Gefährdungsvermeidung."
            ),
            T(
                "Das ist die im Text wiedergegebene Definition nachhaltiger Entwicklung."
            ),
            T(
                "Sharing-Modelle, langlebige Designs und Remanufacturing werden ausdrücklich als Wege genannt."
            ),
            F(
                "Der Text sagt das Gegenteil: Remanufacturing spart Rohstoffe, reduziert Emissionen und schafft zugleich "
                "neue wirtschaftliche Chancen."
            ),
        ],
        "4/5",
    )
)

# --- 15 hard ---
cases.append(
    case(
        15,
        "European Green Deal und Politikinstrumente",
        [
            "Im Rahmen des European Green Deal ist Nachhaltigkeit zu einem Schlüsselbegriff der europäischen Wirtschaftspolitik geworden.",
            "Die Nachhaltigkeitsberichterstattung ist ab 2022 für große Unternehmen verpflichtend.",
            "Die EU-Taxonomie soll ökologisches Wirtschaften fördern, etwa durch eine bessere Stellung am Kapitalmarkt.",
            "Laut Lernunterlage gilt die verpflichtende Nachhaltigkeitsberichterstattung ab 2022 für alle Kleinstunternehmen ohne Ausnahme.",
            "Der European Green Deal verknüpft Nachhaltigkeit mit konkreten wirtschaftspolitischen Instrumenten, nicht nur mit einer unverbindlichen Floskel.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Schlüsselbegriff der europäischen Wirtschaftspolitik im EGD – so der Text."
            ),
            T(
                "Verpflichtung ab 2022 für große Unternehmen steht ausdrücklich im Text."
            ),
            T(
                "EU-Taxonomie und bessere Kapitalmarktstellung als Förderhebel für ökologisches Wirtschaften werden genannt."
            ),
            F(
                "Der Text beschränkt die Pflicht auf große Unternehmen – nicht auf alle Kleinstunternehmen."
            ),
            T(
                "Berichterstattungspflicht und Taxonomie zeigen: Nachhaltigkeit wird als Politikinstrument operationalisiert."
            ),
        ],
        "4/5",
    )
)

# --- 16 hard ---
cases.append(
    case(
        16,
        "Begriffsgeschichte: Forstwirtschaft und Erweiterung",
        [
            "Ursprünglich stammt der Begriff Nachhaltigkeit aus der Forstwirtschaft.",
            "In der Forstwirtschaft bedeutete Nachhaltigkeit, nicht mehr Bäume zu fällen als nachwachsen können, um dauerhaften Holzertrag und Bestandserhalt zu sichern.",
            "Dieser Grundgedanke hat sich zu einem umfassenderen Konzept entwickelt, das langfristige ökologische, soziale und ökonomische Entwicklungen umfasst.",
            "Weil der Begriff ursprünglich forstwirtschaftlich war, darf er laut Lernunterlage heute nicht auf Soziales oder Ökonomie bezogen werden.",
            "Die Bedeutung von „Nachhaltigkeit“ bleibt im Diskurs oft unklar, obwohl der Begriff häufig verwendet wird.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der forstwirtschaftliche Ursprung wird im Abschnitt „Definitionen von Nachhaltigkeit“ genannt."
            ),
            T(
                "Nicht mehr fällen als nachwächst – dauerhafter Ertrag und Bestandserhalt – ist die klassische Formel im Text."
            ),
            T(
                "Die Erweiterung auf ökologische, soziale und ökonomische Langfristentwicklung steht ausdrücklich da."
            ),
            F(
                "Gerade die Erweiterung über die Forstwirtschaft hinaus ist der Punkt. Die Herkunft begrenzt die heutige "
                "Begriffsverwendung im Text nicht auf Holz."
            ),
            T(
                "Der Text stellt voran: Der Begriff wird häufig verwendet, seine Bedeutung bleibt jedoch oft unklar."
            ),
        ],
        "4/5",
    )
)

# --- 17 very hard ---
cases.append(
    case(
        17,
        "Schwache Nachhaltigkeit und das Drei-Säulen-Modell",
        [
            "Das Konzept der schwachen Nachhaltigkeit basiert auf dem Drei-Säulen-Modell mit Ökologie, Sozialem und Ökonomie als gleichwertigen Säulen.",
            "Schwache Nachhaltigkeit geht davon aus, dass Verluste in einem Bereich durch Gewinne in einem anderen ausgeglichen werden können.",
            "Natürliche Ressourcen können prinzipiell durch menschliches Wissen oder Kapital ersetzt werden, solange die Gesamtsumme aller Kapitalarten konstant bleibt oder wächst.",
            "Zu den Kapitalarten zählen Naturkapital (z. B. Wälder, Bodenschätze, Biodiversität), Humankapital (Bildung und Qualifikation) und Sachkapital (Produktionsanlagen).",
            "Schwache Nachhaltigkeit lehnt jede Substituierbarkeit zwischen Naturkapital und anderen Kapitalformen strikt ab.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Drei gleichwertige Säulen und die Bezeichnung „schwache Nachhaltigkeit“ sind so im Text verankert."
            ),
            T(
                "Ausgleichbarkeit von Verlusten durch Gewinne in anderen Bereichen ist das Kernmerkmal schwacher Nachhaltigkeit."
            ),
            T(
                "Ersetzbarkeit natürlicher Ressourcen durch Wissen/Kapital bei konstantem oder wachsendem Gesamtkapital "
                "ist die zentrale Annahme."
            ),
            T(
                "Natur-, Human- und Sachkapital mit diesen Beispielen entsprechen dem Text."
            ),
            F(
                "Die strikte Ablehnung der Substituierbarkeit ist Kennzeichen der starken, nicht der schwachen Nachhaltigkeit. "
                "Hier ist die Aussage verdreht."
            ),
        ],
        "5/5",
    )
)

# --- 18 very hard ---
cases.append(
    case(
        18,
        "Starke Nachhaltigkeit",
        [
            "Starke Nachhaltigkeit betont die fundamentale Bedeutung ökologischer Systeme und Prozesse für Wirtschaft und Gesellschaft.",
            "Bestimmte ökologische Funktionen – etwa ein stabiles Klima – gelten als unverzichtbar und durch kein Maß an ökonomischem oder Humankapital ersetzbar.",
            "Starke Nachhaltigkeit lehnt die Gleichsetzung oder Substituierbarkeit natürlicher Ressourcen mit anderen Kapitalformen ab.",
            "Stattdessen fordert starke Nachhaltigkeit, natürliche Ökosysteme so weit wie möglich zu erhalten und zu schützen.",
            "Laut Lernunterlage ist starke Nachhaltigkeit zwar anspruchsvoller, aber für eine nachhaltige Wirtschaft überflüssig, weil schwache Nachhaltigkeit ausreicht.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Fundamentale Bedeutung ökologischer Systeme ist die Einstiegsformel starker Nachhaltigkeit."
            ),
            T(
                "Stabiles Klima als Beispiel einer nicht substituierbaren Funktion steht so im Text."
            ),
            T(
                "Ablehnung von Gleichsetzung/Substituierbarkeit unterscheidet starke von schwacher Nachhaltigkeit."
            ),
            T(
                "Erhalt und Schutz natürlicher Ökosysteme ist die geforderte Konsequenz."
            ),
            F(
                "Der Text nennt starke Nachhaltigkeit anspruchsvoller, aber notwendig, um eine nachhaltige Wirtschaft "
                "zu erreichen – nicht überflüssig."
            ),
        ],
        "5/5",
    )
)

# --- 19 very hard ---
cases.append(
    case(
        19,
        "Tricky Wortlaute: schwach vs. stark und Kreislauf vs. linear",
        [
            "Wenn Naturkapital durch Sachkapital ersetzt wird und die Summe aller Kapitalarten wächst, entspricht das eher der Logik schwacher als starker Nachhaltigkeit.",
            "Wer argumentiert, ein stabiles Klima lasse sich beliebig durch mehr Fabriken und Bildungsausgaben ersetzen, widerspricht der starken Nachhaltigkeit.",
            "„Take – Make – Waste“ und Kreislaufwirtschaft beschreiben in der Lernunterlage denselben Ressourcenfluss.",
            "Externe Kosten auf künftige Generationen abzuwälzen kann kurzfristig einzelwirtschaftlich lohnend erscheinen und dennoch Nachhaltigkeit untergraben.",
            "Brundtlands nachhaltige Entwicklung verlangt, Gegenwartsbedürfnisse so zu erfüllen, dass die künftige Erfüllungsfähigkeit des Wirtschafts- und Umweltsystems nicht gefährdet wird.",
        ],
        [True, True, False, True, True],
        [
            T(
                "Substitution bei wachsender/konstanter Gesamtkapitalmenge ist die schwache Logik; starke Nachhaltigkeit "
                "weist genau diese Ersetzbarkeit zurück."
            ),
            T(
                "Nicht-Ersetzbarkeit zentraler ökologischer Funktionen ist der Kern starker Nachhaltigkeit; die Aussage "
                "benennt den Widerspruch korrekt."
            ),
            F(
                "Take – Make – Waste ist linear; Kreislaufwirtschaft hält Ressourcen im System. Das sind Gegenmodelle, "
                "kein identischer Fluss."
            ),
            T(
                "Genau dieses Spannungsfeld – kurzfristiger Anreiz vs. Abwälzung auf Zukunft/Gesellschaft – trägt der "
                "Text zu externen Kosten."
            ),
            T(
                "Das ist die Brundtland-Definition nachhaltiger Entwicklung im Wortlaut der Lernunterlage."
            ),
        ],
        "5/5",
    )
)

# --- 20 very hard ---
cases.append(
    case(
        20,
        "Gesamtzusammenhang Nachhaltigkeit unter Prüfungsdruck",
        [
            "Ein System kann die Bedürfnisse aller Menschen decken wollen und dennoch nicht nachhaltig sein, wenn es dabei biophysische Grenzen dauerhaft überschreitet.",
            "Kreislaufwirtschaft allein ersetzt laut Lernunterlage jede Notwendigkeit sozialer Gerechtigkeit.",
            "Wenn relative Armutsfortschritte durch Bevölkerungswachstum weitgehend kompensiert werden, kann die absolute Zahl armer Menschen trotz einzelner Erfolge kaum sinken – wie im Faktenkasten zur 6,85-USD-Schwelle angedeutet.",
            "EU-Taxonomie und Nachhaltigkeitsberichterstattung zeigen, dass Nachhaltigkeit im EGD auch über Kapitalmarkt- und Offenlegungsregeln wirksam werden soll.",
            "Schwache Nachhaltigkeit hält Gesamtkapitalersatz für zulässig; starke Nachhaltigkeit hält bestimmte ökologische Funktionen für nicht substituierbar – beide Aussagen zugleich zu bejahen ist mit dem Text vereinbar.",
        ],
        [True, False, True, True, True],
        [
            T(
                "Nachhaltigkeit verlangt beides: soziale Bedürfnisdeckung und Einhalten biophysischer Grenzen. "
                "Bedürfnisdeckung bei Grenzverletzung reicht nicht."
            ),
            F(
                "Kreislaufwirtschaft ist ein ökologisch-ökonomisches Modell; soziale Gerechtigkeit bleibt ein eigenes "
                "Ziel der Transformation. Das eine ersetzt das andere nicht."
            ),
            T(
                "Der Faktenkasten erklärt die kaum veränderte Absolute seit den 1990ern genau über kompensierendes "
                "Bevölkerungswachstum."
            ),
            T(
                "Berichterstattungspflicht und Taxonomie/Kapitalmarktstellung sind die genannten EGD-Hebel."
            ),
            T(
                "Das ist die korrekte Gegenüberstellung beider Strömungen im Text; sie schließen sich als "
                "Diskurspositionen nicht aus, sondern markieren den Konflikt."
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
    for i, (a, e) in enumerate(zip(c["answer_key"], c["tactical_explanations"])):
        if a:
            assert e.endswith("Die Aussage ist daher wahr."), (c["case_id"], i, e[-40:])
        else:
            assert e.endswith("Die Aussage ist daher falsch."), (c["case_id"], i, e[-40:])

existing = json.loads(OUT.read_text(encoding="utf-8"))
# Drop any prior 2.2 rows, keep others (e.g. 2.1)
kept = [r for r in existing if r.get("subsection") != "2.2"]
merged = kept + cases
OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {len(cases)} §2.2 cases; bank now {len(merged)} total → {OUT.relative_to(ROOT)}")
print(
    "Difficulty mix:",
    {d: sum(1 for c in cases if c["difficulty_level"] == d) for d in sorted({c["difficulty_level"] for c in cases})},
)
print(
    "True/False:",
    sum(sum(c["answer_key"]) for c in cases),
    "true /",
    sum(5 - sum(c["answer_key"]) for c in cases),
    "false",
)
