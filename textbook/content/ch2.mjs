export default {
  num: 2,
  title: "Basic economic concepts",
  intro:
    "Chapter 2 builds the shared language of economics that every BBE applicant needs. You already participate in the economy every day—when you buy food, use public transport, work a part-time job, or choose how to spend limited study time. Those everyday acts are not side notes to “real” economics; they are the starting point. Economics exists because resources are scarce, choices therefore become unavoidable, and exchanging goods and services links households, businesses and government into one system.\n\nThis chapter moves from participation and scarcity to the circular flow, money, economic systems, and the market mechanisms of supply and demand. It ends with how competition shapes what buyers face. The goal is not memorising slogans, but owning precise terms—scarcity, opportunity cost, microeconomics, macroeconomics, ceteris paribus, equilibrium, monopoly, oligopoly, perfect competition—so that exam statements become readable and defensible. Read for understanding first; then practise distinguishing movements along a curve from shifts of a curve, and planned from market systems.",

  sections: [
    {
      id: "2.1",
      title: "Being part of the economy",
      blocks: [
        {
          type: "p",
          text: "An economy is the system in which people and organisations produce, distribute and exchange goods and services to satisfy needs and wants. You do not join the economy only when you found a company. As a member of a private household you already demand food, housing, education, healthcare, entertainment and transport. At the same time you may supply labour, skills, savings or ideas. That dual role—buyer and seller of resources—makes almost everyone an active participant.",
        },
        {
          type: "definition",
          term: "Business",
          text: "A business is an entity that offers goods and/or services to customers, usually in exchange for money or another means of payment. It produces primarily for customers rather than only for the owners’ private household needs.",
        },
        {
          type: "definition",
          term: "Economy",
          text: "The economy is the overall system of production, exchange and consumption through which households, businesses and public authorities interact to meet needs and wants.",
        },
        {
          type: "p",
          text: "Households and businesses depend on each other. Households need goods and services that most people cannot produce efficiently alone. Businesses need customers, workers, raw materials and often credit. Private persons may also exchange with each other—selling a used bicycle, renting a room, or swapping garden produce—without a formal firm involved. Those private exchanges still belong to economic life because scarcity, valuation and mutual benefit remain present.",
        },
        {
          type: "p",
          text: "Businesses themselves have needs. A bakery needs flour, energy, staff and premises. A software studio needs hardware, cloud services, designers and clients. One firm’s output often becomes another firm’s input. Chains of interdependence are therefore normal: mining or farming feeds manufacturing, manufacturing feeds wholesale and retail, and services wrap around almost every stage.",
        },
        {
          type: "p",
          text: "Because wants tend to outrun what is freely available, exchanging would only be trivial in a world of unlimited abundance. That world does not exist. Resources must be managed; choices must be ranked. Economising—using limited means carefully—is not an optional lifestyle tip. No household, no firm and no government can opt out of economic decisions entirely.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "A student works evenings in a café and spends wages on rent, food and a language course. She is already part of the economy as a labour supplier and as a consumer. If she later opens a tutoring service for secondary-school pupils, she still remains a household member who buys transport and phones, but she additionally becomes an entrepreneur supplying education services. Both roles belong to the same economic system; only the mix of activities changes.",
        },
        {
          type: "application",
          title: "In practice",
          text: "When analysing any exam scenario, ask who is demanding and who is supplying. A hospital demands nurses and medical equipment; patients demand healthcare; pharmaceutical firms supply medicines. Mapping roles prevents the common mistake of treating “the economy” as something that happens only in stock markets.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Do not claim that only entrepreneurs are part of the economy. Employees, students who buy services, pensioners who consume goods, and taxpayers who fund public goods are all participants.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "A business is not defined by legal form alone. What matters for Chapter 2 is the economic function: offering goods or services to customers rather than producing only for oneself.",
        },
        {
          type: "statement",
          claim: "Private households can be part of the economy even if they never found a business.",
          answer: true,
          why: "Households demand goods and services and often supply labour and saving; participation does not require entrepreneurship.",
        },
        {
          type: "statement",
          claim: "If someone is not self-employed, they stand outside the economy.",
          answer: false,
          why: "Employment, consumption and taxation all place a person inside economic relationships.",
        },
        {
          type: "takeaways",
          items: [
            "Everyone who produces, exchanges or consumes participates in the economy.",
            "Businesses exist to serve customers and usually charge a price for goods or services.",
            "Interdependence between households and firms is the normal structure of economic life.",
            "Because resources are scarce, economising cannot be avoided.",
          ],
        },
      ],
    },

    {
      id: "2.2",
      title: "Scarcity of resources and opportunity cost",
      blocks: [
        {
          type: "p",
          text: "Scarcity means that resources available to meet goals are limited relative to wants. A bakery has only so many ovens and workers. A household has only so much income and time. A government has only so much tax revenue and borrowing capacity in a period. Scarcity forces allocation: deciding which uses win and which are postponed or rejected.",
        },
        {
          type: "definition",
          term: "Scarcity",
          text: "Scarcity is the basic condition that resources are limited while needs and wants are effectively unlimited, so choices about allocation become necessary.",
        },
        {
          type: "definition",
          term: "Opportunity cost",
          text: "Opportunity cost is the benefit of the next-best alternative that is given up when a choice is made. It is measured not only in money but also in time, comfort, risk or other valued outcomes of the forgone option.",
        },
        {
          type: "p",
          text: "Every serious decision has a next-best alternative. Choosing to spend Saturday revising accounting rather than working an extra shift has an opportunity cost in wages not earned (and possibly in leisure for gone). Choosing to invest savings in a van for deliveries rather than leaving the money in a low-risk account means giving up interest and safety. Opportunity cost is therefore the economist’s way of making trade-offs visible.",
        },
        {
          type: "p",
          text: "For firms, scarce resources include machines, materials, skilled staff, floor space and finance. Managers must decide what to produce, how to produce it, and for whom—classic allocation questions. For households, scarce resources include income, attention and hours in the day. Saving reduces current consumption; borrowing raises current purchasing power but creates future repayment obligations. Governments face scarcity when they decide budgets: more spending on one programme usually means less for another, higher taxes, or more debt.",
        },
        {
          type: "p",
          text: "Opportunity cost is often hardest to see when the “price” is not written on a receipt. Studying full-time may look “free” of tuition at one institution, yet the next-best paid job still has a value. Founders who leave salaried employment give up salary, benefits and sometimes career tracks. That forgone package is opportunity cost even if the new venture’s accounts show no wage expense for the founder.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "Two graduates can each earn €38,000 a year in employment. If they start a repair café business instead, the opportunity cost of self-employment is at least that salary each—plus any perks they would have received—because that package is the next-best realistic alternative. If the business later earns more than the combined forgone salaries after proper cost allowance, the choice can still be rational; the point is that zero reported wage does not mean zero cost of founders’ time.",
        },
        {
          type: "application",
          title: "In practice",
          text: "In True/False items, look for phrases such as “no cost because no money was paid”. If an alternative was deliberately given up, opportunity cost is present even without a cash outlay.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Opportunity cost is not “all possible alternatives combined”. It is the next-best alternative—the best option among those left behind—not the sum of every rejected dream.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Scarcity is not the same as poverty. Even wealthy households and rich countries face scarcity because wants expand and resources remain finite for any given decision.",
        },
        {
          type: "statement",
          claim: "If a student chooses university instead of a job paying €30,000, that €30,000 is part of the opportunity cost of studying.",
          answer: true,
          why: "The salary of the next-best realistic job is a benefit forgone by choosing study.",
        },
        {
          type: "statement",
          claim: "When no money changes hands, opportunity cost cannot exist.",
          answer: false,
          why: "Time, convenience and other non-cash benefits can be given up; opportunity cost is broader than cash payments.",
        },
        {
          type: "takeaways",
          items: [
            "Scarcity means limited resources relative to wants; it forces allocation decisions.",
            "Households, businesses and governments all face scarcity.",
            "Opportunity cost is the benefit of the next-best alternative that is sacrificed.",
            "Cash outlays are only one way costs appear; forgone alternatives matter too.",
          ],
        },
      ],
    },

    {
      id: "2.3",
      title: "Economics is the study of economic decisions",
      blocks: [
        {
          type: "p",
          text: "Economics studies how individuals (in households), businesses and societies decide how to satisfy needs and wants with limited resources. It is both descriptive—explaining observed behaviour—and analytical—building models that isolate key relationships and generate predictions under stated assumptions.",
        },
        {
          type: "definition",
          term: "Economics",
          text: "Economics is the study of how agents make decisions to allocate scarce resources in order to satisfy needs and wants, and of how those decisions interact in markets and across the economy as a whole.",
        },
        {
          type: "definition",
          term: "Microeconomics",
          text: "Microeconomics focuses on individual households and businesses, their decisions, and how they interact in particular markets (for example how a subsidy changes demand for a product).",
        },
        {
          type: "definition",
          term: "Macroeconomics",
          text: "Macroeconomics studies the economy in aggregate: growth, unemployment, interest rates, the overall price level and inflation, among other economy-wide phenomena.",
        },
        {
          type: "p",
          text: "Micro and macro are complementary lenses, not rival clubs. A wage rise in one firm is a micro issue; rising unemployment nationwide is a macro issue. Yet firm-level hiring decisions accumulate into national employment figures, and national interest-rate policy feeds back into household borrowing and firm investment. Good exam answers name which lens a question uses.",
        },
        {
          type: "p",
          text: "As a science, economics uses theories and simplifying assumptions. Models deliberately omit detail so that cause and effect become visible. That does not mean economists ignore complexity forever; it means they isolate mechanisms first. Predictions are conditional: “if incomes rise and tastes stay constant, demand for normal goods tends to rise.” Understanding the “if” is as important as remembering the conclusion.",
        },
        {
          type: "p",
          text: "Economic decisions appear everywhere: whether to hire or automate, rent or buy, specialise or diversify, tax or borrow, consume now or save. Business studies then ask how organisations design products, finance assets and manage people inside that decision environment. Chapter 2 therefore supplies the common vocabulary before later chapters zoom into forms of ownership, marketing and accounting.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "Question A: “How would a €2,000 purchase bonus for electric bikes affect demand for e-bikes in Vienna?” That is microeconomics—buyers and sellers in one product market. Question B: “How did inflation and unemployment evolve in the euro area last year?” That is macroeconomics—aggregate indicators for a large economic area.",
        },
        {
          type: "application",
          title: "In practice",
          text: "When an exam item mentions GDP, inflation or unemployment for a country, switch to the macro label. When it mentions one café’s pricing or one household’s shopping list, stay micro—unless the question explicitly aggregates many agents.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Do not treat microeconomics as “small firms only” and macroeconomics as “large firms only”. The distinction is individual/market vs aggregate economy, not company size.",
        },
        {
          type: "statement",
          claim: "Studying how one household reacts to a rise in coffee prices is primarily a microeconomic question.",
          answer: true,
          why: "It concerns individual decision-making in a specific market.",
        },
        {
          type: "statement",
          claim: "Macroeconomics never considers interest rates or inflation.",
          answer: false,
          why: "Interest rates, price levels and inflation are core macroeconomic topics.",
        },
        {
          type: "takeaways",
          items: [
            "Economics analyses scarce-resource decisions by households, firms and society.",
            "Microeconomics focuses on individual agents and particular markets.",
            "Macroeconomics focuses on aggregate outcomes such as growth and inflation.",
            "Economic theories simplify in order to explain and predict conditional relationships.",
          ],
        },
      ],
    },

    {
      id: "2.4",
      title: "Exchanging goods and services creates a circular flow and division of labour",
      blocks: [
        {
          type: "p",
          text: "Exchange is the bridge that turns specialisation into a workable system. Households typically supply labour and receive wages; businesses supply goods and services and receive revenue. Those flows of real resources and money move in opposite directions around the same relationships: households → labour → firms → goods/services → households, and households ← wages ← firms ← payments for products ← households. This pattern is the circular flow of goods, services and money.",
        },
        {
          type: "definition",
          term: "Circular flow",
          text: "The circular flow describes the continuous movement of resources, goods and services in one direction and monetary payments in the opposite direction between households, businesses and government.",
        },
        {
          type: "p",
          text: "Government completes the picture. Public authorities levy taxes from households and firms and provide public goods, transfers and subsidies—roads, defence, policing, and often large parts of education and healthcare. Some goods create free-rider problems: people can benefit without paying voluntarily, so private firms underprovide them. Taxation finances those services when markets alone would fail to deliver adequate supply.",
        },
        {
          type: "definition",
          term: "Money (three functions)",
          text: "Money is a widely accepted means of payment. It serves as (1) a medium of exchange, allowing flexible trade without barter; (2) a unit of account, expressing and comparing values; and (3) a store of value, carrying purchasing power into the future when its value remains reasonably stable.",
        },
        {
          type: "p",
          text: "Without money, trade requires barter: each party must want what the other offers at the same time. That “double coincidence of wants” makes many mutually beneficial deals impossible. Money breaks the coincidence. The unit-of-account function lets prices communicate scarcity. The store-of-value function lets people save and plan. Money performs these roles best when its purchasing power is fairly stable.",
        },
        {
          type: "definition",
          term: "Inflation",
          text: "Inflation is a general rise in the prices of goods and services, which reduces the purchasing power of money. Price indexes measure how strong that general rise is. Mild inflation can be tolerated; the European Central Bank regards an inflation rate of slightly below 2% per year as generally beneficial. High inflation erodes trust in money as people rush to spend before prices rise further.",
        },
        {
          type: "p",
          text: "Division of labour and specialisation follow from exchange. If every household tried to produce all it needed, people would waste time on tasks for which they have weak skills. Exchange lets agents concentrate on comparative strengths. Specialisation appears at several levels: within households (who cooks, who shops); within firms (procurement, production, sales, marketing, accounting, HR often as departments); between firms at the same production level (competing furniture makers) or along a production chain (timber → boards → furniture → retail); and internationally, where climate, resources, know-how, labour costs and legal rules differ across countries, shaping which activities locate where.",
        },
        {
          type: "p",
          text: "Specialisation raises productivity but carries risks. Highly specialised work can become monotonous. Workers may lose flexibility if their narrow skills fall out of demand. A firm that masters one niche can also be vulnerable if demand for that niche collapses. Division of labour is therefore powerful, not free of downside.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "A bicycle repair shop specialises in assembly and aftercare; a separate supplier makes frames; a courier firm delivers parts. Money lets each focus: the shop does not need to barter repaired bikes for tubing. If inflation jumps sharply, the shop’s cash balances buy fewer spare parts over weeks, showing that the store-of-value function of money weakens when the price level rises quickly.",
        },
        {
          type: "application",
          title: "In practice",
          text: "Sketch three boxes—households, businesses, government—and draw arrows for labour, wages, goods, payments, taxes, and public services. That sketch answers many circular-flow questions faster than prose alone.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Money’s three functions are medium of exchange, unit of account and store of value—not “making people rich”. Wealth creation comes from production and exchange; money facilitates them.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Do not confuse a price rise for one product with inflation. Inflation is a general rise across many goods and services, measured by price indexes.",
        },
        {
          type: "statement",
          claim: "One function of money is to serve as a unit of account that expresses the value of goods and services.",
          answer: true,
          why: "Prices denominated in money allow comparison and accounting; that is the unit-of-account role.",
        },
        {
          type: "statement",
          claim: "Division of labour can only occur between countries, not inside a single business.",
          answer: false,
          why: "Specialisation occurs within households, within firms (departments/roles), between firms, and internationally.",
        },
        {
          type: "takeaways",
          items: [
            "Exchange between households and firms creates a circular flow of real goods and money payments.",
            "Government taxes and provides public goods, transfers and subsidies within that flow.",
            "Money acts as medium of exchange, unit of account and store of value.",
            "Inflation reduces purchasing power; mild rates differ from high inflation that destroys trust.",
            "Division of labour enables specialisation at household, firm, industry-chain and international levels—with efficiency gains and flexibility risks.",
          ],
        },
      ],
    },

    {
      id: "2.5",
      title: "Different economic systems",
      blocks: [
        {
          type: "p",
          text: "An economic system answers who decides what is produced, how it is produced, and who receives the output. The two classic poles are the market economy and the planned economy. Most real countries sit somewhere between pure textbooks ends of the spectrum.",
        },
        {
          type: "definition",
          term: "Market economy",
          text: "In a market economy, individuals and businesses make many of their own economic decisions about production, consumption and prices, within a legal framework. Markets coordinate allocation through supply and demand.",
        },
        {
          type: "definition",
          term: "Planned economy",
          text: "In a planned (or centrally planned) system, government mainly or partly decides which goods and services are produced, at which prices, and controls key resources and means of production. Job choice and product choice for citizens are limited compared with market systems.",
        },
        {
          type: "p",
          text: "Within market-oriented countries, roles for the state still differ. A free market economy keeps government intervention comparatively light: rules of property, contract and competition exist, but officials do not routinely redirect production or redistribute extensively through aggressive intervention. A social market economy (or eco-social market economy) keeps markets as the main coordinating device while giving the state a stronger role—supporting the vulnerable, correcting market failures, and protecting the environment, among other tasks.",
        },
        {
          type: "definition",
          term: "Free market economy",
          text: "A market system in which government mainly provides the legal framework and influences the economy relatively little beyond that framework.",
        },
        {
          type: "definition",
          term: "Social market economy",
          text: "A market system combined with a more active government role in social protection, environmental and related policy goals, while market exchange remains central to allocation.",
        },
        {
          type: "p",
          text: "Over recent decades, many formerly planned economies adopted market principles—across parts of Central and Eastern Europe, China and successor states of the Soviet Union, for example. Transformation is rarely overnight: legal institutions, property rights, competition culture and safety nets must catch up with price liberalisation. For the entrance exam, the key skill is classifying who has primary decision power over production and resources.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "Country A lets private firms choose products and set most prices; consumers choose freely among suppliers; government mainly enforces contracts and competition law. That leans towards a free market pattern. Country B also uses private ownership and prices, but finances universal healthcare, generous unemployment support and tight environmental standards through taxes. That is closer to a social market pattern. Country C issues production quotas for steel and bread, sets official prices, and assigns workers to plants: that matches planned-economy features.",
        },
        {
          type: "application",
          title: "In practice",
          text: "Exam statements often mix rhetoric (“the market decides everything”) with residual state roles. Remember: even free market systems use government for legal order; social market systems still rely on market prices for most everyday allocation.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "A social market economy is still a market economy—not a planned economy. Extra social and environmental intervention does not automatically mean central planning of all production.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Do not equate “government provides schools or roads” with a planned economic system. Public goods appear in market economies too.",
        },
        {
          type: "statement",
          claim: "In a planned economy, government typically plays a dominant role in deciding what is produced and at which prices.",
          answer: true,
          why: "Central control of production decisions and resources is the defining contrast to market systems.",
        },
        {
          type: "statement",
          claim: "A free market economy means that no laws exist and government never provides any public services.",
          answer: false,
          why: "Even free market systems rely on a legal framework; the difference is the extent of economic intervention, not the total absence of government.",
        },
        {
          type: "takeaways",
          items: [
            "Market economies emphasise private decision-making; planned economies emphasise state direction of production and resources.",
            "Free market systems minimise economic intervention beyond the legal order.",
            "Social (or eco-social) market systems keep markets but add stronger social and environmental roles for the state.",
            "Many former planned economies have shifted towards market principles.",
          ],
        },
      ],
    },

    {
      id: "2.6",
      title: "Supply and demand: households, businesses and the government meet in the market",
      blocks: [
        {
          type: "p",
          text: "In a market economy, buyers and sellers communicate the conditions of exchange in markets. A market can be a physical place (a farmers’ market) or a virtual platform; trade can occur in shops, by phone or online. Markets differ by product: consumer goods, labour, housing, money, capital and commodities all have their own arenas. Households, businesses and government appear on both demand and supply sides depending on the market considered.",
        },
        {
          type: "definition",
          term: "Market",
          text: "A market is the interaction of buyers and sellers who communicate and agree (implicitly or explicitly) on the terms of exchanging a good or service—whether face-to-face or through intermediaries and platforms.",
        },
        {
          type: "definition",
          term: "Supply",
          text: "Supply of a good or service is the quantity available for purchase. It depends on production capacity and resources and, crucially, on the price that can be charged.",
        },
        {
          type: "definition",
          term: "Law of supply",
          text: "Ceteris paribus (all other things held constant), a higher price leads to a higher quantity supplied for most goods and services. The supply curve slopes upward.",
        },
        {
          type: "definition",
          term: "Ceteris paribus",
          text: "A modelling phrase meaning “all other relevant factors held constant”, used so that the effect of one variable (often price) can be isolated.",
        },
        {
          type: "p",
          text: "Why does supply rise with price? Higher prices make it worthwhile for additional providers to enter and for existing providers to expand output. Marginal cost—the cost of producing one more unit—often rises as capacity is stretched, so firms need higher prices to cover those rising extra costs. Graphically, price is usually on the vertical axis and quantity on the horizontal axis; the supply schedule traces pairs (price, quantity supplied).",
        },
        {
          type: "formula",
          label: "Supply relationship (ceteris paribus)",
          text: "As P ↑ → Qs ↑ (law of supply). Movement along the supply curve: a price change alone changes quantity supplied. Shift of the supply curve: a non-price factor changes supply at every price (curve moves left or right).",
        },
        {
          type: "definition",
          term: "Demand",
          text: "Demand is the quantity of a good or service that customers are willing and able to buy at a given price.",
        },
        {
          type: "definition",
          term: "Law of demand",
          text: "Ceteris paribus, a higher price leads to a lower quantity demanded for almost all goods and services. The demand curve slopes downward because quantity demanded is inversely related to price.",
        },
        {
          type: "p",
          text: "Willingness to pay reflects the utility—or satisfaction—buyers expect. As price rises, more buyers drop out or buy less; as price falls, more buyers enter or buy more. Plotting those pairs produces a downward-sloping demand curve.",
        },
        {
          type: "formula",
          label: "Demand relationship (ceteris paribus)",
          text: "As P ↑ → Qd ↓ (law of demand). Movement along the demand curve: price change alone changes quantity demanded. Shift of the demand curve: income, tastes, complements, substitutes or other non-price factors change demand at every price.",
        },
        {
          type: "definition",
          term: "Market equilibrium",
          text: "Equilibrium (market) price is the price at which quantity supplied equals quantity demanded. There is neither surplus nor shortage at that clearing point where the curves intersect.",
        },
        {
          type: "formula",
          label: "Equilibrium condition",
          text: "At equilibrium: Qs = Qd = Q*. If P > P*, typically Qs > Qd (surplus) and pressure for price to fall. If P < P*, typically Qd > Qs (shortage) and pressure for price to rise.",
        },
        {
          type: "p",
          text: "Table talk helps. Imagine weekly hours of tutoring and euro prices: at a low price many students want hours but few tutors offer them (shortage). At a high price, many tutors offer hours but few students buy (surplus). Somewhere in between, plans match—that row is the equilibrium. Numbers in a textbook figure are illustrative; the logic transfers to any market drawn the same way.",
        },
        {
          type: "p",
          text: "Non-price determinants shift entire curves. Demand shifts right when incomes rise for a normal good, when preferences strengthen, when complementary goods become more attractive, or when substitutes worsen. Demand shifts left under the opposite changes. Supply shifts right when more suppliers enter, technology improves, or resource costs fall; it shifts left when costs rise, suppliers exit, or providers expect better opportunities elsewhere and cut current offers.",
        },
        {
          type: "p",
          text: "The same language illuminates one channel of inflation. If the quantity of money in an economy rises and demand for goods climbs while real output does not keep pace, general prices tend to rise—“too much money chasing too few goods”. Raising interest rates makes borrowing more expensive, which can cool demand and ease inflationary pressure. That link between money markets and goods markets is a macro application of supply–demand thinking.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "Suppose tutoring equilibrium is €40 per hour with 1,000 hours traded. If incomes rise and more families can afford tutoring, the demand curve shifts right: at the old €40 there is now a shortage, so the new equilibrium price and quantity are both higher (under standard upward supply). If software suddenly makes tutors much more productive and lowers their costs, supply shifts right: equilibrium quantity rises and equilibrium price tends to fall.",
        },
        {
          type: "application",
          title: "In practice",
          text: "Always ask: did only the price change, or did a background factor change? Price change → movement along. Background factor → shift. Mixing those two is the most common exam error in this section.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "“Demand increased” is not the same as “quantity demanded increased”. Quantity demanded rises when price falls (movement along). Demand increases when a non-price factor shifts the whole curve.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Ceteris paribus is not decoration. Without it, you cannot claim a clean law of demand or supply, because many variables move at once in real data.",
        },
        {
          type: "statement",
          claim: "Ceteris paribus, if the price of a service rises, the quantity demanded usually falls.",
          answer: true,
          why: "That inverse relationship is the law of demand.",
        },
        {
          type: "statement",
          claim: "A rightward shift of the demand curve means that at every price buyers want to purchase less than before.",
          answer: false,
          why: "A rightward demand shift means more quantity demanded at each price, not less.",
        },
        {
          type: "takeaways",
          items: [
            "Markets coordinate buyers and sellers across physical and virtual settings.",
            "Law of supply: higher price → higher quantity supplied (ceteris paribus).",
            "Law of demand: higher price → lower quantity demanded (ceteris paribus).",
            "Equilibrium equates quantity supplied and demanded; surpluses and shortages push prices.",
            "Distinguish movements along curves from shifts caused by non-price factors.",
            "Money-market expansions that boost demand without matching supply help explain inflation dynamics.",
          ],
        },
      ],
    },

    {
      id: "2.7",
      title: "Competition in the market",
      blocks: [
        {
          type: "p",
          text: "How intensively firms must compete depends mainly on the number of suppliers and how easily buyers can switch to substitutes. Market structure ranges from a single seller to many sellers of nearly identical products. The entrance exam expects clear definitions of monopoly, oligopoly and perfect competition, plus awareness that real markets often sit between the pure models.",
        },
        {
          type: "definition",
          term: "Monopoly",
          text: "A monopoly exists when there is only one supplier in a market. Pure monopolies are rare, but a firm can enjoy monopoly-like power in a local area if no close alternative exists nearby.",
        },
        {
          type: "definition",
          term: "Oligopoly",
          text: "An oligopoly is a market with few suppliers, each holding a relatively large share. Telecom operators or large car manufacturers often illustrate oligopolistic structures. Rival reactions matter: one firm’s price or product move typically triggers responses.",
        },
        {
          type: "definition",
          term: "Perfect competition",
          text: "Perfect competition is a theoretical benchmark with so many buyers and sellers that no single agent can influence price. Assumptions include full information, free entry and exit, and no personal preferences—goods are replaceable (homogeneous).",
        },
        {
          type: "p",
          text: "Monopolists can set prices with more freedom, constrained mainly by the demand curve and possible regulation. Local monopoly-like situations arise on a mountain hut with no neighbouring café, or a single cinema concession stand. Oligopolists watch each other carefully. They may compete fiercely on price and features, or they may be tempted to coordinate terms. Cartels—agreements that restrict competition—are generally illegal because competition law protects buyers.",
        },
        {
          type: "p",
          text: "Perfect competition is rare as a complete package, yet some markets approximate it when products are nearly identical and rivalry is intense—certain agricultural markets, for example. Even with fewer sellers, competition can feel “almost perfect” if rivalry is very strong and products are standardised. The model remains useful as a reference point for asking how much market power a firm actually has.",
        },
        {
          type: "p",
          text: "Policy makers usually favour competition because it pressures firms to keep prices in check, innovate and serve customers. Barriers to entry, exclusive control of a key input, or network effects can reduce competition. Substitutes discipline prices even when the branded product looks unique: if switching is easy, monopoly power shrinks.",
        },
        {
          type: "example",
          title: "Worked example",
          text: "A remote valley has one grocery van that visits twice a week and no other store within an hour’s travel—locally monopoly-like for many staples. A national mobile phone market with three large network operators is oligopolistic: a promotional tariff by one usually prompts matching offers. A large wholesale market for standardised wheat grades, with many growers and buyers, comes closer to perfect competition than either example.",
        },
        {
          type: "application",
          title: "In practice",
          text: "Classify by counting close rivals and evaluating substitutes. “One firm in the world” is monopoly; “a handful of giants” is oligopoly; “many sellers of nearly identical goods with free entry” approaches perfect competition.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "A firm that is not the only seller in the whole country can still hold local monopoly power. Geography and travel costs matter.",
        },
        {
          type: "trap",
          title: "Exam trap",
          text: "Perfect competition requires more than “many firms”. Homogeneous products, free entry/exit and good information are part of the idealised checklist.",
        },
        {
          type: "statement",
          claim: "In an oligopoly, each of the few suppliers typically has a relatively large market share and closely watches rivals’ moves.",
          answer: true,
          why: "Strategic interdependence and concentrated shares define oligopoly.",
        },
        {
          type: "statement",
          claim: "Cartels that coordinate terms among competitors are generally encouraged by competition law because they raise prices for firms.",
          answer: false,
          why: "Such agreements usually restrict competition and are typically illegal; policy supports competition for customers’ benefit.",
        },
        {
          type: "takeaways",
          items: [
            "Market structure depends on the number of suppliers and the availability of substitutes.",
            "Monopoly: one supplier (sometimes only local). Oligopoly: few large suppliers. Perfect competition: many agents unable to set price alone.",
            "Cartels restricting competition are typically unlawful.",
            "Real markets mix features; models still help diagnose market power.",
            "Chapter synthesis: scarcity forces choices; exchange and money organise the circular flow; systems allocate decision rights; supply and demand set prices under varying competition.",
          ],
        },
      ],
    },
  ],
};
