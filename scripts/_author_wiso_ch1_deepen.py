#!/usr/bin/env python3
"""Deepen WiSo Wirtschaft verstehen Ch.1 practice banks (§1.1–1.5).

- Authors native CASE W1.1 / W1.2 / W1.5 cases (BBE-style T/F)
- QA-patches remapped BBE cases (off-topic stmts → book-aligned)
- Moves pure money cases from §1.4 → §1.5
- Rewrites §1.3 micro/macro remaps toward Knappheit/Opportunitätskosten
"""
from __future__ import annotations

import copy
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch1.json"

CTX_11 = (
    "Analysieren Sie die Rollen privater Haushalte und Unternehmen in der Wirtschaft "
    "laut der Lernunterlage „Wirtschaft verstehen“. Bewerten Sie die folgenden Aussagen:"
)
CTX_12 = (
    "Analysieren Sie Arbeitsteilung und Spezialisierung laut der Lernunterlage "
    "„Wirtschaft verstehen“. Bewerten Sie die folgenden Aussagen:"
)
CTX_15 = (
    "Analysieren Sie Geld, seine Funktionen und den Geldwert laut der Lernunterlage "
    "„Wirtschaft verstehen“. Bewerten Sie die folgenden Aussagen:"
)


def T(text: str) -> str:
    return text.rstrip() + "\n\nDie Aussage ist daher wahr."


def F(text: str) -> str:
    return text.rstrip() + "\n\nDie Aussage ist daher falsch."


def case(
    subsection: str,
    n: int,
    title: str,
    statements: list[str],
    answers: list[bool],
    expl: list[str],
    diff: str,
    context: str,
    *,
    prefix: str | None = None,
) -> dict:
    assert len(statements) == 5 == len(answers) == len(expl)
    pref = prefix or f"W{subsection}"
    return {
        "subsection": subsection,
        "case_id": f"CASE {pref}.{n:02d}",
        "title": title,
        "context": context,
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": expl,
        "difficulty_level": diff,
        "tier": "full",
    }


# ---------------------------------------------------------------------------
# §1.1 — 24 native cases (Haushalte, Bedürfnisse, Güter, Unternehmen)
# ---------------------------------------------------------------------------

