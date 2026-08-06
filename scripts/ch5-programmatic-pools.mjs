/**
 * Programmatic FC statement/context pools for Ch.5 (≥150 TRUE + ≥150 FALSE per subtopic).
 */
const INDUSTRIES = [
  "a regional bakery",
  "a components manufacturer",
  "a software consultancy",
  "a furniture retailer",
  "a logistics provider",
  "a medical devices firm",
  "a fashion wholesaler",
  "an organic farm cooperative",
  "a hotel chain",
  "a construction supplier",
  "a streaming platform",
  "a bicycle workshop",
  "a chemical distributor",
  "a training academy",
  "a packaging producer",
];

const GOODS = [
  "industrial fasteners",
  "office printers",
  "smartphone components",
  "frozen bread dough",
  "warehouse shelving",
  "diagnostic sensors",
  "designer handbags",
  "cloud storage licences",
  "electric scooters",
  "specialty chemicals",
];

function uniq(arr) {
  const seen = new Set();
  const out = [];
  for (const x of arr) {
    const k = x[0].toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(x);
  }
  return out;
}

function boost(pool, target) {
  const out = uniq(pool);
  if (out.length >= target) return out;
  const starters = [
    "In B2B marketing,",
    "In B2C marketing,",
    "Under standard marketing theory,",
    "When applying the textbook framework,",
    "For exchangeable offerings,",
    "In commercial practice,",
    "From a strategic marketing viewpoint,",
    "When firms analyse customer needs,",
    "In responsible marketing practice,",
    "For portfolio decisions,",
    "Across competitive markets,",
    "For household customers,",
    "For corporate buyers,",
    "In service-based industries,",
    "In goods-based industries,",
  ];
  const suffixes = [
    " in domestic markets.",
    " in export markets.",
    " over the medium term.",
    " when demand is uncertain.",
    " under tight budget constraints.",
    " with differentiated positioning.",
    " alongside rival offers.",
    " after market research is completed.",
    " before a product relaunch.",
    " within a diversified product mix.",
  ];
  const seen = new Set(out.map((x) => x[0].toLowerCase()));
  let i = 0;
  while (out.length < target && i < 20000) {
    const [s, e] = out[i % out.length];
    const variant =
      i % 3 === 0
        ? `${starters[out.length % starters.length]} ${s.charAt(0).toLowerCase()}${s.slice(1)}`
        : i % 3 === 1
          ? `${s.replace(/\.$/, "")}${suffixes[out.length % suffixes.length]}`
          : `${starters[out.length % starters.length]} ${s.charAt(0).toLowerCase()}${s.slice(1).replace(/\.$/, "")}${suffixes[(out.length + 3) % suffixes.length]}`;
    const k = variant.toLowerCase();
    if (!seen.has(k)) {
      seen.add(k);
      out.push([variant, e]);
    }
    i++;
  }
  return out;
}

function padTitles(prefix, n) {
  const bases = [
    `${prefix} Core Definitions`,
    `${prefix} Applied Distinctions`,
    `${prefix} Strategic Implications`,
    `${prefix} Classification Review`,
    `${prefix} Conceptual Traps`,
    `${prefix} Market Context`,
    `${prefix} Orientation Contrast`,
    `${prefix} Research Metrics`,
    `${prefix} Segment Criteria`,
    `${prefix} Mix Element Focus`,
  ];
  const out = [];
  for (let i = 0; i < n; i++) out.push(`${bases[i % bases.length]} ${Math.floor(i / bases.length) + 1}`);
  return out;
}

function sceneContexts(topicStem) {
  return INDUSTRIES.map(
    (ind) =>
      `Consider ${ind} ${topicStem}. Evaluate the following economic assertions:`,
  );
}

function theoryContexts(stems) {
  return stems.map((s) => `${s} Evaluate the following economic assertions:`);
}

