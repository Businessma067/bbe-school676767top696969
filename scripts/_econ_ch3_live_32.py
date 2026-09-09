#!/usr/bin/env python3
"""Live-teacher CASE 3.2.*"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.2.01": [
        """Start from the subsection map. Sector follows main activity: primary extracts, secondary manufactures, tertiary serves. That is why mining ore is primary-sector activity while smelting metal ingots is secondary fits. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The labels line up with the book.

So the statement is True.""",
        """The wording holds because the tertiary sector comprises services such as banking, insurance, and coaching. Keep Fuhrmann’s wording in front. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. Nothing in the sentence forces a narrower box than the book allows. In Three-sector Model Basics, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve trade, code and support — tertiary even when boxes move.

So the statement is True.""",
        """The wording holds because the primary sector covers farming, fishing, mining, and forestry extracting raw materials. Walk the activity named here. Primary activity extracts raw materials — farming, fishing, mining, forestry. The named pieces sit inside that course category. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Here is the slip. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. So “Banking and insurance belong to the primary sector because they are basic needs” cannot stand. In high-GDP EU economies, services often clear more than seventy percent of output.

So the statement is False.""",
        """The wording fails because it claims that the secondary sector delivers banking and insurance services to households — and that overreach is wrong. Here is the slip. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. That conclusion does not follow from the definition. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.2.02": [
        """The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. Applied to this wording — Selling lift passes and ski instruction are tertiary services — the label holds. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that instructors supply capital because they teach on mountain slopes — and that overreach is wrong. The three-sector model sorts firms by what they mainly do. Against that rule, the absolute wording overreaches. Tina and Steve trade, code and support — tertiary even when boxes move. Correct sorting leaves it false.

So the statement is False.""",
        """The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. So “Manufacturing skis on site would remain tertiary because guests consume the experience” cannot stand. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. Tyrolean Ski Resort Services is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """That sentence overshoots. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. So “Guest services at a ski resort are primary extraction because snow is natural” cannot stand. In high-GDP EU economies, services often clear more than seventy percent of output. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Here is the slip. Primary activity extracts raw materials — farming, fishing, mining, forestry. So “The resort belongs to the primary sector because it operates on a mountainside” cannot stand. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
    ],
    "CASE 3.2.03": [
        """The wording holds because a coal mine extracting ore belongs to the primary sector. Walk the activity named here. Primary activity extracts raw materials — farming, fishing, mining, forestry. The named pieces sit inside that course category. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is True.""",
        """Primary activity extracts raw materials — farming, fishing, mining, forestry. That is why an olive farm harvesting and pressing oil performs primary agricultural activity fits. Tina and Steve trade, code and support — tertiary even when boxes move. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because forestry concessions supplying logs to mills belong to the primary sector. Walk the activity named here. Primary activity extracts raw materials — farming, fishing, mining, forestry. The named pieces sit inside that course category. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. The labels line up with the book.

So the statement is True.""",
        """The wording holds because milling logs into export boards at a timber mill is secondary manufacturing. Start from the subsection map. Secondary activity transforms materials into goods — manufacturing. Nothing in the sentence forces a narrower box than the book allows. In Primary Sector Activities, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. In high-GDP EU economies, services often clear more than seventy percent of output.

So the statement is True.""",
        """The wording holds because commercial fishing that lands herring for sale is primary-sector extraction. Keep Fuhrmann’s wording in front. Primary activity extracts raw materials — farming, fishing, mining, forestry. The named pieces sit inside that course category. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.2.04": [
        """The wording holds because retail sale of finished jackets is tertiary distribution or trade. Walk the activity named here. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. The named pieces sit inside that course category. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because warehousing steel before welding is a tertiary logistics service. Start from the subsection map. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. The named pieces sit inside that course category. Tina and Steve trade, code and support — tertiary even when boxes move.

So the statement is True.""",
        """The wording fails because it claims that a car plant assembling vehicles operates in the tertiary sector because it serves customers — and that overreach is wrong. That sentence overshoots. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. A counter-scene refuses the shortcut. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that a fashion label sewing jackets performs tertiary retail because jackets are sold later — and that overreach is wrong. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. That conclusion does not follow from the definition. In high-GDP EU economies, services often clear more than seventy percent of output. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that smelters shaping metal remain primary because ore originates underground — and that overreach is wrong. Familiar words, wrong box. Secondary activity transforms materials into goods — manufacturing. That conclusion does not follow from the definition. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Secondary Manufacturing is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.2.05": [
        """Start from the subsection map. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. That is why measured GDP can rise after ecological disasters that require infrastructure repair fits. In Flood Rebuild and GDP, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

Note: sector follows main activity, not the material’s biography.

So the statement is True.""",
        """The wording holds because construction spending on bridge rebuilds is included in GDP measurement. Start from the subsection map. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. The named pieces sit inside that course category. Tina and Steve trade, code and support — tertiary even when boxes move. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because rebuild spending can raise measured GDP while citizen wellbeing falls. Keep Fuhrmann’s wording in front. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. The named pieces sit inside that course category. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary.

So the statement is True.""",
        """The wording holds because gDP reflects monetary value of final goods and services produced within national borders. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. The named pieces sit inside that course category. In high-GDP EU economies, services often clear more than seventy percent of output. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that rebuild activity proves GDP always equals citizen wellbeing after disasters — and that overreach is wrong. Familiar words, wrong box. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. That conclusion does not follow from the definition. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.2.06": [
        """The wording holds because banking branches providing loans perform tertiary financial services. Keep Fuhrmann’s wording in front. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. The named pieces sit inside that course category. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The labels line up with the book.

So the statement is True.""",
        """The wording holds because remote coaching sessions sold to foreign clients are tertiary services. Walk the activity named here. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. Nothing in the sentence forces a narrower box than the book allows. In Tertiary Services Scope, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve trade, code and support — tertiary even when boxes move.

So the statement is True.""",
        """The wording holds because smelting metal ingots from ore on site is secondary manufacturing. Secondary activity transforms materials into goods — manufacturing. The named pieces sit inside that course category. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. That is why software helpdesks troubleshooting home networks provide tertiary services fits. In high-GDP EU economies, services often clear more than seventy percent of output.

So the statement is True.""",
        """Here is the slip. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. So “Insurance cooperatives processing claims provide primary extraction services” cannot stand. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.2.07": [
        """As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. That is why heavy farming employment in less developed countries signals primary-sector dominance fits. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because primary-sector share typically shrinks as economic development advances. Start from the subsection map. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. The named pieces sit inside that course category. Tina and Steve trade, code and support — tertiary even when boxes move. The labels line up with the book.

So the statement is True.""",
        """Familiar words, wrong box. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. So “Emerging economies show smaller primary shares than advanced EU states” cannot stand. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. Emerging Economy Sector Mix is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that emerging economies typically report tertiary output above seventy percent of GDP — and that overreach is wrong. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. A counter-scene refuses the shortcut. In high-GDP EU economies, services often clear more than seventy percent of output. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that advanced services above seventy percent of output characterises most emerging economies — and that overreach is wrong. Familiar words, wrong box. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. That conclusion does not follow from the definition. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is False.""",
    ],
    "CASE 3.2.08": [
        """The wording holds because fabricating electronic components transforms materials and therefore belongs to secondary manufacturing. Secondary activity transforms materials into goods — manufacturing. The named pieces sit inside that course category. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is True.""",
        """Familiar words, wrong box. Secondary activity transforms materials into goods — manufacturing. So “The farm is secondary because bottled oil is a processed product” cannot stand. Tina and Steve trade, code and support — tertiary even when boxes move. Refuse the category swap and the claim collapses. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
        """The wording fails because it claims that both activities belong to the tertiary sector because each sells to customers — and that overreach is wrong. Here is the slip. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. A counter-scene refuses the shortcut. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. Correct sorting leaves it false.

So the statement is False.""",
        """The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. So “Fabricating components from materials is tertiary because parts go to other businesses” cannot stand. In high-GDP EU economies, services often clear more than seventy percent of output. Olive Farm and Factory Order is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that harvesting and pressing olives on the farm is tertiary because oil is sold to customers — and that overreach is wrong. Here is the slip. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. Against that rule, the absolute wording overreaches. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.2.09": [
        """The wording holds because advanced EU economies are service-dominated despite the importance of food production. Walk the activity named here. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. The named pieces sit inside that course category. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. Applied to this wording — In highly developed EU economies the tertiary sector often exceeds seventy percent of output — the label holds. Tina and Steve trade, code and support — tertiary even when boxes move.

So the statement is True.""",
        """Walk the activity named here. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Applied to this wording — Higher GDP per capita in EU member states links to high living standards in the model — the label holds. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that a seventy percent-plus service share reflects primary dominance in advanced economies — and that overreach is wrong. Familiar words, wrong box. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. Against that rule, the absolute wording overreaches. In high-GDP EU economies, services often clear more than seventy percent of output. Correct sorting leaves it false.

So the statement is False.""",
        """That sentence overshoots. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. So “Developed EU states keep primary output above seventy percent because food is essential” cannot stand. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Developed EU Tertiary Share is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: sector follows main activity, not the material’s biography.

So the statement is False.""",
    ],
    "CASE 3.2.10": [
        """The wording holds because gDP counts final goods and services rather than intermediate goods sold between factories. Start from the subsection map. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Nothing in the sentence forces a narrower box than the book allows. In Gross Domestic Product Definition, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is True.""",
        """Walk the activity named here. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Applied to this wording — GDP is usually calculated for final production within one year inside national borders — the label holds. Tina and Steve trade, code and support — tertiary even when boxes move. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because gDP totals the monetary value of final goods and services produced within a country's borders. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Nothing in the sentence forces a narrower box than the book allows. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary.

So the statement is True.""",
        """Start from the subsection map. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Applied to this wording — GDP measures production within borders regardless of firm nationality — the label holds. In high-GDP EU economies, services often clear more than seventy percent of output. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. That is why final services such as insurance produced domestically enter GDP totals fits. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The labels line up with the book.

So the statement is True.""",
    ],
    "CASE 3.2.11": [
        """Walk the activity named here. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Applied to this wording — Service share alone does not prove every component of GDP is environmentally sustainable — the label holds. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The labels line up with the book.

So the statement is True.""",
        """Walk the activity named here. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. Applied to this wording — Seventy-four percent services indicates tertiary dominance rather than primary leadership — the label holds. In EU Services at Seventy-four Percent, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve trade, code and support — tertiary even when boxes move.

So the statement is True.""",
        """The wording holds because such a share is typical for economically advanced EU countries. The three-sector model sorts firms by what they mainly do. The named pieces sit inside that course category. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. Applied to this wording — Seventy-four percent service share fits a highly developed EU economy pattern — the label holds. In high-GDP EU economies, services often clear more than seventy percent of output. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. As development advances, tertiary usually grows — often above 70% of output in high-GDP EU economies. Applied to this wording — That pattern reflects rising relative importance of tertiary activity with development — the label holds. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.2.12": [
        """Walk the activity named here. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. That is why gDP growth compares inflation-adjusted GDP across years fits. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. That is why real GDP per capita can rise after stripping out inflation from nominal figures fits. Tina and Steve trade, code and support — tertiary even when boxes move. The labels line up with the book.

So the statement is True.""",
        """The wording holds because real GDP strips price changes to compare volume of production over time. Start from the subsection map. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. The named pieces sit inside that course category. In GDP Growth Measure, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary.

So the statement is True.""",
        """The wording fails because it claims that nominal GDP increases always equal real economic growth — and that overreach is wrong. Here is the slip. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. A counter-scene refuses the shortcut. In high-GDP EU economies, services often clear more than seventy percent of output. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that ignoring inflation never affects growth comparisons between years — and that overreach is wrong. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Against that rule, the absolute wording overreaches. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is False.""",
    ],
    "CASE 3.2.13": [
        """The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. That is why remote delivery to foreign clients keeps the activity tertiary fits. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. That is why exporting advice does not convert coaching into secondary manufacturing fits. Tina and Steve trade, code and support — tertiary even when boxes move. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that remote coaching is primary because trainers work from home offices — and that overreach is wrong. That sentence overshoots. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. A counter-scene refuses the shortcut. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that because no goods cross borders, the activity cannot be counted in GDP — and that overreach is wrong. That sentence overshoots. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Against that rule, the absolute wording overreaches. In high-GDP EU economies, services often clear more than seventy percent of output. Remote Coaching Abroad is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: sector follows main activity, not the material’s biography.

So the statement is False.""",
        """The wording fails because it claims that selling coaching sessions is primary extraction because trainers work from home offices — and that overreach is wrong. Here is the slip. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. Against that rule, the absolute wording overreaches. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.2.14": [
        """The wording holds because coal extraction at the mine is primary-sector activity. Primary activity extracts raw materials — farming, fishing, mining, forestry. Nothing in the sentence forces a narrower box than the book allows. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. Secondary activity transforms materials into goods — manufacturing. Applied to this wording — Vehicle assembly at the car plant is secondary manufacturing — the label holds. Tina and Steve trade, code and support — tertiary even when boxes move.

So the statement is True.""",
        """Walk the activity named here. Secondary activity transforms materials into goods — manufacturing. That is why steel inputs from mining do not make vehicle assembly primary activity fits. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. Applied to this wording — Office staff at a mine or plant do not reclassify core production into tertiary services — the label holds. In high-GDP EU economies, services often clear more than seventy percent of output. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that both plants belong to the tertiary sector because they employ office staff — and that overreach is wrong. Familiar words, wrong box. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. That conclusion does not follow from the definition. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Coal Mine and Car Plant Quarter is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.2.15": [
        """Walk the activity named here. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Applied to this wording — GDP omission of some income sources is one reason its use is debated — the label holds. In GDP Income Coverage Critique, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary).

