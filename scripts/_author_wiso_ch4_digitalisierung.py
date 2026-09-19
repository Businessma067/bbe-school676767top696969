#!/usr/bin/env python3
"""Author WiSo Wirtschaft verstehen Kap. 4 (Digitalisierung) practice cases.

20 cases each for §§4.1–4.4 (80 total). Knowledge-first BBE-style banks
from the Lernunterlage — no BBE source material.
"""
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch4.json"


def T(text: str) -> str:
    return text.rstrip() + "\n\nDie Aussage ist daher wahr."


def F(text: str) -> str:
    return text.rstrip() + "\n\nDie Aussage ist daher falsch."


def case(
    sub: str,
    n: int,
    title: str,
    statements: list[str],
    answers: list[bool],
    expl: list[str],
    diff: str,
    context: str,
) -> dict:
    assert len(statements) == 5 == len(answers) == len(expl)
    return {
        "subsection": sub,
        "case_id": f"CASE W{sub}.{n:02d}",
        "title": title,
        "context": context,
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": expl,
        "difficulty_level": diff,
        "tier": "full",
    }


CTX41 = (
    "Analysieren Sie die digitale Transformation entlang der drei Dimensionen der Digitalisierung. "
    "Bewerten Sie die folgenden Aussagen:"
)
CTX42 = (
    "Analysieren Sie neue Produkte, Dienstleistungen und Geschäftsmodelle im digitalen Umfeld. "
    "Bewerten Sie die folgenden Aussagen:"
)
CTX43 = (
    "Analysieren Sie das Internet als Plattform für Unternehmen sowie WWW, Protokolle und digitale Märkte. "
    "Bewerten Sie die folgenden Aussagen:"
)
CTX44 = (
    "Analysieren Sie Wirtschaftsinformatik als interdisziplinäres Fach sowie Anwendungs- und Informationssysteme. "
    "Bewerten Sie die folgenden Aussagen:"
)

cases: list[dict] = []

# =============================================================================
# §4.1 Digitale Transformation
# =============================================================================

cases.append(case("4.1", 1, "Digitalisierung und digitale Transformation", [
    "Unter Digitalisierung versteht man die Anwendung digitaler Informations- und Kommunikationstechnologie.",
    "Digitale Transformation bezeichnet die durch diese Anwendung vorangetriebene Veränderung in Wirtschaft, Verwaltung und privatem Bereich.",
    "Digitalisierung betrifft ausschließlich private Haushalte und lässt Unternehmen und Verwaltung unberührt.",
    "Technologieeinsatz verändert unter anderem, wie Unternehmen Prozesse steuern, Kunden erreichen und Produkte gestalten.",
    "„Digitalisierung“ und „digitale Transformation“ werden im Text als eng zusammenhängende Begriffe eingeführt.",
], [True, True, False, True, True], [
    T("Genau so definiert der Text Digitalisierung: Anwendung digitaler IKT."),
    T("Digitale Transformation meint die dadurch ausgelöste Veränderung in Teilen von Wirtschaft, Verwaltung und Privatbereich."),
    F("Der Text nennt ausdrücklich Wirtschaft, Verwaltung und privaten Bereich – nicht nur Haushalte."),
    T("Prozesse, Kundenkontakt und Produktgestaltung sind die im Einstieg genannten Wirkungsfelder."),
    T("Digitalisierung wird als Anwendung, digitale Transformation als die daraus folgende Veränderung eingeführt."),
], "1/5", CTX41))

cases.append(case("4.1", 2, "Drei Dimensionen der Digitalisierung – Überblick", [
    "Die Digitalisierung eines Unternehmens lässt sich entlang dreier Dimensionen veranschaulichen.",
    "Die erste Dimension betrifft Geschäftsprozesse hinter den Kulissen (Backstage) und die Wertschöpfung.",
    "Die zweite Dimension ist die Frontstage: die Verbindung zwischen Kunden und Unternehmen.",
    "Die dritte Dimension betrifft die Digitalisierung von Produkten und Dienstleistungen („smart“).",
    "Unternehmen dürfen sich laut Text immer nur auf genau eine Dimension konzentrieren und nie mehrere kombinieren.",
], [True, True, True, True, False], [
    T("Drei Dimensionen strukturieren die Möglichkeiten der Veränderung im Unternehmenskontext."),
    T("Backstage-Prozesse unterstützen die Wertschöpfung und werden digital erweitert und gesteuert."),
    T("Frontstage meint den externen Fokus rund um den Kunden und die Gestaltung von Angeboten."),
    T("Die dritte Dimension adressiert smarte bzw. digitalisierte Produkte und Dienstleistungen."),
    F("Unternehmen können sich gezielt auf eine oder mehrere Dimensionen konzentrieren und daraus eine Strategie ableiten."),
], "1/5", CTX41))

cases.append(case("4.1", 3, "Backstage: Wertschöpfung und Prozesse", [
    "Der interne Fokus eines Unternehmens liegt auf der wirtschaftlichen Nutzung von Ressourcen zur Erstellung von Produkten und Dienstleistungen.",
    "Wertschöpfung bedeutet, dass im Unternehmen ein Wert geschaffen wird.",
    "Geschäftsprozesse hinter den Kulissen (Backstage) unterstützen die Wertschöpfung.",
    "Digitale Systeme erweitern und steuern solche Prozesse zunehmend – es entsteht ein digital unterstützter Geschäftsprozess.",
    "Backstage-Prozesse sind ausschließlich Marketing-Maßnahmen gegenüber Endkunden und haben nichts mit interner Steuerung zu tun.",
], [True, True, True, True, False], [
    T("Interner Fokus = Ressourcen wirtschaftlich nutzen und daraus Produkte/DL erstellen."),
    T("Wertschöpfung ist die Schaffung von Wert im Unternehmen."),
    T("Backstage-Prozesse stützen genau diese Wertschöpfung."),
    T("Systeme erweitern und steuern Arbeitsschritte digital – digital unterstützter Geschäftsprozess."),
    F("Backstage ist der interne Fokus hinter den Kulissen, nicht die externe Kundenkommunikation."),
], "2/5", CTX41))

cases.append(case("4.1", 4, "Was ist ein Geschäftsprozess?", [
    "Ein Geschäftsprozess ist ein komplexer Arbeitsablauf aus mehreren logisch zusammenhängenden Aktivitäten.",
    "Er leistet einen Beitrag (Wert) zu einem betriebswirtschaftlichen Ziel.",
    "Geschäftsprozesse können wiederholt durchgeführt werden.",
    "Sie haben einen klar definierten Anfang und ein oder mehrere definierte Enden.",
    "Ein Geschäftsprozess besteht aus genau einer isolierten Aktivität ohne logischen Zusammenhang zu anderen Schritten.",
], [True, True, True, True, False], [
    T("Mehrere logisch zusammenhängende Aktivitäten bilden den Prozess."),
    T("Wertbeitrag zu einem betriebswirtschaftlichen Ziel ist Teil der Definition."),
    T("Wiederholbarkeit ist ausdrücklich genannt."),
    T("Klarer Anfang und ein oder mehrere Enden gehören zur Definition."),
    F("Gerade der logische Zusammenhang mehrerer Aktivitäten macht den Geschäftsprozess aus."),
], "2/5", CTX41))

cases.append(case("4.1", 5, "Prozessdokumentation und Prozessmodell", [
    "Das Festhalten eines Prozesses in einem digitalen System wird auch als Dokumentation bezeichnet.",
    "Dokumentation hilft Mitarbeitenden, den Prozess zu kommunizieren.",
    "Ein visuelles Abbild eines Prozesses nennt man auch Prozessmodell.",
    "Ein Prozessmodell kann Neuen (z. B. Praktikantinnen) einen ersten Überblick über zentrale Abläufe geben.",
    "Prozessmodelle sind überflüssig, weil digitale Systeme Prozesse ohnehin unsichtbar und undokumentierbar machen.",
], [True, True, True, True, False], [
    T("Dokumentation = Prozess digital festhalten."),
    T("Kommunikation des Prozesses im Unternehmen ist ein genannter Nutzen."),
    T("Prozessmodell = visuelle Darstellung des Ablaufs."),
    T("Das Praktikum-Beispiel im Text nutzt genau diesen Überblick-Nutzen."),
    F("Im Gegenteil: Dokumentation und Modelle machen Abläufe kommunizierbar und nachvollziehbar."),
], "2/5", CTX41))

cases.append(case("4.1", 6, "Beispiel Thalia: digitaler Bestellprozess", [
    "Bei einer Online-Bestellung bei einem Buchhändler wie Thalia werden im Hintergrund sofort Schritte veranlasst.",
    "Ein internes System fasst die Bestellung zusammen und benachrichtigt die nächste freie Mitarbeiterin.",
    "Detailschritte können Lagerabruf, Produktauswahl sowie Vorbereitung für Abholung oder Versand umfassen.",
    "Der Prozess endet mit Lieferung oder Bereitstellung zur Abholung; die Bearbeitung wird im System markiert.",
    "Sobald die Bestellung online aufgegeben ist, endet jeder interne Prozess sofort – Lager und Versand spielen keine Rolle mehr.",
], [True, True, True, True, False], [
    T("Hintergrundprozesse starten unmittelbar nach der Online-Bestellung."),
    T("Systemzusammenfassung und Benachrichtigung der Mitarbeitenden sind Teil des Beispiels."),
    T("Genau solche Detailschritte werden genannt."),
    T("Ende bei Lieferung/Abholung und Markierung der erfolgreichen Bearbeitung."),
    F("Gerade Lager, Vorbereitung und Statusinfo sind zentrale Folgeschritte des digitalen Prozesses."),
], "2/5", CTX41))

cases.append(case("4.1", 7, "Frontstage: Kundenorientierung", [
    "Die Frontstage-Dimension versteht sich als Verbindung zwischen Kunden und Unternehmen.",
    "Hier liegt der externe Fokus und die Orientierung rund um den Kunden.",
    "Es geht um die Gestaltung von Angeboten im Sinne des Kunden; Anforderungen und Bedürfnisse der Nutzerinnen stehen im Vordergrund.",
    "Digitalisierung bietet neue Potenziale, Nutzerwünsche effizienter und gezielter zu berücksichtigen.",
    "Frontstage meint ausschließlich die interne Buchhaltung und hat keinen Bezug zu Kunden.",
], [True, True, True, True, False], [
    T("Frontstage = Verbindung Kunde–Unternehmen."),
    T("Externer Fokus und Kundenorientierung sind zentral."),
    T("Angebotsgestaltung entlang von Nutzerbedürfnissen."),
    T("Genau dieses Potenzial schreibt der Text der Digitalisierung zu."),
    F("Frontstage ist der externe Kundenfokus, nicht die interne Buchhaltung."),
], "2/5", CTX41))

