#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.2.11–2.2.30."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.2.11": [
        """TRUE — Mateo cannot work full-time salaried and full-time freelance at once. Limited working time must be allocated to one income path.

The statement is true.""",
        """TRUE — Taking freelance means giving up the salaried package. In money terms that includes:

$$3{,}600\\text{ euros/month}$$

plus employer-paid health insurance and related benefits forgone — the opportunity cost of freelancing.

The statement is true.""",
        """TRUE — Staying salaried means forgoing potential freelance earnings of:

$$4{,}200\\text{ euros/month}$$

That forgone freelance income is the money opportunity cost of staying.

The statement is true.""",
        """TRUE — Full-time on both paths is impossible, so working hours are scarce and force a single primary choice.

The statement is true.""",
        """TRUE — Opportunity cost is the benefit of the next-best alternative forgone. Mateo’s choice between salary-plus-benefits and higher freelance pay is a direct application of that definition.

The statement is true.""",
    ],
    "CASE 2.2.12": [
        """TRUE — Capital this year funds only one store opening. That limited capital is allocated between location A and location B.

The statement is true.""",
        """TRUE — Opening at A forgoes B’s projected profit:

$$180{,}000\\text{ euros}$$

That forgone profit is the opportunity cost of choosing A (in the stem’s profit metric).

The statement is true.""",
        """FALSE — Opportunity cost of opening at B is A’s forgone profit of 220,000 euros — not the sum:

$$220{,}000 + 180{,}000 = 400{,}000$$

Adding both profits double-counts; the firm earns one store’s profit, not both combined as a “cost.”

The statement is false.""",
        """FALSE — Large size eases some constraints but does not create infinite capital, sites, or managerial attention. Expansion still uses scarce resources.

“Never involve scarce resources” is false.

The statement is false.""",
        """TRUE — Firms allocate limited capital among competing uses just as households allocate limited income. The store-location choice is that shared allocation logic.

The statement is true.""",
    ],
    "CASE 2.2.13": [
        """TRUE — Irrigation water this month fully covers wheat or vegetables, not both. Water is scarce and must be allocated between field types.

The statement is true.""",
        """FALSE — Irrigating vegetables forgoes wheat revenue of 12,000 euros — not the combined total:

$$12{,}000 + 15{,}500 = 27{,}500$$

Opportunity cost is the next-best field’s revenue forgone, not both revenues added.

The statement is false.""",
        """FALSE — Farmers face opportunity cost whenever they allocate scarce inputs. Registration status as a “firm” is irrelevant to the concept.

The statement is false.""",
        """TRUE — Irrigating wheat forgoes vegetable revenue of:

$$15{,}500\\text{ euros}$$

That is the opportunity cost of wheat in the stem’s revenue metric.

The statement is true.""",
        """FALSE — Same-farm location does not remove scarcity. Water used on one field type is unavailable for the other this month — classic allocation of a scarce resource.

The statement is false.""",
    ],
    "CASE 2.2.14": [
        """TRUE — Limited overtime hours cannot fully clear backlog and fully complete Line 2 maintenance at once. Hours are allocated between those uses.

The statement is true.""",
        """TRUE — Using overtime for backlog means maintenance is deferred, so the benefit of lower breakdown risk from preventive work is forgone — the opportunity cost of backlog overtime.

The statement is true.""",
        """TRUE — Using overtime for maintenance means backlog ships later, so delayed-shipment revenue (and related customer benefits) from backlog work is forgone — the opportunity cost of maintenance overtime.

The statement is true.""",
        """FALSE — Worker agreement may enable some overtime, but hours, fatigue, and budget still limit how much overtime exists. Agreement does not make overtime unlimited or erase allocation.

The statement is false.""",
        """TRUE — Opportunity cost compares what you get from one use of the hour pool with what you give up from the other use — exactly how to weigh backlog versus maintenance.

The statement is true.""",
    ],
    "CASE 2.2.15": [
        """FALSE — Scarcity applies to time, land, labour, machines, and other means — not only to money. Money is one scarce resource among many.

The statement is false.""",
        """FALSE — Unlimited wants plus limited budgets are why households face opportunity cost. Saying budgets do not constrain them reverses the logic.

The statement is false.""",
        """FALSE — Ability to raise taxes in the future does not make this year’s 90,000 euros non-scarce. Within the year the council still cannot fund both the skate park and the library renovation fully.

$$90{,}000$$ binds this year’s choice.

The statement is false.""",
        """FALSE — Individuals and students face opportunity cost whenever they forgo an alternative use of scarce means. Company registration is not required.

The statement is false.""",
        """TRUE — Choosing the library forgoes the skate park’s benefit — not both projects’ benefits added together. Opportunity cost is the next-best project forgone.

The statement is true.""",
    ],
    "CASE 2.2.16": [
        """FALSE — Choosing bookshelves (28,000) instead of tables (40,000) still has opportunity cost: the higher table profit forgone. A better option existing is exactly why opportunity cost is positive, not why it is zero.

The statement is false.""",
        """FALSE — Satisfaction is a benefit of an activity; it does not delete the forgone alternative. Opportunity cost remains what you give up.

The statement is false.""",
        """FALSE — Economising means prioritising under limited means — the opposite of treating resources as unlimited without prioritisation.

The statement is false.""",
        """FALSE — Using the oak for tables means it cannot also become bookshelves. “Used either way” still requires choosing which product line gets the wood — that choice carries opportunity cost.

The statement is false.""",
        """TRUE — Limited oak forces a product-line choice. Selecting the more profitable tables line (40,000 vs 28,000) is economising on the scarce batch.

$$40{,}000 > 28{,}000$$

The statement is true.""",
    ],
    "CASE 2.2.17": [
        """TRUE — The trust can grant 25,000 euros to one programme, not both fully. The grant pool is scarce between music and literacy.

$$25{,}000$$ is the binding pool.

The statement is true.""",
        """TRUE — Funding music forgoes literacy-class benefits for seniors — the opportunity cost of the music grant.

The statement is true.""",
        """FALSE — Non-profit and donated funds are still limited. Choosing one worthy cause forgoes another — opportunity cost applies without a market sale of the grant itself.

The statement is false.""",
        """TRUE — Funding literacy forgoes music-programme benefits for youth — the opportunity cost of the literacy grant.

The statement is true.""",
        """TRUE — Philanthropic committees routinely allocate limited funds among competing good causes — the same scarce-resource logic as other actors.

The statement is true.""",
    ],
    "CASE 2.2.18": [
        """TRUE — Petr alone on Saturday cannot fully run repairs and fully run sales at once. Hours are scarce between those uses.

The statement is true.""",
        """TRUE — A repair-focused day forgoes sales earnings of:

$$460\\text{ euros}$$

That is the opportunity cost of repairs in the stem’s earnings metric.

The statement is true.""",
        """TRUE — A sales-focused day forgoes repair earnings of:

$$380\\text{ euros}$$

That is the opportunity cost of sales.

The statement is true.""",
        """TRUE — Inability to do both fully is exactly allocation of scarce Saturday hours among competing uses.

The statement is true.""",
        """TRUE — In either direction, opportunity cost is the next-best Saturday use’s benefit forgone — 460 if repairing, 380 if selling.

The statement is true.""",
    ],
    "CASE 2.2.19": [
        """TRUE — Fiscal-year health funding cannot fully cover both mobile vans and clinic refrigeration upgrades. The ministry allocates one fixed budget between them.

The statement is true.""",
        """TRUE — Choosing vans forgoes refrigeration benefits in underserved clinics — the opportunity cost of the van programme.

The statement is true.""",
        """FALSE — Saving lives is a goal that makes prioritisation urgent; it does not erase budget limits. Public health spending still forgoes alternative health benefits when funds go to one programme.

The statement is false.""",
        """FALSE — Choosing project A means not getting project B’s benefits. Governments do give up rejected alternatives’ benefits — that is opportunity cost.

The statement is false.""",
        """TRUE — Limited fiscal-year funding is a scarce budget that forces a choice between vans and refrigeration.

The statement is true.""",
    ],
    "CASE 2.2.20": [
        """TRUE — The startup can afford one hire. The hiring budget (and headcount slot) is scarce between developer and marketer.

The statement is true.""",
        """FALSE — Opportunity cost of hiring the developer is the benefit forgone from not hiring the marketer — not the developer’s own salary. Salary is the outlay for the chosen hire; opportunity cost is the alternative hire’s value forgone.

The statement is false.""",
        """FALSE — New startups often face tighter scarcity of cash and people than established firms. They are not exempt.

The statement is false.""",
        """TRUE — Hiring the marketer means forgoing the product-speed benefit a developer would have brought — the opportunity cost of the marketer hire.

The statement is true.""",
        """FALSE — Similar salaries mean similar outlays; opportunity cost still differs because the forgone role’s benefit (product speed vs sales boost) differs. Equal pay does not imply zero opportunity cost.

The statement is false.""",
    ],
    "CASE 2.2.21": [
        """TRUE — One forklift crew on one Saturday can clear imports or reorganise the outbound bay, not both fully. That crew-Saturday is scarce between the tasks.

The statement is true.""",
        """TRUE — Choosing imports forgoes the outbound reorganisation’s benefit — the opportunity cost of the import assignment.

The statement is true.""",
        """FALSE — Sharing a warehouse address does not create infinite crew time. The scarce resource is the crew’s Saturday, not the building’s existence.

The statement is false.""",
        """FALSE — Internal tasks still compete for limited labour and machine time. Same building does not cancel opportunity cost.

The statement is false.""",
        """FALSE — Crew salary is the outlay for labour; opportunity cost is the benefit of the task not chosen. Paying the crew does not define opportunity cost as that salary figure.

The statement is false.""",
    ],
    "CASE 2.2.22": [
        """TRUE — In each vignette the budget is limited relative to what the decision-maker would like to fund — the definition of scarcity.

The statement is true.""",
        """TRUE — The basic economic problem is allocating scarce resources among competing uses, faced by households, firms, and governments alike.

The statement is true.""",
        """TRUE — Opportunity cost of an option is the benefit of the next-best alternative given up — the standard definition.

The statement is true.""",
        """TRUE — Buying the sofa means not keeping that money saved (and enjoying whatever the saving would have enabled). The forgone saving benefit is the sofa’s opportunity cost in that framing.

The statement is true.""",
        """TRUE — Funding one infrastructure project forgoes the other project’s benefit — government opportunity cost.

The statement is true.""",
    ],
    "CASE 2.2.23": [
        """TRUE — Overlapping events mean choosing the museum forgoes lunch with his friend. That forgone social benefit is the opportunity cost of the museum visit.

The statement is true.""",
        """FALSE — Money wealth does not make time unlimited. Overlapping events still force a time trade-off and thus opportunity cost.

The statement is false.""",
        """FALSE — Opportunity cost applies whenever an alternative is forgone — including for wealthy people whose binding constraint is time rather than cash.

The statement is false.""",
        """FALSE — Individuals face scarce time and opportunity cost without any business registration.

The statement is false.""",
        """FALSE — Similar money costs leave the time conflict intact. The real trade-off is which event to attend; equal ticket-like costs do not erase opportunity cost.

The statement is false.""",
    ],
    "CASE 2.2.24": [
        """TRUE — One kitchen service window cannot run a sold-out tasting menu and a walk-in banquet fully at once. The slot is scarce between those events.

The statement is true.""",
        """TRUE — Running the tasting menu forgoes banquet revenue and any reputation benefit from hosting the banquet — opportunity cost of the tasting service.

The statement is true.""",
        """TRUE — Running the banquet forgoes tasting-menu margin and goodwill with regular tasting clientele — opportunity cost of the banquet.

The statement is true.""",
        """FALSE — Paying customers create demand; they do not create unlimited kitchen hours, chefs, or stove capacity. Restaurants still economise.

The statement is false.""",
        """TRUE — Prep time and stove capacity are limited within the service window and must be allocated to one event plan.

The statement is true.""",
    ],
    "CASE 2.2.25": [
        """TRUE — Four hundred euros funds the laptop or the textbook set, not both. The student budget is scarce between those uses.

$$400$$ binds the choice.

The statement is true.""",
        """TRUE — Buying the laptop forgoes the study benefit of owning the full textbook set — opportunity cost of the laptop in that framing.

The statement is true.""",
        """TRUE — Buying textbooks forgoes the productivity benefit the refurbished laptop would have provided — opportunity cost of the textbooks.

The statement is true.""",
        """FALSE — Education involves trade-offs under scarce student budgets. Wishing education were free of trade-offs does not exclude students from opportunity cost.

The statement is false.""",
        """FALSE — Two alternatives are enough for opportunity cost: choose one, forgo the other. Three or more are not required.

The statement is false.""",
    ],
    "CASE 2.2.26": [
        """TRUE — Choosing a free concert over paid overtime forgoes the wage those overtime hours would have paid — money opportunity cost of the concert.

The statement is true.""",
        """FALSE — Opportunity cost applies when the forgone alternative has value even without a price tag — leisure, experience, unpaid help. Explicit prices are not required on both sides.

The statement is false.""",
        """TRUE — Volunteering uses hours that could have been paid work. Forgone wage hours are the opportunity cost of that leisure-for-others time.

The statement is true.""",
        """FALSE — Non-financial enjoyment can be the benefit forgone (or the benefit gained) in opportunity-cost reasoning. Banning non-financial elements is too narrow.

The statement is false.""",
        """TRUE — When time is the binding scarce resource, choosing one use forgoes another even if money and other factors stay unchanged — time-based opportunity cost.

The statement is true.""",
    ],
    "CASE 2.2.27": [
        """TRUE — A family choosing debt repayment versus a home extension allocates a limited budget among competing uses — the same problem governments face, at smaller scale.

The statement is true.""",
        """FALSE — Scarcity affects households and firms as well as governments. It is not defined as “governments only.”

The statement is false.""",
        """FALSE — Opportunity cost exists at any scale: forgoing one use of limited means for another. Smaller euro amounts do not make forgone benefits unreal.

The statement is false.""",
        """FALSE — Household debt-repayment choices carry opportunity cost without business registration.

The statement is false.""",
        """FALSE — Opportunity cost analyses individual, firm, and government choices — not only decisions involving millions of people.

The statement is false.""",
    ],
    "CASE 2.2.28": [
        """TRUE — One remaining ICU bed cannot serve both the scheduled surgery patient and the emergency admission fully at once. The bed is scarce between those uses.

The statement is true.""",
        """TRUE — Assigning the bed to emergency forgoes the scheduled surgery’s health benefit — opportunity cost of the emergency assignment.

The statement is true.""",
        """TRUE — Assigning the bed to the scheduled case forgoes the emergency patient’s treatment benefit — opportunity cost of the scheduled assignment.

The statement is true.""",
        """FALSE — Medical ethics guide how to weigh benefits; they do not erase the fact that one bed forces a forgone alternative. Rationing under scarcity involves opportunity cost.

The statement is false.""",
        """TRUE — Opportunity cost can be measured in health outcomes and lives affected, not only in euros. Non-monetary life-saving benefits forgone still count.

The statement is true.""",
    ],
    "CASE 2.2.29": [
        """TRUE — Opportunity cost is the next-best alternative not chosen — not the sum of every rejected option. That precision is the standard definition.

The statement is true.""",
        """FALSE — Each party to a trade has its own forgone alternative. Opportunity costs need not be identical just because both give something up; what each forgoes can differ.

The statement is false.""",
        """FALSE — Missing a clean financial metric does not force opportunity cost to zero. Forgone time, health, or enjoyment can still be real opportunity costs.

The statement is false.""",
        """FALSE — Choosing a lower-return option means forgoing the higher-return option — opportunity cost is typically larger, not zero, when a better alternative was available.

The statement is false.""",
        """TRUE — Households, firms, and governments all forgo next-best uses when they allocate scarce resources — opportunity cost is universal across those actors.

The statement is true.""",
    ],
    "CASE 2.2.30": [
        """TRUE — Limited resources relative to wants force choices by households, firms, and governments — the basic economic problem.

The statement is true.""",
        """TRUE — Allocation means deciding how to distribute scarce resources among competing uses — the statement’s definition matches standard teaching.

The statement is true.""",
        """TRUE — Choosing one course forgoes the benefit the next-best feasible alternative would have delivered — opportunity cost in plain language.

The statement is true.""",
        """TRUE — Economising is the careful response to scarcity; it is unnecessary only in the imaginary case of unlimited resources.

The statement is true.""",
        """TRUE — The same scarcity–choice–opportunity-cost logic applies to money, land, labour hours, hospital beds, and other limited means.

The statement is true.""",
    ],
}


def main():
    data = json.loads(PATH.read_text(encoding="utf-8"))
    by_id = {t["case_id"]: t for t in data}
    for case_id, expls in PATCH.items():
        t = by_id[case_id]
        assert len(expls) == 5
        for i, (e, key) in enumerate(zip(expls, t["answer_key"])):
            letter = chr(65 + i)
            want = "TRUE —" if key else "FALSE —"
            if not e.startswith(want):
                raise SystemExit(f"{case_id} {letter}: expected {want}")
            closer = "The statement is true." if key else "The statement is false."
            if closer not in e:
                raise SystemExit(f"{case_id} {letter}: missing closer")
            for bad in (
                "A student who overlooked",
                "matched the topic to",
                "Read the quantifier",
                "Check the sentence against the core concept",
                "Map the scenario onto the textbook category",
                "Check that the comparison runs in the stated direction",
            ):
                if bad in e:
                    raise SystemExit(f"{case_id} {letter}: leftover boilerplate: {bad}")
        t["tactical_explanations"] = expls
        print("OK", case_id)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(PATCH)} cases")


if __name__ == "__main__":
    main()
