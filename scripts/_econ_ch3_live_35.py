#!/usr/bin/env python3
"""Live-teacher CASE 3.5.*"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.5.01": [
        """The wording fails because it claims that a firm is local only if it employs fewer than ten people regardless of customer location — and that overreach is wrong. Familiar words, wrong box. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Against that rule, the absolute wording overreaches. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """That sentence overshoots. National firms serve the home country only — not foreign markets. So “National businesses sell in every country on the same continent by definition” cannot stand. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international.

So the statement is False.""",
        """Walk the activity named here. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That is why local and regional firms often face challenges raising funds and finding enough customers fits. Imported flour does not make a city bakery international if customers stay local. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because local and regional businesses typically operate in a limited geographic area with customers nearby. Start from the subsection map. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that regional businesses operate worldwide but with smaller marketing budgets than multinationals — and that overreach is wrong. That sentence overshoots. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That conclusion does not follow from the definition. A corner workshop with nearby clients is local and often undercapitalised. Local bakery scope is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.5.02": [
        """That sentence overshoots. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. So “Undercapitalisation is unknown among local firms once they register for VAT” cannot stand. A corner workshop with nearby clients is local and often undercapitalised. Regional supplier reach is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: reach is where you make and/or sell.

So the statement is False.""",
        """National firms serve the home country only — not foreign markets. Applied to this wording — A national business operates within its home country rather than across foreign markets — the label holds. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Applied to this wording — Undercapitalisation is a risk particularly associated with smaller geographically focused firms — the label holds. Imported flour does not make a city bakery international if customers stay local.

