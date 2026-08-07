export default {
  num: 5,
  title: "Marketing",
  intro:
    "A workshop can craft the finest desk lamp in the city and still fail if nobody needs light in that form, at that price, in that place. Marketing is the disciplined work of finding who those people are, shaping what is offered to them, and making the exchange happen. It is not only advertising. It is research, design choices, pricing logic, distribution routes, and messages that stay consistent with one another.\n\nThis chapter walks that path from product idea to marketing mix. You will learn how firms set marketing objectives, choose between product and market orientation, research customers, segment markets, and blend the four Ps — including life-cycle thinking and the Boston Consulting Group matrix. By the end, you should be able to explain why a strong product still needs a market, and how each marketing tool supports the others.",

  objectives: [
    "Define a product in marketing terms and distinguish goods, services, product lines, product mix, branding, USP and differentiation.",
    "State typical marketing objectives and explain how they connect (satisfaction, loyalty, awareness, sales, market share, profitability).",
    "Contrast product orientation with market orientation and recognise the role of customer relationship management.",
    "Discuss responsibility and sustainability pressures on marketing practice for firms and consumers.",
    "Distinguish primary from secondary research and qualitative from quantitative approaches; calculate absolute and relative market share.",
    "Apply segmentation bases and compare undifferentiated, differentiated and concentrated (niche) targeting.",
    "Build a coherent marketing mix (product, price, place, promotion) and place offerings on the product life cycle and BCG matrix.",
  ],

  sections: [
    {
      id: "5.1",
      title: "Product: goods, services, lines, brands and differentiation",
      blocks: [
        {
          type: "scene",
          title: "Same object, different product story",
          text: "River & Reed Workshop sells modular oak desk lamps. A co-working landlord buys twenty lamps for shared desks and books a lighting consultation so staff know how to adjust glare. A student buys one lamp for a rented room and never needs the consultation. Physically the lamp looks identical. In marketing, the exchanges are not the same product situation: one sits in a business-to-business relationship with an attached service; the other is a business-to-consumer purchase of a good alone.",
        },
        {
          type: "idea",
          term: "Product (marketing)",
          text: "Every good and/or service that can be exchanged to fulfil customers’ wishes and needs. Tangible items and intangible support both count when they can be offered in exchange.",
        },
        {
          type: "p",
          text: "Customers may be other businesses or private households. Goods and services sold from one business to another are producer products (business-to-business, B2B). The same categories sold to consumers are consumer products (business-to-consumer, B2C). Buyer and user need not be the same person: a parent may pay while a teenager uses the product; a facilities manager may purchase while employees use the lamps daily.",
        },
        {
          type: "mechanism",
          title: "Where customer value comes from",
          text: "Value is not only the core function (light on a desk). Extra features (dimmers, USB ports), image (craft reputation), and the joy or reassurance of use all shape why someone chooses one offering over another. Marketing designs and communicates that whole package, not only the physical object.",
        },
        {
          type: "idea",
          term: "Product line",
          text: "A set of closely related products — for example several desk-lamp models that differ in size, wood finish or power options but belong to the same family.",
        },
        {
          type: "idea",
          term: "Product mix",
          text: "The full range of product lines a business offers. Width increases when new lines are added (lamps plus wall sconces). Depth increases when more variants sit inside one line (more finishes of the same lamp).",
        },
        {
          type: "bullets",
          items: [
            "Specialisation: compete with one line and know that line deeply.",
            "Diversification: add lines (mix extension) to reach more needs or spread risk.",
            "Line extension: add variants inside an existing line (new sizes or colours).",
            "Relaunch: minor changes such as packaging or colour to refresh interest.",
            "Contraction: drop weak products or whole lines when relaunch no longer pays.",
          ],
        },
        {
          type: "idea",
          term: "Brand",
          text: "A name, word(s), symbol and/or sign that distinguishes a product or business from others. Brands support recognition, signal a promised quality level, and help build loyalty when experience matches the promise.",
        },
        {
          type: "idea",
          term: "Unique selling proposition (USP)",
          text: "A distinctive benefit — real or clearly perceived — that sets an offering apart from similar products. Differentiation may rest on a product characteristic or on how the offer is promoted and understood.",
        },
        {
          type: "mechanism",
          title: "How branding and USP reinforce each other",
          text: "A brand is the identity vehicle; a USP is the reason to prefer that identity. Without a believable difference, branding becomes empty decoration. Without a recognisable brand, a genuine difference is harder to remember and harder to charge for. Product differentiation aims to make the offer “special”, “unique”, or “better for this customer” than close substitutes.",
        },
        {
          type: "compare",
          title: "Goods versus services in the same firm",
          left: {
            title: "Goods",
            items: [
              "Physical lamp units that can be stored and shipped",
              "Ownership typically transfers to the buyer",
              "Quality can be inspected before use",
            ],
          },
          right: {
            title: "Services",
            items: [
              "Lighting consultation and installation advice",
              "Produced and consumed largely together",
              "Quality often judged during or after delivery",
            ],
          },
        },
        {
          type: "worked",
          title: "Classify River & Reed’s offers",
          steps: [
            "Oak desk lamp sold to a household → consumer product (B2C good).",
            "Same lamp sold to a co-working firm → producer product (B2B good).",
            "On-site lighting consultation → service product (can be B2B or B2C).",
            "Three heights of the same oak lamp → one product line (depth).",
            "Adding a wall-sconce line → mix extension (greater mix width).",
            "USP claim: “tools-free brightness change in under ten seconds” → differentiation on a usable feature, not only on slogan tone.",
          ],
          result:
            "Marketing treats all exchangeable goods and services as products; lines and mix describe portfolio shape; brand and USP explain preference.",
        },
        {
          type: "think",
          prompt:
            "Name one good and one service from a café you know. Who is the buyer and who is the user in a school catering contract for that café?",
        },
        {
          type: "trap",
          text: "Trap: treating “product” as only a physical object. In marketing exams, repair contracts, tutoring hours and software licences are products if they are exchanged to meet needs.",
        },
        {
          type: "exam",
          text: "Exam cue: if a stem switches the same device from office use to home use, the classification flips from producer (B2B) to consumer (B2C) even though the item is unchanged. Also watch for USP versus mere advertising noise — USP requires a distinctive benefit or perception.",
        },
        {
          type: "takeaways",
          items: [
            "Products = exchangeable goods and/or services that fulfil wishes and needs.",
            "B2B versus B2C depends on the customer type, not on the factory process.",
            "Lines and mix describe how wide and deep the portfolio is.",
            "Brands identify; USPs differentiate; together they support preference and loyalty.",
          ],
        },
        {
          type: "check",
          items: [
            "Can a pure service be a product in marketing terms?",
            "What is the difference between a line extension and a mix extension?",
            "Why might two firms sell similar goods yet only one have a workable USP?",
          ],
        },
      ],
    },

    {
      id: "5.2",
      title: "Marketing objectives",
      blocks: [
        {
          type: "scene",
          title: "Five targets on one whiteboard",
          text: "Before PeakMeal, a meal-prep start-up, spends on ads, the founders write five annual targets: raise average satisfaction scores after delivery, lift brand awareness among night-shift hospital staff, grow unit sales by 15%, raise absolute market share in the city meal-prep niche from 6% to 9%, and keep contribution high enough for a thin operating profit. The list looks mixed — soft feelings and hard euros — but each target shapes different marketing choices.",
        },
        {
          type: "idea",
          term: "Marketing objectives",
          text: "Specific aims that guide market analysis and marketing action. Typical aims include customer satisfaction and loyalty, awareness, a unique selling proposition, sales volume or value, market share, and profitability. Objectives often reinforce each other rather than standing alone.",
        },
        {
          type: "mechanism",
          title: "How the main objectives link",
          text: "Dissatisfied customers rarely buy again, so satisfaction feeds loyalty and future sales. Awareness matters because unknown offers are not chosen. A USP reduces pure price comparison and supports preference. Market share shows relative competitive position. Sales generate the revenue needed to cover costs. Profitability reimburses owners and funds reinvestment — higher sales help, but only within cost and price limits.",
        },
        {
          type: "table",
          caption: "Common marketing objectives and what they emphasise",
          headers: ["Objective", "Core question", "Why it matters"],
          rows: [
            [
              "Customer satisfaction",
              "Did the offer meet or beat expectations?",
              "Unsatisfied buyers leave; satisfied buyers often return",
            ],
            [
              "Customer loyalty",
              "Will they choose us again and recommend us?",
              "Repeat demand lowers acquisition pressure",
            ],
            [
              "Awareness",
              "Do target customers know we exist and what we offer?",
              "Choice requires recognition in the relevant set",
            ],
            [
              "USP / differentiation",
              "Why us rather than a close substitute?",
              "Supports preference beyond lowest price",
            ],
            [
              "Sales",
              "How many units / how much revenue?",
              "Cash inflow to cover costs and grow",
            ],
            [
              "Market share",
              "What fraction of the defined market is ours?",
              "Signals relative competitive strength",
            ],
            [
              "Profitability",
              "Do revenues cover costs with a surplus?",
              "Rewards capital and funds reinvestment",
            ],
          ],
        },
        {
          type: "worked",
          title: "Translate PeakMeal’s whiteboard into actions",
          steps: [
            "Satisfaction: shorten delivery windows and fix cold-meal complaints within 24 hours.",
            "Awareness: partner with two hospital noticeboards and a night-shift podcast, not random city-wide billboards.",
            "USP: “balanced meals that survive a 12-hour shift without reheating” — a concrete difference.",
            "Sales and share: track units in the defined city meal-prep market, not all food retail.",
            "Profitability: avoid deep discounts that raise share but destroy contribution.",
          ],
          result:
            "Objectives only work when the market is defined and tools (product, price, place, promotion) are aligned with those aims.",
        },
        {
          type: "think",
          prompt:
            "If PeakMeal doubles awareness but satisfaction collapses, which objectives are likely to rise short-term and which are likely to fall next quarter?",
        },
        {
          type: "trap",
          text: "Trap: treating market share as automatically identical to profit. Share can rise through unsustainable discounts. Trap: treating USP as a slogan with no product or perception difference behind it.",
        },
        {
          type: "exam",
          text: "Exam recognition: lists of objectives often include satisfaction/loyalty, USP/differentiation, sales, market share and profitability. Awareness may appear as a communication goal feeding those outcomes. Interrelatedness is a frequent true/false theme — satisfaction supports loyalty and repeat sales.",
        },
        {
          type: "connect",
          text: "Market share objectives need clear market measurement (section 5.5). USP and branding connect back to product differentiation (section 5.1) and forward into the marketing mix (section 5.7).",
        },
        {
          type: "takeaways",
          items: [
            "Marketing needs explicit objectives before tactics.",
            "Satisfaction and loyalty protect future demand.",
            "Awareness, USP, sales, share and profit pull different levers but should stay consistent.",
            "Share without contribution is a hollow win.",
          ],
        },
        {
          type: "check",
          items: [
            "Why is customer satisfaction interrelated with other marketing objectives?",
            "Give one reason a firm might accept lower short-term profit while chasing awareness.",
            "What does a USP objective try to achieve against rivals?",
          ],
        },
      ],
    },

    {
      id: "5.3",
      title: "Product orientation versus market orientation",
      blocks: [
        {
          type: "scene",
          title: "Two clockmakers, two starting points",
          text: "Atlas Gears spends eighteen months perfecting a mechanical desk clock with a sapphire face, then asks a salesperson how to push it into shops. North Harbor Time first interviews ferry crews and harbour offices about what fails in salty air, then designs a sealed quartz clock with oversized numerals for glove use. Both want reliable sales and a fair margin. Their starting questions differ: “How do we sell what we built?” versus “What should we build because customers need it?”",
        },
        {
          type: "idea",
          term: "Product orientation",
          text: "An approach that focuses first on production and product features, then seeks to sell what has been made. Success is expected mainly from the quality and specifications of the product itself.",
        },
        {
          type: "idea",
          term: "Market orientation",
          text: "An approach that starts from customers’ needs and wants, then designs and adapts offerings to match them. Success depends on reading and responding to the market.",
        },
        {
          type: "compare",
          title: "Orientation starting points",
          left: {
            title: "Product orientation",
            items: [
              "Focus on production and features first",
              "Then arrange sales and advertising",
              "Belief: a strong product largely sells itself",
            ],
          },
          right: {
            title: "Market orientation",
            items: [
              "Focus on needs and wants first",
              "Then produce what customers require",
              "Advantage: earlier response to market change",
            ],
          },
        },
        {
          type: "mechanism",
          title: "Same objectives, different path",
          text: "Both orientations may pursue identical marketing objectives (sales, share, satisfaction). The product-oriented firm leans on feature quality to win. The market-oriented firm leans on continuous customer insight. Suitability depends on the product and on how many competitors exist — but neglecting customer expectations is risky in either case.",
        },
        {
          type: "idea",
          term: "Customer relationship management (CRM)",
          text: "Practices that aim at a long-term relationship with customers by keeping contact data and purchase history to send relevant information, offers and reminders — so customers return. Sensitive handling of personal data is indispensable.",
        },
        {
          type: "p",
          text: "Loyalty cards and personal accounts often mean customers willingly trade anonymity for discounts and tailored offers. Firms then observe buying behaviour and personalise communication. That power helps market-oriented selling, but it also raises responsibility for privacy and consent.",
        },
        {
          type: "worked",
          title: "Reorient Atlas Gears without abandoning craft",
          steps: [
            "Interview harbour and outdoor workers about fog, gloves and vibration.",
            "Keep the mechanical line for collectors (product-strength niche).",
            "Launch a sealed, high-contrast model for working docks (market-led line).",
            "Use optional CRM emails only with clear opt-in for service reminders.",
          ],
          result:
            "Orientation is a starting logic, not a ban on engineering excellence. Market orientation still needs real product competence.",
        },
        {
          type: "think",
          prompt:
            "Would a pharmaceutical firm developing a new active ingredient start closer to product orientation or market orientation at the research stage? What must it still not neglect before launch?",
        },
        {
          type: "trap",
          text: "Trap: claiming that identical marketing objectives prove identical orientation. Objectives can match while the sequence (build-then-sell versus research-then-build) differs. Trap: treating CRM as “free data” with no sensitivity duties.",
        },
        {
          type: "exam",
          text: "Exam cue: product orientation = features first; market orientation = needs first. CRM questions often test why personal data use matters and that loyalty schemes collect behaviour for later contact.",
        },
        {
          type: "takeaways",
          items: [
            "Orientation is about starting point and emphasis.",
            "Market orientation helps anticipate change earlier.",
            "Neither approach should ignore the market entirely.",
            "CRM extends relationships but demands careful data use.",
          ],
        },
        {
          type: "check",
          items: [
            "State one advantage of market orientation over product orientation.",
            "Can two firms share the same sales target yet differ in orientation?",
            "Why do customers sometimes accept loyalty cards despite privacy costs?",
          ],
        },
      ],
    },

    {
      id: "5.4",
      title: "Responsibility and sustainability in marketing",
      blocks: [
        {
          type: "scene",
          title: "The jacket worn three times",
          text: "A fashion pop-up pushes “drop” launches every fortnight. Mira buys a neon windbreaker for a festival, wears it three times, and bins it when the zipper fails. The brand’s marketing created urgency she did not plan for. Across town, Mend & Wear runs a repair desk, sells durable jackets with spare zippers, and rents formal coats for weddings. Same clothing market; different stance on how far marketing should push consumption.",
        },
        {
          type: "idea",
          term: "Responsible and sustainable marketing",
          text: "Practice that recognises marketing’s power to shape wants, not only to respond to them, and that seeks production and consumption patterns with lower waste, longer use, and fairer treatment of customers and society.",
        },
        {
          type: "mechanism",
          title: "How marketing can inflate want",
          text: "Continuous novelty and persuasive promotion can create desires people would not otherwise have had, encourage spending beyond intention or means, and speed up obsolescence of still-usable goods. Critics focus on these effects; defenders emphasise information and matching real needs. Either way, both businesses and consumers influence how sustainable the outcome is.",
        },
        {
          type: "bullets",
          items: [
            "Firms: design for durability, repairability and honest claims; avoid deceptive urgency.",
            "Consumers: question whether a purchase will be used; prefer reuse, repair and rental where sensible.",
            "Shared aim: reduce wasteful churn without denying genuine needs.",
          ],
        },
        {
          type: "p",
          text: "Repair-and-reuse models keep devices and clothes in use longer. Clothing rental for rare events can replace one-off cheap purchases. Swap and second-hand circuits also shift status away from constant newness. Marketing can promote these patterns instead of only “upgrade now”.",
        },
        {
          type: "worked",
          title: "Rewrite Mend & Wear’s campaign season",
          steps: [
            "Replace “new drop every Friday” with “repair week” and free zipper clinics.",
            "Advertise rental for one-off events instead of disposable formalwear.",
            "Publish battery-health or fabric-care facts rather than vague “eco” labels.",
            "Train staff to suggest mend-first when a product still has life.",
          ],
          result:
            "Responsibility shows up in product design, claims, pricing of repair versus replacement, and promotion tone — not in a slogan alone.",
        },
        {
          type: "think",
          prompt:
            "Is a “buy one, get one free” deal for single-use plastic cutlery compatible with a sustainability claim? What would need to change for the claim to be credible?",
        },
        {
          type: "trap",
          text: "Trap: equating any green colour in an advert with sustainable marketing. Without product and process substance, the communication is empty. Trap: blaming only firms or only consumers — both sides shape outcomes.",
        },
        {
          type: "exam",
          text: "Exam themes: marketing may create wants; overconsumption risks; repair, reuse and rental as more sustainable patterns; shared responsibility of businesses and consumers.",
        },
        {
          type: "connect",
          text: "Sustainability choices feed the product P (durable design), promotion ethics, and sometimes pricing of repair services. They also interact with market orientation: listening to customers who already demand lower waste.",
        },
        {
          type: "takeaways",
          items: [
            "Marketing can respond to needs and also create new wants.",
            "Overconsumption has private and social costs.",
            "Repair, reuse and rental are practical sustainability routes.",
            "Credible claims need substance behind the message.",
          ],
        },
        {
          type: "check",
          items: [
            "Give one criticism of aggressive product innovation cycles.",
            "How can a clothing firm market responsibility without stopping all sales?",
            "Why must consumers share responsibility for sustainable outcomes?",
          ],
        },
      ],
    },

    {
      id: "5.5",
      title: "Market research",
      blocks: [
        {
          type: "scene",
          title: "Guesswork is expensive",
          text: "GlassHarbor Cycles wants to know whether commuters will pay €45/month for a battery-swap add-on. One founder “just knows” they will. Another insists on evidence: street interviews, a short online questionnaire, and city mobility statistics already published by the transport agency. Research will not remove all risk, but it replaces pure hope with structured information about customers, rivals and the industry.",
        },
        {
          type: "idea",
          term: "Market research",
          text: "The collection and interpretation of information about existing and prospective customers, potential buyers, competition and the industry, used to support marketing decisions.",
        },
        {
          type: "idea",
          term: "Primary market research",
          text: "Original data gathered for the firm’s own questions — for example surveys, interviews, observation or experiments, sometimes via a research institute. Tailored and specific, but often costly.",
        },
        {
          type: "idea",
          term: "Secondary market research",
          text: "Use of existing data collected by others — government statistics, trade association reports, published studies. Usually cheaper and faster, but more general and not built for the firm’s exact problem.",
        },
        {
          type: "compare",
          title: "Qualitative versus quantitative research",
          left: {
            title: "Qualitative",
            items: [
              "Explores motives, language and experiences in depth",
              "Methods: interviews, focus groups, open observation notes",
              "Smaller samples; rich meaning, limited statistical generalisation",
            ],
          },
          right: {
            title: "Quantitative",
            items: [
              "Measures amounts, frequencies and relationships with numbers",
              "Methods: structured questionnaires, counts, experiments with metrics",
              "Larger samples; stronger for estimating shares and averages",
            ],
          },
        },
        {
          type: "mechanism",
          title: "How the two pairs work together",
          text: "Primary versus secondary answers “who collected it and for what?” Qualitative versus quantitative answers “what kind of insight?” A firm might use secondary city cycling counts (quantitative secondary), then primary interviews about battery anxiety (qualitative primary), then a priced survey of 400 riders (quantitative primary).",
        },
        {
          type: "table",
          caption: "Primary and secondary research at a glance",
          headers: ["Source type", "Strength", "Limitation", "Typical use"],
          rows: [
            [
              "Primary",
              "Tailored to the firm’s exact questions",
              "Cost, time, design skill needed",
              "New product concept tests; satisfaction drivers",
            ],
            [
              "Secondary",
              "Faster and often cheaper or free",
              "Generic; may be outdated or mismatched",
              "Market sizing; industry growth context",
            ],
          ],
        },
        {
          type: "p",
          text: "Customer analysis often asks who buys, what they do with the product, where they buy, when they buy, and why they choose one option over another. Buyer and user may differ; influencers (for example children) may shape a purchase paid for by someone else. Timing patterns reveal seasonality and opportunities for price differentiation across the year.",
        },
        {
          type: "idea",
          term: "Market size (market volume)",
          text: "Total sales of a product by all businesses in a defined market, expressed as value (for example euros) or quantity (units).",
        },
        {
          type: "idea",
          term: "Market share",
          text: "The proportion of a defined market held by a business, product or brand. Absolute share compares own sales to market volume; relative share compares own share to the largest competitor’s share.",
        },
        {
          type: "formula",
          label: "Absolute market share",
          text: "Absolute market share = sales of one business (or brand) / market volume",
          vars: "Sales and market volume must use the same units (euros or units) and the same market definition.",
        },
        {
          type: "formula",
          label: "Relative market share",
          text: "Relative market share = own market share / largest competitor’s market share",
          vars: "A value of 1 means parity with the leader; below 1 means smaller than the leader.",
        },
        {
          type: "p",
          text: "Market potential can exceed current market volume if unrealised customers remain. A firm’s sales potential can exceed current sales if it can win rivals’ customers or claim part of that unrealised potential. Absolute share informs managers and investors; relative share adds competitive context the absolute figure alone hides.",
        },
        {
          type: "worked",
          title: "Share maths for GlassHarbor’s battery-swap plan",
          steps: [
            "Defined market: city e-bike accessory subscriptions this year = €800,000.",
            "GlassHarbor subscription sales = €96,000.",
            "Absolute share = 96,000 / 800,000 = 0.12 = 12%.",
            "Largest rival holds 30% absolute share.",
            "Relative share = 12% / 30% = 0.4.",
            "If research estimates market potential at €1,000,000, about €200,000 of demand is still unrealised industry-wide.",
          ],
          result:
            "GlassHarbor is meaningful but far from leadership; relative share 0.4 makes that gap explicit.",
        },
        {
          type: "think",
          prompt:
            "Why might a free government mobility report be useful yet still insufficient before launching the €45 battery-swap plan?",
        },
        {
          type: "trap",
          text: "Trap: mixing value share with unit share without saying so. Trap: calling any questionnaire “secondary” research. Trap: reporting absolute share without defining the market boundaries.",
        },
        {
          type: "exam",
          text: "Exam recognition: primary = own new data; secondary = existing data. Qualitative = depth/motives; quantitative = measurable magnitudes. Be ready to compute absolute and relative market share and to interpret market volume versus potential.",
        },
        {
          type: "takeaways",
          items: [
            "Research informs customers, competitors and industry context.",
            "Primary is tailored but costly; secondary is cheaper but general.",
            "Qualitative explains; quantitative measures.",
            "Share figures are only as good as the market definition behind them.",
          ],
        },
        {
          type: "check",
          items: [
            "Give one primary and one secondary source for a bakery considering a new gluten-free line.",
            "When is qualitative research especially valuable?",
            "If own sales are €50,000 and market volume is €500,000, what is absolute share?",
          ],
        },
      ],
    },

    {
      id: "5.6",
      title: "Segmentation and targeting strategies",
      blocks: [
        {
          type: "scene",
          title: "Not every rider wants the same bike",
          text: "GlassHarbor’s research shows four different “ideal bikes” living in one city: students wanting cheap short hops, nurses wanting reliable night commuting, tourists wanting day rentals near the harbour, and cargo users needing stable racks. Treating all four as one average customer would produce a bike that delights nobody. Segmentation starts by grouping similar customers; targeting chooses whom to serve; positioning shapes what those groups believe the offer stands for.",
        },
        {
          type: "idea",
          term: "Market segmentation",
          text: "Dividing a market into relatively homogeneous subgroups of customers who share relevant characteristics for marketing decisions.",
        },
        {
          type: "idea",
          term: "Targeting",
          text: "Evaluating segment attractiveness and selecting one or more segments to serve with a tailored strategy.",
        },
        {
          type: "idea",
          term: "Positioning",
          text: "Creating a clear image or identity for the product in the minds of the chosen target market(s) so the offer fits their demands.",
        },
        {
          type: "mechanism",
          title: "When a segment is worth forming",
          text: "Segmentation is useful when groups are measurable (size, purchasing power), profitable, accessible through communication and distribution channels, and durable enough that they do not dissolve too quickly. Without those conditions, fine slicing wastes resources.",
        },
        {
          type: "table",
          caption: "Common segmentation bases",
          headers: ["Base", "Example variables", "What it helps decide"],
          rows: [
            [
              "Geographic",
              "City, region, country; urban vs rural",
              "Coverage area, logistics, climate or language fit",
            ],
            [
              "Demographic",
              "Age, gender, education, income, employment status",
              "Purchasing power and life-stage offers",
            ],
            [
              "Psychographic",
              "Lifestyle, values, attitudes (e.g. environmental concern)",
              "Message tone and brand meaning",
            ],
            [
              "Behavioural",
              "Usage intensity, occasions, loyalty, benefits sought",
              "Service level, pricing, loyalty programmes",
            ],
          ],
        },
        {
          type: "idea",
          term: "Target market",
          text: "A group of people or businesses towards whom a firm markets goods, services or ideas with a strategy designed to satisfy their specific needs and preferences.",
        },
        {
          type: "p",
          text: "Targeting strategies differ in how many segments they serve and how much the offer varies. Course language often says mass, segment and niche marketing; the same logic appears as undifferentiated, differentiated and concentrated (niche) targeting.",
        },
        {
          type: "compare",
          title: "Three targeting strategies",
          left: {
            title: "Undifferentiated (mass)",
            items: [
              "One offer for the whole market",
              "Same promotion style for almost all",
              "Economies of scale possible; less flexible",
              "Common for widely used staples (soap, basic pens)",
            ],
          },
          right: {
            title: "Differentiated vs concentrated",
            items: [
              "Differentiated (segment): different offers for several segments",
              "Resources focus where strategic fit is strongest",
              "Concentrated (niche): deep focus on a narrow subgroup",
              "Small firms often niche; specialists can lead despite size",
            ],
          },
        },
        {
          type: "table",
          caption: "Mass, segment and niche marketing compared",
          headers: ["Strategy", "Also called", "Offer pattern", "Typical trade-off"],
          rows: [
            [
              "Mass marketing",
              "Undifferentiated targeting",
              "Same product to all customers",
              "Scale efficiency vs weak fit to special needs",
            ],
            [
              "Segment marketing",
              "Differentiated targeting",
              "Different products for one or more segments",
              "Better fit vs higher complexity/cost",
            ],
            [
              "Niche marketing",
              "Concentrated targeting",
              "Focus on particular subgroups within segments",
              "Depth and expertise vs limited volume",
            ],
          ],
        },
        {
          type: "worked",
          title: "GlassHarbor chooses a niche inside a segment",
          steps: [
            "Geographic: one coastal city and inner suburbs.",
            "Demographic: employed adults including shift workers.",
            "Psychographic: prefer lower waste and dislike unused ownership.",
            "Behavioural: regular commuters, not weekend hobby riders.",
            "Segment chosen: shift-working commuters with limited storage at home.",
            "Niche inside it: night-shift staff needing lit routes and battery-swap certainty.",
            "Positioning phrase: “get to the ward on time — battery panic optional.”",
          ],
          result:
            "Concentrated targeting lets a small firm win relevance without matching mass producers on volume.",
        },
        {
          type: "think",
          prompt:
            "Why can mass marketing of laundry detergent still make sense while mass marketing of specialised medical bikes usually does not?",
        },
        {
          type: "trap",
          text: "Trap: calling any small customer group a valid segment even when it cannot be measured, reached or served profitably. Trap: confusing niche marketing with “randomly ignoring research”. Niche is deliberate focus, not guesswork.",
        },
        {
          type: "exam",
          text: "Exam cue: match bases (geo/demo/psycho/behavioural) to examples. Mass = ignore segment differences; segment = tailor to known segments; niche = deeper focus on subgroups. Economies of scale favour mass; small-firm constraints often favour niche.",
        },
        {
          type: "connect",
          text: "Targeting is only complete when the marketing mix (section 5.7) delivers a consistent product, price, place and promotion for the chosen segment.",
        },
        {
          type: "takeaways",
          items: [
            "Segmentation groups similar customers; targeting selects; positioning frames meaning.",
            "Useful segments are measurable, profitable, accessible and durable.",
            "Undifferentiated, differentiated and concentrated strategies trade scale against fit.",
            "Niche specialists can lead a narrow market without being large overall.",
          ],
        },
        {
          type: "check",
          items: [
            "Sort “values environmental reuse” into the correct segmentation base.",
            "Name one advantage and one drawback of undifferentiated targeting.",
            "What is positioning trying to fix in customers’ minds?",
          ],
        },
      ],
    },

    {
      id: "5.7",
      title: "The marketing mix, life cycle and BCG matrix",
      blocks: [
        {
          type: "scene",
          title: "Four dials, one sound",
          text: "North Harbor Time’s sealed dock clock is almost ready. If the price screams luxury while the sales channel is a discount warehouse, customers will not know what to believe. If promotion promises glove-friendly numerals but the product ships tiny markings, trust collapses. The marketing mix is the craft of setting product, price, place and promotion so they play in tune for the target market.",
        },
        {
          type: "idea",
          term: "Marketing mix",
          text: "A harmonised blend of marketing tools that best meets the needs and wants of customers in the targeted market. Classically organised as the four Ps: product, price, place and promotion.",
        },
        {
          type: "figure",
          id: "marketing-mix",
          caption:
            "The four elements of the marketing mix: product, price, place and promotion — decisions that must stay consistent with one another and with market research.",
        },
        {
          type: "p",
          text: "The basic idea is simple to state and hard to execute: provide a suitable product, at a price customers will accept, available in a convenient place, supported by a clear promotional message. Market research should inform all four dials.",
        },

        {
          type: "idea",
          term: "Product (as a mix element)",
          text: "All goods and services offered — the heart of the mix. Includes line and mix decisions, branding, quality level, features, packaging and supporting services.",
        },
        {
          type: "p",
          text: "Most firms offer more than one item. Similar items form a product line; several lines form the product mix. Brands distinguish offerings and support USP, recognition and loyalty; familiar brands also reassure travellers who meet the same marks abroad. Mix strategy may specialise (one line) or diversify (more lines). Relaunches refresh; line extensions deepen; mix extensions widen; weak items may be eliminated.",
        },

        {
          type: "idea",
          term: "Product life cycle",
          text: "A theoretical model of stages in a product’s market life that differ in sales and profit: introduction, growth, maturity and decline (after development costs before launch).",
        },
        {
          type: "figure",
          id: "product-life-cycle",
          caption:
            "Product life cycle: introduction, growth, maturity and decline — sales and profit follow different paths across stages.",
        },
        {
          type: "mechanism",
          title: "What typically happens in each stage",
          text: "Before launch there are development costs and no sales. Introduction often starts in loss: promotion is heavy and prices may be set to attract trial. Growth brings faster sales; average costs may fall with scale; profits usually appear and strengthen. Maturity peaks sales; growth slows; competition intensifies. Decline sees falling sales and profits; exit or efficiency becomes central. Stage length varies: some staples linger in maturity for years; fads may fade within months.",
        },
        {
          type: "table",
          caption: "Product life cycle characteristics (course-style summary)",
          headers: ["Stage", "Typical strategy emphasis", "Customers", "Sales", "Profit"],
          rows: [
            [
              "Introduction",
              "Market development / trial",
              "Innovators and early adopters",
              "Low, then rising",
              "None (often loss)",
            ],
            [
              "Growth",
              "Market penetration",
              "Widening mass market",
              "Rapid growth",
              "Strong, rising toward peak",
            ],
            [
              "Maturity",
              "Defensive positioning",
              "Mass market",
              "Peak, slow growth",
              "Peak then under pressure",
            ],
            [
              "Decline",
              "Efficiency or exit",
              "Loyal remainers",
              "Declining",
              "Low or none",
            ],
          ],
        },
        {
          type: "idea",
          term: "Boston Consulting Group (BCG) matrix",
          text: "A portfolio map of products by market growth (high/low) and relative market share (high/low), classifying them as stars, cash cows, question marks or dogs (poor dogs).",
        },
        {
          type: "figure",
          id: "bcg-matrix",
          caption:
            "Boston Consulting Group matrix: stars and question marks in high-growth markets; cash cows and dogs in low-growth markets — split by high versus low relative market share.",
        },
        {
          type: "table",
          caption: "BCG categories",
          headers: ["Category", "Market growth", "Relative market share", "Management implication"],
          rows: [
            [
              "Stars",
              "High",
              "High",
              "Valuable; still need investment in promotion and capacity",
            ],
            [
              "Cash cows",
              "Low",
              "High",
              "Generate cash with lower investment needs",
            ],
            [
              "Question marks",
              "High",
              "Low",
              "Need decisions: invest to build share or withdraw",
            ],
            [
              "Dogs (poor dogs)",
              "Low",
              "Low",
              "Limited future; candidates for harvest or exit",
            ],
          ],
        },
        {
          type: "mechanism",
          title: "Balancing the portfolio",
          text: "A healthy portfolio blends stars, cash cows and selected question marks, without too many dogs. Cash-cow revenues can fund stars (future cows) and promising question marks. Life-cycle stage and BCG cell often move together: introduction may look like a question mark; growth success can create a star; mature leaders become cash cows; decline risks dog status.",
        },
        {
          type: "p",
          text: "Extension strategies try to delay decline — for example by changing the product mix or entering new markets. Ansoff’s product–market matrix organises options: market penetration (existing product, existing market — safest), product development (new product, existing market), market development (existing product, new market), and diversification (new product and new market — riskiest, but can spread risk long term).",
        },

        {
          type: "idea",
          term: "Price",
          text: "The amount customers pay. Hard to reset casually once a strategy is established. Influenced by costs, competitors’ prices and demand (willingness to pay). Lowest price is not automatically best.",
        },
        {
          type: "bullets",
          items: [
            "Cost-based pricing: ensure costs are covered and a profit margin is possible.",
            "Competition: hard to charge more without superiority or clear difference.",
            "Demand: high willingness to pay supports higher prices.",
          ],
        },
        {
          type: "p",
          text: "In the long run, total costs (fixed plus variable) must be covered. Variable costs rise with output; fixed costs (rent, insurance) do not vary directly with output in the short run. Break-even is where revenues equal total costs. Contribution per unit is selling price minus variable cost per unit; it helps cover fixed costs and then profit.",
        },
        {
          type: "formula",
          label: "Contribution and break-even",
          text: "Contribution per unit = selling price − variable cost per unit\nBreak-even units ≈ fixed costs / contribution per unit",
          vars: "From the next whole unit above break-even, the simplified model shows profit (other factors held aside).",
        },
        {
          type: "p",
          text: "Variable-cost-plus (distribution) pricing adds a markup to variable cost — common when bidding or launching under competitive pressure. The short-run absolute lower limit is variable cost: any price above it still contributes to fixed costs. Before changing prices, consider price elasticity of demand: elastic if the percentage quantity change exceeds the percentage price change; inelastic if quantity responds less. Few substitutes and necessities lean inelastic; luxuries and easy substitutes lean elastic. Short-run and long-run elasticity can differ as habits and substitutes adjust.",
        },
        {
          type: "worked",
          title: "Break-even for a sealed dock clock",
          steps: [
            "Variable cost per clock = €54; planned selling price = €90.",
            "Contribution = 90 − 54 = €36.",
            "Fixed costs for the line this period = €72,000.",
            "Break-even units ≈ 72,000 / 36 = 2,000 clocks.",
            "A bulk buyer offers €70 each for 300 clocks: contribution = 70 − 54 = €16 each → €4,800 toward fixed costs.",
            "Accept if those 300 would otherwise sit unsold; decline if they surely sell at €90 elsewhere.",
          ],
          result:
            "Markup targets and short-run acceptance decisions both rest on contribution logic, not on vanity list prices alone.",
        },

        {
          type: "idea",
          term: "Place (distribution)",
          text: "How and where the product is made available. A strong product fails if customers cannot find it where they expect it.",
        },
        {
          type: "bullets",
          items: [
            "Distributors, wholesalers (sell on to businesses) and retailers (sell on to consumers)",
            "Agents or brokers (especially in B2B)",
            "Online selling, telemarketing",
            "Vending machines, kiosks and similar formats",
          ],
        },
        {
          type: "p",
          text: "Channel partners bridge factory and final buyer: logistics, local information and advertising support. Beverage makers, for example, rarely sell every bottle direct to households nationwide; they need partners for reach.",
        },

        {
          type: "idea",
          term: "Promotion",
          text: "Activities that inform potential customers and the public about the business, its products and their benefits.",
        },
        {
          type: "bullets",
          items: [
            "Advertising: TV, radio, online, social media, print, outdoor, transit",
            "Direct mailing",
            "Personal selling through salespeople",
            "Sales promotions",
            "Sponsorship of events, people or organisations",
            "Public relations for a favourable image and stakeholder relationships",
          ],
        },
        {
          type: "p",
          text: "Small budgets still have options: website, local ads, social presence, leaflets and word-of-mouth from satisfied customers. Promotion must match the target segment and stay consistent with product quality cues, price position and place.",
        },
        {
          type: "table",
          caption: "Harmonised mix sketch for North Harbor’s dock clock",
          headers: ["P", "Choice", "Consistency check"],
          rows: [
            [
              "Product",
              "Sealed quartz, oversized numerals, glove-friendly crown",
              "Matches harbour-worker needs from research",
            ],
            [
              "Price",
              "Mid-premium above toy clocks; below luxury mechanicals",
              "Signals durability without claiming jewellery status",
            ],
            [
              "Place",
              "Marine suppliers, selected hardware stores, direct web shop",
              "Found where dock staff already buy kit",
            ],
            [
              "Promotion",
              "Demo videos with gloves on; harbour newsletter; trade stall",
              "Shows the USP in use, not abstract luxury imagery",
            ],
          ],
        },
        {
          type: "think",
          prompt:
            "If North Harbor cuts price by 40% to chase volume while keeping “premium sealed instrument” ads, which mix conflict will customers notice first?",
        },
        {
          type: "trap",
          text: "Trap: memorising four Ps as a shopping list without harmonisation. Trap: placing a high-share product in a low-growth market as a star — that cell is a cash cow. Trap: treating break-even as guaranteeing cash in the bank regardless of credit and stock timing.",
        },
        {
          type: "exam",
          text: "Exam recognition: four Ps definitions; life-cycle stage clues (loss at introduction, rapid sales in growth, peak then pressure in maturity, fall in decline); BCG axes are market growth and relative share; contribution = price − variable cost; elastic vs inelastic price response; place and promotion tool lists.",
        },
        {
          type: "connect",
          text: "The mix implements objectives (5.2) for chosen targets (5.6) using research (5.5). Orientation (5.3) shapes whether the product P starts from features or from stated needs. Responsibility (5.4) constrains claims and design inside the same mix.",
        },
        {
          type: "takeaways",
          items: [
            "The mix is a blend: product, price, place, promotion must fit together.",
            "Life-cycle stages differ in sales, profit and sensible strategy.",
            "BCG maps growth against relative share to guide portfolio cash flows.",
            "Pricing rests on costs, competition and demand — with contribution and elasticity as decision tools.",
            "Place and promotion are not optional extras; they complete availability and meaning.",
          ],
        },
        {
          type: "check",
          items: [
            "Which BCG cell has high growth and low relative share?",
            "State the contribution formula and one reason to accept a price below normal markup.",
            "List three promotion tools a low-budget service firm could still use.",
            "Name Ansoff’s four growth options from safest to riskiest.",
          ],
        },
      ],
    },
  ],

  recap: [
    "A marketing product is any exchangeable good or service that fulfils wishes and needs; portfolios are shaped as lines and mixes, while brands and USPs drive differentiation.",
    "Marketing objectives — satisfaction, loyalty, awareness, USP, sales, market share, profitability — should be explicit and mutually consistent.",
    "Product orientation builds then sells; market orientation researches then builds; CRM extends relationships with careful data use.",
    "Responsible marketing faces the risk of inflating wants and supports more sustainable production and consumption patterns such as repair, reuse and rental.",
    "Market research combines primary/secondary sources and qualitative/quantitative methods; absolute and relative share quantify competitive position.",
    "Segmentation uses geographic, demographic, psychographic and behavioural bases; targeting may be undifferentiated (mass), differentiated (segment) or concentrated (niche).",
    "The marketing mix harmonises product, price, place and promotion; life-cycle stages and the BCG matrix guide how products are managed over time.",
  ],
};
