#!/usr/bin/env python3
"""Live-teacher CASE 3.4.*"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.4.01": [
        """The wording fails because it claims that because staff are below ten, a firm remains a micro enterprise despite turnover above €2m — and that overreach is wrong. That sentence overshoots. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. That conclusion does not follow from the definition. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

So the statement is False.""",
        """The wording fails because it claims that forty-five staff alone guarantees small classification even if turnover exceeds €10m — and that overreach is wrong. Here is the slip. Small: staff < 50 and turnover or balance sheet ≤ €10 m. A counter-scene refuses the shortcut. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Here is the slip. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. So “Meeting the staff ceiling alone is sufficient for micro status regardless of turnover or balance…” cannot stand. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Correct sorting leaves it false. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
        """Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Applied to this wording — Under the EU definition, a micro enterprise may employ fewer than ten people — the label holds. In EU micro staff ceiling, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. About 99% of EU businesses are SMEs — size gates support and often accounting rules.

So the statement is True.""",
        """The wording fails because it claims that a firm qualifies as micro because its balance sheet is below €2m, regardless of turnover above €2m — and that overreach is wrong. That sentence overshoots. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Against that rule, the absolute wording overreaches. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.4.02": [
        """The wording holds because turnover above €10m can push a firm out of the small category even when staff remain below fifty. Keep Fuhrmann’s wording in front. Small: staff < 50 and turnover or balance sheet ≤ €10 m. The named pieces sit inside that course category. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Applied to this wording — Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the… — the label holds. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Applied to this wording — Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten — the label holds. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because small status also requires turnover not exceeding €10m. Small: staff < 50 and turnover or balance sheet ≤ €10 m. The named pieces sit inside that course category. About 99% of EU businesses are SMEs — size gates support and often accounting rules. The labels line up with the book.

So the statement is True.""",
        """Start from the subsection map. Small: staff < 50 and turnover or balance sheet ≤ €10 m. That is why a small enterprise may employ fewer than fifty people under EU definitions fits. In Micro turnover edge case, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

So the statement is True.""",
    ],
    "CASE 3.4.03": [
        """The wording fails because it claims that a firm fails the medium test because both financial figures must be below their respective caps — and that overreach is wrong. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. That conclusion does not follow from the definition. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Micro balance sheet OR test is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: staff alone never finishes an EU size test.

So the statement is False.""",
        """The wording holds because medium enterprises employ fewer than two hundred and fifty people under EU definitions. Walk the activity named here. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. The named pieces sit inside that course category. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that because turnover is within €50m, balance sheet size is irrelevant for medium classification — and that overreach is wrong. Here is the slip. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Against that rule, the absolute wording overreaches. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m.

So the statement is False.""",
        """The wording fails because it claims that two hundred and forty employees exceed the medium staff ceiling — and that overreach is wrong. That sentence overshoots. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. That conclusion does not follow from the definition. About 99% of EU businesses are SMEs — size gates support and often accounting rules. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that thirty-eight staff alone keeps a firm in the small category despite turnover above €10m — and that overreach is wrong. That sentence overshoots. Small: staff < 50 and turnover or balance sheet ≤ €10 m. Against that rule, the absolute wording overreaches. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.4.04": [
        """The wording fails because it claims that mSME excludes micro firms and covers only small and medium categories — and that overreach is wrong. That sentence overshoots. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Against that rule, the absolute wording overreaches. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Correct sorting leaves it false.

So the statement is False.""",
        """Here is the slip. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. So “SMEs represent a narrow minority of EU firms because large corporations dominate registration…” cannot stand. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Small dual thresholds is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. So “SME labels are purely descriptive and have no effect on access to finance or reporting rules” cannot stand. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Refuse the category swap and the claim collapses. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
        """The wording fails because it claims that a components manufacturer counts as a medium enterprise because it operates internationally — and that overreach is wrong. That sentence overshoots. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Against that rule, the absolute wording overreaches. About 99% of EU businesses are SMEs — size gates support and often accounting rules.