cases.append(case("4.1", 8, "Wer ist „der Kunde“?", [
    "Der Kunde kann je nach Umfeld eine Privatperson sein.",
    "Der Kunde kann auch ein Unternehmen sein.",
    "Der Kunde kann eine öffentliche Institution sein.",
    "Im Frontstage-Kontext ist „Kunde“ immer nur die einzelne Privatperson am Smartphone.",
    "Kundenorientierung betrifft die Gestaltung von Angeboten anhand von Anforderungen und Bedürfnissen.",
], [True, True, True, False, True], [
    T("Privatperson ist eine genannte Kundenrolle."),
    T("Unternehmen als Kunde ist ausdrücklich möglich."),
    T("Öffentliche Institution ist die dritte genannte Ausprägung."),
    F("Der Text betont die Vielfalt der Kundenrollen, nicht die Verengung auf Privatpersonen."),
    T("Anforderungen und Bedürfnisse der Nutzerinnen stehen im Vordergrund."),
], "3/5", CTX41))

cases.append(case("4.1", 9, "Humanic: 3D-Fußscanner als Frontstage-Potenzial", [
    "Humanic nutzt einen 3D-Fußscanner, um Passform-Anforderungen der Nutzerinnen festzuhalten.",
    "Der Scanner erzeugt ein 3D-Bild der Füße und speichert es online im Kundenkonto.",
    "Vor Ort und bei späteren Online-Bestellungen kann der digitale Fußabdruck mit Schuhmodellen abgeglichen werden.",
    "Das Beispiel illustriert, wie Digitalisierung Kundenwünsche gezielter berücksichtigen kann.",
    "Der Fußscanner ersetzt laut Text vollständig jedes physische Schuhgeschäft und macht Filialen überflüssig.",
], [True, True, True, True, False], [
    T("3D-Fußscanner als neuartiger Service vor Ort und via App."),
    T("3D-Bild und Speicherung im Kundenkonto gehören zum Beispiel."),
    T("Abgleich digitaler Fußabdruck ↔ Schuhmodell für optimale Passform."),
    T("Es ist das Lehrbuchbeispiel für Frontstage-Potenzial."),
    F("Das Beispiel ergänzt den Service; es behauptet keine Abschaffung aller Filialen."),
], "3/5", CTX41))

cases.append(case("4.1", 10, "Dritte Dimension: smarte Produkte und Dienstleistungen", [
    "Die dritte Dimension befasst sich damit, wie das Ergebnis der Wertschöpfung durch Technologie erweitert werden kann.",
    "„Smart“ meint hier die Digitalisierung von Produkten und Dienstleistungen.",
    "Digitalisierung kann im einfachsten Fall eine Ergänzung oder Erweiterung darstellen.",
    "Im besten Fall prägt Digitalisierung das Kundenerlebnis nachhaltig.",
    "Smarte Produkte bedeuten laut Text ausschließlich, dass auf dem Produkt ein QR-Code ohne weiteren Nutzen klebt.",
], [True, True, True, True, False], [
    T("Erweiterung des Wertschöpfungsergebnisses durch Technologie."),
    T("Digitalisierung von Produkten/DL ist der Kern von „smart“ hier."),
    T("Einfache Ergänzung ist die Minimalform."),
    T("Nachhaltige Prägung des Erlebnisses ist die anspruchsvollere Form."),
    F("„Smart“ zielt auf echte Erweiterung des Erlebnisses, nicht auf belanglose Dekoration."),
], "3/5", CTX41))

cases.append(case("4.1", 11, "Lego: von analog über PDF zu smartem Erlebnis", [
    "Lego-Spielen ist zunächst ein analoges Erlebnis.",
    "Eine digital bereitgestellte Anleitung als PDF ist eine einfache digitale Ergänzung zum analogen Produkt.",
    "Eine digitale Erkundungsmission, die je nach Verlauf anderes Zusammenbauen ermöglicht, erweitert das Erlebnis stärker.",
    "Solch eine Erweiterung kann die Bindung zum Produkt steigern und ein positives digitalisiertes Kundenerlebnis schaffen.",
    "Laut Text ist eine PDF-Anleitung bereits die maximale Form smarter Digitalisierung und ununterscheidbar von einer Erkundungsmission.",
], [True, True, True, True, False], [
    T("Analoges Ausgangserlebnis wird klar benannt."),
    T("PDF-Anleitung = einfache digitale Ergänzung."),
    T("Erkundungsmission = Potenzial, das Erlebnis zu erweitern."),
    T("Bindung und positives digitalisiertes Erlebnis werden ausdrücklich genannt."),
    F("Der Text unterscheidet bewusst einfache Ergänzung und erlebnisprägende Erweiterung."),
], "3/5", CTX41))

cases.append(case("4.1", 12, "Digitalisierungsstrategie und Digital Business", [
    "Entlang der drei Dimensionen lässt sich eine Digitalisierungsstrategie ableiten.",
    "Die Strategie hilft dem Unternehmen, zukünftige Entscheidungen einer klaren Vision folgen zu lassen.",
    "Im Gesamten führt dies zur Digitalisierung des Unternehmens – dem „Digital Business“.",
    "Erfolgreiche digitale Transformation basiert darauf, sinnvolle Aspekte durch digitale Technologien zu erweitern.",
    "Eine Digitalisierungsstrategie ist überflüssig, weil Dimensionen und Vision keinen Einfluss auf Entscheidungen haben.",
], [True, True, True, True, False], [
    T("Strategieableitung aus den Dimensionen."),
    T("Entscheidungen und klare Vision sind der Nutzen."),
    T("„Digital Business“ = Digitalisierung des Unternehmens im Gesamten."),
    T("Sinnvolle Erweiterung von Abläufen, Kommunikation, Kundenbedürfnissen usw."),
    F("Gerade Strategie und Vision sollen Entscheidungen strukturieren."),
], "3/5", CTX41))

cases.append(case("4.1", 13, "Transformation: Nutzen erweitern, nicht behindern", [
    "Die Transformation soll nicht im Weg stehen.",
    "Nutzen und Erlebnis eines Produkts oder einer Dienstleistung sollen möglichst innovativ erweitert werden.",
    "Erfolgreiche Digitalisierung erweitert u. a. Abfolgen von Arbeitsschritten und die Berücksichtigung von Kundenbedürfnissen.",
    "Digitale Transformation gelingt vor allem dann, wenn Technologie sinnvolle Aspekte im Unternehmen erweitert.",
    "Digitale Transformation bedeutet laut Text, bestehende Nutzen und Erlebnisse möglichst zu verschlechtern.",
], [True, True, True, True, False], [
    T("Explizite Leitlinie: Transformation soll nicht im Weg stehen."),
    T("Innovatives Erweitern von Nutzen und Erlebnis."),
    T("Arbeitsschritte, Kommunikation, Kundenbedürfnisse u. a. werden genannt."),
    T("Sinnvolle Erweiterung durch digitale Technologien ist der Erfolgsanker."),
    F("Ziel ist Erweiterung und Innovation – nicht Verschlechterung."),
], "3/5", CTX41))

cases.append(case("4.1", 14, "Tricky: Digitalisierung ≠ nur Online-Shop", [
    "Digitalisierung umfasst auch die digitale Unterstützung interner Geschäftsprozesse (Backstage).",
    "Eine reine Frontstage-App ohne Prozessbezug wäre nur ein Teilaspekt, nicht die gesamte Transformation.",
    "Die Digitalisierung von Produkten und Dienstleistungen ist eine eigene Dimension neben Backstage und Frontstage.",
    "Wer Digitalisierung nur als „Website bauen“ versteht, verfehlt die drei Dimensionen.",
    "Laut Text reicht es aus, einmalig eine Website zu erstellen; Backstage und Produktgestaltung sind irrelevant.",
], [True, True, True, True, False], [
    T("Backstage ist die erste Dimension."),
    T("Frontstage allein deckt nicht alle Dimensionen ab."),
    T("Produkt-/DL-Digitalisierung ist Dimension drei."),
    T("Genau diese Verengung widerspricht dem Dreidimensionen-Modell."),
    F("Strategie und Dimensionen gehen weit über eine Website hinaus."),
], "4/5", CTX41))

cases.append(case("4.1", 15, "Backstage vs. Frontstage – Abgrenzung", [
    "Backstage betrifft die interne Wertschöpfung und Prozesse hinter den Kulissen.",
    "Frontstage betrifft die kundenbezogene Gestaltung von Angeboten und die Verbindung zum Nutzer.",
    "Statusinformationen an Kundinnen nach einer Online-Bestellung berühren die Kundenschnittstelle und sind kein rein internes Buchhaltungsdetail.",
    "Ein Prozessmodell für den Einkauf dient vor allem der internen Kommunikation und Orientierung.",
    "Frontstage und Backstage sind synonyme Bezeichnungen für dieselbe Dimension.",
], [True, True, True, True, False], [
    T("Interne Wertschöpfung = Backstage."),
    T("Kundenverbindung = Frontstage."),
    T("Kundenstatus gehört zur kundenseitigen Information im Prozessbeispiel."),
    T("Prozessmodell als interner Überblick (z. B. Praktikum im Einkauf)."),
    F("Es sind zwei klar getrennte Dimensionen."),
], "4/5", CTX41))

cases.append(case("4.1", 16, "Wertschöpfung und digital unterstützte Arbeitsschritte", [
    "Innerhalb digital unterstützter Prozesse können Personen Überblick bewahren und Entscheidungen schneller und gezielter treffen.",
    "Digitale Systeme können Arbeitsschritte unterstützen und steuern.",
    "Ohne jegliche Prozesslogik entsteht trotzdem automatisch ein Geschäftsprozess, sobald Software installiert ist.",
    "Wertschöpfung bleibt der Bezugspunkt der Backstage-Dimension.",
    "Entscheidungen werden durch bessere Prozessübersicht eher erschwert als erleichtert.",
], [True, True, False, True, False], [
    T("Überblick und schnellere, gezieltere Entscheidungen sind genannte Vorteile."),
    T("Erweiterung und Steuerung von Arbeitsschritten durch Systeme."),
    F("Ein Geschäftsprozess braucht logisch zusammenhängende Aktivitäten und Zielbeitrag – Software allein reicht nicht."),
    T("Backstage stützt Wertschöpfung."),
    F("Der Text betont schnellere und gezieltere Entscheidungen – nicht Erschwerung."),
], "4/5", CTX41))

