export default {
  num: 3,
  title: "Focus on different types of businesses",
  intro:
    "Chapter 2 showed how households and businesses meet in markets. Chapter 3 asks a sharper question: once you see a business, how do you describe it accurately? Two firms can both sell to customers and still differ in the resources they combine, the sector they sit in, whether profit is the mission, how large they are, and how far their market reaches. Overlay stakeholder interests on that map and you can classify almost any organisation the exam throws at you.",
  objectives: [
    "Name the factors of production (land, labour, capital, entrepreneurship/enterprise) and sort concrete inputs into the right factor.",
    "Classify activity as primary, secondary or tertiary, and explain why developed economies are tertiary-heavy.",
    "Distinguish profit-oriented businesses from not-for-profit organisations without claiming either can ignore cash.",
    "Measure business size with employees, turnover and balance-sheet total, and place a firm as micro, small, medium or large using course thresholds.",
    "Label a firm as local, national or international/multinational and spot the coordination challenges that grow with reach.",
    "Map stakeholders versus shareholders, separate internal from external groups, and recognise conflicting interests.",
  ],
  sections: [
    {
      id: "3.1",
      title: "Factors of production: what every business combines",
      blocks: [
        {
          type: "scene",
          title: "Opening scene — HarborGlow workshop",
          text: "HarborGlow builds weatherproof lanterns for marina shops. Copper sheet arrives from a metals dealer, a cutter shapes housings, assemblers fit LEDs, a founder negotiates shop shelf space, and a design spreadsheet decides which models to keep. The finished lantern looks simple. The resource mix behind it is not.",
        },
        {
          type: "idea",
          term: "Factors of production",
          text: "Factors of production are the resources a business combines to create goods and services. In this course the core set is land, labour, capital and entrepreneurship (also called enterprise). Knowledge and technology reshape how those factors work together.",
        },
        {
          type: "mechanism",
          title: "How the four core factors fit together",
          text: "Land supplies natural resources. Labour supplies human effort and skill. Capital supplies produced means of production and the financial resources that keep operations running. Entrepreneurship (enterprise) is the organising factor: it combines the others, chooses what to make, and bears the risk that the plan fails. Without enterprise, land, labour and capital sit idle or misaligned.",
        },
        {
          type: "table",
          caption: "Table 1. Factors of production — what each factor covers",
          headers: ["Factor", "What it covers in this course", "HarborGlow example"],
          rows: [
            [
              "Land",
              "Natural resources used in production (soil, water, minerals, forests, fisheries, sites with natural character)",
              "Coastal workshop site; copper ore origin before refining",
            ],
            [
              "Labour",
              "All human resources applied in production — manual and mental, permanent and seasonal",
              "Cutters, assemblers, bookkeeper, quality checker",
            ],
            [
              "Capital",
              "Machinery, plant, vehicles and financial resources used to operate",
              "Press, leased laser cutter, delivery van, cash for payroll",
            ],
            [
              "Entrepreneurship / enterprise",
              "Bringing land, labour and capital together; coordinating decisions; bearing business risk",
              "Founder choosing model range, signing shop contracts, absorbing unsold stock risk",
            ],
          ],
        },
        {
          type: "p",
          text: "Labour is wider than shop-floor muscle. Planners, accountants, coaches and call-centre staff are labour when they supply human resources. Capital includes equipment whether owned or leased, plus inventories and cash used to run the business. Land is natural-resource based: standing forests and mineral deposits count; a finished oak barrel or cut timber ready for milling is an input that has already left the pure land category and is treated with capital/materials logic in classification tasks.",
        },
        {
          type: "idea",
          term: "Entrepreneurship and enterprise",
          text: "Entrepreneurship is the activity of organising production and carrying risk. Enterprise is the same organising factor viewed as the venture that combines resources. Exam wording may use either label; both point to coordination and risk-bearing, not to every clever task performed by an employee.",
        },
        {
          type: "p",
          text: "Knowledge and technology sit alongside the four core factors. Fermentation know-how, coding skill or irrigation software changes how land, labour and capital combine. They do not replace entrepreneurship: knowing how to blend wine is knowledge; deciding which vineyard contracts to sign and accepting the loss if the vintage fails is entrepreneurship.",
        },
        {
          type: "worked",
          title: "Worked classification — three different mixes",
          steps: [
            "Alpine dairy pasture: meadow and water = land; milkers and cheese makers = labour; vats and refrigerated truck = capital; owner choosing herd size and cheese contracts = entrepreneurship.",
            "City coding studio in rented rooms: little agricultural land, but location still matters; developers = labour; laptops, licences and cash buffer = capital; founders pitching clients and carrying unpaid invoices = entrepreneurship; stack knowledge and tools = knowledge/technology.",
            "Printed-circuit plant: site and process water involve land/natural resources; engineers and operators = labour; lines, clean rooms and working capital = capital; plant leadership coordinating orders and risk = entrepreneurship.",
          ],
          result:
            "Different businesses emphasise different factors, but viable production almost always needs more than one factor at once.",
        },
        {
          type: "think",
          prompt:
            "A technician replaces a phone screen using a spare part from inventory. Which factor is the technician? Which factor is the spare part? Who supplies entrepreneurship if a franchise owner decides which repairs to advertise this month?",
        },
        {
          type: "trap",
          text: "Trap: treating labour as only physical work, capital as only owned machines, or entrepreneurship as any purchase decision. Labour includes office and service work. Leased tools remain capital. Spending money alone is not entrepreneurship — organising factors and bearing business risk is.",
        },
        {
          type: "exam",
          text: "Exam recognition: stems often hand you a vignette (winery, repair shop, factory, insurer) and ask whether a named item is land, labour, capital or entrepreneurship. Translate the item into the factor definition first. Watch for false splits such as \"services use only labour\" or \"risk-bearing is labour because it takes time.\"",
        },
        {
          type: "connect",
          text: "Connect: factors of production are the micro building blocks that later feed sector classification (what the firm mainly does) and stakeholder analysis (who supplies or depends on those factors).",
        },
        {
          type: "takeaways",
          items: [
            "Four core factors: land, labour, capital, entrepreneurship/enterprise.",
            "Knowledge and technology change how factors combine.",
            "Entrepreneurship organises and bears risk; it is not every skilled task.",
            "Classify inputs by economic role, not by whether the output feels \"physical.\"",
          ],
        },
        {
          type: "check",
          items: [
            "Can labour include an insurance claims handler?",
            "Is a leased bottling line still capital?",
            "Does ordering barrels automatically equal entrepreneurship?",
          ],
        },
      ],
    },

    {
      id: "3.2",
      title: "Primary, secondary and tertiary sectors",
      blocks: [
        {
          type: "scene",
          title: "Opening scene — one metal, three businesses",
          text: "Copper leaves a mine as ore. A cable plant draws it into wire. A grid-services firm installs and maintains household connections. Same material story, three different sector labels — because sector follows the firm’s main activity, not the material’s origin.",
        },
        {
          type: "idea",
          term: "Three-sector model",
          text: "The three-sector model sorts economic activity into primary (extraction of raw materials), secondary (manufacturing transformation into goods) and tertiary (services).",
        },
        {
          type: "figure",
          id: "economic-sectors",
          caption:
            "Figure 1. Economic sectors — primary extracts, secondary manufactures, tertiary serves. Follow the main activity of the business, not the story of the raw material alone.",
        },
        {
          type: "mechanism",
          title: "How to assign a sector",
          text: "Ask what the business mainly does day to day. If it extracts or harvests from nature, it is primary (farming, fishing, mining, forestry). If it transforms materials into goods, it is secondary (cars, ships, machinery, circuit boards, clothing, computers). If it provides services — distribution, banking, insurance, coaching, technical support, retail — it is tertiary. A retailer of packaged food is tertiary even though the food began on a farm.",
        },
        {
          type: "compare",
          title: "Sector focus at a glance",
          left: {
            title: "Primary & secondary",
            items: [
              "Primary: pull resources from the earth/sea/forest",
              "Secondary: reshape materials into goods",
              "Output is typically tangible at the point of production",
              "Often larger share in less developed economies (primary especially)",
            ],
          },
          right: {
            title: "Tertiary",
            items: [
              "Delivers services rather than extracting or fabricating",
              "Includes trade, finance, coaching, support, logistics services",
              "Can still use heavy capital and skilled labour",
              "Dominates output in highly developed economies",
            ],
          },
        },
        {
          type: "p",
          text: "As economic development advances, the tertiary sector usually grows in importance. In highly developed economies — for example EU countries with high GDP per capita — the tertiary sector commonly accounts for more than 70% of economic output, while the primary sector is a small percentage of output even though food production remains vital.",
        },
        {
          type: "idea",
          term: "Gross domestic product (GDP)",
          text: "GDP is the total monetary value of final goods and services produced within a country’s borders in a period (usually a year). It summarises overall economic activity and, when adjusted for inflation and rising over time, signals economic growth.",
        },
        {
          type: "mechanism",
          title: "What GDP measures — and what it does not",
          text: "GDP is useful for comparing activity and tracking growth, but it is imperfect for well-being. Not all income sources are captured. Quality and sustainability of growth are not scored. Rebuild spending after an ecological disaster can raise GDP even when people are worse off. Still, GDP often correlates with indicators such as health status and happiness.",
        },
        {
          type: "worked",
          title: "Worked sector walk-through",
          steps: [
            "Copper mine extracting ore → primary.",
            "Plant turning copper into cables → secondary.",
            "Utility installing and maintaining household grid links → tertiary.",
            "Supermarket selling packaged food → tertiary (distribution/service), not primary.",
          ],
          result:
            "Classify the firm’s main operation. Do not drag every downstream seller back into the primary sector because inputs once grew on land.",
        },
        {
          type: "think",
          prompt:
            "A software firm writes warehouse apps for manufacturers. Is the software firm secondary because manufacturers are secondary customers, or tertiary because it sells a service?",
        },
        {
          type: "trap",
          text: "Trap: labelling retail or logistics as secondary \"because goods are involved,\" or assuming primary activity disappears in rich countries. Goods can move through tertiary channels; primary can be small in GDP share and still socially essential.",
        },
        {
          type: "exam",
          text: "Exam recognition: expect chains (mine → factory → installer → retailer) and one true sector label per firm. Developed-economy items often test the \"tertiary > 70% of output\" pattern and the idea that GDP growth is not the same as well-being.",
        },
        {
          type: "takeaways",
          items: [
            "Primary extracts, secondary manufactures, tertiary serves.",
            "Assign sector by the firm’s main activity.",
            "Developed economies are typically tertiary-heavy.",
            "GDP tracks activity/growth; it is not a complete well-being scorecard.",
          ],
        },
        {
          type: "check",
          items: [
            "Name one primary, one secondary and one tertiary example that share a materials story.",
            "Why can primary be vital yet small in GDP share?",
            "Give one reason GDP can rise while well-being falls.",
          ],
        },
      ],
    },

    {
      id: "3.3",
      title: "Profit-oriented versus not-for-profit",
      blocks: [
        {
          type: "scene",
          title: "Opening scene — two roofs, two missions",
          text: "PulseFit runs paid small-group training in a converted warehouse and expands only when expected surplus justifies new coaches. RiverAid collects donations and membership fees to fund flood-response kits; any surplus buys more kits and training, not private owner dividends. Both need cash. Only one treats owner profit as the central success metric.",
        },
        {
          type: "idea",
          term: "Profit-oriented business",
          text: "A profit-oriented business aims for revenues above costs and expenses. Profit rewards owners/investors for risk and can be reinvested to strengthen durability and competitiveness.",
        },
        {
          type: "idea",
          term: "Not-for-profit organisation (NPO)",
          text: "A not-for-profit organisation mainly aims to cover costs while pursuing a mission. It still needs revenues — often donations, fees, grants or membership income — and may generate a surplus, but that surplus is reinvested into services or projects rather than treated as private profit as the organisation’s purpose.",
        },
        {
          type: "mechanism",
          title: "Why surplus still matters for NPOs",
          text: "Covering costs is not optional. Without enough inflow, an NPO cannot deliver aid, culture or environmental work. A surplus is useful because it funds more projects and stronger delivery. The difference from a profit-oriented firm is the primary aim and how success is judged: mission delivery plus financial sustainability versus financial return alongside viability.",
        },
        {
          type: "table",
          caption: "Table 2. Profit-oriented businesses and not-for-profit organisations compared",
          headers: [
            "Aspect",
            "Profit-oriented business",
            "Not-for-profit organisation (NPO)",
          ],
          rows: [
            [
              "Primary aim",
              "Earn profits (revenues above costs) as a central goal",
              "Cover costs while pursuing a mission",
            ],
            [
              "Use of surplus",
              "Reward owners/investors for risk; reinvest to strengthen the firm",
              "Reinvest to enhance services or projects; not distributed as private profit goal",
            ],
            [
              "Need for revenue",
              "Sales and other commercial income required",
              "Donations, fees, grants or membership income still required",
            ],
            [
              "Success focus",
              "Financial return alongside viability and competitiveness",
              "Mission delivery and financial sustainability",
            ],
            [
              "Typical examples",
              "Private firms, commercial partnerships, profit-seeking corporations",
              "Charities, humanitarian NGOs, many cultural and environmental associations",
            ],
          ],
        },
        {
          type: "worked",
          title: "Worked contrast",
          steps: [
            "Private language school expands campuses when forecast profit covers rent risk → profit-oriented.",
            "International relief organisation raises donations for emergency shelters; overheads covered; excess expands programmes → not-for-profit.",
            "Both monitor cash weekly; only the school treats owner profit as a core success score.",
          ],
          result:
            "Cash discipline is shared. Purpose and surplus destination separate the two types.",
        },
        {
          type: "think",
          prompt:
            "An environmental NPO sells branded water bottles to fund river clean-ups and ends the year with a surplus. Does the surplus automatically turn it into a profit-oriented business?",
        },
        {
          type: "trap",
          text: "Trap: believing NPOs need no money, or that any surplus proves the organisation is secretly profit-oriented. NPOs need inflows; surplus used for mission is consistent with not-for-profit status. Conversely, a firm that reinvests heavily can still be profit-oriented if owner return remains a central aim.",
        },
        {
          type: "exam",
          text: "Exam recognition: look for aim language (\"reward investors\" vs \"cover costs / mission\"). Examples such as major humanitarian or environmental NGOs signal NPO. Do not confuse \"needs revenue\" with \"is profit-oriented.\"",
        },
        {
          type: "connect",
          text: "Connect: profit orientation shapes which stakeholders push hardest (investors seeking return vs donors seeking mission proof), which Chapter 3.6 develops.",
        },
        {
          type: "takeaways",
          items: [
            "Profit-oriented: revenues above costs as a central goal; reward risk; reinvest.",
            "NPO: mission first; still needs revenue/donations; surplus strengthens delivery.",
            "Both must manage money; purpose and surplus logic differ.",
          ],
        },
      ],
    },

    {
      id: "3.4",
      title: "Business size: SMEs and large firms",
      blocks: [
        {
          type: "scene",
          title: "Opening scene — same industry, different scale",
          text: "Three bike businesses share one street name in conversation: a two-person repair loft, a regional frame workshop with dozens of staff, and a listed group with thousands of employees worldwide. Customers say \"bike company\" for all three. Size measures force a clearer label.",
        },
        {
          type: "idea",
          term: "SME (and MSME)",
          text: "SME (small and medium-sized enterprise), sometimes written MSME to highlight micro firms, is the umbrella for businesses below large-enterprise ceilings. Size matters for access to finance and support programmes, and often for how heavy accounting rules become.",
        },
        {
          type: "mechanism",
          title: "How size is measured in this course",
          text: "The course uses European Commission-style thresholds combining staff headcount with either turnover or balance-sheet total. About 99% of EU businesses are SMEs. Crossing the ceilings moves a firm into the large category. In many countries, smaller firms may use simpler accounting methods to calculate profit or loss (see Chapter 6).",
        },
        {
          type: "table",
          caption: "Table 3. Course size categories (EU SME-style thresholds)",
          headers: [
            "Company category",
            "Staff headcount",
            "Turnover",
            "OR Balance sheet total",
          ],
          rows: [
            ["Micro", "< 10", "≤ €2 m", "≤ €2 m"],
            ["Small", "< 50", "≤ €10 m", "≤ €10 m"],
            ["Medium-sized", "< 250", "≤ €50 m", "≤ €43 m"],
            [
              "Large",
              "Above SME ceilings",
              "Above SME ceilings",
              "Above SME ceilings",
            ],
          ],
        },
        {
          type: "formula",
          label: "Size classification checklist",
          text: "Category = f(staff headcount, AND (turnover OR balance-sheet total))",
          vars: "Compare headcount to the staff ceiling, then check whether turnover or balance-sheet total stays within the matching financial ceiling. Medium-sized uses ≤ €50 m turnover or ≤ €43 m balance-sheet total with staff < 250. Large means above the SME ceilings.",
        },
        {
          type: "worked",
          title: "Worked size placements",
          steps: [
            "Studio A: 6 employees, €1.2 m turnover → micro.",
            "Studio B: 40 employees, €8 m turnover → small.",
            "Factory C: 180 employees, €40 m turnover, €30 m balance-sheet total → medium-sized.",
            "Group D: 8,000 employees worldwide → large.",
          ],
          result:
            "A–C sit inside SME bands (subject to full legal tests in real programmes); D is large. SME innovation support typically targets the SME side of that line.",
        },
        {
          type: "think",
          prompt:
            "A firm has 45 staff and €12 m turnover. Which ceiling does it fail for \"small,\" and what category should you test next?",
        },
        {
          type: "trap",
          text: "Trap: using only employees, or treating \"SME\" as a vibe (\"we feel small\"). Headcount and financial ceilings both matter. Also remember medium-sized balance-sheet total peaks at €43 m in the course table, not €50 m.",
        },
        {
          type: "exam",
          text: "Exam recognition: expect numeric vignettes. Place the firm before debating policy. Memorise the micro/small/medium ceilings and the idea that size affects funding access and accounting burden.",
        },
        {
          type: "takeaways",
          items: [
            "Size uses staff, turnover and/or balance-sheet total.",
            "Course bands: micro <10; small <50; medium <250 (with matching € ceilings).",
            "Most EU firms are SMEs; large firms sit above the ceilings.",
            "Size affects support access and often accounting complexity.",
          ],
        },
        {
          type: "check",
          items: [
            "State the three micro ceilings.",
            "Why does the medium row show €50 m and €43 m?",
            "Name one reason size categories matter beyond vocabulary.",
          ],
        },
      ],
    },

    {
      id: "3.5",
      title: "Local, national and international reach",
      blocks: [
        {
          type: "scene",
          title: "Opening scene — bread, policies, parts",
          text: "A corner bakery sells to walkers within a few streets. A domestic insurer writes policies in every major city of one country but nowhere abroad. A components maker runs plants on two continents and ships to industrial buyers worldwide. Geography is not decoration — it changes logistics, law, language and funding pressure.",
        },
        {
          type: "idea",
          term: "Local (regional) business",
          text: "A local or regional business operates in a limited area. Most customers live nearby. It does not serve a national or international market. Typical early-stage challenges include winning enough local customers and avoiding undercapitalisation — own funds are thin and extra finance is hard to obtain.",
        },
        {
          type: "idea",
          term: "National business",
          text: "A national business serves the home-country market but not foreign markets. Location still matters, and the supply chain lengthens because goods and services must reach other places within the country.",
        },
        {
          type: "idea",
          term: "International / multinational business",
          text: "An international or multinational business makes and/or sells goods and services in more than one country. Firms often expand abroad when the home market is too small. Cross-border reach brings longer supply chains, different legal and economic systems, cultures, languages and sometimes currencies.",
        },
        {
          type: "mechanism",
          title: "Why wider reach raises coordination load",
          text: "Each step outward adds interfaces. Local firms fight for nearby demand and cash. National firms must design domestic logistics and consistent delivery. International firms add borders: rules, cultures, languages and currency risk. As more firms operate across borders, markets and production integrate more deeply — globalisation.",
        },
        {
          type: "idea",
          term: "Globalisation",
          text: "Globalisation refers to the deepening cross-border integration of markets, production and information as more firms operate internationally.",
        },
        {
          type: "compare",
          title: "Geographic reach compared",
          left: {
            title: "Local & national",
            items: [
              "Local: limited area; nearby customers",
              "National: whole home country; no foreign market",
              "Key frictions: funding (local), domestic logistics (national)",
              "Undercapitalisation is a classic local/small-firm pressure",
            ],
          },
          right: {
            title: "International / multinational",
            items: [
              "Make and/or sell in more than one country",
              "Longer cross-border supply chains",
              "Multiple legal/economic systems and cultures",
              "Possible multi-currency operations; fuels globalisation",
            ],
          },
        },
        {
          type: "table",
          caption: "Table 4. Reach, market and typical challenges",
          headers: ["Reach", "Market served", "Typical extra challenge"],
          rows: [
            [
              "Local / regional",
              "Small limited area",
              "Customer acquisition nearby; undercapitalisation",
            ],
            [
              "National",
              "Home country only",
              "Longer domestic supply chain; multi-location delivery",
            ],
            [
              "International / multinational",
              "More than one country",
              "Borders: law, culture, language, currency, longer chains",
            ],
          ],
        },
        {
          type: "worked",
          title: "Worked geographic labels",
          steps: [
            "Neighbourhood bike workshop with clients within a few kilometres → local.",
            "Supermarket chain in every major city of one country, none abroad → national.",
            "Components manufacturer with plants in Europe and Asia selling worldwide → international/multinational.",
          ],
          result:
            "Same product family can sit at any reach level; the market map decides the label.",
        },
        {
          type: "think",
          prompt:
            "An online tutor teaches only students in one country but servers and payment processors sit abroad. For Chapter 3 reach classification, which market definition matters most — where customers are, or where the servers sit?",
        },
        {
          type: "trap",
          text: "Trap: calling any firm with an imported input \"international,\" or treating multinational as a synonym for \"large.\" Reach is about where the firm makes and/or sells. A micro exporter can be international; a huge domestic chain can remain national.",
        },
        {
          type: "exam",
          text: "Exam recognition: vignettes stress customer geography and plant locations. Match local / national / international definitions, then mention the matching challenge (undercapitalisation, domestic logistics, cross-border complexity).",
        },
        {
          type: "connect",
          text: "Connect: wider reach multiplies stakeholders across communities and governments — the next section.",
        },
        {
          type: "takeaways",
          items: [
            "Local: limited area; funding and nearby demand are critical.",
            "National: home market only; longer domestic chain.",
            "International/multinational: make and/or sell across borders.",
            "Globalisation = deeper cross-border integration as such firms grow.",
          ],
        },
      ],
    },

    {
      id: "3.6",
      title: "Stakeholders, shareholders and conflicting interests",
      blocks: [
        {
          type: "scene",
          title: "Opening scene — night shifts at MeadowMill",
          text: "MeadowMill processes dairy for supermarket buyers. Owners want faster fulfilment. Night shifts would please buyers and raise utilisation. Residents hate lorry noise after 22:00. Tired staff worry about safety. A river community watches wastewater quality. One decision, several legitimate interests — that is stakeholder reality.",
        },
        {
          type: "idea",
          term: "Stakeholder",
          text: "A stakeholder is anyone who is (potentially) affected by a business’s activities and/or has an interest in what the business does. Globalisation and stronger environmental expectations have widened the set of people and groups firms must consider.",
        },
        {
          type: "idea",
          term: "Shareholder",
          text: "A shareholder is an owner of shares in a corporation — a specific ownership stake. Shareholders are stakeholders, but not all stakeholders are shareholders. Employees, customers, suppliers, neighbours and regulators can have strong interests without owning shares.",
        },
        {
          type: "figure",
          id: "stakeholder-map",
          caption:
            "Figure 2. Stakeholder map — the business at the centre, with owners/shareholders, managers, employees, customers, suppliers, government, communities and the natural environment around it.",
        },
        {
          type: "mechanism",
          title: "Internal versus external stakeholders",
          text: "Internal stakeholders operate inside the organisation: owners/shareholders, managers and employees. External stakeholders sit outside day-to-day membership but are affected by or interested in the firm: customers, suppliers, government, local/national/international communities and the natural environment. Managers may or may not also be owners.",
        },
        {
          type: "table",
          caption: "Table 5. Main stakeholder groups and typical interests",
          headers: ["Stakeholder group", "Internal / external", "Typical interest / concern"],
          rows: [
            [
              "Owners / shareholders / investors",
              "Internal (ownership)",
              "Return for risk; value growth; sometimes mission and social contribution",
            ],
            [
              "Managers",
              "Internal",
              "Income, career, ability to implement strategy",
            ],
            [
              "Employees",
              "Internal",
              "Wages, job security, meaningful work; shared values",
            ],
            [
              "Customers",
              "External",
              "Useful, reliable offers at acceptable prices; ongoing relationship",
            ],
            [
              "Suppliers",
              "External",
              "Timely orders, fair payment, stable future demand",
            ],
            [
              "Government",
              "External",
              "Tax compliance, observance of rules, contribution to public aims",
            ],
            [
              "Communities (local, national, international)",
              "External",
              "Jobs, congestion, pollution, cultural sponsorship, licence to operate",
            ],
            [
              "Natural environment",
              "External (affected system)",
              "Sustainable resource use; lower emissions, waste and ecological harm",
            ],
          ],
        },
        {
          type: "compare",
          title: "Shareholders versus the wider stakeholder set",
          left: {
            title: "Shareholders",
            items: [
              "Own shares in a company",
              "Subset of stakeholders",
              "Care strongly about returns and firm value",
              "Can sell shares or the business to realise gains",
            ],
          },
          right: {
            title: "Other stakeholders",
            items: [
              "May have no ownership stake",
              "Include staff, buyers, suppliers, state, communities, environment",
              "Care about jobs, prices, payment, rules, local quality of life",
              "Can enable or block the firm even without shares",
            ],
          },
        },
        {
          type: "p",
          text: "Owners invest capital and seek a payoff for risk. Successful trading can raise business value — often reflected in share prices for companies — which owners may realise by selling shares or the whole business. Profit need not be their only goal: solving customer problems and contributing to social welfare can matter too. Managers and employees depend on the firm for income and often for identity; the firm depends on them in return. Shared values and objectives support long-run success.",
        },
        {
          type: "p",
          text: "Suppliers and customers create mutual dependency: quality, quantity and timing of inputs must match production needs, while payment and future orders keep suppliers alive; customers need reliable offers and the firm needs their demand. Communities and government are affected through jobs, taxes, congestion and pollution. Environmental responsibility requires concrete results, not greenwashing — claiming friendliness without proven action.",
        },
        {
          type: "mechanism",
          title: "Why interests conflict",
          text: "Stakeholders pull in different directions. Faster delivery may raise owner returns and please customers yet harm residents and exhaust staff. Lower prices delight buyers but squeeze supplier margins. Stricter environmental filters protect rivers and may raise short-term costs. Good management makes conflicts visible and negotiates trade-offs instead of pretending one group is the only stakeholder.",
        },
        {
          type: "worked",
          title: "Worked stakeholder conflict — MeadowMill night shifts",
          steps: [
            "List groups: family owners, plant managers, production staff, milk suppliers, supermarket buyers, municipal government, nearby residents, river ecosystem.",
            "Night-shift proposal: owners and some buyers gain speed; residents lose quiet; staff face fatigue risk; wastewater timing may worry environmental monitors.",
            "Decision quality depends on recognising the conflict early, not on denying that residents or staff are stakeholders.",
          ],
          result:
            "Conflicting interests are normal. Classification skill is listing who is affected and what each group wants before choosing a path.",
        },
        {
          type: "think",
          prompt:
            "A city council cuts a supplier’s night delivery permit to protect residents. Which external stakeholders gained, and which internal stakeholders are most likely pressured next?",
        },
        {
          type: "trap",
          text: "Trap: equating \"stakeholder\" with \"shareholder,\" or assuming only people inside the firm count. Another trap: treating environmental claims as enough without activities and proven results.",
        },
        {
          type: "exam",
          text: "Exam recognition: questions mix ownership language with staff, suppliers, communities and environment. Ask: who is affected or interested? Who owns shares? Is the group internal or external? Where do aims clash? Legal structure and finance (later chapters) sit beside stakeholder management as success factors.",
        },
        {
          type: "connect",
          text: "Connect: Chapter 4 turns to ownership forms and finance — how shareholders, partners and sole owners differ legally — while this section keeps the wider interest map in view.",
        },
        {
          type: "takeaways",
          items: [
            "Stakeholders = affected parties / interested parties; shareholders = share owners (a subset).",
            "Internal: owners/shareholders, managers, employees; external: customers, suppliers, government, communities, environment.",
            "Interests often conflict; businesses must manage trade-offs.",
            "Environmental responsibility needs results, not slogans.",
          ],
        },
        {
          type: "check",
          items: [
            "Give one stakeholder who is not a shareholder.",
            "Classify a municipal tax office as internal or external.",
            "Name a conflict between customers and nearby residents.",
          ],
        },
      ],
    },
  ],
  recap: [
    "Businesses combine land, labour, capital and entrepreneurship/enterprise (plus knowledge and technology) in different mixes.",
    "Primary extracts, secondary manufactures, tertiary serves; developed economies are typically tertiary-heavy; GDP measures activity with well-known limits.",
    "Profit-oriented firms chase surplus for owners; NPOs chase mission while still needing revenue and reinvesting surplus.",
    "Size uses staff, turnover and balance-sheet total; course SME bands run micro → small → medium, with large above the ceilings.",
    "Reach runs local → national → international/multinational, with funding, logistics and border complexity rising along the way.",
    "Map stakeholders beyond shareholders; separate internal from external groups; expect and manage conflicting interests.",
  ],
};