So the statement is False.""",
        """The wording holds because medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap. Keep Fuhrmann’s wording in front. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. The named pieces sit inside that course category. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.4.05": [
        """Walk the activity named here. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. That is why a workforce of about ten thousand places a components manufacturer outside EU medium enterprise… fits. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because approximately ninety-nine percent of businesses in the EU are SMEs. Walk the activity named here. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. Nothing in the sentence forces a narrower box than the book allows. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that accounting requirements are identical for micro firms and large multinationals under EU practice — and that overreach is wrong. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. A counter-scene refuses the shortcut. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Small turnover breach is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """Keep Fuhrmann’s wording in front. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. That is why two hundred employees fall within the medium staff threshold fits. About 99% of EU businesses are SMEs — size gates support and often accounting rules. The subsection’s definitions back the wording without stretching. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that seven staff and a €1.9m balance sheet guarantee micro status despite turnover above €2m — and that overreach is wrong. Familiar words, wrong box. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. A counter-scene refuses the shortcut. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

So the statement is False.""",
    ],
    "CASE 3.4.06": [
        """Walk the activity named here. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. Applied to this wording — Official SME classification can determine eligibility for EU support programmes and finance schemes — the label holds. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

So the statement is True.""",
        """The wording holds because size definitions matter because accounting rules may differ for smaller and larger firms. Keep Fuhrmann’s wording in front. Small: staff < 50 and turnover or balance sheet ≤ €10 m. Nothing in the sentence forces a narrower box than the book allows. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Familiar words, wrong box. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. So “Ten employees still count as micro because the threshold says fewer than ten” cannot stand. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that two hundred and fifty employees satisfies the medium requirement of fewer than two hundred and fifty — and that overreach is wrong. Here is the slip. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Against that rule, the absolute wording overreaches. About 99% of EU businesses are SMEs — size gates support and often accounting rules. Medium staff limit is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that fifty employees meets the small enterprise staff requirement of fewer than fifty — and that overreach is wrong. Small: staff < 50 and turnover or balance sheet ≤ €10 m. That conclusion does not follow from the definition. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.4.07": [
        """The wording fails because it claims that any firm with more than ten employees is classified as large under EU rules — and that overreach is wrong. Here is the slip. EU size uses staff headcount plus turnover or balance-sheet total — never staff alone. That conclusion does not follow from the definition. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because mSME commonly groups micro, small, and medium enterprises under one umbrella term. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. The named pieces sit inside that course category. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """Walk the activity named here. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. That is why crossing size thresholds can change which accounting rules apply to a business fits. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that any local shop qualifies as micro without reference to staff or turnover data — and that overreach is wrong. Here is the slip. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Against that rule, the absolute wording overreaches. About 99% of EU businesses are SMEs — size gates support and often accounting rules. Correct sorting leaves it false.

So the statement is False.""",
        """Walk the activity named here. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. That is why exactly ten staff exceeds the micro employee ceiling of fewer than ten fits. In Medium financial OR logic, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

Note: staff alone never finishes an EU size test.

So the statement is True.""",
    ],
    "CASE 3.4.08": [
        """The wording holds because exceeding medium staff or financial thresholds generally moves a firm out of SME status. Start from the subsection map. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Nothing in the sentence forces a narrower box than the book allows. In Medium turnover within cap, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

So the statement is True.""",
        """Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Applied to this wording — Grant schemes often require proof that the applicant meets official micro enterprise criteria — the label holds. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because exactly fifty staff exceeds the small category employee limit. Keep Fuhrmann’s wording in front. Small: staff < 50 and turnover or balance sheet ≤ €10 m. The named pieces sit inside that course category. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. That is the classification Fuhrmann trains for this wording.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Applied to this wording — Micro firms must meet the staff cap and either the turnover or balance sheet financial limit — the label holds. About 99% of EU businesses are SMEs — size gates support and often accounting rules. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Applied to this wording — Exactly 250 staff exceeds the medium employee ceiling — the label holds. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The labels line up with the book. Concrete operations make the sorting visible once you name the right category.