cases.append(case("4.1", 17, "Kundenkonto und digitale Fußabdrücke", [
    "Die Speicherung eines 3D-Fußbildes im Kundenkonto verknüpft Frontstage-Service und digitale Kundendaten.",
    "Der Abgleich von Fußabdruck und Schuhmodell zielt auf optimale Passform.",
    "Solche Services zeigen Potenzial, Frustration durch falsche Größen zu reduzieren.",
    "Frontstage-Innovationen können vor Ort und online greifen.",
    "Digitale Kundendaten im Kundenkonto widersprechen dem Frontstage-Gedanken und gehören nur zur Buchhaltung.",
], [True, True, True, True, False], [
    T("Humanic-Beispiel: Scan → Kundenkonto."),
    T("Passform-Abfrage ist das Ziel."),
    T("Falsche Größen und Frustration sind der Ausgangsproblemkontext."),
    T("Service vor Ort und via App / Online-Bestellung."),
    F("Kundendaten im Konto dienen gerade der kundenorientierten Frontstage."),
], "4/5", CTX41))

cases.append(case("4.1", 18, "Tricky: „smart“ vs. bloße Digitalisierung", [
    "Eine PDF-Anleitung digitalisiert Information, erweitert das Spielerlebnis aber nur schwach.",
    "Eine missionsabhängige digitale Erweiterung kann das Erlebnis „smart“ anfühlen lassen.",
    "Produktbindung kann durch erweiterte digitale Erlebnisse steigen.",
    "Jede digitale Datei am Produkt ist automatisch die höchste Form smarter Digitalisierung.",
    "Die dritte Dimension unterscheidet Intensitätsstufen der Produkt-/DL-Digitalisierung.",
], [True, True, True, False, True], [
    T("PDF = einfache Ergänzung."),
    T("Erkundungsmission = erlebnisprägende Erweiterung."),
    T("Gesteigerte Bindung wird genannt."),
    F("Der Text unterscheidet Stufen; nicht jede Datei ist „smart“ im starken Sinn."),
    T("Von Ergänzung bis nachhaltiger Erlebnisprägung."),
], "4/5", CTX41))

cases.append(case("4.1", 19, "Strategie: Fokus auf eine oder mehrere Dimensionen", [
    "Unternehmen können sich auf eine Dimension konzentrieren.",
    "Unternehmen können mehrere Dimensionen kombinieren.",
    "Aus dem Dimensionsfokus lässt sich eine Digitalisierungsstrategie ableiten.",
    "Digital Business meint die Digitalisierung des Unternehmens im Gesamten.",
    "Wer alle drei Dimensionen ignoriert, folgt trotzdem automatisch einer klaren Digitalisierungsvision.",
], [True, True, True, True, False], [
    T("Ein-Dimensionen-Fokus ist erlaubt."),
    T("Mehrere Dimensionen sind ebenfalls möglich."),
    T("Strategieableitung ist der nächste Schritt."),
    T("Digital Business = Gesamtdigitalisierung."),
    F("Ohne Dimensionsbezug und Vision fehlt genau die strategische Klarheit."),
], "5/5", CTX41))

cases.append(case("4.1", 20, "Gesamtzusammenhang digitale Transformation", [
    "Digitalisierung (IKT-Anwendung) und digitale Transformation (Veränderung) gehören zusammen gedacht.",
    "Backstage, Frontstage und smarte Produkte/DL bilden die drei Dimensionen.",
    "Geschäftsprozesse brauchen logischen Zusammenhang, Wiederholbarkeit sowie definierten Anfang und Enden.",
    "Erfolgreiche Transformation erweitert Nutzen und Erlebnis innovativ, statt im Weg zu stehen.",
    "Digitale Transformation beschränkt sich laut Text auf die Umbenennung der IT-Abteilung ohne Prozess-, Kunden- oder Produktbezug.",
], [True, True, True, True, False], [
    T("Anwendung und daraus folgende Veränderung sind gekoppelt."),
    T("Die Dreiteilung ist das Kernmodell von §4.1."),
    T("Definition des Geschäftsprozesses."),
    T("Leitlinie Nutzen/Erlebnis erweitern."),
    F("Transformation betrifft Prozesse, Kunden und Produkte entlang der Dimensionen – nicht nur Umbenennung."),
], "5/5", CTX41))

# =============================================================================
# §4.2 Neue Produkte, Dienstleistungen und Geschäftsmodelle
# =============================================================================

cases.append(case("4.2", 1, "Digitale Ergänzungen im Alltag", [
    "Bei den Wiener Linien kann der Fahrkartenkauf durch eine App ergänzt werden.",
    "Über ein Kundenkonto lassen sich Fahrkarten digital verwalten und vorweisen.",
    "Lebensmittellieferdienste ermöglichen, Einkäufe nach Hause liefern zu lassen.",
    "Lebensmittelhändler selbst können solche Lieferdienstleistungen ebenfalls anbieten.",
    "Digitale Tickets und Lieferdienste haben laut Text keinerlei Bezug zu Technologie oder Geschäftsmodellen.",
], [True, True, True, True, False], [
    T("Wiener-Linien-App als Ergänzung."),
    T("Digitale Verwaltung und Vorweis über Kundenkonto."),
    T("Gurkerl, Flink, Mjam u. a. als Beispiele."),
    T("Billa, Hofer, Interspar u. a. bieten Lieferdienst selbst an."),
    F("Gerade Technologie und neue Geschäftsmodelle sind der Punkt des Kapitels."),
], "1/5", CTX42))

cases.append(case("4.2", 2, "Was ist ein Geschäftsmodell?", [
    "Ein Geschäftsmodell beschreibt, wie ein Unternehmen auf Basis einer Geschäftsidee ein Produkt oder eine Dienstleistung erzeugt, bereitstellt und vertreibt.",
    "Dabei werden eingesetzte Ressourcen und Einnahmen gegenübergestellt, um Gewinn zu erwirtschaften (Wertschöpfung).",
    "Geschäftsmodelle haben nichts mit Erzeugung, Bereitstellung oder Vertrieb zu tun.",
    "IT-Einsatz kann Produkte, Dienstleistungen und Geschäftsmodelle verändern.",
    "Wertschöpfung im Geschäftsmodell-Kontext meint den erwirtschafteten Gewinn nach Ressourcen- und Einnahmenbetrachtung.",
], [True, True, False, True, True], [
    T("Erzeugen, Bereitstellen, Vertreiben auf Basis einer Geschäftsidee."),
    T("Ressourcen vs. Einnahmen → Gewinn/Wertschöpfung."),
    F("Genau diese drei Schritte stehen in der Definition."),
    T("IT verändert Produkte, DL und Geschäftsmodelle."),
    T("Wertschöpfung wird so im Definitionsblock verankert."),
], "1/5", CTX42))

cases.append(case("4.2", 3, "IT-Einsatz und multiplizierte Wertschöpfung", [
    "Technologie schafft neue Möglichkeiten, Produkte und Dienstleistungen mithilfe von Geschäftsprozessen zu erstellen, bereitzustellen und zu vertreiben.",
    "Darauf aufbauend kann Wert für Unternehmen und Kunden generiert werden.",
    "Dieser Wert kann durch Technologieeinsatz multipliziert werden.",
    "Multiplikation kann bedeuten, eine größere Anzahl an Kunden zu erreichen oder Produkte zu individualisieren.",
    "IT-Einsatz verringert laut Text immer zwangsläufig die erreichbare Kundenzahl auf null.",
], [True, True, True, True, False], [
    T("Wirkungskette IT → Prozesse → Produkte/DL."),
    T("Wert für Unternehmen und Kunden."),
    T("Multiplikation des Werts durch Technologie."),
    T("Reichweite und Individualisierung als Beispiele."),
    F("Das Gegenteil: größere Kundenzahl ist ein Beispiel für Multiplikation."),
], "2/5", CTX42))

cases.append(case("4.2", 4, "Webshop als Geschäftsmodell", [
    "Ein klassischer Webshop erlaubt, Produkte direkt online zu bestellen.",
    "Amazon.de oder Zalando.de sind Beispiele für Webshops.",
    "Im Webshop werden Güter direkt an Kunden oder an einzelne Unternehmen verkauft.",
    "Ein Webshop wird typischerweise von einem Verkäufer betrieben.",
    "Ein Webshop ist identisch mit einem Online-Handelsplatz, auf dem viele Privatpersonen als Verkäufer auftreten.",
], [True, True, True, True, False], [
    T("Direkte Online-Bestellung."),
    T("Genannte Beispiele."),
    T("Verkauf an Kunden oder Unternehmen."),
    T("Betrieb durch einen Verkäufer – Abgrenzung zum Handelsplatz."),
    F("Webshop ≠ Handelsplatz; beim Handelsplatz haben auch Privatpersonen Zugang zum Anbieten."),
], "2/5", CTX42))

cases.append(case("4.2", 5, "Online-Handelsplatz", [
    "Ein Online-Handelsplatz ist eine Online-Umgebung für Käufer und Verkäufer.",
    "Im Gegensatz zum Webshop haben hier auch Privatpersonen Zugang, um Produkte anzubieten und zu verkaufen.",
    "willhaben.at und eBay.de sind Beispiele für Handelsplätze.",
    "Der Handelsplatzbetreiber stellt über eine Plattform den Zugang für Kunden und Verkäufer zur Verfügung.",
    "Auf einem Handelsplatz dürfen laut Text ausschließlich der Plattformbetreiber selbst Produkte verkaufen – nie Dritte.",
], [True, True, True, True, False], [
    T("Umgebung für Käufer und Verkäufer."),
    T("Privatpersonen als Anbieter – zentrale Differenz zum Webshop."),
    T("Genannte Beispiele."),
    T("Zugang über die Plattform des Betreibers."),
    F("Gerade Drittverkäufer und Privatpersonen sind typisch für den Handelsplatz."),
], "2/5", CTX42))

cases.append(case("4.2", 6, "Soziale Netzwerke als Geschäftsmodell", [
    "Eine virtuelle Umgebung bzw. Online-Gemeinschaft ist auch als soziales Netzwerk bekannt.",
    "Facebook, X oder LinkedIn sind Beispiele.",
    "Personen mit gleichen Interessenschwerpunkten können sich austauschen und Kontakte pflegen.",
    "Solche Geschäftsmodelle verdienen unter anderem durch den Verkauf von Werbefläche Geld.",
    "Soziale Netzwerke finanzieren sich laut Text ausschließlich durch den physischen Verkauf von Tonträgern.",
], [True, True, True, True, False], [
    T("Online-Gemeinschaft = soziales Netzwerk."),
    T("Genannte Plattformbeispiele."),
    T("Austausch und Kontaktpflege."),
    T("Werbefläche als Einnahmequelle."),
    F("Werbefläche – nicht Tonträgervertrieb – ist das genannte Modell."),
], "2/5", CTX42))

