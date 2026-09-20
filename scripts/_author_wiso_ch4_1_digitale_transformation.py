#!/usr/bin/env python3
"""Author WiSo Wirtschaft verstehen §4.1 (Digitale Transformation) practice cases.

Theory scope (Seiten 83–86, Abschnitt 4.1 bis vor §4.2):
Digitalisierung / digitale Transformation, ubiquitous computing,
Wirtschaftsinformatik-Einführung, drei Dimensionen (Backstage, Frontstage,
smarte Produkte/Dienstleistungen), Geschäftsprozess, Dokumentation/
Prozessmodell, Digitalisierungsstrategie / Digital Business / Erfolgskriterium.

Quality rules:
- German; WiSo multi-statement true/false format (5 statements)
- Rising difficulty: 5×1/5, then 2/5→5/5
- No book/page references in statements
- No pair statements (answering one must not determine another)
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch4.json"

CTX = (
    "Analysieren Sie die digitale Transformation und die Digitalisierung in "
    "Unternehmen. Bewerten Sie die folgenden Aussagen:"
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
        "subsection": "4.1",
        "case_id": f"CASE W4.1.{n:02d}",
        "title": title,
        "context": context,
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": expl,
        "difficulty_level": diff,
        "tier": "full",
    }


cases: list[dict] = []

# =============================================================================
# 1/5 — fünf leichtere Einstiegsfälle (Begriffsgrundlagen, Alltag, Überblick)
# =============================================================================

cases.append(
    case(
        1,
        "Begriff Digitalisierung und digitale Transformation",
        [
            "Unter Digitalisierung versteht man die Anwendung digitaler Informations- und Kommunikationstechnologie.",
            "Digitale Transformation bezeichnet die durch Digitalisierung vorangetriebene Veränderung in Teilen von Wirtschaft, Verwaltung und privatem Bereich.",
            "Digitalisierung betrifft ausschließlich die interne Kostenrechnung und lässt Kundenbeziehungen völlig unberührt.",
            "Digitale Transformation ist erreicht, sobald ein Unternehmen irgendwelche Hardware anschafft – unabhängig davon, ob sich Abläufe oder Angebote ändern.",
            "Informations- und Kommunikationstechnologie spielt bei vernetzten Alltagsszenarien wie Streaming oder smarter Haustechnik keine Rolle.",
        ],
        [True, True, False, False, False],
        [
            T(
                "Digitalisierung meint die Anwendung digitaler Informations- und Kommunikationstechnologie. "
                "Das ist der Ausgangspunkt: Technologie wird eingesetzt, und daraus können Veränderungen folgen."
            ),
            T(
                "Digitale Transformation ist die durch diese Anwendung vorangetriebene Veränderung – in Teilen der "
                "Wirtschaft, der Verwaltung und des privaten Bereichs. Transformation beschreibt den Wandel, nicht "
                "bloß Technikeinsatz als Selbstzweck."
            ),
            F(
                "Digitalisierung und digitale Transformation greifen auch in Kundenkontakt, Prozesse und Angebote ein – "
                "nicht nur in die Kostenrechnung. Die Verengung auf interne Kosten ist zu eng."
            ),
            F(
                "Maßgeblich ist die Anwendung digitaler Technologie und die dadurch angestoßene Veränderung. "
                "Bloße Hardwarebeschaffung ohne Wandel von Abläufen oder Angeboten erfüllt digitale Transformation nicht."
            ),
            F(
                "Vernetzte Alltagsszenarien setzen gerade Informations- und Kommunikationstechnologie voraus. "
                "Ohne sie wären Streaming, smarte Haustechnik und ähnliche Abläufe so nicht möglich."
            ),
        ],
        "1/5",
    )
)

cases.append(
    case(
        2,
        "Allgegenwärtigkeit digitaler Systeme",
        [
            "Im Alltag kommen Menschen an vielen Stellen mit digitalen Systemen in Kontakt, etwa bei Streaming, smarter Haustechnik oder vernetzten Geräten.",
            "Der englische Begriff „ubiquitous computing“ beschreibt die Allgegenwärtigkeit von Rechensystemen.",
            "Im Handel können Systeme automatisch erfassen, wie viele Produkte noch lagernd sind, und Nachbestellungen anstoßen.",
            "Digitale Systeme spielen im Unternehmenskontext keinerlei Rolle; sie betreffen ausschließlich den privaten Haushalt.",
            "In Produktionsanlagen sind digitale Systeme grundsätzlich ungeeignet, Prozessabläufe zu steuern oder Probleme zu erkennen.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Alltagsbeispiele wie Streaming-Dienste, intelligente Heizsysteme oder vernetzte Geräte zeigen, dass "
                "digitale Systeme den Tagesablauf durchziehen."
            ),
            T(
                "„Ubiquitous computing“ wird mit der Allgegenwärtigkeit von Rechensystemen übersetzt und als treffende "
                "Beschreibung der heutigen Lage verwendet."
            ),
            T(
                "Supermarkt- bzw. Handelssysteme zur Lagererfassung und möglichen Nachbestellung sind ein genanntes "
                "Unternehmensbeispiel digitaler Unterstützung."
            ),
            F(
                "Auch in Unternehmen sind digitale Systeme im Einsatz – etwa zur Lagererfassung, Positionierung von "
                "Lieferungen oder Steuerung von Produktionsabläufen. Die Beschränkung auf den privaten Haushalt ist falsch."
            ),
            F(
                "In der Produktion helfen Systeme gerade, Abläufe zu steuern und Probleme rasch zu erkennen und darauf "
                "zu reagieren. „Grundsätzlich ungeeignet“ widerspricht den Einsatzfeldern."
            ),
        ],
        "1/5",
    )
)

cases.append(
    case(
        3,
        "Technologie verändert unternehmerisches Handeln",
        [
            "Der Einsatz von Technologie verändert, wie Unternehmen betriebswirtschaftlich tätig werden.",
            "Dazu gehört unter anderem, wie Unternehmen interne Prozesse steuern, um möglichst effizient zu wirtschaften.",
            "Technologieeinsatz betrifft auch, wie Unternehmen mit Kunden in Kontakt bleiben und deren Anforderungen berücksichtigen.",
            "Digitalisierung und digitale Transformation werden im Zusammenhang mit diesen Veränderungen häufig genannt.",
            "Die Gestaltung und Markteinführung von Produkten und Dienstleistungen bleibt vom Technologiewandel unberührt.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Zentral ist: Technologie verändert die Art und Weise, wie Unternehmen betriebswirtschaftlich handeln – "
                "nicht nur einzelne Tools, sondern die Organisation des Wirtschaftens selbst."
            ),
            T(
                "Explizit genannt wird die Steuerung interner Prozesse mit dem Ziel möglichst effizienter Wirtschaftlichkeit. "
                "Das ist die innengerichtete Seite des Wandels."
            ),
            T(
                "Ebenso genannt wird der Kontakt zu Kunden sowie die Berücksichtigung von Anforderungen und Bedürfnissen. "
                "Digitalisierung betrifft also auch die Kundenschnittstelle."
            ),
            T(
                "Im Zusammenhang mit genau diesen Veränderungen fallen häufig die Begriffe Digitalisierung bzw. digitale "
                "Transformation. Die Terminologie knüpft an den beobachtbaren Wandel an."
            ),
            F(
                "Auch die Gestaltung und das Auf-den-Markt-Bringen von Produkten und Dienstleistungen gehören zu den "
                "genannten Veränderungsfeldern. Die Behauptung, dieser Bereich bleibe unberührt, widerspricht dem."
            ),
        ],
        "1/5",
    )
)

cases.append(
    case(
        4,
        "Geschäftsprozess – Grunddefinition",
        [
            "Ein Geschäftsprozess ist ein komplexer Arbeitsablauf aus mehreren logisch zusammenhängenden Aktivitäten.",
            "Ein Geschäftsprozess leistet für das Unternehmen einen Beitrag (Wert) zu einem betriebswirtschaftlichen Ziel.",
            "Geschäftsprozesse können wiederholt durchgeführt werden.",
            "Geschäftsprozesse haben einen klar definierten Anfang und ein oder mehrere definierte Enden.",
            "Ein Geschäftsprozess ist definitionsgemäß ein einmaliges Projektereignis ohne Bezug zu betriebswirtschaftlichen Zielen.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Die Definition stellt auf einen komplexen Arbeitsablauf ab, der aus mehreren logisch zusammenhängenden "
                "Aktivitäten besteht."
            ),
            T(
                "Wesentlich ist der Wertbeitrag: Der Ablauf leistet einen Beitrag zu einem betriebswirtschaftlichen Ziel."
            ),
            T(
                "Wiederholbarkeit wird ausdrücklich genannt. Geschäftsprozesse sind keine einmaligen Zufallsereignisse, "
                "sondern erneut ausführbare Abläufe."
            ),
            T(
                "Geschäftsprozesse haben einen klar definierten Anfang und ein oder mehrere definierte Enden. Mehrere "
                "Enden sind also zulässig."
            ),
            F(
                "Geschäftsprozesse sind wiederholbare, zielbezogene Abläufe – kein einmaliges Projektereignis ohne "
                "betriebswirtschaftlichen Zielbezug. Die Aussage verdreht die Definition."
            ),
        ],
        "1/5",
    )
)

cases.append(
    case(
        5,
        "Drei Dimensionen der Digitalisierung im Überblick",
        [
            "Veränderungen durch Digitalisierung lassen sich im Unternehmenskontext anhand von drei Dimensionen veranschaulichen.",
            "Eine Dimension betrifft Geschäftsprozesse hinter den Kulissen (Backstage), die die Wertschöpfung unterstützen.",
            "Eine weitere Dimension betrifft die Verbindung zwischen Kunden und Unternehmen (Frontstage).",
            "Unternehmen können sich gezielt auf eine oder mehrere dieser Dimensionen konzentrieren.",
            "Die Frontstage-Dimension meint vor allem die interne Lagersteuerung hinter den Kulissen und nicht die Kundenverbindung.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Im Unternehmenskontext werden Möglichkeiten der Veränderung anhand von drei Dimensionen der "
                "Digitalisierung dargestellt."
            ),
            T(
                "Die erste Dimension sind Geschäftsprozesse hinter den Kulissen (Backstage), die die Wertschöpfung "
                "unterstützen und zunehmend digital gesteuert bzw. erweitert werden."
            ),
            T(
                "Die zweite Dimension – Frontstage – versteht sich als Verbindung zwischen Kunden und Unternehmen und "
                "bildet den externen Fokus."
            ),
            T(
                "Unternehmen können entlang der drei Dimensionen tätig werden und sich auf eine oder mehrere davon "
                "konzentrieren. Daraus lässt sich eine Digitalisierungsstrategie ableiten."
            ),
            F(
                "Frontstage ist der externe Fokus und die Kundenverbindung. Interne Lagersteuerung gehört zur Backstage. "
                "Die Aussage vertauscht die Dimensionen."
            ),
        ],
        "1/5",
    )
)

# =============================================================================
# 2/5 — Dimensionen und Prozesswerkzeuge
# =============================================================================

cases.append(
    case(
        6,
        "Backstage: interne Wertschöpfung und Prozesse",
        [
            "Der interne Fokus eines Unternehmens liegt auf der wirtschaftlichen Nutzung von Ressourcen, um Produkte und Dienstleistungen zu erstellen.",
            "Wertschöpfung bedeutet in diesem Zusammenhang, dass ein Wert geschaffen wird.",
            "Wenn Arbeitsschritte digital unterstützt werden, entsteht ein digital unterstützter Geschäftsprozess.",
            "Backstage-Geschäftsprozesse unterstützen die Wertschöpfung und werden zunehmend durch Systeme erweitert und gesteuert.",
            "Backstage-Digitalisierung meint vor allem die öffentliche Werbung gegenüber Endkunden und nicht die internen Abläufe.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Intern geht es um die wirtschaftliche Nutzung von Ressourcen zur Erstellung von Produkten und "
                "Dienstleistungen. Das ist der innengerichtete Fokus der ersten Dimension."
            ),
            T(
                "Ausdrücklich formuliert: Es soll ein Wert geschaffen werden – anders gesagt findet Wertschöpfung statt."
            ),
            T(
                "Durch digitale Unterstützung von Arbeitsschritten entsteht ein digital unterstützter Geschäftsprozess. "
                "Das ist die konkrete Ausprägung der ersten Dimension."
            ),
            T(
                "Backstage-Geschäftsprozesse unterstützen die Wertschöpfung und werden zunehmend durch Systeme "
                "erweitert und gesteuert."
            ),
            F(
                "Backstage meint gerade die Prozesse hinter den Kulissen – intern, nicht die kundengerichtete Werbung. "
                "Kundengerichtetes liegt in der Frontstage-Dimension."
            ),
        ],
        "2/5",
    )
)

cases.append(
    case(
        7,
        "Frontstage: Kundenorientierung und Kundenarten",
        [
            "Die Frontstage-Dimension versteht sich als Verbindung zwischen Kunden und Unternehmen und bildet den externen Fokus.",
            "Im Vordergrund stehen die Anforderungen und Bedürfnisse der Nutzerinnen und Nutzer.",
            "Als Kunde kommt je nach Umfeld eine Privatperson, ein Unternehmen oder auch eine öffentliche Institution infrage.",
            "Digitalisierung bietet neue Potenziale, Nutzerwünsche effizienter und gezielter zu berücksichtigen.",
            "Frontstage-Digitalisierung betrifft ausschließlich die interne Lagerverwaltung und hat keinen Kundenbezug.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Frontstage wird ausdrücklich als Verbindung Kunde–Unternehmen und als externer Fokus beschrieben."
            ),
            T(
                "Bei der Gestaltung von Angeboten im Sinne des Kunden liegen Anforderungen und Bedürfnisse der "
                "Nutzerinnen und Nutzer im Vordergrund."
            ),
            T(
                "Wichtig: „Kunde“ ist nicht nur die Privatperson. Je nach Umfeld kann es eine Privatperson, ein "
                "Unternehmen oder eine öffentliche Institution sein."
            ),
            T(
                "Digitalisierung bietet neue Potenziale, Wünsche der Nutzer effizienter und gezielter zu berücksichtigen."
            ),
            F(
                "Lagerverwaltung und interne Abläufe gehören zur Backstage. Frontstage hat gerade den Kundenbezug; "
                "die Aussage vertauscht die Dimensionen."
            ),
        ],
        "2/5",
    )
)

cases.append(
    case(
        8,
        "Dokumentation und Prozessmodell",
        [
            "Das Festhalten eines Geschäftsprozesses in einem digitalen System wird auch als Dokumentation bezeichnet.",
            "Dokumentation hilft Mitarbeitenden, den Prozess zu kommunizieren.",
            "Ein visuelles Abbild eines Prozesses wird auch Prozessmodell genannt.",
            "Ein Prozessmodell kann neuen Mitarbeitenden – etwa im Praktikum – einen ersten Überblick über einen zentralen Ablauf liefern.",
            "Ein Prozessmodell ist ausschließlich für externe Wirtschaftsprüfer gedacht und darf Mitarbeitenden im Unternehmen nicht gezeigt werden.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Das Festhalten eines Prozesses durch ein digitales System wird ausdrücklich als Dokumentation bezeichnet."
            ),
            T(
                "Dokumentation hilft Mitarbeitenden im Unternehmen, den Prozess zu kommunizieren – sie macht den Ablauf "
                "teilbar und nachvollziehbar."
            ),
            T(
                "Ein visuelles Abbild wird auch Prozessmodell genannt. Das ist die anschauliche Darstellungsform des "
                "dokumentierten Ablaufs."
            ),
            T(
                "Gerade für neue Mitarbeitende – etwa im Praktikum – kann ein Prozessmodell einen ersten Überblick über "
                "einen zentralen Ablauf liefern."
            ),
            F(
                "Prozessmodelle dienen gerade der internen Kommunikation und Orientierung – etwa für neue Mitarbeitende. "
                "Eine Beschränkung auf externe Prüfer widerspricht dem Zweck."
            ),
        ],
        "2/5",
    )
)

cases.append(
    case(
        9,
        "Smarte Produkte und Dienstleistungen",
        [
            "Die dritte Dimension der Digitalisierung befasst sich damit, wie das Ergebnis der Wertschöpfung durch Technologie erweitert werden kann.",
            "„Smart“ bezieht sich in diesem Zusammenhang auf die Digitalisierung von Produkten und Dienstleistungen.",
            "Digitalisierung eines Produkts kann im einfachsten Fall eine Ergänzung oder Erweiterung darstellen.",
            "Im besten Fall kann Digitalisierung das Erlebnis des Kunden nachhaltig prägen und die Bindung zum Produkt steigern.",
            "Die dritte Dimension betrifft ausschließlich die Gehaltsabrechnung der Mitarbeitenden und nicht Produkte oder Dienstleistungen.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Die dritte Dimension richtet sich auf das Ergebnis der Wertschöpfung und dessen Erweiterung durch "
                "Technologie – also auf Produkte und Dienstleistungen selbst."
            ),
            T(
                "„Smart“ meint hier die Digitalisierung von Produkten und Dienstleistungen des Unternehmens."
            ),
            T(
                "Im einfachsten Fall handelt es sich um eine Ergänzung oder Erweiterung – etwa eine digitale Anleitung "
                "als PDF zu einem analogen Produkt."
            ),
            T(
                "Im besten Fall kann Digitalisierung das Erlebnis des Kunden nachhaltig prägen und die Bindung steigern – "
                "ein positiv digitalisiertes Kundenerlebnis."
            ),
            F(
                "Die dritte Dimension richtet sich auf Produkte und Dienstleistungen als Ergebnis der Wertschöpfung – "
                "nicht auf die Gehaltsabrechnung."
            ),
        ],
        "2/5",
    )
)

# =============================================================================
# 3/5 — Beispiele und Zusammenhänge
# =============================================================================

cases.append(
    case(
        10,
        "Wirtschaftsinformatik und digitale Systeme in Unternehmen",
        [
            "Die Wirtschaftsinformatik beschäftigt sich damit, wie Technologie unterstützen kann und welche Auswirkungen das auf Gesellschaft, Wirtschaft und persönliches Leben hat.",
            "Lieferdienste können Positionierungs- und Benachrichtigungssysteme nutzen, um den Standort möglichst zeitnah mitzuteilen.",
            "Digitale Systeme werden in Unternehmen eingesetzt, um Arbeitsschritte zu automatisieren, zu optimieren bzw. zu unterstützen.",
            "Es fällt zunehmend schwer, Lebens- oder Arbeitsbereiche zu finden, in denen keinerlei Technologiekontakt stattfindet.",
            "Digitale Systeme dienen in Unternehmen ausschließlich der Unterhaltung der Belegschaft und haben keinen Bezug zu Automatisierung oder Optimierung.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Genau diese Doppelfrage – Unterstützung durch Technologie und Auswirkungen auf Gesellschaft, Wirtschaft "
                "und persönliches Leben – umreißt das Themenfeld der Wirtschaftsinformatik."
            ),
            T(
                "Positionierungs- und Benachrichtigungssysteme bei Lieferdiensten sind ein Beispiel für den Einsatz "
                "digitaler Systeme im Betriebsalltag."
            ),
            T(
                "Digitale Systeme werden gerade eingesetzt, um Arbeitsschritte zu automatisieren, zu optimieren bzw. "
                "zu unterstützen."
            ),
            T(
                "Gerade weil Technologie so weit verbreitet ist, fällt es schwer, Bereiche ohne jeden Technologiekontakt "
                "zu identifizieren."
            ),
            F(
                "Digitale Systeme werden gerade für Automatisierung, Optimierung und Unterstützung betrieblicher Abläufe "
                "eingesetzt. „Nur Unterhaltung ohne Betriebsbezug“ ist das Gegenteil der Beschreibung."
            ),
        ],
        "3/5",
    )
)

cases.append(
    case(
        11,
        "Beispiel digitaler Geschäftsprozess (Online-Bestellung)",
        [
            "Bei einer Online-Bestellung können im Hintergrund sofort Schritte veranlasst werden, damit das Produkt rasch zum Kunden kommt.",
            "Ein internes System kann die Bestellung zusammenfassen und eine freie Mitarbeiterin oder einen freien Mitarbeiter benachrichtigen.",
            "Detailschritte können Lagerposition abrufen, Produkt auswählen und die Bestellung für Abholung oder Versand vorbereiten umfassen.",
            "Je nach Lagerstand können intern weitere Prozesse angestoßen und der Kunde über den Status informiert werden.",
            "Der digital gestützte Bestellprozess hat definitionsgemäß weder einen Anfang noch ein Ende.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Das Bestellbeispiel zeigt: Nach der Online-Aufgabe werden im Hintergrund Schritte angestoßen, um das "
                "Produkt möglichst rasch bereitzustellen."
            ),
            T(
                "Ein internes System fasst die Bestellung zusammen und benachrichtigt die nächste freie Person, die sich "
                "um weitere Schritte kümmert."
            ),
            T(
                "Zu den Detailschritten zählen unter anderem Lagerposition abrufen, Produkt auswählen und Vorbereitung "
                "je nachdem, ob abgeholt oder versendet werden muss."
            ),
            T(
                "Im Bestellbeispiel können je nach Lagerstand weitere Prozesse angestoßen und Statusinformationen an den "
                "Kunden gegeben werden."
            ),
            F(
                "Geschäftsprozesse haben einen klar definierten Anfang und ein oder mehrere definierte Enden. Im "
                "Bestellbeispiel endet der Ablauf etwa mit Lieferung oder Abholung – nicht „weder Anfang noch Ende“."
            ),
        ],
        "3/5",
    )
)

cases.append(
    case(
        12,
        "Kundenwünsche gezielter berücksichtigen",
        [
            "Beim Schuhkauf ist die passende Größe eine zentrale Anforderung der Nutzerinnen und Nutzer.",
            "Falsche Größen beim Onlinekauf können Zeit und Nerven kosten und frustrierend sein.",
            "Ein 3D-Fußscanner kann Anforderungen der Nutzer festhalten, indem er ein 3D-Bild der Füße erzeugt und online im Kundenkonto speichert.",
            "Vor Ort und bei einer späteren Online-Bestellung kann der digitale Fußabdruck mit dem gewünschten Schuhmodell abgeglichen werden.",
            "Frontstage-Potenziale der Digitalisierung bestehen nur offline im Ladengeschäft und lassen sich online grundsätzlich nicht nutzen.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Die Schuhgröße und Passformfragen stehen als zentrale Nutzeranforderungen im Beispiel. Das ist "
                "Frontstage-Logik: Bedürfnisse zuerst."
            ),
            T(
                "Falsche Online-Größen werden ausdrücklich als zeit- und nervenraubend sowie frustrierend beschrieben."
            ),
            T(
                "Der 3D-Fußscanner erzeugt ein 3D-Bild und speichert es online im Kundenkonto – digitale Erfassung von "
                "Nutzeranforderungen."
            ),
            T(
                "Gerade der Abgleich des digitalen Fußabdrucks mit dem gewünschten Schuhmodell – vor Ort und online – "
                "ist der Zweck des Service, um die Passform zu prüfen."
            ),
            F(
                "Das Beispiel verbindet ausdrücklich Vor-Ort-Service und Smartphone-App bzw. Online-Bestellung. "
                "Frontstage-Potenziale sind online und offline nutzbar."
            ),
        ],
        "3/5",
    )
)

cases.append(
    case(
        13,
        "Digitalisierungsstrategie und Digital Business",
        [
            "Aus der gezielten Konzentration auf eine oder mehrere Digitalisierungsdimensionen lässt sich eine Digitalisierungsstrategie ableiten.",
            "Eine Digitalisierungsstrategie kann dem Unternehmen helfen, zukünftige Entscheidungen an einer klaren Vision auszurichten.",
            "Im Gesamten führt dies zur Digitalisierung des Unternehmens – dem „Digital Business“.",
            "Erfolgreiche digitale Transformation erweitert sinnvolle Aspekte wie Arbeitsschrittfolgen, Kommunikation oder Kundenbedürfnisse durch digitale Technologien.",
            "„Digital Business“ bedeutet lediglich, dass das Unternehmen eine Visitenkarten-Website besitzt, ohne dass Prozesse, Kundenbeziehung oder Angebote digital weiterentwickelt werden.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Unternehmen können sich auf eine oder mehrere Dimensionen konzentrieren; daraus wird eine "
                "Digitalisierungsstrategie abgeleitet."
            ),
            T(
                "Die Strategie soll helfen, zukünftige Entscheidungen zu treffen und einer klaren Vision zu folgen."
            ),
            T(
                "Im Gesamten führt das zur Digitalisierung des Unternehmens, bezeichnet als „Digital Business“."
            ),
            T(
                "Erfolg basiert darauf, sinnvolle Aspekte durch digitale Technologien zu erweitern – etwa Abfolge von "
                "Arbeitsschritten, Kommunikation und Berücksichtigung von Kundenbedürfnissen."
            ),
            F(
                "Digital Business bezeichnet die Digitalisierung des Unternehmens entlang der Dimensionen und Strategie – "
                "nicht bloß eine Website ohne inhaltlichen Wandel von Prozessen, Kundenbeziehung oder Angeboten."
            ),
        ],
        "3/5",
    )
)

# =============================================================================
# 4/5 — feinere Unterscheidungen, Fallen, Dimensionstrennung
# =============================================================================

cases.append(
    case(
        14,
        "Feine Unterschiede: Prozessenden und Wertbeitrag",
        [
            "Ein Geschäftsprozess darf laut Definition nur genau ein einziges Ende haben; mehrere Enden sind ausgeschlossen.",
            "Wiederholbarkeit gehört zu den Merkmalen von Geschäftsprozessen.",
            "Ohne Beitrag zu einem betriebswirtschaftlichen Ziel fehlt einem Ablauf das zentrale Wertmerkmal eines Geschäftsprozesses.",
            "Logisch zusammenhängende Aktivitäten sind ein Definitionsbestandteil des Geschäftsprozesses.",
            "Dokumentation eines Prozesses dient vor allem dazu, Abläufe vor den Mitarbeitenden geheim zu halten.",
        ],
        [False, True, True, True, False],
        [
            F(
                "Die Definition spricht von einem oder mehreren definierten Enden. Mehrere Enden sind also zulässig – "
                "etwa alternative Abschlüsse desselben Ablaufs. „Nur genau ein Ende“ ist zu eng."
            ),
            T(
                "Geschäftsprozesse können wiederholt durchgeführt werden. Wiederholbarkeit ist Teil der Definition."
            ),
            T(
                "Der Ablauf muss einen Beitrag (Wert) zu einem betriebswirtschaftlichen Ziel leisten. Fehlt dieser "
                "Ziel- und Wertbezug, fehlt das Kernmerkmal."
            ),
            T(
                "Es handelt sich um mehrere logisch zusammenhängende Aktivitäten – der Zusammenhang ist definitionsbildend."
            ),
            F(
                "Dokumentation hilft Mitarbeitenden, den Prozess zu kommunizieren – nicht, Abläufe geheim zu halten. "
                "Kommunikation und Nachvollziehbarkeit sind der Zweck."
            ),
        ],
        "4/5",
    )
)

cases.append(
    case(
        15,
        "Dimensionen sauber trennen",
        [
            "Die Digitalisierung der Kundenbeziehung (Frontstage) ersetzt vollständig die Notwendigkeit interner Geschäftsprozesse (Backstage).",
            "Ein digital unterstützter Bestellprozess im Lager und in der Kommissionierung ist primär der Backstage-Dimension zuzuordnen.",
            "Ein Service, der Nutzeranforderungen per App und Scanner erfasst, um Passformwünsche gezielter zu erfüllen, gehört zur Frontstage-Logik.",
            "Die Erweiterung eines analogen Produkts um eine digitale Erkundungsmission betrifft die Dimension der Produkt- bzw. Dienstleistungsdigitalisierung.",
            "Unternehmen müssen stets alle drei Dimensionen gleichzeitig und ohne Schwerpunktsetzung maximal ausbauen, sonst entsteht keine Digitalisierungsstrategie.",
        ],
        [False, True, True, True, False],
        [
            F(
                "Die Dimensionen ergänzen einander; Frontstage ersetzt Backstage nicht. Interne Prozesse bleiben für die "
                "Wertschöpfung nötig, auch wenn die Kundenschnittstelle digitalisiert wird."
            ),
            T(
                "Lager, Kommissionierung und interne Bestellabwicklung sind Prozesse hinter den Kulissen – klassische "
                "Backstage-Unterstützung der Wertschöpfung."
            ),
            T(
                "Erfassung und gezielte Berücksichtigung von Nutzeranforderungen ist externer Fokus und Kundenorientierung – "
                "Frontstage."
            ),
            T(
                "Die Erweiterung des Produkterlebnisses selbst ist die dritte Dimension: Digitalisierung von Produkt bzw. "
                "Dienstleistung."
            ),
            F(
                "Strategie kann aus der gezielten Konzentration auf eine oder mehrere Dimensionen abgeleitet werden. "
                "Zwang zu allen drei Dimensionen ohne Schwerpunkt ist nicht die beschriebene Logik."
            ),
        ],
        "4/5",
    )
)

cases.append(
    case(
        16,
        "Reichweite der Digitalisierung und Begriffsfalle",
        [
            "Digitale Transformation umfasst Veränderungen nicht nur in der Wirtschaft, sondern auch in Verwaltung und privatem Bereich.",
            "Informations- und Kommunikationstechnologie ist Voraussetzung vieler vernetzter Alltags- und Unternehmensszenarien.",
            "„Ubiquitous computing“ betont die Allgegenwärtigkeit von Rechensystemen.",
            "Digitalisierung meint nur die Anschaffung von Hardware; ob sich Abläufe oder Angebote ändern, ist für den Begriff unerheblich.",
            "Allgegenwärtigkeit digitaler Systeme gilt ausschließlich für Smartphones im Privatbesitz und nicht für Unternehmenssysteme.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Die Definition nennt ausdrücklich Teile der Wirtschaft, der Verwaltung und des privaten Bereichs als Orte "
                "der durch Digitalisierung vorangetriebenen Veränderung."
            ),
            T(
                "Ohne IKT wären die beschriebenen vernetzten Szenarien nicht möglich – IKT ist die technische Voraussetzung."
            ),
            T(
                "Der Begriff wird gerade als Allgegenwärtigkeit von Rechensystemen eingeführt und als treffend bewertet."
            ),
            F(
                "Digitalisierung ist die Anwendung digitaler IKT und die damit verbundene Veränderung. Bloße "
                "Hardwarebeschaffung ohne Bezug zu Anwendung und Wandel trifft den Begriff nicht."
            ),
            F(
                "Allgegenwärtigkeit bezieht sich auf Rechensysteme insgesamt – Alltag und Unternehmen. Die Verengung auf "
                "private Smartphones ist zu eng."
            ),
        ],
        "4/5",
    )
)

cases.append(
    case(
        17,
        "Smart vs. bloße Ergänzung",
        [
            "Eine digitale PDF-Anleitung zu einem analogen Baukasten ist ein Beispiel für eine einfache digitale Ergänzung.",
            "Eine digitale Erkundungsmission, die je nach Verlauf unterschiedliche Bauweisen ermöglicht, kann das Erlebnis „smart“ erweitern.",
            "Eine smarte Erweiterung kann die Bindung zum Produkt steigern und ein positiv digitalisiertes Kundenerlebnis schaffen.",
            "Jede digitale Datei zu einem Produkt ist automatisch die maximale Form der Erlebnisdigitalisierung.",
            "Wer ausschließlich Frontstage digitalisiert, hat damit zwingend auch Backstage-Prozesse und Produkt-Digitalisierung bereits vollständig abgedeckt.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Die PDF-Anleitung wird ausdrücklich als einfache digitale Ergänzung zum analogen Produkt genannt."
            ),
            T(
                "Die digitale Erkundungsmission mit unterschiedlichem Verlauf ist das Beispiel für eine Erweiterung, die "
                "sich „smart“ anfühlen kann."
            ),
            T(
                "Durch die smarte Erweiterung kann die Bindung steigen und ein positiv digitalisiertes Kundenerlebnis entstehen."
            ),
            F(
                "Nicht jede digitale Datei ist die maximale Form. Die Stufung von einfacher Ergänzung bis erlebnisprägender "
                "Erweiterung zeigt Abstufungen; Maximum ist nicht automatisch erreicht."
            ),
            F(
                "Die Dimensionen sind unterscheidbar und nicht automatisch mitabgedeckt. Konzentration auf eine Dimension "
                "ersetzt nicht die anderen."
            ),
        ],
        "4/5",
    )
)

# =============================================================================
# 5/5 — Prüfungsdruck / Synthese
# =============================================================================

cases.append(
    case(
        18,
        "Prüfungsdruck: Dimensionen, Strategie und Erfolgskriterium",
        [
            "Eine Digitalisierungsstrategie entsteht nur dann, wenn alle drei Dimensionen gleichzeitig und ohne Schwerpunktsetzung bearbeitet werden.",
            "Erfolgreiche digitale Transformation erweitert sinnvolle Aspekte wie Arbeitsschrittfolgen, Kommunikation oder Kundenbedürfnisse durch digitale Technologien.",
            "„Digital Business“ bezeichnet im Gesamten die Digitalisierung des Unternehmens infolge dieser strategischen Ausrichtung.",
            "Als Kunde im Frontstage-Sinn kommt ausschließlich eine Privatperson infrage; Unternehmen und öffentliche Institutionen scheiden aus.",
            "Backstage, Frontstage und Produkt-Digitalisierung sind drei unterscheidbare Angriffsflächen für Digitalisierungsvorhaben; sie zu vermengen, erschwert eine klare Strategie.",
        ],
        [False, True, True, False, True],
        [
            F(
                "Strategie kann aus der gezielten Konzentration auf eine oder mehrere Dimensionen abgeleitet werden. "
                "Zwang zu allen drei Dimensionen ohne Schwerpunkt ist nicht die beschriebene Logik."
            ),
            T(
                "Genannt werden unter anderem Abfolge von Arbeitsschritten, Kommunikation und Berücksichtigung von "
                "Kundenbedürfnissen als sinnvolle Erweiterungsfelder durch digitale Technologien."
            ),
            T(
                "Im Gesamten führt die dimensionale/strategische Arbeit zur Digitalisierung des Unternehmens – „Digital Business“."
            ),
            F(
                "Kunde kann Privatperson, Unternehmen oder öffentliche Institution sein. Die Verengung auf Privatpersonen "
                "ist falsch."
            ),
            T(
                "Die drei Dimensionen strukturieren gerade unterschiedliche Vorhaben. Vermengung ohne Unterscheidung macht "
                "Schwerpunktsetzung und Strategieableitung schwerer."
            ),
        ],
        "5/5",
    )
)

cases.append(
    case(
        19,
        "Kundenbegriff, Enden und interne Steuerung unter Prüfungsdruck",
        [
            "Weil Frontstage kundenorientiert ist, kann der Kunde begrifflich nur eine Privatperson sein; Unternehmen und öffentliche Institutionen scheiden aus.",
            "Ein Geschäftsprozess mit den alternativen Abschlüssen „Versand“ und „Abholung“ verletzt die Definition, weil nur ein Ende erlaubt wäre.",
            "Digitale Systeme können intern je nach Lagerstand weitere Prozesse anstoßen und den Kunden über den Status informieren.",
            "Dokumentation und Prozessmodell dienen unter anderem der Kommunikation und dem Überblick.",
            "Wertschöpfung im internen Fokus meint, dass aus dem Ressourceneinsatz Produkte und Dienstleistungen erstellt und damit Wert geschaffen wird.",
        ],
        [False, False, True, True, True],
        [
            F(
                "Ausdrücklich: Kunde kann Privatperson, Unternehmen oder öffentliche Institution sein. Die Verengung auf "
                "Privatpersonen ist falsch."
            ),
            F(
                "Ein oder mehrere definierte Enden sind erlaubt. Versand und Abholung als alternative Enden passen zur "
                "Definition und verletzen sie nicht."
            ),
            T(
                "Im Bestellbeispiel können je nach Lagerstand weitere Prozesse angestoßen und Statusinformationen an den "
                "Kunden gegeben werden."
            ),
            T(
                "Dokumentation hilft zu kommunizieren; Prozessmodelle geben Überblick. Das sind zentrale Zwecke der "
                "digitalen Prozessabbildung."
            ),
            T(
                "Interner Fokus: wirtschaftliche Ressourcennutzung zur Erstellung von Produkten und Dienstleistungen; "
                "es soll Wert geschaffen werden (Wertschöpfung)."
            ),
        ],
        "5/5",
    )
)

cases.append(
    case(
        20,
        "Gesamtzusammenhang digitale Transformation",
        [
            "Technologieeinsatz verändert interne Prozesse, Kundenkontakt und die Gestaltung von Marktangeboten – diese Felder gemeinsam beschreiben den unternehmerischen Wandel der digitalen Transformation.",
            "Wenn ein Unternehmen sinnvolle Abläufe digital erweitert, die Kundenschnittstelle verbessert und Produkte erlebbarer macht, bewegt es sich entlang der drei Dimensionen Richtung Digital Business.",
            "Erfolgreiche digitale Transformation besteht darin, Technologie um ihrer selbst willen einzuführen, auch wenn Nutzen und Kundenerlebnis dadurch sinken.",
            "Eine Verengung der Digitalisierung auf reine Unterhaltungselektronik ohne Bezug zu Unternehmensprozessen oder Verwaltung widerspricht der definierten Reichweite.",
            "Ein digital unterstützter Geschäftsprozess entsteht erst dann, wenn Arbeitsschritte durch Systeme erweitert bzw. gesteuert werden – nicht schon durch bloße Absichtserklärungen ohne Technikeinsatz.",
        ],
        [True, True, False, True, True],
        [
            T(
                "Genannt werden Steuerung interner Prozesse, Kundenkontakt/Bedürfnisse sowie Gestaltung und Markteinführung "
                "von Produkten und Dienstleistungen – die Veränderungsfelder des unternehmerischen Wandels."
            ),
            T(
                "Konzentration auf Dimensionen, Strategieableitung und Digitalisierung des Unternehmens (Digital Business) "
                "bilden den beschriebenen Gesamtbogen."
            ),
            F(
                "Erfolg heißt sinnvolle Erweiterung und innovatives Stärken von Nutzen und Erlebnis – nicht Technik um "
                "ihrer selbst willen bei sinkendem Nutzen."
            ),
            T(
                "Die Definition umfasst Wirtschaft, Verwaltung und privaten Bereich sowie Unternehmensbeispiele. Die "
                "Verengung auf reine Unterhaltungselektronik ohne Prozess- und Verwaltungsbezug ist unzutreffend."
            ),
            T(
                "Ein digital unterstützter Geschäftsprozess setzt voraus, dass Arbeitsschritte digital unterstützt und "
                "durch Systeme erweitert bzw. gesteuert werden. Bloße Absicht ohne Technikeinsatz genügt nicht."
            ),
        ],
        "5/5",
    )
)


def main() -> None:
    assert len(cases) == 20
    diffs = [c["difficulty_level"] for c in cases]
    assert diffs[:5] == ["1/5"] * 5, diffs[:5]
    assert diffs[-3:] == ["5/5"] * 3, diffs[-3:]
    OUT.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(cases)} cases → {OUT}")


if __name__ == "__main__":
    main()