def build_11() -> list[dict]:
    C: list[dict] = []
    a = C.append

    a(case("1.1", 1, "Private Haushalte als Wirtschaftsteilnehmer", [
        "Nur Personen in einer Partnerschaft oder Familie gelten als privater Haushalt; Alleinlebende zählen nicht dazu.",
        "Eine Wohngemeinschaft von Student:innen kann ebenso als privater Haushalt gelten wie eine vierköpfige Familie.",
        "Jeder Mensch ist – unabhängig von der Wohnform – Teil eines privaten Haushalts und damit Teil der Wirtschaft.",
        "Private Haushalte haben keine Bedürfnisse, solange sie keine Unternehmen gründen.",
        "Bedürfnisse nach Nahrung, Wohnung, Wärme, Bildung oder Mobilität treten in privaten Haushalten alltäglich auf.",
    ], [False, True, True, False, True], [
        F("Die Lernunterlage stellt klar: Auch eine allein lebende Person in Wohnung oder Haus gilt als privater Haushalt. Die Einschränkung auf Partnerschaft oder Familie ist falsch."),
        T("Student:innen in einer WG werden ausdrücklich als Beispiel für einen privaten Haushalt genannt – ebenso wie Familienhaushalte."),
        T("Jeder Mensch ist Teil eines privaten Haushalts und damit Teil der Wirtschaft; die Wohnform ändert diesen Grundsatz nicht."),
        F("Haushalte haben täglich zahlreiche Bedürfnisse; Unternehmensgründung ist keine Voraussetzung dafür."),
        T("Nahrung, Wohnung, Wärme, Sicherheit, Bildung und Mobilität werden als typische Haushaltsbedürfnisse angeführt."),
    ], "1/5", CTX_11))

    a(case("1.1", 2, "Bedürfnisse und Güter", [
        "Jedes Bedürfnis erfordert zwingend ein käufliches Produkt oder eine Dienstleistung.",
        "Produkte und Dienstleistungen werden in der Lernunterlage auch als „Güter“ bezeichnet.",
        "Brot, Zahnbürste oder Treibstoff sind Beispiele für Produkte, die Bedürfnisse erfüllen können.",
        "Arztbehandlung, Bankberatung oder ein Haarschnitt sind Dienstleistungen und zählen nicht zu den Gütern.",
        "Viele Güter erstellen private Haushalte nicht selbst, sondern beziehen sie von Unternehmen.",
    ], [False, True, True, False, True], [
        F("Nicht jedes Bedürfnis braucht ein Produkt oder eine Dienstleistung; nur für viele Bedürfnisse trifft das zu."),
        T("Produkte und Dienstleistungen werden ausdrücklich auch „Güter“ genannt."),
        T("Die genannten Alltagsbeispiele stammen aus dem Text und illustrieren produktbezogene Bedürfnisbefriedigung."),
        F("Dienstleistungen sind Güter im Sinne der Lernunterlage; sie werden zusammen mit Produkten unter dem Güterbegriff geführt."),
        T("Haushalte können viele Güter nicht selbst in nötiger Qualität oder Zeit herstellen; Unternehmen übernehmen diese Aufgaben."),
    ], "1/5", CTX_11))

    a(case("1.1", 3, "Warum Unternehmen produzieren", [
        "Menschen könnten alle gewünschten Güter stets selbst in der nötigen Qualität und Zeit herstellen.",
        "Fehlende Fähigkeiten, Fertigkeiten oder Produktionsmittel erklären, warum oft Unternehmen produzieren.",
        "Unternehmen erkennen Bedürfnisse von Haushalten und/oder anderen Unternehmen und bieten passende Güter an.",
        "Ein erfolgreiches Unternehmen braucht keine Idee, die ein Bedürfnis erfüllt oder ein Problem löst.",
        "Unternehmen schaffen Wert und Nutzen für Kundinnen und Kunden.",
    ], [False, True, True, False, True], [
        F("Selbstproduktion wäre oft zu schwierig oder unmöglich; genau deshalb übernehmen Unternehmen Produktion und Leistungen."),
        T("Mangelnde Fähigkeiten, Fertigkeiten und Produktionsbedingungen sind zentrale Gründe für unternehmerische Produktion."),
        T("Unternehmen orientieren sich an Bedürfnissen von Haushalten und anderen Unternehmen und reagieren mit Angebot."),
        F("Eine durchdachte Produkt- oder Dienstleistungsidee, die ein Bedürfnis erfüllt, ist laut Text Grundlage erfolgreicher Unternehmen."),
        T("Wert und Nutzen für Kundinnen und Kunden werden ausdrücklich als Ergebnis unternehmerischen Angebots genannt."),
    ], "2/5", CTX_11))

    a(case("1.1", 4, "woom und kindertaugliche Fahrräder", [
        "Das Beispiel woom zeigt ein Unternehmen, das sich an konkreten Kundenbedürfnissen orientiert.",
        "Laut Beispiel sind rund 90 % der Fahrradkomponenten speziell für Kinder entwickelt und exklusiv für woom produziert.",
        "Elternbedürfnisse nach kindertauglichen Rädern spielen für die Produktidee von woom keine Rolle.",
        "Die Gründungsidee beruhte auf der Suche nach dem „perfekten Rad“ für die eigenen Kinder der Gründer.",
        "Unternehmen, die Bedürfnisse erkennen, schaffen damit automatisch unbegrenzte Güter ohne Produktionsaufwand.",
    ], [True, True, False, True, False], [
        T("woom GmbH wird als Beispiel für ein an Kundenbedürfnissen orientiertes Unternehmen angeführt."),
        T("Die Lernunterlage zitiert genau diese Aussage zu kinderspezifischen Komponenten (Stand 03/2021)."),
        F("Gerade das Bedürfnis der Eltern nach geeigneten Kinderrädern ist der Ausgangspunkt des Beispiels."),
        T("Die Website-Beschreibung der Gründungsidee betont die Suche nach dem idealen Kinderrad für die eigenen Kinder."),
        F("Bedürfniserkennung ersetzt keine Produktion; Güter müssen weiterhin erstellt und angeboten werden."),
    ], "2/5", CTX_11))

    a(case("1.1", 5, "Güter: Angebot und Nachfrage im Alltag", [
        "Güter werden einerseits produziert und angeboten, andererseits nachgefragt und gekauft.",
        "Ohne Güter könnte keines der genannten Bedürfnisse jemals durch Tausch erfüllt werden.",
        "Private Haushalte sind ausschließlich Anbieter und nie Nachfrager von Gütern.",
        "Unternehmen produzieren häufig, weil Haushalte nicht alle Güter selbst erstellen können.",
        "Ein Haarschnitt ist ein Produkt im engeren Sinne physischer Lagergüter, keine Dienstleistung.",
    ], [True, False, False, True, False], [
        T("Produktion/Angebot und Nachfrage/Kauf sind das erste wesentliche Merkmal der Wirtschaft laut Abschnitt 1.1."),
        F("Nicht jedes Bedürfnis braucht ein Gut; die absolute Formulierung geht über den Text hinaus."),
        F("Haushalte fragen typischerweise Güter nach und können zugleich Arbeitsleistung anbieten – sie sind keine reinen Anbieter."),
        T("Genau diese Arbeitsteilung zwischen Haushalten und Unternehmen begründet unternehmerische Produktion."),
        F("Ein Haarschnitt ist eine Dienstleistung; Produkte sind etwa Brot oder ein Fahrrad."),
    ], "2/5", CTX_11))

    a(case("1.1", 6, "Haushaltsformen im Vergleich", [
        "Eine Person, die allein in einem Haus lebt, bildet keinen privaten Haushalt.",
        "Familie und WG teilen das Merkmal, dass sie als private Haushalte Bedürfnisse haben.",
        "Nur Haushalte mit Erwerbstätigen zählen wirtschaftlich; Rentnerhaushalte liegen außerhalb der Wirtschaft.",
        "Körperpflege und Schlaf sind Beispiele für Bedürfnisse, die in Haushalten auftreten können.",
        "Weil Haushalte Bedürfnisse haben, müssen sie alle Güter immer selbst herstellen.",
    ], [False, True, False, True, False], [
        F("Alleinlebende in Wohnung oder Haus gelten ausdrücklich als privater Haushalt."),
        T("Allen privaten Haushalten gemeinsam ist die Vielzahl alltäglicher Bedürfnisse."),
        F("Jeder Mensch ist Teil der Wirtschaft über den privaten Haushalt – unabhängig vom Erwerbsstatus."),
        T("Schlaf und Körperpflege werden im Bedürfniskatalog der Lernunterlage genannt."),
        F("Viele Güter werden gerade nicht selbst erstellt, sondern von Unternehmen bezogen."),
    ], "1/5", CTX_11))

    a(case("1.1", 7, "Unternehmen erkennen und bedienen Nachfrage", [
        "Bauunternehmen, Tischlereien, Bäckereien oder Boutiquen sind Beispiele für Unternehmen, die für andere produzieren.",
        "Unternehmen schaffen keinen Nutzen, solange sie nur an andere Unternehmen verkaufen.",
        "Ein Rundfunkunternehmen erstellt Leistungen und gehört zu den Unternehmensbeispielen der Lernunterlage.",
        "Kundenbedürfnisse zu erkennen ist für unternehmerischen Erfolg laut Text unerheblich.",
        "Unternehmen können sich sowohl an privaten Haushalten als auch an anderen Unternehmen orientieren.",
    ], [True, False, True, False, True], [
        T("Diese Branchenbeispiele stehen wörtlich im Text als Unternehmen, die für andere produzieren und Leistungen erstellen."),
        F("Nutzen entsteht auch im Business-to-Business-Geschäft; der Text nennt explizit Bedürfnisse anderer Unternehmen."),
        T("Das Rundfunkunternehmen wird ausdrücklich in der Aufzählung genannt."),
        F("Erfolgreiche Unternehmen basieren auf Ideen, die Bedürfnisse erfüllen – Orientierung an Kundenbedürfnissen ist zentral."),
        T("Bedürfnisse von privaten Haushalten und/oder anderen Unternehmen werden als Zielgruppen genannt."),
    ], "2/5", CTX_11))

    a(case("1.1", 8, "Mehrwert durch Produktideen", [
        "Eine gut durchdachte Produktidee kann ein Problem lösen, eine Lücke schließen oder Arbeit erleichtern.",
        "Mehrwert und Nutzen für Kundinnen und Kunden sind laut Lernunterlage Merkmale erfolgreicher Unternehmensideen.",
        "Unternehmen dürfen nur physische Produkte anbieten, niemals Dienstleistungen.",
        "Reparaturen sind Dienstleistungen und damit Güter im Sinne des Abschnitts.",
        "Ohne Produktionsmittel und Fähigkeiten könnten Haushalte theoretisch jedes Industriegut selbst fertigen.",
    ], [True, True, False, True, False], [
        T("Problem lösen, Lücke schließen, Arbeit erleichtern und Leben angenehmer machen werden als Wirkungen gelungener Ideen genannt."),
        T("Mehrwert und Nutzen für Kundinnen und Kunden sind der Maßstab erfolgreicher Produkt- und Dienstleistungsideen."),
        F("Unternehmen bieten Produkte und/oder Dienstleistungen an."),
        T("Reparaturen werden als Dienstleistungsbeispiel genannt; Dienstleistungen zählen zu den Gütern."),
        F("Gerade fehlende Fähigkeiten und Produktionsmittel machen Selbstfertigung oft unmöglich."),
    ], "2/5", CTX_11))

    a(case("1.1", 9, "Alltag: Bäckerei und private Nachfrage", [
        "Wenn eine Familie Brot kauft, tritt der Haushalt als Nachfrager und die Bäckerei als anbietendes Unternehmen auf.",
        "Der Kauf von Gebäck zeigt, dass Bedürfnisse ohne Güterproduktion der Unternehmen befriedigt werden müssen.",
        "Die Bäckerei reagiert auf das Bedürfnis nach Nahrungsmitteln mit einem Güterangebot.",
        "Private Haushalte scheiden aus der Wirtschaft aus, sobald sie im Supermarkt einkaufen.",
        "Sowohl Produkte (Brot) als auch Dienstleistungen (z. B. Beratung) können am gleichen Ort angeboten werden.",
    ], [True, False, True, False, True], [
        T("Kaufsituationen verbinden Haushaltsnachfrage und Unternehmensangebot – Kern von Abschnitt 1.1."),
        F("Gerade die Unternehmensproduktion von Gütern hilft, Bedürfnisse zu erfüllen."),
        T("Nahrungsmittelbedürfnisse und unternehmerisches Angebot gehören zusammen."),
        F("Einkaufen ist typische wirtschaftliche Aktivität privater Haushalte."),
        T("Produkte und Dienstleistungen können nebeneinander angeboten werden (vgl. Textbeispiele)."),
    ], "1/5", CTX_11))

    a(case("1.1", 10, "WG-Budget und Bedürfnisse", [
        "Eine WG muss Entscheidungen über Wohnen, Ernährung und Mobilität treffen, weil Bedürfnisse Ressourcen binden.",
        "Weil die WG kein Unternehmen ist, hat sie keinerlei wirtschaftliche Bedeutung.",
        "Bildung kann ein Bedürfnis sein, für das Güter oder Dienstleistungen nachgefragt werden.",
        "Sicherheit und Wärme gehören nicht zu den im Text genannten Bedürfnisfeldern.",
        "Unternehmen wie Energieversorger oder Vermieter können WG-Bedürfnisse mit Gütern bedienen.",
    ], [True, False, True, False, True], [
        T("Haushaltsbedürfnisse erfordern Güter und binden Mittel – die WG ist ein Haushalt mit solchen Bedürfnissen."),
        F("Die WG ist ein privater Haushalt und damit Teil der Wirtschaft."),
        T("Bildung wird als Bedürfnis genannt; Schulen, Kurse oder Lernmaterialien sind typische Güterbezüge."),
        F("Wärme und Sicherheit stehen ausdrücklich in der Bedürfnisliste."),
        T("Wohnen und Energie sind klassische Unternehmensangebote an Haushalte."),
    ], "2/5", CTX_11))

    a(case("1.1", 11, "Unternehmen versus Haushalt", [
        "Unternehmen produzieren für andere; private Haushalte sind in erster Linie Orte des Bedarfs und Konsums von Gütern.",
        "Ein Tischlerbetrieb, der Möbel für Kundschaft fertigt, ist ein Unternehmen im Sinne der Lernunterlage.",
        "Haushalte und Unternehmen haben identische Rollen und sind begrifflich austauschbar.",
        "Ein Solo-Selbstständiger kann unternehmerisch Leistungen anbieten, während er privat in einem Haushalt lebt.",
        "Nur Aktiengesellschaften zählen als Unternehmen; Handwerksbetriebe fallen heraus.",
    ], [True, True, False, True, False], [
        T("Der Text trennt Haushaltsbedürfnisse und unternehmerische Produktion für andere."),
        T("Tischlereien werden als Unternehmensbeispiel genannt."),
        F("Rollen unterscheiden sich: Haushalte fragen typischerweise nach, Unternehmen bieten an und produzieren."),
        T("Dieselbe Person kann privat Haushalt und beruflich Unternehmen sein – die Rollen bleiben analytisch getrennt."),
        F("Auch Bäckereien, Boutiquen und Handwerk zählen; die Liste ist weit gefasst."),
    ], "3/5", CTX_11))

    a(case("1.1", 12, "Fahrradbedarf ohne Eigenproduktion", [
        "Eltern können Kinderräder nachfragen, ohne selbst Fahrradkomponenten fertigen zu können.",
        "Spezielle kindgerechte Anatomie-Anforderungen zeigen, warum spezialisierte Unternehmen sinnvoll sind.",
        "Weil Fahrräder Güter sind, dürfen keine Dienstleistungen (z. B. Reparatur) damit verbunden sein.",
        "woom reagiert mit Angebot auf ein erkanntes Bedürfnis – ein Kernmerkmal unternehmerischen Handelns.",
        "Private Haushalte scheitern wirtschaftlich, sobald sie Güter von Unternehmen kaufen statt alles selbst zu machen.",
    ], [True, True, False, True, False], [
        T("Genau diese Lücke zwischen Bedarf und Eigenfertigungsfähigkeit begründet Unternehmensangebot."),
        T("Das woom-Beispiel betont Abstimmung auf kindliche Anatomie durch spezialisierte Komponenten."),
        F("Güter umfassen Produkte und Dienstleistungen; Reparaturen ergänzen oft Produktkäufe."),
        T("Bedürfniserkennung und darauf reagierendes Angebot sind das Textbeispiel."),
        F("Kauf bei Unternehmen ist der Normalfall und kennzeichnet Teilhabe an der Wirtschaft, kein Scheitern."),
    ], "3/5", CTX_11))

    a(case("1.1", 13, "Dienstleistungen im Haushaltsalltag", [
        "Trainerstunden und Bankberatung sind Dienstleistungen, die Haushaltsbedürfnisse unterstützen können.",
        "Dienstleistungen sind keine Güter, weil man sie nicht anfassen kann.",
        "Ein Arztbesuch kann ein Bedürfnis nach Gesundheit bzw. Behandlung bedienen.",
        "Nur greifbare Produkte zählen wirtschaftlich; immaterielle Leistungen liegen außerhalb der Wirtschaft.",
        "Unternehmen können reine Dienstleister sein, ohne physische Produkte herzustellen.",
    ], [True, False, True, False, True], [
        T("Beide Beispiele stammen aus dem Dienstleistungskatalog der Lernunterlage."),
        F("Dienstleistungen werden unter dem Güterbegriff mitgeführt."),
        T("Ärztliche Behandlung wird ausdrücklich als Dienstleistungsbeispiel genannt."),
        F("Immaterielle Leistungen sind zentraler Bestandteil der Wirtschaft."),
        T("Rundfunk, Beratung, Friseur usw. zeigen dienstleistungsbasierte Unternehmen."),
    ], "2/5", CTX_11))

    a(case("1.1", 14, "Was Wirtschaft in 1.1 ausmacht", [
        "Ein erstes wesentliches Merkmal der Wirtschaft ist, dass es Produkte und Dienstleistungen gibt, die angeboten und nachgefragt werden.",
        "Wirtschaft beginnt erst, wenn der Staat Steuern einhebt; Haushalte und Unternehmen allein bilden keine Wirtschaft.",
        "Bedürfnisbefriedigung über Güterkauf ist ein Alltagspfad privater Haushalte.",
        "Unternehmen existieren nur, um andere Unternehmen zu beliefern, nie private Haushalte.",
        "Ohne irgendwelche Güterproduktion müssten Haushalte alle gewünschten Dinge selbst erstellen – oft unmöglich.",
    ], [True, False, True, False, True], [
        T("Angebot und Nachfrage von Gütern zur Bedürfnisbefriedigung ist das Einstiegsmerkmal in 1.1."),
        F("Abschnitt 1.1 baut Wirtschaft aus Haushalten und Unternehmen auf; der Staat folgt später im Kreislauf."),
        T("Kauf von Gütern zur Bedürfniserfüllung ist der beschriebene Normalpfad."),
        F("Unternehmen bedienen ausdrücklich auch private Haushalte."),
        T("Selbstproduktion ist oft unmöglich; Unternehmensproduktion schließt die Lücke."),
    ], "3/5", CTX_11))

    a(case("1.1", 15, "Kundenorientierung und Mehrwert", [
        "Orientierung an Kundenbedürfnissen bedeutet, Angebot und Produktgestaltung an konkreten Bedarfen auszurichten.",
        "Mehrwert entsteht bereits, wenn ein Unternehmen existiert – unabhängig davon, ob Kundennutzen geschaffen wird.",
        "Eine Lücke im Markt zu schließen kann Teil einer tragfähigen Unternehmensidee sein.",
        "wooms Fokus auf Kinderräder zeigt Spezialisierung auf ein Bedürfnissegment, nicht Beliebigkeit.",
        "Haushalte verlieren ihre wirtschaftliche Rolle, sobald ein Unternehmen ihre Bedürfnisse bedient.",
    ], [True, False, True, True, False], [
        T("Das woom-Beispiel und die Definition erfolgreicher Ideen zielen auf Bedürfniserfüllung."),
        F("Mehrwert und Nutzen für Kundinnen und Kunden sind entscheidend; bloße Existenz genügt nicht."),
        T("„Eine Lücke schließen“ wird ausdrücklich als mögliche Leistung einer Produktidee genannt."),
        T("Kinderspezifische Komponenten zeigen gezielte Segmentorientierung."),
        F("Haushalte bleiben Nachfrager und Wirtschaftsteilnehmer."),
    ], "3/5", CTX_11))

    a(case("1.1", 16, "Produktion für andere", [
        "„Für andere produzieren“ kennzeichnet Unternehmen gegenüber der bloßen Selbstversorgung im Haushalt.",
        "Eine Boutique, die Kleidung verkauft, produziert bzw. bietet Güter für Kundschaft an.",
        "Selbstversorgung im Haushalt macht Unternehmen überflüssig, weil niemand jemals externe Güter braucht.",
        "Produktionsbedingungen und -mittel fehlen Haushalten oft – ein Grund für unternehmerische Erstellung.",
        "Nur Großkonzerne produzieren für andere; Kleinbetriebe tun das nicht.",
    ], [True, True, False, True, False], [
        T("Unternehmen erstellen Leistungen für andere; das grenzt sie vom reinen Haushaltskonsum ab."),
        T("Boutiquen gehören zu den genannten Unternehmensbeispielen."),
        F("Viele Bedürfnisse erfordern externe Güter; Selbstversorgung deckt nicht alles."),
        T("Fehlende Produktionsmittel und -bedingungen sind zentraler Textgrund."),
        F("Auch Tischlereien, Bäckereien und Boutiquen produzieren bzw. bieten für andere an."),
    ], "2/5", CTX_11))

    a(case("1.1", 17, "Grenzfälle: Eigenleistung und Markt", [
        "Wenn ein Haushalt Brot selbst bäckt, entfällt jedes wirtschaftliche Bedürfnis nach Nahrung.",
        "Auch bei Eigenback kann der Haushalt Mehl, Energie oder Backofen als Güter von Unternehmen beziehen.",
        "Eigenproduktion schließt nicht aus, dass derselbe Haushalt andere Güter am Markt nachfragt.",
        "Unternehmen sind nur nötig, wenn niemand im Haushalt irgendetwas selbst tun kann.",
        "Zeit- und Qualitätsgrenzen der Eigenproduktion erklären die Nachfrage nach Unternehmensgütern.",
    ], [False, True, True, False, True], [
        F("Das Nahrungsbedürfnis bleibt; geändert wird nur der Decungsweg."),
        T("Vorleistungen kommen oft von Unternehmen – typische Verschränkung von Haushalt und Markt."),
        T("Haushalte mischen Eigenleistung und Marktbezug."),
        F("Unternehmen übernehmen Aufgaben, die zu schwierig, zeitaufwendig oder unmöglich in nötiger Qualität sind – nicht nur absolute Unfähigkeit."),
        T("Zeit und Qualität sind im Text genannte Gründe gegen vollständige Selbstproduktion."),
    ], "4/5", CTX_11))

    a(case("1.1", 18, "Bedürfnis versus Wunsch im Haushaltskontext", [
        "Die Lernunterlage listet grundlegende Bedürfnisfelder wie Nahrung, Wohnung und Mobilität.",
        "Ein Kinderrad kann ein Bedürfnis nach kindgerechter Mobilität bedienen und zugleich Wunschqualität haben.",
        "Wünsche und Bedürfnisse sind identisch, weil jedes Verlangen ein Gut erzwingt.",
        "Nicht jedes Verlangen muss über den Markt befriedigt werden.",
        "Unternehmen können sowohl Grundbedürfnisse als auch Komfortwünsche adressieren.",
    ], [True, True, False, True, True], [
        T("Die Bedürfnisliste des Abschnitts nennt genau solche Felder."),
        T("Mobilität ist Bedürfnisfeld; kindertaugliche Ausführung kann zusätzliche Wunschelemente enthalten – beides ist mit Unternehmensangebot vereinbar."),
        F("Nicht jedes Bedürfnis braucht ein Gut; und nicht jedes Verlangen ist gleichermaßen notwendig."),
        T("Der Text relativiert: Nicht jedes Bedürfnis erfordert Produkt oder Dienstleistung."),
        T("Vom Brot bis zum Spezialfahrrad reicht die Spanne unternehmerischer Angebote."),
    ], "3/5", CTX_11))

    a(case("1.1", 19, "Interaktion Haushalt–Unternehmen", [
        "Wirtschaftliche Interaktion entsteht, wenn Haushalte Güter nachfragen und Unternehmen anbieten.",
        "Ohne jede Interaktion gäbe es laut Einstiegslogik dennoch vollständige Bedürfniserfüllung aller Haushalte.",
        "Andere Unternehmen können Kundschaft von Zulieferern sein – nicht nur Endhaushalte.",
        "Ein Friseurbetrieb bedient typischerweise Haushaltsnachfrage nach einer Dienstleistung.",
        "Tausch von Gut gegen Zahlung ist in 1.1 noch kein Thema, weil es keine Güter gibt.",
    ], [True, False, True, True, False], [
        T("Angebot und Nachfrage zwischen den Akteuren sind das Einstiegsbild."),
        F("Gerade weil Selbstproduktion scheitert, braucht es Interaktion mit Unternehmen."),
        T("Bedürfnisse anderer Unternehmen werden ausdrücklich genannt."),
        T("Haarschnitt als Dienstleistung an private Kundschaft ist Textbeispiel."),
        F("Güter werden produziert, angeboten, nachgefragt und gekauft – Tausch ist angelegt."),
    ], "3/5", CTX_11))

    a(case("1.1", 20, "Klosterneuburg und unternehmerische Standortpraxis", [
        "Das Beispiel nennt woom als in Klosterneuburg ansässige GmbH.",
        "Standortangaben ändern nichts daran, dass Unternehmen Bedürfnisse erkennen und Güter anbieten.",
        "Nur Wiener Unternehmen zählen zur österreichischen Wirtschaft; Betriebe außerhalb Wiens fallen heraus.",
        "Kinderspezifische Komponenten zeigen produktbezogene Spezialisierung auf ein Kundensegment.",
        "Eine GmbH kann kein Unternehmen sein, weil Haushalte die einzigen Wirtschaftsteilnehmer sind.",
    ], [True, True, False, True, False], [
        T("Der Text lokalisiert woom GmbH in Klosterneuburg."),
        T("Standort illustriert; die ökonomische Logik bleibt Bedürfnis → Angebot."),
        F("Österreichische Unternehmen gibt es landesweit; das Beispiel selbst liegt außer Wien."),
        T("90 %-Aussage zu Kinderkomponenten belegt Segmentfokus."),
        F("Unternehmen sind zentrale Akteure neben Haushalten."),
    ], "2/5", CTX_11))

    a(case("1.1", 21, "Falsche Absolute über Haushalte", [
        "Private Haushalte haben niemals Geldknappheit, weil Bedürfnisse unbegrenzt finanzierbar sind.",
        "Haushalte fragen Güter nach, um Bedürfnisse zu erfüllen – das ist Alltagswirtschaft.",
        "Ein Haushalt kann Arbeitsleistung später im Kreislauf anbieten; in 1.1 steht zunächst die Bedarfsseite im Fokus.",
        "Allein die Existenz von Bedürfnissen macht aus jedem Wunsch bereits ein produziertes Gut.",
        "Unternehmen entstehen unter anderem, weil Haushalte Produktionsaufgaben nicht vollständig selbst leisten.",
    ], [False, True, True, False, True], [
        F("Bedürfnisse sind zahlreich; Finanzierung und Erstellung sind begrenzt – Absolutheit ist falsch. (Detaillierte Knappheit folgt in 1.3.)"),
        T("Nachfrage nach Gütern zur Bedürfniserfüllung ist Kernthese von 1.1."),
        T("1.1 betont Haushaltsbedürfnisse und Unternehmensangebot; Faktormärkte vertieft der Kreislauf."),
        F("Zwischen Bedürfnis und produziertem Gut stehen Erkennung, Produktion und Angebot."),
        T("Unmöglichkeit vollständiger Selbstproduktion begründet Unternehmensrollen."),
    ], "4/5", CTX_11))

    a(case("1.1", 22, "Produkt und Dienstleistung zugleich", [
        "Ein Fahrradgeschäft kann Räder (Produkt) verkaufen und Montage oder Service (Dienstleistung) anbieten.",
        "Sobald Dienstleistungen angeboten werden, dürfen keine Produkte mehr verkauft werden.",
        "Beides zählt als Güterangebot an Haushalte.",
        "Nur Produkte schaffen Nutzen; Dienstleistungen sind wirtschaftlich wertlos.",
        "Kundennutzen kann aus der Kombination von Produkt und Service entstehen.",
    ], [True, False, True, False, True], [
        T("Alltagsbeispiel passt zur Doppelstruktur Produkte/Dienstleistungen."),
        F("Unternehmen können beides kombinieren."),
        T("Beide Formen sind Güter im Sinne der Lernunterlage."),
        F("Dienstleistungen wie Arzt, Friseur, Beratung schaffen ausdrücklich Nutzen."),
        T("Mehrwert entsteht oft erst durch die Kombination – analog zur Idee, Probleme zu lösen und Arbeit zu erleichtern."),
    ], "2/5", CTX_11))

    a(case("1.1", 23, "Gründungsidee und Kundennutzen", [
        "Die woom-Gründungsidee verknüpft eigene Elternerfahrung mit einem Marktangebot für Kinderräder.",
        "Persönliche Problemerfahrung kann Ausgangspunkt einer Unternehmensidee sein.",
        "Kundennutzen ist erreicht, sobald Gründer:innen selbst zufrieden sind – externe Kundschaft ist irrelevant.",
        "„Kinder und Eltern begeistern“ formuliert einen angestrebten Kundennutzen.",
        "Ohne Bedürfnisbezug bleibt eine technische Erfindung wirtschaftlich ohne den in 1.1 beschriebenen Mehrwert.",
    ], [True, True, False, True, True], [
        T("Die zitierte Gründungsgeschichte verbindet Familiensuche und Unternehmensaufbau."),
        T("Eigene Suche nach dem idealen Kinderrad startet die Idee."),
        F("Mehrwert für Kundinnen und Kunden ist der Maßstab – nicht nur Gründerzufriedenheit."),
        T("Die Website-Formulierung zielt auf Begeisterung von Kindern und Eltern."),
        T("Erfolgreiche Ideen erfüllen Bedürfnisse und schaffen Nutzen; Technik allein genügt der 1.1-Logik nicht."),
    ], "4/5", CTX_11))

    a(case("1.1", 24, "Gesamtschau: Teil der Wirtschaft", [
        "Jeder Mensch ist über den privaten Haushalt Teil der Wirtschaft.",
        "Unternehmen erstellen Güter, weil Haushalte viele Bedürfnisse nicht selbst decken können.",
        "Wirtschaft im Sinne von 1.1 besteht nur aus Börsenhandel, nicht aus Alltagskäufen.",
        "Angebot und Nachfrage von Gütern verbinden Haushalte und Unternehmen.",
        "Eine an Bedürfnissen orientierte Unternehmensidee kann Mehrwert für Kundinnen und Kunden schaffen.",
    ], [True, True, False, True, True], [
        T("Eröffnungsthese des Abschnitts."),
        T("Kernbegründung für unternehmerische Produktion."),
        F("Alltäglicher Güterkauf zur Bedürfniserfüllung steht im Zentrum von 1.1."),
        T("Produktion/Angebot und Nachfrage/Kauf sind das erste wesentliche Merkmal."),
        T("Mehrwert- und Nutzenlogik schließt den Abschnittgedanken ab."),
    ], "5/5", CTX_11))

    assert len(C) == 24
    return C


