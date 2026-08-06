/**
 * Deep scrub: remove book narrative names, PCB/Leoben story props,
 * "in the chapter" example-quiz wording. Keep exam-ready theory only.
 */
import fs from "node:fs";

const FILES = [
  "src/data/economics-cases-ch2-subtopics.json",
  "src/data/economics-cases-ch3-subtopics.json",
];

/** Full case replacements keyed by case_id (already cleaned). */
const OVERRIDES = {
  "CASE 2.1.04": {
    title: "Business Operations and Institutional Needs",
    context:
      "Consider households, startups, and manufacturing firms interacting in a market system. Evaluate the following economic assertions:",
    statements: [
      "Businesses provide goods like computers and services like installing software for people to satisfy their needs.",
      "Manufacturers of smartphones may have an operational need for electronic components produced by specialised suppliers.",
      "To fabricate components, a manufacturer requires raw materials and a workforce rather than operating in isolation.",
      "Individuals frequently exchange goods and services directly and are fully active participants in trading.",
      "Households need food, shelter, and medical care, and they also want leisure activities such as cinema visits.",
    ],
    tactical_explanations: [
      "TRUE — Firms supply tangible goods and intangible services that help consumers satisfy needs.",
      "TRUE — Component manufacturers depend on specialised inputs to assemble finished devices.",
      "TRUE — Production requires limited inputs and labour; no firm can operate without securing those resources.",
      "TRUE — Individuals trade with businesses and with each other; households are not excluded from exchange.",
      "TRUE — Household demand spans essential needs and non-essential wants such as entertainment.",
    ],
  },
  "CASE 2.1.12": {
    title: "Needs, wants, and who has them",
    context:
      "Analyze claims about needs, wants, and which actors in the economy face them. Evaluate the following economic assertions:",
    statements: [
      "A manufacturer of laptops may need specialised electronic components from suppliers to keep production running.",
      "High-tech manufacturers have zero internal needs because only end consumers ever experience genuine need.",
      "Households buy goods and services from businesses to satisfy both needs and wants in daily life.",
      "Wants disappear automatically once every need has been fully satisfied in a given month.",
      "Teenagers with pocket money are outside the economy until they register a business or join a formal household.",
    ],
    tactical_explanations: [
      "TRUE — Firms have operational needs for inputs such as components and materials to manufacture products.",
      "FALSE — Businesses have genuine operational needs for inputs, labour, and customers, not only final consumers.",
      "TRUE — Households routinely purchase goods and services from firms to meet needs and wants.",
      "FALSE — Wants can persist even after needs are met; satisfying one does not erase the other category.",
      "FALSE — Individuals participate economically through consumption and choice long before becoming entrepreneurs.",
    ],
  },
  "CASE 2.1.27": {
    title: "Needs of businesses",
    context:
      "Review whether businesses themselves have operational needs in addition to household needs. Evaluate the following economic assertions:",
    statements: [
      "A smartphone assembler needs specialised electronic components from suppliers to manufacture devices.",
      "Businesses have zero internal needs because only final consumers experience genuine need.",
      "An entrepreneur needs customers and revenue to keep staff employed and operations running.",
      "Operational needs of firms include workforce, premises, and raw materials, not only consumer demand.",
      "If a firm is profitable, scarcity no longer applies to any of its inputs.",
    ],
    tactical_explanations: [
      "TRUE — Production relies on component inputs that firms genuinely need to assemble finished products.",
      "FALSE — Firms have operational needs for inputs, labour, and sales, not only end consumers.",
      "TRUE — Without customers and revenue, a business cannot sustain employment and operations.",
      "TRUE — Firms require physical and human inputs as needs distinct from household consumption needs.",
      "FALSE — Profitability does not make inputs unlimited; capacity and materials remain scarce.",
    ],
  },
  "CASE 2.1.40": {
    title: "Operational Needs of Businesses",
    context:
      "Analyze whether firms and entrepreneurs experience genuine needs beyond consumer demand. Evaluate the following economic assertions:",
    statements: [
      "Cash flow to pay suppliers next month is a need for a small retailer even when sales are seasonal.",
      "Customer demand itself can be a need when a firm requires sales to remain viable.",
      "A laptop assembler needs specialised electronic components from suppliers to keep production lines running.",
      "An entrepreneur needs reliable staff and premises to continue serving paying customers.",
      "Expansion plans and wage bills are identical categories with no distinction.",
    ],
    tactical_explanations: [
      "TRUE — Meeting obligations requires available funds within each period.",
      "TRUE — Revenue from buyers is necessary for survival in market settings.",
      "TRUE — Component inputs are operational needs for manufacturers.",
      "TRUE — Workforce and facilities are business needs for ongoing operations.",
      "FALSE — Needs concern continuing operation; wants reflect discretionary ambitions.",
    ],
  },
  "CASE 2.6.23": {
    title: "Plant Capacity Expansion",
    context:
      "Consider a manufacturing plant adding a production line that raises monthly output without raising unit prices. Evaluate the following economic assertions:",
    statements: [
      "If demand stays fixed while supply shifts right, equilibrium price may fall.",
      "At the new equilibrium, quantity traded may exceed the old equilibrium if demand is unchanged.",
      "Higher raw-material input prices could partially offset the expansion by shifting supply leftward.",
      "Customers ordering the product face lower shortage risk after a successful supply expansion.",
      "Adding capacity that lowers unit cost can shift supply rightward for the manufactured good.",
    ],
    tactical_explanations: [
      "TRUE — Greater supply with unchanged demand lowers equilibrium price.",
      "TRUE — Rightward supply shift with fixed demand raises equilibrium quantity.",
      "TRUE — Rising material costs reduce quantity supplied at each price.",
      "TRUE — Increased quantity supplied reduces excess demand at prior prices.",
      "TRUE — Expanded efficient capacity increases quantity supplied at each price.",
    ],
  },
  "CASE 3.1.05": {
    title: "Factory Production Shift",
    context:
      "Consider a manufacturing plant running a shift while sourcing materials and scheduling engineers. Evaluate the following economic assertions:",
    statements: [
      "Production tools and testing equipment on the line are capital in secondary production.",
      "Engineers monitoring product quality supply specialised labour.",
      "Plant management coordinating materials, staff, and orders supplies entrepreneurship.",
      "Materials are land because copper is extracted from the earth.",
      "Knowledge is a consumer good unless the firm registers patents.",
    ],
    tactical_explanations: [
      "TRUE — Manufacturing equipment is part of the capital factor.",
      "TRUE — Engineering and inspection work is skilled human resource use.",
      "TRUE — Coordinating production factors and timing is entrepreneurship.",
      "FALSE — Raw and processed inputs are materials combined with other factors; finished goods are outputs.",
      "FALSE — Knowledge applied in production is a recognised factor.",
    ],
  },
  "CASE 3.1.09": {
    title: "Combining Production Factors",
    context:
      "Analyze how businesses combine factors to create offerings. Evaluate the following economic assertions:",
    statements: [
      "Service firms combine labour with capital, technology, and entrepreneurial coordination.",
      "A business combines factors of production to offer goods and/or services to customers.",
      "Whichever factor is dominant replaces the need for any other factor.",
      "Only manufacturing combines factors; services use labour alone.",
      "Automated lines remove labour and knowledge from manufacturing entirely.",
    ],
    tactical_explanations: [
      "TRUE — Service delivery integrates multiple factors, not labour alone.",
      "TRUE — Businesses exist by combining resources to deliver goods or services.",
      "FALSE — One dominant factor does not remove the need to combine others.",
      "FALSE — Service and manufacturing firms both combine multiple factors.",
      "FALSE — Manufacturing still uses labour, knowledge, and coordination alongside capital.",
    ],
  },
  "CASE 3.1.17": {
    title: "Manufacturing Inputs",
    context:
      "Review factors used in industrial manufacturing. Evaluate the following economic assertions:",
    statements: [
      "Clean-room tools and testing equipment are capital in secondary production.",
      "Engineering teams monitoring material batches supply skilled labour.",
      "Fabrication requires labour and materials as well as capital equipment.",
      "A components manufacturer combines workforce, materials, equipment, and entrepreneurial direction.",
      "Knowledge of process specifications applied on the line is a production factor.",
    ],
    tactical_explanations: [
      "TRUE — Manufacturing equipment is part of the capital factor.",
      "TRUE — Inspection and engineering work is skilled human resource use.",
      "TRUE — Manufacturing blends human resources, materials, and machinery.",
      "TRUE — Large manufacturers integrate all major factors in production.",
      "TRUE — Technical knowledge used in manufacturing counts among production factors.",
    ],
  },
  "CASE 3.1.30": {
    title: "Integrated Factor Use",
    context:
      "Review integrated use of production factors in business. Evaluate the following economic assertions:",
    statements: [
      "Smartphone makers may need electronic components from specialised suppliers to keep production running.",
      "Businesses provide goods and services by combining labour, land, capital, entrepreneurship, and often knowledge.",
      "A large components manufacturer combines all major factors when producing electronic parts.",
      "A small IT-support venture combines knowledge, labour, technology, capital, and entrepreneurship.",
      "Dominant factors replace all others in sector analysis.",
    ],
    tactical_explanations: [
      "TRUE — Component suppliers combine factors to produce inputs other firms need.",
      "TRUE — Production draws on multiple listed factors together.",
      "TRUE — Large manufacturers integrate labour, materials, equipment, and coordination.",
      "TRUE — The venture uses skills, tools, finance, and coordination together.",
      "FALSE — Dominance does not eliminate combined use of other factors.",
    ],
  },
  "CASE 3.1.38": {
    title: "Entrepreneurial Coordination Examples",
    context:
      "Analyze entrepreneurship in coordinating other factors. Evaluate the following economic assertions:",
    statements: [
      "Coordinating a repair shop's parts orders and bookings supplies entrepreneurship.",
      "Scheduling production shifts while sourcing materials reflects entrepreneurship at a manufacturer.",
      "Integrating robots with manual pick teams reflects entrepreneurship in logistics.",
      "Any purchase decision is entrepreneurship simply because money is spent.",
      "Selecting barrel suppliers and picker contracts reflects entrepreneurship at a winery.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      "TRUE — Organising resources and operations is entrepreneurship.",
      "TRUE — Coordinating production inputs and timing is entrepreneurship.",
      "TRUE — Designing how factors combine operationally is entrepreneurial work.",
      "FALSE — Spending alone is not entrepreneurship; entrepreneurship organises and combines factors.",
      "TRUE — Organising inputs and contracts is entrepreneurial coordination.",
    ],
  },
  "CASE 3.1.40": {
    title: "Workforce and Materials in Manufacturing",
    context:
      "Review whether manufacturing can run on capital alone. Evaluate the following economic assertions:",
    statements: [
      "Plant managers coordinating shifts and suppliers supply entrepreneurship.",
      "Quality inspectors monitoring batches supply skilled labour on the line.",
      "Manufacturing requires engineers, operators, and materials alongside equipment.",
      "Materials stored for production are combined with capital and labour.",
      "Component plants run on capital alone once equipment is installed.",
    ],
    tactical_explanations: [
      "TRUE — Coordinating production factors is entrepreneurship.",
      "TRUE — Inspection work is skilled human resource use.",
      "TRUE — Manufacturing still requires labour, materials, and coordination.",
      "TRUE — Manufacturing uses materials alongside capital and labour.",
      "FALSE — Manufacturing integrates labour, materials, equipment, and coordination.",
    ],
  },
  "CASE 3.1.46": {
    title: "Factor Combination Requirement",
    context:
      "Review whether businesses can rely on a single factor. Evaluate the following economic assertions:",
    statements: [
      "Manufacturing blends labour, capital, materials, knowledge, and coordination.",
      "Dominant factor emphasis in an industry removes other factors from production.",
      "A firm can deliver goods using one dominant factor without combining others.",
      "Services need only labour because output is intangible.",
      "Winemaking needs only land because grapes ripen naturally.",
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      "TRUE — Manufacturing integrates multiple factors rather than one alone.",
      "FALSE — Businesses still combine factors even when one appears dominant.",
      "FALSE — Businesses combine multiple factors rather than one alone.",
      "FALSE — Services still rely on capital, technology, and coordination.",
      "FALSE — Winemaking also requires labour, capital, and management.",
    ],
  },
  "CASE 3.1.48": {
    title: "Integrated Production Examples",
    context:
      "Review integrated factor use across firm types. Evaluate the following economic assertions:",
    statements: [
      "Identifying one example factor in a firm eliminates the need to consider others.",
      "A small IT-support venture shows how knowledge, labour, technology, capital, and entrepreneurship work together.",
      "Smartphone makers needing electronic components from suppliers rely on combined factors upstream.",
      "A winemaker illustrates combining land, labour, capital, entrepreneurship, and experience.",
      "A large components manufacturer illustrates capital-only production without workforce.",
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      "FALSE — Businesses combine factors even when examples emphasise one.",
      "TRUE — The venture uses skills, tools, finance, and coordination.",
      "TRUE — Component suppliers combine factors to produce inputs.",
      "TRUE — Winemaking blends multiple listed factors.",
      "FALSE — Manufacturing integrates labour, materials, equipment, and coordination.",
    ],
  },
  "CASE 3.1.50": {
    title: "Factors of Production Synthesis",
    context:
      "Review integrated claims about factors of production. Evaluate the following economic assertions:",
    statements: [
      "Businesses combine labour, land, capital, entrepreneurship, and often knowledge to create offerings.",
      "A large components manufacturer illustrates combining all major factors in industrial production.",
      "A refurbished-laptop venture combines knowledge, labour, technology, capital, and entrepreneurship.",
      "Winemaking illustrates land-only production in agriculture.",
      "Dominant factors make other factors irrelevant in analysis.",
    ],
    tactical_explanations: [
      "TRUE — Production typically integrates multiple listed factors.",
      "TRUE — Large manufacturers integrate workforce, materials, equipment, and coordination.",
      "TRUE — The venture uses skills, tools, finance, and coordination together.",
      "FALSE — Winemaking combines multiple factors beyond land.",
      "FALSE — Dominance does not remove combined use of other factors.",
    ],
  },
  "CASE 3.2.08": {
    title: "Olive Farm and Factory Order",
    context:
      "Consider a farm selling olive oil while a factory fills an industrial production order. Evaluate the following economic assertions:",
    statements: [
      "Fabricating electronic components transforms materials and therefore belongs to secondary manufacturing.",
      "The farm is secondary because bottled oil is a processed product.",
      "Both activities belong to the tertiary sector because each sells to customers.",
      "Fabricating components from materials is tertiary because parts go to other businesses.",
      "Harvesting and pressing olives on the farm is tertiary because oil is sold to customers.",
    ],
    tactical_explanations: [
      "TRUE — Component production transforms materials into manufactured goods.",
      "FALSE — Agricultural production and harvesting remain primary even if some processing occurs on farm.",
      "FALSE — Selling does not reclassify farming or manufacturing into services.",
      "FALSE — Manufacturing for business customers remains secondary activity.",
      "FALSE — Agricultural production remains primary even when products are sold.",
    ],
  },
  "CASE 3.2.28": {
    title: "Secondary Manufacturing Role",
    context:
      "Review a manufacturer producing electronic components for industrial buyers. Evaluate the following economic assertions:",
    statements: [
      "Client technical advice alongside fabrication does not remove secondary classification.",
      "Manufactured components are secondary-sector output regardless of input origins.",
      "Selling components to smartphone makers keeps fabrication in secondary manufacturing.",
      "Transforming raw materials into finished components is secondary manufacturing.",
      "The manufacturer is tertiary because it sells to smartphone makers, not final consumers.",
    ],
    tactical_explanations: [
      "TRUE — Fabricating goods remains secondary even if advice accompanies sales.",
      "TRUE — Manufactured components are secondary-sector output.",
      "TRUE — Manufacturing for business customers remains secondary activity.",
      "TRUE — Manufacturing components from materials is secondary activity.",
      "FALSE — Selling to firms does not reclassify manufacturing as services.",
    ],
  },
  "CASE 3.2.35": {
    title: "GDP as an Economic Activity Indicator",
    context:
      "Review GDP as an overall activity indicator. Evaluate the following economic assertions:",
    statements: [
      "GDP per capita is commonly used as an indicator of living standards.",
      "GDP does not replace all other indicators because it misses some income sources.",
      "GDP counts final goods and services produced in a defined period.",
      "GDP excludes final services such as insurance from its totals.",
      "Insurance and other final services are omitted from official GDP totals.",
    ],
    tactical_explanations: [
      "TRUE — GDP per capita is linked to living standards.",
      "TRUE — GDP misses some informal and unpaid activity.",
      "TRUE — GDP covers final domestic production over time.",
      "FALSE — Final insurance premiums and claims services enter GDP when produced domestically.",
      "FALSE — Service-sector final output is included when it meets GDP boundary rules.",
    ],
  },
  "CASE 3.2.38": {
    title: "Multi-sector Firms",
    context:
      "Analyze firms operating across more than one sector. Evaluate the following economic assertions:",
    statements: [
      "The three-sector model classifies activities rather than assigning one label per economy.",
      "A farm selling produce can only be classified as primary.",
      "A manufacturer that also gives client advice is tertiary only.",
      "A single sector label on a firm blocks any activity in another sector.",
      "One sector label applied to a firm prevents any activity in another sector.",
    ],
    tactical_explanations: [
      "TRUE — The model classifies activities, not single labels per economy.",
      "FALSE — Mixed-sector firms may combine farming with processing or retail activities.",
      "FALSE — Manufacturing can coexist with service offerings.",
      "FALSE — Sector labels describe activities, not exclusive limits on what a firm may do.",
      "FALSE — Classification by activity allows several sector types within one enterprise.",
    ],
  },
  "CASE 3.2.41": {
    title: "Classifying Industrial Fabrication",
    context:
      "Analyze how to classify industrial fabrication in the sector model. Evaluate the following economic assertions:",
    statements: [
      "Client advice alongside fabrication does not remove secondary classification.",
      "Advice to clients converts fabrication into tertiary services only.",
      "Buying mined metals as inputs turns factory fabrication into primary extraction.",
      "Testing products in the factory becomes a tertiary inspection service only.",
      "Buying mined materials for production does not move manufacturing from secondary to primary.",
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      "TRUE — Manufacturing remains secondary even if services accompany sales.",
      "FALSE — Manufacturing remains secondary even if services accompany sales.",
      "FALSE — Component fabrication stays secondary whatever raw materials are purchased.",
      "FALSE — Quality steps in manufacturing stay secondary activity.",
      "TRUE — Input from mines does not change the secondary nature of manufacturing.",
    ],
  },
  "CASE 3.2.47": {
    title: "Transforming Raw Materials",
    context:
      "Review secondary-sector transformation. Evaluate the following economic assertions:",
    statements: [
      "Timber mills exporting boards perform secondary processing of logs.",
      "Fabricating industrial components is tertiary because components support services.",
      "Sewing is tertiary because fashion is a consumer service.",
      "Smelting remains primary because ore comes from mines.",
      "Shipbuilding is tertiary because ships later carry cargo.",
    ],
    tactical_explanations: [
      "TRUE — Milling logs into boards is secondary manufacturing.",
      "FALSE — Manufacturing components is secondary activity.",
      "FALSE — Sewing garments is secondary manufacturing.",
      "FALSE — Processing ore or metal is secondary transformation.",
      "FALSE — Building ships from materials is secondary manufacturing.",
    ],
  },
  "CASE 3.2.50": {
    title: "Sector and GDP Synthesis",
    context:
      "Review integrated sector and GDP claims. Evaluate the following economic assertions:",
    statements: [
      "Emerging economies depend largely on primary activity while advanced EU states show tertiary dominance.",
      "GDP measures final domestic production and supports growth comparisons when inflation-adjusted.",
      "GDP critics note missing income, quality limits, and disaster rebuild effects.",
      "GDP correlates perfectly with health and happiness in every case.",
      "Manufacturing components and offering after-sales support collapse into a single tertiary label.",
    ],
    tactical_explanations: [
      "TRUE — Development shifts sector shares toward services in rich economies.",
      "TRUE — GDP totals final output; real growth uses adjusted figures.",
      "TRUE — Standard criticisms include coverage, quality, and rebuild distortions.",
      "FALSE — Correlation does not mean GDP fully measures welfare.",
      "FALSE — Manufacturing stays secondary; support can be tertiary alongside it.",
    ],
  },
  "CASE 3.3.04": {
    title: "Disaster Relief Funding",
    context:
      "Consider a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns. Evaluate the following economic assertions:",
    statements: [
      "Charging a cost-recovery fee for some supplies converts a humanitarian NPO into a profit-maximising firm.",
      "Any surplus from donations can be reinvested into further relief work.",
      "Not-for-profit status means the organisation may ignore funding entirely.",
      "Dispatching kits without prior inflows is typical NPO practice.",
      "Relief organisations need no inflows because volunteers supply everything.",
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      "FALSE — Cost recovery does not redefine a humanitarian NPO as profit-oriented.",
      "TRUE — NPO surpluses are typically reinvested into the mission.",
      "FALSE — NPOs must still secure and manage revenues or donations.",
      "FALSE — Relief delivery requires funding for materials and logistics.",
      "FALSE — Humanitarian delivery requires funded materials and logistics.",
    ],
  },
  "CASE 3.3.06": {
    title: "Merchandise and Mission Funding",
    context:
      "Consider a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection. Evaluate the following economic assertions:",
    statements: [
      "Selling merchandise can raise funds for habitat work within an NPO model.",
      "Merchandise income helps cover operating costs while funding conservation work.",
      "Habitat work funded from surplus proves the organisation maximises owner wealth.",
      "A conservation NPO seeks maximum private owner wealth like a listed corporation.",
      "A conservation NPO must distribute merchandise surplus as private shareholder dividends.",
    ],
    tactical_explanations: [
      "TRUE — Trading can fund mission activities within an NPO.",
      "TRUE — Trading can supplement donations to cover mission costs.",
      "FALSE — Merchandising surpluses can fund mission work without implying owner profit-maximisation.",
      "FALSE — A conservation NPO is mission-driven and not organised to maximise private owner wealth.",
      "FALSE — NPO surpluses support mission reinvestment, not owner payouts.",
    ],
  },
  "CASE 3.3.09": {
    title: "Not-for-Profit Organisation Aims",
    context:
      "Analyze the main aim of not-for-profit organisations when they pursue a mission rather than owner profit. Evaluate the following economic assertions:",
    statements: [
      "Mission delivery still requires enough inflows to finance operations.",
      "Not-for-profit organisations pursue a social or environmental mission rather than owner profit-maximisation.",
      "A surplus in an NPO is typically used to further the organisation's purpose.",
      "Humanitarian, conservation, and environmental campaign NPOs all pursue mission delivery rather than private profit.",
      "Not-for-profit status means the organisation may ignore funding needs entirely.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      "TRUE — NPOs still need revenues or donations to operate.",
      "TRUE — The defining aim is mission delivery, not owner profit.",
      "TRUE — Surpluses typically return to the mission.",
      "TRUE — Different mission types can still share NPO characteristics.",
      "FALSE — NPOs must still fund staff, materials, and logistics.",
    ],
  },
  "CASE 3.3.15": {
    title: "NPO Revenue Mix",
    context:
      "Review how not-for-profit organisations finance their activities. Evaluate the following economic assertions:",
    statements: [
      "Donations and membership fees can fund not-for-profit operations.",
      "Trading surplus can support mission spending within an NPO model.",
      "Not-for-profit organisations never generate any surplus by definition.",
      "Mission spending can only be financed by government grants.",
      "Any surplus must be paid out as dividends to private owners.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Donations and fees are common NPO inflows.",
      "TRUE — Trading can support mission costs without turning the NPO into a profit-maximiser.",
      "FALSE — NPOs may generate surplus; they reinvest it rather than maximise owner profit.",
      "FALSE — Funding sources can include donations, fees, and trading.",
      "FALSE — NPO surplus supports the mission, not private dividends.",
    ],
  },
  "CASE 3.3.16": {
    title: "Humanitarian NPO Characteristics",
    context:
      "Review a humanitarian not-for-profit organisation as an economic actor. Evaluate the following economic assertions:",
    statements: [
      "A humanitarian NPO kit dispatch requires prior inflows to fund materials and logistics.",
      "Mission delivery, not private profit-maximisation, is the organisation's primary aim.",
      "A humanitarian NPO is legally the same as any listed for-profit corporation.",
      "A humanitarian NPO operates without covering staff or warehouse costs.",
      "Any surplus must be distributed as private shareholder dividends.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Aid delivery needs funded materials and logistics.",
      "TRUE — NPOs pursue mission aims rather than owner profit.",
      "FALSE — NPO legal purpose differs from profit-maximising corporations.",
      "FALSE — Staff and facilities still require funding.",
      "FALSE — Surpluses support mission reinvestment.",
    ],
  },
  "CASE 3.3.18": {
    title: "Conservation NPO Characteristics",
    context:
      "Review a conservation not-for-profit organisation as an economic actor. Evaluate the following economic assertions:",
    statements: [
      "Trading merchandise can fund habitat work without making the organisation profit-oriented.",
      "Habitat protection financed from surplus fits not-for-profit behaviour.",
      "Trading merchandise converts a conservation NPO into a firm maximising owner profit.",
      "A conservation NPO behaves like a listed corporation maximising private owner wealth.",
      "Merchandise surplus must be paid as private shareholder dividends.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Mission-funded trading is compatible with NPO status.",
      "TRUE — Mission reinvestment is core NPO behaviour.",
      "FALSE — Mission use of trading income does not redefine the organisation as profit-maximising.",
      "FALSE — A conservation NPO is mission-driven, not owner-wealth-maximising.",
      "FALSE — NPO surplus supports the mission.",
    ],
  },
  "CASE 3.3.19": {
    title: "Environmental Campaign Spending",
    context:
      "Consider how an environmental campaign NPO raises funds while limiting spending to mission delivery. Evaluate the following economic assertions:",
    statements: [
      "Limiting spending to mission delivery fits not-for-profit behaviour.",
      "Campaigns still depend on covering staff and logistics costs.",
      "Fundraising for campaigns proves the organisation maximises private owner profit.",
      "An environmental campaign NPO distributes surplus as owner dividends by definition.",
      "Not-for-profit status removes any need for funding.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Mission-focused spending is characteristic of NPOs.",
      "TRUE — Campaign delivery still has operating costs.",
      "FALSE — Fundraising for a mission is not the same as owner profit-maximisation.",
      "FALSE — NPO surplus is reinvested in the mission.",
      "FALSE — NPOs still need inflows to operate.",
    ],
  },
  "CASE 3.3.22": {
    title: "NPO Mission versus Profit",
    context:
      "Analyze differences between not-for-profit and profit-oriented organisations. Evaluate the following economic assertions:",
    statements: [
      "Profit-oriented firms primarily seek owner returns, while NPOs primarily pursue a mission.",
      "An NPO may earn a surplus and still remain not-for-profit if surplus serves the mission.",
      "Any organisation that sells goods must be classified as profit-maximising.",
      "NPOs never employ paid staff because volunteers cover all work.",
      "Mission and surplus are mutually exclusive for every organisation.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — The core distinction is primary aim: profit versus mission.",
      "TRUE — Surplus reinvested in the mission is compatible with NPO status.",
      "FALSE — Trading does not automatically imply profit-maximisation.",
      "FALSE — Many NPOs employ paid staff funded by inflows.",
      "FALSE — NPOs can pursue a mission while managing a surplus.",
    ],
  },
  "CASE 3.3.27": {
    title: "NPO Mission Types",
    context:
      "Review how different not-for-profit missions share the same economic logic. Evaluate the following economic assertions:",
    statements: [
      "A conservation NPO illustrates environmental mission focus within an NPO model.",
      "A humanitarian NPO illustrates humanitarian mission delivery within an NPO model.",
      "An environmental campaign NPO illustrates a mission-driven non-profit organisation.",
      "Different mission labels remove the shared need to fund operations.",
      "Mission type alone turns an NPO into a profit-maximising corporation.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      "TRUE — Conservation work can be organised as an NPO mission.",
      "TRUE — Humanitarian delivery can be organised as an NPO mission.",
      "TRUE — Campaign advocacy can be organised as an NPO mission.",
      "FALSE — All NPOs still need resources to operate.",
      "FALSE — Mission type does not redefine the organisation as profit-maximising.",
    ],
  },
  "CASE 3.3.30": {
    title: "Aid Packing and Prior Surplus",
    context:
      "Consider how a humanitarian NPO uses prior-year donation surplus to pack aid parcels. Evaluate the following economic assertions:",
    statements: [
      "Prior surplus can fund later aid shipments for humanitarian organisations.",
      "Aid parcels reflect humanitarian mission delivery rather than owner profit-maximisation.",
      "Using prior surplus for later aid proves the organisation maximises private owner wealth.",
      "Humanitarian NPOs cannot retain unused funds from one period to the next.",
      "Mission delivery requires no logistics funding if volunteers pack parcels.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Surpluses can be carried forward for mission use.",
      "TRUE — Parcel packing serves the humanitarian mission.",
      "FALSE — Mission use of surplus is not owner profit-maximisation.",
      "FALSE — Unused inflows may be retained for later mission spending.",
      "FALSE — Materials and logistics still require funded inputs.",
    ],
  },
  "CASE 3.3.33": {
    title: "Mixed NPO Revenue",
    context:
      "Analyze mixed funding sources for not-for-profit organisations. Evaluate the following economic assertions:",
    statements: [
      "A conservation NPO combining merchandise sales and donations illustrates mixed NPO revenue.",
      "Surplus at an environmental campaign NPO can support more campaigns rather than shareholder dividends.",
      "Merchandise surplus at a conservation NPO can fund habitat work within the NPO model.",
      "Mixed revenue automatically converts every NPO into a profit-maximising firm.",
      "Donations alone are the only lawful NPO funding source.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      "TRUE — NPOs may combine donations and trading income.",
      "TRUE — Mission reinvestment replaces owner dividends.",
      "TRUE — Trading surplus can finance conservation work.",
      "FALSE — Revenue mix does not redefine the primary NPO aim.",
      "FALSE — Trading and fees can also fund NPO activity.",
    ],
  },
  "CASE 3.3.37": {
    title: "NPO Examples Across Missions",
    context:
      "Review shared characteristics of mission-driven not-for-profit organisations. Evaluate the following economic assertions:",
    statements: [
      "Humanitarian, conservation, and environmental campaign organisations can all operate as NPOs.",
      "Mission-driven organisations still face scarcity of funds and staff capacity.",
      "NPO status abolishes all operating costs.",
      "An NPO may ignore inflow management because there are never wages to pay.",
      "Any organisation with a mission must be classified as primary-sector production.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Different missions can share not-for-profit organisation status.",
      "TRUE — Scarcity still constrains NPO resources.",
      "FALSE — NPOs still incur operating costs.",
      "FALSE — Many NPOs employ staff and manage payroll.",
      "FALSE — Sector classification depends on activity, not mission label alone.",
    ],
  },
  "CASE 3.3.49": {
    title: "Funding Disaster Relief",
    context:
      "Review funding humanitarian disaster relief. Evaluate the following economic assertions:",
    statements: [
      "Disaster relief requires funding for materials, transport, and staff or volunteers' support costs.",
      "Surplus from earlier fundraising can finance later shipments.",
      "Not-for-profit status removes the need for any inflow planning.",
      "Relief can be delivered indefinitely without donations or other inflows.",
      "Any surplus in relief work must become private owner profit.",
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "TRUE — Logistics and materials must be funded.",
      "TRUE — Prior surplus can support later mission delivery.",
      "FALSE — NPOs still plan and manage funding.",
      "FALSE — Continuous delivery needs ongoing inflows.",
      "FALSE — Mission surplus is not private owner profit.",
    ],
  },
  "CASE 3.3.50": {
    title: "NPO Synthesis",
    context:
      "Review core claims about not-for-profit organisations. Evaluate the following economic assertions:",
    statements: [
      "NPOs pursue a mission rather than maximising private owner profit.",
      "Surpluses in NPOs typically return to mission delivery.",
      "Humanitarian, conservation, and environmental campaign groups can illustrate NPO forms.",
      "Selling goods always converts an NPO into a profit-maximising corporation.",
      "NPOs can operate indefinitely with no inflows of any kind.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      "TRUE — Mission aim distinguishes NPOs from profit-oriented firms.",
      "TRUE — Mission reinvestment of surplus is standard NPO behaviour.",
      "TRUE — Different mission types can share NPO characteristics.",
      "FALSE — Trading for mission funding does not redefine the organisation as profit-maximising.",
      "FALSE — Operations require donations, fees, grants, or trading income.",
    ],
  },
};

