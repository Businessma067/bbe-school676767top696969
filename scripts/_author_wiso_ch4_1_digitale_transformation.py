#!/usr/bin/env python3
"""Author WiSo Wirtschaft verstehen §4.1 (Digitale Transformation) practice cases.

Theory scope: Digitalisierung / digitale Transformation, drei Dimensionen
(Backstage, Frontstage, smarte Produkte/Dienstleistungen), Geschäftsprozess,
Digitalisierungsstrategie / Digital Business (Seiten 83–86, Abschnitt 4.1).
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

# --- 01 easy ---
cases.append(
    case(
        1,
        "Begriff Digitalisierung und digitale Transformation",
        [
            "Unter Digitalisierung versteht man die Anwendung digitaler Informations- und Kommunikationstechnologie.",
            "Digitale Transformation bezeichnet die durch Digitalisierung vorangetriebene Veränderung in Teilen von Wirtschaft, Verwaltung und privatem Bereich.",
            "Digitalisierung beschränkt sich ausschließlich auf die Produktion materieller Güter und berührt weder Verwaltung noch Privatleben.",
            "Ohne jede Anwendung digitaler Technologie kann dennoch von Digitalisierung im beschriebenen Sinne gesprochen werden.",
            "Digitale Transformation bedeutet lediglich, dass ein Unternehmen eine Website besitzt, ohne dass sich Prozesse oder Angebote ändern.",
        ],
        [True, True, False, False, False],
        [
            T(
                "Digitalisierung meint die Anwendung digitaler Informations- und Kommunikationstechnologie. "
                "Das ist der Ausgangspunkt: Technologie wird eingesetzt, und daraus können Veränderungen folgen."
            ),
            T(
                "Digitale Transformation ist die durch diese Anwendung vorangetriebene Veränderung – in Teilen der "
                "Wirtschaft, der Verwaltung und des privaten Bereichs. Transformation beschreibt also den Wandel, "
                "nicht bloß den bloßen Technikeinsatz als Selbstzweck."
            ),
            F(
                "Die Reichweite reicht über materielle Güterproduktion hinaus: ausdrücklich genannt werden Teile der "
                "Wirtschaft, der Verwaltung und des privaten Bereichs. Eine Beschränkung allein auf Güterproduktion "
                "ist zu eng."
            ),
            F(
                "Digitalisierung setzt gerade die Anwendung digitaler Informations- und Kommunikationstechnologie "
                "voraus. Ohne diese Anwendung fehlt der definitorische Kern; „Digitalisierung ohne digitale Technologie“ "
                "ist widersprüchlich."
            ),
            F(
                "Eine Website allein ist keine hinreichende Beschreibung digitaler Transformation. Es geht um "
                "Veränderung durch Technologieeinsatz in Prozessen, Kundenbeziehung und Angeboten – nicht um das "
                "bloße Vorhandensein einer digitalen Visitenkarte ohne inhaltlichen Wandel."
            ),
        ],
        "1/5",
    )
)

# --- 02 easy ---
cases.append(
    case(
        2,
        "Allgegenwärtigkeit digitaler Systeme",
        [
            "Im Alltag kommen Menschen an vielen Stellen mit digitalen Systemen in Kontakt, etwa bei Streaming, smarter Haustechnik oder vernetzten Geräten.",
            "Der englische Begriff „ubiquitous computing“ beschreibt die Allgegenwärtigkeit von Rechensystemen.",
            "Ohne Informations- und Kommunikationstechnologie wären viele der beschriebenen vernetzten Alltagsszenarien nicht möglich.",
            "Digitale Systeme spielen im Unternehmenskontext keinerlei Rolle; sie betreffen ausschließlich den privaten Haushalt.",
            "Es fällt zunehmend schwer, Lebens- oder Arbeitsbereiche zu finden, in denen keinerlei Technologiekontakt stattfindet.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Alltagsbeispiele wie Streaming-Dienste, intelligente Heizsysteme oder vernetzte Geräte illustrieren, "
                "dass digitale Systeme den Tagesablauf durchziehen. Der Kontakt mit Technologie ist allgegenwärtig."
            ),
            T(
                "„Ubiquitous computing“ wird ausdrücklich mit der Allgegenwärtigkeit von Rechensystemen übersetzt und "
                "als treffende Beschreibung der heutigen Lage verwendet."
            ),
            T(
                "Vernetzte Alltagsszenarien setzen Informations- und Kommunikationstechnologie voraus. Ohne sie wären "
                "die beschriebenen Abläufe so nicht möglich."
            ),
            F(
                "Auch in Unternehmen sind digitale Systeme im Einsatz – etwa zur Lagererfassung, Positionierung von "
                "Lieferungen oder Steuerung von Produktionsabläufen. Die Behauptung, Digitalisierung betreffe nur den "
                "privaten Haushalt, ist falsch."
            ),
            T(
                "Gerade weil Technologie so weit verbreitet ist, fällt es schwer, Bereiche ohne jeden Technologiekontakt "
                "zu identifizieren. Das unterstreicht die Allgegenwärtigkeit digitaler Systeme."
            ),
        ],
        "1/5",
    )
)

# --- 03 easy ---
cases.append(
    case(
        3,
        "Technologie verändert unternehmerisches Handeln",
        [
            "Der Einsatz von Technologie verändert, wie Unternehmen betriebswirtschaftlich tätig werden.",
            "Dazu gehört unter anderem, wie Unternehmen interne Prozesse steuern, um möglichst effizient zu wirtschaften.",
            "Technologieeinsatz betrifft auch, wie Unternehmen mit Kunden in Kontakt bleiben und deren Anforderungen berücksichtigen.",
            "Die Gestaltung und Markteinführung von Produkten und Dienstleistungen bleibt vom Technologiewandel unberührt.",
            "Digitalisierung und digitale Transformation werden im Zusammenhang mit diesen Veränderungen häufig genannt.",
        ],
        [True, True, True, False, True],
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
            F(
                "Auch die Gestaltung und das Auf-den-Markt-Bringen von Produkten und Dienstleistungen gehören zu den "
                "genannten Veränderungsfeldern. Die Behauptung, dieser Bereich bleibe unberührt, widerspricht dem."
            ),
            T(
                "Im Zusammenhang mit genau diesen Veränderungen fallen häufig die Begriffe Digitalisierung bzw. digitale "
                "Transformation. Die Terminologie knüpft an den beobachtbaren Wandel an."
            ),
        ],
        "1/5",
    )
)

# --- 04 easy ---
cases.append(
    case(
        4,
        "Geschäftsprozess – Grunddefinition",
        [
            "Ein Geschäftsprozess ist ein komplexer Arbeitsablauf aus mehreren logisch zusammenhängenden Aktivitäten.",
            "Ein Geschäftsprozess leistet für das Unternehmen einen Beitrag (Wert) zu einem betriebswirtschaftlichen Ziel.",
            "Geschäftsprozesse können wiederholt durchgeführt werden.",
            "Ein Geschäftsprozess hat weder einen definierten Anfang noch ein definiertes Ende.",
            "Geschäftsprozesse bestehen definitionsgemäß aus einer einzigen isolierten Aktivität ohne logischen Zusammenhang zu anderen Schritten.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Die Definition stellt auf einen komplexen Arbeitsablauf ab, der aus mehreren logisch zusammenhängenden "
                "Aktivitäten besteht. Einzelne isolierte Handgriffe ohne Zusammenhang sind damit nicht gemeint."
            ),
            T(
                "Wesentlich ist der Wertbeitrag: Der Ablauf leistet einen Beitrag zu einem betriebswirtschaftlichen Ziel. "
                "Ohne diesen Zielbezug fehlt das betriebliche Kernmerkmal des Geschäftsprozesses."
            ),
            T(
                "Wiederholbarkeit wird ausdrücklich genannt. Geschäftsprozesse sind keine einmaligen Zufallsereignisse, "
                "sondern erneut ausführbare Abläufe."
            ),
            F(
                "Im Gegenteil: Geschäftsprozesse haben einen klar definierten Anfang und ein oder mehrere definierte "
                "Enden. Die Behauptung, es gebe weder Anfang noch Ende, verdreht die Definition."
            ),
            F(
                "Gerade mehrere logisch zusammenhängende Aktivitäten sind definitionsbildend. Eine einzige isolierte "
                "Aktivität ohne Zusammenhang erfüllt die Geschäftsprozess-Definition nicht."
            ),
        ],
        "1/5",
    )
)

# --- 05 easy ---
cases.append(
    case(
        5,
        "Drei Dimensionen der Digitalisierung im Überblick",
        [
            "Veränderungen durch Digitalisierung lassen sich im Unternehmenskontext anhand von drei Dimensionen veranschaulichen.",
            "Eine Dimension betrifft Geschäftsprozesse hinter den Kulissen (Backstage), die die Wertschöpfung unterstützen.",
            "Eine weitere Dimension betrifft die Verbindung zwischen Kunden und Unternehmen (Frontstage).",
            "Die Digitalisierung von Produkten und Dienstleistungen bildet keine eigene Dimension und bleibt außen vor.",
            "Unternehmen können sich gezielt auf eine oder mehrere dieser Dimensionen konzentrieren.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Im Unternehmenskontext werden Möglichkeiten der Veränderung anhand von drei Dimensionen der "
                "Digitalisierung dargestellt. Das ist das strukturierende Raster für den Abschnitt."
            ),
            T(
                "Die erste Dimension sind Geschäftsprozesse hinter den Kulissen (Backstage), die die Wertschöpfung "
                "unterstützen und zunehmend digital gesteuert bzw. erweitert werden."
            ),
            T(
                "Die zweite Dimension – Frontstage – versteht sich als Verbindung zwischen Kunden und Unternehmen und "
                "bildet den externen Fokus."
            ),
            F(
                "Die dritte Dimension befasst sich gerade mit dem Ergebnis der Wertschöpfung: der Digitalisierung von "
                "Produkten und Dienstleistungen („smart“). Sie ist also eine eigene, zentrale Dimension."
            ),
            T(
                "Unternehmen können entlang der drei Dimensionen tätig werden und sich auf eine oder mehrere davon "
                "konzentrieren. Daraus lässt sich eine Digitalisierungsstrategie ableiten."
            ),
        ],
        "1/5",
    )
)

# --- 06 medium-easy ---
cases.append(
    case(
        6,
        "Backstage: interne Wertschöpfung und Prozesse",
        [
            "Der interne Fokus eines Unternehmens liegt auf der wirtschaftlichen Nutzung von Ressourcen, um Produkte und Dienstleistungen zu erstellen.",
            "Wertschöpfung bedeutet in diesem Zusammenhang, dass ein Wert geschaffen wird.",
            "Geschäftsprozesse hinter den Kulissen unterstützen die Wertschöpfung und werden zunehmend durch Systeme erweitert und gesteuert.",
            "Wenn Arbeitsschritte digital unterstützt werden, entsteht ein digital unterstützter Geschäftsprozess.",
            "Backstage-Digitalisierung meint vor allem die öffentliche Werbung gegenüber Endkunden und nicht die internen Abläufe.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Intern geht es um die wirtschaftliche Nutzung von Ressourcen zur Erstellung von Produkten und "
                "Dienstleistungen. Das ist der innengerichtete Fokus der ersten Dimension."
            ),
            T(
                "Ausdrücklich formuliert: Es soll ein Wert geschaffen werden – anders gesagt findet Wertschöpfung statt. "
                "Wertschöpfung und Wertschaffung werden hier gleichgesetzt."
            ),
            T(
                "Backstage-Geschäftsprozesse unterstützen die Wertschöpfung und werden zunehmend durch Systeme "
                "erweitert und gesteuert. Digitalisierung greift hier an den inneren Abläufen an."
            ),
            T(
                "Durch digitale Unterstützung von Arbeitsschritten entsteht ein digital unterstützter Geschäftsprozess. "
                "Das ist die konkrete Ausprägung der ersten Dimension."
            ),
            F(
                "Backstage meint gerade die Prozesse hinter den Kulissen – intern, nicht die kundengerichtete "
                "Werbung. Kundengerichtetes liegt in der Frontstage-Dimension."
            ),
        ],
        "2/5",
    )
)

# --- 07 medium-easy ---
cases.append(
    case(
        7,
        "Frontstage: Kundenorientierung und Kundenarten",
        [
            "Die Frontstage-Dimension versteht sich als Verbindung zwischen Kunden und Unternehmen und bildet den externen Fokus.",
            "Im Vordergrund stehen die Anforderungen und Bedürfnisse der Nutzerinnen und Nutzer.",
            "Als Kunde kommt je nach Umfeld eine Privatperson, ein Unternehmen oder auch eine öffentliche Institution infrage.",
            "Digitalisierung bietet keinerlei neue Potenziale, Nutzerwünsche gezielter zu berücksichtigen.",
            "Frontstage-Digitalisierung betrifft ausschließlich die interne Lagerverwaltung und hat keinen Kundenbezug.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Frontstage wird ausdrücklich als Verbindung Kunde–Unternehmen und als externer Fokus beschrieben. "
                "Hier liegt die Orientierung rund um den Kunden."
            ),
            T(
                "Bei der Gestaltung von Angeboten im Sinne des Kunden liegen Anforderungen und Bedürfnisse der "
                "Nutzerinnen und Nutzer im Vordergrund."
            ),
            T(
                "Wichtig: „Kunde“ ist nicht nur die Privatperson. Je nach Umfeld kann es eine Privatperson, ein "
                "Unternehmen oder eine öffentliche Institution sein."
            ),
            F(
                "Gerade das Gegenteil wird betont: Digitalisierung bietet neue Potenziale, Wünsche der Nutzer "
                "effizienter und gezielter zu berücksichtigen."
            ),
            F(
                "Lagerverwaltung und interne Abläufe gehören zur Backstage. Frontstage hat gerade den "
                "Kundenbezug; die Aussage vertauscht die Dimensionen."
            ),
        ],
        "2/5",
    )
)

# --- 08 medium-easy ---
cases.append(
    case(
        8,
        "Dokumentation und Prozessmodell",
        [
            "Das Festhalten eines Geschäftsprozesses in einem digitalen System wird auch als Dokumentation bezeichnet.",
            "Dokumentation hilft Mitarbeitenden, den Prozess zu kommunizieren.",
            "Ein visuelles Abbild eines Prozesses wird auch Prozessmodell genannt.",
            "Ein Prozessmodell ist für neue Mitarbeitende grundsätzlich nutzlos, weil visuelle Abbilder keine Orientierung geben können.",
            "Digitale Dokumentation von Prozessen erschwert typischerweise den Überblick und verlangsamt Entscheidungen.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Das Festhalten eines Prozesses durch ein digitales System wird ausdrücklich als Dokumentation "
                "bezeichnet. Dokumentation ist also die digitale Abbildung des Ablaufs."
            ),
            T(
                "Dokumentation hilft Mitarbeitenden im Unternehmen, den Prozess zu kommunizieren – sie macht den "
                "Ablauf teilbar und nachvollziehbar."
            ),
            T(
                "Ein visuelles Abbild wird auch Prozessmodell genannt. Das ist die anschauliche Darstellungsform des "
                "dokumentierten Ablaufs."
            ),
            F(
                "Gerade das Gegenteil gilt: Ein Prozessmodell kann neuen Mitarbeitenden – etwa im Praktikum – einen "
                "ersten Überblick über einen zentralen Ablauf liefern."
            ),
            F(
                "Innerhalb eines digital gestützten Prozesses können Personen den Überblick leichter bewahren und "
                "Entscheidungen schneller und gezielter treffen. Die Aussage behauptet das Gegenteil."
            ),
        ],
        "2/5",
    )
)

# --- 09 medium-easy ---
cases.append(
    case(
        9,
        "Smarte Produkte und Dienstleistungen",
        [
            "Die dritte Dimension der Digitalisierung befasst sich damit, wie das Ergebnis der Wertschöpfung durch Technologie erweitert werden kann.",
            "„Smart“ bezieht sich in diesem Zusammenhang auf die Digitalisierung von Produkten und Dienstleistungen.",
            "Digitalisierung eines Produkts kann im einfachsten Fall eine Ergänzung oder Erweiterung darstellen.",
            "Digitalisierung eines Produkts kann niemals das Kundenerlebnis prägen; höchstens die interne Buchhaltung ändert sich.",
            "Eine bloß digitale Anleitung als PDF zu einem analogen Produkt ist bereits die weitreichendste Form „smarter“ Erlebnisgestaltung.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Die dritte Dimension richtet sich auf das Ergebnis der Wertschöpfung und dessen Erweiterung durch "
                "Technologie – also auf Produkte und Dienstleistungen selbst."
            ),
            T(
                "„Smart“ meint hier die Digitalisierung von Produkten und Dienstleistungen des Unternehmens, nicht "
                "bloß einen Marketingbegriff ohne Inhalt."
            ),
            T(
                "Im einfachsten Fall handelt es sich um eine Ergänzung oder Erweiterung – etwa eine digitale Anleitung "
                "als PDF zu einem analogen Produkt."
            ),
            F(
                "Im besten Fall kann Digitalisierung das Erlebnis des Kunden gerade nachhaltig prägen und die Bindung "
                "steigern. Die Behauptung, Kundenerlebnis sei nie betroffen und nur die Buchhaltung ändere sich, ist falsch."
            ),
            F(
                "Eine PDF-Anleitung ist ausdrücklich als einfache digitale Ergänzung beschrieben. Weitreichender ist "
                "etwa eine digitale Erkundungsmission, die das Erlebnis „smart“ erweitert. Die PDF ist nicht die "
                "weitreichendste Form."
            ),
        ],
        "2/5",
    )
)

# --- 10 medium ---
cases.append(
    case(
        10,
        "Wirtschaftsinformatik und digitale Systeme in Unternehmen",
        [
            "Die Wirtschaftsinformatik beschäftigt sich damit, wie Technologie unterstützen kann und welche Auswirkungen das auf Gesellschaft, Wirtschaft und persönliches Leben hat.",
            "Im Handel können Systeme automatisch erfassen, wie viele Produkte noch lagernd sind, und Nachbestellungen anstoßen.",
            "Lieferdienste können Positionierungs- und Benachrichtigungssysteme nutzen, um den Standort möglichst zeitnah mitzuteilen.",
            "In Produktionsanlagen sind digitale Systeme grundsätzlich ungeeignet, Prozessabläufe zu steuern oder Probleme zu erkennen.",
            "Digitale Systeme dienen in Unternehmen ausschließlich der Unterhaltung der Belegschaft und haben keinen Bezug zu Automatisierung oder Optimierung.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Genau diese Doppelfrage – Unterstützung durch Technologie und Auswirkungen auf Gesellschaft, "
                "Wirtschaft und persönliches Leben – umreißt das Themenfeld der Wirtschaftsinformatik."
            ),
            T(
                "Supermarkt- bzw. Handelssysteme zur Lagererfassung und möglichen Nachbestellung sind ein genanntes "
                "Unternehmensbeispiel digitaler Unterstützung."
            ),
            T(
                "Positionierungs- und Benachrichtigungssysteme bei Lieferdiensten sind ein weiteres Beispiel für den "
                "Einsatz digitaler Systeme im Betriebsalltag."
            ),
            F(
                "In der Produktion helfen Systeme gerade, Abläufe zu steuern und Probleme rasch zu erkennen und darauf "
                "zu reagieren. „Grundsätzlich ungeeignet“ widerspricht den genannten Einsatzfeldern."
            ),
            F(
                "Digitale Systeme werden gerade eingesetzt, um Arbeitsschritte zu automatisieren, zu optimieren bzw. "
                "zu unterstützen. „Nur Unterhaltung ohne Betriebsbezug“ ist das Gegenteil der Beschreibung."
            ),
        ],
        "3/5",
    )
)

# --- 11 medium ---
cases.append(
    case(
        11,
        "Beispiel digitaler Geschäftsprozess (Online-Bestellung)",
        [
            "Bei einer Online-Bestellung können im Hintergrund sofort Schritte veranlasst werden, damit das Produkt rasch zum Kunden kommt.",
            "Ein internes System kann die Bestellung zusammenfassen und eine freie Mitarbeiterin oder einen freien Mitarbeiter benachrichtigen.",
            "Detailschritte können Lagerposition abrufen, Produkt auswählen und die Bestellung für Abholung oder Versand vorbereiten umfassen.",
            "Nach dem Absenden einer Online-Bestellung gibt es im Unternehmen keine weiteren Arbeitsschritte mehr; Lager und Versand spielen keine Rolle.",
            "Ein digital gestützter Bestellprozess endet niemals; definierte Enden wie Lieferung oder Abholung sind ausgeschlossen.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Das Bestellbeispiel zeigt: Nach der Online-Aufgabe werden im Hintergrund Schritte angestoßen, um das "
                "Produkt möglichst rasch bereitzustellen. Der Kundenklick startet interne Prozessketten."
            ),
            T(
                "Ein internes System fasst die Bestellung zusammen und benachrichtigt die nächste freie Person, die "
                "sich um weitere Schritte kümmert – digitale Steuerung der Zuteilung."
            ),
            T(
                "Zu den Detailschritten zählen unter anderem Lagerposition abrufen, Produkt auswählen und Vorbereitung "
                "je nachdem, ob abgeholt oder versendet werden muss."
            ),
            F(
                "Gerade Lagerposition, Kommissionierung und Vorbereitung für Versand oder Abholung sind zentrale "
                "Folgeschritte. Die Behauptung, Lager und Versand spielten keine Rolle, ist falsch."
            ),
            F(
                "Der Prozess endet mit Lieferung oder Bereitstellung zur Abholung; danach markiert die bearbeitende "
                "Person den Abschluss im System. Definierte Enden sind Teil des Beispiels und der Prozessdefinition."
            ),
        ],
        "3/5",
    )
)

# --- 12 medium ---
cases.append(
    case(
        12,
        "Kundenwünsche gezielter berücksichtigen",
        [
            "Beim Schuhkauf ist die passende Größe eine zentrale Anforderung der Nutzerinnen und Nutzer.",
            "Falsche Größen beim Onlinekauf können Zeit und Nerven kosten und frustrierend sein.",
            "Ein 3D-Fußscanner kann Anforderungen der Nutzer festhalten, indem er ein 3D-Bild der Füße erzeugt und online im Kundenkonto speichert.",
            "Ein gespeicherter digitaler Fußabdruck darf beim späteren Kauf keinesfalls mit einem Schuhmodell abgeglichen werden.",
            "Frontstage-Potenziale der Digitalisierung bestehen nur offline im Ladengeschäft und lassen sich online grundsätzlich nicht nutzen.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Die Schuhgröße und Passformfragen (größer/kleiner geschnitten, schmale/breite Füße) stehen als "
                "zentrale Nutzeranforderungen im Beispiel. Das ist Frontstage-Logik: Bedürfnisse zuerst."
            ),
            T(
                "Falsche Online-Größen werden ausdrücklich als zeit- und nervenraubend sowie frustrierend beschrieben. "
                "Genau dort setzt digitales Potenzial an."
            ),
            T(
                "Der 3D-Fußscanner erzeugt ein 3D-Bild und speichert es online im Kundenkonto – digitale Erfassung "
                "von Nutzeranforderungen."
            ),
            F(
                "Gerade der Abgleich des digitalen Fußabdrucks mit dem gewünschten Schuhmodell – vor Ort und online – "
                "ist der Zweck des Service, um die Passform zu prüfen."
            ),
            F(
                "Das Beispiel verbindet ausdrücklich Vor-Ort-Service und Smartphone-App bzw. Online-Bestellung. "
                "Frontstage-Potenziale sind also online und offline nutzbar, nicht nur im Laden."
            ),
        ],
        "3/5",
    )
)

# --- 13 medium ---
cases.append(
    case(
        13,
        "Digitalisierungsstrategie und Digital Business",
        [
            "Aus der gezielten Konzentration auf eine oder mehrere Digitalisierungsdimensionen lässt sich eine Digitalisierungsstrategie ableiten.",
            "Eine Digitalisierungsstrategie kann dem Unternehmen helfen, zukünftige Entscheidungen an einer klaren Vision auszurichten.",
            "Im Gesamten führt dies zur Digitalisierung des Unternehmens – dem „Digital Business“.",
            "Erfolgreiche digitale Transformation bedeutet, möglichst viele sinnlose Aspekte digital zu verdoppeln, ohne Nutzen zu prüfen.",
            "Bei erfolgreicher Digitalisierung soll die Transformation dem Nutzen und Erlebnis möglichst im Weg stehen und Innovation verhindern.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Unternehmen können sich auf eine oder mehrere Dimensionen konzentrieren; daraus wird eine "
                "Digitalisierungsstrategie abgeleitet. Strategie folgt der dimensionalen Schwerpunktsetzung."
            ),
            T(
                "Die Strategie soll helfen, zukünftige Entscheidungen zu treffen und einer klaren Vision zu folgen – "
                "nicht bloß einzelne Technikprojekte ohne Richtung."
            ),
            T(
                "Im Gesamten führt das zur Digitalisierung des Unternehmens, bezeichnet als „Digital Business“. "
                "Das ist die unternehmensweite Perspektive."
            ),
            F(
                "Erfolg basiert darauf, sinnvolle Aspekte durch digitale Technologien zu erweitern – nicht darauf, "
                "sinnlose Aspekte unbesehen zu verdoppeln. Nutzenprüfung gehört zum Erfolgskriterium."
            ),
            F(
                "Gerade umgekehrt: Die Transformation soll nicht im Weg stehen; Nutzen und Erlebnis eines Produkts "
                "oder einer Dienstleistung sollen möglichst innovativ erweitert werden."
            ),
        ],
        "3/5",
    )
)

# --- 14 harder ---
cases.append(
    case(
        14,
        "Feine Unterschiede: Prozessenden und Wertbeitrag",
        [
            "Ein Geschäftsprozess darf laut Definition nur genau ein einziges Ende haben; mehrere Enden sind ausgeschlossen.",
            "Wiederholbarkeit gehört zu den Merkmalen von Geschäftsprozessen.",
            "Ohne Beitrag zu einem betriebswirtschaftlichen Ziel fehlt einem Ablauf das zentrale Wertmerkmal eines Geschäftsprozesses.",
            "Logisch zusammenhängende Aktivitäten sind ein Definitionsbestandteil des Geschäftsprozesses.",
            "Ein einmaliger, zufälliger Handgriff ohne Zielbezug und ohne wiederholbaren Ablauf erfüllt die Geschäftsprozess-Definition vollständig.",
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
                "Es handelt sich um mehrere logisch zusammenhängende Aktivitäten – der Zusammenhang ist "
                "definitionsbildend."
            ),
            F(
                "Ein einmaliger Zufallsgriff ohne Zielbezug, ohne Wiederholbarkeit und ohne klaren Anfang/Ende erfüllt "
                "die Definition nicht. Geschäftsprozesse sind strukturierte, wertbezogene, wiederholbare Abläufe."
            ),
        ],
        "4/5",
    )
)

# --- 15 harder ---
cases.append(
    case(
        15,
        "Dimensionen sauber trennen",
        [
            "Die Digitalisierung der Kundenbeziehung (Frontstage) ersetzt vollständig die Notwendigkeit interner Geschäftsprozesse (Backstage).",
            "Ein digital unterstützter Bestellprozess im Lager und in der Kommissionierung ist primär der Backstage-Dimension zuzuordnen.",
            "Ein Service, der Nutzeranforderungen per App und Scanner erfasst, um Passformwünsche gezielter zu erfüllen, gehört zur Frontstage-Logik.",
            "Die Erweiterung eines analogen Produkts um eine digitale Erkundungsmission betrifft die Dimension der Produkt- bzw. Dienstleistungsdigitalisierung.",
            "Alle drei Dimensionen beschreiben ausschließlich die interne Kostenrechnung und haben keinen Bezug zu Kunden oder Produkten.",
        ],
        [False, True, True, True, False],
        [
            F(
                "Die Dimensionen ergänzen einander; Frontstage ersetzt Backstage nicht. Interne Prozesse bleiben für "
                "die Wertschöpfung nötig, auch wenn die Kundenschnittstelle digitalisiert wird."
            ),
            T(
                "Lager, Kommissionierung und interne Bestellabwicklung sind Prozesse hinter den Kulissen – klassische "
                "Backstage-Unterstützung der Wertschöpfung."
            ),
            T(
                "Erfassung und gezielte Berücksichtigung von Nutzeranforderungen ist externer Fokus und "
                "Kundenorientierung – Frontstage."
            ),
            T(
                "Die Erweiterung des Produkterlebnisses selbst (nicht nur des internen Ablaufs oder der reinen "
                "Kundenschnittstelle) ist die dritte Dimension: Digitalisierung von Produkt/Dienstleistung."
            ),
            F(
                "Die drei Dimensionen umfassen Backstage-Prozesse, Frontstage-Kundenverbindung und smarte "
                "Produkte/Dienstleistungen – weit mehr als interne Kostenrechnung. Die Verengung ist falsch."
            ),
        ],
        "4/5",
    )
)

# --- 16 harder ---
cases.append(
    case(
        16,
        "Reichweite der Digitalisierung und Begriffsfalle",
        [
            "Digitale Transformation umfasst Veränderungen nicht nur in der Wirtschaft, sondern auch in Verwaltung und privatem Bereich.",
            "Digitalisierung meint nur die Anschaffung von Hardware; ob sich Abläufe oder Angebote ändern, ist für den Begriff unerheblich.",
            "Informations- und Kommunikationstechnologie ist Voraussetzung vieler vernetzter Alltags- und Unternehmensszenarien.",
            "„Ubiquitous computing“ betont die Allgegenwärtigkeit von Rechensystemen, nicht deren vollständige Abwesenheit.",
            "Wenn Technologie den Morgenablauf, den Handel und die Produktion durchzieht, spricht das gegen die Idee allgegenwärtiger digitaler Systeme.",
        ],
        [True, False, True, True, False],
        [
            T(
                "Die Definition nennt ausdrücklich Teile der Wirtschaft, der Verwaltung und des privaten Bereichs als "
                "Orte der durch Digitalisierung vorangetriebenen Veränderung."
            ),
            F(
                "Digitalisierung ist die Anwendung digitaler IKT und die damit verbundene Veränderung. Bloße "
                "Hardwarebeschaffung ohne Bezug zu Anwendung und Wandel trifft den Begriff nicht."
            ),
            T(
                "Ohne IKT wären die beschriebenen vernetzten Szenarien nicht möglich – IKT ist die technische "
                "Voraussetzung."
            ),
            T(
                "Der Begriff wird gerade als Allgegenwärtigkeit von Rechensystemen eingeführt und als treffend "
                "bewertet – das Gegenteil von Abwesenheit."
            ),
            F(
                "Wenn Technologie Alltag, Handel und Produktion durchzieht, stützt das die Allgegenwärtigkeit, "
                "widerspricht ihr nicht. Die Aussage dreht die Schlussfolgerung um."
            ),
        ],
        "4/5",
    )
)

# --- 17 harder ---
cases.append(
    case(
        17,
        "Smart vs. bloße Ergänzung",
        [
            "Eine digitale PDF-Anleitung zu einem analogen Baukasten ist ein Beispiel für eine einfache digitale Ergänzung.",
            "Eine digitale Erkundungsmission, die je nach Verlauf unterschiedliche Bauweisen ermöglicht, kann das Erlebnis „smart“ erweitern.",
            "Eine smarte Erweiterung kann die Bindung zum Produkt steigern und ein positiv digitalisiertes Kundenerlebnis schaffen.",
            "Jede digitale Datei zu einem Produkt ist automatisch die maximale Form der Erlebnisdigitalisierung.",
            "Die dritte Dimension betrifft ausschließlich die Gehaltsabrechnung der Mitarbeitenden und nicht Produkte oder Dienstleistungen.",
        ],
        [True, True, True, False, False],
        [
            T(
                "Die PDF-Anleitung wird ausdrücklich als einfache digitale Ergänzung zum analogen Produkt genannt – "
                "Digitalisierung im einfachsten Fall."
            ),
            T(
                "Die digitale Erkundungsmission mit unterschiedlichem Verlauf ist das Beispiel für eine Erweiterung, "
                "die sich „smart“ anfühlen kann."
            ),
            T(
                "Durch die smarte Erweiterung kann die Bindung steigen und ein positiv digitalisiertes Kundenerlebnis "
                "entstehen – der „beste Fall“ der Dimension."
            ),
            F(
                "Nicht jede digitale Datei ist die maximale Form. Die Stufung von einfacher Ergänzung bis "
                "erlebnisprägender Erweiterung zeigt Abstufungen; Maximum ist nicht automatisch erreicht."
            ),
            F(
                "Die dritte Dimension richtet sich auf Produkte und Dienstleistungen als Ergebnis der Wertschöpfung – "
                "nicht auf die Gehaltsabrechnung. Die Verengung ist falsch."
            ),
        ],
        "4/5",
    )
)

# --- 18 very hard ---
cases.append(
    case(
        18,
        "Prüfungsdruck: Dimensionen, Strategie und Erfolgskriterium",
        [
            "Wer ausschließlich Frontstage digitalisiert, hat damit zwingend auch die Backstage-Prozesse und die Produkt-Digitalisierung bereits vollständig abgedeckt.",
            "Eine Digitalisierungsstrategie entsteht nur dann, wenn alle drei Dimensionen gleichzeitig und ohne Schwerpunktsetzung bearbeitet werden.",
            "Erfolgreiche digitale Transformation erweitert sinnvolle Aspekte wie Arbeitsschrittfolgen, Kommunikation oder Kundenbedürfnisse durch digitale Technologien.",
            "Wenn die Transformation dem Nutzen und Erlebnis im Weg steht, widerspricht das dem beschriebenen Erfolgskriterium.",
            "„Digital Business“ bezeichnet im Gesamten die Digitalisierung des Unternehmens infolge dieser strategischen Ausrichtung.",
        ],
        [False, False, True, True, True],
        [
            F(
                "Die Dimensionen sind unterscheidbar und nicht automatisch mitabgedeckt. Konzentration auf eine "
                "Dimension ersetzt nicht die anderen; Strategie kann bewusst Schwerpunkte setzen."
            ),
            F(
                "Strategie kann aus der gezielten Konzentration auf eine oder mehrere Dimensionen abgeleitet werden. "
                "Zwang zu allen drei Dimensionen ohne Schwerpunkt ist nicht die beschriebene Logik."
            ),
            T(
                "Genannt werden unter anderem Abfolge von Arbeitsschritten, Kommunikation und Berücksichtigung von "
                "Kundenbedürfnissen als sinnvolle Erweiterungsfelder durch digitale Technologien."
            ),
            T(
                "Erfolg heißt: Die Transformation soll nicht im Weg stehen, sondern Nutzen und Erlebnis innovativ "
                "erweitern. Steht sie im Weg, verfehlt man dieses Kriterium."
            ),
            T(
                "Im Gesamten führt die dimensionale/strategische Arbeit zur Digitalisierung des Unternehmens – "
                "„Digital Business“."
            ),
        ],
        "5/5",
    )
)

# --- 19 very hard ---
cases.append(
    case(
        19,
        "Kundenbegriff, Enden und interne Steuerung unter Prüfungsdruck",
        [
            "Weil Frontstage kundenorientiert ist, kann der Kunde begrifflich nur eine Privatperson sein; Unternehmen und öffentliche Institutionen scheiden aus.",
            "Ein Geschäftsprozess mit den alternativen Abschlüssen „Versand“ und „Abholung“ verletzt die Definition, weil nur ein Ende erlaubt wäre.",
            "Digitale Systeme können intern je nach Lagerstand weitere Prozesse anstoßen und den Kunden über den Status informieren.",
            "Dokumentation und Prozessmodell dienen unter anderem der Kommunikation und dem Überblick, nicht der reinen Geheimhaltung aller Abläufe vor Mitarbeitenden.",
            "Wertschöpfung im internen Fokus meint, dass aus dem Ressourceneinsatz Produkte und Dienstleistungen erstellt und damit Wert geschaffen wird.",
        ],
        [False, False, True, True, True],
        [
            F(
                "Ausdrücklich: Kunde kann Privatperson, Unternehmen oder öffentliche Institution sein. Die "
                "Verengung auf Privatpersonen ist falsch."
            ),
            F(
                "Ein oder mehrere definierte Enden sind erlaubt. Versand und Abholung als alternative Enden passen "
                "zur Definition und verletzen sie nicht."
            ),
            T(
                "Im Bestellbeispiel können je nach Lagerstand weitere Prozesse angestoßen und Statusinformationen an "
                "den Kunden gegeben werden – digitale Steuerung über den Erstschritt hinaus."
            ),
            T(
                "Dokumentation hilft zu kommunizieren; Prozessmodelle geben Überblick. Das Gegenteil – Abläufe vor "
                "Mitarbeitenden geheim zu halten – ist nicht der Zweck."
            ),
            T(
                "Interner Fokus: wirtschaftliche Ressourcennutzung zur Erstellung von Produkten und Dienstleistungen; "
                "es soll Wert geschaffen werden (Wertschöpfung)."
            ),
        ],
        "5/5",
    )
)

# --- 20 very hard ---
cases.append(
    case(
        20,
        "Gesamtzusammenhang digitale Transformation",
        [
            "Technologieeinsatz verändert interne Prozesse, Kundenkontakt und die Gestaltung von Marktangeboten – diese Felder gemeinsam beschreiben den unternehmerischen Wandel der digitalen Transformation.",
            "Eine Aussage der Form „Digitalisierung ist nur private Unterhaltungselektronik und berührt weder Unternehmensprozesse noch Verwaltung“ widerspricht der definierten Reichweite.",
            "Backstage, Frontstage und Produkt-Digitalisierung sind drei unterscheidbare Angriffsflächen für Digitalisierungsvorhaben; sie zu vermengen, erschwert eine klare Strategie.",
            "Wenn ein Unternehmen sinnvolle Abläufe digital erweitert, die Kundenschnittstelle verbessert und Produkte erlebbarer macht, bewegt es sich entlang der drei Dimensionen Richtung Digital Business.",
            "Erfolgreiche digitale Transformation besteht darin, Technologie um ihrer selbst willen einzuführen, auch wenn Nutzen und Kundenerlebnis dadurch sinken.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Genannt werden Steuerung interner Prozesse, Kundenkontakt/Bedürfnisse sowie Gestaltung und "
                "Markteinführung von Produkten und Dienstleistungen – die drei Veränderungsfelder des "
                "unternehmerischen Wandels."
            ),
            T(
                "Die Definition umfasst Wirtschaft, Verwaltung und privaten Bereich sowie Unternehmensbeispiele. "
                "Die Verengung auf reine Unterhaltungselektronik ohne Prozess- und Verwaltungsbezug ist unzutreffend."
            ),
            T(
                "Die drei Dimensionen strukturieren gerade unterschiedliche Vorhaben. Vermengung ohne Unterscheidung "
                "macht Schwerpunktsetzung und Strategieableitung schwerer."
            ),
            T(
                "Konzentration auf Dimensionen, Strategieableitung und Digitalisierung des Unternehmens "
                "(Digital Business) bilden den beschriebenen Gesamtbogen."
            ),
            F(
                "Erfolg heißt sinnvolle Erweiterung und innovatives Stärken von Nutzen und Erlebnis – nicht Technik "
                "um ihrer selbst willen bei sinkendem Nutzen. Die Aussage verfehlt das Erfolgskriterium."
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
    assert all(
        e.endswith("Die Aussage ist daher wahr.") or e.endswith("Die Aussage ist daher falsch.")
        for e in c["tactical_explanations"]
    )
    for i, (a, e) in enumerate(zip(c["answer_key"], c["tactical_explanations"])):
        if a:
            assert e.endswith("wahr."), (c["case_id"], i)
        else:
            assert e.endswith("falsch."), (c["case_id"], i)

# Preserve any future non-4.1 rows if present
existing: list[dict] = []
if OUT.exists():
    raw = json.loads(OUT.read_text(encoding="utf-8") or "[]")
    if isinstance(raw, list):
        existing = [r for r in raw if r.get("subsection") != "4.1"]

merged = existing + cases
OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {len(cases)} cases for 4.1 (+ {len(existing)} other) → {OUT.relative_to(ROOT)}")
print(
    "Difficulty mix:",
    {d: sum(1 for c in cases if c["difficulty_level"] == d) for d in sorted({c["difficulty_level"] for c in cases})},
)
print(
    "True/False balance:",
    sum(sum(c["answer_key"]) for c in cases),
    "true /",
    sum(5 - sum(c["answer_key"]) for c in cases),
    "false across statements",
)