So the statement is True.""",
    ],
    "CASE 3.4.09": [
        """The wording holds because a balance sheet above €43m can disqualify medium status even with low turnover. Start from the subsection map. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. The named pieces sit inside that course category. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The labels line up with the book.

So the statement is True.""",
        """The wording holds because crossing micro limits while staying within small thresholds reclassifies the firm as small. Walk the activity named here. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. The named pieces sit inside that course category. In A components manufacturer large scale, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small.

So the statement is True.""",
        """Start from the subsection map. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. Applied to this wording — Policies supporting SMEs affect the vast majority of EU businesses by number — the label holds. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because size differences can mean different accounting rule sets for a micro supplier and a components manufacturer. Keep Fuhrmann’s wording in front. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. The named pieces sit inside that course category. About 99% of EU businesses are SMEs — size gates support and often accounting rules. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because small enterprises must record turnover not exceeding €10m. Small: staff < 50 and turnover or balance sheet ≤ €10 m. Nothing in the sentence forces a narrower box than the book allows. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.4.10": [
        """The wording holds because medium enterprises may report turnover up to €50m under EU definitions. Walk the activity named here. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. The named pieces sit inside that course category. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Familiar words, wrong box. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. So “Micro classification requires both turnover and balance sheet to stay below €2m simultaneously” cannot stand. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because micro requires fewer than ten staff plus financial caps, stricter than small staff limits. Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. The named pieces sit inside that course category. In SME share in the EU, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m.

So the statement is True.""",
        """Familiar words, wrong box. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. So “Small firms may report turnover up to €50m provided staff are below fifty” cannot stand. About 99% of EU businesses are SMEs — size gates support and often accounting rules. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Familiar words, wrong box. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. So “Medium status is confirmed because staff and turnover both qualify despite balance sheet breach” cannot stand. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
    ],
    "CASE 3.4.11": [
        """The wording holds because two people employed falls well within the micro staff ceiling. Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Nothing in the sentence forces a narrower box than the book allows. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that because SMEs are numerous, individual SME failures have no community impact — and that overreach is wrong. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. That conclusion does not follow from the definition. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because lenders may verify SME status using official headcount and turnover thresholds. Walk the activity named here. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. Nothing in the sentence forces a narrower box than the book allows. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. The labels line up with the book.

So the statement is True.""",
        """Walk the activity named here. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. That is why sME tiers require joint satisfaction of staff and relevant financial thresholds fits. In Why definitions matter, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. About 99% of EU businesses are SMEs — size gates support and often accounting rules.

So the statement is True.""",
        """Start from the subsection map. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. That is why most EU businesses by count are classified within SME size bands fits. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.4.12": [
        """The wording holds because turnover above €50m disqualifies medium status even if balance sheet qualifies. Walk the activity named here. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. The named pieces sit inside that course category. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that medium turnover cap is €10m, identical to the small limit — and that overreach is wrong. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Against that rule, the absolute wording overreaches. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small.

So the statement is False.""",
        """That sentence overshoots. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. So “Any firm with forty staff is micro because it employs fewer than fifty people” cannot stand. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Refuse the category swap and the claim collapses. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
        """The wording fails because it claims that adding staff and sales can leave a firm classified as micro even after crossing small thresholds — and that overreach is wrong. That sentence overshoots. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. That conclusion does not follow from the definition. About 99% of EU businesses are SMEs — size gates support and often accounting rules. Correct sorting leaves it false.

