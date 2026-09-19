#!/usr/bin/env python3
"""Author WiSo §§2.4–2.6 knowledge-first practice cases (no book/figure cues)."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch2.json"


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


CTX24 = (
    "Analysieren Sie Wirtschaften innerhalb der Erdsystemgrenzen. "
    "Bewerten Sie die folgenden Aussagen:"
)
CTX25 = (
    "Analysieren Sie soziales Wohlbefinden als Ziel nachhaltigen Wirtschaftens. "
    "Bewerten Sie die folgenden Aussagen:"
)
CTX26 = (
    "Analysieren Sie gesellschaftliche Voraussetzungen für subjektives Wohlbefinden und Nachhaltigkeit. "
    "Bewerten Sie die folgenden Aussagen:"
)

cases: list[dict] = []

# =============================================================================
# §2.4 Wirtschaften innerhalb der Erdsystemgrenzen (pp. 40–42)
# =============================================================================

cases.append(case("2.4", 1, "Kohlenstoffbudget als Leitgröße", [
    "Das Kohlenstoffbudget bezeichnet die maximale Menge an CO₂, die weltweit noch emittiert werden darf, ohne eine bestimmte Erwärmungsgrenze zu überschreiten.",
    "Das Budget wird typischerweise in Gigatonnen CO₂ (GtCO₂) angegeben.",
    "Es dient als Leitgröße für Klimaschutzmaßnahmen und Reduktionsziele.",
    "Das Kohlenstoffbudget misst ausschließlich die jährliche Stromproduktion eines Landes.",
    "Wirtschaften innerhalb der Erdsystemgrenzen bedeutet unter anderem, innerhalb des verbleibenden Kohlenstoffbudgets zu bleiben.",
], [True, True, True, False, True], [
    T("Das Budget begrenzt die noch zulässigen kumulierten Emissionen relativ zu einem Temperaturziel (z. B. 1,5 °C oder 2 °C)."),
    T("Die übliche Einheit ist GtCO₂."),
    T("Genau dafür wird es in der Klimapolitik genutzt: als Orientierung für Maßnahmen und Ziele."),
    F("Es geht um kumulative CO₂-Mengen und Temperaturgrenzen – nicht um Stromproduktion."),
    T("Das verbleibende Budget ist ein konkretes Beispiel dafür, Erdsystemgrenzen im Wirtschaften zu beachten."),
], "1/5", CTX24))

cases.append(case("2.4", 2, "Verbleibendes Budget und Zeitdruck", [
    "Das verbleibende Kohlenstoffbudget für 1,5 °C (50-%-Wahrscheinlichkeit) liegt in der Größenordnung von etwa 380 GtCO₂.",
    "Bei fortgesetzter derzeitiger Emissionsrate wäre dieses Budget in wenigen Jahren (rund neun Jahre) aufgebraucht.",
    "Je höher die aktuelle Emissionsrate, desto schneller schrumpft die verbleibende Zeit bis zur Budgeterschöpfung.",
    "Ein positives verbleibendes Budget bedeutet, dass Emissionen unbegrenzt steigen dürfen.",
    "Pariser Klimaziele nennen Orientierungswerte wie 1,5 °C bzw. 2 °C über dem vorindustriellen Niveau.",
], [True, True, True, False, True], [
    T("Etwa 380 GtCO₂ ist die genannte Größenordnung für das 1,5-°C-Budget bei 50 % Wahrscheinlichkeit."),
    T("Bei heutiger Rate ist die Erschöpfung in rund neun Jahren die zentrale Zeitdruck-Aussage."),
    T("Budget geteilt durch Jahresemissionen ergibt die grobe Restzeit – höhere Rate verkürzt sie."),
    F("Ein Budget begrenzt gerade die noch zulässigen Emissionen; es erlaubt keinen unbegrenzten Anstieg."),
    T("1,5 °C und 2 °C sind die zentralen Temperaturorientierungen der Pariser Ziele."),
], "1/5", CTX24))

cases.append(case("2.4", 3, "1,5-Grad-Ziel: Politik und Risiko", [
    "Die 1,5-Grad-Grenze wird häufig als kritische Schwelle des Klimawandels betrachtet.",
    "Klimaforscher wie Rockström argumentieren, dass 1,5 °C eher eine politisch gewählte Risikoschwelle als eine feste biophysikalische Erdsystemgrenze ist.",
    "Planetare Grenzen entstehen aus komplexen Wechselwirkungen biophysikalischer und gesellschaftlicher Prozesse.",
    "Die 1,5-Grad-Zielsetzung basiert primär auf politischer Entscheidungsfindung und wissenschaftlichen Risikobewertungen.",
    "Weil 1,5 °C politisch gewählt ist, sind wissenschaftliche Risikobewertungen dafür irrelevant.",
], [True, True, True, True, False], [
    T("In der Klimadebatte gilt 1,5 °C weithin als kritische Orientierungsschwelle."),
    T("Die Unterscheidung „politische Risikoschwelle“ vs. „feste Erdsystemgrenze“ ist zentral."),
    T("Planetare Grenzen sind systemisch und interaktiv – nicht rein politisch gesetzt."),
    T("Politik plus Risikobewertung charakterisieren die 1,5-°C-Zielsetzung."),
    F("Politische Wahl und wissenschaftliche Risikobewertung gehen zusammen; Wissenschaft bleibt relevant."),
], "2/5", CTX24))

cases.append(case("2.4", 4, "Paris 2015, IPCC und Folgen von 1,5 °C", [
    "Die Wahl von 1,5 °C als internationales Klimaziel geht auf das Pariser Abkommen von 2015 zurück.",
    "Besonders vulnerable Staaten haben den Druck in Richtung ambitionierterer Ziele mitgeprägt.",
    "Bereits 1,5 °C Erwärmung können signifikante negative Folgen haben, etwa Extremwetter, Meeresspiegelanstieg, Artensterben und Ernterückgänge.",
    "1,5 °C markiert eine politisch gewählte Risikoschwelle auf präventiven Erwägungen – nicht zwingend eine absolute biophysikalische Grenze.",
    "Unterhalb von 1,5 °C sind klimatische Schäden nach dem Stand der Risikodebatte ausgeschlossen.",
], [True, True, True, True, False], [
    T("Paris 2015 ist der politische Bezugspunkt für das 1,5-°C-Ziel."),
    T("Vulnerabilität und Druck vulnerabler Staaten sind Teil der Entstehungsgeschichte."),
    T("IPCC-nahe Befunde nennen genau solche Folgewirkungen schon bei 1,5 °C."),
    T("Risikoschwelle/Prävention vs. absolute biophysikalische Grenze – korrekte Einordnung."),
    F("Auch unter 1,5 °C gibt es Risiken und Schäden; die Schwelle markiert kein Nullrisiko."),
], "2/5", CTX24))

cases.append(case("2.4", 5, "Kippelemente des Erdsystems", [
    "Zu den Kippelementen zählen unter anderem der grönländische und der westantarktische Eisschild, die atlantische Umwälzzirkulation und tropische Korallenriffe.",
    "Kippelemente können bei anhaltender Erwärmung irreversible Veränderungen erfahren.",
    "Mehrere Studien deuten darauf hin, dass kritische Phasen bereits im Bereich von etwa 1,5 bis 2 °C eintreten können.",
    "Unsicherheit über genaue Schwellenwerte spricht für eine konservative Herangehensweise beim Klimaschutzmaßstab.",
    "Kippelemente reagieren erst, wenn die Erwärmung sicher über 4 °C liegt; darunter sind sie irrelevant.",
], [True, True, True, True, False], [
    T("Diese Systeme sind die klassischen Beispiele für Kippelemente."),
    T("Irreversibilität bzw. schwer umkehrbare Zustandswechsel sind das Risiko."),
    T("Der kritische Bereich 1,5–2 °C ist der in der Debatte genannte Einstiegsbereich."),
    T("Unsicherheit → Vorsicht: deshalb 1,5 °C als Maßstab."),
    F("Viele Hinweise liegen bereits bei 1,5–2 °C; „erst ab 4 °C“ ist falsch."),
], "2/5", CTX24))

cases.append(case("2.4", 6, "Neun planetare Grenzen – Überblick", [
    "Neben dem Klima wurden weitere Erdsystemgrenzen definiert, etwa Biosphärenintegrität, Landnutzung, biochemische Kreisläufe und Süßwasser.",
    "Weitere Dimensionen sind unter anderem Ozeanversauerung, neuartige Substanzen, stratosphärisches Ozon und atmosphärische Aerosole.",
    "Das Überschreiten solcher Grenzen kann erhebliche Risiken für Menschen mit sich bringen, etwa bei Wasserzugang, Ernährungssicherheit oder Ökosystemstabilität.",
    "Die Klimakrise ist die einzige Erdsystemgrenze, die für Wirtschaftspolitik relevant ist.",
    "Das Erdsystem umfasst verknüpfte Prozesse (z. B. Kohlenstoffkreislauf, Biodiversität, Atmosphärenchemie), die Stabilität und Bewohnbarkeit sichern.",
], [True, True, True, False, True], [
    T("Klima ist eine von mehreren Dimensionen; die genannten gehören dazu."),
    T("Diese ergänzen die Liste der neun Grenzen."),
    T("Menschliche Risiken (Wasser, Ernährung, Ökosysteme, Arbeitsplätze) folgen aus Überschreitungen."),
    F("Mehrere Grenzen sind wirtschaftlich und gesellschaftlich relevant – nicht nur Klima."),
    T("Verknüpfte Prozesse tragen gemeinsam zur Bewohnbarkeit bei."),
], "2/5", CTX24))

cases.append(case("2.4", 7, "Safe operating space und Rockström", [
    "Das Konzept der planetaren Grenzen identifiziert zentrale Prozesse, die die Belastbarkeit des Erdsystems bestimmen.",
    "Ziel ist ein „sicherer Handlungsraum“ (safe operating space), in dem sozioökonomische Aktivitäten die Stabilität planetarer Systeme nicht gefährden.",
    "Werden biophysikalische Schwellen überschritten, können nicht umkehrbare Veränderungen das Erdsystem in einen weniger stabilen Zustand versetzen.",
    "Weil die Systeme verknüpft sind, kann das Überschreiten einer Grenze auf andere Bereiche auswirken.",
    "Um die Klimakrise zu bewältigen, dürfen die übrigen planetaren Grenzen vernachlässigt werden.",
], [True, True, True, True, False], [
    T("Belastbarkeit über zentrale Prozesse – Kern des Konzepts."),
    T("Safe operating space ist die Zielformulierung."),
    T("Irreversibilität und Zustandswechsel sind das Risiko der Überschreitung."),
    T("Interdependenz der Grenzen ist zentral."),
    F("Gerade wegen der Verknüpfung müssen auch die übrigen Grenzen intakt bleiben."),
], "3/5", CTX24))

cases.append(case("2.4", 8, "Überschrittene Grenzen und Status", [
    "Nach aktuellen Einschätzungen sind mehrere der neun planetaren Grenzen überschritten – in neueren Synthesen sieben von neun.",
    "Zu den überschrittenen Dimensionen zählen unter anderem Klimasystem, Biosphärenintegrität und Landnutzungsänderung.",
    "Auch biochemische Kreisläufe (Stickstoff/Phosphor), Süßwasser und neuartige Substanzen gelten als überschritten.",
    "Ozeanversauerung wird ebenfalls als überschrittene Dimension geführt.",
    "Stratosphärisches Ozon und die global aggregierte Aerosolbelastung gelten als innerhalb des sicheren bzw. tolerierbaren Bereichs – bei Aerosolen regional aber teils kritisch.",
], [True, True, True, True, True], [
    T("Sieben von neun überschritten – aktueller Befund der Planetary-Boundaries-Synthesen."),
    T("Klima, Biosphäre, Landnutzung gehören zu den überschrittenen."),
    T("N/P, Süßwasser und novel entities ebenfalls."),
    T("Ozeanversauerung ist in der überschrittenen Liste."),
    T("Ozon regeneriert (Montreal); Aerosole global noch ok, regional kritisch."),
], "3/5", CTX24))

cases.append(case("2.4", 9, "Risiko-Zone und Rückkopplungen", [
    "Das Grenzsystem lässt sich als Zonen denken: sicherer Handlungsraum, Risiko-Zone und Überschreitung.",
    "Befinden sich mehrere Systeme zugleich jenseits kritischer Schwellen, können Rückkopplungen verstärkt werden.",
    "Ein Beispiel für Rückkopplung: Klimawandel → Biodiversitätsverlust → geringere CO₂-Speicherung → weiterer Temperaturanstieg.",
    "Wenn eine Grenze überschritten ist, sind Rückkopplungen auf andere Systeme ausgeschlossen.",
    "Aktuell wird die Erde als im „globalen Risiko-Bereich“ beschrieben, weil mehrere Systeme gleichzeitig kritische Schwellen überschreiten.",
], [True, True, True, False, True], [
    T("Grün/gelb/rot bzw. safe/risk/exceeded ist die Zonenlogik."),
    T("Gleichzeitige Überschreitungen erhöhen Rückkopplungsrisiken."),
    T("Genau diese Kette ist ein klassisches Rückkopplungsbeispiel."),
    F("Gerade Interdependenz macht Übergreifen wahrscheinlich – nicht ausgeschlossen."),
    T("Mehrere simultane Überschreitungen = globaler Risiko-Bereich."),
], "3/5", CTX24))

cases.append(case("2.4", 10, "Österreich und Effort Sharing", [
    "In Österreich begannen die Treibhausgasemissionen 2022 erstmals zu sinken.",
    "Eine nationale Emissionsreduktion kann dennoch hinter den Anforderungen der Effort-Sharing-Verordnung zurückbleiben.",
    "Effort Sharing zielt auf einen angemessenen Beitrag zur Reduktion der globalen Treibhausgase.",
    "Sobald Emissionen in einem Jahr sinken, ist die Effort-Sharing-Vorgabe automatisch erfüllt.",
    "Nationale Trends und europäische Verpflichtungspfade sind zu unterscheiden.",
], [True, True, True, False, True], [
    T("2022 als erstes Sinken der THG in Österreich ist der genannte Befund."),
    T("Sinken ≠ ausreichende Pfadtreue zur Verordnung."),
    T("Angemessener Beitrag ist der Sinn von Effort Sharing."),
    F("Ein jährlicher Rückgang ersetzt nicht den geforderten Reduktionspfad."),
    T("Trendbeobachtung und Verpflichtungsniveau sind getrennte Ebenen."),
], "3/5", CTX24))

cases.append(case("2.4", 11, "Klima und globale Ungleichheit der Verantwortung", [
    "Klimarisiken und Verantwortung sind weltweit ungleich verteilt.",
    "Länder des Globalen Südens haben historisch wenig zum CO₂-Ausstoß beigetragen, spüren die Folgen der Erwärmung aber oft besonders stark.",
    "Historisch entfällt ein großer Anteil der Emissionen auf USA und EU sowie weitere Teile des Globalen Nordens.",
    "Der Globale Süden trägt historisch den größten Anteil der kumulierten Emissionen.",
    "Zu den Klimarisiken zählen unter anderem Starkniederschläge, Überschwemmungen, Dürren oder Lawinen.",
], [True, True, True, False, True], [
    T("Ungleiche Verteilung von Risiko und Verantwortung ist Ausgangspunkt."),
    T("Geringe historische Verantwortung, hohe Betroffenheit – typisches Muster."),
    T("USA/EU und Norden dominieren historisch die kumulierten Anteile."),
    F("Der historische Anteil des Globalen Südens ist vergleichsweise klein (Größenordnung einstelliger bis niedriger Prozentsatz der Historie)."),
    T("Diese Extremereignisse sind genannte Risikotypen."),
], "3/5", CTX24))

cases.append(case("2.4", 12, "Emissionsungleichheit innerhalb von Gesellschaften", [
    "Das reichste Prozent der Weltbevölkerung ist für etwa doppelt so viele CO₂-Emissionen verantwortlich wie die ärmsten 50 %.",
    "Die obersten 10 % der Emittenten stoßen pro Kopf ein Vielfaches dessen aus, was die untersten 10 % ausstoßen.",
    "Ungleichheiten bei Emissionen sind inzwischen oft innerhalb einzelner Länder größer als zwischen Ländern.",
    "Eine kleine wohlhabende Gruppe verursacht über Konsum und Investitionen einen überproportional hohen Anteil der Emissionen.",
    "Weil Arme einen geringeren Fußabdruck haben, ist Armut ein Nachhaltigkeitsideal.",
], [True, True, True, True, False], [
    T("Faktor „doppelt so viel wie die ärmsten 50 %“ für das reichste Prozent."),
    T("Extreme Pro-Kopf-Unterschiede (Größenordnung zweistellig bis >100-fach) charakterisieren die Verteilung."),
    T("Intra-nationale Ungleichheit überholt zunehmend Inter-Länder-Unterschiede."),
    T("Konsum und Investitionen der Wohlhabenden treiben den Anteil."),
    F("Niedriger Verbrauch aus Mangel ist keine nachhaltige Lebensqualität und kein Ideal."),
], "4/5", CTX24))

cases.append(case("2.4", 13, "Budgetrisiko der reichsten Emittenten", [
    "Wenn die obersten 10 % der Emittenten ihr Niveau beibehalten, können sie allein ein Netto-Null-2050-Budget lange vor 2050 ausschöpfen.",
    "Daraus folgt politischer Handlungsdruck: Die emissionsstärksten Gruppen müssen erheblich und rasch dekarbonisieren.",
    "Pro-Kopf-Emissionen der obersten Emittentengruppen liegen weit über denen der untersten Gruppen.",
    "Gleichmäßige Pro-Kopf-Emissionen weltweit würden bedeuten, dass Verteilungsfragen für das Budget irrelevant sind.",
    "Verteilungsfragen der Emissionen sind für die Einhaltung von 1,5 °C mitentscheidend.",
], [True, True, True, False, True], [
    T("Allein die Top-10-% können unter Status quo ein Netto-Null-Budget früh überschreiten (z. B. bis Mitte der 2040er)."),
    T("Schnelle Dekarbonisierung der emissionsstärksten Gruppen ist die Konsequenz."),
    T("Große Pro-Kopf-Spreizung ist empirisch zentral."),
    F("Gerade die Spreizung macht Verteilung hochrelevant fürs Budget."),
    T("Ohne adressierte Ungleichheit droht Budgetüberschreitung trotz Durchschnittszielen."),
], "4/5", CTX24))

cases.append(case("2.4", 14, "Mehrfachbelastung benachteiligter Gruppen", [
    "Sozial benachteiligte Gruppen sind oft mehrfach belastet: geringes Einkommen, unsichere Arbeit, mangelnde Bildung.",
    "Dadurch sind sie stärker von Klimarisiken betroffen und können sich schlechter anpassen.",
    "Klimaschutzmaßnahmen wie eine CO₂-Steuer können sie überproportional treffen, weil Energie und Grundversorgung einen größeren Einkommensanteil binden.",
    "Ärmere Gruppen haben meist einen geringeren ökologischen Fußabdruck.",
    "Ein niedriger Ressourcenverbrauch aus Armut ist mit hoher Lebensqualität und voller gesellschaftlicher Teilhabe gleichzusetzen.",
], [True, True, True, True, False], [
    T("Mehrfachbelastung beschreibt die soziale Ausgangslage."),
    T("Höhere Exposition und geringere Anpassungsfähigkeit folgen daraus."),
    T("Regressive Wirkung über Ausgabenanteile für Energie/Grundbedarf."),
    T("Geringerer Fußabdruck ist typisch – aber kein Wohlfahrtsindikator."),
    F("Armutsbedingter Low-Impact ≠ nachhaltiges gutes Leben."),
], "4/5", CTX24))

cases.append(case("2.4", 15, "Tricky: Grenze vs. Risikoschwelle", [
    "Planetare Grenzen und das 1,5-°C-Ziel sind eng verwandt, aber nicht identisch: 1,5 °C ist stärker eine politische Risikoschwelle.",
    "Ein stabiles Klima ist eine Dimension der planetaren Grenzen; die genaue Grad-Marke ist politisch-risikobasiert gewählt.",
    "Wenn Kippelemente schon nahe 1,5–2 °C kritisch werden können, spricht das für ambitionierte Ziele trotz Unsicherheit.",
    "Politische Herkunft eines Ziels bedeutet, dass biophysikalische Risiken ignoriert werden dürfen.",
    "Safe operating space beschreibt den Raum, in dem sich sozioökonomische Aktivität ohne Gefährdung planetarer Stabilität bewegen soll.",
], [True, True, True, False, True], [
    T("Verwandtschaft ja, Identität nein – Risikoschwelle vs. Systemgrenze."),
    T("Klima-Dimension vs. gewählte Grad-Marke – korrekte Unterscheidung."),
    T("Unsicherheit + frühe Kritikalität → konservative Ambition."),
    F("Politische Setzung baut auf Risikobewertung; Ignorieren wäre Fehlschluss."),
    T("Definition des sicheren Handlungsraums."),
], "4/5", CTX24))

cases.append(case("2.4", 16, "Interdependenz der Grenzen", [
    "Das Überschreiten der Biosphärengrenze kann die CO₂-Senkenfunktion schwächen und so den Klimadruck erhöhen.",
    "Landnutzungsänderung und biochemische Kreisläufe (N/P) können Ökosysteme und Wasserqualität belasten und damit andere Grenzen mitziehen.",
    "Erfolgreicher Ozonschutz (Montreal) zeigt, dass internationale Politik eine Dimension wieder in den sicheren Bereich bringen kann.",
    "Weil Ozon regeneriert, sind die übrigen überschrittenen Grenzen vernachlässigbar.",
    "Wirtschaftspolitik innerhalb der Erdsystemgrenzen muss mehrere Dimensionen gleichzeitig im Blick behalten.",
], [True, True, True, False, True], [
    T("Biosphäre ↔ Klima über Senken ist eine Schlüsselkopplung."),
    T("Land/N-P wirken auf Ökosysteme und Wasser – Querschnittseffekte."),
    T("Montreal als Politik-Erfolg für die Ozon-Dimension."),
    F("Ein Erfolg in einer Dimension entschärft die übrigen Überschreitungen nicht."),
    T("Mehrdimensionalität ist die Konsequenz des Konzepts."),
], "5/5", CTX24))

cases.append(case("2.4", 17, "Budget, Rate und Politikpfad", [
    "Ein knappes Restbudget bei hoher Jahresrate erzeugt Zeitdruck für rasche Emissionsminderung.",
    "Effort-Sharing-Pfade und beobachtete nationale Emissionstrends können auseinanderlaufen.",
    "Historische Verantwortung und aktuelle Betroffenheit fallen geografisch oft auseinander.",
    "Wenn Top-Emittentengruppen ihr Niveau halten, kann das verbleibende Budget auch bei Fortschritten der Übrigen früh erschöpft sein.",
    "Verteilungsgerechtigkeit bei Emissionen ist für 1,5 °C nur ein randständiges Thema ohne Budgetwirkung.",
], [True, True, True, True, False], [
    T("Budget/Rate = Restzeit – klassische Zeitdrucklogik."),
    T("Österreich-Beispiel: Sinken ≠ Pfaderfüllung."),
    T("Norden historisch vs. Süden betroffen – räumliche Asymmetrie."),
    T("Top-10-%-Pfad kann Budget allein früh verbrauchen."),
    F("Verteilung hat direkte Budgetwirkung – nicht randständig."),
], "5/5", CTX24))

cases.append(case("2.4", 18, "Armut, Fußabdruck und Nachhaltigkeit", [
    "Ein geringer ökologischer Fußabdruck aus materieller Not ist von nachhaltigem Wohlstand zu unterscheiden.",
    "Nachhaltigkeit verlangt Bedürfnisbefriedigung innerhalb ökologischer Grenzen – nicht Mangel als Ziel.",
    "CO₂-Preise ohne sozialen Ausgleich können Haushalte mit hohem Energieanteil am Budget stärker belasten.",
    "Anpassungsfähigkeit an Klimarisiken hängt auch von Einkommen, Bildung und Arbeitsplatzsicherheit ab.",
    "Weil Arme weniger emittieren, entfällt die Notwendigkeit, reiche Hochverbrauchergruppen zu dekarbonisieren.",
], [True, True, True, True, False], [
    T("Mangel ≠ Nachhaltigkeit."),
    T("Soziales Fundament plus ökologische Decke – nicht Askese als Ideal."),
    T("Regressive Belastungslogik bei Energiepreisinstrumenten."),
    T("Sozioökonomische Ressourcen steuern Anpassungskapazität."),
    F("Gerade Hochverbrauchergruppen sind für rasche Dekarbonisierung zentral."),
], "5/5", CTX24))

cases.append(case("2.4", 19, "Kipprisken und konservative Politik", [
    "Unsichere Kippschwellen sprechen eher für frühere und stärkere Emissionsminderung als für Abwarten.",
    "Irreversible Veränderungen an Eisschilden oder Ozeanzirkulation hätten langfristige wirtschaftliche Folgen über Risiken für Infrastruktur, Ernährung und Siedlungen.",
    "Korallenriffe als Kippelement betreffen auch Fischerei, Küstenschutz und Tourismus ökonomisch.",
    "Konservative Klimapolitik im Sinne der Vorsicht bedeutet, Risiken erst zu handeln, wenn Kippen bereits eingetreten ist.",
    "1,5 °C als Maßstab lässt sich als präventive Antwort auf unsichere, aber folgenreiche Kipprisken lesen.",
], [True, True, True, False, True], [
    T("Vorsichtsprinzip bei Unsicherheit → früher handeln."),
    T("Makro- und sektoraler Schaden über physische Systeme."),
    T("Ökonomische Kanäle neben ökologischen."),
    F("Vorsicht heißt vorbeugen – nicht erst nach dem Kippen reagieren."),
    T("Präventive Risikoschwelle ist die Einordnung."),
], "5/5", CTX24))

cases.append(case("2.4", 20, "Gesamtzusammenhang Erdsystemgrenzen", [
    "Wirtschaften innerhalb der Erdsystemgrenzen heißt, sozioökonomische Aktivität im sicheren Handlungsraum zu halten.",
    "Klima ist notwendig, aber nicht hinreichend: weitere Grenzen (Biosphäre, Land, Nährstoffe, Wasser, Stoffe, Ozeane) bleiben mitentscheidend.",
    "Emissionsungleichheit zwischen und innerhalb von Ländern beeinflusst, wer Budgets verbraucht und wer Schäden trägt.",
    "Technische Klimapolitik ohne Blick auf Verteilung und Anpassung kann soziale Härten verstärken.",
    "Ein einzelnes Jahr sinkender Emissionen in einem Land ersetzt die Notwendigkeit, mehrere planetare Dimensionen und gerechte Transformationspfade zu beachten.",
], [True, True, True, True, False], [
    T("Safe operating space als Operationsziel."),
    T("Mehrdimensionalität – Klima allein reicht nicht."),
    T("Wer emittiert vs. wer trägt – Verteilungsachse."),
    T("Instrumente ohne sozialen Ausgleich können regressiv wirken."),
    F("Ein Jahresrückgang ersetzt weder Mehrdimensionalität noch Gerechtigkeitspfad."),
], "5/5", CTX24))

# =============================================================================
# §2.5 Soziales Wohlbefinden als Ziel nachhaltigen Wirtschaftens (pp. 43–45)
# =============================================================================

cases.append(case("2.5", 1, "Wozu Wirtschaft dient", [
    "Im Zentrum steht die Frage, wozu Wirtschaft dient.",
    "Dient Wirtschaft nicht dem Wohlbefinden der Menschen, verliert sie ihre Legitimation.",
    "Wirtschaftliches Handeln zielt darauf, menschliches Wohl zu fördern.",
    "Wohlbefinden ist für die Legitimation wirtschaftlichen Handelns irrelevant.",
    "Nachhaltiges Wirtschaften verknüpft ökonomische Ziele mit sozialem Wohlbefinden.",
], [True, True, True, False, True], [
    T("Die Zweckfrage ist der Einstieg der Wohlbefindensdebatte."),
    T("Ohne Beitrag zum Wohlbefinden fehlt die Legitimation."),
    T("Menschliches Wohl als Ziel wirtschaftlichen Handelns."),
    F("Gerade Legitimation hängt am Wohlbefinden."),
    T("Nachhaltigkeit integriert ökologische und soziale Ziele mit dem guten Leben."),
], "1/5", CTX25))

cases.append(case("2.5", 2, "Bedürfnisse vs. Präferenzen", [
    "Bedürfnisse sind objektive Voraussetzungen menschlicher Existenz (z. B. Ernährung, Gesundheit, Zugehörigkeit, Sicherheit).",
    "Präferenzen sind subjektive Bewertungen und kulturell geprägt.",
    "Präferenzen können Bedürfnisse widerspiegeln, aber auch durch Werbung, Statusstreben oder soziale Vergleiche verzerrt sein.",
    "Bedürfnisse und Präferenzen bezeichnen dasselbe und sind austauschbar.",
    "Bedürfnisse markieren, was für ein menschenwürdiges Leben erfüllt sein muss – sie haben ethische Relevanz.",
], [True, True, True, False, True], [
    T("Objektive Existenzvoraussetzungen – Bedürfnisbegriff."),
    T("Subjektiv und kulturell – Präferenzbegriff."),
    T("Verzerrbarkeit durch Werbung/Status/Vergleiche."),
    F("Die Unterscheidung ist zentral und nicht austauschbar."),
    T("Ethische Mindeststandards für Würde/Gerechtigkeit."),
], "1/5", CTX25))

cases.append(case("2.5", 3, "Nutzen, SWB und Lebenszufriedenheit", [
    "Nutzen ist eine theoretische Modellgröße zur Erklärung von Entscheidungen – nicht dasselbe wie Wohlbefinden.",
    "Subjektives Wohlbefinden (SWB) umfasst emotionale und kognitive Bewertung des Lebens.",
    "Lebenszufriedenheit ist die längerfristige Einschätzung des eigenen Lebens.",
    "Glück bezeichnet eher kurzfristige positive Emotionen und ist nur eine Teilkomponente von Wohlbefinden.",
    "Nutzen misst direkt Gerechtigkeit und Nachhaltigkeit einer Gesellschaft.",
], [True, True, True, True, False], [
    T("Analytische Entscheidungsgröße ≠ empirisches Wohlbefinden."),
    T("Emotion + Kognition = SWB."),
    T("Langfristiges Gesamturteil = Lebenszufriedenheit."),
    T("Affektive Kurzfristkomponente = Glück."),
    F("Nutzen ist wertneutral bezüglich Gerechtigkeit/Nachhaltigkeit."),
], "2/5", CTX25))

cases.append(case("2.5", 4, "Wachstum kann Nutzen heben und Wohlbefinden senken", [
    "Wirtschaftliches Wachstum kann den Nutzen erhöhen, das Wohlbefinden aber mindern.",
    "Das geschieht etwa, wenn Wachstum Ungleichheit, Stress oder Umweltzerstörung verstärkt.",
    "Präferenzen sind nicht immer moralisch oder ökologisch wünschenswert.",
    "Menschen können umweltschädliche oder sozial destruktive Präferenzen haben.",
    "Steigender Nutzen garantiert steigendes nachhaltiges Wohlbefinden.",
], [True, True, True, True, False], [
    T("Nutzen↑ und SWB↓ können parallel laufen."),
    T("Ungleichheit/Stress/Umwelt als Kanäle."),
    T("Präferenzen sind nicht automatisch normativ gut."),
    T("Schädliche Präferenzen sind möglich."),
    F("Gerade die Lücke Nutzen vs. SWB widerlegt die Garantie."),
], "2/5", CTX25))

cases.append(case("2.5", 5, "Begriffstabelle: Ebenen und Nachhaltigkeit", [
    "Bedürfnisse liefern objektive Mindeststandards für Gerechtigkeit.",
    "Präferenzen sind sozial formbar und nicht immer nachhaltig.",
    "SWB dient als empirischer Indikator gesellschaftlicher Qualität.",
    "Lebenszufriedenheit kann als Maß für Erfolg von Politik und Institutionen gelesen werden.",
    "Alle genannten Konzepte – Bedürfnis, Präferenz, Nutzen, SWB, Glück – bedeuten inhaltlich dasselbe.",
], [True, True, True, True, False], [
    T("Objektive Gerechtigkeitsmindeststandards."),
    T("Formbarkeit + nicht immer nachhaltig."),
    T("Empirischer Qualitätsindikator."),
    T("Politik-/Institutionenerfolg über Lebenszufriedenheit."),
    F("Unterschiedliche Ebenen – Unterscheidung ist der Punkt."),
], "2/5", CTX25))

cases.append(case("2.5", 6, "Einkommen und Lebenszufriedenheit", [
    "Einkommen korreliert mit Lebenszufriedenheit nur bis zu einem gewissen Schwellenwert besonders stark.",
    "Darüber hinaus gewinnen andere Faktoren an relativer Bedeutung.",
    "Gesundheit, soziale Beziehungen, Vertrauen und Beteiligung sind wichtige Determinanten.",
    "Relative Vergleiche beeinflussen, wie Menschen ihr Glück bewerten.",
    "Ab einem mittleren Einkommen steigen Lebenszufriedenheit und Einkommen stets im gleichen Verhältnis weiter.",
], [True, True, True, True, False], [
    T("Schwellenwert-Befund der empirischen Glücksforschung."),
    T("Abflachung der Einkommenswirkung."),
    T("Nicht-einkommensbezogene Determinanten."),
    T("Soziale Vergleiche als Bewertungsrahmen."),
    F("Die Korrelation flacht ab – kein lineares Gleichschritt-Weitersteigen."),
], "3/5", CTX25))

cases.append(case("2.5", 7, "Arbeitslosigkeit, Unsicherheit, Bildung", [
    "Arbeitslosigkeit und Unsicherheit mindern das Wohlbefinden oft stärker als reine Einkommensverluste gleichen Ausmaßes.",
    "Bildung kann Lebenszufriedenheit über Selbstwirksamkeit und Beschäftigungsaussichten erhöhen.",
    "Institutionelle Qualität und soziales Vertrauen hängen mit hohen Glückswerten zusammen.",
    "Länder mit hohem Vertrauen und Umweltbewusstsein gehören häufig zu den glücklichsten.",
    "Arbeitslosigkeit wirkt auf Wohlbefinden ausschließlich über das verlorene Lohneinkommen.",
], [True, True, True, True, False], [
    T("Nicht-pekuniäre Kosten von Arbeitslosigkeit/Unsicherheit."),
    T("Selbstwirksamkeit und Chancen als Bildungskanal."),
    T("Trust/Institutions-Nexus."),
    T("Skandinavien/NL/NZ-Typus in Happiness-Reports."),
    F("Identität, Sicherheit, Teilhabe – nicht nur Lohn."),
], "3/5", CTX25))

cases.append(case("2.5", 8, "Jugend, Sinn und Nachhaltigkeit", [
    "Für Jugendliche hängen Lebenszufriedenheit stark von Sinn, Sicherheit und sozialer Einbindung ab.",
    "Ein großer Anteil junger Erwachsener in Europa äußert Sorgen über Klima und Gesellschaft.",
    "Jugendliche verbinden Glück zunehmend mit Sinnhaftigkeit, Naturerfahrung und Mitgestaltung statt nur mit materiellem Konsum.",
    "Wohlbefinden im 21. Jahrhundert ist eng mit Nachhaltigkeit verknüpft.",
    "Materieller Konsum ist für junge Menschen der einzige stabile Glücksfaktor.",
], [True, True, True, True, False], [
    T("Sinn/Sicherheit/Einbindung als Jugenddeterminanten."),
    T("Hohe Zukunftssorgen (Größenordnung Mehrheit in Umfragen)."),
    T("Shift weg von rein materiellem Konsum."),
    T("Empirischer Trend: SWB und Nachhaltigkeit gekoppelt."),
    F("Gerade nicht der einzige Faktor – Sinn und Mitgestaltung gewinnen."),
], "3/5", CTX25))

cases.append(case("2.5", 9, "Doughnut: soziale Basis und ökologische Decke", [
    "Kate Raworths Doughnut verbindet eine soziale Basis (Grundbedürfnisse für alle) mit einer ökologischen Decke (planetare Belastungsgrenzen).",
    "Der Bereich zwischen den Ringen ist der sichere und gerechte Handlungsraum.",
    "Unter der sozialen Basis liegen soziale Defizite; jenseits der ökologischen Decke liegen Überschreitungen.",
    "Der Doughnut kennt nur eine ökologische Dimension und keine soziale.",
    "Ziel nachhaltiger Wirtschaft im Doughnut-Sinn ist ein gutes Leben für alle innerhalb planetarer Grenzen.",
], [True, True, True, False, True], [
    T("Zwei Ringe: sozial innen, ökologisch außen."),
    T("Grün/Zwischenraum = safe and just space."),
    T("Defizite innen, Überschreitungen außen."),
    F("Beide Dimensionen sind konstitutiv."),
    T("Gutes Leben innerhalb der Grenzen – Zielformel."),
], "3/5", CTX25))

cases.append(case("2.5", 10, "Doughnut Monitor: Länderbefund", [
    "Empirisch erfüllt derzeit kein Land alle sozialen Mindeststandards innerhalb der ökologischen Grenzen.",
    "Reiche Länder überschreiten häufig die ökologischen Grenzen.",
    "Ärmere Länder unterschreiten häufig das soziale Fundament.",
    "Viele High-Income-Länder liegen zugleich sozial ausreichend und ökologisch innerhalb der Decke.",
    "Der Befund zeigt ein systemisches Spannungsfeld zwischen sozialem Fundament und ökologischer Decke.",
], [True, True, True, False, True], [
    T("Kein Land im Idealraum – zentraler Monitor-Befund."),
    T("Reiche: ökologische Überschreitung."),
    T("Ärmere: soziale Unterschreitung."),
    F("Genau diese Doppel-Erfüllung fehlt empirisch."),
    T("Spannungsfeld ist die Botschaft."),
], "3/5", CTX25))

cases.append(case("2.5", 11, "Konsumkorridor", [
    "Ein Konsumkorridor liegt zwischen sozialem Minimum (gut leben) und ökologischem Maximum (was der Planet verkraftet).",
    "Unterernährung liegt unter dem sozialen Minimum.",
    "Übermäßiger Fleisch- und Energieverbrauch kann über dem ökologischen Maximum liegen.",
    "Der Konsumkorridor setzt nur ein Maximum und kein Minimum.",
    "Suffizienz („genug, aber nicht zu viel“) zielt auf stabile Wohlfahrt innerhalb des Korridors.",
], [True, True, True, False, True], [
    T("Min–Max-Korridor."),
    T("Unterernährung = unter Minimum."),
    T("Überkonsum = über Maximum."),
    F("Beides: soziales Min und ökologisches Max."),
    T("Suffizienz als Leitidee im Korridor."),
], "4/5", CTX25))

cases.append(case("2.5", 12, "Produktionskorridor und Suffizienz", [
    "Ein Produktionskorridor beschreibt, welche Güter und Dienstleistungen in welcher Form Bedürfnisse erfüllen sollen, ohne ökologische Grenzen zu überschreiten.",
    "Übermäßiger Konsum bringt abnehmende Zufriedenheitszuwächse.",
    "Suffizienz kann langfristig stabileres Wohlbefinden erzeugen als fortgesetzter Überkonsum.",
    "Produktionskorridore sind unabhängig von Bedürfnissen und dienen nur der Gewinnmaximierung.",
    "Konsum- und Produktionskorridore verknüpfen Bedürfnisbefriedigung mit ökologischen Grenzen.",
], [True, True, True, False, True], [
    T("Was/wie produzieren innerhalb Grenzen."),
    T("Abnehmender Grenznutzen materiellen Mehrkonsums."),
    T("Suffizienz ↔ stabileres SWB."),
    F("Bezug zu Bedürfnissen ist konstitutiv – nicht reine Gewinnlogik."),
    T("Beide Korridore koppeln Soziales und Ökologie."),
], "4/5", CTX25))

cases.append(case("2.5", 13, "Tricky: Nutzen vs. SWB in der Politik", [
    "Eine Politik, die nur kurzfristigen Nutzen maximiert, kann Lebenszufriedenheit untergraben.",
    "SWB und Lebenszufriedenheit geben Hinweise, ob Systeme tatsächlich zum guten Leben beitragen.",
    "Präferenzbefriedigung ist ein hinreichender Beleg für Gerechtigkeit.",
    "Die Unterscheidung der Konzepte hilft, wirtschaftliche, soziale und ökologische Ziele abzustimmen.",
    "Wenn Präferenzen durch Statusvergleiche verzerrt sind, kann steigender Konsum das SWB enttäuschen.",
], [True, True, False, True, True], [
    T("Kurzfristnutzen ≠ nachhaltiges gutes Leben."),
    T("Empirische Feedback-Indikatoren fürs gute Leben."),
    F("Präferenzen ≠ Gerechtigkeitsmaß; Bedürfnisse setzen Mindeststandards."),
    T("Abstimmungsfunktion der Begriffsdifferenzierung."),
    T("Hedonistische Tretmühle / Vergleichseffekte."),
], "4/5", CTX25))

cases.append(case("2.5", 14, "Institutionen, Vertrauen, Umweltbewusstsein", [
    "Hohes soziales Vertrauen korreliert mit höheren Glückswerten.",
    "Institutionelle Qualität stützt Lebenszufriedenheit.",
    "Umweltbewusstsein und Glückswerte können positiv zusammenhängen.",
    "BIP allein erklärt Länderunterschiede im Glück besser als Vertrauen und Institutionen.",
    "Relative Einkommensposition kann Zufriedenheit stärker bewegen als absolute Einkommenszuwächse jenseits einer Schwelle.",
], [True, True, True, False, True], [
    T("Trust-Happiness-Nexus."),
    T("Institutionsqualität als Stütze."),
    T("Umweltbewusstsein in glücklichen Ländern häufig hoch."),
    F("Jenseits der Schwelle dominieren oft nicht-einkommensbezogene Faktoren."),
    T("Relative Vergleiche bleiben wirksam."),
], "4/5", CTX25))

cases.append(case("2.5", 15, "Doughnut vs. reines Wachstumsziel", [
    "Ein reines BIP-Ziel sagt wenig darüber, ob die soziale Basis erreicht und die ökologische Decke eingehalten wird.",
    "Länder können hohes BIP mit ökologischer Überschreitung kombinieren.",
    "Länder können niedriges BIP mit sozialen Defiziten kombinieren.",
    "Der Doughnut ersetzt jede Messung wirtschaftlichen Outputs durch Glücksumfragen allein.",
    "Nachhaltige Wirtschaftspolitik braucht Indikatoren für soziale Fundamente und ökologische Grenzen neben klassischen Aktivitätsmaßen.",
], [True, True, True, False, True], [
    T("BIP blind für beide Ringe."),
    T("Reiche Überschreiter."),
    T("Arme mit Sozialdefizit."),
    F("Doughnut ergänzt – ersetzt nicht jede Outputmessung durch Umfragen."),
    T("Mehrindikatorik ist die Konsequenz."),
], "4/5", CTX25))

cases.append(case("2.5", 16, "Schwellen, Vergleiche, Korridore", [
    "Jenseits einer Einkommensschwelle steigen Zufriedenheitsgewinne aus Mehrkonsum typischerweise ab.",
    "Konsum oberhalb des ökologischen Maximums kann SWB-Gewinne bringen, die ökologisch teuer und sozial ungerecht sind.",
    "Unterschreitung des sozialen Minimums schädigt SWB und Gerechtigkeit zugleich.",
    "Ein Korridoransatz verlangt, Defizite zu schließen und Überschreitungen zurückzuführen.",
    "Suffizienz bedeutet, Bedürfnisse ungedeckt zu lassen, um Emissionen zu senken.",
], [True, True, True, True, False], [
    T("Abflachung jenseits der Schwelle."),
    T("Ökologisch/sozial problematische Mehrkonsumzone."),
    T("Soziales Defizit schädigt SWB und Gerechtigkeit."),
    T("Doppelstrategie: hoch auf Fundament, runter über Decke."),
    F("Suffizienz = genug für gute Leben, nicht Mangel."),
], "5/5", CTX25))

cases.append(case("2.5", 17, "Präferenzen formbar – Politikimplikation", [
    "Weil Präferenzen sozial formbar sind, beeinflussen Werbung und Statusnormen Nachfrage und Umweltwirkung.",
    "Politik und Bildung können nachhaltigere Präferenzen mitprägen, ohne Bedürfnisse zu leugnen.",
    "Nutzenmaximierung im Modell erklärt Verhalten – bewertet aber nicht automatisch Nachhaltigkeit.",
    "Wenn Jugend Glück mit Mitgestaltung verknüpft, steigen Chancen für akzeptierte Nachhaltigkeitspolitik.",
    "Formbare Präferenzen bedeuten, dass objektive Bedürfnisse überflüssig sind.",
], [True, True, True, True, False], [
    T("Formbarkeit → kulturelle Treiber von Nachfrage."),
    T("Prägung möglich, Bedürfnisse bleiben ethischer Anker."),
    T("Positive vs. normative Ebene."),
    T("Akzeptanzkanal über Sinn/Mitgestaltung."),
    F("Bedürfnisse bleiben objektive Mindeststandards."),
], "5/5", CTX25))

cases.append(case("2.5", 18, "SWB-Politik jenseits von BIP", [
    "Arbeitsmarktpolitik, die Unsicherheit senkt, kann SWB stärker heben als reine Transferäquivalente zum Lohnausfall.",
    "Gesundheits- und Beziehungskapital sind zentrale SWB-Investitionen.",
    "Umweltqualität kann SWB direkt stützen und zugleich ökologische Grenzen achten.",
    "Ein Anstieg des Durchschnittseinkommens bei stark steigender Ungleichheit kann mittlere Lebenszufriedenheit dämpfen.",
    "SWB-Orientierung bedeutet, ökologische Grenzen zugunsten kurzfristiger Stimmungsgewinne zu ignorieren.",
], [True, True, True, True, False], [
    T("Unsicherheitskanal > reiner Einkommensersatz."),
    T("Gesundheit/Beziehungen als Determinanten."),
    T("Win-win-Potenzial Umweltqualität."),
    T("Ungleichheit/Vergleiche dämpfen SWB."),
    F("SWB und ökologische Decke gehören im Doughnut zusammen."),
], "5/5", CTX25))

cases.append(case("2.5", 19, "Tricky Wortlaute ohne Absolutismen", [
    "Nutzen und subjektives Wohlbefinden können auseinanderlaufen.",
    "Lebenszufriedenheit ist näher an einem Gesamturteil über das Leben als kurzfristiges Glücksempfinden.",
    "Ein Land kann in Happiness-Rankings vorne liegen und dennoch ökologische Grenzen überschreiten.",
    "Der Doughnut behauptet, hohe Lebenszufriedenheit sei ohne soziale Basis erreichbar.",
    "Produktionsentscheidungen im Korridor priorisieren bedürfnisorientierte Versorgung innerhalb ökologischer Limits.",
], [True, True, True, False, True], [
    T("Mögliche Divergenz der Maße."),
    T("Gesamturteil vs. Affekt."),
    T("Glück und ökologische Überschreitung können koexistieren – daher Doppelziel."),
    F("Soziale Basis ist konstitutiv; ohne sie fehlt der sichere/gerechte Raum."),
    T("Bedürfnis + Grenzen = Produktionskorridorlogik."),
], "5/5", CTX25))

cases.append(case("2.5", 20, "Gesamtzusammenhang Wohlbefinden", [
    "Nachhaltiges Wirtschaften legitmiert sich über Beitrag zum menschlichen Wohlbefinden innerhalb ökologischer Grenzen.",
    "Begriffliche Klarheit (Bedürfnis/Präferenz/Nutzen/SWB) verhindert, dass Wachstum automatisch als Wohlfahrtsgewinn gilt.",
    "Doughnut, Konsum- und Produktionskorridore operationalisieren „gutes Leben für alle innerhalb der Grenzen“.",
    "Empirische SWB-Determinanten verschieben den Fokus von reinem Einkommen zu Gesundheit, Beziehungen, Vertrauen und sinnvoller Arbeit.",
    "Wenn Einkommen die einzige Determinante von Lebenszufriedenheit wäre, wären Institutionen und Umweltqualität für SWB-Politik nebensächlich.",
], [True, True, True, True, False], [
    T("Legitimation + Grenzen."),
    T("Begriffsdifferenz gegen Automatismus Wachstum=Wohlfahrt."),
    T("Operationalisierung über Modelle/Korridore."),
    T("Determinanten-Shift."),
    F("Genau weil Einkommen nicht allein wirkt, sind Institutionen/Umwelt zentral."),
], "5/5", CTX25))

# =============================================================================
# §2.6 Gesellschaftliche Voraussetzungen (pp. 46–47)
# =============================================================================

cases.append(case("2.6", 1, "Umweltqualität und Lebenszufriedenheit", [
    "Saubere Luft, grüne Räume und intakte Ökosysteme erhöhen die Lebenszufriedenheit messbar.",
    "Lärm, Luftverschmutzung und Flächenversiegelung senken die Lebenszufriedenheit.",
    "Naturverbundenheit stärkt psychische Gesundheit und Resilienz.",
    "Umweltqualität hat keinen nachweisbaren Bezug zur Lebenszufriedenheit.",
    "Ökologische Umweltfaktoren sind gesellschaftliche Voraussetzungen von SWB.",
], [True, True, True, False, True], [
    T("Positive Umwelt–SWB-Beziehung."),
    T("Negative Stressoren senken SWB."),
    T("Naturverbundenheit als Resilienzfaktor."),
    F("Empirisch klarer Bezug."),
    T("Umwelt als Voraussetzung, nicht Luxus."),
], "1/5", CTX26))

cases.append(case("2.6", 2, "Gesundheit vor reinem Einkommen", [
    "Länder mit höherer Lebenserwartung und besserer Gesundheitsversorgung erreichen oft höheres Wohlbefinden.",
    "Das kann auch bei moderaterem materiellem Wohlstand gelten.",
    "Eine Wirtschaft, die Gesundheit, Umweltqualität und soziale Stabilität stärkt, kann Glück langfristig stärker steigern als reine Einkommenssteigerung.",
    "Materieller Wohlstand ist der einzige Treiber von SWB.",
    "Healthy-Lifetime-Perspektiven betonen Gesundheit als Wohlfahrtskomponente neben Einkommen.",
], [True, True, True, False, True], [
    T("Gesundheit/LE als SWB-Treiber."),
    T("Auch bei moderatem Einkommen."),
    T("Gesundheit/Umwelt/Stabilität > reines Einkommen langfristig."),
    F("Mehrere Treiber – nicht nur materiell."),
    T("Healthy Lifetime Income-Logik."),
], "1/5", CTX26))

cases.append(case("2.6", 3, "Vertrauen, Kooperation, Gleichheit", [
    "Wohlbefinden entsteht in einem sozialen Kontext.",
    "Vertrauen, Kooperation und Gleichheit sind zentrale Faktoren.",
    "Gesellschaften mit hoher sozialer Gleichheit weisen häufig besonders hohe Glückswerte auf.",
    "Vertrauen ist für SWB irrelevant, sobald das BIP hoch genug ist.",
    "Soziale Beziehungen und Institutionen prägen SWB mit.",
], [True, True, True, False, True], [
    T("Sozialer Kontext."),
    T("Trust/Kooperation/Gleichheit."),
    T("Gleichheits–Glücks-Muster (z. B. skandinavisch)."),
    F("Trust bleibt auch bei hohem BIP relevant."),
    T("Beziehungen/Institutionen als Mitprägung."),
], "2/5", CTX26))

cases.append(case("2.6", 4, "Ungleichheit, Korruption, BIP", [
    "Länder mit starker Ungleichheit oder Korruption liegen im Glück oft deutlich niedriger.",
    "Das kann selbst bei ähnlichem BIP gelten.",
    "BIP-Ähnlichkeit garantiert ähnliche Lebenszufriedenheit.",
    "Korruption untergräbt Vertrauen und damit SWB.",
    "Verteilung und Institutionen erklären SWB-Unterschiede jenseits des BIP mit.",
], [True, True, False, True, True], [
    T("Ungleichheit/Korruption → niedrigere Glückswerte."),
    T("Bei ähnlichem BIP sichtbar – also nicht nur Einkommensniveau."),
    F("Gerade nicht – Institutionen/Verteilung trennen SWB bei gleichem BIP."),
    T("Korruption zerstört Trust."),
    T("Erklärungsbeitrag jenseits BIP."),
], "2/5", CTX26))

cases.append(case("2.6", 5, "Bildung und Zukunftsangst", [
    "Jugendliche in Ländern mit partizipativen Bildungssystemen berichten häufig höhere Lebenszufriedenheit.",
    "Partizipation kann Zukunftsangst mindern.",
    "Bildung wirkt auf SWB auch über Selbstwirksamkeit und Teilhabe, nicht nur über späteres Einkommen.",
    "Schulische Mitgestaltung ist für Jugend-SWB bedeutungslos.",
    "Soziale Einbindung im Bildungssystem stützt Zufriedenheit.",
], [True, True, True, False, True], [
    T("Partizipative Systeme ↔ höhere Jugend-SWB."),
    T("Weniger Zukunftsangst."),
    T("Selbstwirksamkeit/Teilhabe-Kanal."),
    F("Mitgestaltung ist gerade ein positiver Faktor."),
    T("Einbindung stützt Zufriedenheit."),
], "2/5", CTX26))

cases.append(case("2.6", 6, "Mittel vs. Selbstzweck", [
    "Wirtschaftliche Stabilität und ökologische Nachhaltigkeit sind Mittel, um Menschen Freiheit für ein gutes Leben zu geben.",
    "Sie sind nicht Selbstzweck.",
    "Ökologische Nachhaltigkeit kann Freiheit erweitern, indem sie Lebensgrundlagen sichert.",
    "Wirtschaftliche Stabilität ohne Blick auf Freiheit und gutes Leben bleibt unvollständig.",
    "Ökologische Nachhaltigkeit ist Selbstzweck und vom menschlichen Wohlbefinden abzukoppeln.",
], [True, True, True, True, False], [
    T("Mittel zum guten Leben."),
    T("Explizit kein Selbstzweck."),
    T("Sicherung der Grundlagen = Freiheitsbedingung."),
    T("Stabilität braucht Zweckbezug."),
    F("Anbindung an menschliches Wohl bleibt zentral."),
], "2/5", CTX26))

cases.append(case("2.6", 7, "Drei Dimensionen nachhaltiger Wirtschaft", [
    "Sozial: Bedürfnisse aller befriedigen und Ungleichheiten reduzieren.",
    "Ökologisch: innerhalb planetarer Grenzen bleiben.",
    "Psychologisch: subjektives Wohlbefinden und Sinn ermöglichen.",
    "Eine nachhaltige Wirtschaft integriert diese drei Dimensionen.",
    "Die psychologische Dimension ist entbehrlich, sobald BIP und Emissionen passen.",
], [True, True, True, True, False], [
    T("Soziale Dimension."),
    T("Ökologische Dimension."),
    T("Psychologische Dimension."),
    T("Integration der drei."),
    F("Sinn/SWB bleibt eigene Dimension."),
], "3/5", CTX26))

cases.append(case("2.6", 8, "Wo Wohlbefinden entsteht", [
    "Wohlbefinden entsteht dort, wo Bedürfnisse erfüllt, ökologische Stabilität gewahrt und soziale Beziehungen gepflegt werden.",
    "Fehlende Bedürfnisbefriedigung untergräbt SWB.",
    "Ökologische Instabilität kann SWB über Gesundheit und Unsicherheit belasten.",
    "Soziale Isolation kann SWB senken, selbst bei hohem Einkommen.",
    "SWB hängt nur von individuellen Konsumakten ab, nicht von gesellschaftlichen Voraussetzungen.",
], [True, True, True, True, False], [
    T("Drei Bedingungen im Zusammenspiel."),
    T("Bedürfnisdefizit → SWB↓."),
    T("Ökologie → Gesundheit/Unsicherheit → SWB."),
    T("Beziehungen als SWB-Faktor."),
    F("Gesellschaftliche Voraussetzungen sind konstitutiv."),
], "3/5", CTX26))

cases.append(case("2.6", 9, "Umweltpolitik als SWB-Politik", [
    "Maßnahmen gegen Lärm und Luftverschmutzung können Lebenszufriedenheit heben.",
    "Grünräume in Städten sind nicht nur ökologisch, sondern auch sozialpsychologisch relevant.",
    "Flächenversiegelung kann SWB über Hitze, Wasser und fehlende Erholung mindern.",
    "Umweltqualität wirkt erst auf SWB, wenn das BIP ein Extremhoch erreicht.",
    "Naturerfahrung kann Mitgestaltung und Sinnempfinden stützen.",
], [True, True, True, False, True], [
    T("Direkte SWB-Gewinne aus Umweltqualität."),
    T("Grünraum als dualer Nutzen."),
    T("Versiegelungsfolgen."),
    F("Wirkung ist nicht an extremes BIP gebunden."),
    T("Sinn/Natur-Kanal."),
], "3/5", CTX26))

cases.append(case("2.6", 10, "Gleichheit und Glücksmuster", [
    "Hohe soziale Gleichheit geht oft mit hohen Glückswerten einher.",
    "Starke Ungleichheit kann Vergleichsdruck und Unsicherheit erhöhen und SWB dämpfen.",
    "Ähnliches BIP bei unterschiedlicher Gleichheit kann zu unterschiedlichen Glückswerten führen.",
    "Gleichheit wirkt auf SWB ausschließlich über höheres Durchschnittseinkommen.",
    "Vertrauensbildung ist ein Kanal, über den Gleichheit SWB stützt.",
], [True, True, True, False, True], [
    T("Gleichheits–Glücks-Korrelation."),
    T("Vergleich/Unsicherheit als Kanäle."),
    T("BIP-Konstanz, SWB-Varianz über Institutionen/Verteilung."),
    F("Auch Trust, Statusangst, öffentliche Güter – nicht nur Mittelwert."),
    T("Trust-Kanal."),
], "3/5", CTX26))

cases.append(case("2.6", 11, "Healthy Lifetime und moderater Wohlstand", [
    "Längeres gesundes Leben erhöht das Wohlfahrtspotenzial eines Einkommensstroms.",
    "Deshalb können Gesellschaften mit starkem Gesundheitssystem bei moderaterem Einkommen hohes SWB erreichen.",
    "Reine Einkommenssteigerung ohne Gesundheits- und Umweltqualität lässt SWB-Potenzial ungenutzt.",
    "Lebenserwartung ist für SWB bedeutungslos, sobald Konsumgüter verfügbar sind.",
    "Gesundheitsversorgung ist eine gesellschaftliche Voraussetzung nachhaltigen Wohlbefindens.",
], [True, True, True, False, True], [
    T("Healthy lifetime amplifies welfare."),
    T("Moderates Einkommen + Gesundheit → hohes SWB möglich."),
    T("Fehlende Qualität dämpft SWB-Wirkung von Einkommen."),
    F("LE/Gesundheit bleiben zentral."),
    T("Gesundheit als Voraussetzung."),
], "4/5", CTX26))

cases.append(case("2.6", 12, "Korruption und Institutionenqualität", [
    "Korruption schwächt Fairnesswahrnehmung und Vertrauen.",
    "Schwache Institutionen mindern die Verlässlichkeit öffentlicher Güter und damit SWB.",
    "Bei ähnlichem BIP können Länder mit weniger Korruption höhere Glückswerte aufweisen.",
    "Institutionelle Qualität betrifft nur Unternehmen, nicht subjektives Wohlbefinden der Bevölkerung.",
    "Regelvertrauen erleichtert Kooperation und langfristige Planung – beides stützt SWB.",
], [True, True, True, False, True], [
    T("Korruption → Trust↓."),
    T("Öffentliche Güter/Verlässlichkeit."),
    T("BIP-ähnlich, SWB-verschieden."),
    F("SWB der Bevölkerung ist mitbetroffen."),
    T("Kooperation/Planung als Kanäle."),
], "4/5", CTX26))

cases.append(case("2.6", 13, "Partizipation als SWB-Ressource", [
    "Partizipative Bildung kann Selbstwirksamkeit und Zugehörigkeit stärken.",
    "Geringere Zukunftsangst bei Jugendlichen erleichtert nachhaltiges Engagement.",
    "Mitgestaltung verknüpft psychologische und soziale Dimensionen nachhaltiger Wirtschaft.",
    "Partizipation ersetzt die Notwendigkeit, Grundbedürfnisse zu sichern.",
    "Sinn und Einbindung sind besonders für junge Kohorten zentrale SWB-Faktoren.",
], [True, True, True, False, True], [
    T("Selbstwirksamkeit/Zugehörigkeit."),
    T("Weniger Angst → Engagement."),
    T("Psychologisch + sozial."),
    F("Bedürfnisse bleiben Fundament; Partizipation kommt hinzu."),
    T("Jugenddeterminanten."),
], "4/5", CTX26))

cases.append(case("2.6", 14, "Drei Dimensionen – Tricky Abgrenzung", [
    "Soziale Dimension ohne ökologische Grenzen riskiert, Bedürfnisse auf Kosten der Tragfähigkeit zu bedienen.",
    "Ökologische Strenge ohne soziale Fundamente kann Armut verfestigen und SWB senken.",
    "Psychologische Sinnangebote ohne materielle und ökologische Basis bleiben fragil.",
    "Die drei Dimensionen sind unabhängig und ohne Wechselwirkung.",
    "Integration heißt, Fortschritte in einer Dimension gegen Rückschritte in den anderen abzuwägen.",
], [True, True, True, False, True], [
    T("Sozial ohne Ökologie → Überschreitung."),
    T("Ökologie ohne Soziales → Härten."),
    T("Sinn ohne Basis → fragil."),
    F("Gerade Wechselwirkungen sind der Punkt."),
    T("Abwägung/Integration."),
], "4/5", CTX26))

cases.append(case("2.6", 15, "Freiheit zum guten Leben", [
    "Ökonomische und ökologische Mittel sichern Freiheitsbedingungen des guten Lebens.",
    "Freiheit hier meint Möglichkeit, Bedürfnisse zu erfüllen und Sinn zu finden – nicht nur Konsumwahl.",
    "Ohne ökologische Stabilität schrumpfen zukünftige Freiheitsräume.",
    "Soziale Ungleichheit kann Freiheiten ungleich verteilen und SWB spreizen.",
    "Freiheit zum guten Leben ist erreicht, sobald das BIP steigt – unabhängig von Umwelt und Vertrauen.",
], [True, True, True, True, False], [
    T("Mittelcharakter."),
    T("Erweiterter Freiheitsbegriff."),
    T("Ökologie als Zukunftsfreiheit."),
    T("Ungleichheit spreizt Freiheit/SWB."),
    F("BIP allein reicht nicht."),
], "4/5", CTX26))

cases.append(case("2.6", 16, "Policy-Mix für SWB und Nachhaltigkeit", [
    "Umweltqualität, Gesundheitssysteme und vertrauenswürdige Institutionen bilden einen SWB-Policy-Mix.",
    "Umverteilung und öffentliche Güter können Vergleichsdruck und Unsicherheit mindern.",
    "Partizipation erhöht Legitimität von Nachhaltigkeitsmaßnahmen.",
    "Ein einseitiger Fokus auf kurzfristige Einkommenszuwächse kann andere SWB-Treiber verdrängen.",
    "SWB-Politik und Klimapolitik sind stets widersprüchlich und nicht integrierbar.",
], [True, True, True, True, False], [
    T("Mix der Voraussetzungen."),
    T("Öffentliche Güter/Umverteilung → Unsicherheit↓."),
    T("Akzeptanz über Partizipation."),
    T("Verdrängungsrisiko einseitiger Einkommensfix."),
    F("Integration ist gerade das Leitbild der drei Dimensionen."),
], "5/5", CTX26))

cases.append(case("2.6", 17, "Kanäle: Umwelt → SWB → Nachhaltigkeit", [
    "Bessere Luft kann Gesundheitskosten senken und SWB heben – ein ökonomischer Nebeneffekt der Umweltqualität.",
    "Höheres SWB bei intakter Umwelt kann Unterstützung für Schutzpolitik verstärken.",
    "Versiegelung und Lärm erzeugen externe Kosten auch über SWB-Verluste.",
    "SWB-Verluste durch Umweltzerstörung sind ökonomisch irrelevant, weil sie nicht in Märkten gepreist sind.",
    "Nicht-marktliche SWB-Effekte gehören trotzdem in die Bewertung nachhaltiger Politik.",
], [True, True, True, False, True], [
    T("Gesundheit/SWB als Co-Benefit."),
    T("Politische Unterstützungsschleife."),
    T("Externe Kosten inkl. SWB."),
    F("Fehlende Preisung ≠ Irrelevanz."),
    T("Bewertung jenseits Marktpreisen."),
], "5/5", CTX26))

cases.append(case("2.6", 18, "Gleichheit, BIP und Fehlschlüsse", [
    "Aus ähnlichem BIP auf ähnliches SWB zu schließen, übersieht Institutionen und Verteilung.",
    "Hohes BIP mit Korruption kann SWB unter dem Niveau gleicher Einkommen bei hohem Trust liegen lassen.",
    "Gleichheit wirkt auch über soziale Vergleiche und Statusunsicherheit auf SWB.",
    "Wenn Ungleichheit steigt und Trust fällt, kann SWB sinken, obwohl Durchschnittseinkommen steigt.",
    "SWB-Unterschiede zwischen Ländern sind vollständig durch Klimazone erklärt und unabhängig von Gleichheit.",
], [True, True, True, True, False], [
    T("Fehlschluss BIP→SWB."),
    T("Korruption dämpft trotz Einkommen."),
    T("Vergleichs-/Statuskanal."),
    T("Durchschnitt↑, SWB↓ möglich."),
    F("Gleichheit/Institutionen bleiben zentrale Erklärgrößen."),
], "5/5", CTX26))

cases.append(case("2.6", 19, "Psychologische Dimension ohne Absolutismen", [
    "Sinn und subjektives Wohlbefinden lassen sich durch Arbeit, Teilhabe und Naturerfahrung stützen.",
    "Eine Wirtschaft, die nur Output maximiert, kann Sinnquellen schwächen und SWB dämpfen.",
    "Psychologische Ziele ersetzen nicht soziale Mindestsicherung und ökologische Grenzen.",
    "Die drei Dimensionen sind hierarchisch so geordnet, dass Psychologie die ökologischen Grenzen außer Kraft setzt.",
    "Nachhaltige Wirtschaftspolitik behandelt Sinn und SWB als mitgestaltbare gesellschaftliche Voraussetzungen.",
], [True, True, True, False, True], [
    T("Sinnquellen."),
    T("Output-Fokus kann Sinn/SWB kosten."),
    T("Kein Ersatz für Soziales/Ökologie."),
    F("Keine Außerkraftsetzung der Grenzen durch Psychologie."),
    T("Mitgestaltbare Voraussetzungen."),
], "5/5", CTX26))

cases.append(case("2.6", 20, "Gesamtzusammenhang Voraussetzungen", [
    "Gesellschaftliche Voraussetzungen von SWB umfassen Umweltqualität, Gesundheit, Vertrauen, Gleichheit und Partizipation.",
    "Wirtschaftliche Stabilität und ökologische Nachhaltigkeit dienen der Freiheit zu einem guten Leben.",
    "Die Trias sozial–ökologisch–psychologisch strukturiert nachhaltige Wirtschaft.",
    "Empirische Muster zeigen: Institutionen und Verteilung trennen SWB bei ähnlichem BIP.",
    "Ein hohes BIP allein stellt sicher, dass Umweltqualität, Trust und Sinn automatisch folgen.",
], [True, True, True, True, False], [
    T("Voraussetzungskanon."),
    T("Mittel zum guten Leben."),
    T("Drei Dimensionen."),
    T("BIP-ähnlich, SWB-verschieden."),
    F("Automatismus existiert nicht – Voraussetzungen müssen gestaltet werden."),
], "5/5", CTX26))


def validate(cs: list[dict]) -> None:
    assert len(cs) == 60
    for c in cs:
        assert len(c["statements"]) == 5
        assert len(c["answer_key"]) == 5
        assert len(c["tactical_explanations"]) == 5
        blob = "\n".join([c["context"], c["title"]] + c["statements"] + c["tactical_explanations"])
        for bad in ("Lernunterlage", "Abbildung 1", "Abbildung 2", "Merkkasten", "Faktenkasten", "prüfungssicher", "im Text"):
            assert bad not in blob, (c["case_id"], bad)
        for i, (a, e) in enumerate(zip(c["answer_key"], c["tactical_explanations"])):
            if a:
                assert e.endswith("Die Aussage ist daher wahr."), (c["case_id"], i)
            else:
                assert e.endswith("Die Aussage ist daher falsch."), (c["case_id"], i)


validate(cases)

existing = json.loads(OUT.read_text(encoding="utf-8"))
# drop any prior 2.4/2.5/2.6
kept = [r for r in existing if r.get("subsection") not in {"2.4", "2.5", "2.6"}]
merged = kept + cases
OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

from collections import Counter
print("subcounts", Counter(r["subsection"] for r in merged))
print("new", len(cases), "total", len(merged))
print(
    "diff mix new",
    {d: sum(1 for c in cases if c["difficulty_level"] == d) for d in sorted({c["difficulty_level"] for c in cases})},
)