# ---------------------------------------------------------------------------
# §1.2 — 24 native cases (Arbeitsteilung / Spezialisierung)
# ---------------------------------------------------------------------------

def build_12() -> list[dict]:
    C: list[dict] = []
    a = C.append

    a(case("1.2", 1, "Spezialisierung in Unternehmen", [
        "Unternehmen spezialisieren sich mit ihren Mitarbeiter:innen auf bestimmte Produkte und/oder Dienstleistungen.",
        "Spezialisierung verhindert jede große Stückzahl, weil man sich nur auf Weniges konzentriert.",
        "Betriebliche Organisation hilft, Güter in bestimmter Qualität anzubieten.",
        "Die Vielfalt der Berufe zeigt einen hohen Grad an Arbeitsteilung und Spezialisierung.",
        "Nur ein Berufszweig darf in einer modernen Wirtschaft existieren, sonst gibt es keine Spezialisierung.",
    ], [True, False, True, True, False], [
        T("Der Einstieg von 1.2 betont Spezialisierung auf bestimmte Produkte/Dienstleistungen."),
        F("Im Gegenteil: Konzentration auf weniger Schritte kann größere Stückzahlen erlauben."),
        T("Qualität und Menge werden mit Spezialisierung und Organisation verknüpft."),
        T("Berufliche Vielfalt ist laut Text Ausdruck hoher Arbeitsteilung."),
        F("Gerade viele Berufe und Unternehmensarten belegen Spezialisierung."),
    ], "1/5", CTX_12))

    a(case("1.2", 2, "Österreichische Unternehmensbeispiele", [
        "Agrana ist ein Nahrungsmittel- und Industriegüterkonzern mit Sitz in Wien und produziert u. a. Zucker.",
        "Rosenbauer erzeugt Feuerwehrfahrzeuge und -ausrüstung und macht einen Großteil des Umsatzes im Ausland.",
        "voestalpine ist ein Stahl- und Technologiekonzern mit Hauptsitz in Linz.",
        "Do&Co ist ausschließlich ein Stahlkonzern ohne Catering- oder Restaurantgeschäft.",
        "Die genannten Firmen illustrieren Unternehmensvielfalt und Spezialisierung.",
    ], [True, True, True, False, True], [
        T("Agrana und „Wiener Zucker“ sowie weitere Produkte werden im Text genannt."),
        T("Rosenbauer/Leonding und Auslandsanteil stehen im Text."),
        T("voestalpine/Linz wird als führender Stahl- und Technologiekonzern beschrieben."),
        F("Do&Co steht für Catering, Restaurants, Lounges und Hotels."),
        T("Die Beispiele zeigen einen Ausschnitt der Unternehmensvielfalt."),
    ], "1/5", CTX_12))

    a(case("1.2", 3, "Arbeitsteilung innerhalb von Unternehmen", [
        "Innerhalb von Unternehmen werden Aufgaben auf Personen und Abteilungen aufgeteilt.",
        "Typische Unternehmensbereiche sind u. a. Einkauf, Produktion, Verkauf, Marketing und Buchhaltung.",
        "Arbeitsteilung gibt es nur zwischen Ländern, nie innerhalb einer Firma.",
        "Spezialisierte Abteilungen ermöglichen Konzentration auf bestimmte betriebliche Funktionen.",
        "Wenn alle Mitarbeitenden dieselben Aufgaben rotierend machen, liegt maximale zwischenbetriebliche Spezialisierung vor.",
    ], [True, True, False, True, False], [
        T("Innerbetriebliche Aufteilung ist die erste genannte Ebene der Arbeitsteilung."),
        T("Die Abteilungen werden ausdrücklich aufgezählt."),
        F("Innerhalb und zwischen Unternehmen sowie zwischen Ländern finden Arbeitsteilung statt."),
        T("Konzentration auf Funktionen ist der Sinn der Abteilungsbildung."),
        F("Das wäre eher fehlende Spezialisierung; zwischenbetrieblich meint Kooperation verschiedener Firmen."),
    ], "2/5", CTX_12))

    a(case("1.2", 4, "Arbeitsteilung im Haushalt", [
        "Auch in Haushalten können Aufgaben geteilt werden, z. B. Essenszubereitung versus Reinigung.",
        "Haushalte kennen keinerlei Arbeitsteilung, weil Wirtschaft nur in Firmen stattfindet.",
        "Innerhäusliche Aufgabenteilung ist ein im Text genanntes Beispiel vor der Unternehmensebene.",
        "Arbeitsteilung im Haushalt ersetzt vollständig jede Spezialisierung zwischen Unternehmen.",
        "Personen können sich im Haushalt auf bestimmte Aufgaben konzentrieren.",
    ], [True, False, True, False, True], [
        T("Das Küchen-/Badezimmer-Beispiel steht im Text."),
        F("Der Text beginnt bewusst mit Haushalten und Unternehmen."),
        T("Die Reihenfolge nennt Haushalte und Unternehmen gemeinsam."),
        F("Zwischenbetriebliche und internationale Spezialisierung bleiben zentral."),
        T("Konzentration auf Aufgaben ist der Kern der beschriebenen Teilung."),
    ], "2/5", CTX_12))

    a(case("1.2", 5, "Zwischenbetriebliche Spezialisierung", [
        "Unternehmen einer Branche können sich auf bestimmte Produkte spezialisieren (z. B. nur Tische/Stühle).",
        "Spezialisierung liegt auch vor, wenn Produkte eines Unternehmens Vorleistung für ein anderes sind.",
        "Landwirtschaftliche Betriebe können Obst an Tiefkühl- und Fruchtzubereitungsunternehmen liefern.",
        "Verpackungshersteller können sich auf Verpackungen spezialisieren und an Lebensmittelproduzenten liefern.",
        "Zwischenbetriebliche Spezialisierung bedeutet, dass jede Firma alle Vorprodukte selbst erzeugen muss.",
    ], [True, True, True, True, False], [
        T("Branchenspezialisierung auf Teilprodukte wird so beschrieben."),
        T("Vorleistungsbeziehungen sind ausdrücklich Spezialisierungsform."),
        T("Das Obst-/Gemüse-Lieferbeispiel stammt aus dem Text."),
        T("Verpackungsspezialisten schließen die Kette im Textbeispiel."),
        F("Gerade der Verzicht auf Alles-selbst-Erzeugung ist der Punkt."),
    ], "2/5", CTX_12))

    a(case("1.2", 6, "Länderspezialisierung", [
        "Länder spezialisieren sich, indem sie Bereiche mit günstigen Voraussetzungen fördern.",
        "Klima, Bodenschätze, Arbeitskräfte und Know-how können solche Voraussetzungen sein.",
        "Länderspezialisierung ist unmöglich, weil alle Länder identische Voraussetzungen haben.",
        "Internationale Arbeitsteilung zeigt sich u. a. in Exportschwerpunkten.",
        "Nur Unternehmen, nie Staaten, können wirtschaftlich spezialisiert sein.",
    ], [True, True, False, True, False], [
        T("Förderung geeigneter Bereiche ist die Definition im Text."),
        T("Die Faktorenliste entspricht dem Abschnitt."),
        F("Unterschiedliche Voraussetzungen sind gerade der Grund."),
        T("Exportbeispiele und die Fahrradteile-Grafik illustrieren das."),
        F("Der Text nennt ausdrücklich Länderebene."),
    ], "2/5", CTX_12))

    a(case("1.2", 7, "Fahrradproduktion und globale Lieferketten", [
        "Wer Fahrräder baut, muss nicht alle Einzelteile selbst produzieren.",
        "woom arbeitet laut Beispiel mit hochspezialisierten Firmen in verschiedenen Ländern zusammen.",
        "Ein Großteil der woom-Produktion erfolgt durch taiwanesische Fahrradspezialisten mit Fertigung in Südostasien.",
        "Internationale Arbeitsteilung bei Fahrradteilen ist laut Lernunterlage kein reales Phänomen.",
        "Globale Marken können weltweite Herstellung mit spezialisierten Partnern kombinieren.",
    ], [True, True, True, False, True], [
        T("Kernthese des Fahrradbeispiels."),
        T("Zitat/Paraphrase aus der woom-Website im Text."),
        T("Taiwan/Südostasien wird so beschrieben."),
        F("Abbildung und Text behandeln gerade internationale Arbeitsteilung."),
        T("„Globale Marke. Weltweite Herstellung.“ ist Leitmotiv des Beispiels."),
    ], "2/5", CTX_12))

    a(case("1.2", 8, "Vorteile der Spezialisierung", [
        "Spezialisierung erlaubt, Kompetenz in weniger Arbeitsschritten auszubauen.",
        "Größere Stückzahlen können die Kosten pro Stück senken, weil nicht alle Kosten proportional steigen.",
        "Eine Produktionshalle kostet in der Errichtung gleich viel, unabhängig von voller oder halber Auslastung.",
        "Spezialisierung eliminiert jede Abhängigkeit von Zulieferern.",
        "Niedrigere Stückkosten können niedrigere Verkaufspreise ermöglichen.",
    ], [True, True, True, False, True], [
        T("Kompetenzaufbau bei weniger Schritten ist genannter Vorteil."),
        T("Fixe/geteilt Kostenlogik wird im Text erklärt."),
        T("Hallenbeispiel steht wörtlich im Argument."),
        F("Abhängigkeit von Zulieferern ist der genannte Nachteil."),
        T("Stückkostensenkung kann Preise senken."),
    ], "3/5", CTX_12))

    a(case("1.2", 9, "Abhängigkeit von Zulieferern", [
        "Spezialisierung bedeutet Abhängigkeit hinsichtlich Qualität, Menge und Lieferzeit der Zulieferung.",
        "Verzögerte oder mangelhafte Lieferungen können die eigene Produktion beeinträchtigen.",
        "Imageverlust und Auftragsverlust können Folgen gestörter Lieferungen sein.",
        "Bei Medikamenten ist Zulieferabhängigkeit besonders unproblematisch, weil niemand sie braucht.",
        "Abhängigkeit betrifft nur die Optik der Verpackung, nie die Produktionsmenge.",
    ], [True, True, True, False, False], [
        T("Qualität, Menge und Timing werden als Abhängigkeitsdimensionen genannt."),
        T("Beeinträchtigung der Produktion ist direkte Folge."),
        T("Image- und Auftragsverlust werden genannt."),
        F("Medikamente sind gerade das Beispiel für besonders problematische Abhängigkeit."),
        F("Menge und Qualität sind Kernrisiken."),
    ], "3/5", CTX_12))

    a(case("1.2", 10, "Ökologische Last langer Lieferketten", [
        "Lange Lieferwege können ein ökologisches Problem darstellen.",
        "Transport per LKW, Containerschiff oder Flugzeug belastet typischerweise die Umwelt.",
        "Einzelteile von verschiedenen Kontinenten zu holen, ist ökologisch stets folgenlos.",
        "Internationale Spezialisierung kann ökonomische Vorteile und ökologische Kosten zugleich haben.",
        "Ökologische Probleme entstehen nur bei Inlandstransporten, nie bei Seefracht.",
    ], [True, True, False, True, False], [
        T("Der Text benennt lange Lieferketten als ökologisches Problem."),
        T("Die genannten Verkehrsträger werden explizit angeführt."),
        F("Hohe Umweltbelastung ist die Textaussage."),
        T("Vorteile (Kosten/Stückzahl) und ökologische Nachteile stehen nebeneinander."),
        F("Seefracht und Flugzeuge werden gerade als belastend genannt."),
    ], "3/5", CTX_12))

    a(case("1.2", 11, "Agrana und Vorleistungsnetz", [
        "Fruchtzubereitungen von Agrana können in der Joghurtproduktion anderer Unternehmen eingesetzt werden.",
        "Bioethanol und Stärke zeigen Produktvielfalt innerhalb eines spezialisierten Konzerns.",
        "Agrana produziert laut Text ausschließlich Feuerwehrfahrzeuge.",
        "Zulieferung von Zucker oder Fruchtkomponenten an weiterverarbeitende Firmen ist zwischenbetriebliche Spezialisierung.",
        "Konzernsitz in Wien schließt weltweite Produktion und Handel aus.",
    ], [True, True, False, True, False], [
        T("Fruchtzubereitungen für u. a. Fruchtjoghurt werden genannt."),
        T("Zucker, Frucht, Stärke, Bioethanol – Vielfalt bei Spezialisierung."),
        F("Feuerwehrfahrzeuge sind Rosenbauer."),
        T("Vorleistungsbeziehung = Spezialisierungsform."),
        F("Weltweite Produktion/Handel wird betont."),
    ], "2/5", CTX_12))

    a(case("1.2", 12, "Rosenbauer als spezialisierter Exporteur", [
        "Rosenbauer ist auf Feuerwehrtechnik spezialisiert und stark exportorientiert.",
        "Spezialisierung auf Nischenprodukte schließt Auslandsgeschäft aus.",
        "Ein österreichisches Unternehmen kann weltweiter Player in seinem Segment sein.",
        "Sitz in Leonding widerspricht jeder internationalen Arbeitsteilung.",
        "Exportanteil zeigt Nutzung internationaler Nachfrage bei nationaler Spezialisierung.",
    ], [True, False, True, False, True], [
        T("Textbeschreibung von Rosenbauer."),
        F("Gerade Spezialisten exportieren oft stark."),
        T("„Weltweiter Player“ ist Textformulierung."),
        F("Standort und internationale Märkte schließen sich nicht aus."),
        T("Auslandsumsatz + Spezialsegment = internationale Arbeitsteilung."),
    ], "2/5", CTX_12))

    a(case("1.2", 13, "Stückkosten und Kapazität", [
        "Werden Fixkosten auf mehr Stücke verteilt, sinken oft die Kosten pro Stück.",
        "Alle Produktionskosten steigen stets exakt proportional zur Stückzahl.",
        "Höhere Auslastung derselben Halle kann Stückkosten drücken.",
        "Spezialisierung kann helfen, höhere Stückzahlen zu erreichen.",
        "Niedrigere Stückkosten machen höhere Verkaufspreise zwingend.",
    ], [True, False, True, True, False], [
        T("Fixkostendegression ist das Hallenargument."),
        F("Nicht alle Kosten steigen proportional – Kernaussage."),
        T("Volle versus halbe Kapazität bei gleichen Errichtungskosten."),
        T("Weniger selbst erledigte Schritte → Fokus → Menge."),
        F("Stückkostensenkung kann niedrigere Preise ermöglichen, erzwingt aber keine Erhöhung."),
    ], "4/5", CTX_12))

    a(case("1.2", 14, "Do&Co und Dienstleistungsspezialisierung", [
        "Do&Co spezialisiert sich auf Catering, Restaurants, Lounges und Hotels – also Dienstleistungsfelder.",
        "Spezialisierung gibt es nur in der Sachgüterindustrie, nie bei Dienstleistungen.",
        "Event- und Flugcatering sind Beispiele spezialisierter Leistungserstellung.",
        "Ein Friseurbetrieb mit vielen Schnittvarianten illustriert Spezialisierung und Vielfalt zugleich.",
        "Dienstleistungsspezialisierung verhindert jede Arbeitsteilung zwischen Mitarbeitenden.",
    ], [True, False, True, True, False], [
        T("Geschäftsfelder laut Text."),
        F("Friseur- und Cateringbeispiele zeigen das Gegenteil."),
        T("Catering seit 1983 / Events und Flüge."),
        T("Friseurbeispiel zu Vielfalt und Spezialisierung im Einstieg."),
        F("Innerhalb von Dienstleistern gibt es Abteilungen und Rollenverteilung."),
    ], "2/5", CTX_12))

    a(case("1.2", 15, "Ebenen der Arbeitsteilung im Überblick", [
        "Arbeitsteilung findet innerhalb von Haushalten und Unternehmen, zwischen Unternehmen und zwischen Ländern statt.",
        "Nur eine dieser Ebenen darf gleichzeitig existieren.",
        "Vorleistungsbeziehungen sind ein Mechanismus zwischenbetrieblicher Spezialisierung.",
        "Berufliche Spezialisierung von Personen gehört zur innerbetrieblichen/arbeitsmarktlichen Teilung.",
        "Länderspezialisierung ignoriert Klima und Know-how vollständig.",
    ], [True, False, True, True, False], [
        T("Drei Ebenen laut Aufzählung."),
        F("Sie bestehen parallel."),
        T("Textdefinition."),
        T("Personen/Abteilungen konzentrieren sich auf Aufgaben."),
        F("Gerade diese Voraussetzungen werden genutzt."),
    ], "3/5", CTX_12))

    a(case("1.2", 16, "Risiko Medikamentenlieferkette", [
        "Bei dringend benötigten Gütern wie Medikamenten wiegt Zulieferabhängigkeit besonders schwer.",
        "Qualitätsmängel beim Zulieferer können Folgeschäden beim abnehmenden Unternehmen auslösen.",
        "Lieferverzögerungen sind bei Spezialisierung stets ausgeschlossen.",
        "Imageverlust kann ökonomisch relevant sein, wenn Aufträge wegbrechen.",
        "Abhängigkeit betrifft nur Marketingtexte, nie die physische Produktion.",
    ], [True, True, False, True, False], [
        T("Medikamentenbeispiel im Text."),
        T("Qualität als Abhängigkeitsdimension."),
        F("Verzögerung ist explizites Risiko."),
        T("Image- und Auftragsverlust genannt."),
        F("Produktion wird direkt beeinträchtigt."),
    ], "3/5", CTX_12))

    a(case("1.2", 17, "PKW-Hersteller und Mengenproduktion", [
        "Ein PKW-Hersteller illustriert große Stückzahlen bei spezialisierter Organisation.",
        "Große Mengen sind mit Spezialisierung unvereinbar.",
        "Bäckereien mit großer Produktvielfalt zeigen Spezialisierung auf Bäckereiprodukte bei innerer Vielfalt.",
        "Vielfalt im Sortiment widerspricht jeder Spezialisierung auf eine Branche.",
        "Spezialisierung auf eine Branche schließt Sortimentsbreite innerhalb dieser Branche nicht aus.",
    ], [True, False, True, False, True], [
        T("PKW-Beispiel im Einstieg."),
        F("Große Mengen sind Vorteil."),
        T("Brot-/Gebäckvielfalt beim Bäcker."),
        F("Branchenspezialisierung + Sortiment möglich."),
        T("Möbel nur Tische/Stühle vs. Bäcker mit vielen Gebäckarten – beides Spezialisierungslogik."),
    ], "3/5", CTX_12))

    a(case("1.2", 18, "Kompetenzaufbau durch Fokus", [
        "Weniger Arbeitsschritte erlauben tieferen Kompetenzaufbau.",
        "Generalisten ohne Fokus sind laut Text immer produktiver als Spezialisten.",
        "Spezialisierte taiwanesische Fahrradfertigung wird mit jahrzehntelangem Know-how begründet.",
        "Know-how-Vorsprünge können internationale Spezialisierungsmuster erklären.",
        "Kompetenzaufbau ist nur innerhalb von Haushalten möglich, nie in Unternehmen.",
    ], [True, False, True, True, False], [
        T("Vorteil Formulierung im Text."),
        F("Spezialisierung steigert Kompetenz/Produktivität im Argument."),
        T("woom-Zitat zu taiwanesischen Spezialisten."),
        T("Know-how als Länder-/Partner-Voraussetzung."),
        F("Unternehmen und Länder bauen Kompetenz auf."),
    ], "3/5", CTX_12))

    a(case("1.2", 19, "Trade-off: Effizienz versus Abhängigkeit", [
        "Ökonomische Vorteile der Spezialisierung können mit Abhängigkeitsrisiken einhergehen.",
        "Ökologische Kosten langer Ketten sind ein weiterer Trade-off.",
        "Wenn Stückkosten sinken, entfallen automatisch alle Lieferrisiken.",
        "Eine reflektierte Bewertung betrachtet Vorteile und Nachteile gemeinsam.",
        "Der Text nennt nur Vorteile und verschweigt Nachteile.",
    ], [True, True, False, True, False], [
        T("Vorteile und Abhängigkeitsnachteile stehen im Text."),
        T("Ökologieabschnitt folgt auf die Abhängigkeitsdiskussion."),
        F("Kosten und Risiko sind getrennte Dimensionen."),
        T("Prüfungsrelevante Gesamtschau."),
        F("Nachteile (Abhängigkeit, Ökologie) werden ausführlich genannt."),
    ], "4/5", CTX_12))

    a(case("1.2", 20, "Zwischenbetriebliche Kette Obst–Joghurt–Verpackung", [
        "Landwirtschaft → Fruchtverarbeitung → Verpackung ist eine Spezialisierungskette.",
        "Jede Stufe kann ein anderes Unternehmen sein.",
        "Die Kette zeigt, dass Vorprodukte Voraussetzungen späterer Produktion sein können.",
        "Verpackung muss stets vom Obstbauern selbst erzeugt werden, sonst liegt keine Spezialisierung vor.",
        "Solche Ketten gibt es nur national, nie mit internationalen Partnern.",
    ], [True, True, True, False, False], [
        T("Textbeispiel."),
        T("Mehrere Unternehmen in der Beschreibung."),
        T("Definition zwischenbetrieblicher Spezialisierung."),
        F("Gerade externe Verpackungsspezialisten sind das Beispiel."),
        F("Fahrradbeispiel zeigt Internationalität."),
    ], "2/5", CTX_12))

    a(case("1.2", 21, "Falsche Absolute zur Autarkie", [
        "Vollständige Autarkie jedes Unternehmens maximiert laut 1.2 die Stückkostenvorteile der Spezialisierung.",
        "Zuliefernetzwerke sind Ausdruck zwischenbetrieblicher Arbeitsteilung.",
        "Internationale Partner können Qualitätsansprüche stützen, erzeugen aber Transportlasten.",
        "Abhängigkeit verschwindet, wenn man nur noch eine Komponente fremdbezieht.",
        "Medikamentenversorgung kann kritische Abhängigkeit sichtbar machen.",
    ], [False, True, True, False, True], [
        F("Autarkie widerspricht Spezialisierungsvorteilen; Fremdbezug senkt oft Stückkosten."),
        T("Definition erfüllt."),
        T("woom-Qualitätspartner + Ökologieabschnitt."),
        F("Auch bei wenigen kritischen Teilen bleibt Abhängigkeit."),
        T("Textbeispiel."),
    ], "4/5", CTX_12))

    a(case("1.2", 22, "Berufliche Spezialisierung", [
        "Viele ergreifbare Berufe spiegeln gesellschaftliche Arbeitsteilung wider.",
        "Berufliche Spezialisierung gibt es nur in Agrana, nicht in Handwerk oder Pflege.",
        "Innerhalb eines Krankenhauses können sich Rollen (z. B. Pflege, Chirurgie, Labor) teilen – analog zur Abteilungs logik.",
        "Berufliche Vielfalt widerspricht Spezialisierung.",
        "Personen konzentrieren sich auf Aufgaben und bauen dort Kompetenz auf.",
    ], [True, False, True, False, True], [
        T("Einstiegsthese zu Berufenvielfalt."),
        F("Spezialisierung ist economy-weit."),
        T("Analogie zur Abteilungsarbeitsteilung; passt zur innerbetrieblichen Ebene."),
        F("Vielfalt ist Ausdruck von Spezialisierung."),
        T("Konzentrationsargument."),
    ], "3/5", CTX_12))

    a(case("1.2", 23, "Export von Fahrradkomponenten", [
        "Führende Exportländer für Fahrradteile illustrieren internationale Arbeitsteilung.",
        "Österreichische Marken können Komponenten aus mehreren Ländern beziehen.",
        "Internationale Arbeitsteilung setzt voraus, dass alle Teile im Absatzland gefertigt werden.",
        "Know-how-Cluster (z. B. Taiwan) erklären Standortmuster in Lieferketten.",
        "Die Presse-Grafik im Text dient als Anschauung, nicht als Widerspruch zur Spezialisierungsthese.",
    ], [True, True, False, True, True], [
        T("Abbildung 1-Thematik."),
        T("woom-Beispiel."),
        F("Gerade Import von Teilen ist der Punkt."),
        T("Text zu taiwanesischem Know-how."),
        T("Didaktische Funktion der Abbildung."),
    ], "3/5", CTX_12))

    a(case("1.2", 24, "Gesamtschau Arbeitsteilung", [
        "Arbeitsteilung und Spezialisierung kennzeichnen moderne Wirtschaft auf mehreren Ebenen.",
        "Vorteile liegen u. a. in Kompetenz, Stückzahl und potenziell niedrigeren Stückkosten.",
        "Nachteile umfassen Zulieferabhängigkeit und ökologische Lasten langer Wege.",
        "Österreichische Beispiele (Agrana, Rosenbauer, voestalpine, Do&Co, woom) zeigen spezialisierte Unternehmensprofile.",
        "Weil Spezialisierung Nachteile hat, empfiehlt der Text die Abschaffung jeder Arbeitsteilung.",
    ], [True, True, True, True, False], [
        T("Titelthese + Ebenen."),
        T("Vorteilsabschnitt."),
        T("Abhängigkeits- und Ökologieabschnitte."),
        T("Beispielkatalog des Kapitels."),
        F("Der Text analysiert Trade-offs, fordert aber keine Abschaffung."),
    ], "5/5", CTX_12))

    # Fix accidental botched explanation in case 1 if any — verify first case F/T
    for c in C:
        for i, (ans, e) in enumerate(zip(c["answer_key"], c["tactical_explanations"])):
            if ans and not e.rstrip().endswith("wahr."):
                raise SystemExit(f"Bad T expl {c['case_id']}#{i}")
            if not ans and not e.rstrip().endswith("falsch."):
                raise SystemExit(f"Bad F expl {c['case_id']}#{i}")

    assert len(C) == 24
    return C