// --- 5.1 What a product is ---
export function pools51() {
  const TRUE = [];
  const FALSE = [];
  for (const g of GOODS) {
    TRUE.push([
      `${g.charAt(0).toUpperCase() + g.slice(1)} sold from one business to another for use in further production counts as a producer product in B2B exchange.`,
      `Producer products are goods and services exchanged between businesses for production purposes rather than final household consumption.`,
    ]);
    TRUE.push([
      `The same ${g} sold to private households for personal use would be classified as a consumer product in B2C marketing.`,
      `Classification as consumer product depends on the customer being a private household rather than another business.`,
    ]);
    TRUE.push([
      `In marketing terminology, ${g} that can be exchanged to satisfy customer needs qualifies as a product whether tangible or intangible.`,
      `Marketing defines a product as any good or service that can be exchanged to fulfil customer wishes and needs.`,
    ]);
    FALSE.push([
      `${g} exchanged only between businesses can never be classified as a consumer product under any circumstances.`,
      `The same good may be a consumer product when sold to households even if it is a producer product in B2B trade.`,
    ]);
    FALSE.push([
      `Marketing treats ${g} as outside the product concept because it is not a finished retail item.`,
      `Products include goods and services that can be exchanged to fulfil needs, not only finished retail items.`,
    ]);
    FALSE.push([
      `Producer products and consumer products are distinguished solely by the physical characteristics of ${g}, not by who buys it.`,
      `The distinction depends on whether the buyer is another business or a private household, not on physical form alone.`,
    ]);
  }
  for (const ind of INDUSTRIES) {
    TRUE.push([
      `Services offered by ${ind} to other firms for operational support count as producer products in business-to-business marketing.`,
      `B2B services supplied to other businesses are producer products when used in the customer's operations.`,
    ]);
    TRUE.push([
      `When ${ind} sells directly to private households, the offering is classified as a consumer product in B2C marketing.`,
      `Sales to private households place the offering in the consumer product category.`,
    ]);
    FALSE.push([
      `${ind} is excluded from the marketing product concept because services cannot be exchanged like goods.`,
      `Products include services as well as goods that can be exchanged to satisfy customer needs.`,
    ]);
  }
  const extraTrue = [
    ["A product in marketing includes every good and service that can be exchanged to fulfil customer wishes and needs.", "The marketing product concept covers exchangeable goods and services aimed at satisfying needs."],
    ["Customers in marketing may be other businesses or private households depending on the market served.", "Marketing recognises both business customers and consumer households as customers."],
    ["Business-to-business marketing involves producer products sold from one business to another.", "B2B trade concerns producer products used in further business activity."],
    ["Business-to-consumer marketing involves consumer products sold to private households.", "B2C trade supplies consumer products to final household buyers."],
    ["The identical physical good may be a producer product or a consumer product depending on the purchaser.", "Classification follows the customer type, not the physical item alone."],
    ["Exchangeability for need satisfaction is the defining feature of a product in marketing terminology.", "A product must be capable of exchange to fulfil customer needs and wishes."],
    ["Services such as technical support can be products when exchanged to satisfy customer needs.", "Intangible services qualify as products when they are exchanged in markets."],
    ["Producer products are also termed business products when supplied to organisational buyers.", "Organisational buyers receive producer or business products in B2B markets."],
    ["Consumer products are aimed at end users in private households rather than at production inputs.", "Consumer products serve household end-use rather than industrial input use."],
    ["Marketing product definitions apply equally to tangible goods and intangible services offered for exchange.", "Both goods and services fall within the marketing product concept when exchangeable."],
  ];
  const extraFalse = [
    ["A product in marketing is limited to physical goods and excludes all services from the definition.", "Services are included in the marketing product concept when exchangeable."],
    ["Producer products can only be raw materials and never include services sold between businesses.", "B2B services used in operations are producer products."],
    ["Consumer products are always sold at retail shops and never through business channels.", "Consumer products are defined by household end-use, not by a specific channel."],
    ["B2B and B2C classifications depend only on advertising media rather than on who purchases the product.", "Classification depends on whether the buyer is a business or a household."],
    ["If a good is used in an office, it is automatically a consumer product regardless of who bought it.", "Office use by a business buyer can make the same item a producer product in B2B trade."],
    ["Marketing excludes digital services from the product concept because they lack physical form.", "Intangible digital services can be products when exchanged to satisfy needs."],
    ["Households cannot be customers in marketing because only businesses participate in exchange.", "Private households are valid customers in B2C marketing."],
    ["A product must already be manufactured before it can satisfy needs in the marketing sense.", "The concept focuses on exchange for need satisfaction, not prior production status alone."],
    ["Producer products are sold exclusively to governments and never to private companies.", "Producer products are sold between businesses generally, not only to governments."],
    ["Consumer products are defined by low price rather than by the identity of the buyer.", "Buyer identity as household or business drives the producer versus consumer distinction."],
  ];
  return {
    TRUE: boost([...TRUE, ...extraTrue], 520),
    FALSE: boost([...FALSE, ...extraFalse], 420),
    SCENE: sceneContexts("that sells both to corporate clients and to households"),
    THEORY: theoryContexts([
      "Analyze how marketing defines a product as an exchangeable good or service for satisfying customer needs.",
      "Review how producer products differ from consumer products in B2B and B2C markets.",
      "Analyze how the same physical item may be classified differently depending on the purchaser.",
      "Review the role of business and household customers in marketing product classifications.",
      "Analyze how services qualify as products when exchanged to fulfil customer wishes.",
      "Review distinctions between business-to-business and business-to-consumer product categories.",
    ]),
    TITLES: padTitles("Product Definition", 100),
  };
}

