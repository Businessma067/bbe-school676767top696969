#!/usr/bin/env python3
"""Live-teacher CASE 3.6 batch 2"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.6.17": [
        """The wording holds because legal and financial structure can influence how successfully a business meets stakeholder needs. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff. The labels line up with the book.

So the statement is True.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. That is why choosing a partnership rather than a company can change how owner risk is shared fits. In Legal structure factor, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """The wording holds because legal structure is listed among factors that can affect overall business success. Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because a company's legal form can determine reporting duties toward different stakeholder groups. Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why legal form can shape duties owed to different stakeholder groups fits. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
    ],
    "CASE 3.6.18": [
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Financial structure choices can affect how risk is shared among owner stakeholders — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that financial structure matters only to accountants, not to owner or creditor stakeholders — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Correct sorting leaves it false.

So the statement is False.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Borrowing decisions have no effect on which stakeholder groups bear business risk” cannot stand. Suppliers need payment and future orders; the firm needs their quality on time. Financial structure factor is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is False.""",
        """The wording fails because it claims that equity and debt mix is unrelated to how stakeholder returns are funded — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. That is why financial structure matters to creditors and owners as well as to accountants fits. Night shifts may please owners and buyers yet anger residents and tire staff. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
    ],
    "CASE 3.6.19": [
        """The wording holds because ignoring local taste trends could harm a small IT-support venture's customers and their own returns. Customers want reliable offers; the firm needs their demand — both are stakeholders. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Customers want reliable offers; the firm needs their demand — both are stakeholders. That is why tracking customer preferences helps the bakery retain mutual dependency with its buyers fits. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because market awareness helps a firm respond to customer and competitive stakeholder pressures. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that market awareness concerns only rivals and has no bearing on customer stakeholders — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Market awareness factor is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording holds because understanding rival bakeries helps a small IT-support venture keep quality attractive to regular buyers. Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.20": [
        """Start from the subsection map. Managers and employees depend on the firm for income; the firm depends on them in return. That is why managing costs and profitability affects what returns owners and jobs employees can sustain fits. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that costs and profitability affect only owners and have no bearing on jobs or supplier orders — and that overreach is wrong. Familiar words, wrong box. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. A counter-scene refuses the shortcut. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is False.""",
        """The wording fails because it claims that cutting costs on ingredients has no effect on customer stakeholder satisfaction — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Familiar words, wrong box. Managers and employees depend on the firm for income; the firm depends on them in return. So “Employee job security is unaffected by whether the firm remains profitable” cannot stand. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Correct sorting leaves it false. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
        """The wording fails because it claims that profitability levels are irrelevant to whether suppliers receive future orders — and that overreach is wrong. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Cost profitability factor is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.6.21": [
        """The wording holds because reinvesting profit rather than paying it out may aim to build long-term business value. Businesses operate in an environment of people and groups whose interests matter. The named pieces sit inside that course category. In Owners share value, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Owners bear losses when trading performance is poor, linking risk to reward — the label holds. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Rising business value can reward owners for successful risk bearing over time — the label holds. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is True.""",
        """The wording holds because owners may want the value of shares or the business to increase. Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because building a stronger brand can contribute to higher business valuation for owners. Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The labels line up with the book.

So the statement is True.""",
    ],
    "CASE 3.6.22": [
        """The wording fails because it claims that managers are not stakeholders because they are paid to execute orders without personal interest — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Customers are stakeholders only when they sit on the board of directors” cannot stand. Employees without shares are still stakeholders; neighbours without payroll are too. Managers not stakeholders trap is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Only shareholders count as stakeholders in a listed company” cannot stand. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
        """The wording fails because it claims that stakeholders are only people who own shares; customers and employees are excluded — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is False.""",
        """The wording holds because stakeholders include anyone affected by or interested in the business, not shareholders alone. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.23": [
        """That sentence overshoots. Managers and employees depend on the firm for income; the firm depends on them in return. So “Job security concerns apply only to managers, not to ordinary employees” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because job security is a legitimate employee stakeholder interest alongside wages. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. Employees without shares are still stakeholders; neighbours without payroll are too. The labels line up with the book.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Staff depend on the firm's continued operation for wages and job security — the label holds. In Employees job security, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Suppliers need payment and future orders; the firm needs their quality on time.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Employees are stakeholders even if they do not own shares in the company — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because employees and managers share dependence on continued profitable operation for livelihoods. Start from the subsection map. Managers and employees depend on the firm for income; the firm depends on them in return. The named pieces sit inside that course category. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
    ],
    "CASE 3.6.24": [
        """Keep Fuhrmann’s wording in front. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Applied to this wording — Suppliers rely on predictable orders, not only on being paid for past deliveries — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """The wording fails because it claims that predictable order volumes are irrelevant to suppliers who already received payment — and that overreach is wrong. Familiar words, wrong box. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Against that rule, the absolute wording overreaches. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because delayed or cancelled orders can threaten a supplier's ability to retain staff and pay bills. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that a supplier's stakeholder interest ends once a single invoice is settled — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Suppliers timely orders is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that suppliers care about payment but not about future order volumes — and that overreach is wrong. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.6.25": [
        """The wording holds because customers suffer if a relied-upon provider fails to supply quality products on time. Start from the subsection map. Customers want reliable offers; the firm needs their demand — both are stakeholders. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Fair pricing and reliable quality keep a bakery's regular buyers returning to the bakery — the label holds. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """The wording fails because it claims that quality and price matter only to owners, not to customer stakeholders — and that overreach is wrong. That sentence overshoots. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Keep Fuhrmann’s wording in front. Customers want reliable offers; the firm needs their demand — both are stakeholders. Applied to this wording — Customers depend on firms for product quality and availability — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that buyers at a neighbourhood bakery have no stake in whether the shop stays open — and that overreach is wrong. Familiar words, wrong box. Businesses operate in an environment of people and groups whose interests matter. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Customers quality price is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is False.""",
    ],
    "CASE 3.6.26": [
        """The wording holds because local communities can be stakeholders affected by jobs, traffic, and spending from nearby firms. Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. In Community local impact, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """The wording fails because it claims that facility expansion cannot create stakeholder conflict because communities do not trade with the firm — and that overreach is wrong. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that community jobs concerns are not stakeholder issues because employment is private — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Suppliers need payment and future orders; the firm needs their quality on time.

So the statement is False.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Residents near an industrial plant may care about noise, pollution, and local jobs created by… — the label holds. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that communities near a plant have no interest in how the firm performs commercially — and that overreach is wrong. That sentence overshoots. Communities and government care about jobs, taxes, congestion and pollution. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.27": [
        """The wording fails because it claims that government stakeholder interest disappears in free markets with no regulation — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Against that rule, the absolute wording overreaches. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that for tax compliance purposes, government has no stake in local firms because it only collects fixed fees — and that overreach is wrong. That sentence overshoots. Communities and government care about jobs, taxes, congestion and pollution. That conclusion does not follow from the definition. Employees without shares are still stakeholders; neighbours without payroll are too. Government tax compliance is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording holds because enforcement of business rules shows government acting as a stakeholder in firm conduct. Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why compliance inspections link government oversight to how firms treat wider stakeholder interests fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Walk the activity named here. Communities and government care about jobs, taxes, congestion and pollution. That is why tax collection gives government a stake in the trading performance of local firms fits. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.28": [
        """The wording fails because it claims that eco-slogans alone can satisfy environmental stakeholders without any change to production processes — and that overreach is wrong. Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That conclusion does not follow from the definition. Night shifts may please owners and buyers yet anger residents and tire staff. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that cosmetic eco-labels on packaging fully meet environmental stakeholder expectations without operational change — and that overreach is wrong. Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. A counter-scene refuses the shortcut. Employees without shares are still stakeholders; neighbours without payroll are too. Correct sorting leaves it false.

So the statement is False.""",
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why beyond slogans, environmental stakeholders still expect substantive measures rather than… fits. In Environment beyond slogan, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Suppliers need payment and future orders; the firm needs their quality on time.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
        """Familiar words, wrong box. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Cosmetic branding changes satisfy environmental stakeholders without process improvement” cannot stand. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that using the word sustainable in advertising matters more than real environmental action on the shop floor — and that overreach is wrong. That sentence overshoots. Businesses operate in an environment of people and groups whose interests matter. A counter-scene refuses the shortcut. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is False.""",
    ],
    "CASE 3.6.29": [
        """Start from the subsection map. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. That is why employees count as stakeholders through wages and job security even without owning shares fits. Night shifts may please owners and buyers yet anger residents and tire staff.

So the statement is True.""",
        """A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Suppliers are stakeholders because payment and order decisions affect their operations — the label holds. Employees without shares are still stakeholders; neighbours without payroll are too. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Applied to this wording — Communities affected by traffic and jobs from a nearby plant count as stakeholders — the label holds. Suppliers need payment and future orders; the firm needs their quality on time. The labels line up with the book.

So the statement is True.""",
        """The wording holds because stakeholders include anyone affected by or interested in the business, extending beyond shareholders. Keep Fuhrmann’s wording in front. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. The named pieces sit inside that course category. In Stakeholders not shareholders only, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """The wording holds because customers who depend on a firm's products are stakeholders through mutual dependency. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. Nothing in the sentence forces a narrower box than the book allows. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.6.30": [
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Poor trading performance can reduce owner returns and the value of capital they invested — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Businesses operate in an environment of people and groups whose interests matter. That is why rising share or business value rewards owners who accepted earlier business risk fits. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """Here is the slip. Businesses operate in an environment of people and groups whose interests matter. So “Owners receive reward without risk because businesses guarantee profits” cannot stand. Suppliers need payment and future orders; the firm needs their quality on time. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because owners typically seek profit and a return for bearing business risk. Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Nothing in the sentence forces a narrower box than the book allows. Real cuts in water, waste or emissions beat a green slogan with empty numbers. The labels line up with the book.

So the statement is True.""",
        """Walk the activity named here. Businesses operate in an environment of people and groups whose interests matter. Applied to this wording — Owners accept that poor results can reduce the value of their invested capital — the label holds. In Owner risk bearing, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Night shifts may please owners and buyers yet anger residents and tire staff.

Note: shareholders ⊂ stakeholders, not the reverse.

So the statement is True.""",
    ],
    "CASE 3.6.31": [
        """Managers and employees depend on the firm for income; the firm depends on them in return. So “Managers can ignore firm health because their salaries are fixed regardless of results” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Manager employee dependence is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that staff wages continue unchanged even when the employing firm stops trading permanently — and that overreach is wrong. Here is the slip. Businesses operate in an environment of people and groups whose interests matter. That conclusion does not follow from the definition. Employees without shares are still stakeholders; neighbours without payroll are too. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Keep Fuhrmann’s wording in front. Managers and employees depend on the firm for income; the firm depends on them in return. Applied to this wording — Managers and employees both rely on the firm's continued operation for income and jobs — the label holds. Suppliers need payment and future orders; the firm needs their quality on time. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that employees need the firm for wages but the firm does not need employees to operate — and that overreach is wrong. That sentence overshoots. Managers and employees depend on the firm for income; the firm depends on them in return. Against that rule, the absolute wording overreaches. Real cuts in water, waste or emissions beat a green slogan with empty numbers. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Familiar words, wrong box. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. So “Mutual dependence between staff and firm is limited to customer-supplier links in the market” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.6.32": [
        """Here is the slip. A stakeholder is anyone potentially affected by or interested in what the business does; share ownership is not required. So “Only the bakery owners are stakeholders in the flour supply arrangement” cannot stand. Night shifts may please owners and buyers yet anger residents and tire staff. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because the flour supplier expects payment and future orders from a neighbourhood bakery. Start from the subsection map. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Nothing in the sentence forces a narrower box than the book allows. In Supplier buyer relationship, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Employees without shares are still stakeholders; neighbours without payroll are too.

So the statement is True.""",
        """The wording holds because the bakery depends on the supplier for quality flour while the supplier depends on bakery orders. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. The named pieces sit inside that course category. Suppliers need payment and future orders; the firm needs their quality on time. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. That is why delayed bakery orders threaten the flour supplier's cash flow and staffing plans fits. Real cuts in water, waste or emissions beat a green slogan with empty numbers.

So the statement is True.""",
        """Walk the activity named here. Suppliers and the firm are mutually dependent on quality, timing, payment and future orders. Applied to this wording — Buyers and suppliers rely on each other for orders and cash flow — the label holds. Night shifts may please owners and buyers yet anger residents and tire staff. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
}