cases.append(case("4.2", 7, "Pure-Play-Geschäftsmodelle", [
    "Pure-Play-Geschäftsmodelle finden ausschließlich online statt.",
    "Die Unternehmen agieren vorrangig im digitalen Raum und besitzen keine physischen Geschäftsniederlassungen im Sinne eines Ladens.",
    "Viele dieser Modelle wurden durch das Internet erst ermöglicht.",
    "Ein Pure-Play-Anbieter betreibt typischerweise kein klassisches Ladengeschäft zum physischen Anschauen der Ware.",
    "Pure-Play bedeutet, dass das Unternehmen nur Filialen besitzt und keinerlei Online-Präsenz haben darf.",
], [True, True, True, True, False], [
    T("Ausschließlich online."),
    T("Keine physischen Geschäftsniederlassungen in dem Sinne."),
    T("Internet als Ermöglichungsbedingung."),
    T("Kein physisches Anschauen im eigenen Laden."),
    F("Pure-Play ist digital-first ohne Laden – nicht filiallonly ohne Online."),
], "3/5", CTX42))

cases.append(case("4.2", 8, "Clicks and Mortar", [
    "Clicks-and-Mortar-Geschäftsmodelle verbinden digitale Präsenz mit dem traditionellen physischen Geschäft.",
    "Digitale Präsenz kann eine Website oder Plattform als Erweiterung des physischen Geschäfts sein.",
    "Thalia als Buchhändler mit Laden und Webshop ist ein Beispiel.",
    "Clicks and Mortar sind das Gegenteil von Pure-Play.",
    "Clicks and Mortar bedeutet, dass jedes physische Geschäft sofort geschlossen werden muss.",
], [True, True, True, True, False], [
    T("Digital + physisch."),
    T("Website/Plattform als Erweiterung."),
    T("Thalia-Beispiel."),
    T("Pure-Play nur online; Clicks and Mortar hybrid."),
    F("Physisches Geschäft bleibt gerade Teil des Modells."),
], "3/5", CTX42))

cases.append(case("4.2", 9, "Musikindustrie: iTunes und Einzelstücke", [
    "Apple hat das alte Modell des Vertriebs ganzer Tonträger (z. B. CDs) durch legalen Onlinevertrieb einzelner Stücke verändert.",
    "Früher musste man oft eine CD als ganzes Paket erwerben.",
    "iTunes Store in Kombination mit Abspielgeräten (iPod) veränderte den Musikkonsum.",
    "IKT war Grundlage dieser Geschäftsmodelländerung.",
    "Laut Text hat Apple den Musikkonsum unverändert gelassen und nur Plattenläden renoviert.",
], [True, True, True, True, False], [
    T("Einzelstückvertrieb statt nur Gesamtpaket."),
    T("CD als Paket = Ausgangslage."),
    T("iTunes + iPod als Innovationspaar."),
    T("Informations- und Kommunikationstechnologie als Basis."),
    F("Der Text beschreibt eine Revolution des Konsum- und Vertriebsmodells."),
], "3/5", CTX42))

cases.append(case("4.2", 10, "Spotify: Streaming und Abo", [
    "Spotify bietet Musikstücke nicht zum Download-Erwerb einzelner Titel, sondern zum Streamen über das Internet.",
    "Das Geschäftsmodell baut auf einem Abo-Modell auf.",
    "Millionen Anwender erhalten Zugang zu nahezu allen verfügbaren Audiotiteln.",
    "Damit verschiebt sich der Fokus vom Erwerb einzelner Stücke zum laufenden Zugang.",
    "Spotify ist laut Text identisch mit dem alten CD-Pakethandel ohne Abo und ohne Streaming.",
], [True, True, True, True, False], [
    T("Streaming statt Download-Kauf einzelner Stücke."),
    T("Abo-Modell."),
    T("Breiter Katalogzugang."),
    T("Von Kauf zu Zugang."),
    F("Streaming-Abo ist gerade die Differenz zum alten Modell."),
], "3/5", CTX42))

cases.append(case("4.2", 11, "Erlösmodell – Begriff", [
    "Das Erlösmodell beantwortet, wie das Unternehmen Geld verdient und Gewinn erwirtschaftet.",
    "Technologie beeinflusst, wie Erlösmodelle gestaltet werden können.",
    "Unternehmen können sich auf ein Erlösmodell fokussieren oder Modelle kombinieren.",
    "Im Digitalisierungskontext sind Werbemodell und Abonnentenmodell besonders bedeutsam.",
    "Ein Erlösmodell ist laut Text irrelevant, weil digitale Unternehmen keine Einnahmen benötigen.",
], [True, True, True, True, False], [
    T("Einnahmen und Gewinn = Kernfrage."),
    T("Technologie prägt die Gestaltung."),
    T("Fokus oder Kombination möglich."),
    T("Werbung und Abo als Fokusbeispiele."),
    F("Erlösmodelle sind zentraler Aspekt jedes Geschäftsmodells."),
], "3/5", CTX42))

cases.append(case("4.2", 12, "Werbemodell", [
    "Beim Werbemodell ist Werbung die Einnahmequelle.",
    "Eine Website mit zahlreichen Besuchern kann durch Anzeige von Werbung Einnahmen generieren.",
    "„Website“ umfasst hier Nachrichten, Webshops, soziale Netzwerke und andere Plattformen.",
    "Viele „kostenlos“ wirkende Dienste (Google-Suche, willhaben, geizhals) setzen auf das Werbemodell.",
    "Beim Werbemodell zahlen Nutzerinnen immer einen festen Monatsbeitrag und sehen nie Werbung.",
], [True, True, True, True, False], [
    T("Werbung = Einnahmequelle."),
    T("Reichweite → Werbeeinnahmen."),
    T("Breite Auslegung von Website/Plattform."),
    T("Genannte „kostenlose“ Dienste."),
    F("Das wäre eher Abomodell; Werbemodell finanziert über Anzeigen."),
], "3/5", CTX42))

cases.append(case("4.2", 13, "Digitale Werbeformen", [
    "Google kann Werbeplätze u. a. über den Verkauf von Schlüsselwörtern (AdWords) anbieten.",
    "AdSense betrifft den Verkauf von Werbeanzeigen bei bestimmten Suchwörtern.",
    "Vergleichsportale wie geizhals.at können Bannerwerbung – ggf. kombiniert mit Suchbegriffen – anbieten.",
    "Tageszeitungen nutzen das Werbemodell mit, um Online-Betriebskosten zu decken.",
    "Online-Werbung existiert laut Text nicht; nur gedruckte Plakate sind erlaubt.",
], [True, True, True, True, False], [
    T("AdWords / Schlüsselwörter."),
    T("AdSense / Anzeigen bei Suchwörtern."),
    T("Banner und Suchbegriffkombination."),
    T("Zeitungen und Kostendeckung."),
    F("Der Text konzentriert sich explizit auf den digitalen Werberaum."),
], "4/5", CTX42))

cases.append(case("4.2", 14, "Alphabet und Werbeanteil", [
    "Der Online-Werbemarkt ist ein stark vertretenes Werbemodell.",
    "Bei Alphabet stammten in dem genannten Quartal 2023 rund 65,5 von 86,3 Milliarden Dollar Umsatz aus Werbung.",
    "Das entspricht einem Anteil von etwa 75 Prozent.",
    "Diese Zahlen unterstreichen die wirtschaftliche Bedeutung des Werbemodells.",
    "Alphabet erzielte laut Text null Umsatz aus Werbung.",
], [True, True, True, True, False], [
    T("Starkes Werbemodell online."),
    T("65,5 von 86,3 Mrd. USD."),
    T("75 %-Anteil."),
    T("Zahlen als Beleg der Bedeutung."),
    F("Der Text nennt gerade den hohen Werbeanteil."),
], "4/5", CTX42))

cases.append(case("4.2", 15, "Abonnentenmodell", [
    "Das Abonnentenmodell erhebt eine laufende Gebühr für den Zugriff auf Angebote.",
    "Netflix und Spotify sind klassische Beispiele.",
    "Durch Registrierung eines Abonnements erhalten Kunden vollumfänglichen Zugang zu den Inhalten.",
    "Viele Unternehmen, die zuvor andere Modelle nutzten, haben das Abomodell adaptiert.",
    "Beim Abonnentenmodell gibt es niemals laufende Gebühren – alles ist einmalig und werbefinanziert.",
], [True, True, True, True, False], [
    T("Laufende Gebühr für Zugang."),
    T("Netflix/Spotify."),
    T("Vollzugang über Abo."),
    T("Adaption durch viele Anbieter."),
    F("Laufende Gebühr ist Definitionsmerkmal."),
], "4/5", CTX42))

cases.append(case("4.2", 16, "Zeitungen: von Werbung zu Kombi-Modellen", [
    "Früher waren Online-Inhalte vieler Zeitungen oft ohne Einschränkung mit Werbung konsumierbar.",
    "Mittlerweile setzen Inhaltsanbieter verstärkt auf Abonnentenmodell oder Kombination aus Werbung und Abo.",
    "Die Diversifizierung des Angebots ist Teil des Wandels durch Digitalisierung.",
    "Kombinationsmodelle sind im Text vorgesehen.",
    "Zeitungen dürfen laut Text ausschließlich Werbung nutzen und niemals Abos anbieten.",
], [True, True, True, True, False], [
    T("Früheres werbefinanziertes Frei-Modell."),
    T("Shift zu Abo oder Kombi."),
    T("Wandel der Branchenmodelle."),
    T("Kombi Werbung+Abo explizit."),
    F("Abo und Kombi sind gerade der beschriebene Trend."),
], "4/5", CTX42))

cases.append(case("4.2", 17, "Adobe: Wechsel zum Abonnentenmodell", [
    "Adobe bot früher Softwarepakete wie Photoshop gegen einmalige Zahlung zum lebenslangen Erwerb an.",
    "2013 wechselte Adobe vom klassischen Umsatzmodell auf ein Abonnentenmodell.",
    "Heute sind monatliche oder jährliche Gebühren für die Nutzung üblich.",
    "Das Beispiel verdeutlicht den Wandel von Erlösmodellen durch Digitalisierung.",
    "Adobe verkauft laut Text weiterhin ausschließlich einmalige Lebenslizenzen ohne Abo.",
], [True, True, True, True, False], [
    T("Einmalzahlung / lebenslanger Erwerb früher."),
    T("Wechsel 2013."),
    T("Monats-/Jahresgebühr heute."),
    T("Branchenwandel der Erlösmodelle."),
    F("Der Wechsel zum Abo ist das Lehrbuchbeispiel."),
], "4/5", CTX42))