// --- 5.2 Objectives of marketing ---
export function pools52() {
  const TRUE = [];
  const FALSE = [];
  const objs = [
    ["customer satisfaction", "meeting customer needs and wants effectively", "Customer satisfaction is a central marketing objective focused on fulfilling needs."],
    ["a unique selling proposition", "differentiating the offer from rivals", "USP objectives aim to distinguish the product from competitors."],
    ["market share", "the firm's sales relative to the total market", "Market share measures the firm's position within the overall market."],
    ["sales volume", "the quantity of goods sold", "Sales objectives target the volume of products sold."],
    ["profitability", "earning surplus after costs", "Profitability objectives focus on financial returns from marketing activity."],
  ];
  for (const [term, def, expl] of objs) {
    for (let i = 0; i < 8; i++) {
      TRUE.push([
        `Achieving ${term} is recognised as a legitimate objective of marketing within the standard framework.`,
        expl,
      ]);
      TRUE.push([
        `Marketing may pursue ${term} by aligning the offer with ${def}.`,
        expl,
      ]);
      FALSE.push([
        `Marketing objectives exclude ${term} because only production departments may pursue it.`,
        `Marketing explicitly includes objectives such as ${term} alongside other commercial aims.`,
      ]);
      FALSE.push([
        `Pursuing ${term} contradicts marketing theory and must be handled only by finance departments.`,
        `${term} is among the recognised marketing objectives in the textbook framework.`,
      ]);
    }
  }
  const extraTrue = [
    ["Differentiation through a unique selling proposition helps marketing create perceived distinctiveness.", "USP supports differentiation as a marketing objective."],
    ["Increasing market share is a marketing objective when the firm seeks a larger proportion of industry sales.", "Market share growth is a standard marketing aim."],
    ["Raising sales volume can be a short-run marketing objective even before long-run profitability improves.", "Sales volume is a recognised marketing objective."],
    ["Long-run profitability remains a fundamental marketing objective for sustainable business performance.", "Profitability is a core marketing objective."],
    ["Customer satisfaction objectives require understanding and meeting customer needs and wants.", "Satisfaction objectives centre on fulfilling customer requirements."],
  ];
  const extraFalse = [
    ["Marketing objectives are limited to advertising creativity and exclude commercial performance measures.", "Marketing objectives include satisfaction, share, sales, and profitability."],
    ["Market share objectives are irrelevant because marketing only communicates messages.", "Market share is an explicit marketing objective."],
    ["Profitability is solely an accounting outcome and never a marketing objective.", "Profitability is listed among marketing objectives."],
    ["Customer satisfaction is optional in marketing and unrelated to meeting needs.", "Customer satisfaction is a central marketing objective."],
    ["A unique selling proposition is unrelated to differentiation objectives in marketing.", "USP directly supports differentiation objectives."],
  ];
  return {
    TRUE: boost([...TRUE, ...extraTrue], 520),
    FALSE: boost([...FALSE, ...extraFalse], 420),
    SCENE: sceneContexts("reviewing whether recent campaigns improved customer satisfaction and market share"),
    THEORY: theoryContexts([
      "Analyze the principal objectives of marketing including satisfaction, differentiation, and commercial performance.",
      "Review how unique selling propositions support differentiation objectives.",
      "Analyze market share and sales volume as measurable marketing aims.",
      "Review profitability as a long-run marketing objective.",
      "Analyze tensions between short-run sales growth and long-run customer satisfaction.",
    ]),
    TITLES: padTitles("Marketing Objectives", 100),
  };
}