function capitalizeLead(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function globalScrub(text) {
  let s = String(text);

  // Narrative leftovers
  s = s.replace(/\bLeoben\b/gi, "");
  s = s.replace(/\bPCBs?\b/g, "electronic components");
  s = s.replace(/\bprinted circuit boards?\b/gi, "electronic components");
  s = s.replace(/\bIC substrates?\b/gi, "electronic components");
  s = s.replace(/\ban electronics-components manufacturer\b/gi, "a components manufacturer");
  s = s.replace(/\belectronics-components manufacturer\b/gi, "components manufacturer");
  s = s.replace(/\belectronics-components plant\b/gi, "manufacturing plant");
  s = s.replace(/\bone of the co-founders, the other co-founder\b/gi, "the two co-owners");
  s = s.replace(/\bone of the co-founders the other co-founder\b/gi, "two co-owners");
  s = s.replace(/\bone of the co-founders\b/gi, "a co-owner");
  s = s.replace(/\bthe other co-founder'?s?\b/gi, "a local repair-shop owner's");
  s = s.replace(/\bthe other co-founder\b/gi, "a local repair-shop owner");
  s = s.replace(/\btwo local IT-support entrepreneurs\b/gi, "a small IT-support venture");
  s = s.replace(/\ba small local IT-support firm's\b/gi, "a small IT-support firm's");
  s = s.replace(/\bhumanitarian relief organisation\b/gi, "humanitarian NPO");
  s = s.replace(/\bwildlife conservation organisation\b/gi, "conservation NPO");
  s = s.replace(/\benvironmental campaign organisation\b/gi, "environmental campaign NPO");
  s = s.replace(/\bin the chapter'?s framing\b/gi, "in standard analysis");
  s = s.replace(/\bin the chapter\b/gi, "");
  s = s.replace(/\bas a representative NPO\b/gi, "as a mission-driven NPO");
  s = s.replace(/\bas a well-known NPO example\b/gi, "as a mission-driven NPO");
  s = s.replace(/\bis listed as a non-profit example\b/gi, "operates as a mission-driven NPO");
  s = s.replace(/\bis cited as an example of a non-profit organisation\b/gi, "operates as a non-profit organisation");
  s = s.replace(/\bappear as NPO examples\b/gi, "can operate as NPOs");
  s = s.replace(/\bappear as a representative NPO\b/gi, "operate as a mission-driven NPO");
  s = s.replace(/\billustrate recognised NPO examples\b/gi, "can all operate as NPOs");
  s = s.replace(/\billustrate recognised not-for-profit examples\b/gi, "can all operate as NPOs");
  s = s.replace(/\bReview integrated factor use in chapter examples\b/gi, "Review integrated factor use across firm types");
  s = s.replace(/\bGermany is often cited as an example of\b/gi, "Germany is an example of");
  s = s.replace(/\bGermany is frequently cited as an example of\b/gi, "Germany is an example of");
  s = s.replace(/\bConsider steve\b/gi, "Consider a technician who");
  s = s.replace(/\bsteve runs\b/gi, "a technician runs");
  s = s.replace(/\bSteve runs\b/gi, "A technician runs");

  // Cleanup artifacts
  s = s.replace(/\ba a /gi, "a ");
  s = s.replace(/\ban an /gi, "an ");
  s = s.replace(/\bthe an /gi, "an ");
  s = s.replace(/\bthe a /gi, "a ");
  s = s.replace(/\s{2,}/g, " ");
  s = s.replace(/\s+([,.])/g, "$1");
  s = s.replace(/\.\s*\./g, ".");
  s = s.trim();
  return capitalizeLead(s);
}

function stillDirty(blob) {
  return /\b(AT&S|Tina|Steve|Red Cross|WWF|World Wildlife|Greenpeace|Runtastic|Adidas|Fuhrmann|Leoben|PCB|printed circuit|IC substrate|co-founder|in the chapter|electronics-components)\b/i.test(
    blob,
  );
}

let dirtyLeft = [];
for (const f of FILES) {
  const cases = JSON.parse(fs.readFileSync(f, "utf8"));
  let touched = 0;
  for (const c of cases) {
    const o = OVERRIDES[c.case_id];
    if (o) {
      Object.assign(c, {
        title: o.title,
        context: o.context,
        statements: o.statements,
        tactical_explanations: o.tactical_explanations,
      });
      if (o.answer_key) c.answer_key = o.answer_key;
      touched++;
    } else {
      const before = JSON.stringify(c);
      c.title = globalScrub(c.title);
      c.context = globalScrub(c.context);
      c.statements = c.statements.map(globalScrub);
      c.tactical_explanations = c.tactical_explanations.map(globalScrub);
      if (JSON.stringify(c) !== before) touched++;
    }
    // Always run light capitalization / double-article pass
    c.title = globalScrub(c.title);
    c.context = globalScrub(c.context);
    c.statements = c.statements.map(globalScrub);
    c.tactical_explanations = c.tactical_explanations.map(globalScrub);
  }
  for (const c of cases) {
    if (stillDirty(JSON.stringify(c))) dirtyLeft.push(c.case_id);
  }
  fs.writeFileSync(f, JSON.stringify(cases, null, 2) + "\n");
  console.log(f, "touched~", touched, "remaining dirty", dirtyLeft.filter((id) => cases.some((c) => c.case_id === id)).length);
}

console.log("DIRTY LEFT:", dirtyLeft);
process.exit(dirtyLeft.length ? 1 : 0);