cases.append(case("4.2", 18, "Tricky: Webshop vs. Handelsplatz vs. Netzwerk", [
    "Ein Webshop hat einen Betreiber-Verkäufer; ein Handelsplatz öffnet die Plattform auch für viele Anbieter inklusive Privatpersonen.",
    "Soziale Netzwerke monetarisieren u. a. über Werbefläche, nicht primär über den Direktverkauf eigener physischer Lagerware.",
    "willhaben ist als Handelsplatz, nicht als klassischer Ein-Verkäufer-Webshop einzuordnen.",
    "Amazon-Webshop und willhaben-Handelsplatz sind wirtschaftlich identische Modelle ohne Unterschied.",
    "Die drei Modelltypen Webshop, Handelsplatz und soziales Netzwerk werden im Text unterschieden.",
], [True, True, True, False, True], [
    T("Kernabgrenzung Webshop/Handelsplatz."),
    T("Netzwerke und Werbefläche."),
    T("willhaben = Handelsplatzbeispiel."),
    F("Unterschied Verkäuferstruktur und Marktrolle ist zentral."),
    T("Drei exemplarische IT-basierte Geschäftsmodelle."),
], "5/5", CTX42))

cases.append(case("4.2", 19, "Tricky: Pure-Play, Clicks and Mortar, Erlös", [
    "Ein Pure-Play-Musikstreamingdienst ohne Laden ist mit Clicks-and-Mortar-Buchhandel nicht dasselbe Modell.",
    "Thalia kann physischen Laden und Webshop kombinieren (Clicks and Mortar).",
    "Werbemodell und Abonnentenmodell können kombiniert werden.",
    "Ein Unternehmen mit nur Online-Präsenz ohne Laden ist typischerweise Pure-Play, nicht Clicks and Mortar.",
    "Clicks and Mortar verlangt, dass keinerlei digitale Präsenz existieren darf.",
], [True, True, True, True, False], [
    T("Reine Online- vs. Hybridmodelle."),
    T("Thalia-Beispiel."),
    T("Kombi der Erlösmodelle."),
    T("Pure-Play = digital ohne Laden."),
    F("Digitale Präsenz ist gerade Teil von Clicks and Mortar."),
], "5/5", CTX42))

cases.append(case("4.2", 20, "Gesamtzusammenhang Produkte und Geschäftsmodelle", [
    "IT verändert Produkte, Dienstleistungen und Geschäftsmodelle und kann Wert multiplizieren.",
    "Webshop, Online-Handelsplatz und soziales Netzwerk sind zentrale Modellbeispiele.",
    "Pure-Play und Clicks and Mortar unterscheiden rein digitale von hybrid-physischen Ansätzen.",
    "Werbemodell und Abonnentenmodell prägen digitale Erlöse; Kombinationen sind möglich.",
    "Digitalisierung lässt Branchenmodelle laut Text vollkommen unverändert.",
], [True, True, True, True, False], [
    T("Wirkungskette und Multiplikation."),
    T("Drei Modellbeispiele."),
    T("Pure-Play vs. Clicks and Mortar."),
    T("Werbung, Abo, Kombi."),
    F("Der Text betont gerade den Branchen- und Modellwandel."),
], "5/5", CTX42))

# =============================================================================
# §4.3 Das Internet als Plattform für Unternehmen
# =============================================================================

cases.append(case("4.3", 1, "Internet als Netzwerk von Netzwerken", [
    "Das Internet ist zentraler Baustein für die Realisierung der Digitalisierung.",
    "Es ist die wichtigste IT-Infrastruktur für die globale Vernetzung von Personen und Unternehmen.",
    "Das Internet ist als Netzwerk zu verstehen – ein Netzwerk von Netzwerken, die weltweit verbunden sind.",
    "Hochseekabel und drahtlose Übertragung sind Ausprägungen des Zugriffs auf dieses Netzwerk.",
    "Das Internet ist laut Text kein Netzwerk, sondern ausschließlich ein einzelnes isoliertes Endgerät.",
], [True, True, True, True, False], [
    T("Zentraler Baustein der Digitalisierung."),
    T("Wichtigste IT-Infrastruktur der globalen Vernetzung."),
    T("Netzwerk von Netzwerken."),
    T("Kabel und Funk als Zugangsformen."),
    F("Es ist gerade ein verteiltes Netzwerk, kein isoliertes Gerät."),
], "1/5", CTX43))

cases.append(case("4.3", 2, "Was ist ein Netzwerk?", [
    "Ein Rechnernetz ist ein räumlich verteiltes System von Datenstationen.",
    "Datenstationen sind durch Kommunikationseinrichtungen und -wege verbunden, um Daten auszutauschen.",
    "Eine Datenstation kann z. B. PC, Tablet oder Smartphone sein.",
    "WLAN-Modul oder WLAN-Router sind Beispiele für Kommunikationseinrichtungen; Wege können kabelgebunden oder kabellos sein.",
    "In einem Netzwerk dürfen Datenstationen niemals Daten austauschen.",
], [True, True, True, True, False], [
    T("Räumlich verteilte Datenstationen."),
    T("Verbindung zum Datenaustausch."),
    T("Endgeräte als Datenstationen."),
    T("Einrichtungen und Wege wie beschrieben."),
    F("Datenaustausch ist der Zweck des Netzes."),
], "1/5", CTX43))

cases.append(case("4.3", 3, "Internet vs. World Wide Web", [
    "Das WWW ist eine Anwendung bzw. ein Dienst, der auf der Infrastruktur des Internets aufbaut.",
    "Im Web können Informationen bereitgestellt, auffindbar gemacht und dargestellt werden.",
    "Internet und WWW werden im Alltag oft synonym verwendet, sind aber nicht dasselbe.",
    "Das Internet ist das Netzwerk; das WWW ist ein Dienst darauf.",
    "Das WWW ist die physische Verkabelung der Weltmeere und ersetzt das Internet vollständig.",
], [True, True, True, True, False], [
    T("WWW als Dienst auf dem Internet."),
    T("Bereitstellen, Finden, Darstellen."),
    T("Umgangssprachliche Synonymie vs. fachliche Differenz."),
    T("Netzwerk vs. Dienst."),
    F("Hochseekabel gehören zur Internet-Infrastruktur; WWW ist Anwendungsebene."),
], "2/5", CTX43))

cases.append(case("4.3", 4, "E-Mail, WhatsApp und Recherche – Dienste vs. Netz", [
    "Eine E-Mail nutzt das Internet zur Übertragung; sie ist nicht dasselbe wie „das Web“.",
    "Eine Suchanfrage über den Browser betrifft typischerweise das WWW.",
    "WhatsApp-Nachrichten sind Datenübertragungen über das Internet.",
    "Wer „im Internet recherchiert“, meint oft die Suche im Web mit dem Browser.",
    "E-Mail existiert laut Text nur innerhalb von HTML-Seiten und braucht kein Internet.",
], [True, True, True, True, False], [
    T("E-Mail = weiterer Dienst über das Internet."),
    T("Browser-Suche = Web-Nutzung."),
    T("Nachrichtendienste nutzen das Netz."),
    T("Umgangssprachliche Verwechslung wird erklärt."),
    F("E-Mail nutzt das Internet; sie ist nicht auf HTML beschränkt."),
], "2/5", CTX43))

cases.append(case("4.3", 5, "Tim Berners-Lee und die Geburt des Web", [
    "Tim Berners-Lee hat 1989 während seiner Arbeit bei CERN das World Wide Web erfunden.",
    "1990 publizierte er „Information Management: A Proposal“.",
    "Die Motivation lag u. a. darin, Forschungsergebnisse am CERN einfacher zu verwalten und auszutauschen.",
    "Ziel war, Informationen im Internet systematisch abzulegen und wiederauffindbar bereitzustellen.",
    "Das WWW wurde laut Text erst 2020 von einem Social-Media-Konzern erfunden.",
], [True, True, True, True, False], [
    T("1989, CERN, Berners-Lee."),
    T("Aufsatztitel und Jahr 1990."),
    T("CERN-Austausch als Motivation."),
    T("Systematisches Ablegen und Wiederfinden."),
    F("Historie ist 1989/1990 am CERN."),
], "2/5", CTX43))

cases.append(case("4.3", 6, "HTTP, HTML und URL", [
    "HTTP legt fest, welche Schritte nötig sind, damit ein Browser Informationen von einem Server anfordern kann.",
    "HTML strukturiert Informationen so, dass ein Browser sie für Menschen darstellbar macht.",
    "URL ist ein einheitliches System, um Informationen zu adressieren, auffindbar und abrufbar zu machen.",
    "HTTP, HTML und URL sind grundlegende Konzepte für ein funktionierendes WWW.",
    "URL, HTML und HTTP sind laut Text überflüssig, weil Browser ohne Regeln raten sollen.",
], [True, True, True, True, False], [
    T("HTTP = Anforderungsregeln Browser↔Server."),
    T("HTML = Struktur/Darstellung."),
    T("URL = Adressierung."),
    T("Drei Grundpfeiler Berners-Lees."),
    F("Ohne diese Konzepte funktioniert das WWW nicht."),
], "2/5", CTX43))

cases.append(case("4.3", 7, "Was ist ein Protokoll?", [
    "Ein IT-Kommunikationsprotokoll hält Regeln fest, wie Rechner präzise miteinander kommunizieren.",
    "Es regelt u. a., wie Meldungen und Antworten formuliert werden und welche Zeichen/Inhalte zulässig sind.",
    "Es ist nicht dasselbe wie ein Besprechungsprotokoll.",
    "Die Briefpost-Analogie illustriert verbindliche Adress- und Absenderkonventionen.",
    "Protokolle sind optionale Empfehlungen ohne Regelcharakter und ohne Einfluss auf die Kommunikation.",
], [True, True, True, True, False], [
    T("Regeln präziser Rechnerkommunikation."),
    T("Meldungen, Antworten, Repräsentationen."),
    T("Abgrenzung zum Sitzungsprotokoll."),
    T("Post-Analogie im Text."),
    F("Protokolle sind verbindliche Kommunikationsregeln."),
], "3/5", CTX43))

cases.append(case("4.3", 8, "Surfen: Browser, HTTP, HTML, Hyperlinks", [
    "Beim „Surfen“ kommuniziert typischerweise ein Browser über HTTP mit einem Server.",
    "Informationen werden u. a. mittels HTML angezeigt.",
    "Links (URLs) auf Seiten verweisen auf weitere Ressourcen.",
    "Solche Verknüpfungen nennt man Hyperlinks; sie machen das Web zu einem Netzwerk verknüpfter Ressourcen.",
    "Hyperlinks sind verboten und dürfen auf Webseiten nicht vorkommen.",
], [True, True, True, True, False], [
    T("Browser + HTTP + Server."),
    T("HTML-Darstellung."),
    T("URL-Links."),
    T("Hyperlinks als Wesenskern des Web."),
    F("Hyperlinks sind konstitutiv für das WWW."),
], "3/5", CTX43))

