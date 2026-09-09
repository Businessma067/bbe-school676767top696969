#!/usr/bin/env python3
"""Live-teacher CASE 3.6 batch 1"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.6.01": [
        """The wording holds because customers who rely on a firm's products count as stakeholders even without owning shares. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. In Stakeholder definition breadth, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Stakeholders are limited to shareholders who hold voting rights in the company” cannot stand. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that suppliers and employees are excluded from stakeholder status because they receive payment — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is False.""",
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why stakeholders include anyone affected by or interested in the business fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that only senior managers on the organisation chart qualify as stakeholders — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.02": [
        """That sentence overshoots. Businesses operate in an environment of people and groups whose interests matter. So “A small IT-support venture have no interest in how the venture performs once the shop opens” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because profit rewards a small IT-support venture for coordinating staff, suppliers, and customer service. Walk the activity named here. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. The named pieces sit inside that course category. In Owner profit motives, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Employees without shares are still stakeholders; neighbours without payroll are too.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """The wording holds because growing the bakery's reputation may increase the value of their investment over time. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — They accept business risk because poor trading could reduce their personal return — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """The wording holds because a small IT-support venture as owners seek profit from daily bread and pastry sales. Businesses operate in an environment of people and groups whose interests matter. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.03": [
        """Businesses operate in an environment of people and groups whose interests matter. So “Reward for owners is unrelated to how well the business trades” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because owners bear financial risk when revenue falls short of costs and may lose invested capital. Businesses operate in an environment of people and groups whose interests matter. The named pieces sit inside that course category. Employees without shares are still stakeholders; neighbours without payroll are too. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that owners share gains with staff but face no downside when sales decline sharply — and that overreach is wrong. Businesses operate in an environment of people and groups whose interests matter. That conclusion does not follow from the definition. Suppliers need payment and future orders; the firm needs their quality on time. Owner risk reward is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is False.""",
        """Managers and employees depend on the firm for income; the firm depends on them in return. So “Risk and reward apply only to employees, not to people who provide capital” cannot stand. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that owners receive profit without risk because limited liability guarantees positive returns — and that overreach is wrong. Familiar words, wrong box. Businesses operate in an environment of people and groups whose interests matter. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is False.""",
    ],
    "CASE 3.6.04": [
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Restructuring decisions that threaten jobs show managers are affected as stakeholders — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because job security matters to managers because firm failure could end their employment. Keep Fuhrmann’s wording in front. Managers and employees depend on the firm for income; the firm depends on them in return. The named pieces sit inside that course category. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because managers seek stable income from the employing firm as a core stakeholder interest. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book.

So the statement is True.""",
        """Start from the subsection map. Managers and employees depend on the firm for income; the firm depends on them in return. Applied to this wording — Managers depend on continued firm success for promotion and salary prospects — the label holds. In Manager income security, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """The wording holds because managers are stakeholders because business outcomes affect their careers and pay. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.05": [
        """Businesses operate in an environment of people and groups whose interests matter. That is why staff depend on the bakery's continued operation for wages and job security fits. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Employees are not stakeholders because they do not invest capital in the bakery” cannot stand. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is False.""",
        """The wording holds because job security is a legitimate employee stakeholder interest alongside monthly wages. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because employees may identify with the bakery and feel pride when it succeeds locally. Managers and employees depend on the firm for income; the firm depends on them in return. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that employees lose stakeholder status once they receive their monthly wage payment — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff. Employee identification is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.6.06": [
        """The wording holds because managers and employees are mutually dependent on the business with the owners' venture. Keep Fuhrmann’s wording in front. Managers and employees depend on the firm for income; the firm depends on them in return. Nothing in the sentence forces a narrower box than the book allows. In Mutual dependence staff, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """Managers and employees depend on the firm for income; the firm depends on them in return. So “The firm can operate indefinitely without managers or employees contributing labour” cannot stand. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that staff livelihoods are unaffected when the employing firm stops trading — and that overreach is wrong. Here is the slip. Businesses operate in an environment of people and groups whose interests matter. That conclusion does not follow from the definition. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is False.""",
        """The wording fails because it claims that mutual dependence applies only between customers and suppliers, not between staff and the firm — and that overreach is wrong. Familiar words, wrong box. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. A counter-scene refuses the shortcut. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that owners alone create output; staff dependence on the firm is a one-way relationship — and that overreach is wrong. That sentence overshoots. Businesses operate in an environment of people and groups whose interests matter. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.07": [
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — When personal values align with company practices, staff engagement often improves — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The labels line up with the book. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that shared values guarantee identical opinions on every management decision — and that overreach is wrong. That sentence overshoots. Businesses operate in an environment of people and groups whose interests matter. A counter-scene refuses the shortcut. Employees without shares are still stakeholders; neighbours without payroll are too. Shared values culture is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that employment contracts alone make shared values irrelevant to stakeholder relations — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because shared values can strengthen cooperation between employees and management on firm goals. Start from the subsection map. Managers and employees depend on the firm for income; the firm depends on them in return. The named pieces sit inside that course category. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Shared values between staff and the organisation can support business success — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.08": [
        """Start from the subsection map. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Applied to this wording — Suppliers expect to be paid for goods delivered to the buying business — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why stakeholder analysis includes suppliers expecting both payment and continued commercial relationship fits. Employees without shares are still stakeholders; neighbours without payroll are too. The labels line up with the book.

So the statement is True.""",
        """The wording holds because suppliers are stakeholders because firm decisions affect their cash flow and volumes. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. In Supplier payment expectations, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why fair payment terms reflect supplier stakeholder interests, not only accounting detail fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. That is why suppliers rely on future orders, not only payment for past deliveries fits. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
    ],
    "CASE 3.6.09": [
        """The wording fails because it claims that late or defective shipments are solely the buyer's problem, not the supplier's concern — and that overreach is wrong. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is False.""",
        """The wording fails because it claims that suppliers need not worry about timeliness because buyers hold all delivery risk — and that overreach is wrong. Here is the slip. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because timely delivery is part of the supplier's stakeholder duty toward the buying firm. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book.

So the statement is True.""",
        """The wording holds because suppliers must deliver quality goods on time to satisfy the buying business. Keep Fuhrmann’s wording in front. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Nothing in the sentence forces a narrower box than the book allows. In Supplier quality delivery, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """The wording fails because it claims that quality standards apply only to the buyer's internal staff, not to external suppliers — and that overreach is wrong. That sentence overshoots. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.6.10": [
        """The wording holds because mutual dependency means both parties need each other for continued benefit. Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Here is the slip. Customers want reliable offers; the firm needs their demand — both are stakeholders. So “Customers depend on firms but firms do not depend on customers for revenue” cannot stand. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is False.""",
        """The wording holds because customers depend on the bakery for product quality and daily availability. Walk the activity named here. Customers want reliable offers; the firm needs their demand — both are stakeholders. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Customers want reliable offers; the firm needs their demand — both are stakeholders. That is why the bakery depends on customers for revenue that keeps the shop trading fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """The wording holds because if the bakery closes, regular customers lose a relied-upon source of fresh bread. Start from the subsection map. Customers want reliable offers; the firm needs their demand — both are stakeholders. Nothing in the sentence forces a narrower box than the book allows. In Customer mutual dependency, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
    ],
    "CASE 3.6.11": [
        """The wording holds because residents may care about noise, pollution, and employment created by a nearby firm. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. In Community interest, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """The wording holds because communities near a plant can be stakeholders affected by jobs, traffic, and local spending. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Community opposition to expansion can signal conflicting stakeholder interests — the label holds. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """The wording holds because a town relying on one major employer shows community stake in that firm's survival. Communities and government care about jobs, taxes, congestion and pollution. The named pieces sit inside that course category. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that communities cannot be stakeholders because they do not sign contracts with the firm — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.12": [
        """That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Government stakeholder interest disappears wherever markets operate without formal rules” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that government is a stakeholder only when it owns shares in nationalised industries — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Employees without shares are still stakeholders; neighbours without payroll are too. Government interest is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. That is why regulators represent broader public interest when setting business rules fits. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that government has no stake in local tax-paying businesses because it only collects fixed fees — and that overreach is wrong. Here is the slip. Communities and government care about jobs, taxes, congestion and pollution. Against that rule, the absolute wording overreaches. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is False.""",
        """Start from the subsection map. Communities and government care about jobs, taxes, congestion and pollution. Applied to this wording — Government has an interest in business activity through tax, regulation, and public policy — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.13": [
        """Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Superficial eco-labels without operational change fully meet environmental stakeholder expectations” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that real environmental action is less important than using the word sustainable in advertising — and that overreach is wrong. Here is the slip. Businesses operate in an environment of people and groups whose interests matter. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that environmental action requires only a logo change without process improvement — and that overreach is wrong. That sentence overshoots. Businesses operate in an environment of people and groups whose interests matter. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time. Environment real action is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording holds because environmental stakeholders expect real action rather than superficial green marketing alone. Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Environmental stakeholders are satisfied by marketing slogans without operational change” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
    ],
    "CASE 3.6.14": [
        """The wording holds because greenwash misleads stakeholders by exaggerating environmental performance. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """The wording fails because it claims that greenwash strengthens long-term stakeholder trust more than honest reporting — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Environmental responsibility needs concrete activities and proven results — not greenwashing. So “Greenwash means exceeding environmental standards while understating achievements” cannot stand. Suppliers need payment and future orders; the firm needs their quality on time. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because advertising recyclable packaging while increasing pollution illustrates greenwash risk. Keep Fuhrmann’s wording in front. Environmental responsibility needs concrete activities and proven results — not greenwashing. The named pieces sit inside that course category. In Greenwash warning, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """The wording holds because empty eco-slogans without process change can erode stakeholder trust over time. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.15": [
        """The wording holds because disclosing environmental impacts helps stakeholders assess whether firms take genuine action. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Environmental reporting communicates firm impacts to interested stakeholders — the label holds. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """The wording holds because sustainability reports can inform communities and investors about environmental impacts. Keep Fuhrmann’s wording in front. Communities and government care about jobs, taxes, congestion and pollution. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because environmental reporting without operational improvement may still mislead stakeholders. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """The wording holds because the natural environment is treated as a stakeholder expecting substantive corporate response. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. In Environmental reporting, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
    ],
    "CASE 3.6.16": [
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. That is why environmental spending may reduce short-term profit, creating owner-environment tension fits. In Conflicting interests, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """The wording holds because profit maximisation plans may conflict with community noise or pollution concerns. Stakeholder interests often conflict; good management surfaces trade-offs. Nothing in the sentence forces a narrower box than the book allows. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Different stakeholder groups can have conflicting interests in the same decision — the label holds. Suppliers need payment and future orders; the firm needs their quality on time. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that all stakeholder groups want the same outcome on every business decision — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that stakeholder conflict is rare and only occurs between owners and customers — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
}