So the statement is True.""",
        """Here is the slip. National firms serve the home country only — not foreign markets. So “A website visible abroad makes a firm multinational even without cross-border sales” cannot stand. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Refuse the category swap and the claim collapses. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
        """The wording holds because national operations typically involve a longer supply chain than a very local producer. Keep Fuhrmann’s wording in front. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. A corner workshop with nearby clients is local and often undercapitalised. The labels line up with the book.

So the statement is True.""",
    ],
    "CASE 3.5.03": [
        """The wording fails because it claims that globalisation means every small shop becomes a multinational overnight — and that overreach is wrong. National firms serve the home country only — not foreign markets. Against that rule, the absolute wording overreaches. A corner workshop with nearby clients is local and often undercapitalised. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because international or multinational firms make and/or sell in more than one country. Start from the subsection map. National firms serve the home country only — not foreign markets. Nothing in the sentence forces a narrower box than the book allows. In National retailer chain, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international.

So the statement is True.""",
        """The wording fails because it claims that international business uses one legal system worldwide so compliance is uniform — and that overreach is wrong. Here is the slip. National firms serve the home country only — not foreign markets. A counter-scene refuses the shortcut. Imported flour does not make a city bakery international if customers stay local. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. So “National supply chains are shorter than local ones because transport is faster domestically” cannot stand. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces.

So the statement is False.""",
        """The wording fails because it claims that local businesses face no difficulty finding customers because proximity guarantees demand — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. A counter-scene refuses the shortcut. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.5.04": [
        """The wording fails because it claims that regional scope allows unlimited customers anywhere on the globe — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That conclusion does not follow from the definition. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because globalisation is described as the rise of multinational enterprises operating across borders. Start from the subsection map. National firms serve the home country only — not foreign markets. The named pieces sit inside that course category. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that selling nationwide while owners stay in one town makes the business local by residence — and that overreach is wrong. That sentence overshoots. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That conclusion does not follow from the definition. Imported flour does not make a city bakery international if customers stay local. Multinational manufacturer scope is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """Walk the activity named here. National firms serve the home country only — not foreign markets. That is why international business must cope with different cultures, languages, and currencies fits. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because operating internationally lengthens the supply chain and crosses legal and economic systems. National firms serve the home country only — not foreign markets. Nothing in the sentence forces a narrower box than the book allows. A corner workshop with nearby clients is local and often undercapitalised.

So the statement is True.""",
    ],
    "CASE 3.5.05": [
        """Start from the subsection map. National firms serve the home country only — not foreign markets. That is why manufacturing in one country and selling in another indicates international/multinational scope fits. A corner workshop with nearby clients is local and often undercapitalised. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """Start from the subsection map. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Applied to this wording — Customer proximity and a limited service area characterise local business scope — the label holds. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because regional businesses still operate within a defined territory rather than worldwide. Walk the activity named here. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Nothing in the sentence forces a narrower box than the book allows. Imported flour does not make a city bakery international if customers stay local. The labels line up with the book.

So the statement is True.""",
        """Start from the subsection map. National firms serve the home country only — not foreign markets. That is why selling only within the home country fits national rather than international scope fits. In Local customer proximity, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces.

Note: reach is where you make and/or sell.

So the statement is True.""",
        """The wording fails because it claims that a multinational must produce in every country where it sells by definition — and that overreach is wrong. That sentence overshoots. National firms serve the home country only — not foreign markets. A counter-scene refuses the shortcut. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.5.06": [
        """National firms serve the home country only — not foreign markets. That is why a components manufacturer operating across countries illustrates a multinational enterprise… fits. A corner workshop with nearby clients is local and often undercapitalised. The subsection’s definitions back the wording without stretching. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """The wording holds because limited capital can constrain a local firm's ability to expand beyond its immediate market. Keep Fuhrmann’s wording in front. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international.

So the statement is True.""",
        """The wording fails because it claims that currency differences disappear once a firm opens a foreign bank account — and that overreach is wrong. Familiar words, wrong box. Reach is where the firm makes and/or sells: local, national, or international. A counter-scene refuses the shortcut. Imported flour does not make a city bakery international if customers stay local. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that undercapitalisation affects only multinational firms building foreign factories — and that overreach is wrong. That sentence overshoots. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That conclusion does not follow from the definition. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that culture and language differences matter only to tourist shops, not to manufacturers — and that overreach is wrong. Reach is where the firm makes and/or sells: local, national, or international. That conclusion does not follow from the definition. A corner workshop with nearby clients is local and often undercapitalised. Regional funding challenge is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.5.07": [
        """The wording fails because it claims that importing finished goods for domestic resale makes a firm a manufacturer in two countries — and that overreach is wrong. Here is the slip. Reach is where the firm makes and/or sells: local, national, or international. That conclusion does not follow from the definition. A corner workshop with nearby clients is local and often undercapitalised. Undercapitalisation risk is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """Walk the activity named here. Reach is where the firm makes and/or sells: local, national, or international. That is why multiple legal systems apply when a firm conducts business in several countries fits. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. National firms serve the home country only — not foreign markets. That is why language differences matter for customer contact in international markets fits. Imported flour does not make a city bakery international if customers stay local.

So the statement is True.""",
        """The wording fails because it claims that globalisation excludes service firms and applies only to factories — and that overreach is wrong. That sentence overshoots. Globalisation deepens as more firms make and sell across borders. A counter-scene refuses the shortcut. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because a longer supply chain is typical when sourcing and selling nationally rather than locally. Walk the activity named here. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. A corner workshop with nearby clients is local and often undercapitalised. The labels line up with the book.

So the statement is True.""",
    ],
    "CASE 3.5.08": [
        """That sentence overshoots. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. So “Proximity to customers removes any need to seek sales for local firms” cannot stand. A corner workshop with nearby clients is local and often undercapitalised. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that national businesses operate in more than one country as long as they use domestic currency — and that overreach is wrong. National firms serve the home country only — not foreign markets. Against that rule, the absolute wording overreaches. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. National supply chain length is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: reach is where you make and/or sell.

So the statement is False.""",
        """Walk the activity named here. National firms serve the home country only — not foreign markets. That is why currency differences arise when trading across international borders fits. Imported flour does not make a city bakery international if customers stay local. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that a components manufacturer is a local enterprise because its first plant was in one town — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. A counter-scene refuses the shortcut. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces.

So the statement is False.""",
        """The wording holds because globalisation reflects more firms producing and selling beyond a single country. Keep Fuhrmann’s wording in front. Globalisation deepens as more firms make and sell across borders. The named pieces sit inside that course category. A corner workshop with nearby clients is local and often undercapitalised. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.5.09": [
        """The wording holds because regional hauliers moving goods within a territory still face geographic limits compared with national networks. Keep Fuhrmann’s wording in front. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. A corner workshop with nearby clients is local and often undercapitalised. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that regional firms can ignore capital needs because banks lend equally in every village — and that overreach is wrong. Familiar words, wrong box. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Against that rule, the absolute wording overreaches. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because domestic-only sales and production within one country describe national scope. National firms serve the home country only — not foreign markets. The named pieces sit inside that course category. In International legal complexity, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Imported flour does not make a city bakery international if customers stay local.

So the statement is True.""",
        """The wording fails because it claims that cross-border manufacturing is still national if headquarters stays at home — and that overreach is wrong. Familiar words, wrong box. National firms serve the home country only — not foreign markets. Against that rule, the absolute wording overreaches. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Start from the subsection map. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Applied to this wording — A plumber serving one town operates locally with nearby customers — the label holds. A corner workshop with nearby clients is local and often undercapitalised. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
    ],
    "CASE 3.5.10": [
        """The wording holds because cross-border production partnerships indicate international rather than purely national scope. Start from the subsection map. National firms serve the home country only — not foreign markets. Nothing in the sentence forces a narrower box than the book allows. A corner workshop with nearby clients is local and often undercapitalised.

So the statement is True.""",
        """Here is the slip. National firms serve the home country only — not foreign markets. So “International firms use identical economic systems in every market they enter” cannot stand. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that a domestic-only rail network is multinational because cargo may originate from imports — and that overreach is wrong. Familiar words, wrong box. National firms serve the home country only — not foreign markets. Against that rule, the absolute wording overreaches. Imported flour does not make a city bakery international if customers stay local. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that local scope is determined solely by whether the firm is an SME under EU rules — and that overreach is wrong. Familiar words, wrong box. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Against that rule, the absolute wording overreaches. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Globalisation definition is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that exporting forty percent of output while producing at home cannot coexist with any national label — and that overreach is wrong. National firms serve the home country only — not foreign markets. A counter-scene refuses the shortcut. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.5.11": [
        """Walk the activity named here. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That is why regional branding across neighbouring counties remains below national or international scope fits. A corner workshop with nearby clients is local and often undercapitalised. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that national airlines operating domestic routes are local because planes land nearby — and that overreach is wrong. Familiar words, wrong box. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That conclusion does not follow from the definition. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international.

So the statement is False.""",
        """The wording holds because local businesses depend heavily on customers in the immediate area. Walk the activity named here. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. Imported flour does not make a city bakery international if customers stay local. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that multinational status requires ignoring local cultures to enforce one corporate language — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. A counter-scene refuses the shortcut. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that regional seasonal hotels face no customer-finding challenge during off-season months — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. A counter-scene refuses the shortcut. A corner workshop with nearby clients is local and often undercapitalised. Local versus national trap is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.5.12": [
        """The wording holds because compliance costs increase when obeying rules in several countries simultaneously. Keep Fuhrmann’s wording in front. Reach is where the firm makes and/or sells: local, national, or international. Nothing in the sentence forces a narrower box than the book allows. In Regional market limits, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A corner workshop with nearby clients is local and often undercapitalised.

So the statement is True.""",
        """The wording fails because it claims that local market saturation is impossible where population is growing — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. A counter-scene refuses the shortcut. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. So “Regional grants prove a firm is multinational because money crosses municipal borders” cannot stand. Imported flour does not make a city bakery international if customers stay local.

So the statement is False.""",
        """Keep Fuhrmann’s wording in front. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That is why undercapitalisation can hinder fund raising for firms focused on a small market area fits. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that stakeholder geography is unrelated to whether a firm is multinational — and that overreach is wrong. Familiar words, wrong box. National firms serve the home country only — not foreign markets. A counter-scene refuses the shortcut. A corner workshop with nearby clients is local and often undercapitalised. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.5.13": [
        """Start from the subsection map. National firms serve the home country only — not foreign markets. Applied to this wording — Multinational operations spread stakeholders and activities across countries — the label holds. A corner workshop with nearby clients is local and often undercapitalised. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that national scale eliminates supply chain length because everything is domestic — and that overreach is wrong. Here is the slip. National firms serve the home country only — not foreign markets. Against that rule, the absolute wording overreaches. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. National home country focus is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: reach is where you make and/or sell.

So the statement is False.""",
        """Familiar words, wrong box. National firms serve the home country only — not foreign markets. So “International business avoids longer supply chains by using email orders” cannot stand. Imported flour does not make a city bakery international if customers stay local. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Start from the subsection map. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. That is why seasonal regional tourism income reflects a geographically limited customer base fits. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces.

So the statement is True.""",
        """The wording holds because a domestic rail freight network operating nationally has a longer chain than a neighbourhood supplier. Keep Fuhrmann’s wording in front. National firms serve the home country only — not foreign markets. Nothing in the sentence forces a narrower box than the book allows. A corner workshop with nearby clients is local and often undercapitalised. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.5.14": [
        """The wording fails because it claims that home-country-only publishers are international if they translate books into another language — and that overreach is wrong. Familiar words, wrong box. National firms serve the home country only — not foreign markets. A counter-scene refuses the shortcut. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """That sentence overshoots. National firms serve the home country only — not foreign markets. So “A provincial dairy delivering within one province is a multinational because milk crosses county…” cannot stand. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that local cafés face no undercapitalisation risk if they accept card payments — and that overreach is wrong. Here is the slip. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. A counter-scene refuses the shortcut. Imported flour does not make a city bakery international if customers stay local. Multinational production is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: reach is where you make and/or sell.

So the statement is False.""",
        """The wording fails because it claims that globalisation means national firms disappear entirely from the home economy — and that overreach is wrong. That sentence overshoots. National firms serve the home country only — not foreign markets. A counter-scene refuses the shortcut. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Start from the subsection map. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Applied to this wording — Local market saturation occurs when most nearby customers are already served — the label holds. A corner workshop with nearby clients is local and often undercapitalised.

So the statement is True.""",
    ],
    "CASE 3.5.15": [
        """National firms serve the home country only — not foreign markets. That is why national scale operations extend supply chains across the home country fits. A corner workshop with nearby clients is local and often undercapitalised.

So the statement is True.""",
        """The wording holds because policy support for regional firms often targets limited-area operators. Walk the activity named here. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. National firms serve the home country only — not foreign markets. That is why importing for domestic resale alone does not by itself make a firm a multinational manufacturer fits. Imported flour does not make a city bakery international if customers stay local. The labels line up with the book.

So the statement is True.""",
        """The wording holds because local scope means both limited operating area and chiefly nearby customers. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. Nothing in the sentence forces a narrower box than the book allows. In Currency exposure abroad, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces.

So the statement is True.""",
        """Reach is where the firm makes and/or sells: local, national, or international. So “Operating in two countries eliminates exposure to different currencies” cannot stand. A corner workshop with nearby clients is local and often undercapitalised. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.5.16": [
        """Keep Fuhrmann’s wording in front. National firms serve the home country only — not foreign markets. That is why international firms encounter varied economic systems across markets fits. A corner workshop with nearby clients is local and often undercapitalised. The subsection’s definitions back the wording without stretching. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because a neighbourhood bakery with walk-in local buyers is not national merely because it is registered as a company. Keep Fuhrmann’s wording in front. Local/regional firms serve a limited nearby market; undercapitalisation is a classic friction. The named pieces sit inside that course category. An Austrian-only insurer is national; AT&S plants in Asia and Austria selling worldwide are international.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Reach is where the firm makes and/or sells: local, national, or international. That is why operating in more than one country increases coordination across languages and currencies fits. Imported flour does not make a city bakery international if customers stay local. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because cultural awareness matters when managing staff and customers in foreign subsidiaries. Reach is where the firm makes and/or sells: local, national, or international. Nothing in the sentence forces a narrower box than the book allows. Cross-border reach lengthens supply chains and multiplies legal, language and currency interfaces. The labels line up with the book.

So the statement is True.""",
        """The wording holds because exporting a minority share while producing domestically may still be national if foreign sales are absent. National firms serve the home country only — not foreign markets. The named pieces sit inside that course category. In Cultural differences trade, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A corner workshop with nearby clients is local and often undercapitalised.

So the statement is True.""",
    ],
}