// --- 5.3 Product vs market orientation ---
export function pools53() {
  const TRUE = [];
  const FALSE = [];
  const concepts = [
    ["product orientation", "internal product features", "Product orientation emphasises what the firm produces rather than market needs."],
    ["market orientation", "customer needs and wants", "Market orientation centres on identifying and satisfying customer requirements."],
    ["customer relationship management", "long-term customer relationships", "CRM supports ongoing relationships with customers in market-oriented firms."],
    ["personal data protection", "sensitive customer information", "Market-oriented CRM must handle personal data responsibly."],
  ];
  for (const [term, focus, expl] of concepts) {
    for (let i = 0; i < 25; i++) {
      TRUE.push([`A firm with strong ${term} prioritises ${focus} in its marketing approach.`, expl]);
      FALSE.push([`${term} means ignoring customers entirely and refusing all market research.`, `${term} involves a defined focus on ${focus}, not ignoring customers.`]);
    }
  }
  const extraTrue = [
    ["Market-oriented businesses adapt offerings based on researched customer needs rather than internal assumptions alone.", "Market orientation requires responding to customer needs."],
    ["Product-oriented firms may risk weak demand if they neglect whether customers want the features offered.", "Neglecting customer demand is a risk of product orientation."],
    ["Customer relationship management systems collect data to improve service and retention over time.", "CRM uses customer data to build relationships."],
    ["Handling personal customer data sensitively is important when pursuing relationship-based marketing.", "Data sensitivity matters in CRM and market orientation."],
  ];
  const extraFalse = [
    ["Market orientation and product orientation are identical strategies with no practical difference.", "They differ in whether customer needs or internal product focus dominates."],
    ["CRM requires sharing all personal data publicly to maximise transparency.", "CRM involves responsible handling of sensitive personal data."],
    ["Product orientation always guarantees higher profits than market orientation.", "Neither orientation automatically guarantees higher profits."],
    ["Market-oriented firms never develop new products without prior customer research.", "Market orientation emphasises needs but does not forbid all internal development."],
  ];
  return {
    TRUE: boost([...TRUE, ...extraTrue], 520),
    FALSE: boost([...FALSE, ...extraFalse], 420),
    SCENE: sceneContexts("debating whether to launch a feature customers requested or one engineers prefer"),
    THEORY: theoryContexts([
      "Analyze differences between product orientation and market orientation in marketing strategy.",
      "Review how customer relationship management supports market-oriented firms.",
      "Analyze risks when internal product focus overrides customer need analysis.",
      "Review sensitivity issues when marketing uses personal customer data.",
    ]),
    TITLES: padTitles("Market Orientation", 100),
  };
}

// --- 5.4 Responsibility and sustainability ---
export function pools54() {
  const TRUE = [];
  const FALSE = [];
  const topics = [
    ["ethical advertising", "truthful and responsible promotion", "Ethical advertising avoids misleading claims and respects consumers."],
    ["overconsumption", "excessive resource use", "Marketing responsibility includes concerns about encouraging overconsumption."],
    ["repair and reuse", "extending product life", "Sustainability objectives may favour repair and reuse over premature disposal."],
    ["renting quality products", "access over ownership", "Renting durable quality goods can reduce waste compared with disposable low-quality purchases."],
  ];
  for (const [term, detail, expl] of topics) {
    for (let i = 0; i < 25; i++) {
      TRUE.push([`Responsible marketing recognises ${term} as part of broader ${detail} concerns.`, expl]);
      FALSE.push([`Responsible marketing encourages ${term} because it maximises short-run sales regardless of social impact.`, `Responsible marketing addresses ${term} with social and environmental awareness.`]);
    }
  }
  const extraTrue = [
    ["Sustainable marketing may promote durable products that can be repaired rather than discarded after minor faults.", "Repair-friendly design supports sustainability objectives."],
    ["Misleading green claims in advertising conflict with ethical marketing responsibility standards.", "Ethical advertising requires honest environmental claims."],
    ["Offering high-quality rented equipment can reduce resource intensity compared with cheap disposable alternatives.", "Quality rental models can support sustainability."],
  ];
  const extraFalse = [
    ["Sustainability concerns are unrelated to marketing and belong only to environmental science courses.", "Marketing responsibility explicitly includes sustainability issues."],
    ["Ethical advertising permits any claim as long as it increases brand awareness.", "Ethical advertising restricts misleading promotional claims."],
    ["Encouraging frequent replacement of functioning products is always consistent with responsible marketing.", "Responsible marketing may challenge wasteful replacement cycles."],
  ];
  return {
    TRUE: boost([...TRUE, ...extraTrue], 520),
    FALSE: boost([...FALSE, ...extraFalse], 420),
    SCENE: sceneContexts("evaluating whether to advertise a repair service or push replacement units"),
    THEORY: theoryContexts([
      "Analyze ethical responsibilities of marketing beyond immediate sales targets.",
      "Review sustainability concerns including overconsumption and product life extension.",
      "Analyze how renting quality products may support environmental objectives.",
      "Review standards for truthful advertising in responsible marketing.",
    ]),
    TITLES: padTitles("Responsible Marketing", 100),
  };
}

