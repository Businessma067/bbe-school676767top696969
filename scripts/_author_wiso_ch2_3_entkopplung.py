#!/usr/bin/env python3
"""Author WiSo Wirtschaft verstehen §2.3 (Entkopplung) practice cases."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/wiso/economics-cases-ch2.json"

CTX = (
    "Analysieren Sie die Entkopplung von Wirtschaftswachstum und Umweltschäden "
    "laut der Lernunterlage „Wirtschaft verstehen“ (Abschnitt 2.3). "
    "Bewerten Sie die folgenden Aussagen:"
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
        "subsection": "2.3",
        "case_id": f"CASE W2.3.{n:02d}",
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
        "Ziel nachhaltiger Wirtschaftspolitik und historische Kopplung",
        [
            "Ein zentrales Ziel nachhaltiger Wirtschaftspolitik besteht darin, den Zusammenhang zwischen wirtschaftlichem Erfolg und ökologischer Belastung zu lockern.",
            "In der Vergangenheit war Wirtschaftswachstum – gemessen am BIP oder Einkommen – eng mit steigendem Verbrauch von Energie, Rohstoffen und Flächen sowie mit wachsenden Emissionen verbunden.",
            "Diese historische Kopplung trug zu einem stetig zunehmenden ökologischen Fußabdruck bei.",
            "Laut Lernunterlage war Wirtschaftswachstum stets völlig unabhängig vom Ressourcenverbrauch.",
            "Der zunehmende ökologische Fußabdruck trägt wesentlich zum Überschreiten mehrerer planetarer Grenzen bei.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Der Einstieg von 2.3 formuliert genau dieses Ziel: den Zusammenhang zwischen wirtschaftlichem Erfolg "
                "und ökologischer Belastung zu lockern."
            ),
            T(
                "BIP bzw. Einkommen, Energie, Rohstoffe, Flächen und Emissionen werden als historisch eng gekoppelt beschrieben."
            ),
            T(
                "Die Kopplung führte laut Text zu einem stetig zunehmenden ökologischen Fußabdruck."
            ),
            F(
                "Der Text betont die enge historische Kopplung – nicht Unabhängigkeit vom Ressourcenverbrauch."
            ),
            T(
                "Der Fußabdruck wird ausdrücklich als wesentliche Ursache für das Überschreiten mehrerer planetarer Grenzen genannt."
            ),
        ],
        "1/5",
    )
)

# --- 02 easy ---
cases.append(
    case(
        2,
        "Warum Entkopplung notwendig ist",
        [
            "Viele gesellschaftliche Ziele wie Beschäftigung, Einkommenssicherung und soziale Stabilität sind traditionell mit Wirtschaftswachstum verknüpft.",
            "Die Politik steht vor einem Dilemma: Wachstum gilt als nötig gegen Armut und zur Finanzierung öffentlicher Güter, bedroht aber über Ressourcen- und Energieintensität die ökologische Stabilität.",
            "Entkopplung (engl. decoupling) bezeichnet den Prozess, bei dem sich wirtschaftliche Entwicklung und Umweltschäden voneinander lösen.",
            "Ziel der Entkopplung ist es, Wohlstand, Beschäftigung und Lebensqualität zu sichern, ohne dass Ressourcenverbrauch oder Emissionen weiter steigen.",
            "Entkopplung ist laut Lernunterlage unerwünscht, weil sie gesellschaftliches Wohlergehen und ökologische Tragfähigkeit trennt.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Beschäftigung, Einkommenssicherung und soziale Stabilität werden als traditionell wachstumsverknüpfte Ziele genannt."
            ),
            T(
                "Genau dieses Dilemma – Wachstum nötig vs. Intensität bedroht Ökologie – steht unter „Warum Entkopplung notwendig ist“."
            ),
            T(
                "Die Definition von Entkopplung/decoupling als Auseinanderlösen von wirtschaftlicher Entwicklung und Umweltschäden ist texttreu."
            ),
            T(
                "Wohlstand, Beschäftigung und Lebensqualität ohne weiteren Anstieg von Verbrauch/Emissionen ist das genannte Ziel."
            ),
            F(
                "Der Text sagt das Gegenteil: Entkopplung ist wünschenswert, weil sie Wohlergehen mit ökologischer Tragfähigkeit verbindet."
            ),
        ],
        "1/5",
    )
)

# --- 03 easy-mid ---
cases.append(
    case(
        3,
        "Relative Entkopplung",
        [
            "Relative Entkopplung liegt vor, wenn die Umweltschäden langsamer zunehmen als die Wirtschaftsleistung.",
            "Bei relativer Entkopplung steigen Emissionen oder Ressourcenverbrauch noch, aber weniger stark als das BIP.",
            "Ein Beispiel für relative Entkopplung ist: BIP +3 %, CO₂-Emissionen +1 %.",
            "Bei relativer Entkopplung sinkt die Umweltbelastung bereits absolut, während das BIP steigt.",
            "Auch bei relativer Entkopplung kann die Umweltbelastung weiter wachsen – nur in geringerem Tempo als die Wirtschaftsleistung.",
        ],
        [True, True, True, False, True],
        [
            T(
                "„Langsamer zunehmen als die Wirtschaftsleistung“ ist die Definition relativer Entkopplung im Text."
            ),
            T(
                "Noch steigend, aber schwächer als das BIP – so die Konkretisierung."
            ),
            T(
                "BIP +3 % bei CO₂ +1 % ist das Lehrbuchbeispiel für relative Entkopplung."
            ),
            F(
                "Absolutes Sinken bei wachsendem BIP ist absolute Entkopplung. Relative lässt die Belastung weiter steigen."
            ),
            T(
                "Der Text hält fest: Die Umweltbelastung wächst weiter, jedoch in geringerem Tempo."
            ),
        ],
        "2/5",
    )
)

# --- 04 easy-mid ---
cases.append(
    case(
        4,
        "Absolute Entkopplung",
        [
            "Absolute Entkopplung bedeutet, dass die Umweltbelastung insgesamt sinkt, während die Wirtschaftsleistung weiter zunimmt.",
            "Ein Beispiel für absolute Entkopplung ist: BIP +3 %, CO₂-Emissionen −4 %.",
            "Nur absolute Entkopplung gewährleistet laut Lernunterlage, dass wirtschaftliche Entwicklung nicht länger auf Kosten ökologischer Stabilität erfolgt.",
            "Absolute Entkopplung liegt bereits vor, wenn Emissionen um 1 % steigen und das BIP um 3 % wächst.",
            "In der ökologischen Ökonomik gilt die absolute Entkopplung der Wirtschaftsleistung vom Umweltverbrauch als eine der zentralen Strategien für nachhaltige Entwicklung.",
        ],
        [True, True, True, False, True],
        [
            T(
                "Sinkende Belastung bei wachsender Wirtschaftsleistung – das ist die Definition absoluter Entkopplung."
            ),
            T(
                "BIP +3 % und Emissionen −4 % ist das genannte Beispiel."
            ),
            T(
                "Der Text stellt ausdrücklich klar: Nur absolute Entkopplung gewährleistet Entwicklung ohne Kosten für die ökologische Stabilität."
            ),
            F(
                "Emissionen +1 % bei BIP +3 % ist relative Entkopplung – die Belastung steigt noch."
            ),
            T(
                "Als zentrale Strategie der ökologischen Ökonomik wird absolute Entkopplung so hervorgehoben."
            ),
        ],
        "2/5",
    )
)

# --- 05 mid ---
cases.append(
    case(
        5,
        "Empirische Evidenz: relativ vs. absolut",
        [
            "Bisher wurde in vielen Ländern eine relative Entkopplung erreicht.",
            "Eine absolute Entkopplung ist bisher nur in wenigen Bereichen und Staaten nachweisbar.",
            "Absolute Entkopplung gelang für einige lokale Schadstoffe, z. B. Schwefeldioxid (SO₂) oder FCKW.",
            "Erfolge bei SO₂ oder FCKW beruhen unter anderem auf technischen Ersatzstoffen und internationalen Umweltabkommen.",
            "Laut Lernunterlage ist absolute Entkopplung bei CO₂ bereits weltweit flächendeckend und dauerhaft erreicht.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Viele Länder mit relativer Entkopplung – so der empirische Einstieg."
            ),
            T(
                "Absolute Entkopplung nur in wenigen Bereichen/Staaten – texttreu."
            ),
            T(
                "SO₂ und FCKW werden als Beispiele lokaler Schadstoffe mit absoluter Entkopplung genannt."
            ),
            T(
                "Technische Ersatzstoffe und internationale Abkommen sind die genannten Erfolgsfaktoren."
            ),
            F(
                "Bei CO₂ ist absolute Entkopplung deutlich schwieriger; flächendeckend/dauerhaft weltweit ist ausdrücklich nicht der Befund."
            ),
        ],
        "2/5",
    )
)

# --- 06 mid ---
cases.append(
    case(
        6,
        "Warum CO₂-Entkopplung besonders schwer ist",
        [
            "Bei CO₂-Emissionen ist eine absolute Entkopplung deutlich schwieriger zu erreichen als bei manchen lokalen Schadstoffen.",
            "Elektrifizierung von Mobilität, Logistik und Wärmeerzeugung kann zu Effizienzsteigerungen und sinkendem Energiebedarf führen.",
            "Dennoch bleibt der Treibhausgasausstoß in der industriellen Produktion weiterhin eng mit dem Energieverbrauch verknüpft.",
            "Für SO₂ oder FCKW wurden „End-of-Pipe“-Technologien entwickelt (z. B. Filter, Substitution).",
            "Für CO₂ existiert laut Lernunterlage bereits eine großskalierbare Technologie, die Emissionen vollständig und kostengünstig neutralisiert.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Der Kontrast „deutlich schwieriger“ bei CO₂ steht so im Text."
            ),
            T(
                "Elektrifizierung als Effizienzhebel für Mobilität, Logistik und Wärme wird genannt."
            ),
            T(
                "Enge Verknüpfung industrieller THG mit Energieverbrauch – Kern industrieller Wertschöpfung – ist der zentrale Hemmschuh."
            ),
            T(
                "End-of-Pipe (Filter, Substitution) für SO₂/FCKW ist die Gegenüberstellung im Text."
            ),
            F(
                "Der Text sagt ausdrücklich: Es existiert bislang keine großskalierbare Technologie, die CO₂-Emissionen vollständig neutralisiert."
            ),
        ],
        "3/5",
    )
)

# --- 07 mid ---
cases.append(
    case(
        7,
        "CCS und hard-to-abate in Österreich",
        [
            "Carbon Capture and Storage (CCS) ist technisch möglich, aber teuer, energieintensiv und bislang nur begrenzt einsetzbar.",
            "In Österreich wird CCS nur für „hard-to-abate“-Branchen erlaubt.",
            "Hard-to-abate meint Branchen, für die bis 2040 voraussichtlich noch keine wirtschaftlich konkurrenzfähigen kohlenstofffreien Alternativen existieren werden.",
            "Als Beispiele hard-to-abate nennt die Lernunterlage unter anderem Teile der Abfall- und Zementindustrie sowie die Luftfahrt.",
            "Laut Lernunterlage ist CCS in Österreich für alle Branchen ohne Einschränkung das bevorzugte Standardinstrument.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Teuer, energieintensiv, begrenzt einsetzbar – so die Charakterisierung von CCS."
            ),
            T(
                "Die Beschränkung auf hard-to-abate in Österreich steht ausdrücklich im Text."
            ),
            T(
                "Die 2040-Erwartung fehlender konkurrenzfähiger Alternativen definiert hard-to-abate im Text."
            ),
            T(
                "Abfall, Zement und Luftfahrt sind die genannten Beispiele."
            ),
            F(
                "„Nur für hard-to-abate“ widerspricht einer branchenweiten Standardlösung ohne Einschränkung."
            ),
        ],
        "3/5",
    )
)

# --- 08 mid ---
cases.append(
    case(
        8,
        "Carbon Leakage und Rebound-Effekte",
        [
            "Selbst in Ländern mit sinkenden Emissionen kann ein Teil der Reduktion auf die Verlagerung von Produktion und Emissionen in andere Weltregionen zurückzuführen sein (Carbon Leakage).",
            "Carbon Leakage bedeutet unter anderem, dass Produktion in Länder mit laxeren Standards wandert.",
            "Rebound-Effekte können Effizienzgewinne wieder aufheben.",
            "Beim Rebound-Effekt senken effizientere Technologien oft Kosten, was zu höherer Gesamtnachfrage nach Energie und Gütern führen kann.",
            "Carbon Leakage und Rebound-Effekte sind laut Lernunterlage reine Messfehler ohne reale Bedeutung für Entkopplungsdebatten.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Verlagerung von Produktion/Emissionen als Carbon Leakage ist texttreu."
            ),
            T(
                "Wanderung in Länder mit laxeren Standards ist die im Merkkasten genannte Begründung."
            ),
            T(
                "Aufhebung von Effizienzgewinnen durch Rebound steht so im Text."
            ),
            T(
                "Kostensenkung → höhere Gesamtnachfrage ist der beschriebene Mechanismus (z. B. energieeffiziente Geräte, mehr Nutzung)."
            ),
            F(
                "Beide Phänomene sind strukturelle Herausforderungen der Entkopplung – keine bedeutungslosen Messfehler."
            ),
        ],
        "3/5",
    )
)

# --- 09 mid ---
cases.append(
    case(
        9,
        "Strukturelle und institutionelle Anforderungen",
        [
            "Absolute Entkopplung ist nicht allein eine technologische, sondern vor allem eine strukturelle und institutionelle Herausforderung.",
            "Politische Maßnahmen wie CO₂-Bepreisung und Förderinstrumente für erneuerbare Energien werden als erforderlich genannt.",
            "Systemtransformationen in Energie-, Mobilitäts- und Ernährungssystemen gehören zu den Anforderungen.",
            "Verhaltensänderungen auf Konsumenten- und Unternehmensebene sind laut Text ebenfalls nötig.",
            "Laut Lernunterlage genügt eine einzelne Filtertechnologie, um absolute Entkopplung im großen Maßstab zu sichern.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Nicht allein technologisch, sondern strukturell/institutionell – Kernaussage des Abschnitts."
            ),
            T(
                "CO₂-Bepreisung und EE-Förderung sind die genannten Politikbeispiele."
            ),
            T(
                "Energie, Mobilität und Ernährung werden als Systemtransformationsfelder aufgezählt."
            ),
            T(
                "Verhalten von Konsument:innen und Unternehmen ist der dritte Anforderungspunkt."
            ),
            F(
                "Gerade die Betonung struktureller/institutioneller Mehrdimensionalität widerspricht der Idee einer einzelnen Filterlösung."
            ),
        ],
        "3/5",
    )
)

# --- 10 mid ---
cases.append(
    case(
        10,
        "Entkopplung als Voraussetzung für Wohlstand",
        [
            "Entkopplung ist keine technische Nebensache, sondern eine Voraussetzung für langfristigen Wohlstand innerhalb ökologischer Grenzen.",
            "Einige wohlhabende Staaten – etwa skandinavische Länder oder das Vereinigte Königreich – haben eine partielle absolute Entkopplung von BIP und CO₂-Emissionen erreicht.",
            "Selbst dort reichen die Reduktionsraten bislang nicht aus, um bis 2040 (Industrieländer) bzw. 2050 (global) Netto-Null-Emissionen zu erreichen.",
            "Entkopplung verbindet gesellschaftliches Wohlergehen mit ökologischer Tragfähigkeit und ermöglicht ökonomische Aktivität innerhalb der Erdsystemgrenzen.",
            "Weil einzelne Länder partielle absolute Entkopplung zeigen, ist das globale Netto-Null-Ziel laut Lernunterlage bereits sicher erreicht.",
        ],
        [True, True, True, True, False],
        [
            T(
                "„Keine technische Nebensache, sondern Voraussetzung“ – wörtliche Stoßrichtung des Texts."
            ),
            T(
                "Skandinavien und UK als Beispiele partieller absoluter BIP–CO₂-Entkopplung."
            ),
            T(
                "Unzureichende Reduktionsraten für Netto-Null 2040/2050 stehen so im Text."
            ),
            T(
                "Wohlergehen + Tragfähigkeit innerhalb der Erdsystemgrenzen ist die frühere Zielformulierung, die hier wieder anschließt."
            ),
            F(
                "Partielle nationale Erfolge ersetzen nicht das globale Netto-Null-Ziel; der Text betont unzureichende Raten."
            ),
        ],
        "3/5",
    )
)

# --- 11 mid-hard ---
cases.append(
    case(
        11,
        "Abbildung 14: gemischte Evidenz",
        [
            "Die empirische Evidenz zur Entkopplung ist gemischt.",
            "Einige Länder haben bereits absolute Entkopplung erzielt.",
            "Die meisten Länder haben laut Darstellung lediglich relative Entkopplung erreicht.",
            "Manche Länder verstärken weiterhin die Kopplung zwischen BIP und Emissionen.",
            "Abbildung 14 zeigt laut Lernunterlage, dass weltweit bereits überall absolute Entkopplung herrscht.",
        ],
        [True, True, True, True, False],
        [
            T(
                "„Gemischt“ ist die explizite Bewertung der Evidenz zu Abbildung 14."
            ),
            T(
                "Einige Länder mit absoluter Entkopplung – so der Text."
            ),
            T(
                "Die meisten lediglich relativ – texttreu."
            ),
            T(
                "Manche verstärken die Kopplung weiter – dritter Befund."
            ),
            F(
                "„Überall absolut“ widerspricht der gemischten Evidenz (relativ / absolut / verstärkte Kopplung)."
            ),
        ],
        "4/5",
        context=(
            "Interpretieren Sie die empirische Evidenz zu relativer und absoluter Entkopplung "
            "(u. a. Abbildung 14) laut Abschnitt 2.3. Bewerten Sie die folgenden Aussagen:"
        ),
    )
)

# --- 12 mid-hard ---
cases.append(
    case(
        12,
        "Abbildung 15 und globale Trends 1990–2024",
        [
            "Zwischen 1990 und 2024 haben rund 30 Länder – vor allem in der EU und in Nordamerika – ihre CO₂-Emissionen absolut reduziert, während ihr BIP weiterwuchs.",
            "Im selben Zeitraum fiel der CO₂-Ausstoß pro BIP-Einheit (Emissionsintensität) global um rund 40 %.",
            "Dennoch stiegen die globalen Gesamtemissionen weiter an.",
            "Der Anstieg der globalen Gesamtemissionen wird damit erklärt, dass das Wirtschaftswachstum die Effizienzgewinne überkompensierte.",
            "Weil die Emissionsintensität um etwa 40 % sank, müssen laut Lernunterlage auch die globalen Gesamtemissionen zwingend gesunken sein.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Rund 30 Länder, EU/Nordamerika, absolute CO₂-Senkung bei wachsendem BIP – so Abbildung 15 im Text."
            ),
            T(
                "Globaler Rückgang der Emissionsintensität um rund 40 % ist der genannte Wert."
            ),
            T(
                "Trotz Intensitätsrückgang stiegen die globalen Gesamtemissionen weiter."
            ),
            T(
                "Überkompensation der Effizienzgewinne durch Wirtschaftswachstum ist die Erklärung im Text."
            ),
            F(
                "Intensität ≠ Gesamtemissionen. Der Text zeigt gerade, dass Gesamtemissionen trotz Intensitätsrückgang stiegen."
            ),
        ],
        "4/5",
    )
)

# --- 13 hard ---
cases.append(
    case(
        13,
        "Reduktionsgeschwindigkeit und Global Carbon Budget",
        [
            "Die Reduktionsgeschwindigkeit reicht selbst in erfolgreichen Ländern bislang nicht aus, um Klimaneutralität bis 2050 zu erreichen.",
            "Nach Schätzungen des Global Carbon Budget (2024) müsste die globale CO₂-Intensität jährlich um 8–9 % sinken.",
            "Tatsächlich beträgt die aktuelle jährliche Senkungsrate der globalen CO₂-Intensität weniger als 2 %.",
            "Eine jährliche Intensitätssenkung von unter 2 % liegt klar unter dem für Netto-Null benötigten Pfad von 8–9 %.",
            "Laut Lernunterlage liegt die tatsächliche jährliche Senkung der globalen CO₂-Intensität bereits dauerhaft über 8 %.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Unzureichende Reduktionsgeschwindigkeit für Klimaneutralität 2050 – auch in erfolgreichen Ländern."
            ),
            T(
                "8–9 % jährlich laut Global Carbon Budget (2024) ist der Soll-Wert im Text."
            ),
            T(
                "Tatsächlich weniger als 2 % – so der Ist-Befund."
            ),
            T(
                "Der Vergleich Soll 8–9 % vs. Ist <2 % macht die Lücke prüfungsrelevant klar."
            ),
            F(
                "„Bereits dauerhaft über 8 %“ widerspricht dem Ist-Wert von weniger als 2 %."
            ),
        ],
        "4/5",
    )
)

# --- 14 hard ---
cases.append(
    case(
        14,
        "Merkkasten: relative vs. absolute Entkopplung und Rebound",
        [
            "Relative Entkopplung: Umweltbelastung steigt langsamer als die Wirtschaftsleistung, z. B. BIP +3 %, Emissionen +1 %.",
            "Absolute Entkopplung: Umweltbelastung sinkt trotz wachsender Wirtschaftsleistung, z. B. BIP +3 %, Emissionen −4 %.",
            "Rebound-Effekt: Effizienzgewinne führen zu höherem Gesamtverbrauch; Begründung z. B. energieeffiziente Geräte führen zu mehr Nutzung.",
            "Carbon Leakage: Emissionen verlagern sich ins Ausland, etwa weil Produktion in Länder mit laxeren Standards wandert.",
            "Im Merkkasten gilt BIP +3 % und Emissionen +1 % als Beispiel für absolute Entkopplung.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Das ist die Merkkasten-Definition inklusive Zahlenbeispiel."
            ),
            T(
                "BIP +3 %, Emissionen −4 % ist das Absolute-Beispiel im Kasten."
            ),
            T(
                "Rebound mit Geräte-/Nutzungsbeispiel entspricht dem Kasten."
            ),
            T(
                "Verlagerung und laxere Standards – so Carbon Leakage im Kasten."
            ),
            F(
                "BIP +3 % / Emissionen +1 % ist relativ, nicht absolut. Absolut verlangt sinkende Emissionen."
            ),
        ],
        "4/5",
    )
)

# --- 15 hard ---
cases.append(
    case(
        15,
        "Technische Innovation allein reicht nicht",
        [
            "Entkopplung ist keine rein technische Frage, sondern eine grundlegende Voraussetzung für die Vereinbarkeit von Wohlstand und ökologischer Stabilität.",
            "Die bisherigen Fortschritte zeigen: Technologische Innovationen allein reichen nicht aus.",
            "Entscheidend sind geeignete politische Rahmenbedingungen, nachhaltige wirtschaftliche Strukturen und gesellschaftliche Werte, die ökologische Verantwortung fördern.",
            "Nur wenn absolute Entkopplung im großen Maßstab gelingt, kann Wirtschaftswachstum mit Klimaneutralität und langfristigem Wohlstand vereinbar werden.",
            "Laut Schlussabsatz genügt relative Entkopplung im großen Maßstab, um Wirtschaftswachstum mit Klimaneutralität sicher zu vereinbaren.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Keine rein technische Frage + Voraussetzung für Wohlstand/Stabilität – Schlussperspektive."
            ),
            T(
                "„Technologische Innovationen allein reichen nicht“ ist wörtlich der Befund."
            ),
            T(
                "Politik, Strukturen und Werte sind die drei genannten entscheidenden Ebenen."
            ),
            T(
                "Absolute Entkopplung im großen Maßstab als Bedingung für Vereinbarkeit mit Klimaneutralität – so der Text."
            ),
            F(
                "Der Text verlangt absolute Entkopplung im großen Maßstab – relative reicht dafür nicht."
            ),
        ],
        "4/5",
    )
)

# --- 16 hard ---
cases.append(
    case(
        16,
        "Tricky Wortlaute: relative vs. absolute Zahlen",
        [
            "Wenn BIP und Emissionen beide steigen, Emissionen aber schwächer, liegt relative Entkopplung vor – keine absolute.",
            "Wenn das BIP steigt und die Emissionen fallen, liegt absolute Entkopplung vor.",
            "Ein Land mit BIP −2 % und Emissionen −5 % erfüllt die Lehrbuchdefinition absoluter Entkopplung (wachsende Wirtschaftsleistung bei sinkender Belastung).",
            "Relative Entkopplung kann mit weiter wachsender Umweltbelastung einhergehen.",
            "Absolute Entkopplung ist mit weiter steigenden Gesamtemissionen definitionsgemäß unvereinbar.",
        ],
        [True, True, False, True, True],
        [
            T(
                "Beide steigen, Emissionen langsamer = relativ. Absolut verlangt sinkende Belastung."
            ),
            T(
                "Wachsendes BIP + sinkende Emissionen = absolute Entkopplung laut Definition."
            ),
            F(
                "Absolute Entkopplung verlangt im Text wachsende Wirtschaftsleistung bei sinkender Belastung. "
                "Schrumpfendes BIP (−2 %) erfüllt diese Wachstumsseite nicht – auch wenn Emissionen stärker fallen."
            ),
            T(
                "Genau das unterscheidet relativ von absolut: Belastung darf bei relativ noch steigen."
            ),
            T(
                "Steigende Gesamtemissionen widersprechen dem „Belastung sinkt“ der absoluten Definition."
            ),
        ],
        "5/5",
    )
)

# --- 17 very hard ---
cases.append(
    case(
        17,
        "Intensität, Gesamtemissionen und Überkompensation",
        [
            "Ein Rückgang der CO₂-Intensität (CO₂ pro BIP-Einheit) bedeutet nicht automatisch sinkende globale Gesamtemissionen.",
            "Wenn das Wirtschaftswachstum die Effizienzgewinne überkompensiert, können Gesamtemissionen trotz sinkender Intensität steigen.",
            "Der globale Intensitätsrückgang um rund 40 % (1990–2024) widerlegt laut Lernunterlage jede Notwendigkeit absoluter Entkopplung.",
            "Nationale absolute CO₂-Senkungen bei wachsendem BIP können mit global weiter steigenden Emissionen einhergehen.",
            "Für Netto-Null-Pfade ist die Geschwindigkeit der Intensitätssenkung entscheidend – Ist <2 % p. a. vs. Soll 8–9 % p. a.",
        ],
        [True, True, False, True, True],
        [
            T(
                "Intensität und Gesamtniveau sind zu trennen; der Text zeigt steigende Totale trotz Intensitätsrückgang."
            ),
            T(
                "Überkompensation durch Wachstum ist die explizite Erklärung."
            ),
            F(
                "Der 40-%-Rückgang ersetzt absolute Entkopplung und Netto-Null-Pfade nicht; der Text betont unzureichende Raten und weiter steigende Totale."
            ),
            T(
                "Rund 30 Länder mit absoluter Reduktion vs. global steigende Emissionen – beides steht parallel im Text."
            ),
            T(
                "Soll/Ist-Lücke 8–9 % vs. <2 % ist der quantitative Kern für die Geschwindigkeitsfrage."
            ),
        ],
        "5/5",
    )
)

# --- 18 very hard ---
cases.append(
    case(
        18,
        "Leakage, Rebound und Scheinerfolge",
        [
            "Nationale Emissionsrückgänge können teilweise Carbon Leakage widerspiegeln und dann den globalen Entkopplungserfolg überzeichnen.",
            "Rebound-Effekte können lokale Effizienzgewinne konterkarieren, indem Gesamtnachfrage und -verbrauch steigen.",
            "Weil Rebound und Leakage existieren, ist jede Form von Entkopplung laut Lernunterlage grundsätzlich unmöglich.",
            "Absolute Entkopplung erfordert neben Technik auch Politik, Systemtransformation und Verhaltensänderung – gerade wegen Leakage und Rebound.",
            "End-of-Pipe-Erfolge bei SO₂/FCKW lassen sich nicht ohne Weiteres auf CO₂ übertragen, solange keine großskalierbare Neutralisierungstechnologie existiert.",
        ],
        [True, True, False, True, True],
        [
            T(
                "Leakage als Teil erklärter nationaler Reduktionen relativiert den globalen Erfolg – so der Text."
            ),
            T(
                "Rebound hebt Effizienzgewinne über höhere Nachfrage wieder auf."
            ),
            F(
                "Der Text hält Entkopplung für notwendig und teilweise empirisch beobachtbar – nicht für grundsätzlich unmöglich. "
                "Er betont Herausforderungen, keinen Unmöglichkeitsbeweis."
            ),
            T(
                "Gerade die strukturelle/institutionelle Agenda folgt aus den Grenzen rein technischer Lösungen."
            ),
            T(
                "Der Kontrast End-of-Pipe vs. fehlende großskalierbare CO₂-Neutralisierung ist der technische Kern der CO₂-Schwierigkeit."
            ),
        ],
        "5/5",
    )
)

# --- 19 very hard ---
cases.append(
    case(
        19,
        "CCS-Politik vs. Entkopplungsziel",
        [
            "CCS als teure, energieintensive und begrenzt einsetzbare Option erklärt mit, warum CO₂-Entkopplung schwerer ist als bei SO₂/FCKW.",
            "Die österreichische Beschränkung von CCS auf hard-to-abate-Branchen bedeutet nicht, dass absolute Entkopplung dort bereits erreicht ist.",
            "Hard-to-abate bis 2040 ohne konkurrenzfähige Alternativen zeigt strukturelle Pfadabhängigkeit in Teilen von Abfall, Zement und Luftfahrt.",
            "Wenn CCS nur begrenzt einsetzbar ist, gewinnen CO₂-Bepreisung, EE-Förderung und Systemtransformationen für die Entkopplungsagenda an Gewicht.",
            "Laut Lernunterlage macht die Zulassung von CCS in hard-to-abate-Branchen relative Entkopplung definitionsgleich mit absoluter Entkopplung.",
        ],
        [True, True, True, True, False],
        [
            T(
                "CCS-Grenzen sind Teil der Erklärung, warum CO₂ schwieriger ist als lokal filterbare Schadstoffe."
            ),
            T(
                "Zulässigkeit ≠ erreichte absolute Entkopplung. Der Text beschreibt Erlaubnis und Erwartung, nicht den Erfolg."
            ),
            T(
                "2040-Horizont und Branchenbeispiele markieren strukturelle Schwierigkeit, nicht nur Technikmangel."
            ),
            T(
                "Die Anforderungsliste (Preis, Förderung, Systeme, Verhalten) wird wichtiger, wenn End-of-Pipe/CCS nicht tragen."
            ),
            F(
                "CCS-Politik ändert die Definitionen nicht: relativ = Belastung steigt langsamer; absolut = Belastung sinkt. "
                "Keine Definitionsgleichheit."
            ),
        ],
        "5/5",
    )
)

# --- 20 very hard ---
cases.append(
    case(
        20,
        "Gesamtzusammenhang Entkopplung unter Prüfungsdruck",
        [
            "Relative Entkopplung verbessert die Emissionsintensität der Wirtschaftsleistung, stoppt aber nicht zwingend den Anstieg der Umweltbelastung.",
            "Nur absolute Entkopplung im großen Maßstab macht Wachstum mit Klimaneutralität und langfristigem Wohlstand vereinbar – so die Lernunterlage.",
            "Ein Land kann BIP und Lebensqualität steigern und zugleich absolute Entkopplung verfehlen, wenn Emissionen nur langsamer steigen.",
            "Die Lücke zwischen benötigter Intensitätssenkung (8–9 % p. a.) und tatsächlicher Rate (<2 % p. a.) zeigt, dass bisherige Fortschritte für Netto-Null-Pfade zu langsam sind.",
            "Weil rund 30 Länder absolut entkoppelt haben, entfällt laut Text jedes politische Handeln zu CO₂-Preis, Systemtransformation und Verhaltensänderung.",
        ],
        [True, True, True, True, False],
        [
            T(
                "Relative Entkopplung = langsameres Wachstum der Belastung; Stopp/Rückgang ist nicht garantiert."
            ),
            T(
                "Der Schlusssatz bindet Vereinbarkeit explizit an absolute Entkopplung im großen Maßstab."
            ),
            T(
                "Langsameres Steigen = relativ = absolute Entkopplung verfehlt, trotz wachsendem BIP/Wohlstand."
            ),
            T(
                "Soll/Ist-Intensitätslücke ist der quantitative Beleg für „zu langsam“."
            ),
            F(
                "Gerade trotz partieller Erfolge betont der Text: Technik allein reicht nicht; Politik, Strukturen und Werte bleiben entscheidend."
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
            assert e.endswith("Die Aussage ist daher wahr."), (c["case_id"], i)
        else:
            assert e.endswith("Die Aussage ist daher falsch."), (c["case_id"], i)

existing = json.loads(OUT.read_text(encoding="utf-8"))
kept = [r for r in existing if r.get("subsection") != "2.3"]
merged = kept + cases
OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {len(cases)} §2.3 cases; bank now {len(merged)} total → {OUT.relative_to(ROOT)}")
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