cases.append(case("4.3", 9, "Server, Request und Response", [
    "Ein Server ist ein Rechner, der über das Netzwerk auf Anfragen wartet.",
    "Server-Software bearbeitet Anfragen aus dem Internet.",
    "Der Browser stellt eine Anfrage (request); die Server-Software liefert eine Antwort (response).",
    "Die Antwort kann je nach Auffindbarkeit der HTML-Seite unterschiedlich ausfallen.",
    "Server senden niemals Antworten und Browser stellen niemals Anfragen.",
], [True, True, True, True, False], [
    T("Server wartet auf Anfragen im Netz."),
    T("Server-Software als Anfragebearbeiter."),
    T("Request-Response-Prinzip."),
    T("Abhängig von Auffindbarkeit."),
    F("Genau Request und Response bilden das Grundprinzip."),
], "3/5", CTX43))

cases.append(case("4.3", 10, "Client-Server-Architektur", [
    "Die Client-Server-Architektur unterscheidet Klient (Client) und Server.",
    "Auf einem Server können Anwendungen laufen, die Services über das Netzwerk bereitstellen.",
    "Ein Web-Browser ist ein typischer Client, der Inhalte anfordern kann.",
    "Viele Internet-Interaktionen bauen bis heute auf dieser Architektur und dem Request-Response-Prinzip auf.",
    "Client-Server bedeutet, dass es weder Clients noch Server gibt.",
], [True, True, True, True, False], [
    T("Unterscheidung Client/Server."),
    T("Services über das Netz."),
    T("Browser als Client."),
    T("Weiterhin grundlegend."),
    F("Die Architektur definiert gerade beide Rollen."),
], "3/5", CTX43))

cases.append(case("4.3", 11, "Dienste und Plattformen im WWW", [
    "Auf Basis von Client-Server und Kommunikationsprinzipien können im WWW verschiedene Dienstleistungen bereitgestellt werden.",
    "Vergleichsplattformen, Webshops und Inhaltsanbieter (Nachrichten) sind Beispiele.",
    "Der Web-Browser ist die zentrale Schnittstelle zum Zugriff auf viele dieser Dienste.",
    "Nicht immer muss die Schnittstelle ein Browser sein; Unternehmenssoftware kann selbst Internetschnittstellen nutzen.",
    "Im WWW sind laut Text keinerlei Dienstleistungen möglich.",
], [True, True, True, True, False], [
    T("Vielfalt der Web-Dienste."),
    T("Genannte Ausprägungen."),
    T("Browser als zentrale Schnittstelle."),
    T("Unternehmenssoftware / B2B-Kommunikation."),
    F("Gerade die Dienstvielfalt wächst stetig."),
], "3/5", CTX43))

cases.append(case("4.3", 12, "Internetökonomie", [
    "Durch Leistungsangebote im digitalen Netzwerk entsteht ein Markt bzw. wird ein Markt digital erweitert.",
    "Ökonomische Transaktionen können über diesen digitalen Ort abgewickelt werden.",
    "Die Internetökonomie umfasst die ökonomische Nutzung des Internets für wertschöpfende Transaktionen.",
    "Es entsteht ein digitaler Markt bzw. eine digitale Plattform in einem digitalen Netzwerk mit Marktteilnehmerinnen.",
    "Internetökonomie bedeutet, dass Online-Transaktionen wertschöpfend unmöglich sind.",
], [True, True, True, True, False], [
    T("Digitaler Markt / Markterweiterung."),
    T("Transaktionsort digital."),
    T("Definition Internetökonomie."),
    T("Digitale Plattform und Teilnehmerinnen."),
    F("Wertschöpfende Transaktionen sind der Kern."),
], "3/5", CTX43))

cases.append(case("4.3", 13, "Internet als Unternehmensplattform", [
    "Das Internet wird zu einer neuen Plattform für Unternehmen.",
    "Anbieter und Kunden können darüber in Austausch treten.",
    "Manchmal braucht es zusätzliche Plattformbetreiber für einen spezifischen Markt.",
    "Für Endkunden ist der Plattformbetreiber nicht immer offensichtlich.",
    "Unternehmen dürfen laut Text das Internet niemals als Plattform nutzen.",
], [True, True, True, True, False], [
    T("Neue Unternehmensplattform."),
    T("Austausch Anbieter–Kunden."),
    T("Plattformbetreiber als Intermediäre."),
    T("Nicht immer sichtbar für Endkunden (z. B. refurbed)."),
    F("Genau die Plattformnutzung ist das Kapitelthema."),
], "4/5", CTX43))

cases.append(case("4.3", 14, "Refurbed als digitaler Marktplatz", [
    "Refurbed bietet einen digitalen Marktplatz für Firmen mit gebrauchter, professionell wiederaufbereiteter Technologie.",
    "Privatpersonen können suchen und Produkte anpassen; im Hintergrund werden Angebote von Händlern gesammelt.",
    "Der Kunde schließt mit dem entsprechenden Händler einen Kaufvertrag; das Produkt wird zugeschickt.",
    "Refurbed stellt den Marktplatz digital zur Verfügung.",
    "Bei Refurbed gibt es laut Text keine Händler im Hintergrund und keinen Kaufvertrag.",
], [True, True, True, True, False], [
    T("Marktplatz für refurbished Tech."),
    T("Angebotssammlung im Hintergrund."),
    T("Kaufvertrag Kunde–Händler."),
    T("Plattformbereitstellung durch Refurbed."),
    F("Händler und Kaufvertrag sind zentral im Beispiel."),
], "4/5", CTX43))

cases.append(case("4.3", 15, "willhaben als digitale Plattform", [
    "willhaben ist ein Beispiel für einen digitalen Marktplatz.",
    "Über die Plattform können Anzeigen in verschiedenen Branchen aufgegeben werden.",
    "Interessenten treten in Kontakt, um Transaktionen abzuschließen.",
    "Damit entsteht ein digitaler Ort ökonomischen Austauschs.",
    "willhaben erlaubt laut Text keinerlei Anzeigen und keinen Kontakt zwischen Interessenten.",
], [True, True, True, True, False], [
    T("Digitaler Marktplatz."),
    T("Branchenanzeigen."),
    T("Kontakt und Transaktion."),
    T("Internetökonomie in der Praxis."),
    F("Anzeigen und Kontakt sind der Kern."),
], "4/5", CTX43))

cases.append(case("4.3", 16, "Tricky: WWW-Bausteine vs. Internet-Infrastruktur", [
    "Hochseekabel und Heim-WLAN betreffen den Internetzugang als Netzwerk, nicht die HTML-Syntax.",
    "HTML strukturiert Webinhalte; es ersetzt nicht die physische Netzwerkinfrastruktur.",
    "HTTP regelt Browser-Server-Kommunikation; es ist kein Besprechungsprotokoll.",
    "URL adressiert Ressourcen im Web.",
    "HTML ist identisch mit dem gesamten Internet als Netzwerk von Netzwerken.",
], [True, True, True, True, False], [
    T("Infrastruktur vs. Auszeichnungssprache."),
    T("HTML ≠ Kabelnetz."),
    T("Kommunikationsprotokoll vs. Sitzungsnotiz."),
    T("Adressierung."),
    F("HTML ist Web-Dienstkonzept, nicht das Internet selbst."),
], "4/5", CTX43))

cases.append(case("4.3", 17, "Tricky: Client, Server und Plattformbetreiber", [
    "Beim Websurfen ist der Browser typischerweise Client, der Inhalte vom Server anfordert.",
    "Ein Plattformbetreiber kann einen digitalen Markt bereitstellen, auf dem andere Händler verkaufen.",
    "Endkunden merken den Intermediär nicht immer (refurbed-Logik).",
    "Request-Response bleibt architektonisch grundlegend.",
    "Client-Server-Architektur schließt digitale Marktplätze logisch aus.",
], [True, True, True, True, False], [
    T("Browser als Client."),
    T("Marktplatzrolle."),
    T("Nicht immer sichtbarer Betreiber."),
    T("Request-Response."),
    F("Marktplätze bauen gerade auf Web/Client-Server-Infrastruktur auf."),
], "5/5", CTX43))

cases.append(case("4.3", 18, "Tricky: E-Mail ist nicht WWW", [
    "E-Mail ist ein Dienst, der das Internet nutzt.",
    "WWW ist ein anderer Dienst auf derselben Infrastruktur.",
    "Beide können parallel existieren, ohne identisch zu sein.",
    "Browserzugriff auf HTML-Seiten ist Web-Nutzung; SMTP-Mailverkehr ist nicht automatisch „Websurfen“.",
    "Weil beide das Internet nutzen, sind E-Mail und WWW laut Text dasselbe Konzept ohne Unterschied.",
], [True, True, True, True, False], [
    T("E-Mail über Internet."),
    T("WWW als eigener Dienst."),
    T("Parallele Dienste."),
    T("Alltagsunterscheidung Surfen vs. Mail."),
    F("Gemeinsame Infrastruktur ≠ begriffliche Identität."),
], "5/5", CTX43))

cases.append(case("4.3", 19, "Digitale Märkte und ökonomische Transaktionen", [
    "Digitale Plattformen erweitern Märkte um einen digitalen Ort für Transaktionen.",
    "Marktteilnehmerinnen agieren im digitalen Netzwerk.",
    "Refurbed und willhaben illustrieren unterschiedliche Marktplatzlogiken.",
    "Ohne Internet als Infrastruktur wären diese Plattformen in der beschriebenen Form nicht möglich.",
    "Die Internetökonomie verbietet wertschöpfende Online-Transaktionen.",
], [True, True, True, True, False], [
    T("Digitaler Transaktionsort."),
    T("Teilnehmerinnen im Netz."),
    T("Zwei Lehrbuchbeispiele."),
    T("Internet als Ermöglichungsbedingung seit >30 Jahren."),
    F("Wertschöpfende Transaktionen sind Definitionsinhalt."),
], "5/5", CTX43))