So the statement is True.""",
        """The wording fails because it claims that every barter transaction is always fully recorded in official GDP — and that overreach is wrong. Familiar words, wrong box. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. A counter-scene refuses the shortcut. Tina and Steve trade, code and support — tertiary even when boxes move. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that unpaid home maintenance done by owners is always included in GDP — and that overreach is wrong. Here is the slip. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. A counter-scene refuses the shortcut. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary.

So the statement is False.""",
        """Here is the slip. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. So “GDP fully captures household volunteering and unpaid care in its totals” cannot stand. In high-GDP EU economies, services often clear more than seventy percent of output. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that household volunteering and unpaid care are always counted in official GDP totals — and that overreach is wrong. That sentence overshoots. GDP totals final goods and services inside borders; it tracks activity and growth, not wellbeing one-for-one. Against that rule, the absolute wording overreaches. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.2.16": [
        """The wording holds because farm output and insurance services can coexist as primary and tertiary activity. Walk the activity named here. Sector follows main activity: primary extracts, secondary manufactures, tertiary serves. Nothing in the sentence forces a narrower box than the book allows. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that both operations are tertiary because each serves customers — and that overreach is wrong. Familiar words, wrong box. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. A counter-scene refuses the shortcut. Tina and Steve trade, code and support — tertiary even when boxes move. Insurance Branch and Wheat Farm is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that claims handling at the insurance branch is primary because policies cover basic risks — and that overreach is wrong. Familiar words, wrong box. The tertiary sector is the service industry — distribution, banking, insurance, coaching, support. A counter-scene refuses the shortcut. An olive harvest is primary; milling boards is secondary; an insurer’s claims desk is tertiary. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that harvesting wheat is secondary manufacturing because flour milling follows — and that overreach is wrong. That sentence overshoots. Secondary activity transforms materials into goods — manufacturing. That conclusion does not follow from the definition. In high-GDP EU economies, services often clear more than seventy percent of output. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
        """The wording fails because it claims that wheat farming is secondary because grain is processed into flour elsewhere — and that overreach is wrong. Here is the slip. Secondary activity transforms materials into goods — manufacturing. Against that rule, the absolute wording overreaches. Ore leaves a mine (primary), becomes cable in a plant (secondary), then a utility installs the link (tertiary). Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
}