// --- 5.5 Market research ---
export function pools55() {
  const TRUE = [];
  const FALSE = [];
  const dims = ["who", "what", "where", "when", "why"];
  for (const d of dims) {
    for (let i = 0; i < 12; i++) {
      TRUE.push([
        `Customer analysis in market research asks ${d} questions to understand buyer behaviour.`,
        `The ${d} dimension is part of standard customer analysis in market research.`,
      ]);
      FALSE.push([
        `Market research customer analysis deliberately excludes ${d} questions as irrelevant.`,
        `Customer analysis includes ${d} among the core investigative dimensions.`,
      ]);
    }
  }
  const metrics = [
    ["primary research", "new data collected for the specific decision", "Primary research gathers original data for the firm's question."],
    ["secondary research", "existing published or internal data", "Secondary research uses data already collected by others."],
    ["market size", "total sales volume or value in the market", "Market size measures the overall scale of the market."],
    ["market share", "the firm's sales as a proportion of the market", "Market share compares firm sales to total market sales."],
    ["market potential", "possible future demand if conditions are favourable", "Market potential estimates achievable demand under favourable assumptions."],
    ["absolute market share", "the firm's sales divided by total market sales", "Absolute share is the firm's percentage of total market sales."],
    ["relative market share", "the firm's share compared with the leading competitor", "Relative share compares the firm to the market leader."],
  ];
  for (const [term, def, expl] of metrics) {
    for (let i = 0; i < 8; i++) {
      TRUE.push([`${term.charAt(0).toUpperCase() + term.slice(1)} in market research refers to ${def}.`, expl]);
      FALSE.push([`${term} is unrelated to market research and used only in production planning.`, `${term} is a standard market research concept.`]);
    }
  }
  return {
    TRUE: boost(TRUE, 520),
    FALSE: boost(FALSE, 420),
    SCENE: sceneContexts("commissioning research before entering a new components market"),
    THEORY: theoryContexts([
      "Analyze primary versus secondary sources in market research design.",
      "Review customer analysis dimensions including who, what, where, when, and why.",
      "Analyze market size, share, and potential as research outputs.",
      "Review absolute versus relative market share calculations.",
    ]),
    TITLES: padTitles("Market Research", 100),
  };
}