cases.append(case("4.3", 20, "Gesamtzusammenhang Internet-Plattform", [
    "Internet = Netzwerk von Netzwerken; WWW = Dienst darauf mit HTTP, HTML und URL.",
    "Client-Server und Request-Response tragen die Architektur vieler Web-Interaktionen.",
    "Internetökonomie meint ökonomische Nutzung für wertschöpfende Transaktionen auf digitalen Märkten/Plattformen.",
    "Plattformbetreiber können Anbieter und Kunden zusammenbringen.",
    "Laut Text sind Internet und WWW synonyme Infrastrukturen ohne Dienste, Protokolle oder Marktplätze.",
], [True, True, True, True, False], [
    T("Netz vs. Dienst und drei Web-Bausteine."),
    T("Architekturprinzipien."),
    T("Definition Internetökonomie."),
    T("Intermediation."),
    F("Der Text differenziert und entfaltet Dienste, Protokolle und Plattformen."),
], "5/5", CTX43))

# =============================================================================
# §4.4 Wirtschaftsinformatik als übergreifende Disziplin
# =============================================================================

cases.append(case("4.4", 1, "Wirtschaftsinformatik zwischen BWL und Informatik", [
    "Die Wirtschaftsinformatik wird meist durch ihre fächerübergreifende Stellung zwischen Betriebswirtschaftslehre und Informatik positioniert.",
    "Themen der WI müssen nicht zwingend „nur Informatik“ oder „nur BWL“ sein.",
    "Je nach Fokus kann WI als eigenständiges oder als fächerübergreifendes Fach betrachtet werden.",
    "An der WU Wien steht der betriebswirtschaftliche Fokus im Vordergrund und wie Technik ihn unterstützen kann.",
    "Wirtschaftsinformatik hat laut Text keinerlei Bezug zu Betriebswirtschaft oder Informatik.",
], [True, True, True, True, False], [
    T("Klassische Einordnung zwischen BWL und Informatik."),
    T("Überlappung und Eigenanteile."),
    T("Eigenständig oder fächerübergreifend."),
    T("WU-Fokus betriebswirtschaftlich + technische Unterstützung."),
    F("Gerade die Verzahnung BWL–Informatik ist der Ausgangspunkt."),
], "1/5", CTX44))

cases.append(case("4.4", 2, "Zwei zentrale Bausteine", [
    "Zum Verständnis der WI gehören das Bewusstsein für Interdisziplinarität.",
    "Zum Verständnis gehört auch die Rolle von Anwendungs- und Informationssystemen.",
    "WI behandelt u. a. Digitalisierung im Unternehmenskontext und Transformation von Geschäftsmodellen.",
    "Auch Auswirkungen digitaler Netzwerke auf ökonomische Transaktionen gehören dazu.",
    "Interdisziplinarität und Informationssysteme sind laut Text für die WI irrelevant.",
], [True, True, True, True, False], [
    T("Interdisziplinarität als Baustein."),
    T("Anwendungs-/Informationssysteme als Baustein."),
    T("Anschluss an Kap. 4-Themen."),
    T("Digitale Netzwerke und Transaktionen."),
    F("Beide Bausteine sind ausdrücklich zentral."),
], "1/5", CTX44))

cases.append(case("4.4", 3, "Technische Perspektive: drei Felder", [
    "Aus technischer Perspektive sind u. a. Produktionsmanagement (Operations Management), Informatik und Data Science relevant.",
    "Produktionsmanagement fokussiert Produktion/Herstellung, Prozesse, Lieferketten, Inventar und Kapazitäten.",
    "IKT kann dort Schritte automatisieren, optimieren und unterstützen.",
    "Informatik betrifft Planung, Gestaltung und Umsetzung von Systemen und Technologien.",
    "Die technische Perspektive kennt laut Text weder Prozesse noch Daten noch Systeme.",
], [True, True, True, True, False], [
    T("Drei technische Felder."),
    T("OM-Themenkatalog."),
    T("Automatisieren/Optimieren/Unterstützen."),
    T("Von Algorithmen bis Softwarelösungen."),
    F("Genau Prozesse, Systeme und Daten stehen im Fokus."),
], "2/5", CTX44))

cases.append(case("4.4", 4, "Informatik und Data Science in der WI", [
    "Informatik umfasst u. a. Software Engineering, Semantic Web oder komplexe Systeme.",
    "Data Science arbeitet mit großen Datensätzen (Big Data, Open Data).",
    "Unternehmen können durch Datenanalyse Entscheidungen treffen; das ist herausfordernd.",
    "Informatik, Statistik und Mathematik werden kombiniert; KI und maschinelles Lernen können relevant sein.",
    "Data Science verbietet laut Text jede Nutzung von Unternehmensdaten.",
], [True, True, True, True, False], [
    T("Genannte Informatik-Themen."),
    T("Big/Open Data."),
    T("Entscheidungsunterstützung mit Herausforderungen."),
    T("Methodenmix inkl. KI/ML."),
    F("Analyse von Daten zur Entscheidung ist zentral."),
], "2/5", CTX44))

cases.append(case("4.4", 5, "Verhaltenswissenschaftliche Perspektive", [
    "Aus verhaltenswissenschaftlicher Sicht sind u. a. BWL, Soziologie und Psychologie relevant.",
    "BWL fragt, wie IKT Kernprozesse unterstützt, digitale Transformation vorangebracht und disruptive Innovationen genutzt werden.",
    "Auch Management, Regulationen, Datenschutz und Privatsphäre gehören dazu.",
    "Soziologie betrachtet Einfluss von Gruppen/Organisationen auf Systeme und gesellschaftliche Auswirkungen.",
    "Verhaltenswissenschaften spielen laut Text in der WI keine Rolle.",
], [True, True, True, True, False], [
    T("BWL, Soziologie, Psychologie."),
    T("Kernprozesse, Transformation, Disruption."),
    T("Management und Regulierung/Datenschutz."),
    T("Gruppen, Organisationen, Gesellschaft."),
    F("Die verhaltenswissenschaftliche Sicht ist eine der beiden Hauptperspektiven."),
], "2/5", CTX44))

cases.append(case("4.4", 6, "Psychologie, Ethik, Digital Humanism", [
    "Der Mensch bleibt zentrale Komponente: Gestaltung, Bedürfnisse, Emotionen, ethische Entscheidungen.",
    "Es geht um Auswirkungen von Technologie auf Menschen.",
    "Ethik kann Grundlage der Systemgestaltung sein (Werte im System verankern).",
    "Stichworte sind Digital Humanism und Ethical Computing.",
    "Psychologie und Ethik sind laut Text für die Gestaltung von Systemen bedeutungslos.",
], [True, True, True, True, False], [
    T("Mensch im Zentrum."),
    T("Technologie → Mensch."),
    T("Ethik als Gestaltungsgrundlage."),
    T("Digital Humanism / Ethical Computing."),
    F("Gerade ethische und psychologische Fragen werden betont."),
], "2/5", CTX44))

cases.append(case("4.4", 7, "Definition Wirtschaftsinformatik", [
    "Gegenstand der Wirtschaftsinformatik sind Informationssysteme in Wirtschaft, Verwaltung und privatem Bereich.",
    "Sie befasst sich mit Entwicklung, Einführung, Betrieb, Nutzung und Ablösung von Informationssystemen.",
    "Sie versteht sich als interdisziplinäres Fach basierend auf BWL und Informatik.",
    "Zentral sind betriebswirtschaftlicher Fokus in Kombination mit Systemen und Menschen.",
    "WI beschäftigt sich laut Definition ausschließlich mit Hardwareverkauf ohne Systeme und ohne Organisationen.",
], [True, True, True, True, False], [
    T("IS in Wirtschaft/Verwaltung/Privatbereich."),
    T("Lebenszyklus der Systeme."),
    T("Interdisziplinär BWL+Informatik."),
    T("BWL + Systeme + Menschen."),
    F("Informationssysteme und ihr Lebenszyklus sind der Gegenstand."),
], "3/5", CTX44))

cases.append(case("4.4", 8, "Anwendungssystem – Definition", [
    "Ein Anwendungssystem umfasst Programme als Anwendungssoftware für ein konkretes betriebliches Anwendungsgebiet.",
    "Es umfasst auch die dabei gespeicherten Daten (z. B. in einer Datenbank).",
    "Es umfasst die IT-Infrastruktur/Hardware, auf der die Software läuft.",
    "Anwendungssysteme werden für ein Unternehmen oder einen Unternehmensbereich entwickelt bzw. eingesetzt.",
    "Ein Anwendungssystem besteht laut Definition nur aus Papierformularen ohne Software und ohne Daten.",
], [True, True, True, True, False], [
    T("Anwendungssoftware für betriebliches Gebiet."),
    T("Daten inklusive."),
    T("Hardware/Infrastruktur inklusive."),
    T("Unternehmens- oder Bereichsbezug."),
    F("Software, Daten und Infrastruktur sind konstitutiv."),
], "3/5", CTX44))

cases.append(case("4.4", 9, "Beispiele und Anpassung von Anwendungssystemen", [
    "Rechnungswesen (Buchhaltung, Kostenrechnung) ist ein Beispielbereich für Anwendungssysteme.",
    "Tabellenkalkulation wie Excel oder OpenOffice Calc – ggf. mit Datenbankzugriff – gilt als klassisches Beispiel.",
    "Weitere Bereiche: Personalwesen, Logistik, Verkauf, Vertrieb, Marketing.",
    "Im betrieblichen Kontext ist die Anpassung an das Unternehmen oft kostspielig und aufwendig.",
    "Betriebliche Anwendungssysteme brauchen laut Text nie Anpassung und sind immer sofort passgenau.",
], [True, True, True, True, False], [
    T("Rechnungswesen-Beispiel."),
    T("Tabellenkalkulation als Beispiel."),
    T("Weitere betriebliche Bereiche."),
    T("Anpassung als zentrale Herausforderung."),
    F("Anpassung ist gerade ein Kernpunkt der WI."),
], "3/5", CTX44))

cases.append(case("4.4", 10, "Informationssystem vs. Anwendungssystem", [
    "Ein Informationssystem beinhaltet verschiedene Anwendungssysteme für einen betrieblichen Kontext.",
    "Es ist zusätzlich in die Organisationsstruktur eingebettet und integriert.",
    "Im Gegensatz zum Anwendungssystem stellt ein IS ein angepasstes, betriebsindividuelles System dar.",
    "Es erfüllt spezifische Anforderungen der betrieblichen Organisation.",
    "Informationssystem und Anwendungssystem sind laut Text synonyme Begriffe ohne Unterschied.",
], [True, True, True, True, False], [
    T("Mehrere Anwendungssysteme im Kontext."),
    T("Einbettung in die Organisation."),
    T("Betriebsindividuell angepasst."),
    T("Spezifische Organisationsanforderungen."),
    F("Die Abgrenzung ist ein zentrales Lehrziel."),
], "3/5", CTX44))