So the statement is False.""",
        """Familiar words, wrong box. EU size uses staff headcount plus turnover or balance-sheet total — never staff alone. So “All EU firms file identical full public accounts regardless of size category” cannot stand. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. MSME terminology is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.4.13": [
        """The wording holds because a small IT-support venture illustrate micro-scale operations compared with a components manufacturer's large workforce. Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Nothing in the sentence forces a narrower box than the book allows. In Accounting rules by size, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

Note: staff alone never finishes an EU size test.

So the statement is True.""",
        """The wording holds because complete staff and financial data are needed to verify micro or other SME tiers. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Nothing in the sentence forces a narrower box than the book allows. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. So “SME definitions are irrelevant once a firm exports outside the home country” cannot stand. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m.

So the statement is False.""",
        """Start from the subsection map. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Applied to this wording — One hundred and eighty employees fits the medium staff band if financial tests also pass — the label holds. About 99% of EU businesses are SMEs — size gates support and often accounting rules. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Walk the activity named here. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. That is why micro pairs sub-ten staff with €2m turnover or balance sheet limits fits. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The labels line up with the book.

So the statement is True.""",
    ],
    "CASE 3.4.14": [
        """That sentence overshoots. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. So “Operating alone prevents micro classification because micro requires at least five staff” cannot stand. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Correct sorting leaves it false.

So the statement is False.""",
        """The wording holds because large firms like a components manufacturer can employ thousands despite being few in number. Start from the subsection map. EU size uses staff headcount plus turnover or balance-sheet total — never staff alone. The named pieces sit inside that course category. In Micro balance within cap, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small.

So the statement is True.""",
        """The wording fails because it claims that three thousand staff can still fall within medium limits if turnover is managed — and that overreach is wrong. Familiar words, wrong box. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Against that rule, the absolute wording overreaches. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that turnover within €10m alone makes a firm small even with three hundred employees — and that overreach is wrong. Familiar words, wrong box. Small: staff < 50 and turnover or balance sheet ≤ €10 m. Against that rule, the absolute wording overreaches. About 99% of EU businesses are SMEs — size gates support and often accounting rules.

So the statement is False.""",
        """The wording holds because turnover above €50m prevents medium classification when that cap is breached. Start from the subsection map. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Nothing in the sentence forces a narrower box than the book allows. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.4.15": [
        """Start from the subsection map. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. That is why micro enterprises form a large part of the SME group that dominates EU business counts fits. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because €43m is the medium balance sheet ceiling paired with sub-250 staff. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. The named pieces sit inside that course category. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. The labels line up with the book. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """The wording fails because it claims that nine staff and a €1.6m balance sheet confirm micro status despite €2.05m turnover — and that overreach is wrong. Here is the slip. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. Against that rule, the absolute wording overreaches. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Ten employees boundary is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording holds because eight staff is compatible with micro but financial figures must still be verified. Micro: staff < 10 and turnover or balance sheet ≤ €2 m. The named pieces sit inside that course category. About 99% of EU businesses are SMEs — size gates support and often accounting rules. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Familiar words, wrong box. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. So “The ninety-nine percent statistic proves SMEs generate ninety-nine percent of EU GDP” cannot stand. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large.

So the statement is False.""",
    ],
    "CASE 3.4.16": [
        """The wording holds because leaving SME status can end eligibility for certain EU SME finance programmes. About 99% of EU businesses are SMEs; official size gates finance support and often accounting rules. Nothing in the sentence forces a narrower box than the book allows. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that medium status holds because balance sheet is within €43m despite turnover above €50m — and that overreach is wrong. Here is the slip. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. Against that rule, the absolute wording overreaches. Six staff and €1.2 m turnover sit micro; forty staff and €8 m sit small. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that medium pairs sub-250 staff with a €10m turnover cap — and that overreach is wrong. Familiar words, wrong box. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. That conclusion does not follow from the definition. Medium allows under 250 staff with turnover ≤ €50 m or balance sheet ≤ €43 m. Correct sorting leaves it false.

So the statement is False.""",
        """Small: staff < 50 and turnover or balance sheet ≤ €10 m. Applied to this wording — Thirty staff is within the small enterprise employee limit — the label holds. In Fifty staff boundary, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. About 99% of EU businesses are SMEs — size gates support and often accounting rules.

So the statement is True.""",
        """The wording fails because it claims that one hundred and eighty staff keeps a firm in the small category because turnover is below €50m — and that overreach is wrong. Familiar words, wrong box. Medium: staff < 250 with turnover ≤ €50 m or balance sheet ≤ €43 m. A counter-scene refuses the shortcut. Tina and Steve stay micro with two assistants; AT&S near ten thousand staff is large. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
}