def build_15_extra() -> list[dict]:
    """Additional native §1.5 cases beyond remapped/moved ones."""
    C: list[dict] = []
    a = C.append

    a(case("1.5", 1, "Tauschmittel und Vertrauen", [
        "Ohne allgemein akzeptiertes Geld müssten Güter gegen Güter getauscht werden.",
        "Kommt beim Naturaltausch keine doppelte Bedürfnisübereinstimmung zustande, scheitert das Geschäft leicht.",
        "Geld als Tauschmittel funktioniert unabhängig vom Vertrauen der Wirtschaftsteilnehmer.",
        "Der Wert des Geldes liegt wesentlich darin, dass man dafür Güter kaufen kann.",
        "Zahlungsmittelfunktion setzt voraus, dass Geld von allen als solches angenommen wird.",
    ], [True, True, False, True, True], [
        T("Naturaltausch-Einstieg des Abschnitts."),
        T("Fleisch-gegen-Kleidung-Beispiel ohne Bedarf des Gegenübers."),
        F("Vertrauen in die Wiederverwendbarkeit ist Voraussetzung."),
        T("Tauschwert/Kaufmöglichkeit als Wertbemessung."),
        T("Akzeptanz als Zahlungsmittel ist zentral."),
    ], "1/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 2, "Drei Funktionen des Geldes", [
        "Geld ist Tauschmittel, Wertmesser und Wertaufbewahrungsmittel.",
        "Als Wertmesser erleichtert Geld den Vergleich verschiedener Güter.",
        "Sparen misst und bewahrt Wert in Geldeinheiten.",
        "Wertaufbewahrung ist die einzige Geldfunktion; Tausch spielt keine Rolle.",
        "Ohne Wertmesserfunktion müsste man lauter bilaterale Tauschverhältnisse merken.",
    ], [True, True, True, False, True], [
        T("Abbildung/Text zu den drei Funktionen."),
        T("Vergleichbarkeit über Geldeinheiten."),
        T("Sparen als Wertaufbewahrung."),
        F("Tauschmittel steht am Anfang der Funktionen."),
        T("Vergleichsargument im Text."),
    ], "1/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 3, "Bargeld und Buchgeld", [
        "Bargeld umfasst Banknoten und Münzen; Buchgeld existiert auf Konten.",
        "Buchgeld ist physisch greifbar wie Münzen.",
        "Über Buchgeld verfügt man z. B. durch Überweisungsauftrag.",
        "Buchgeld kann durch Abhebung in Bargeld umgewandelt werden.",
        "Der größere Teil des Geldes im Umlauf ist Buchgeld.",
    ], [True, False, True, True, True], [
        T("Formen laut Abschnitt."),
        F("Buchgeld ist nicht körperlich vorhanden."),
        T("Definition Giralgeld/Verfügung."),
        T("Abhebung als Umwandlung."),
        T("Explizite Mengenaussage im Text."),
    ], "2/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 4, "Währung und Euro", [
        "Währung ist das vom Staat anerkannte Zahlungsmittel eines Landes.",
        "In Österreich ist der Euro die anerkannte Währung.",
        "Aus österreichischer Sicht sind Franken oder Dollar Fremdwährungen.",
        "Alle EU-Staaten ohne Ausnahme nutzen den Euro als Bargeld seit 1999.",
        "Der Euroraum umfasste laut Text (Stand Mai 2024) 20 Länder.",
    ], [True, True, True, False, True], [
        T("Währungsdefinition."),
        T("Österreich/Euroraum."),
        T("Fremdwährungsbegriff."),
        F("Nicht alle EU-Staaten sind im Euroraum; Bargeld ab 2002, Start 1999 mit 11 Ländern."),
        T("Zahl laut Lernunterlage."),
    ], "2/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 5, "Wechselkurse", [
        "Der Wechselkurs ist der Preis einer Währung ausgedrückt in einer anderen.",
        "Wechselkurse können schwanken.",
        "Steigt der Euro gegenüber dem Dollar, erhält man für einen Euro mehr Dollar.",
        "Valutenkurse betreffen Bargeld, Devisenkurse sonstige Fremdwährungsgeschäfte.",
        "Ankaufs- und Verkaufskurse der Bank sind stets identisch.",
    ], [True, True, True, True, False], [
        T("Definition."),
        T("Textaussage."),
        T("Aufwertungsbeispiel."),
        T("Unterscheidung im Text."),
        F("Bank unterscheidet Ankaufs- und Verkaufskurs."),
    ], "3/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 6, "Zinsen als Preis des Geldes", [
        "Zinsen sind der Preis für das Ausborgen von Geld.",
        "Gläubiger erhalten Zinsen; Schuldner zahlen Zinsen.",
        "Dubiosenrisiko, Konsumverzicht/Opportunitätskosten und Geldwertrisiko begründen Zinsen.",
        "Niedrige Kreditzinsen dämpfen typischerweise die Kreditnachfrage sofort auf null.",
        "Nominal- und Effektivverzinsung können wegen Gebühren auseinanderfallen.",
    ], [True, True, True, False, True], [
        T("Definition."),
        T("Rollenklärung."),
        T("Drei Gründe laut Text."),
        F("Niedrige Zinsen stimulieren Nachfrage („billiges Geld“)."),
        T("Bearbeitungsgebühren → Effektiv > Nominal möglich."),
    ], "3/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 7, "Inflation und Kaufkraft", [
        "Inflation bedeutet steigendes allgemeines Preisniveau und sinkenden Geldwert.",
        "Durch Inflation sinkt die Kaufkraft eines gegebenen Geldbetrags.",
        "Der Binnenwert betrifft die inländische Kaufkraft; der Außenwert den Wechselkurs.",
        "Eine einzelne Preiserhöhung in einem Geschäft ist bereits die Definition von Inflation.",
        "Die EZB sieht rund 2 % Inflation als mit Preisstabilität vereinbar an.",
    ], [True, True, True, False, True], [
        T("Inflationsdefinition."),
        T("Kaufkraftargument."),
        T("Binnen- vs. Außenwert."),
        F("Allgemeines Preisniveau, nicht Einzelpreis."),
        T("2 %-Ziel der EZB."),
    ], "2/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 8, "Inflationsursachen und Messung", [
        "Geldmengenwachstum, Nachfragesog und Kostendruck sind Inflationsursachen im Text.",
        "Die Inflationsrate basiert u. a. auf dem Verbraucherpreisindex (VPI) und einem Warenkorb.",
        "Die Lohn-Preis-Spirale verknüpft steigende Preise und Lohnforderungen wechselseitig.",
        "Buchgeldschöpfung durch Kredite kann die Geldmenge erhöhen.",
        "Deflationserwartungen wären laut Text immer wachstumsfördernd und daher anzustreben.",
    ], [True, True, True, True, False], [
        T("Ursachenüberblick."),
        T("VPI/Warenkorb."),
        T("Spiraldefinition."),
        T("Kredit/Buchgeldschöpfung."),
        F("Zu niedrige Inflation/Deflationserwartungen können Käufe verzögern und dämpfen."),
    ], "4/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 9, "KESt und Zinseszins", [
        "Zinserträge auf Bankguthaben unterliegen in Österreich der Kapitalertragsteuer (KESt).",
        "Die Bank behält KESt typischerweise ein und führt sie ab.",
        "Zinseszinsen entstehen, wenn Zinsen wieder mitverzinst werden.",
        "Fixe Zinssätze ändern sich laufend wie variable Sätze.",
        "Effektivverzinsung ist beim Kreditvergleich oft aussagekräftiger als der Nominalzins.",
    ], [True, True, True, False, True], [
        T("KESt-Abschnitt."),
        T("Abführungsmechanismus."),
        T("Zinseszinsdefinition."),
        F("Fix bleibt gleich; variabel kann sich ändern."),
        T("Vergleichsempfehlung im Text."),
    ], "3/5", CTX_15, prefix="W1.5"))

    a(case("1.5", 10, "Mengen- versus Preisnotierung", [
        "In den WU-Kursen wird der Einfachheit wegen die Mengennotierung verwendet.",
        "Mengennotierung: wie viele Einheiten Fremdwährung für eine Einheit Inlandswährung.",
        "Preisnotierung kehrt die Perspektive um.",
        "Der Außenwert kann als multilateraler Wechselkurs gegenüber einem Währungskorb verstanden werden.",
        "Wechselkurse sind gesetzlich für immer fix und schwanken nie.",
    ], [True, True, True, True, False], [
        T("Kurskonvention der Lernunterlage."),
        T("Definition Mengennotierung."),
        T("Gegenbegriff."),
        T("Außenwert/Korb."),
        F("Schwankungen sind Thema des Abschnitts."),
    ], "4/5", CTX_15, prefix="W1.5"))

    assert len(C) == 10
    return C


