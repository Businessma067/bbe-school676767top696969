#!/usr/bin/env python3
"""Rewrite tactical_explanations for CASE 2.1.01–2.1.25 from scratch (ch6 teacher voice)."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

# Each list is A→E. Endings match answer_key. Statements/keys/context untouched.
REWRITES: dict[str, list[str]] = {
    "CASE 2.1.01": [
        "A salary reallocates scarcity; it does not erase it.\n\n"
        "Even with steady pay, the household still has a finite budget and finite time — "
        "it cannot buy everything at once.\n\n"
        "So the statement is False.",

        "Economising is careful use of limited resources.\n\n"
        "Treating money, time, or materials as if they were infinite is the opposite of that idea.\n\n"
        "So the statement is True.",

        "Skipping a purchase is still a decision about scarce time or money.\n\n"
        "Inaction does not remove you from the set of economic choices; it is one of them.\n\n"
        "Nobody gets a clean exit simply by doing nothing.\n\n"
        "So the statement is True.",

        "Households with regular income still face limited budgets and must choose what to buy.\n\n"
        "Scarcity is not reserved for registered firms — families economise every week on rent, food, and leisure.\n\n"
        "So the statement is False.",

        "Households exchange whenever they buy bread, pay for a haircut, or sell a used bike.\n\n"
        "Entrepreneur status is not a ticket of admission to trade.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.02": [
        "Goods are tangible items — a loaf, a phone, a coat.\n\n"
        "Intangible activities (repairs, lessons, software installs) are services, not goods. "
        "The claim swaps the two labels.\n\n"
        "So the statement is False.",

        "A service is an intangible activity done for someone: installing software or preparing a drink fits that test.\n\n"
        "So the statement is True.",

        "Needs keep basic well-being going; wants are desired extras that are not essential.\n\n"
        "That split is exactly what the statement reports.\n\n"
        "So the statement is True.",

        "Families need food and shelter; firms need staff, materials, and working equipment.\n\n"
        "Either side can meet those needs by trading with the other.\n\n"
        "So the statement is True.",

        "Limited resources force careful choices — that is scarcity, and economising is the response.\n\n"
        "Assuming unlimited supply would ignore the constraint the chapter starts from.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.03": [
        "Businesses trade with households every day — selling goods, buying labour, hiring suppliers.\n\n"
        "There is no legal bar that confines exchange to consumers alone.\n\n"
        "So the statement is False.",

        "A shop needs stock, premises, and staff just as a family needs food and heat.\n\n"
        "Registered businesses are not need-free shells.\n\n"
        "So the statement is False.",

        "Leaving pocket money unspent is still a choice about scarce cash — save now, spend later, or hold it.\n\n"
        "The teenager has not stepped outside economic decision-making.\n\n"
        "So the statement is False.",

        "When a household pays a firm (or another household) for something useful, exchange is doing the work of fulfilling a need or want.\n\n"
        "So the statement is True.",

        "Barter is exchange without money: gardening help for a bookshelf still swaps valued things.\n\n"
        "Cash is common, not required.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.04": [
        "Computers are goods; installing software is a service — both help people meet needs.\n\n"
        "So the statement is True.",

        "A smartphone maker cannot assemble handsets without specialised electronic parts from suppliers.\n\n"
        "That input requirement is an operational need of the manufacturer.\n\n"
        "So the statement is True.",

        "Fabricating components means drawing on raw materials and a workforce; isolation is not how production works.\n\n"
        "So the statement is True.",

        "People buy, sell, and swap goods and services directly — they are full participants in trade, not spectators.\n\n"
        "So the statement is True.",

        "Food, shelter, and medical care are household needs; cinema nights are wants layered on top.\n\n"
        "Both sit inside everyday household demand.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.05": [
        "Roasted beans in a bag are a tangible good; the barista’s drink preparation is an intangible service.\n\n"
        "So the statement is True.",

        "Needing enough caffeine to function is not the same as craving a flavoured latte for pleasure.\n\n"
        "Needs cover basic well-being; wants cover non-essential desires — the concepts are not identical.\n\n"
        "So the statement is False.",

        "A habitual favourite drink that is not essential for survival or basic health sits in the want category.\n\n"
        "So the statement is True.",

        "The café needs reliable bean suppliers, cups, and staff hours to keep serving customers.\n\n"
        "Being a business does not wipe those operational needs away.\n\n"
        "So the statement is False.",

        "Customer pays, café supplies — each side gets something valued. That two-sided fulfilment is exchange.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.06": [
        "Getting to school with the bus pass supports a need; the game skin is entertainment, not a basic necessity.\n\n"
        "So the statement is True.",

        "Price tags do not turn wants into needs. A ten-euro skin remains a want even though it costs money.\n\n"
        "Classification rests on necessity for well-being, not on whether something is sold.\n\n"
        "So the statement is False.",

        # Known bank mismatch: wording is pedagogically True; published key is False.
        "Jonas’s twelve-euro choice already forces trade-offs among the bus pass, the game skin, and saving — "
        "before any business registration enters the picture.\n\n"
        "So the statement is False.",

        "Saving the twelve euros is itself an allocation: hold cash now rather than buy the pass or the skin.\n\n"
        "Choosing not to buy is not escaping economics; it is one use of limited means.\n\n"
        "So the statement is False.",

        "Buying the bus pass does not delete the desire for the game skin. The want can return next month with new pocket money.\n\n"
        "“Permanently” and “never” overclaim.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.07": [
        "Screen replacement is labour on the customer’s device — a service. A phone case sold at the counter is a tangible take-away — a good.\n\n"
        "So the statement is True.",

        "A limited monthly parts batch is scarce by definition: once it is gone, further repairs wait.\n\n"
        "Calling the shop a business does not create an infinite stockroom.\n\n"
        "So the statement is False.",

        "A decorative case bought only for its look is preference, not a requirement for basic well-being — a want.\n\n"
        "So the statement is True.",

        "Whether someone casually calls phones a luxury, repair can still meet a real need — school contact, work, emergencies.\n\n"
        "Phones are not outside economic analysis, and “never” is too strong.\n\n"
        "So the statement is False.",

        "A fixed monthly parts batch is a hard capacity ceiling. The shop must decide which jobs to take, delay, or refuse — that ranking is economising.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.08": [
        "Introductory models summarise the economy as households and entrepreneurs interacting through exchange.\n\n"
        "So the statement is True.",

        "Goods are tangible items; services are intangible activities performed for someone.\n\n"
        "So the statement is True.",

        "Both households and businesses have needs (and wants). Trading with others is one way those get fulfilled.\n\n"
        "So the statement is True.",

        "Scarcity means resources are limited relative to desired uses. Economising is the careful response; assuming unlimited means denies the constraint.\n\n"
        "So the statement is True.",

        "Every actor still faces scarce time and limited means. Trying to “opt out” leaves those constraints in place — including the decision to do nothing with a resource.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.09": [
        "Herr Novak organises production and sale at the bakery — entrepreneur. Families buying bread act as households.\n\n"
        "So the statement is True.",

        "Bread is a tangible good; doorstep delivery is an intangible service. Tangible versus activity matches the usual split.\n\n"
        "So the statement is True.",

        "Owning a bakery does not cancel Herr Novak’s personal needs for food, housing, or rest.\n\n"
        "Entrepreneur role and private household needs coexist in the same person.\n\n"
        "So the statement is False.",

        "Paying one euro extra for delivery is still a swap of money for a valued service. Performance ending does not erase the exchange that just occurred.\n\n"
        "So the statement is False.",

        "Flour and oven fuel arrive in limited quantities and at a cost. A bakery must choose batch sizes and recipes under those limits — that is economising.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.10": [
        "Gardening lessons for a handmade bookshelf is a clear swap of valued things. Money is absent; exchange is not.\n\n"
        "So the statement is True.",

        "Euro notes and bank transfers are convenient media of exchange, not the definition of it.\n\n"
        "Two neighbours can still trade lessons for furniture with no cash changing hands. Requiring banknotes would wrongly exclude barter from economics.\n\n"
        "So the statement is False.",

        "Wood for the bookshelf is finite. Using more on one project leaves less for the next — the carpenter must economise.\n\n"
        "So the statement is True.",

        "Gardening lessons are an activity performed for the neighbour, not a physical object handed over — a service.\n\n"
        "So the statement is True.",

        "People have needs and wants whether or not they run a firm.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.11": [
        "Petra’s family buys as a household; Fabian builds and sells as an entrepreneur.\n\n"
        "So the statement is True.",

        "The finished oak table is a tangible item Fabian produces and delivers — a good.\n\n"
        "So the statement is True.",

        "Paying €650 for the table is exchange that meets the family’s furniture need.\n\n"
        "So the statement is True.",

        "Timber is an operational input Fabian must obtain to keep building. Calling raw materials “merely wants” mislabels a production need.\n\n"
        "Without oak he cannot deliver the commissioned table at all.\n\n"
        "So the statement is False.",

        "Oak is limited and costly. Fabian has to plan how much board goes into each commission rather than cut freely.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.12": [
        "Without specialised electronic parts from suppliers, laptop production stalls.\n\n"
        "So the statement is True.",

        "High-tech firms need components, energy, and skilled staff just as consumers need goods. “Zero internal needs” is wrong.\n\n"
        "So the statement is False.",

        "Daily shopping — food, transport, streaming, clothes — is households using market exchange for both needs and wants.\n\n"
        "So the statement is True.",

        "Satisfying food and rent for one month does not switch off desires for holidays, gadgets, or better housing.\n\n"
        "Wants keep regenerating; they are not a one-time checklist that disappears when basics are covered.\n\n"
        "So the statement is False.",

        "Teenagers with pocket money already buy, save, and trade. They sit on the household side long before any business registration.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.13": [
        "Transport and toiletries support everyday functioning — needs. Designer trainers at €140 are desired extras — a want.\n\n"
        "So the statement is True.",

        "Money from parents places Lukas inside a household budget.\n\n"
        "So the statement is False.",

        "Buying trainers spends part of the month’s cash; it does not cancel the need to get to school.\n\n"
        "Transport still has to be covered from whatever remains of the €300 — the want purchase does not erase the need.\n\n"
        "So the statement is False.",

        "Economics studies how people allocate scarce means among competing ends — including wants. Calling trainers “irrational” does not eject them from the subject.\n\n"
        "So the statement is False.",

        "Three hundred euros a month is a hard ceiling. Choosing trainers versus transport is economising, not swimming in unlimited means.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.14": [
        "Reinisch sells produce as an entrepreneur; village buyers act as households at the stall.\n\n"
        "So the statement is True.",

        "Eight hectares on this farm are the land he actually commands. Theoretical land elsewhere does not make his own plot non-scarce.\n\n"
        "So the statement is False.",

        "Potatoes and carrots are tangible items. Needing cooking before eating does not turn them into services.\n\n"
        "So the statement is True.",

        "Limited land means crop mix is a forced allocation decision — Reinisch cannot plant everything on the same hectares.\n\n"
        "So the statement is True.",

        "Cash payment is the usual form of exchange at a market stall. Barter is one form of trade, not the only valid one.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.15": [
        "Toni and Rosa organise offerings for sale — entrepreneurs. Visiting families buy as households.\n\n"
        "So the statement is True.",

        "A cheese wheel is a good; face-painting is a service.\n\n"
        "So the statement is True.",

        "Weekly grocery cheese supports a need; face-painting is enjoyment rather than basic well-being — more of a want.\n\n"
        "So the statement is True.",

        "Money for cheese or for face-painting is exchange: each side gives something and receives something valued.\n\n"
        "So the statement is True.",

        "Thirty wheels left is a hard stock limit on market day.\n\n"
        "Toni must decide how many to hold for regulars, how many to sell early, and whom to turn away when the queue outruns the crate — that ranking is economising under scarcity.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.16": [
        "Large cash reserves do not create infinite managerial attention or factory hours. Those remain scarce even for a multinational.\n\n"
        "So the statement is True.",

        "Unlimited wants are exactly why budgets bite.\n\n"
        "So the statement is False.",

        "Raising taxes takes political time and still claims finite real resources — labour, materials, administrative capacity.\n\n"
        "A government cannot fund every project “immediately” just by changing a tax rate. Scarcity binds the public sector too.\n\n"
        "So the statement is False.",

        "When a resource has competing uses and is limited, careful allocation — economising — is the rational response.\n\n"
        "So the statement is True.",

        "Labour hours and raw materials cost money and run out. Entrepreneurs who ignore that constraint do not stay viable.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.17": [
        "Sami sells beans and drinks as an entrepreneur; customers buy as households.\n\n"
        "So the statement is True.",

        "A bag of beans is a good; pulling an espresso is a service performed for the customer.\n\n"
        "So the statement is True.",

        "A strong coffee habit can be comfort or preference rather than a strict survival requirement — often a want.\n\n"
        "So the statement is True.",

        "Trying a new seasonal flavour for enjoyment is desire, not basic necessity — a want.\n\n"
        "So the statement is True.",

        "Forty kilograms of the rare lot is a hard season cap. Sami must decide which drinks and bag sales get that coffee — economising under the limit.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.18": [
        "Novels for algebra tutoring is still a mutual swap of valued things. Money is not required for exchange.\n\n"
        "So the statement is False.",

        "Felix’s tutoring is an activity — a service. Nora’s novels are tangible goods. The labels line up.\n\n"
        "So the statement is True.",

        "Students still have scarce time, needs, and wants. Being classmates rather than firms does not eject them from exchange concepts.\n\n"
        "So the statement is False.",

        "Felix’s free afternoons are limited. Tutoring Nora means fewer hours for homework, sport, or rest — allocation of a scarce resource.\n\n"
        "So the statement is True.",

        "After the swap, both still decide how to use remaining evenings, weekends, and energy. Agreement on one trade is not a full exit from economic choices.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.19": [
        "Growing your own food still uses limited land, time, and seed. Retirees must choose plot layouts and crop mixes — economising continues.\n\n"
        "So the statement is True.",

        "Bicycle repair is work performed on the customer’s bike — a service.\n\n"
        "So the statement is True.",

        "Surplus eggs sold for cash give neighbours food and the seller money. That trade fulfils needs or wants through exchange.\n\n"
        "So the statement is True.",

        "Stopping wage work does not turn retirees into entrepreneurs by default.\n\n"
        "They typically remain households. Selling the occasional surplus egg does not automatically reclassify them as firms organising production under uncertainty.\n\n"
        "So the statement is False.",

        "Land planted in vegetables cannot also hold the same square metres of chicken run. The mix is an unavoidable allocation choice under scarce space.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.20": [
        "Firewood for canned food is exchange that meets needs even far from shops.\n\n"
        "So the statement is True.",

        "Avoiding shops does not cancel decisions about time, firewood, and food stocks. Karl still chooses under scarcity.\n\n"
        "So the statement is False.",

        "Claiming “I need nobody” does not create infinite wood, daylight, or energy. Scarcity still binds his daily work.\n\n"
        "So the statement is False.",

        "Forests regenerate slowly and chopping takes time and tools. Remote living does not make timber an unlimited free flow.\n\n"
        "So the statement is False.",

        "Needs, wants, and scarcity apply to people generally.\n\n"
        "A cabin dweller trading with hikers still faces limited daylight for chopping and limited shelf space for cans — formal registration is irrelevant to those constraints.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.21": [
        "The Hoffmanns pay for kitchen wiring as a household; Boris supplies the repair as an entrepreneur.\n\n"
        "So the statement is True.",

        "Electrical repair is labour performed, not a boxed product delivered — a service.\n\n"
        "So the statement is True.",

        "Faulty wiring created a need for a safe working system; paying Boris meets that need through exchange.\n\n"
        "So the statement is True.",

        "Buying groceries that evening, Boris spends as a household with his own family’s needs — roles can switch across the day.\n\n"
        "So the statement is True.",

        "Working hours are finite. Accepting one job means less time for another; Boris must economise across bookings.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.22": [
        "Installing software is an activity performed for the customer. The computer’s physical presence does not turn the install into a good.\n\n"
        "So the statement is True.",

        "An e-book file is a digital good — an item that can be owned and transferred — even though it has no weight. Lack of mass does not force the service label.\n\n"
        "So the statement is False.",

        "Haircuts, repairs, lessons, and installs are exchanged every day between households and firms. Services trade in markets too.\n\n"
        "So the statement is False.",

        "A meal on the premises mixes food with preparation and serving. Calling the whole experience “a good because food is tangible” ignores the service element restaurants sell.\n\n"
        "So the statement is False.",

        "Delivery is an extra service layered onto the pizza. The pizza remains a good; the drop-off does not rewrite its category.\n\n"
        "So the statement is False.",
    ],
    "CASE 2.1.23": [
        "Elena’s violin performance is an activity listeners enjoy — a service.\n\n"
        "So the statement is True.",

        "Paying for atmosphere and music is enjoyment rather than survival — a want.\n\n"
        "So the statement is True.",

        "A tip still swaps money for a performance the listener values.\n\n"
        "Voluntary and unfixed amounts do not cancel exchange; street music funded by coins in a case is still trade of money for a service.\n\n"
        "So the statement is False.",

        "Rent is a personal obligation. Elena’s need to cover it shows individuals face economic needs, not only registered firms.\n\n"
        "So the statement is True.",

        "Sunday hours are limited. Choosing one square over another allocates scarce performing time — economising.\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.24": [
        "The haircut is labour performed — a service. The shampoo bottle is a tangible take-home product — a good.\n\n"
        "So the statement is True.",

        "Paying with money does not force both items into the goods column. Classification follows tangibility and activity, not the payment medium.\n\n"
        "So the statement is False.",

        "Self-employed Timo still needs food, housing, and rest as a person. Standing on the entrepreneur side of a trade does not erase private needs.\n\n"
        "So the statement is False.",

        "Routine six-week visits still use scarce money and chair time. Familiarity does not abolish scarcity.\n\n"
        "So the statement is False.",

        "Paying for the cut or the bottle is still exchange that can meet a need (grooming) or a want (a preferred brand).\n\n"
        "So the statement is True.",
    ],
    "CASE 2.1.25": [
        "Buying groceries is household–firm trade; selling used furniture to a neighbour is household–household trade.\n\n"
        "So the statement is True.",

        "Households trade constantly — shopping, selling used goods, hiring help. Exchange is not an entrepreneur-only privilege.\n\n"
        "So the statement is False.",

        "When each person gives something the other values, barter is exchange.\n\n"
        "So the statement is True.",

        "Most everyday trades need no registered written contract.\n\n"
        "Handshake sales, market-stall cash, and till receipts still count. Requiring government paperwork would erase nearly all ordinary exchange from the definition.\n\n"
        "So the statement is False.",

        "A mobile-app transfer moves purchasing power just as coins or banknotes do. The medium changes; the exchange does not.\n\n"
        "So the statement is True.",
    ],
}


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    by_id = {c["case_id"]: c for c in data}
    missing = [cid for cid in REWRITES if cid not in by_id]
    if missing:
        raise SystemExit(f"Missing cases: {missing}")

    blockers: list[str] = []
    for cid, expls in REWRITES.items():
        case = by_id[cid]
        if len(expls) != 5:
            raise SystemExit(f"{cid}: expected 5 explanations, got {len(expls)}")
        keys = case["answer_key"]
        for i, (expl, key) in enumerate(zip(expls, keys)):
            expected = "True" if key in (True, "True", "true") else "False"
            ending = f"So the statement is {expected}."
            if not expl.rstrip().endswith(ending):
                raise SystemExit(f"{cid} {chr(65+i)}: bad ending (want {ending!r})")
            for bad in (
                "TRUE —",
                "FALSE —",
                "tied to buyer type",
                "whichever the stem",
                "Walk the claim",
                "Definition letters live",
                "The claim about",
            ):
                if bad in expl:
                    raise SystemExit(f"{cid} {chr(65+i)}: forbidden phrase {bad!r}")
        # length variation check: at least short vs longer within case
        lens = sorted(len(e.split()) for e in expls)
        if lens[-1] - lens[0] < 8:
            blockers.append(f"{cid}: low length variation {lens}")
        case["tactical_explanations"] = expls

    # known mismatch note
    blockers.append(
        "CASE 2.1.06 C: statement reads pedagogically True but answer_key is False "
        "(unchanged per brief; closer matches key)."
    )

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Rewrote {len(REWRITES)} cases.")
    for b in blockers:
        print("BLOCKER:", b)


if __name__ == "__main__":
    main()