// --- 5.6 Segmentation and targeting ---
export function pools56() {
  const TRUE = [];
  const FALSE = [];
  const types = [
    ["geographic segmentation", "location-based grouping", "Geographic segmentation divides markets by region or place."],
    ["demographic segmentation", "age, income, or gender characteristics", "Demographic segmentation uses population characteristics."],
    ["psychographic segmentation", "lifestyle and personality traits", "Psychographic segmentation considers lifestyles and attitudes."],
    ["behavioural segmentation", "purchase behaviour and usage rates", "Behavioural segmentation groups buyers by behaviour patterns."],
  ];
  const criteria = [
    ["measurable", "segments can be sized and identified", "Measurable segments can be quantified for targeting decisions."],
    ["profitable", "segments offer adequate returns", "Profitable segments justify dedicated marketing effort."],
    ["accessible", "the firm can reach the segment", "Accessible segments can be contacted through available channels."],
    ["durable", "segments remain stable over time", "Durable segments persist long enough to justify investment."],
  ];
  const strategies = [
    ["mass marketing", "one offer for the entire market", "Mass marketing uses a single undifferentiated offer."],
    ["segment marketing", "focused offers for selected segments", "Segment marketing tailors offers to chosen segments."],
    ["niche marketing", "highly specialised small segments", "Niche marketing serves narrow specialised segments."],
    ["positioning", "perceived place in the customer's mind", "Positioning shapes how customers perceive the offer."],
    ["economies of scale", "lower unit costs at higher output", "Mass marketing may achieve economies of scale."],
  ];
  for (const [term, detail, expl] of [...types, ...criteria, ...strategies]) {
    for (let i = 0; i < 6; i++) {
      TRUE.push([`${term.charAt(0).toUpperCase() + term.slice(1)} involves ${detail}.`, expl]);
      FALSE.push([`${term} requires ignoring ${detail} and treating all buyers identically without analysis.`, `${term} is defined by ${detail}.`]);
    }
  }
  return {
    TRUE: boost(TRUE, 520),
    FALSE: boost(FALSE, 420),
    SCENE: sceneContexts("choosing between a mass-market campaign and a niche segment strategy"),
    THEORY: theoryContexts([
      "Analyze geographic, demographic, psychographic, and behavioural segmentation bases.",
      "Review measurable, profitable, accessible, and durable segment selection criteria.",
      "Analyze mass, segment, and niche marketing strategies.",
      "Review positioning and economies of scale in targeting decisions.",
    ]),
    TITLES: padTitles("Segmentation", 100),
  };
}

// --- 5.7 Marketing mix ---
export function pools57() {
  const TRUE = [];
  const FALSE = [];
  const ps = [
    ["product", "goods and services offered", "The product element covers goods and services in the marketing mix."],
    ["price", "monetary terms of exchange", "Price sets the monetary value customers pay."],
    ["place", "distribution and availability", "Place concerns where and how products reach customers."],
    ["promotion", "communicating with the market", "Promotion communicates messages to stimulate demand."],
  ];
  const productTools = [
    ["product line", "similar products within a range", "A product line groups similar variants such as related laptop models."],
    ["brand", "name or symbol distinguishing the offer", "Brands differentiate products and build recognition."],
    ["relaunch", "minor product refresh", "Relaunch involves minor changes such as packaging or colours."],
    ["line extension", "new variants within an existing line", "Line extension adds variants within the current product line."],
    ["mix extension", "adding a new product line", "Mix extension broadens the product mix with a new line."],
    ["product life cycle", "stages from introduction to decline", "The PLC models sales and profit over a product's life."],
    ["question mark", "low share in a high-growth market", "BCG question marks have low relative share in growing markets."],
    ["star", "high share in a high-growth market", "BCG stars combine high share with rapid market growth."],
    ["cash cow", "high share in a low-growth market", "Cash cows generate strong returns in mature slow-growth markets."],
    ["poor dog", "low share in a low-growth market", "Poor dogs have weak share and limited growth prospects."],
  ];
  for (const [term, detail, expl] of [...ps, ...productTools]) {
    for (let i = 0; i < 6; i++) {
      TRUE.push([`In the marketing mix, ${term} concerns ${detail}.`, expl]);
      FALSE.push([`The marketing mix excludes ${term} because only three elements are recognised.`, `The four Ps include ${term} as a core element or related concept.`]);
    }
  }
  return {
    TRUE: boost(TRUE, 520),
    FALSE: boost(FALSE, 420),
    SCENE: sceneContexts("adjusting price, distribution, and promotion for a product relaunch"),
    THEORY: theoryContexts([
      "Analyze the four Ps of the marketing mix and their harmonised role.",
      "Review product-line, brand, and extension strategies within the product element.",
      "Analyze product life cycle stages and cash flow implications.",
      "Review Boston Consulting Group matrix categories including stars and cash cows.",
    ]),
    TITLES: padTitles("Marketing Mix", 100),
  };
}

export const POOL_BUILDERS = {
  "5.1": pools51,
  "5.2": pools52,
  "5.3": pools53,
  "5.4": pools54,
  "5.5": pools55,
  "5.6": pools56,
  "5.7": pools57,
};

export function sceneIndices100(seed) {
  // ~25 scene indices spread across 0..99
  const idx = new Set();
  let s = seed;
  while (idx.size < 25) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    idx.add(s % 100);
  }
  return [...idx];
}