# ---------------------------------------------------------------------------
# QA patches on remapped cases
# ---------------------------------------------------------------------------

def apply_qa(cases: list[dict]) -> list[dict]:
    by_id = {c["case_id"]: c for c in cases}

    def patch(cid: str, **kwargs):
        c = by_id[cid]
        for k, v in kwargs.items():
            c[k] = v

    # --- 1.4 Leuchtturm: money stmt → öffentliche Güter ---
    patch(
        "CASE 2.4.01",
        statements=[
            "Ein Leuchtturm, von dessen Licht niemand ausgeschlossen werden kann und das nicht rival konsumiert wird, trägt Züge eines öffentlichen Gutes.",
            "Trittbrettfahrer würden vom Lichtstrahl profitieren, ohne zu zahlen, wenn die Finanzierung ausschließlich auf freiwilligen Spenden beruhte.",
            "Steuerfinanzierung kann Trittbrettfahrerprobleme mindern, indem sie Beiträge in breiter Form erzwingt.",
            "Weil Schiffe private Unternehmen sind, können Leuchtturmdienste per Definition keine öffentlichen Güter sein.",
            "Öffentliche Güter müssen stets ohne jegliche gesellschaftliche Kosten bereitgestellt werden.",
        ],
        answer_key=[True, True, True, False, False],
        tactical_explanations=[
            T(
                "Nichtausschließbarkeit und Nichtrivalität sind die Lehrbuchmerkmale öffentlicher Güter. "
                "Der Leuchtturm ist das klassische Anschauungsbeispiel: Schiffe nutzen den Lichtstrahl, ohne einander den Nutzen wegzunehmen, "
                "und einzelne Nutzer lassen sich kaum ausschließen.\n\n"
                "Im Wirtschaftskreislauf finanziert der Staat solche Leistungen typischerweise aus Abgaben."
            ),
            T(
                "Bei freiwilliger Finanzierung besteht der Anreiz, den Nutzen mitzunehmen und den Beitrag anderen zu überlassen – "
                "genau das Trittbrettfahrerproblem."
            ),
            T(
                "Steuern verpflichten Begünstigte (und die Allgemeinheit) zur Mitfinanzierung und entschärfen Unterversorgung durch Trittbrettfahren."
            ),
            F(
                "Die Rechtsform der Nutzer sagt nichts über die Gütereigenschaften. Öffentliche Güter können privaten Akteuren nutzen "
                "und dennoch öffentlich bereitgestellt werden."
            ),
            F(
                "„Öffentlich“ heißt nicht kostenlos für die Gesellschaft: Steuerzahler tragen die Kosten der Bereitstellung. "
                "Kostenlosigkeit an der Nutzungsschranke ist nicht identisch mit Nullkosten der Produktion."
            ),
        ],
        context=(
            "Eine Küstenstadt finanziert einen Leuchtturm über allgemeine Steuern statt über Einzelmaut. "
            "Beurteilen Sie Aussagen zu öffentlichen Gütern und Trittbrettfahrern im Wirtschaftskreislauf:"
        ),
    )

    # --- 1.4 Kreislauf: money stmts → Kreislaufakteure ---
    patch(
        "CASE 2.4.03",
        statements=[
            "Private Haushalte bieten Arbeitsleistung an und erhalten Einkommen, mit dem sie Güter kaufen können.",
            "Unternehmen stellen Produkte und Dienstleistungen her, die Haushalte, andere Unternehmen und/oder der Staat erwerben.",
            "Haushalte können nur auf der Ausgabenseite auftreten und nie Arbeit an Unternehmen liefern.",
            "Der Wirtschaftskreislauf zeigt Austauschbeziehungen, in denen Güter und Leistungen gegen Geld getauscht werden.",
            "Der Staat hebt Steuern ein und stellt dafür u. a. Infrastruktur und öffentliche Leistungen bereit.",
        ],
        answer_key=[True, True, False, True, True],
        tactical_explanations=[
            T("Faktormarkt und Gütermarkt verbinden Haushalte und Unternehmen im einfachen Kreislauf."),
            T("Unternehmensproduktion für mehrere Abnehmergruppen ist Kernbeschreibung von 1.4."),
            F("Haushalte sind auf beiden Seiten aktiv: sie liefern Faktoren und fragen Güter nach."),
            T("Güter- und Geldkreislauf entstehen durch Tauschbeziehungen."),
            T("Steuern und staatliche Leistungen sind zentrale Staatsrolle im erweiterten Kreislauf."),
        ],
        context="Analysieren Sie den Wirtschaftskreislauf mit Haushalten, Unternehmen und Staat. Bewerten Sie:",
        title="Grundlagen des Wirtschaftskreislaufs",
    )

    # --- Öffentliche Güter: remove specialization/money distractors ---
    patch(
        "CASE 2.4.20",
        statements=[
            "Reine öffentliche Güter sind typischerweise nicht ausschließbar und nicht rival im Konsum.",
            "Inländische Basisleistungen wie innere Sicherheit können Trittbrettanreize erzeugen, wenn Finanzierung rein freiwillig wäre.",
            "Der Staat finanziert öffentliche Leistungen unter anderem über Steuern und Abgaben der Wirtschaftsteilnehmer.",
            "Straßenbeleuchtung ist für jeden Passanten leicht privat ausschließbar, daher entstehen nie Finanzierungsprobleme.",
            "Transfers und Subventionen verteilen Einkommen um oder stützen Gruppen, ohne stets reine öffentliche Güter zu sein.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            T("Nichtausschließbarkeit und Nichtrivalität kennzeichnen reine öffentliche Güter."),
            T("Ohne Zwangsbeiträge würden Viele vom Schutz profitieren wollen, ohne zu zahlen."),
            T("Im Kreislauf fließen Steuern an den Staat und Leistungen zurück."),
            F("Beleuchtung ist schwer ausschließbar; freiwillige Finanzierung bleibt anfällig."),
            T("Transfers/Subventionen sind Umverteilung bzw. Anreizpolitik – nicht automatisch öffentliche Güter."),
        ],
        context="Beurteilen Sie öffentliche Güter, Besteuerung und Trittbrettfahren im Kontext des Wirtschaftskreislaufs:",
    )

    patch(
        "CASE 2.4.27",
        statements=[
            "Zuhörer, die Musik ohne Beitrag genießen, ähneln Trittbrettfahrern, wenn die Finanzierung freiwillig ist.",
            "Öffentliche-Güter-Logik greift besonders, wenn Nutzung kaum ausschließbar und wenig rival ist.",
            "Steuerfinanzierte öffentliche Veranstaltungen können Trittbretteln gegenüber rein freiwilligen Modellen verringern.",
            "Trittbrettfahrerprobleme entstehen nur bei rivalen Privatgütern mit perfekter Ausschließbarkeit.",
            "Nicht zahlende Nutzung kann bei offenen Veranstaltungen Finanzierungslücken erzeugen.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            T("Nutzen ohne Beitrag = Trittbrettlogik bei freiwilliger Finanzierung."),
            T("Ausschließbarkeit/Rivalität bestimmen, wie stark das Problem greift."),
            T("Steuerzwang mindert Unterfinanzierung."),
            F("Gerade fehlende Ausschließbarkeit und geringe Rivalität begünstigen Trittbretteln – nicht perfekte Privatgüter."),
            T("Genau deshalb droht Unterversorgung bei rein freiwilliger Zahlung."),
        ],
    )

    # Rewrite integrated review to stay in 1.4 without EZB/Inflation/money functions
    patch(
        "CASE 2.4.29",
        title="Integrierte Wiederholung Wirtschaftskreislauf und Markt",
        context="Beurteilen Sie Aussagen zu Kreislaufakteuren, Staat und Marktmechanismen:",
        statements=[
            "Haushalte, Unternehmen und Staat sind wesentliche Teilnehmer des Wirtschaftskreislaufs.",
            "Steuern und Abgaben finanzieren staatliche Aufgaben wie Infrastruktur, Schulen oder Krankenhäuser.",
            "Auf Märkten treffen Angebot und Nachfrage zusammen und bilden Preise.",
            "Arbeitsteilung zwischen Unternehmen gehört thematisch ausschließlich in den Geldabschnitt und nie zum Kreislaufdenken.",
            "Erweiterte Kreislaufmodelle können das Ausland als weiteren Akteur einbeziehen.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            T("Akteurstrias laut 1.4."),
            T("Staatsaufgaben und Finanzierung laut Text."),
            T("Marktdefinition und Preisbildung."),
            F("Arbeitsteilung erklärt Güterströme; sie ist mit Kreislaufdenken vereinbar, gehört aber inhaltlich zu 1.2 – jedenfalls nicht „nur Geld“."),
            T("Internationaler Handel / Ausland als Akteur."),
        ],
    )

    # 1.2 Callcenter: replace Kreislauf-stmt with specialization dependency
    patch(
        "CASE 2.4.08",
        statements=[
            "Arbeitsteilung nach Anfragetyp lässt Agenten spezialisieren und Fälle oft schneller lösen.",
            "Spezialisierung kann die Ausbildungszeit pro Agent für die zugewiesene Aufgabenkategorie verkürzen.",
            "Innerbetriebliche Spezialisierung erzeugt Abhängigkeit: Engpässe in einem Team treffen den Gesamtprozess.",
            "Ist das Rechnungsteam unterbesetzt, können technische Agenten ohne Querschulung nicht alles abdecken.",
            "Abhängigkeit zwischen Teams kann Engpässe erzeugen, wenn eine Warteschlange überläuft.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            T("Spezialisierung nach Aufgabe steigert Tempo und Kompetenz – analog zu 1.2."),
            T("Engerer Aufgabenkreis verkürzt Einarbeitung."),
            T("Wie bei Zulieferern: Fokus bringt Abhängigkeit zwischen Teilprozessen."),
            T("Ohne Überlappungsqualifikation fehlen Ersatzkapazitäten."),
            T("Überlauf einer Warteschlange blockiert den Gesamtoutput."),
        ],
        context="Ein Support-Center trennt Rechnung und Technik auf zwei Teams. Bewerten Sie Arbeitsteilung und Spezialisierung:",
    )

    # Move pure money cases 1.4 → 1.5
    move_ids = [
        "CASE 2.4.16",  # EZB
        "CASE 2.4.24",  # Recheneinheit
        "CASE 2.4.26",  # Preise vergleichen / Geldfunktionen
        "CASE 2.4.28",  # Tauschhandel/Geld
        "CASE 2.6.35",  # Banknoten
        "CASE 2.6.38",  # Hypotheken/Zinsen
    ]
    for mid in move_ids:
        if mid in by_id:
            by_id[mid]["subsection"] = "1.5"

    # Fix 2.4.28 inflation stmt now that it's in 1.5 — tighten to money theme
    if "CASE 2.4.28" in by_id:
        patch(
            "CASE 2.4.28",
            statements=[
                "Naturaltausch scheitert leicht, wenn keine doppelte Bedürfnisübereinstimmung vorliegt.",
                "Geld als Tauschmittel erleichtert Geschäfte, weil es allgemein akzeptiert wird.",
                "Weil keine Euro den Besitzer wechseln, liegt beim Eier-Gemüse-Tausch kein wirtschaftlicher Tausch vor.",
                "Ohne Geld ist Wert aus verderblichen Eiern in künftige Käufe zu speichern schwieriger als mit Geldguthaben.",
                "Tauschwirtschaften haben nie Probleme, relative Werte ungleichartiger Güter zu vergleichen.",
            ],
            answer_key=[True, True, False, True, False],
            tactical_explanations=[
                T("Klassisches Problem des Naturaltauschs laut 1.5."),
                T("Akzeptanz und Vertrauen tragen die Tauschmittelfunktion."),
                F("Tausch liegt auch ohne Geld vor; Geld erleichtert, definiert aber nicht jeden Tausch."),
                T("Wertaufbewahrung ist mit verderblichen Naturalien schwerer."),
                F("Ohne gemeinsame Recheneinheit werden Vergleiche komplex – genau deshalb hilft Geld als Wertmesser."),
            ],
            context="Zwei Landwirte tauschen Eier gegen Gemüse. Beurteilen Sie Naturaltausch und Geldfunktionen:",
            title="Grenzen des Naturaltauschs",
        )

    # Rewrite 1.3 micro/macro remaps → Knappheit / Opportunitätskosten / Nachhaltigkeit
    rewrite_13 = {
        "CASE 2.3.01": {
            "title": "Fatimas Wahl: Elektro-Kleinwagen",
            "context": "Fatima erwägt, mit Bonus einen Elektro-Kleinwagen zu kaufen oder das Benzinfahrzeug zwei Jahre zu behalten. Bewerten Sie Knappheit und Opportunitätskosten:",
            "statements": [
                "Jede Entscheidung für den Elektro-Kauf bedeutet zugleich Verzicht auf alternative Verwendung von Geld und Zeit.",
                "Opportunitätskosten umfassen den entgangenen Nutzen der nicht gewählten Option.",
                "Weil ein staatlicher Bonus existiert, entfallen alle Opportunitätskosten der Entscheidung.",
                "Knappheit der finanziellen Mittel zwingt zur Abwägung zwischen Autowechsel und anderen Ausgaben.",
                "Nachhaltigkeitsüberlegungen können ökologische Folgen der Mobilitätswahl einbeziehen.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Ressourcen für Option A stehen nicht mehr für Option B bereit – Kern von 1.3."),
                T("Definition Opportunitätskosten laut Lernunterlage."),
                F("Bonus ändert relative Kosten, löscht aber nicht den Verzicht auf Alternativen."),
                T("Haushaltsbudget ist knapp; Mobilität konkurriert mit anderen Verwendungen."),
                T("Abschnitt 1.3 verknüpft Ressourceneinsatz mit nachhaltigem Wirtschaften."),
            ],
        },
        "CASE 2.3.02": {
            "title": "Haushaltsbudget in der Rezessionsstimmung",
            "context": "Eine Familie liest schlechte Wirtschaftsschlagzeilen und überdenkt Ausgaben und Sparen. Bewerten Sie Knappheit und Entscheidungen:",
            "statements": [
                "Auch bei unsicherer Lage bleiben Zeit und Geld knappe Ressourcen, über die entschieden werden muss.",
                "Untätigkeit beim Budget ist dennoch eine Entscheidung über knappe Mittel.",
                "Opportunitätskosten entstehen nur in Unternehmen, nie in privaten Haushalten.",
                "Sparen heißt, heutige Konsumoptionen zugunsten künftiger Verwendung zurückzustellen.",
                "Grundfragen des Wirtschaftens betreffen u. a., was gekauft und wie Ressourcen eingesetzt werden.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Knappheit entfällt nicht durch Schlagzeilen."),
                T("Auch Nicht-Handeln allokiert Mittel."),
                F("Haushaltsbeispiele sind zentral in 1.3."),
                T("Intertemporaler Verzicht = Opportunitätskosten des Sparens."),
                T("Grundfragen laut Text."),
            ],
        },
        "CASE 2.3.03": {
            "title": "Unternehmensressourcen planen",
            "context": "Ein Betrieb plant Investitionen, Lager und Personal für das Quartal. Bewerten Sie:",
            "statements": [
                "Unternehmen müssen entscheiden, was mit knappen Produktionsmitteln erzeugt wird.",
                "Finanzielle Mittel sind unbegrenzt, sobald ein Quartalsbericht existiert.",
                "Opportunitätskosten einer Investition sind entgangene Erträge alternativer Anlagen derselben Mittel.",
                "Rohstoffe, Maschinen und Arbeitskraft stehen nicht unbegrenzt zur Verfügung.",
                "Wirtschaften heißt, Knappheit anzuerkennen und Ressourcen möglichst überlegt einzusetzen.",
            ],
            "answer_key": [True, False, True, True, True],
            "expl": [
                T("Unternehmensknappheit laut 1.3."),
                F("Berichte ändern nicht die Begrenztheit der Mittel."),
                T("Definitionsgemäß."),
                T("Ressourcenliste des Abschnitts."),
                T("Samuelson/Nordhaus-Gedanke im Text: Knappheit anerkennen."),
            ],
        },
        "CASE 2.3.04": {
            "title": "Heizkosten und Haushaltsknappheit",
            "context": "Ein Haushalt sieht steigende Heizkosten und muss das Monatsbudget neu gewichten. Bewerten Sie:",
            "statements": [
                "Höhere Heizkosten verschärfen die Knappheit des verfügbaren Budgets für andere Zwecke.",
                "Opportunitätskosten höherer Heizausgaben sind entgangene alternative Verwendungen desselben Geldes.",
                "Haushalte mit Einkommen müssen nie ökonomisieren.",
                "Wohnen, Mobilität, Einkauf, Sparen und Urlaub konkurrieren im Familienbudget.",
                "Nachhaltiges Heizen kann ökologische und ökonomische Ziele zugleich berühren.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Mehr für Wärme → weniger Spielraum anderswo."),
                T("Opportunitätskostendefinition."),
                F("Einkommen hebt Knappheit nicht auf."),
                T("Familienbudget-Beispiel aus dem Text."),
                T("Drei Dimensionen der Nachhaltigkeit in 1.3."),
            ],
        },
        "CASE 2.3.05": {
            "title": "Exportbetrieb und knappe Kapazität",
            "context": "Ein Betrieb kann zusätzliche Exportaufträge nur mit begrenzten Maschinenstunden bedienen. Bewerten Sie:",
            "statements": [
                "Maschinenstunden sind knappe Ressourcen mit alternativen Einsatzmöglichkeiten.",
                "Die Entscheidung für Auftrag A erzeugt Opportunitätskosten in Form entgangener Beiträge von Auftrag B.",
                "Kapazitätsgrenzen existieren nur in Haushalten, nie in Unternehmen.",
                "Was in welcher Menge und Qualität produziert wird, gehört zu den Grundfragen des Wirtschaftens.",
                "Effizienter Ressourceneinsatz ist ein Ziel gesellschaftlicher Organisation laut Textimpuls.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Produktionsmittelknappheit."),
                T("Klassische Opportunitätskosten."),
                F("Unternehmensbeispiele sind gleichrangig."),
                T("Grundfragenkatalog."),
                T("Samuelson-Zitat/Impuls im Abschnitt."),
            ],
        },
        "CASE 2.3.06": {
            "title": "Opportunitätskosten nicht mit Buchungskosten verwechseln",
            "context": "Studierende verwechseln Opportunitätskosten mit reinen Auszahlungen. Bewerten Sie:",
            "statements": [
                "Opportunitätskosten sind entgangene Erträge einer nicht gewählten Alternative.",
                "Nur tatsächlich bezahlte Rechnungen zählen als Opportunitätskosten.",
                "Zeit für Lernen statt Training verursacht Opportunitätskosten in Form entgangenen Trainingsnutzens.",
                "Gartenfläche für Gemüse statt Blumenwiese illustriert Opportunitätskosten.",
                "Gründungsmittel, die nicht in Wertpapiere fließen, haben Opportunitätskosten.",
            ],
            "answer_key": [True, False, True, True, True],
            "expl": [
                T("Definition."),
                F("Auch nicht monetärer Verzicht zählt."),
                T("Lern-/Sportbeispiel."),
                T("Gartenbeispiel."),
                T("Gründungsbeispiel woom-Gründer bzw. allgemeines Investitionsbeispiel."),
            ],
        },
        "CASE 2.3.07": {
            "title": "Grundfragen des Wirtschaftens",
            "context": "In der Übung werden die Grundfragen des Wirtschaftens abgefragt. Bewerten Sie:",
            "statements": [
                "Zu den Grundfragen gehört, was wie und für wen in welcher Menge und Qualität produziert wird.",
                "Ebenso ist zu klären, was gekauft oder eingetauscht werden soll.",
                "Grundfragen entfallen, sobald Märkte existieren.",
                "Knappheit auf beiden Seiten (Haushalte und Unternehmen) erzwingt diese Entscheidungen.",
                "Unbegrenzte Ressourcen würden Wirtschaften im beschriebenen Sinn überflüssig machen.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Wörtliche Grundfrage."),
                T("Zweite Grundfrage."),
                F("Märkte beantworten Fragen, löschen sie nicht."),
                T("Knappheitsausgang."),
                T("Einstiegslogik des Abschnitts."),
            ],
        },
        "CASE 2.3.08": {
            "title": "BrewPeak: Preiserhöhung und Ressourcen",
            "context": "Ein Café erwägt höhere Espressopreise bei knappen Bohnen und Personalstunden. Bewerten Sie:",
            "statements": [
                "Bohnen und Barista-Zeit sind knappe Inputs mit Alternativverwendungen.",
                "Mehr Espresso-Output kann weniger Kapazität für andere Getränke bedeuten.",
                "Preissetzung ändert nichts daran, dass Produktionsentscheidungen unter Knappheit fallen.",
                "Opportunitätskosten existieren nur, wenn keine Preise existieren.",
                "Unternehmen müssen planen, welche Güter mit vorhandenen Mitteln erzeugt werden.",
            ],
            "answer_key": [True, True, True, False, True],
            "expl": [
                T("Inputknappheit."),
                T("Kapazitäts-Trade-off."),
                T("Preis und Knappheit sind verbunden, Knappheit bleibt."),
                F("Opportunitätskosten gibt es mit und ohne Marktpreis."),
                T("Unternehmensbeispiel im Text."),
            ],
        },
        "CASE 2.3.09": {
            "title": "Bewässerung: Weizen oder Gemüse",
            "context": "Ein Landwirt hat begrenztes Bewässerungswasser. Bewerten Sie:",
            "statements": [
                "Wasser ist hier knappe Ressource mit alternativem Einsatz.",
                "Die Entscheidung für Weizen erzeugt Opportunitätskosten in Form entgangener Gemüseerträge.",
                "Natürliche Ressourcenknappheit ist für Wirtschaften irrelevant.",
                "Nachhaltiges Wirtschaften bezieht Wirkungen auf Umwelt und künftige Generationen ein.",
                "Kurzfristige Entscheidungen können langfristige ökologische Schäden verursachen.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Klassische Allokation."),
                T("Opportunitätskosten."),
                F("Natürliche Ressourcen sind zentral in 1.3."),
                T("Nachhaltigkeitsabsatz."),
                T("Klimawissenschaftlicher Impuls im Text."),
            ],
        },
        "CASE 2.3.10": {
            "title": "Zeitknappheit bei Ride-Hail-Fahrern",
            "context": "Fahrer:innen entscheiden, zu welchen Zeiten sie knappe Arbeitsstunden anbieten. Bewerten Sie:",
            "statements": [
                "Arbeitszeit ist knapp und hat Opportunitätskosten alternativer Verwendung (Ruhe, andere Jobs).",
                "Höhere Auslastung einer Stunde bedeutet Verzicht auf andere Tätigkeiten in derselben Stunde.",
                "Nur Unternehmen kennen Zeitknappheit; Personen nicht.",
                "Ökonomische Entscheidungen sollten Konsequenzen inklusive Opportunitätskosten bedenken.",
                "Untätigkeit in einer Stunde ist keine Entscheidung über knappe Zeit.",
            ],
            "answer_key": [True, True, False, True, False],
            "expl": [
                T("Zeit als Ressource."),
                T("Mutually exclusive uses."),
                F("Haushalte/Personen entscheiden ständig über Zeit."),
                T("Reflektierte Entscheidung laut Text."),
                F("Auch Ruhen allokiert Zeit."),
            ],
        },
        "CASE 2.3.11": {
            "title": "Behörde: knappes Prüfbudget",
            "context": "Eine Behörde hat begrenzte Personalstunden für Wettbewerbsprüfungen. Bewerten Sie:",
            "statements": [
                "Öffentliche Institutionen wirtschaften ebenfalls mit knappen Ressourcen.",
                "Mehr Prüfungen in Markt A bedeuten weniger Kapazität für Markt B.",
                "Staatsbudgets sind unendlich, weil Steuern beliebig erhöht werden können ohne Alternativkosten.",
                "Was mit knappen Mitteln geprüft wird, ist eine Allokationsentscheidung.",
                "Opportunitätskosten öffentlicher Projekte sind entgangene alternative öffentliche Nutzen.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Knappheit gilt für alle Wirtschaftsteilnehmer."),
                T("Kapazitäts-Trade-off."),
                F("Steuern haben politische und ökonomische Grenzen; Alternativkosten bleiben."),
                T("Grundfragenlogik."),
                T("Opportunitätskostendefinition auf Staatsebene."),
            ],
        },
        "CASE 2.3.12": {
            "title": "Buchhandlung: Sortimentsentscheidung",
            "context": "Eine Buchhandlung hat begrenzte Regalfläche und Liquidität. Bewerten Sie:",
            "statements": [
                "Regalfläche ist knappe Ressource mit Alternativbelegung.",
                "Mehr Krimis bedeuten weniger Platz für Sachbücher – Opportunitätskosten in Sortimentnutzen.",
                "Einzelhandelsentscheidungen unterliegen keiner Knappheit.",
                "Was in welcher Menge angeboten wird, ist eine Wirtschaftsentscheidung.",
                "Nachhaltige Sortimentspolitik kann ökologische und soziale Kriterien einbeziehen.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Physische Knappheit."),
                T("Opportunitätskosten."),
                F("Klar gegen 1.3."),
                T("Grundfrage Angebot."),
                T("Nachhaltigkeitsdimensionen."),
            ],
        },
        "CASE 2.3.14": {
            "title": "Sparen versus Konsum im Haushalt",
            "context": "Nationale Debatten über Sparquoten treffen auf einzelne Haushaltsentscheidungen. Bewerten Sie:",
            "statements": [
                "Jeder Euro, der gespart wird, steht heute nicht für Konsum zur Verfügung.",
                "Opportunitätskosten des Sparens sind entgangener heutiger Konsumutzen.",
                "Haushalte mit positivem Einkommen kennen keine Budgetknappheit.",
                "Sparen und Konsumieren sind alternative Verwendungen knapper Mittel.",
                "Reflektierte Entscheidungen berücksichtigen Konsequenzen der Wahl.",
            ],
            "answer_key": [True, True, False, True, True],
            "expl": [
                T("Intertemporale Knappheit."),
                T("Definition."),
                F("Einkommen ≠ Unbegrenztheit."),
                T("Klassische Allokation."),
                T("Textforderung an gute Entscheidungen."),
            ],
        },
        "CASE 2.3.15": {
            "title": "Start-up: Zeit der Gründer",
            "context": "Gründer investieren Zeit in den Aufbau statt in abhängige Beschäftigung. Bewerten Sie:",
            "statements": [
                "Die Opportunitätskosten der Gründung umfassen entgangenes Gehalt oder Freizeitnutzen.",
                "Nur ausbezahlte Rechnungen der GmbH sind Opportunitätskosten.",
                "Zeit und Energie sind knappe Ressourcen der Gründerpersonen.",
                "Das woom-Gründerbeispiel im Text illustriert solche Opportunitätskosten.",
                "Weil Gründung Spaß macht, entfallen ökonomische Opportunitätskosten definitionisch.",
            ],
            "answer_key": [True, False, True, True, False],
            "expl": [
                T("Textbeispiel zu Bezdeka/Ihlenfeld-Logik."),
                F("Auch nicht monetärer Verzicht zählt."),
                T("Ressourcenknappheit."),
                T("Explizites Unternehmensbeispiel in 1.3."),
                F("Nutzen der gewählten Option löscht nicht den Verzicht auf Alternativen."),
            ],
        },
        "CASE 2.3.16": {
            "title": "Airline: knappe Sitzplatzkapazität",
            "context": "Eine Airline allokiert knappe Sitzplätze und Flugzeugumläufe. Bewerten Sie:",
            "statements": [
                "Sitzplätze auf einem Flug sind knapp und rival.",
                "Mehr Plätze für Tarifgruppe A bedeuten weniger für andere Tarife oder Kundengruppen.",
                "Opportunitätskosten eines günstigen Sale-Platzes können entgangene Erlöse höherer Tarife sein.",
                "Kapazitätsentscheidungen sind keine Wirtschaftsentscheidungen.",
                "Unternehmen müssen unter Knappheit wählen, was sie in welcher Menge anbieten.",
            ],
            "answer_key": [True, True, True, False, True],
            "expl": [
                T("Physische Knappheit."),
                T("Allokations-Trade-off."),
                T("Opportunitätskosten im Erlössinn."),
                F("Kern von Wirtschaften."),
                T("Grundfragen."),
            ],
        },
    }

    for cid, data in rewrite_13.items():
        if cid not in by_id:
            continue
        expl = data.pop("expl")
        patch(cid, tactical_explanations=expl, **data)

    # Soft-adapt heavy scarcity titles still in 1.1 toward household participation
    if "CASE 2.1.01" in by_id and by_id["CASE 2.1.01"]["subsection"] == "1.1":
        # Move pure scarcity intro to 1.3
        by_id["CASE 2.1.01"]["subsection"] = "1.3"
    if "CASE 2.1.16" in by_id and by_id["CASE 2.1.16"]["subsection"] == "1.1":
        by_id["CASE 2.1.16"]["subsection"] = "1.3"

    # 2.6.48: strip inflation/money distractors if present in 1.4
    if "CASE 2.6.48" in by_id and by_id["CASE 2.6.48"]["subsection"] == "1.4":
        c = by_id["CASE 2.6.48"]
        text = " ".join(c["statements"])
        if "Inflation" in text or "Geldmenge" in text:
            patch(
                "CASE 2.6.48",
                title="Überblick integrierte Marktmechanismen",
                context="Beurteilen Sie Angebot, Nachfrage und Gleichgewicht laut Lernunterlage:",
                statements=[
                    "Je höher der Preis, desto höher ist gewöhnlich die angebotene Menge (ceteris paribus).",
                    "Je höher der Preis, desto geringer ist gewöhnlich die nachgefragte Menge (ceteris paribus).",
                    "Im Gleichgewichtspreis entsprechen angebotene und nachgefragte Menge einander.",
                    "Ein Preis unter dem Gleichgewicht führt typischerweise zu Nachfrageüberhang.",
                    "Einkommen und Präferenzen können die Nachfragekurve verschieben.",
                ],
                answer_key=[True, True, True, True, True],
                tactical_explanations=[
                    T("Angebotsgesetz laut 1.4."),
                    T("Nachfragegesetz laut 1.4."),
                    T("Markträumungspreis."),
                    T("Fehlmenge/überhöhte Nachfrage."),
                    T("Verschiebungsfaktoren der Nachfrage."),
                ],
            )

    return list(by_id.values())


