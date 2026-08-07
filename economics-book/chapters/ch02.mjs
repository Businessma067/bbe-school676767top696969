export default {
  num: 2,
  title: "Basic economic concepts",
  intro:
    "Every purchase, every job offer, and every business idea sits inside the same system: people exchanging scarce resources. This chapter is your map of that system. You will move from everyday exchange, through scarcity and opportunity cost, into how economies organise decisions, how markets clear, and why competition matters. Treat each section as a station on one path — Scene to Idea to Mechanism — until the exam language starts to feel familiar.",
  objectives: [
    "Explain how households and businesses participate in exchange, and define what counts as a business.",
    "Apply scarcity and opportunity cost to household, firm, and government choices — without confusing scarcity with poverty.",
    "Distinguish microeconomics from macroeconomics as two lenses on the same scarcity problem.",
    "Trace the circular flow among households, businesses, and government, and explain how specialisation and division of labour raise productivity.",
    "Compare market, planned, and mixed systems by who decides what, how, and for whom.",
    "Use supply, demand, ceteris paribus, equilibrium, surplus/shortage, and competition to reason about market outcomes.",
  ],
  sections: [
    {
      id: "2.1",
      title: "You are already in the economy",
      blocks: [
        {
          type: "scene",
          title: "Saturday at the campus gate",
          text: "Mira sells repaired second-hand bikes from a fold-out stand near the tram stop. Students pay cash or card for a tuned bike; Mira pays a workshop for spare parts and rents storage for the winter. Across the street, a household buys tram tickets, groceries, and streaming. Nobody here is \"studying economics\" in the moment — yet every exchange is the economy at work.",
        },
        {
          type: "idea",
          term: "Business",
          text: "A business is an entity that offers goods and/or services to customers. It does not produce mainly for the owner's private household alone; it serves customers, and it usually charges a price (or another payment) so something of value comes back.",
        },
        {
          type: "idea",
          term: "Exchange",
          text: "Exchange is the handing over of goods, services, money, or other means of payment so that needs and wants can be met. Money makes exchange easier, but barter (bike-repair lessons for homemade bread) still counts as exchange.",
        },
        {
          type: "mechanism",
          title: "Three everyday roles",
          text: "Households supply labour and buy goods and services. Businesses supply goods and services and buy inputs (labour, materials, equipment). People can hold both roles at once: Mira is a household member when she buys food, and an entrepreneur when she sells bikes. Businesses also have needs — a bike shop needs tyres, tools, and skilled repair hours.",
        },
        {
          type: "p",
          text: "Needs are the basics people require for living and functioning (food, shelter, transport, care). Wants stretch beyond that into preferred extras (a designer helmet, a café brunch). Economics studies both, because scarce budgets force ranking across both categories.",
        },
        {
          type: "worked",
          title: "Is this a business?",
          steps: [
            "Case A: A student occasionally fixes friends' bikes for free. No customers, no price — helpful, but not operating as a business for customers.",
            "Case B: The same student advertises on campus, charges 25 euros per tune-up, and buys parts to resell as part of the service. Goods/services are offered to customers for payment.",
            "Case C: Two neighbours swap tomatoes for jam. That is exchange, but neither party is running a business unless they systematically offer produce to customers.",
          ],
          result: "Only Case B clearly matches the business definition used in this course.",
        },
        {
          type: "think",
          prompt: "Name one good and one service you bought this week. For each, who was the household side and who was the business side of the exchange?",
        },
        {
          type: "trap",
          text: "Trap: \"If I do not run a company, I am outside the economy.\" False. Buying, working, saving, and even choosing not to spend are economic decisions. There is no opting out.",
        },
        {
          type: "exam",
          text: "Exam recognition: statements that restrict exchange to money only, or that claim only entrepreneurs participate, are usually false. Watch absolute words (never, only, always). Barter and household purchases still count.",
        },
        {
          type: "bullets",
          items: [
            "Resources are not available in unlimited abundance.",
            "Scarcity forces economising — managing limited means among competing uses.",
            "Households, businesses, and governments all face that pressure.",
          ],
        },
        {
          type: "takeaways",
          items: [
            "You enter the economy as a household long before you found a firm.",
            "A business serves customers with goods/services, usually for a price.",
            "Exchange — monetary or barter — is the connective tissue of the economy.",
          ],
        },
        {
          type: "check",
          items: [
            "Can a volunteer soup kitchen still involve economic decisions even if meals are free to guests?",
            "Does charging a price turn every hobby into a business? What else is required?",
          ],
        },
      ],
    },

    {
      id: "2.2",
      title: "Scarcity and opportunity cost",
      blocks: [
        {
          type: "scene",
          title: "One Saturday, two offers",
          text: "Leila can work a café shift that pays 48 euros for the afternoon, or photograph a local sports final that pays 40 euros but builds her portfolio. She cannot do both. The clock is the scarce resource; the choice is the economics.",
        },
        {
          type: "idea",
          term: "Scarcity",
          text: "Scarcity means resources are limited while needs and wants pull in many directions. Time, money, machines, materials, and attention all run out. Scarcity forces allocation choices for households, businesses, and governments alike.",
        },
        {
          type: "idea",
          term: "Opportunity cost",
          text: "Opportunity cost is the benefit of the next-best alternative forgone when you choose something else. It is not the sum of every rejected option — only the single best option you actually gave up.",
        },
        {
          type: "mechanism",
          title: "Why scarcity creates cost even without a receipt",
          text: "When you pick option A, option B's benefit disappears. That lost benefit is the opportunity cost. A founder who \"pays herself zero\" still forgoes the salary she could have earned elsewhere. A city that resurfaces a road forgoes the rail link it could have funded with the same budget.",
        },
        {
          type: "formula",
          label: "Opportunity cost (decision rule)",
          text: "Opportunity cost of choosing A = benefit of the next-best alternative B that is given up",
          vars: "A = chosen option; B = best realistic alternative left behind (not every rejected dream).",
        },
        {
          type: "compare",
          title: "Scarcity versus poverty",
          left: {
            title: "Scarcity",
            items: [
              "Universal condition: limited means vs competing uses",
              "Applies to wealthy households and rich countries too",
              "Forces trade-offs even when income is high",
            ],
          },
          right: {
            title: "Poverty",
            items: [
              "Severe lack of means relative to basic needs",
              "A social and material condition, not the definition of scarcity",
              "Poverty implies scarcity; scarcity does not imply poverty",
            ],
          },
        },
        {
          type: "worked",
          title: "Next-best, not all-rejected",
          steps: [
            "Sara has 700 euros for one purchase: a used laptop (benefit she values highly for study) or a washing machine (next-best, valued for saving laundrette fees).",
            "She buys the laptop.",
            "Opportunity cost = benefit of the washing machine forgone — not laptop price + washer price, and not every other item she once considered.",
          ],
          result: "Opportunity cost tracks the next-best path, not a shopping-list total.",
        },
        {
          type: "worked",
          title: "Self-employment salary trap",
          steps: [
            "Omar can earn 32,000 euros a year as an employed bike mechanic.",
            "He starts a repair stall and draws no formal wage in year one.",
            "The accounting wage may show 0, but the opportunity cost of his time is (at least) the 32,000 euros employment package he refused.",
          ],
          result: "Zero cash wage ≠ zero opportunity cost.",
        },
        {
          type: "think",
          prompt: "If Leila chooses the photography gig, what is her opportunity cost — the 48-euro café pay, the fun of both, or the sum of every weekend plan she skipped?",
        },
        {
          type: "trap",
          text: "Trap 1: Adding up all rejected options. Trap 2: Saying \"free\" activities have no opportunity cost. Trap 3: Equating scarcity with poverty so that high-income actors \"do not face scarcity.\"",
        },
        {
          type: "exam",
          text: "Exam recognition: true statements usually name the forgone next-best benefit. False statements often claim zero cost because no money moved, or treat opportunity cost as the price of the item bought, or as the sum of all alternatives.",
        },
        {
          type: "connect",
          text: "Scarcity → forced choice → opportunity cost. Later sections show the same logic inside markets (what suppliers forgo when prices are low) and inside government budgets (one project crowds out another).",
        },
        {
          type: "takeaways",
          items: [
            "Scarcity is universal; poverty is not the same idea.",
            "Opportunity cost = next-best alternative's benefit forgone.",
            "Households, firms, and governments all allocate limited resources.",
          ],
        },
        {
          type: "check",
          items: [
            "A student studies instead of earning 45 euros at a car wash. What is the opportunity cost?",
            "Why can a millionaire still face scarcity when planning a weekend?",
          ],
        },
      ],
    },

    {
      id: "2.3",
      title: "What economics studies",
      blocks: [
        {
          type: "scene",
          title: "Two headlines, two lenses",
          text: "Headline A: \"Local bakery raises pastry prices after butter costs jump.\" Headline B: \"National unemployment falls while inflation edges up.\" Same economy, different zoom levels. Economics is the toolkit that explains both kinds of story.",
        },
        {
          type: "idea",
          term: "Economics",
          text: "Economics studies how individuals (in households) and businesses make decisions to satisfy needs and wants with limited resources. It builds theories to explain observed behaviour and to make careful predictions.",
        },
        {
          type: "mechanism",
          title: "Two branches, one scarcity problem",
          text: "Microeconomics zooms to units: one household, one firm, one market interaction (for example, how demand for e-bikes changes if buyers receive a purchase bonus). Macroeconomics zooms to aggregates: growth, unemployment, interest rates, the overall price level and inflation for a country or similar whole.",
        },
        {
          type: "table",
          caption: "Microeconomics versus macroeconomics",
          headers: ["Lens", "Focus", "Typical questions", "Example objects"],
          rows: [
            [
              "Microeconomics",
              "Individual households and businesses and how they interact",
              "How does one market respond to a subsidy, tax, or preference shift?",
              "One firm's pricing; demand for tutoring hours; a household budget choice",
            ],
            [
              "Macroeconomics",
              "The overall economy and aggregate quantities",
              "What is happening to national output, jobs, or inflation?",
              "GDP growth; unemployment rate; interest rates; consumer price inflation",
            ],
          ],
        },
        {
          type: "worked",
          title: "Classify the question",
          steps: [
            "\"Will more cafés open on this street if rents fall?\" → micro (local firms and a local market).",
            "\"Did the country's average price level rise by 2% this year?\" → macro (aggregate inflation).",
            "\"How does one robotics start-up allocate its seed funding?\" → micro (one business), even if the euro amounts are large.",
          ],
          result: "Scale of money alone does not decide micro vs macro — the unit of analysis does.",
        },
        {
          type: "think",
          prompt: "Is \"a government raises the minimum wage and one supermarket's hiring plan changes\" micro, macro, or a bridge between both? Name which part is which.",
        },
        {
          type: "trap",
          text: "Trap: Labelling anything involving government as automatically macro. Government can appear in micro (a tax on one product) and in macro (national fiscal stance). Trap: Calling a single expensive purchase \"macro\" because the price tag is large.",
        },
        {
          type: "exam",
          text: "Exam recognition: match the statement to the unit of analysis. Words like inflation, unemployment, growth, and national price level lean macro. One buyer, one seller, one product market lean micro.",
        },
        {
          type: "connect",
          text: "Section 2.2 gave you scarcity and opportunity cost — the shared engine. Section 2.3 names the science that studies those decisions at two scales. Markets (2.6) are mostly a micro stage; inflation talk later links to macro aggregates.",
        },
        {
          type: "takeaways",
          items: [
            "Economics = decisions under limited resources.",
            "Micro = units and their interaction; macro = aggregates.",
            "Theories aim to explain and predict, not merely describe.",
          ],
        },
        {
          type: "check",
          items: [
            "Give one original micro question and one original macro question about the same city.",
            "Why is \"all government activity is macro\" too strong?",
          ],
        },
      ],
    },

    {
      id: "2.4",
      title: "Circular flow, money, and specialisation",
      blocks: [
        {
          type: "scene",
          title: "Pay day and pizza night",
          text: "On Friday, workers receive wages from firms. On Saturday, those same people spend part of the wages on pizzas, tram rides, and phone plans. Firms use the sales revenue to pay suppliers and next week's wages. Public authorities collect taxes and fund streets, schools, and security. The loop never really stops — it is a circular flow.",
        },
        {
          type: "idea",
          term: "Circular flow",
          text: "Households mainly offer labour and receive wages; businesses offer goods and services and receive payment. Government levies taxes and provides goods, services, transfers, and subsidies. Together these streams form a circular flow of goods, services, and money.",
        },
        {
          type: "figure",
          id: "circular-flow",
          caption: "Circular flow: households, businesses, and government exchanging labour, goods/services, taxes, transfers, and money payments.",
        },
        {
          type: "mechanism",
          title: "Why money beats pure barter",
          text: "Without money, trade needs a double coincidence of wants — each party must want what the other offers at the same time. Money works as a medium of exchange (flexibility), a unit of account (expressing value), and a store of value (holding purchasing power over time). Those functions work best when money's value stays reasonably stable.",
        },
        {
          type: "p",
          text: "When the general price level rises (inflation), the same money buys fewer goods and services — purchasing power falls. Price indexes measure that rise. Very high inflation erodes trust in money as a store of value; people try to spend it quickly. Low, stable inflation is more compatible with money doing its job.",
        },
        {
          type: "mechanism",
          title: "Government in the loop",
          text: "Public authorities tax households and businesses, then provide infrastructure, defence, police, and often large parts of health care and education. Some goods are hard for private firms to sell profitably because free riders cannot be excluded from enjoying them — so government provision financed by taxation fills the gap.",
        },
        {
          type: "idea",
          term: "Division of labour and specialisation",
          text: "Exchange lets people and firms concentrate on what they do best instead of producing everything themselves. Specialisation appears inside households, inside firms (departments), between firms on the same or different production stages, across sectors, and across countries with different resources and know-how.",
        },
        {
          type: "bullets",
          items: [
            "Household level: one person shops, another cooks — each focuses.",
            "Firm level: procurement, production, sales, accounting, HR as distinct tasks.",
            "Between firms: wood → boards → furniture → retail, or narrow product niches.",
            "International level: different climates, resources, labour costs, and legal frameworks shape who produces what.",
          ],
        },
        {
          type: "worked",
          title: "From self-sufficiency to trade",
          steps: [
            "Without trade, a household must grow food, sew clothes, repair bikes, and teach itself every skill — slow and inefficient.",
            "With money and markets, the household sells labour hours and buys specialised goods/services.",
            "A bike shop specialises in repairs; a bakery specialises in bread; both gain from focusing.",
          ],
          result: "Specialisation raises output and variety — but ties people to exchange networks.",
        },
        {
          type: "think",
          prompt: "If your country suddenly could not import any electronics, which specialisation advantages would vanish first for local retailers — and what new opportunity costs would appear?",
        },
        {
          type: "trap",
          text: "Trap: Treating specialisation as only upside. Highly specialised work can become boring; skills may be hard to redeploy; a firm brilliant in one niche is exposed if that niche collapses.",
        },
        {
          type: "exam",
          text: "Exam recognition: circular-flow items often test who pays whom (wages vs taxes vs purchases). Money-function items test medium of exchange / unit of account / store of value. Specialisation items test efficiency gains and the flexibility risk.",
        },
        {
          type: "connect",
          text: "Circular flow is the stage. Economic systems (next section) decide how much of that stage is directed by markets versus by planners. Supply and demand (2.6) explain prices inside the market channels of the flow.",
        },
        {
          type: "takeaways",
          items: [
            "Households, businesses, and government form interlocking flows of real goods/services and money.",
            "Money eases exchange; inflation weakens purchasing power.",
            "Division of labour enables specialisation — with efficiency gains and flexibility costs.",
          ],
        },
        {
          type: "check",
          items: [
            "Sketch three arrows: labour, wages, and a tax payment. Who sends each arrow?",
            "Name one advantage and one disadvantage of deep specialisation for a worker.",
          ],
        },
      ],
    },

    {
      id: "2.5",
      title: "Economic systems: who decides?",
      blocks: [
        {
          type: "scene",
          title: "Three ways to allocate steel",
          text: "Imagine a tonne of steel. In System A, private firms bid and households' spending patterns pull production toward cars or bridges. In System B, a planning office assigns the tonne to a factory list. In System C, markets do most of the steering, but government taxes, regulates, and funds social and environmental goals. Same scarce steel — different decision rights.",
        },
        {
          type: "idea",
          term: "Economic system",
          text: "An economic system answers the allocation questions: what is produced, how it is produced, and for whom — by assigning decision power to markets, to planners, or to a mix of both.",
        },
        {
          type: "mechanism",
          title: "Market, planned, mixed",
          text: "In a market economy, individuals and businesses make many of their own economic decisions; prices and private ownership play a large role. In a planned system, government mainly or partly decides which goods and services are offered (and often at which prices) and controls resources and means of production; job and product choice for people is more limited. Most real countries sit somewhere in between as mixed systems: markets allocate widely, while government sets legal frameworks and may support the poor, protect the environment, or provide major public services (sometimes called social or eco-social market economies when the mix is deliberate).",
        },
        {
          type: "figure",
          id: "economic-systems",
          caption: "Spectrum of economic systems: planned coordination at one end, freer market coordination at the other, with mixed systems in between.",
        },
        {
          type: "table",
          caption: "Comparing economic systems by decision rights",
          headers: [
            "Question",
            "Market-leaning",
            "Planned-leaning",
            "Mixed (typical modern case)",
          ],
          rows: [
            [
              "What is produced?",
              "Largely guided by demand, prices, and private profit/opportunity",
              "Mainly set by government plans and targets",
              "Markets dominate many goods; public priorities steer others",
            ],
            [
              "How is it produced?",
              "Firms choose methods and organise resources",
              "Authorities control resources and production means (mainly/partly)",
              "Private methods plus regulation, standards, and public providers",
            ],
            [
              "For whom?",
              "Income and market exchange shape access",
              "Allocation and rationing more centrally directed; limited consumer/job choice",
              "Markets distribute much; taxes/transfers and public services reshape access",
            ],
            [
              "Government role",
              "Can be thin (legal framework) in freer variants",
              "Dominant in production and resource control",
              "Active but not total — legal rules, social goals, environment, public goods",
            ],
          ],
        },
        {
          type: "worked",
          title: "Label the system signal",
          steps: [
            "Signal 1: Private cafés freely set menus and prices; customers walk away if unhappy → market mechanism.",
            "Signal 2: A ministry assigns quarterly output quotas and fixed retail prices for staples → planned mechanism.",
            "Signal 3: Private firms compete, but government funds schools, taxes pollution, and runs a safety net → mixed.",
          ],
          result: "Judge by who holds the decision rights on what/how/for whom — not by slogans alone.",
        },
        {
          type: "think",
          prompt: "If a country privatises shops but still sets fuel prices and owns the railways, which column of the comparison table is it drifting toward — and which decisions remain planned?",
        },
        {
          type: "trap",
          text: "Trap: Treating \"market economy\" as zero government. Even freer market systems rely on law. Trap: Assuming every mixed economy is identical — the mix can be light or heavy.",
        },
        {
          type: "exam",
          text: "Exam recognition: map each statement onto what / how / for whom. Transformation stories (former planned systems adopting market principles) test whether you notice a shift in decision rights, not a change in geography alone.",
        },
        {
          type: "connect",
          text: "Systems set the rules of the game. Markets (next) are the coordination device that market-leaning and mixed systems use for many goods and services.",
        },
        {
          type: "takeaways",
          items: [
            "Systems differ by who decides what, how, and for whom.",
            "Planned systems centralise; market systems decentralise; mixed systems combine.",
            "Real economies usually mix market allocation with public roles.",
          ],
        },
        {
          type: "check",
          items: [
            "Write one sentence that would only be true in a strongly planned system.",
            "Why is \"no government\" a poor description of a market economy?",
          ],
        },
      ],
    },

    {
      id: "2.6",
      title: "Supply, demand, and market equilibrium",
      blocks: [
        {
          type: "scene",
          title: "The 8 p.m. tutoring slot",
          text: "Parents message tutors for evening maths help. At low hourly rates, many families want hours but few skilled tutors bother to log on. At very high rates, tutors flood the platform, but fewer families book. Somewhere in the middle, the hours people want line up with the hours tutors offer. That meeting point is the market at work.",
        },
        {
          type: "idea",
          term: "Market",
          text: "A market is where buyers and sellers communicate the terms of exchange. It can be a physical place (a flea market) or virtual (an online platform), and it can specialise (labour, housing, money, capital, commodities, consumer goods).",
        },
        {
          type: "idea",
          term: "Supply",
          text: "Supply is the quantity of a good or service available for purchase. For most goods, a higher price raises the quantity supplied, ceteris paribus — the law of supply. Capacity, resources, and opportunity cost of the seller's time all matter.",
        },
        {
          type: "idea",
          term: "Demand",
          text: "Demand is the quantity customers are willing and able to buy. For most goods, a higher price lowers quantity demanded, ceteris paribus — the law of demand. Willingness to pay links to the utility (satisfaction) people get from the good or service.",
        },
        {
          type: "idea",
          term: "Ceteris paribus",
          text: "Latin shorthand for \"all other things held constant.\" Supply and demand laws isolate the price–quantity link while freezing other influences. When those other influences change, curves shift.",
        },
        {
          type: "mechanism",
          title: "Why the supply curve slopes up",
          text: "Higher prices pull more sellers in and encourage more hours from existing sellers. Opportunity cost explains the floor: if tutoring paid less than a tutor's next-best use of time, skilled people leave. Rising marginal cost — the extra cost of one more unit — also pushes firms to need a higher price before expanding output.",
        },
        {
          type: "figure",
          id: "supply-curve",
          caption: "Supply curve for online maths tutoring (illustrative): price (euros per hour) on the vertical axis, quantity (hours per week) on the horizontal axis — upward sloping.",
        },
        {
          type: "mechanism",
          title: "Why the demand curve slopes down",
          text: "As price rises, more buyers cannot or will not pay; they cut hours or switch to substitutes (group classes, apps, self-study). As price falls, quantity demanded rises. Price and quantity demanded move in opposite directions, ceteris paribus.",
        },
        {
          type: "figure",
          id: "demand-curve",
          caption: "Demand curve for online maths tutoring (illustrative): higher price, lower quantity demanded — downward sloping.",
        },
        {
          type: "formula",
          label: "Market equilibrium condition",
          text: "Equilibrium: quantity demanded = quantity supplied at the equilibrium (market) price",
          vars: "At that price there is neither surplus (Qs > Qd) nor shortage (Qd > Qs).",
        },
        {
          type: "figure",
          id: "equilibrium",
          caption: "Supply and demand together: intersection is equilibrium price and quantity. Above it, surplus; below it, shortage.",
        },
        {
          type: "table",
          caption: "Illustrative tutoring market schedule (original numbers)",
          headers: [
            "Price (euros/hour)",
            "Quantity demanded (hours/week)",
            "Quantity supplied (hours/week)",
            "Market signal",
          ],
          rows: [
            ["18", "620", "200", "Shortage — Qd > Qs"],
            ["24", "500", "320", "Shortage"],
            ["30", "400", "400", "Equilibrium"],
            ["36", "300", "480", "Surplus — Qs > Qd"],
            ["42", "220", "560", "Surplus"],
          ],
        },
        {
          type: "worked",
          title: "Reading the tutoring schedule",
          steps: [
            "At 30 euros, Qd = Qs = 400 hours → equilibrium price and quantity.",
            "At 36 euros, tutors offer 480 hours but families only want 300 → surplus of 180 hours; pressure for price to ease downward.",
            "At 18 euros, families want 620 hours but only 200 are offered → shortage of 420 hours; pressure for price to rise.",
          ],
          result: "Disequilibrium creates surplus or shortage; equilibrium balances both sides.",
        },
        {
          type: "compare",
          title: "Movement along a curve versus a shift",
          left: {
            title: "Movement along",
            items: [
              "Caused by a change in the good's own price",
              "Slide to a new point on the same curve",
              "Example: tutoring fee falls from 36 to 30 → move along demand to a higher quantity",
            ],
          },
          right: {
            title: "Shift of the curve",
            items: [
              "Caused by a non-price determinant (ceteris paribus breaks)",
              "Whole curve moves left or right",
              "Example: household incomes rise → demand shifts right at every price",
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Demand shifters include: income, preferences, complementary goods, and substitutes.",
            "Supply shifters include: number of suppliers, technology, resource prices, and price expectations.",
            "A rightward demand shift (other things equal) tends to raise equilibrium price and quantity; a rightward supply shift tends to lower price and raise quantity.",
          ],
        },
        {
          type: "worked",
          title: "Shift detective",
          steps: [
            "Parents' incomes rise and they book more tutoring at each price → demand curve shifts right.",
            "A new app trains more tutors quickly → supply curve shifts right.",
            "Only the platform's listed hourly fee changes, preferences unchanged → movement along the curves, not a shift story.",
          ],
          result: "Ask: did the own-price change, or did a background condition change?",
        },
        {
          type: "p",
          text: "The same logic helps explain a classic inflation story: if the quantity of money rises and people can spend more, demand for goods can increase; if goods available do not rise in step, prices climb (\"too much money chasing too few goods\"). Raising the price of borrowing money (interest rates) can cool spending and ease price pressure — a bridge from micro curves to a macro outcome.",
        },
        {
          type: "think",
          prompt: "Before looking back at the table: if a celebrity endorses online tutoring and preferences strengthen, does the demand curve shift, or do we merely move along it? Predict the direction of equilibrium price.",
        },
        {
          type: "trap",
          text: "Trap: Calling every change a \"shift.\" Own-price changes cause movements along a curve. Trap: Mixing surplus with shortage language. Trap: Ignoring ceteris paribus — then \"laws\" look broken when a second variable moved.",
        },
        {
          type: "exam",
          text: "Exam recognition: draw or imagine the graph. Identify whether price changed (along) or a determinant changed (shift). At a stated price, compare Qd and Qs to name surplus or shortage. Equilibrium is the intersection story, not \"any price sellers like.\"",
        },
        {
          type: "connect",
          text: "Opportunity cost (2.2) explains why supply dries up at low prices. Circular flow (2.4) is where these market trades sit. Competition (2.7) changes how much power sellers have over the price you just analysed.",
        },
        {
          type: "takeaways",
          items: [
            "Law of supply: higher price → higher quantity supplied (ceteris paribus).",
            "Law of demand: higher price → lower quantity demanded (ceteris paribus).",
            "Equilibrium equates Qd and Qs; other prices create surplus or shortage.",
            "Own-price → movement along; other factors → shift.",
          ],
        },
        {
          type: "check",
          items: [
            "Using the table, what is the surplus at 42 euros per hour?",
            "Name one event that shifts tutoring supply left, and state what happens to equilibrium price if demand is unchanged.",
          ],
        },
      ],
    },

    {
      id: "2.7",
      title: "Competition in the market",
      blocks: [
        {
          type: "scene",
          title: "One kiosk on the summit",
          text: "After a steep hike, there is a single hut selling soup. Hikers pay because walking another hour for alternatives is painful. Down in the town, five coffee shops sit on one street — a price rise at one shop sends customers next door. Same product category, very different competitive heat.",
        },
        {
          type: "idea",
          term: "Competition",
          text: "The intensity of competition rises when more suppliers sell in the market and when substitute goods are easy to find. More rivals and closer substitutes mean less room for any one seller to dictate terms.",
        },
        {
          type: "mechanism",
          title: "From monopoly toward many sellers",
          text: "One supplier → monopoly (rare in pure form, but possible for a national railway or a local-only seller such as the only bar inside a theatre). A few large suppliers → oligopoly (telecoms, car makers); rivals watch each other closely, and illegal cartels that fix terms to kill competition are generally not allowed. Many buyers and sellers with no single player able to set the price → the theoretical benchmark of perfect competition.",
        },
        {
          type: "bullets",
          items: [
            "Perfect competition (theoretical checklist): full information for all players; free entry and exit; no personal preferences — goods are replaceable across sellers.",
            "Real markets seldom match the checklist perfectly; standardised goods (for example some agricultural products) can come closer.",
            "Even with fewer sellers, rivalry can still be fierce if competitors react aggressively.",
          ],
        },
        {
          type: "compare",
          title: "Competitive pressure at a glance",
          left: {
            title: "Weaker competition",
            items: [
              "Few suppliers (or one)",
              "Weak substitutes",
              "Local captive demand (summit hut, theatre bar)",
              "Seller has more pricing room",
            ],
          },
          right: {
            title: "Stronger competition",
            items: [
              "Many suppliers",
              "Close substitutes available",
              "Easy for buyers to switch",
              "Laws often aim to protect this rivalry for customers' benefit",
            ],
          },
        },
        {
          type: "worked",
          title: "Rank the competitive pressure",
          steps: [
            "Case 1: Only platform licensed to run city trams → monopoly-like.",
            "Case 2: Four mobile networks, each watching the others' tariffs → oligopoly.",
            "Case 3: Dozens of nearly identical grain sellers with easy entry → nearer to perfect competition.",
            "Case 4: Tutoring apps multiply and video courses substitute live hours → competition intensifies via suppliers and substitutes.",
          ],
          result: "Count suppliers and check substitutes before you label the market form.",
        },
        {
          type: "think",
          prompt: "A village has two bakeries. A supermarket opens with fresh bread daily. Which competition driver changed more — number of suppliers, or availability of substitutes — and what happens to each bakery's pricing room?",
        },
        {
          type: "trap",
          text: "Trap: Assuming monopoly is common. Course stance: monopolies are rare in market economies, though local monopoly-like pockets exist. Trap: Treating oligopoly as \"no competition\" — rivalry can be intense. Trap: Calling any agreement among rivals harmless; cartel-style agreements are usually illegal.",
        },
        {
          type: "exam",
          text: "Exam recognition: if the stem adds suppliers or substitutes, competition rises. If it isolates a single local seller with no nearby alternative, think monopoly-like power. Perfect competition answers usually need the theoretical conditions, not just \"many shops.\"",
        },
        {
          type: "connect",
          text: "Competition shapes the supply side you drew in 2.6. Weak competition can hold price above a more rivalrous outcome; strong competition disciplines sellers — which is why policy often protects rivalry.",
        },
        {
          type: "takeaways",
          items: [
            "More suppliers and better substitutes → stronger competition.",
            "Monopoly is rare; local monopoly-like situations still matter.",
            "Oligopoly: few large players; cartels that suppress competition are generally illegal.",
            "Perfect competition is a strict theoretical benchmark rarely met in full.",
          ],
        },
        {
          type: "check",
          items: [
            "Why might a theatre bar have pricing power even if the city has hundreds of bars?",
            "List two conditions from the perfect-competition checklist.",
          ],
        },
      ],
    },
  ],
  recap: [
    "Households and businesses exchange to meet needs and wants; a business offers goods/services to customers, usually for a price — and nobody fully opts out of economic decisions.",
    "Scarcity forces allocation; opportunity cost is the next-best alternative forgone; scarcity is not the same as poverty.",
    "Economics studies decisions under limited resources; micro looks at units and interactions, macro at aggregates such as growth, unemployment, and inflation.",
    "Circular flow links households, businesses, and government; money eases exchange; division of labour enables specialisation with efficiency gains and flexibility risks.",
    "Market, planned, and mixed systems differ by who decides what is produced, how, and for whom.",
    "Supply and demand (ceteris paribus) meet at equilibrium; own-price causes movements along curves, other factors shift them; surplus and shortage flag disequilibrium; more suppliers and substitutes intensify competition, while pure monopoly remains rare.",
  ],
};
