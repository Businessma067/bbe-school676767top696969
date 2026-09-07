#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.2.31–2.2.50."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.2.31": [
        """TRUE — Shorter setup times between runs free scarce press minutes so both workbook and wedding queues get partial capacity. That scheduling discipline is economising on one press.

The statement is true.""",
        """TRUE — The press-shop choice is one instance of the general rule: households, firms, and governments all allocate scarce resources among competing uses.

The statement is true.""",
        """TRUE — Taking wedding jobs means workbook contract income is forgone — the opportunity cost of prioritising weddings.

The statement is true.""",
        """TRUE — One press for one week cannot run unlimited workbook and wedding jobs at once. That press-week is scarce between the two queues.

The statement is true.""",
        """FALSE — The electricity bill is an operating outlay for using the press. Opportunity cost is the forgone alternative use’s benefit (for example workbook income forgone when wedding jobs fill the week) — not the power invoice by itself.

The statement is false.""",
    ],
    "CASE 2.2.32": [
        """TRUE — Tuesday evening cannot be fully spent in language class and fully spent babysitting. Those hours are scarce between the two activities.

The statement is true.""",
        """TRUE — Enjoying babysitting is a benefit of that option; it does not erase the classroom learning forgone. Opportunity cost remains the unchosen course’s benefits.

The statement is true.""",
        """FALSE — Opportunity cost can include learning, leisure, and other non-cash benefits forgone — not only cash income.

The statement is false.""",
        """FALSE — Valuable skills make the course attractive; they do not eliminate the opportunity cost of missing babysitting pay or other uses of Tuesday evening.

The statement is false.""",
        """FALSE — Personal schedule trade-offs and government budget trade-offs share the same allocation logic under scarcity. They are related as instances of one economic problem, not unrelated domains.

The statement is false.""",
    ],
    "CASE 2.2.33": [
        """TRUE — Prioritising hydropower reduces water available for irrigation, so crop-yield benefits downstream are forgone — opportunity cost of power priority.

The statement is true.""",
        """TRUE — Timing releases to limit evaporation during heatwaves stretches limited reservoir water further — economising on a scarce seasonal stock.

The statement is true.""",
        """TRUE — Prioritising irrigation reduces turbine flow, so electricity revenue (and power output) is forgone — opportunity cost of irrigation priority.

The statement is true.""",
        """TRUE — Dam managers in government face limited water and competing uses — the same scarce-resource problem households and firms face with their own limited means.

The statement is true.""",
        """TRUE — This season’s reservoir releases are finite and split between power generation and irrigation — a scarce resource allocation.

The statement is true.""",
    ],
    "CASE 2.2.34": [
        """TRUE — Opportunity cost is the next-best alternative’s benefit forgone (documentary vs commercial), not the fee charged for the shoot you actually book.

Fee = outlay/revenue of the chosen use; opportunity cost = forgone alternative.

The statement is true.""",
        """FALSE — Art and documentaries still use scarce stage time. Non-financial motives do not zero opportunity cost.

The statement is false.""",
        """FALSE — Strong demand and waiting lists intensify scarcity of the single Friday stage; they do not remove it.

The statement is false.""",
        """FALSE — Corporate booking systems still allocate limited rooms and slots under the same scarcity logic as household budgets — different software, same economic problem.

The statement is false.""",
        """FALSE — Even if commercials often pay more, documentaries can carry cultural, contractual, or strategic value. Declaring their forgone value always zero is false.

The statement is false.""",
    ],
    "CASE 2.2.35": [
        """TRUE — Picking the 300-euro tablet forgoes the bike’s benefit — not the combined sticker sum:

$$300 + 450 = 750$$

Opportunity cost is the next-best option forgone, not both prices added.

The statement is true.""",
        """TRUE — Two alternatives suffice: choose one, forgo the other. A third option is not required for opportunity cost to exist.

The statement is true.""",
        """TRUE — Households, firms, and governments all forgo next-best uses when allocating scarce resources — opportunity cost is shared across actors.

The statement is true.""",
        """FALSE — Adding all rejected prices is Robin-style overcounting, not the standard textbook definition (next-best alternative forgone).

The statement is false.""",
        """FALSE — Liking the chosen item explains why you picked it; it does not set opportunity cost to zero. You still forwent the bike’s benefit.

The statement is false.""",
    ],
    "CASE 2.2.36": [
        """TRUE — Limited staff hours this quarter cannot fully extend weekdays and fully launch weekend children’s sessions without trade-offs. Hours are scarce between those uses.

The statement is true.""",
        """TRUE — Launching the weekend programme uses hours that could have extended weekday access — that forgone weekday benefit is the opportunity cost.

The statement is true.""",
        """TRUE — Council library staffing and a family choosing roof repair versus holiday both allocate limited means among competing uses — same problem, different scale.

The statement is true.""",
        """TRUE — Cross-training so one team covers more tasks stretches scarce staff capacity — economising on labour hours.

The statement is true.""",
        """TRUE — Extending weekday hours uses staff time that could have run the children’s programme — forgone programme benefit is the opportunity cost.

The statement is true.""",
    ],
    "CASE 2.2.37": [
        """TRUE — Buying the measuring set means not buying the tool chest, so storage and mobility benefits of the chest are forgone — opportunity cost of the measuring set.

The statement is true.""",
        """TRUE — Scarce money for tools and scarce time for overtime versus study are parallel constraints: limited means, competing uses, opportunity cost in both.

The statement is true.""",
        """TRUE — One hundred eighty euros funds one option this month, not both:

$$180\\text{ euros}$$

That limited budget is allocated between measuring tools and the chest.

The statement is true.""",
        """FALSE — Even if storage helps the apprentice’s work, choosing the chest still forgoes the measuring set. Calling something a need does not make it costless in opportunity-cost terms.

The statement is false.""",
        """FALSE — Opportunity cost applies to individuals before any business incorporation — including apprentices buying tools.

The statement is false.""",
    ],
    "CASE 2.2.38": [
        """TRUE — Research labs allocate scarce centrifuge slots, reagents, and technician time. Scarce-resource allocation is not limited to firms and households.

The statement is true.""",
        """FALSE — Medical importance raises the stakes of prioritisation; it does not set opportunity cost to zero. Choosing blood samples forgoes protein-culture runs in the same overnight slot.

The statement is false.""",
        """FALSE — Funding does not create infinite overnight slots. Labs still face equipment and time trade-offs.

The statement is false.""",
        """FALSE — Different experiments in one building routinely compete for shared machines, cold storage, and technician hours.

The statement is false.""",
        """FALSE — Multiple machines reduce queues; they do not eliminate them when demand exceeds capacity. Labs still sequence samples.

The statement is false.""",
    ],
    "CASE 2.2.39": [
        """TRUE — Optimising placement to fit maximum safe tonnage stretches limited deck capacity — economising on scarce sailing space.

The statement is true.""",
        """TRUE — Splitting deck space between freight and cars mirrors a government splitting transport investment between rail and road — scarce capacity, competing uses.

The statement is true.""",
        """TRUE — Loading extra freight trailers means fewer passenger cars aboard, so ticket revenue from cars left ashore is forgone — opportunity cost of freight priority.

The statement is true.""",
        """TRUE — Deck space on one sailing is finite and split between freight trailers and passenger cars — a scarce resource.

The statement is true.""",
        """FALSE — Travellers may need cars, but that does not make freight income “disappear” as an economic category. Freight still earns revenue and still competes for deck space.

The statement is false.""",
    ],
    "CASE 2.2.40": [
        """TRUE — Cinema tickets use the jar so the board game is not bought; repeated home-entertainment benefit from the game is forgone — opportunity cost of cinema.

The statement is true.""",
        """TRUE — Sixty euros is small but still limited. Forgoing the game for tickets is real opportunity cost at household scale.

$$60\\text{ euros}$$ still binds.

The statement is true.""",
        """FALSE — Parents might add coins later; that possibility does not make this month’s jar unlimited. The current 60 euros remains a scarce pool for this choice.

The statement is false.""",
        """FALSE — Games lasting longer does not make cinema benefits “vanish permanently” as a category — nor does durability erase cinema’s opportunity cost when the jar buys tickets instead.

The statement is false.""",
        """FALSE — Children economise with limited toys, time, and shared jars. Parents funding every wish is a wish, not a fact that removes economising.

The statement is false.""",
    ],
    "CASE 2.2.41": [
        """TRUE — Bundling tasks that share one crane setup saves scarce hoist time in the low-wind window — economising on a binding maintenance resource.

The statement is true.""",
        """FALSE — Low wind creates a maintenance window; it does not grant technicians unlimited hours. Fatigue, crew size, and the window’s length still bind.

The statement is false.""",
        """FALSE — Energy firms allocate scarce windows, cranes, and crews under opportunity cost like other firms.

The statement is false.""",
        """FALSE — Safety rules constrain how work is done; they do not remove trade-offs between inspections and blade repairs inside a limited window.

The statement is false.""",
        """FALSE — Regulatory need for inspections raises their priority; it does not set the forgone value of delayed blade repairs to zero.

The statement is false.""",
    ],
    "CASE 2.2.42": [
        """TRUE — One staff week cannot fully write both grant applications at once. That week is scarce between housing and arts proposals.

The statement is true.""",
        """TRUE — Pursuing the arts grant forgoes the housing programme benefit that a successful housing proposal might have brought — opportunity cost of the arts focus.

The statement is true.""",
        """TRUE — Pursuing housing forgoes arts-funding benefits if the arts proposal is skipped — opportunity cost of the housing focus.

The statement is true.""",
        """FALSE — Grant-writer salary is the outlay for labour. Opportunity cost is the forgone alternative grant’s expected programme benefit — not the salary figure itself.

The statement is false.""",
        """FALSE — Nonprofits allocate scarce staff time and funds too. Profit-seeking is not required for scarce-resource allocation.

The statement is false.""",
    ],
    "CASE 2.2.43": [
        """TRUE — Clearing schools first delays hospital-road clearing, so emergency-access benefits on those roads are forgone — opportunity cost of school priority.

The statement is true.""",
        """TRUE — Clearing hospital roads first delays school routes, so pupil-transport benefits are forgone — opportunity cost of hospital priority.

The statement is true.""",
        """TRUE — Limited plough hours after a storm are allocated like a household monthly budget — scarce means, competing uses.

The statement is true.""",
        """TRUE — Sequencing routes to cut return-to-depot deadhead mileage stretches scarce plough hours — economising on the fleet’s time.

The statement is true.""",
        """TRUE — Available plough hours are finite and split between school routes and hospital roads — a scarce resource.

The statement is true.""",
    ],
    "CASE 2.2.44": [
        """TRUE — Full-time summer weeks cannot cover both the paid placement and the museum internship. Those weeks are scarce between the offers.

The statement is true.""",
        """TRUE — Individuals choosing training paths and firms choosing training programmes both allocate scarce time (and related resources) among alternatives.

The statement is true.""",
        """TRUE — Higher enjoyment at the museum is a benefit of that option; it does not erase forgone wages from the paid placement in the comparison.

The statement is true.""",
        """TRUE — Accepting the unpaid museum internship forgoes paid-placement wages — the money opportunity cost of the museum path.

The statement is true.""",
        """FALSE — Opportunity cost for graduates can include experience, networks, and career options forgone — not euro amounts only.

The statement is false.""",
    ],
    "CASE 2.2.45": [
        """TRUE — Satisfaction is a benefit of volunteering; it does not cancel forgone income or leisure from the option not chosen. Those forgone benefits remain opportunity cost.

The statement is true.""",
        """TRUE — Saturday volunteering can mean not working a paid shift, so wage income is forfeited — opportunity cost in money terms.

The statement is true.""",
        """FALSE — Unpriced alternatives (leisure, unpaid help, learning) still create opportunity cost when forgone. Price tags are not required.

The statement is false.""",
        """FALSE — Charitable motive does not exempt an activity from scarce-time economics. Volunteering still uses hours that had other uses.

The statement is false.""",
        """FALSE — How happy the volunteer feels is a benefit measure, not the definition of opportunity cost. Opportunity cost is what was forgone, not post-activity happiness.

The statement is false.""",
    ],
    "CASE 2.2.46": [
        """TRUE — Using the room for internal training forgoes client hire fees and relationship benefits from a workshop — opportunity cost of internal use.

The statement is true.""",
        """TRUE — Split walls that let both groups meet at reduced capacity stretch one room’s morning — economising when both accept less space.

The statement is true.""",
        """TRUE — One large room for one morning cannot fully host both the client workshop and internal training without trade-offs — a scarce resource.

The statement is true.""",
        """TRUE — Assigning the room mirrors a firm choosing between two marketing channels: limited capacity, competing uses, opportunity cost.

The statement is true.""",
        """FALSE — Client revenue often weighs heavily, but internal training can have real benefits. Revenue does not “automatically” override all internal benefits in every case.

The statement is false.""",
    ],
    "CASE 2.2.47": [
        """TRUE — Sending the crew to cherries delays trellis repairs, so storm-damage reduction from timely repairs is forgone — opportunity cost of cherry priority.

The statement is true.""",
        """FALSE — Opportunity cost can be measured in crop saved, risk reduced, or other non-euro benefits — not euros only.

The statement is false.""",
        """FALSE — Weather may reduce fruit value; it does not automatically make revenue opportunity cost zero in every harvest decision. Early picking can still protect value relative to delay.

The statement is false.""",
        """FALSE — Rain changes which tasks are feasible; it does not remove scarcity of crew hours before the rain arrives. Pre-rain allocation still matters.

The statement is false.""",
        """FALSE — Farming combines biology with economic allocation of labour, land, and timing. Agricultural decisions are economic as well as biological.

The statement is false.""",
    ],
    "CASE 2.2.48": [
        """TRUE — Shorter breaks that free minutes for both ward work and revision stretch a scarce day — economising on time when both tasks matter.

The statement is true.""",
        """TRUE — Taking the paid shift uses hours that could have been revision, so improved exam readiness from that study time is forgone — opportunity cost of the shift.

The statement is true.""",
        """FALSE — Trainees face opportunity cost on personal time without company registration being required.

The statement is false.""",
        """FALSE — Licensing may be a professional need, but exam prep still forgoes paid-shift income (or leisure). Need status does not zero opportunity cost.

The statement is false.""",
        """FALSE — Sundays recur on the calendar; each Sunday’s hours remain finite. Recurrence does not make hours unlimited.

The statement is false.""",
    ],
    "CASE 2.2.49": [
        """TRUE — Choosing free park time over a paid shift forgoes wages those hours could have earned — opportunity cost without a park ticket price.

The statement is true.""",
        """TRUE — Small budgets still force forgone alternatives. Scale does not erase opportunity cost.

The statement is true.""",
        """TRUE — A fixed garden area split between vegetables and flowers is scarce land allocation — scarcity of space, not only of cash.

The statement is true.""",
        """TRUE — Economising is required whenever resources are scarce, whatever the resource type — money, land, time, or beds.

The statement is true.""",
        """TRUE — One specialist nurse cannot cover two wards fully at once. Administrators face time scarcity and opportunity cost between wards.

The statement is true.""",
    ],
    "CASE 2.2.50": [
        """TRUE — Nine hundred euros cannot fully fund new kits and fridge repair if both claim the whole sum. The club fund is limited between those uses.

$$900\\text{ euros}$$ binds.

The statement is true.""",
        """TRUE — Buying kits leaves the fridge broken, so food-storage benefits from repair are forgone — opportunity cost of kits.

The statement is true.""",
        """TRUE — Repairing the fridge forgoes training benefits from new kits — opportunity cost of repair.

The statement is true.""",
        """FALSE — Nonprofit and charitable clubs still allocate limited euros under scarcity. Charitable purpose does not make budgets non-economic.

The statement is false.""",
        """FALSE — The invoice total is the outlay for the chosen item. Opportunity cost is the benefit of the option not funded — not the invoice itself.

The statement is false.""",
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