def main() -> None:
    raw = json.loads(OUT.read_text(encoding="utf-8"))
    assert isinstance(raw, list)

    # Drop any previous native W1.* rows to allow idempotent re-run
    kept = [c for c in raw if not str(c.get("case_id", "")).startswith("CASE W1.")]
    qaed = apply_qa(copy.deepcopy(kept))

    new_cases = build_11() + build_12() + build_15_extra()
    merged = qaed + new_cases

    # Stable sort: subsection, then case_id
    merged.sort(key=lambda c: (c["subsection"], c["case_id"]))

    # Validate
    from collections import Counter

    counts = Counter(c["subsection"] for c in merged)
    for sub in ("1.1", "1.2", "1.5"):
        if counts[sub] < 20:
            raise SystemExit(f"{sub} has only {counts[sub]} cases, need ≥20")

    for c in merged:
        assert len(c["statements"]) == 5 == len(c["answer_key"]) == len(c["tactical_explanations"])
        assert c.get("tier") == "full"
        for i, (a, e) in enumerate(zip(c["answer_key"], c["tactical_explanations"])):
            e = e.rstrip()
            if a:
                assert e.endswith("wahr."), (c["case_id"], i, e[-40:])
            else:
                assert e.endswith("falsch."), (c["case_id"], i, e[-40:])

    OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Wrote", OUT.relative_to(ROOT))
    print("Counts:", dict(sorted(counts.items())))
    print("Total:", len(merged))
    print(
        "Native new:",
        sum(1 for c in merged if str(c["case_id"]).startswith("CASE W1.")),
    )


if __name__ == "__main__":
    main()
