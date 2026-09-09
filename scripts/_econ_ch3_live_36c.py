#!/usr/bin/env python3
"""Live-teacher CASE 3.6 batch 3"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.6.33": [
        """The wording fails because it claims that firms depend on customers for revenue but customers depend on no particular supplier — and that overreach is wrong. Familiar words, wrong box. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that closing a relied-upon supplier affects customers, but they have no stakeholder link to that firm — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Employees without shares are still stakeholders; neighbours without payroll are too. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that suppliers need customers but customers do not rely on suppliers for availability — and that overreach is wrong. That sentence overshoots. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. That conclusion does not follow from the definition. Suppliers need payment and future orders; the firm needs their quality on time. Customer firm reliance is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is False.""",
        """Walk the activity named here. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. That is why customers lose access if a relied-upon supplier closes fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because buyers need reliable suppliers just as suppliers need paying customers. Start from the subsection map. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
    ],
    "CASE 3.6.34": [
        """Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why communities affected by noise from a new plant hold stakeholder interests in how the firm operates fits. Night shifts may please owners and buyers yet anger residents and tire staff. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because local employment linked to a warehouse gives the community a stake in the firm's continued operation. Walk the activity named here. Communities and government care about jobs, taxes, congestion and pollution. Nothing in the sentence forces a narrower box than the book allows. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because a new warehouse affects traffic and jobs in a town, creating community stakeholder interests. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Stakeholder interests often conflict; good management surfaces trade-offs. That is why community opposition to a new warehouse signals conflicting interests with the developer fits. In Community facility impact, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """The wording holds because residents near a new facility may experience stakeholder effects from increased lorry movements. Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.35": [
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Regulation aims to balance business activity with protection of wider stakeholder interests — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because business rules set by regulators reflect protection of the wider public interest. Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Employees without shares are still stakeholders; neighbours without payroll are too. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that regulators have no stakeholder role because businesses operate independently of public policy — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because environmental rules reflect government acting as a stakeholder for the wider community. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that government builds roads solely for private amusement unrelated to business logistics — and that overreach is wrong. Communities and government care about jobs, taxes, congestion and pollution. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Government regulation aim is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.6.36": [
        """The wording holds because published sustainability data can inform investors and communities about environmental impacts. Keep Fuhrmann’s wording in front. Communities and government care about jobs, taxes, congestion and pollution. The named pieces sit inside that course category. In Sustainability reporting duty, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """Communities and government care about jobs, taxes, congestion and pollution. That is why communities may rely on published environmental data when assessing local facility impacts fits. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because investors may use sustainability disclosures to judge whether environmental claims are credible. Start from the subsection map. Environmental responsibility needs concrete activities and proven results — not greenwashing. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """Businesses operate in an environment of people and groups whose interests matter. So “Green marketing labels replace the need for environmental reporting” cannot stand. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that sustainability reporting is meant to hide impacts from community stakeholders — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.37": [
        """The wording holds because higher profit targets may clash with environmental spending on cleaner production. Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that profit and environmental protection align perfectly with no trade-offs in every decision — and that overreach is wrong. That sentence overshoots. Stakeholder interests often conflict; good management surfaces trade-offs. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Profit versus environment conflict is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that owners and environmental stakeholders agree on every spending priority without exception — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Pollution control investments raise costs but create no tension with owner stakeholder interests” cannot stand. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is False.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Cleaner production spending can lower short-term profit and tension owner and environmental aims — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.38": [
        """Walk the activity named here. Communities and government care about jobs, taxes, congestion and pollution. Applied to this wording — Expansion plans may clash with community preferences about noise and traffic — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because community objections to a bakery extension illustrate conflicting stakeholder interests in practice. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Employees without shares are still stakeholders; neighbours without payroll are too. The labels line up with the book.

So the statement is True.""",
        """The wording holds because a small IT-support venture's growth ambitions may conflict with neighbours' wish to limit delivery traffic. Start from the subsection map. Stakeholder interests often conflict; good management surfaces trade-offs. The named pieces sit inside that course category. In Growth versus community conflict, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """The wording holds because profit from a larger bakery and community concerns about noise can pull owners and neighbours in different directions. Communities and government care about jobs, taxes, congestion and pollution. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because neighbours opposing a small IT-support venture's extension show conflicting stakeholder interests over local amenities. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
    ],
    "CASE 3.6.39": [
        """The wording fails because it claims that mutual dependence exists only between customers and suppliers, not among staff and the firm — and that overreach is wrong. Here is the slip. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is False.""",
        """Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Exam review: stakeholders include anyone affected by or interested in the business — the label holds. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that stakeholder analysis applies only to shareholders because they provide capital — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Suppliers need payment and future orders; the firm needs their quality on time. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that greenwash satisfies environmental stakeholders if marketing slogans are persuasive enough — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Stakeholder synthesis is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that conflicting stakeholder interests do not arise when success factors are managed well — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.6.40": [
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why bakery staff depend on the shop for wages and job security as employee stakeholders fits. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because bakery owners seek profit and bear risk from how the shop trades. Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. The named pieces sit inside that course category. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """The wording holds because the owners, staff, flour suppliers, and neighbours all hold stakeholder interests in the bakery. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that only a small IT-support venture count as stakeholders because they provided the original capital — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because the flour supplier expects payment and future orders as a supplier stakeholder. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. In Bakery stakeholder groups, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
    ],
    "CASE 3.6.41": [
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why employees at a components manufacturer's plants are stakeholders affected by corporate decisions fits. In Multinational stakeholder spread, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """The wording holds because government regulators in host countries hold stakeholder interests in a components manufacturer's operations. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Communities near a components manufacturer's facilities may be stakeholders affected by jobs and… — the label holds. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Applied to this wording — A components manufacturer affects employees, suppliers, communities, and regulators across its… — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that a multinational like a components manufacturer has stakeholders only among its shareholders — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.42": [
        """The wording fails because it claims that honest green reporting builds less stakeholder trust than bold unsupported eco-claims — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Superficial eco-labels without operational change fail environmental stakeholder expectations — the label holds. In Greenwash marketing trap, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Employees without shares are still stakeholders; neighbours without payroll are too.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """The wording fails because it claims that green packaging claims satisfy environmental stakeholders even when pollution rises — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because greenwash misleads stakeholders by exaggerating environmental performance in advertising. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Start from the subsection map. Environmental responsibility needs concrete activities and proven results — not greenwashing. Applied to this wording — Advertising recyclable boxes while dumping waste illegally illustrates greenwash risk — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.43": [
        """The wording fails because it claims that supplier cash flow concerns are unrelated to stakeholder analysis of payment fairness — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that delayed invoices affect only the buyer's finance department, not supplier stakeholders — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because fair payment terms matter to suppliers as stakeholder treatment, not only to accountants. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. In Supplier contract fairness, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """The wording fails because it claims that suppliers have no stakeholder interest in payment timing once a contract is signed — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Fair supplier terms are purely legal technicalities, not stakeholder fairness concerns” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is False.""",
    ],
    "CASE 3.6.44": [
        """The wording holds because staff engagement improves when employees feel company practices match their personal values. Managers and employees depend on the firm for income; the firm depends on them in return. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Shared values between staff and the organisation can support overall business success — the label holds. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. That is why alignment of personal and company values can improve cooperation on business objectives fits. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because staff who share organisational values may identify more closely with firm success. Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. The named pieces sit inside that course category. In Employee shared values, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Managers and employees depend on the firm for income; the firm depends on them in return. Applied to this wording — Aligned values help employees and managers cooperate on shared business objectives — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.45": [
        """The wording fails because it claims that owners have no interest in long-term business value, only in immediate cash extraction — and that overreach is wrong. That sentence overshoots. Businesses operate in an environment of people and groups whose interests matter. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that long-term value growth is unrelated to owner stakeholder concerns about risk and reward — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is False.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. That is why weighing dividends against reinvestment affects the long-term value owners seek fits. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because retaining profit in the business rather than paying dividends can build long-term owner value. Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that reinvestment decisions affect only accountants, not owner stakeholder interests — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Owner long term value is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is False.""",
    ],
    "CASE 3.6.46": [
        """The wording fails because it claims that customers cannot influence firms because switching suppliers is impossible in all markets — and that overreach is wrong. Here is the slip. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff. Customer boycott power is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that falling quality gives customers power to switch suppliers and reduce firm revenue — and that overreach is wrong. Familiar words, wrong box. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. A counter-scene refuses the shortcut. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because customers may switch if quality falls, exercising stakeholder influence on revenue. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Customer boycotts after poor service show stakeholder power over firm revenue — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that buyers at a bakery have no power because they purchase small quantities each visit — and that overreach is wrong. Here is the slip. Businesses operate in an environment of people and groups whose interests matter. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.47": [
        """The wording holds because if the factory closes, the community loses jobs linked to that employer. Start from the subsection map. Communities and government care about jobs, taxes, congestion and pollution. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The labels line up with the book.

So the statement is True.""",
        """The wording holds because a major employer's expansion or closure decision affects community stakeholders beyond the factory gate. Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. In Community employment stake, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """The wording holds because residents whose family members work at the plant hold a community stakeholder interest in its future. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Communities and government care about jobs, taxes, congestion and pollution. That is why local spending from factory wages links community welfare to the firm's continued operation fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Communities and government care about jobs, taxes, congestion and pollution. Applied to this wording — Local jobs concentrating on a single company give the community a direct interest in that firm's… — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.48": [
        """Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Infrastructure used by firms links government investment to business stakeholder context — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. That is why tax revenue from trading firms helps fund public infrastructure used by business fits. Employees without shares are still stakeholders; neighbours without payroll are too. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that public roads built for general use have no connection to business logistics needs — and that overreach is wrong. Familiar words, wrong box. Businesses operate in an environment of people and groups whose interests matter. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time. Government infrastructure role is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Regulators may set transport standards affecting firms that depend on road networks — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. That is why roads built for public use also support business logistics and distributor operations fits. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
    ],
}