cases.append(case("4.4", 11, "Informationssystem – Definition mit Menschen und Maschinen", [
    "Ein Informationssystem wird zum Zweck eines bestimmten Unternehmens entwickelt und angepasst.",
    "Es berücksichtigt organisatorische Strukturen.",
    "Es besteht aus Menschen und Maschinen (Rechner, Anwendungssystem, Netzwerk, Kommunikationseinrichtungen).",
    "Menschen und Maschinen erzeugen und/oder benutzen Information und sind durch Kommunikationsbeziehungen verbunden.",
    "Ein Informationssystem besteht laut Definition nur aus einer isolierten App ohne Menschen und ohne Organisation.",
], [True, True, True, True, False], [
    T("Unternehmenszweck und Anpassung."),
    T("Organisatorische Strukturen."),
    T("Menschen + Maschinen."),
    T("Informationserzeugung/-nutzung und Kommunikation."),
    F("Mensch und Organisation sind konstitutiv."),
], "3/5", CTX44))

cases.append(case("4.4", 12, "Komponenten: Daten, Prozesse, Menschen", [
    "Grundlegend im Unternehmen sind Daten, Prozesse und Menschen.",
    "Betriebe verwenden und produzieren Daten bei Geschäftsfällen.",
    "Geschäftsfälle lassen sich in Prozessen als systematische Arbeitsschritte festhalten.",
    "Menschen innerhalb oder außerhalb des Unternehmens (z. B. Kunden, Lieferdienste) bearbeiten Geschäftsfälle in Rollen.",
    "Daten, Prozesse und Menschen sind laut Text für Informationssysteme bedeutungslos.",
], [True, True, True, True, False], [
    T("Drei Grundlagen."),
    T("Daten bei Geschäftsfällen."),
    T("Prozesse als Arbeitsschritte."),
    T("Interne und externe Menschen/Rollen."),
    F("Sie sind die Grundlage des IS-Zusammenspiels."),
], "3/5", CTX44))

cases.append(case("4.4", 13, "Hardware, Software, Netzwerke im IS", [
    "Zur operativen Tätigkeit brauchen Akteure Hardware und Software (Anwendungssysteme).",
    "Server können Datenbestände zentral verwalten und sichern.",
    "Mitarbeitende nutzen Rechner und mobile Endgeräte zur Kommunikation und Datenverarbeitung.",
    "Software kann standardisiert zugekauft oder individuell angepasst sein.",
    "Lokale und globale Netzwerke dienen dem Informationsaustausch – auch zwischen Unternehmen.",
], [True, True, True, True, True], [
    T("Hardware + Software nötig."),
    T("Serverrolle."),
    T("Endgeräte der Mitarbeitenden."),
    T("Standard vs. individuell."),
    T("Netzwerke für Austausch."),
], "4/5", CTX44))

cases.append(case("4.4", 14, "ERP-Systeme", [
    "Ein ERP-System ist ein klassisches betriebliches Informationssystem.",
    "Es unterstützt je nach Fokus wesentliche betriebliche Bereiche (z. B. Rechnungswesen, Materialwirtschaft, Produktion).",
    "SAP ist ein Beispielanbieter mit Generationen wie R/3, SAP ERP, Business Suite und S/4HANA.",
    "SAP S/4HANA wird als aktuelle ERP-Lösung genannt.",
    "ERP-Systeme haben laut Text keinerlei Bezug zu betrieblichen Bereichen.",
], [True, True, True, True, False], [
    T("ERP als betriebliches IS."),
    T("Bereichsunterstützung."),
    T("SAP-Generationen."),
    T("S/4HANA aktuell."),
    F("Gerade betriebliche Bereiche sind der Fokus."),
], "4/5", CTX44))

cases.append(case("4.4", 15, "CRM, SCM und Business Intelligence", [
    "CRM-Systeme (Customer-Relationship-Management / Kundenbeziehungsmanagement) unterstützen den systematischen Kontakt zu Kundinnen und Kunden.",
    "SCM-Systeme (Supply-Chain-Management) helfen, Lieferketten und Logistikprozesse zu steuern und den Überblick zu behalten.",
    "Business-Intelligence-Systeme (BI) generieren Analysen auf Basis von Unternehmensdaten zur Entscheidungsunterstützung.",
    "Anbieter wie SAP stellen derartige Informationssystem-Lösungen für Unternehmen bereit.",
    "CRM, SCM und BI sind keine Ausprägungen von Informationssystemen in der Wirtschaftsinformatik.",
], [True, True, True, True, False], [
    T("CRM zielt darauf ab, Kundenbeziehungen systematisch zu pflegen und Interaktionen mit Kundinnen und Kunden zu unterstützen — typische Anwendungsform von Informationssystemen."),
    T("SCM-Systeme unterstützen die Steuerung der Lieferkette (Beschaffung, Produktion, Distribution). Auch das ist eine klassische Informationssystem-Anwendung in Unternehmen."),
    T("Business Intelligence wertet Unternehmensdaten aus und liefert Analysen für Entscheidungen. Damit gehört BI zu den Informationssystemen im Sinne der Wirtschaftsinformatik."),
    T("SAP ist ein bekanntes Beispiel für Anbieter von Informationssystem-Lösungen in diesem Feld."),
    F("Genau das Gegenteil: CRM, SCM und BI sind typische Ausprägungen von Anwendungs- bzw. Informationssystemen."),
], "4/5", CTX44))

cases.append(case("4.4", 16, "Anpassung, Beratung und Menschen im IS", [
    "Informationssysteme werden oft nicht standardisiert „von der Stange“ fertig gekauft, sondern angepasst.",
    "Je nach Unternehmensgröße können Beratungsunternehmen die Anpassung begleiten.",
    "Unternehmen können auch interne Ressourcen für den Anpassungsprozess aufstellen.",
    "Der Mensch in der Organisation ist zentral: Er produziert und verarbeitet Informationen.",
    "Anpassung von Informationssystemen ist laut Text immer überflüssig und nie beratungsrelevant.",
], [True, True, True, True, False], [
    T("Betriebsindividuelle Anpassung."),
    T("Beratung möglich."),
    T("Interne Ressourcen möglich."),
    T("Mensch als Informationsproduzent/-verarbeiter."),
    F("Anpassung und Begleitung sind zentrale WI-Themen."),
], "4/5", CTX44))

cases.append(case("4.4", 17, "Tricky: Anwendungssystem ⊂ Informationssystem-Logik", [
    "Excel als Tabellenkalkulation kann Teil eines Anwendungssystems sein.",
    "Ein Informationssystem bettet Anwendungssysteme in Organisation, Management und Prozesse ein.",
    "Ohne Menschen und Kommunikationsbeziehungen fehlt ein Wesenskern des Informationssystems.",
    "Reine Hardware ohne Software, Daten, Prozesse und Menschen ist kein vollständiges Informationssystem im Sinn des Texts.",
    "Jedes beliebige Einzelprogramm ist automatisch ein vollständiges betriebliches Informationssystem inkl. Organisation.",
], [True, True, True, True, False], [
    T("Excel-Beispiel Anwendungssystem."),
    T("IS = AS + Organisationseinbettung."),
    T("Menschen und Kommunikation."),
    T("Mehrkomponenten-Charakter."),
    F("Organisationseinbettung und Menschen fehlen beim bloßen Einzelprogramm."),
], "5/5", CTX44))

cases.append(case("4.4", 18, "Tricky: Perspektiven nicht vermischen", [
    "Data Science gehört zur technischen Perspektive.",
    "Psychologie gehört zur verhaltenswissenschaftlichen Perspektive.",
    "Produktionsmanagement ist technisch-prozessual ausgerichtet, nicht identisch mit Soziologie.",
    "Datenschutz und Privatsphäre werden im BWL-/Managementkontext der WI angesprochen.",
    "Soziologie und Data Science sind laut Text ein und dieselbe Disziplin ohne Unterschied.",
], [True, True, True, True, False], [
    T("Data Science technisch."),
    T("Psychologie verhaltenswissenschaftlich."),
    T("OM ≠ Soziologie."),
    T("Regulierung/Datenschutz bei BWL-Themen."),
    F("Unterschiedliche Perspektiven und Disziplinen."),
], "5/5", CTX44))

cases.append(case("4.4", 19, "Tricky: Lebenszyklus und Integration", [
    "WI umfasst Entwicklung und Einführung ebenso wie Betrieb, Nutzung und Ablösung von Informationssystemen.",
    "Anforderungen von Menschen müssen so übersetzt werden, dass sie funktional in Anwendungen angepasst werden können.",
    "Dazu braucht es Kenntnisse aus Informatik und BWL (und ggf. weiteren Disziplinen).",
    "Reibungsfreie Integration ist ein Ziel der Anpassung.",
    "Nach der Einführung endet laut Definition jedes Interesse der WI am System endgültig.",
], [True, True, True, True, False], [
    T("Voller Lebenszyklus."),
    T("Anforderungsübersetzung."),
    T("Interdisziplinäre Kenntnisse."),
    T("Integration."),
    F("Betrieb, Nutzung und Ablösung gehören explizit dazu."),
], "5/5", CTX44))

cases.append(case("4.4", 20, "Gesamtzusammenhang Wirtschaftsinformatik", [
    "WI ist interdisziplinär zwischen BWL und Informatik und adressiert Informationssysteme in Wirtschaft, Verwaltung und Privatbereich.",
    "Technische und verhaltenswissenschaftliche Perspektiven strukturieren das Feld.",
    "Anwendungssysteme liefern Software/Daten/Infrastruktur für Aufgabengebiete; Informationssysteme betten sie organisational ein.",
    "ERP-, CRM-, SCM- und BI-Systeme sind praxisnahe Ausprägungen.",
    "Wirtschaftsinformatik beschränkt sich laut Text auf das Auswendiglernen von Programmiersyntax ohne Organisation, Menschen oder Systeme.",
], [True, True, True, True, False], [
    T("Definition und Gegenstand."),
    T("Zwei Perspektiven."),
    T("AS vs. IS."),
    T("ERP und verwandte Systeme."),
    F("Gegenstand sind Informationssysteme und ihre organisationale Einbettung."),
], "5/5", CTX44))

# -----------------------------------------------------------------------------
# Validate and write
# -----------------------------------------------------------------------------

assert len(cases) == 80
by_sub = Counter(c["subsection"] for c in cases)
assert by_sub == {"4.1": 20, "4.2": 20, "4.3": 20, "4.4": 20}

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

OUT.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {len(cases)} cases → {OUT.relative_to(ROOT)}")
print("subcounts", dict(by_sub))
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
print("Sample IDs:", cases[0]["case_id"], cases[19]["case_id"], cases[20]["case_id"], cases[39]["case_id"], cases[40]["case_id"], cases[59]["case_id"], cases[60]["case_id"], cases[-1]["case_id"])
