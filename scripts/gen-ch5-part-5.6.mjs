/**
 * Generate scripts/ch5-part-5.6.json — 100 cases for subsection 5.6 Segmentation/targeting.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"))["5.6"];
const OUT = "scripts/ch5-part-5.6.json";

const SCENE = [
  "Consider a household detergent producer that promotes one standard formula nationwide without tailoring messages to regional income differences. Evaluate the following economic assertions:",
  "Consider a regional bakery chain that groups customers by city and surrounding commuter towns when planning delivery routes and store openings. Evaluate the following economic assertions:",
  "Consider a refurbished-electronics retailer that targets buyers seeking lower prices, environmental reuse, and hands-on setup assistance. Evaluate the following economic assertions:",
  "Consider a small office-equipment supplier focusing on sole proprietors and home offices with limited budgets rather than large corporate accounts. Evaluate the following economic assertions:",
  "Consider a sportswear brand offering distinct product lines for occasional joggers and for competitive athletes based on usage intensity. Evaluate the following economic assertions:",
  "Consider a national soap manufacturer producing millions of identical bars to spread fixed factory costs across a very large output. Evaluate the following economic assertions:",
  "Consider a furniture maker selecting middle-income households in suburban districts as the segment it will serve with a mid-range dining range. Evaluate the following economic assertions:",
  "Consider a software vendor shaping its brand image as the reliable choice for independent consultants who need affordable productivity tools. Evaluate the following economic assertions:",
  "Consider a craft brewery selling specialised seasonal ales only to enthusiasts willing to pay premium prices in a narrow taste category. Evaluate the following economic assertions:",
  "Consider a supermarket group analysing age, employment status, and household income before designing loyalty offers for different shopper profiles. Evaluate the following economic assertions:",
  "Consider a vehicle-leasing firm that advertises through business journals and trade fairs to reach fleet managers in manufacturing districts. Evaluate the following economic assertions:",
  "Consider a children's book publisher dividing the market by reading level and parental education when commissioning new titles. Evaluate the following economic assertions:",
  "Consider a cleaning-products company unable to react quickly when one regional segment shifts toward eco-certified alternatives under a single mass-market formula. Evaluate the following economic assertions:",
  "Consider a tutoring service positioning itself as the supportive option for adult learners returning to formal study after years in employment. Evaluate the following economic assertions:",
  "Consider a garden-centre operator measuring segment size and purchasing power before committing to a premium landscaping-tools sub-range. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how market research may reveal customer characteristics relevant for describing potential buyers. Evaluate the following economic assertions:",
  "Analyze geographic segmentation based on location such as city and surrounding area. Evaluate the following economic assertions:",
  "Review demographic segmentation using age, gender, education level, and income level. Evaluate the following economic assertions:",
  "Analyze psychographic segmentation reflecting attitudes, values, and lifestyle interests. Evaluate the following economic assertions:",
  "Review behavioural segmentation linked to buying patterns and product usage intensity. Evaluate the following economic assertions:",
  "Analyze how segmentation divides relatively homogeneous subgroups within a broader market. Evaluate the following economic assertions:",
  "Review the criterion that market segments should be measurable in size and purchasing power. Evaluate the following economic assertions:",
  "Analyze the criterion that market segments should be profitable for the business to serve. Evaluate the following economic assertions:",
  "Review the criterion that market segments should be accessible through communication and distribution channels. Evaluate the following economic assertions:",
  "Analyze the criterion that market segments should be durable rather than changing too quickly. Evaluate the following economic assertions:",
  "Review targeting as the selection of segment or segments a business chooses to enter. Evaluate the following economic assertions:",
  "Analyze how targeting evaluates each segment's attractiveness before commitment. Evaluate the following economic assertions:",
  "Review positioning as creating an image or identity in the minds of target markets. Evaluate the following economic assertions:",
  "Analyze the sequence from segmentation through targeting to positioning in marketing strategy. Evaluate the following economic assertions:",
  "Review mass marketing as offering the same product to all customers while ignoring segment differences. Evaluate the following economic assertions:",
  "Analyze how mass marketing promotes a product to all segments in almost the same way. Evaluate the following economic assertions:",
  "Review mass marketing applications for everyday products such as pens, soaps, and detergents. Evaluate the following economic assertions:",
  "Analyze economies of scale arising when large identical output spreads some costs across more units. Evaluate the following economic assertions:",
  "Review how mass marketing can reduce cost per unit through increased total output. Evaluate the following economic assertions:",
  "Analyze the inflexibility of mass marketing when particular target markets change. Evaluate the following economic assertions:",
  "Review segment marketing as offering different products to one or more market segments. Evaluate the following economic assertions:",
  "Analyze how segment marketing focuses limited resources on segments with strategic fit. Evaluate the following economic assertions:",
  "Review niche marketing as concentrating on particular segments or subgroups within segments. Evaluate the following economic assertions:",
  "Analyze why many small businesses favour niche marketing over mass-market volume. Evaluate the following economic assertions:",
  "Review how niche marketing involves more segmentation than broad segment marketing alone. Evaluate the following economic assertions:",
  "Analyze a target market as the group toward whom a business markets with a tailored strategy. Evaluate the following economic assertions:",
  "Review how a target market strategy aims to satisfy specific needs and preferences. Evaluate the following economic assertions:",
  "Analyze targeting as the first step toward an effective marketing strategy. Evaluate the following economic assertions:",
  "Review the marketing mix as a second step after a target market has been chosen. Evaluate the following economic assertions:",
  "Analyze employed and retired adults as demographic characteristics in segmentation. Evaluate the following economic assertions:",
  "Review self-employed status as a demographic variable for customer description. Evaluate the following economic assertions:",
  "Analyze occasional-use buyers as a behavioural segment distinct from heavy users. Evaluate the following economic assertions:",
  "Review customers unwilling to pay full price for new equipment as a psychographic segment. Evaluate the following economic assertions:",
  "Analyze environmental concern and willingness to use second-hand goods in psychographic segmentation. Evaluate the following economic assertions:",
  "Review customers wanting technical assistance at startup as a psychographic or service-need segment. Evaluate the following economic assertions:",
  "Analyze how measurable segments allow estimation of size and purchasing power. Evaluate the following economic assertions:",
  "Review why unprofitable segments should not be selected even when they are identifiable. Evaluate the following economic assertions:",
  "Analyze accessibility through reachable communication and distribution channels. Evaluate the following economic assertions:",
  "Review durability of segments as stability over time rather than instant disappearance. Evaluate the following economic assertions:",
  "Analyze mass-market production of a relatively large number of identical products. Evaluate the following economic assertions:",
  "Review selling to a relatively large market as a feature of mass marketing. Evaluate the following economic assertions:",
  "Analyze costs that do not rise in direct proportion to output under economies of scale. Evaluate the following economic assertions:",
  "Review reduced cost per unit when total output of an identical product increases. Evaluate the following economic assertions:",
  "Analyze segment marketing tailoring products to needs and wants within chosen segments. Evaluate the following economic assertions:",
  "Review strategic fit between firm capabilities and segment requirements in segment marketing. Evaluate the following economic assertions:",
  "Analyze niche specialists potentially becoming market leaders despite small firm size. Evaluate the following economic assertions:",
  "Review businesses targeting selected segments because of specialisation in a certain field. Evaluate the following economic assertions:",
  "Analyze positioning clarifying which product meets demands of targeted subgroups. Evaluate the following economic assertions:",
  "Review the marketing question of which groups constitute target groups after segmentation. Evaluate the following economic assertions:",
  "Analyze the marketing question of which products meet customer demands after targeting. Evaluate the following economic assertions:",
  "Review personal hygiene products as examples suited to undifferentiated mass promotion. Evaluate the following economic assertions:",
  "Analyze pencils and similar universal items as mass-marketing candidates. Evaluate the following economic assertions:",
  "Review limitations of mass marketing in responding to segment-specific preference shifts. Evaluate the following economic assertions:",
  "Analyze offering different products to subgroups within broader segments in niche marketing. Evaluate the following economic assertions:",
  "Review limited funds for equipment as a segment characteristic for small-office buyers. Evaluate the following economic assertions:",
  "Analyze low need for the latest model release as a niche segment trait. Evaluate the following economic assertions:",
  "Review high need for technical support as a niche requirement within a broader segment. Evaluate the following economic assertions:",
  "Analyze sole proprietors and home offices as a segment for specialised suppliers. Evaluate the following economic assertions:",
  "Review evaluating segment attractiveness before selecting one or more segments to enter. Evaluate the following economic assertions:",
  "Analyze a target market defined as people or businesses receiving a designed marketing strategy. Evaluate the following economic assertions:",
  "Review positioning operating on minds of customers in the chosen target market. Evaluate the following economic assertions:",
  "Analyze the link between segmentation criteria and sensible segment selection. Evaluate the following economic assertions:",
  "Review geographic variables alongside demographic and psychographic bases. Evaluate the following economic assertions:",
  "Analyze behavioural variables complementing demographic classification. Evaluate the following economic assertions:",
  "Review mass marketing ignoring heterogeneous preferences across customer groups. Evaluate the following economic assertions:",
  "Analyze segment marketing as some segmentation with differentiated offerings. Evaluate the following economic assertions:",
  "Review niche marketing as more segmentation focused on narrower subgroups. Evaluate the following economic assertions:",
  "Analyze economies of scale dividing fixed production costs across greater volume. Evaluate the following economic assertions:",
  "Review identical promotion across segments as a hallmark of mass marketing. Evaluate the following economic assertions:",
  "Analyze differentiated promotion by segment as inconsistent with pure mass marketing. Evaluate the following economic assertions:",
  "Review targeting preceding development of an appropriate marketing mix. Evaluate the following economic assertions:",
  "Analyze positioning following targeting in the STP framework. Evaluate the following economic assertions:",
  "Review income level as a demographic segmentation variable. Evaluate the following economic assertions:",
  "Analyze education level as a demographic segmentation variable. Evaluate the following economic assertions:",
  "Review gender as a demographic segmentation variable. Evaluate the following economic assertions:",
  "Analyze age groups as a demographic segmentation variable. Evaluate the following economic assertions:",
  "Review interest-based psychographic segments in product marketing. Evaluate the following economic assertions:",
  "Analyze buying behaviour patterns distinguishing light from intensive users. Evaluate the following economic assertions:",
  "Review communication-channel access as part of segment accessibility. Evaluate the following economic assertions:",
  "Analyze distribution-channel access as part of segment accessibility. Evaluate the following economic assertions:",
  "Review profitable segments covering costs and yielding acceptable returns. Evaluate the following economic assertions:",
  "Analyze durable segments remaining useful for planning over a reasonable horizon. Evaluate the following economic assertions:",
  "Review mass marketing scale advantages in standardized consumer staples. Evaluate the following economic assertions:",
  "Analyze segment marketing resource concentration on best-known customer groups. Evaluate the following economic assertions:",
  "Review niche marketing fit for firms unable to supply mass-market quantities. Evaluate the following economic assertions:",
  "Analyze target-market needs and preferences shaping subsequent marketing-mix decisions. Evaluate the following economic assertions:",
  "Review positioning identity creation relative to competing offerings in the segment. Evaluate the following economic assertions:",
  "Analyze the integrated STP logic from dividing markets to occupying a distinct place. Evaluate the following economic assertions:",
  "Review how segmentation makes sense only when segments meet measurable profitable accessible durable tests. Evaluate the following economic assertions:",
  "Analyze selecting segments that a firm can serve better than undifferentiated mass coverage. Evaluate the following economic assertions:",
  "Review economies of scale as a benefit linked to high-volume identical mass production. Evaluate the following economic assertions:",
  "Analyze trade-offs between mass-marketing efficiency and segment responsiveness. Evaluate the following economic assertions:",
  "Review behavioural segmentation describing how customers use or purchase products. Evaluate the following economic assertions:",
  "Analyze psychographic segmentation describing why customers hold particular attitudes. Evaluate the following economic assertions:",
  "Review geographic segmentation describing where customers are located. Evaluate the following economic assertions:",
  "Analyze demographic segmentation describing who customers are in measurable social terms. Evaluate the following economic assertions:",
  "Review targeting as commitment to specific segments after evaluation. Evaluate the following economic assertions:",
  "Analyze positioning as the perceived place of the offer within a target segment. Evaluate the following economic assertions:",
  "Review mass segment and niche strategies as points on a segmentation-intensity spectrum. Evaluate the following economic assertions:",
  "Analyze how a marketing strategy designed for a target market addresses specific preferences. Evaluate the following economic assertions:",
  "Review the role of market segmentation in identifying relatively homogeneous customer groups. Evaluate the following economic assertions:",
  "Analyze why inaccessible segments fail the test for effective targeting even when profitable on paper. Evaluate the following economic assertions:",
  "Review why immeasurable segments undermine reliable targeting and positioning decisions. Evaluate the following economic assertions:",
  "Analyze how increased output can lower average cost per unit when some costs are shared. Evaluate the following economic assertions:",
  "Review specialised field expertise as a reason to target selected segments only. Evaluate the following economic assertions:",
  "Analyze creating a clear product identity for a chosen subgroup as positioning. Evaluate the following economic assertions:",
  "Review the textbook pairing of segmentation criteria with targeting and positioning steps. Evaluate the following economic assertions:",
];

const TITLES = [
  "Customer Characteristics in Market Research",
  "Geographic Segmentation by Location",
  "Demographic Segmentation Variables",
  "Psychographic Segmentation and Values",
  "Behavioural Segmentation Patterns",
  "Homogeneous Subgroups in Segmentation",
  "Measurable Segment Criterion",
  "Profitable Segment Criterion",
  "Accessible Segment Criterion",
  "Durable Segment Criterion",
  "Targeting Selected Segments",
  "Evaluating Segment Attractiveness",
  "Positioning and Market Identity",
  "Segmentation Targeting Positioning Sequence",
  "Mass Marketing Definition",
  "Uniform Promotion in Mass Marketing",
  "Mass Marketing for Everyday Products",
  "Economies of Scale in Production",
  "Cost Per Unit and Total Output",
  "Mass Marketing Inflexibility",
  "Segment Marketing Differentiation",
  "Strategic Fit in Segment Marketing",
  "Niche Marketing Focus",
  "Small Business Niche Preference",
  "More Segmentation in Niche Marketing",
  "Target Market Definition",
  "Satisfying Target Market Needs",
  "Targeting as First Strategy Step",
  "Marketing Mix After Targeting",
  "Employed and Retired Demographics",
  "Self-Employed Demographic Segment",
  "Occasional Use Behavioural Segment",
  "Price-Sensitive Psychographic Segment",
  "Environmental Reuse Psychographics",
  "Technical Support Need Segment",
  "Measuring Size and Purchasing Power",
  "Rejecting Unprofitable Segments",
  "Communication and Distribution Access",
  "Segment Durability Over Time",
  "Identical Mass-Market Products",
  "Large Market Mass Marketing",
  "Non-Proportional Cost Sharing",
  "Reduced Unit Cost at Scale",
  "Tailored Products in Segment Marketing",
  "Resources and Strategic Fit",
  "Niche Leaders Despite Small Size",
  "Specialisation and Selected Segments",
  "Positioning Product Fit",
  "Identifying Target Groups",
  "Products Meeting Segment Demands",
  "Hygiene Products Mass Marketing",
  "Universal Items Mass Marketing",
  "Mass Marketing Response Limits",
  "Subgroups Within Segments",
  "Limited Equipment Budget Segment",
  "Low Latest-Model Need Niche",
  "High Technical Support Niche",
  "Sole Proprietor Home Office Segment",
  "Attractiveness Before Segment Entry",
  "Designed Strategy for Target Market",
  "Positioning in Customer Minds",
  "Criteria and Segment Selection",
  "Geographic With Other Bases",
  "Behavioural With Demographic Bases",
  "Mass Marketing Ignores Heterogeneity",
  "Segment Marketing Some Segmentation",
  "Niche Marketing Narrower Focus",
  "Fixed Costs Across Greater Volume",
  "Identical Promotion Mass Marketing",
  "Differentiated Promotion Not Mass",
  "Targeting Before Marketing Mix",
  "Positioning After Targeting",
  "Income Level Demographics",
  "Education Level Demographics",
  "Gender Demographics",
  "Age Group Demographics",
  "Interest Psychographic Segments",
  "Light Versus Intensive Users",
  "Communication Channel Accessibility",
  "Distribution Channel Accessibility",
  "Profitable Segment Returns",
  "Durable Segments for Planning",
  "Scale Advantages in Staples",
  "Resource Focus in Segment Marketing",
  "Niche Fit for Limited Volume",
  "Target Needs and Marketing Mix",
  "Positioning Versus Competitors",
  "Integrated STP Logic",
  "Four Segmentation Criteria Together",
  "Serving Segments Better Than Mass",
  "High Volume and Economies of Scale",
  "Efficiency Versus Responsiveness Trade-Off",
  "Behavioural Purchase Description",
  "Psychographic Attitude Description",
  "Geographic Location Description",
  "Demographic Social Description",
  "Targeting as Segment Commitment",
  "Positioning as Perceived Place",
  "Mass Segment Niche Spectrum",
  "Strategy for Specific Preferences",
  "Homogeneous Groups Identification",
  "Inaccessible Profitable Segments",
  "Immeasurable Segment Problems",
  "Average Cost and Shared Overheads",
  "Expertise and Selected Segments",
  "Product Identity for Subgroup",
  "Textbook STP Criteria Pairing",
  "Detergent Mass Marketing Scene",
  "Regional Bakery Geographic Scene",
  "Refurbished Electronics Psychographics",
  "Small Office Equipment Niche",
  "Sportswear Usage Behaviour Scene",
  "Soap Manufacturer Scale Scene",
  "Furniture Suburban Targeting Scene",
  "Software Consultant Positioning Scene",
  "Craft Brewery Niche Scene",
  "Supermarket Demographic Loyalty Scene",
  "Fleet Leasing Accessible Channels",
  "Publisher Education Segmentation",
  "Eco Shift Mass Marketing Limits",
  "Adult Learner Positioning Scene",
  "Garden Centre Measurable Segments",
  "Core Segmentation Assertion Review",
  "Closing STP Strategy Distinctions",
];

const sceneIndices = [
  0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96,
];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const geo = [
    "an Austrian city and its surrounding commuter area",
    "a coastal region and neighbouring inland towns",
    "a capital district and peripheral suburbs",
    "a mountain province and valley municipalities",
    "a border county and adjacent cross-border shoppers",
    "a metropolitan core and satellite villages",
    "a northern province and southern retail catchment",
    "an urban postcode cluster and rural fringe",
    "a federal state capital and outlying districts",
    "a tourism zone and resident service area",
  ];
  const demo = [
    "adult men and women of all ages",
    "employed wage earners and retired pensioners",
    "self-employed professionals and salaried staff",
    "households grouped by declared income brackets",
    "buyers classified by completed education level",
    "parents with young children and empty-nest couples",
    "students and mid-career adults",
    "dual-income households and single earners",
    "first-time buyers and long-established residents",
    "urban renters and suburban owner-occupiers",
  ];
  const psycho = [
    "buyers unwilling to pay the full price of a brand-new device",
    "customers who value environmental reuse of second-hand goods",
    "users wanting hands-on help when starting equipment",
    "shoppers prioritising reliability over fashionable novelty",
    "clients seeking personalised service rather than self-service",
    "households with strong sustainability attitudes",
    "price-conscious buyers accepting older technology",
    "risk-averse customers preferring guided setup",
    "enthusiasts motivated by specialist taste and craft quality",
    "learners motivated by flexible study support",
  ];
  const behav = [
    "occasional users rather than intensive daily operators",
    "seasonal purchasers rather than year-round repeat buyers",
    "light users of software licences rather than power users",
    "infrequent maintainers rather than continuous heavy consumers",
    "trial buyers before occasional repeat purchase",
    "weekend-only recreational users",
    "single-purchase gift buyers rather than replenishment shoppers",
    "contract renewers rather than first-time adopters",
    "bulk-order institutional buyers versus single-unit shoppers",
    "loyalty-program members with predictable basket patterns",
  ];

  add(
    "Market segmentation divides a market into relatively homogeneous subgroups of customers who share relevant characteristics.",
    "Segmentation creates subgroups that are relatively homogeneous with respect to relevant customer characteristics.",
  );
  add(
    "Geographic segmentation groups customers according to where they live or operate, such as a city and its surrounding area.",
    "Location-based grouping such as city and surrounding area is geographic segmentation.",
  );
  add(
    "Demographic segmentation uses measurable social characteristics such as age, gender, education level, and income level.",
    "Age, gender, education, and income are textbook demographic segmentation variables.",
  );
  add(
    "Psychographic segmentation reflects attitudes, values, lifestyle interests, and willingness to pay for particular product philosophies.",
    "Attitudes, values, and lifestyle interests underpin psychographic segmentation.",
  );
  add(
    "Behavioural segmentation distinguishes customers by how they buy or use products, such as occasional versus heavy use.",
    "Buying and usage patterns such as occasional versus heavy use define behavioural segmentation.",
  );
  add(
    "A useful segment should be measurable so that its size and purchasing power can be estimated.",
    "Measurability requires that segment size and purchasing power can be estimated.",
  );
  add(
    "A useful segment should be profitable so that serving it is worthwhile for the business.",
    "Profitability means the segment must be worth serving commercially.",
  );
  add(
    "A useful segment should be accessible through communication channels and distribution channels that can reach it.",
    "Accessibility requires reachable communication and distribution channels.",
  );
  add(
    "A useful segment should be durable in the sense that it does not change too quickly to support planning.",
    "Durability means the segment should remain stable enough for planning rather than vanishing immediately.",
  );
  add(
    "Targeting is the process of evaluating each segment's attractiveness and selecting one or more segments to enter.",
    "Targeting evaluates attractiveness and chooses segment(s) to enter.",
  );
  add(
    "A target market is a group of people or businesses toward whom a firm markets goods, services, or ideas with a strategy designed for their specific needs and preferences.",
    "The target market receives a tailored strategy aimed at its specific needs and preferences.",
  );
  add(
    "Positioning is the process by which marketers try to create an image or identity in the minds of their target market.",
    "Positioning builds an image or identity in the target market's minds.",
  );
  add(
    "After segments are identified and a target market is chosen, positioning clarifies which product meets the demands of the targeted subgroup.",
    "Positioning links the chosen target subgroup to the product that meets its demands.",
  );
  add(
    "Mass marketing ignores different market segments and offers the same product to all customers.",
    "Mass marketing treats the market as undifferentiated with one product for all.",
  );
  add(
    "Under mass marketing, a product is promoted to all segments in almost the same way.",
    "Mass marketing uses nearly identical promotion across segments.",
  );
  add(
    "Mass marketing is often applied to everyday products such as pens, pencils, soaps, personal hygiene products, and detergents.",
    "Universal staples like pens, soaps, and detergents commonly suit mass marketing.",
  );
  add(
    "Mass marketing allows a business to produce a relatively large number of identical products and sell them to a relatively large market.",
    "High-volume identical output sold broadly is characteristic of mass marketing.",
  );
  add(
    "Economies of scale arise when a large number of identical products is produced and some costs do not increase in direct proportion to output.",
    "Scale economies occur because some costs are shared across a larger identical output.",
  );
  add(
    "Increased total output of an identical product can reduce cost per unit because shared costs are divided across more units.",
    "Higher identical output spreads costs and lowers average cost per unit.",
  );
  add(
    "Mass marketing can be inflexible and make it harder to react to particular changes in some target markets.",
    "Uniform mass coverage reduces flexibility when specific segments shift preferences.",
  );
  add(
    "Segment marketing means offering different products to one or more segments after some segmentation.",
    "Segment marketing tailors different products to chosen segment(s).",
  );
  add(
    "Segment marketing focuses limited resources on segments where the firm has strategic fit with customer needs and wants.",
    "Resource focus on well-understood segments with strategic fit defines segment marketing.",
  );
  add(
    "Niche marketing focuses on particular segments and often on subgroups within broader segments through more segmentation.",
    "Niche marketing concentrates on narrower subgroups within segments.",
  );
  add(
    "Many small businesses employ niche marketing because they cannot produce the quantity required for a mass market.",
    "Limited production capacity leads many small firms toward niche marketing.",
  );
  add(
    "A business specialising in a certain field may target only selected segments of a market rather than the whole market.",
    "Specialisation supports targeting selected segments instead of full-market coverage.",
  );
  add(
    "A niche specialist that serves a segment well can become a market leader regardless of firm size.",
    "Strong niche performance can yield market leadership despite small scale.",
  );
  add(
    "Targeting is the first step toward an effective marketing strategy before the marketing mix is applied to serve the target market.",
    "Targeting precedes the marketing mix in building an effective strategy.",
  );
  add(
    "The marketing mix is applied as a second step to serve the needs of the chosen target market.",
    "After targeting, the marketing mix serves the selected target market.",
  );

  for (let i = 0; i < geo.length; i++) {
    const g = geo[i];
    const d = demo[i];
    const p = psycho[i];
    const b = behav[i];
    add(
      `Grouping buyers in ${g} illustrates geographic segmentation because location defines the subgroup.`,
      `Customers in ${g} form a geographic segment based on place.`,
    );
    add(
      `Describing customers as ${d} illustrates demographic segmentation using measurable population characteristics.`,
      `${d.charAt(0).toUpperCase() + d.slice(1)} exemplify demographic segmentation variables.`,
    );
    add(
      `Targeting ${p} reflects psychographic segmentation based on attitudes and preferences rather than location alone.`,
      `${p.charAt(0).toUpperCase() + p.slice(1)} illustrate psychographic segmentation.`,
    );
    add(
      `Distinguishing ${b} is behavioural segmentation because purchase and usage patterns differ within the product category.`,
      `${b.charAt(0).toUpperCase() + b.slice(1)} illustrate behavioural segmentation.`,
    );
    add(
      `A segment defined for ${g} is measurable when survey and sales data reveal its size and average purchasing power.`,
      `Data on ${g} can make the geographic segment measurable in size and purchasing power.`,
    );
    add(
      `A segment of ${d} is profitable only if expected revenue from serving them exceeds the cost of tailored offers.`,
      `Profitability for ${d} requires revenue to cover the cost of serving that demographic subgroup.`,
    );
    add(
      `A segment of ${p} is accessible when advertising and retail channels can reach those customers effectively.`,
      `Accessible channels must reach ${p} for viable targeting.`,
    );
    add(
      `A segment of ${b} is durable when usage patterns remain stable enough to justify product and promotion planning.`,
      `Durability for ${b} means the behavioural pattern persists long enough for planning.`,
    );
    add(
      `Mass marketing of a universal staple to ${g} and other areas uses one offer promoted in almost the same way everywhere.`,
      `A single staple promoted uniformly across ${g} and elsewhere fits mass marketing.`,
    );
    add(
      `Segment marketing to ${d} would offer differentiated products matching the subgroup's identified needs rather than one identical item.`,
      `Differentiated products for ${d} reflect segment marketing.`,
    );
    add(
      `Niche marketing to ${p} concentrates on a narrow subgroup whose specialised preferences justify a focused offer.`,
      `A focused offer for ${p} reflects niche marketing within a broader market.`,
    );
    add(
      `Targeting ${b} means selecting that behavioural subgroup after judging its attractiveness against segmentation criteria.`,
      `Choosing ${b} as a focus group is targeting after segment evaluation.`,
    );
    add(
      `Positioning toward ${p} aims to create a distinct image of which product best serves that attitude-based subgroup.`,
      `An identity showing the right product for ${p} is positioning.`,
    );
    add(
      `Producing millions of identical units for ${g} can spread fixed factory costs and support economies of scale.`,
      `High identical volume for ${g} can lower unit cost through scale economies.`,
    );
    add(
      `A firm with strategic fit serving ${d} should concentrate resources on that segment rather than undifferentiated mass coverage.`,
      `Strategic fit with ${d} supports focused segment marketing.`,
    );
  }

  const massProducts = [
    "ballpoint pens",
    "bar soap",
    "laundry detergent",
    "toothpaste",
    "notebook paper",
    "shampoo",
    "dishwashing liquid",
    "pencils",
    "facial tissues",
    "deodorant",
  ];
  const economyAngles = [
    (mp) =>
      `High-volume production of ${mp} allows fixed factory costs to be spread across more units, lowering average cost per item.`,
    (mp) =>
      `Bulk purchasing of raw materials for ${mp} can reduce input cost per unit when a manufacturer operates at large scale.`,
    (mp) =>
      `A national advertising campaign for one standard ${mp} brand can amortise promotional spending over a very large customer base.`,
    (mp) =>
      `Automated filling lines for ${mp} become more cost-efficient per unit when output runs continuously at high volume.`,
    (mp) =>
      `Warehousing and distribution of ${mp} in standardised packs may lower logistics cost per unit at mass-market scale.`,
    (mp) =>
      `If overhead costs for ${mp} production remain relatively stable, rising output can reduce the average cost attributed to each unit.`,
    (mp) =>
      `A small producer unable to supply nationwide ${mp} demand may focus on a narrow buyer subgroup through niche marketing.`,
    (mp) =>
      `Limited production capacity for ${mp} may push a firm toward segment-specific variants rather than one undifferentiated national offer.`,
  ];
  for (let i = 0; i < massProducts.length; i++) {
    const mp = massProducts[i];
    add(
      `${mp.charAt(0).toUpperCase() + mp.slice(1)} are often mass marketed because very many people use them regardless of detailed personal characteristics.`,
      `Universal daily use makes ${mp} a typical mass-marketing product.`,
    );
    add(economyAngles[i % economyAngles.length](mp), `Economies of scale or niche focus can apply differently to ${mp} producers.`);
    add(
      `Promoting ${mp} with nearly identical messages to all customer groups is consistent with mass marketing.`,
      `Uniform promotion of ${mp} across groups reflects mass marketing.`,
    );
    add(
      `Mass marketing of ${mp} trades flexibility for efficiency when one formula must serve heterogeneous preferences.`,
      `A single ${mp} formula for everyone limits segment-specific responsiveness.`,
    );
    add(
      `Selling ${mp} to a relatively large market with one standard product aligns with undifferentiated mass marketing.`,
      `One standard ${mp} sold broadly is mass marketing.`,
    );
    add(economyAngles[(i + 3) % economyAngles.length](mp), `Scale and targeting choices for ${mp} shape marketing strategy.`);
    add(
      `Segment marketing of ${mp} would imply different variants for different subgroups rather than one identical item for all.`,
      `Variant ${mp} lines for subgroups indicate segment marketing, not pure mass marketing.`,
    );
    add(economyAngles[(i + 5) % economyAngles.length](mp), `Volume constraints influence whether ${mp} is mass or niche marketed.`);
  }

  const segTypes = [
    "geographic",
    "demographic",
    "psychographic",
    "behavioural",
  ];
  const criteria = [
    "measurable size and purchasing power",
    "commercial profitability",
    "accessible communication and distribution",
    "durability over a planning horizon",
  ];
  for (let i = 0; i < segTypes.length; i++) {
    const st = segTypes[i];
    const c1 = criteria[i];
    const c2 = criteria[(i + 1) % 4];
    add(
      `${st.charAt(0).toUpperCase() + st.slice(1)} segmentation helps describe relatively homogeneous customer subgroups within a broader market.`,
      `${st.charAt(0).toUpperCase() + st.slice(1)} bases create homogeneous subgroups for analysis.`,
    );
    add(
      `A ${st} segment that lacks ${c1} should not be selected for targeting even if it appears interesting.`,
      `Without ${c1}, a ${st} segment fails a key segmentation criterion.`,
    );
    add(
      `A ${st} segment that satisfies ${c2} is more likely to support effective targeting and positioning decisions.`,
      `${c2.charAt(0).toUpperCase() + c2.slice(1)} strengthens a ${st} segment's suitability.`,
    );
    add(
      `Market research revealing ${st} differences can inform which subgroups a business might target.`,
      `${st.charAt(0).toUpperCase() + st.slice(1)} insight from research supports later targeting.`,
    );
    add(
      `After ${st} segmentation, targeting evaluates attractiveness before the firm commits to a subgroup.`,
      `Targeting follows ${st} segmentation and evaluates segment attractiveness.`,
    );
    add(
      `Positioning after ${st} segmentation and targeting clarifies the product identity aimed at the chosen subgroup.`,
      `Positioning completes the STP path begun with ${st} segmentation.`,
    );
    add(
      `Mass marketing largely ignores detailed ${st} differences and offers one product broadly.`,
      `Undifferentiated mass marketing does not tailor to ${st} subgroups.`,
    );
    add(
      `Segment marketing uses ${st} insight to tailor products to one or more chosen subgroups.`,
      `${st.charAt(0).toUpperCase() + st.slice(1)} data supports differentiated segment marketing.`,
    );
    add(
      `Niche marketing applies deeper ${st} insight to serve a narrow subgroup within a broader segment.`,
      `Niche focus relies on detailed ${st} understanding of a small subgroup.`,
    );
    add(
      `Economies of scale are most associated with mass marketing that sells identical output broadly rather than many ${st} niches.`,
      `Scale economies link to broad identical output, not many ${st} micro-offers.`,
    );
  }

  const nicheTraits = [
    "limited funds for computer equipment",
    "no need for the latest model or program release",
    "a high need for ongoing technical support",
    "preference for refurbished rather than new equipment",
    "operation from a home office with few employees",
    "occasional rather than intensive software use",
    "willingness to accept older hardware if support is reliable",
    "priority on affordability over cutting-edge specifications",
    "requirement for setup assistance at purchase",
    "environmental preference for extending product life through reuse",
  ];
  const nicheBuyers = [
    "sole proprietors",
    "individual consumers",
    "small home offices",
    "micro-enterprises",
    "freelance consultants",
    "part-time home workers",
    "budget-conscious households",
    "community organisations with thin budgets",
    "start-up founders in shared workspaces",
    "retired learners using basic computing tasks",
  ];
  for (let i = 0; i < nicheTraits.length; i++) {
    const t = nicheTraits[i];
    const nb = nicheBuyers[i];
    add(
      `${nb.charAt(0).toUpperCase() + nb.slice(1)} with ${t} form a niche within a broader small-business or household segment.`,
      `${nb} exhibiting ${t} define a niche subgroup.`,
    );
    add(
      `Targeting ${nb} who show ${t} is consistent with niche marketing after segmentation.`,
      `Choosing ${nb} with ${t} reflects niche targeting.`,
    );
    add(
      `Positioning an offer as ideal for ${nb} with ${t} creates a distinct identity in that subgroup's minds.`,
      `Identity aimed at ${nb} with ${t} is positioning.`,
    );
    add(
      `A small supplier serving ${nb} with ${t} may lead its niche despite lacking mass-market scale.`,
      `Niche excellence with ${nb} can yield leadership without mass scale.`,
    );
    add(
      `Segment marketing might serve a wider office-equipment segment while niche marketing narrows to ${nb} with ${t}.`,
      `Niche marketing is narrower than serving the whole segment; ${nb} with ${t} illustrate that.`,
    );
    add(
      `Mass marketing would not tailor support and pricing to ${nb} with ${t} but would push one standard product broadly.`,
      `Uniform mass offers ignore specialised needs such as ${t} among ${nb}.`,
    );
  }

  const stpSteps = [
    "identifying relatively homogeneous subgroups",
    "evaluating segment attractiveness",
    "selecting one or more segments to enter",
    "designing a strategy for specific needs and preferences",
    "creating an image or identity in target minds",
    "applying the marketing mix to the chosen target market",
  ];
  for (let i = 0; i < stpSteps.length; i++) {
    const step = stpSteps[i];
    add(
      `Effective STP strategy requires ${step} as part of the progression from segmentation to targeting to positioning.`,
      `${step.charAt(0).toUpperCase() + step.slice(1)} belongs in the STP marketing logic.`,
    );
    add(
      `Skipping ${step} weakens the link between market division and a coherent offer for a chosen subgroup.`,
      `Without ${step}, STP strategy loses coherence.`,
    );
  }

  const extraTrue = [
    ["Market research may reveal age, gender, education, income, behavioural patterns, and interests relevant for segmentation.", "Research can surface demographic, behavioural, and interest variables for segmentation."],
    ["Relatively homogeneous subgroups are the purpose of dividing a heterogeneous market through segmentation.", "Segmentation aims for internally similar subgroups within a diverse market."],
    ["Measurability allows managers to compare segment size and purchasing power before targeting.", "Managers need measurable size and purchasing power to compare segments."],
    ["Profitability ensures that serving a segment contributes acceptably to business performance.", "A segment must be commercially worthwhile to target."],
    ["Accessibility requires that promotion and delivery channels can reach the segment.", "Reachable promotion and delivery define accessible segments."],
    ["Durability protects planning from segments that dissolve before investments pay off.", "Stable segments support planning horizons."],
    ["Targeting selects segment(s) to enter after evaluating attractiveness.", "Segment entry follows attractiveness evaluation in targeting."],
    ["Positioning answers which product meets the demands of the targeted subgroup.", "Product fit for the targeted subgroup is a positioning question."],
    ["Mass marketing sells one product to a large undifferentiated market.", "One product to a broad market is mass marketing."],
    ["Segment marketing tailors offerings to needs within chosen segments.", "Tailored segment offers distinguish segment marketing."],
    ["Niche marketing emphasises narrow subgroups and deeper specialisation.", "Narrow subgroup focus characterises niche marketing."],
    ["Economies of scale reduce unit cost when identical output increases and shared costs spread.", "Spreading shared costs over more identical units lowers unit cost."],
    ["Some production costs do not rise in direct proportion to output under scale economies.", "Not all costs rise proportionally with output at scale."],
    ["Mass marketing's uniform promotion limits segment-specific messaging.", "Same promotion to all segments limits tailored messaging."],
    ["Segment marketing reflects strategic fit between firm strengths and segment needs.", "Strategic fit guides segment marketing resource allocation."],
    ["Small firms often cannot supply mass-market quantity and therefore choose niches.", "Volume limits push small firms toward niche strategies."],
    ["Specialists may target only selected segments because of field expertise.", "Expertise supports selective segment targeting."],
    ["A target market receives a strategy designed for its specific needs and preferences.", "Tailored strategy defines work with a target market."],
    ["Targeting precedes applying the marketing mix to serve chosen customers.", "Marketing mix follows target selection."],
    ["Positioning shapes customer perception of the product's place among alternatives.", "Perceived place among alternatives is positioning."],
    ["Geographic, demographic, psychographic, and behavioural bases can be combined in segmentation analysis.", "Multiple segmentation bases may be used together."],
    ["Behavioural segmentation can separate light users from heavy users of the same product.", "Usage intensity distinguishes behavioural subgroups."],
    ["Psychographic segmentation can capture environmental values affecting purchase choices.", "Environmental values belong in psychographic segmentation."],
    ["Demographic segmentation can include employment and retirement status.", "Employment and retirement are demographic variables."],
    ["Mass marketing of detergents exemplifies selling a standard product to a very broad customer base.", "Standard detergents sold broadly illustrate mass marketing."],
    ["Niche marketing within a segment serves a subgroup with more specific needs than the segment average.", "Subgroup-specific needs define niches within segments."],
    ["Inaccessible segments cannot be served effectively even if they appear profitable on paper.", "Lack of channel access blocks effective targeting."],
    ["Immeasurable segments prevent reliable comparison of size and purchasing power.", "Without measurement, segment comparison is unreliable."],
    ["Increased identical output can divide fixed costs across more units and lower average cost.", "Fixed cost spreading lowers average cost at higher volume."],
    ["Mass marketing efficiency can conflict with responsiveness to segment-specific change.", "Efficiency and segment responsiveness can trade off under mass marketing."],
  ];
  for (const [s, e] of extraTrue) add(s, e);

  const fillers = [
    "introductory segmentation theory",
    "standard STP terminology",
    "the textbook targeting framework",
    "basic mass versus niche theory",
    "foundational positioning theory",
    "elementary market division concepts",
    "core segmentation criteria",
    "primary targeting vocabulary",
    "initial positioning concepts",
    "fundamental scale-economy theory",
  ];
  const roles = [
    "marketing planner",
    "segment analyst",
    "niche retailer",
    "mass-market manufacturer",
    "category manager",
    "small-business owner",
    "distribution manager",
    "brand strategist",
    "market researcher",
    "product manager",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, segmentation divides customers into relatively homogeneous subgroups before targeting decisions.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} treats segmentation as the first step toward targeting.`,
    );
    add(
      `Under ${f}, a ${r} selects segments only after checking measurable, profitable, accessible, and durable criteria.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} requires all four criteria before a ${r} targets a segment.`,
    );
    add(
      `Under ${f}, mass marketing offers one identical product promoted similarly to all customers.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} defines mass marketing as undifferentiated broad coverage.`,
    );
    add(
      `Under ${f}, segment marketing tailors products to one or more segments with strategic fit.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} links segment marketing to strategic fit.`,
    );
    add(
      `Under ${f}, niche marketing concentrates on a narrow subgroup that a ${r} can serve distinctively.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} associates niche marketing with narrow subgroup focus.`,
    );
    add(
      `Under ${f}, positioning creates an identity in the target market after segments are chosen.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} places positioning after targeting in the STP sequence.`,
    );
    add(
      `Under ${f}, economies of scale can lower unit cost when a ${r} produces a large identical output.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} ties scale economies to large identical production.`,
    );
    add(
      `Under ${f}, targeting evaluates attractiveness before a ${r} commits to a target market.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} requires attractiveness evaluation in targeting.`,
    );
    add(
      `Under ${f}, the marketing mix serves the target market as a step following targeting.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} applies the marketing mix after target selection.`,
    );
    add(
      `Under ${f}, geographic, demographic, psychographic, and behavioural variables may all inform segmentation.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} allows all four segmentation bases.`,
    );
  }

  if (pool.length < 300) throw new Error(`TRUE pool only ${pool.length}, need 300`);
  return pool;
}

function buildFalsePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup FALSE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const geo = [
    "an Austrian city and its surrounding commuter area",
    "a coastal region and neighbouring inland towns",
    "a capital district and peripheral suburbs",
    "a mountain province and valley municipalities",
    "a border county and adjacent cross-border shoppers",
    "a metropolitan core and satellite villages",
    "a northern province and southern retail catchment",
    "an urban postcode cluster and rural fringe",
    "a federal state capital and outlying districts",
    "a tourism zone and resident service area",
  ];
  const demo = [
    "adult men and women of all ages",
    "employed wage earners and retired pensioners",
    "self-employed professionals and salaried staff",
    "households grouped by declared income brackets",
    "buyers classified by completed education level",
    "parents with young children and empty-nest couples",
    "students and mid-career adults",
    "dual-income households and single earners",
    "first-time buyers and long-established residents",
    "urban renters and suburban owner-occupiers",
  ];
  const psycho = [
    "buyers unwilling to pay the full price of a brand-new device",
    "customers who value environmental reuse of second-hand goods",
    "users wanting hands-on help when starting equipment",
    "shoppers prioritising reliability over fashionable novelty",
    "clients seeking personalised service rather than self-service",
    "households with strong sustainability attitudes",
    "price-conscious buyers accepting older technology",
    "risk-averse customers preferring guided setup",
    "enthusiasts motivated by specialist taste and craft quality",
    "learners motivated by flexible study support",
  ];
  const behav = [
    "occasional users rather than intensive daily operators",
    "seasonal purchasers rather than year-round repeat buyers",
    "light users of software licences rather than power users",
    "infrequent maintainers rather than continuous heavy consumers",
    "trial buyers before occasional repeat purchase",
    "weekend-only recreational users",
    "single-purchase gift buyers rather than replenishment shoppers",
    "contract renewers rather than first-time adopters",
    "bulk-order institutional buyers versus single-unit shoppers",
    "loyalty-program members with predictable basket patterns",
  ];

  add(
    "Market segmentation requires every customer in a subgroup to be identical in all personal characteristics.",
    "Segmentation creates relatively homogeneous subgroups, not perfectly identical individuals.",
  );
  add(
    "Geographic segmentation classifies customers by income level and education rather than by location.",
    "Income and education are demographic variables; geographic segmentation uses location.",
  );
  add(
    "Demographic segmentation is defined by lifestyle attitudes and values rather than age or income.",
    "Attitudes and values belong to psychographic segmentation; demographics use age, income, and similar traits.",
  );
  add(
    "Psychographic segmentation is defined solely by postal district and city boundaries.",
    "Location defines geographic segmentation, not psychographic segmentation.",
  );
  add(
    "Behavioural segmentation ignores how customers buy or use products and focuses only on gender.",
    "Behavioural segmentation uses buying and usage patterns; gender is demographic.",
  );
  add(
    "A segment is measurable only when every member has been individually interviewed.",
    "Measurability requires estimable size and purchasing power, not interviewing every member.",
  );
  add(
    "A segment is profitable whenever it is large, even if serving it costs more than the revenue gained.",
    "Profitability requires worthwhile returns; size alone does not guarantee profit.",
  );
  add(
    "A segment is accessible if it is profitable, regardless of whether communication or distribution can reach it.",
    "Accessibility is separate from profitability and requires reachable channels.",
  );
  add(
    "A durable segment must never change over time in order to qualify for targeting.",
    "Durability means not changing too quickly, not permanent immutability.",
  );
  add(
    "Targeting means dividing the market into subgroups, while segmentation means choosing which subgroup to enter.",
    "Segmentation divides the market; targeting selects segment(s) to enter.",
  );
  add(
    "Positioning occurs before segmentation and targeting in the marketing strategy sequence.",
    "Segmentation and targeting precede positioning in the STP sequence.",
  );
  add(
    "Mass marketing offers different tailored products to each identified market segment.",
    "Mass marketing offers the same product broadly; tailored segment products are segment marketing.",
  );
  add(
    "Mass marketing promotes the same product differently to every segment with highly customised campaigns.",
    "Mass marketing promotes to all segments in almost the same way.",
  );
  add(
    "Economies of scale mean that every cost rises in direct proportion to output as production increases.",
    "Scale economies arise because some costs do not rise in direct proportion to output.",
  );
  add(
    "Economies of scale always raise cost per unit when total identical output increases.",
    "Increased identical output can reduce cost per unit by spreading shared costs.",
  );

  for (let i = 0; i < geo.length; i++) {
    const g = geo[i];
    const d = demo[i];
    const p = psycho[i];
    const b = behav[i];
    add(
      `Grouping buyers by ${d} alone is geographic segmentation because demographics describe place.`,
      `${d.charAt(0).toUpperCase() + d.slice(1)} are demographic, not geographic segmentation.`,
    );
    add(
      `Grouping buyers in ${g} is psychographic segmentation because location reflects personal values.`,
      `Buyers in ${g} illustrate geographic, not psychographic segmentation.`,
    );
    add(
      `Targeting ${p} is behavioural segmentation because attitudes are the same as purchase frequency.`,
      `${p.charAt(0).toUpperCase() + p.slice(1)} reflect psychographic, not purely behavioural segmentation.`,
    );
    add(
      `Distinguishing ${b} is demographic segmentation because usage is a social characteristic like age.`,
      `${b.charAt(0).toUpperCase() + b.slice(1)} illustrate behavioural, not demographic segmentation.`,
    );
    add(
      `A segment of ${g} is automatically profitable whenever it can be named on a map.`,
      `Naming ${g} does not make the segment profitable; costs and revenue still matter.`,
    );
    add(
      `A segment of ${d} is accessible whenever it is measurable, even if no channel reaches them.`,
      `Measurability does not guarantee accessible communication and distribution for ${d}.`,
    );
    add(
      `A segment of ${p} is durable only if preferences never shift, making short-term trends irrelevant.`,
      `Durability allows some change; it requires stability for planning, not zero change forever.`,
    );
    add(
      `Mass marketing to ${g} requires a different product formula for every neighbourhood street.`,
      `Mass marketing uses one product broadly, not a different formula for every street in ${g}.`,
    );
    add(
      `Niche marketing to ${p} means selling one identical product to the entire national market.`,
      `Niche marketing narrows focus; one identical national product is mass marketing.`,
    );
    add(
      `Segment marketing to ${d} means ignoring subgroup differences and promoting one undifferentiated offer.`,
      `Segment marketing tailors to ${d}; ignoring differences describes mass marketing.`,
    );
    add(
      `Positioning toward ${b} is unnecessary if the firm already completed geographic segmentation.`,
      `Positioning still creates identity for the chosen subgroup after segmentation and targeting.`,
    );
    add(
      `Targeting ${b} means listing every possible subgroup without evaluating attractiveness.`,
      `Targeting evaluates attractiveness before selecting ${b} or any subgroup.`,
    );
    add(
      `Economies of scale for a niche offer to ${p} are identical to those for undifferentiated mass production.`,
      `Niche focus on ${p} typically lacks the very large identical output that drives scale economies.`,
    );
    add(
      `A firm serving ${d} with strategic fit should spread resources evenly across every segment in the economy.`,
      `Strategic fit implies focus on chosen segments such as ${d}, not equal coverage of all segments.`,
    );
    add(
      `Producing a tiny customised batch for ${p} always yields lower unit cost than mass production of identical units.`,
      `Small customised batches for ${p} do not automatically enjoy mass-production scale economies.`,
    );
  }

  const massProducts = [
    "ballpoint pens",
    "bar soap",
    "laundry detergent",
    "toothpaste",
    "notebook paper",
    "shampoo",
    "dishwashing liquid",
    "pencils",
    "facial tissues",
    "deodorant",
  ];
  for (let i = 0; i < massProducts.length; i++) {
    const mp = massProducts[i];
    add(
      `${mp.charAt(0).toUpperCase() + mp.slice(1)} must always be niche marketed because only a few people use them.`,
      `Everyday ${mp} are widely used and commonly mass marketed.`,
    );
    add(
      `Mass marketing of ${mp} requires a separate bespoke formula for every demographic subgroup.`,
      `Mass marketing of ${mp} uses one standard product promoted broadly.`,
    );
    add(
      `Economies of scale for ${mp} arise only when each unit is handmade to individual customer specifications.`,
      `Scale economies for ${mp} come from large identical output, not individual handmaking.`,
    );
    add(
      `Producing a very small variety of ${mp} for a narrow club is the textbook example of mass marketing.`,
      `A narrow club variant of ${mp} illustrates niche marketing, not mass marketing.`,
    );
    add(
      `Uniform nationwide promotion of ${mp} proves the firm is using niche marketing within one segment.`,
      `Uniform nationwide ${mp} promotion indicates mass marketing.`,
    );
    add(
      `If ${mp} output rises, cost per unit must rise because all costs increase in direct proportion.`,
      `Some ${mp} costs do not rise proportionally, so unit cost can fall with higher output.`,
    );
    add(
      `Mass marketing of ${mp} is highly flexible when any single segment changes its preferences overnight.`,
      `Mass marketing of ${mp} can be inflexible when specific segments shift preferences.`,
    );
    add(
      `Segment marketing of ${mp} would still use one identical item for all buyers without differentiation.`,
      `Segment marketing would differentiate ${mp} offers for chosen subgroups.`,
    );
  }

  const segTypes = ["geographic", "demographic", "psychographic", "behavioural"];
  const criteria = [
    "measurable size and purchasing power",
    "commercial profitability",
    "accessible communication and distribution",
    "durability over a planning horizon",
  ];
  for (let i = 0; i < segTypes.length; i++) {
    const st = segTypes[i];
    const c1 = criteria[i];
    add(
      `${st.charAt(0).toUpperCase() + st.slice(1)} segmentation eliminates the need for targeting because division alone is sufficient.`,
      `Segmentation divides the market; targeting still selects segments to enter.`,
    );
    add(
      `A ${st} segment satisfies segmentation logic even when it lacks ${c1}, provided it is fashionable.`,
      `Fashionable interest does not replace ${c1} as a segmentation criterion.`,
    );
    add(
      `Mass marketing is the same as ${st} niche marketing because both sell products to customers.`,
      `Mass marketing ignores ${st} tailoring; niche marketing focuses narrowly.`,
    );
    add(
      `Positioning is completed before ${st} segmentation so that segments match an existing logo.`,
      `Segmentation and targeting precede positioning; logos do not replace STP order.`,
    );
    add(
      `Economies of scale require many different ${st} micro-products rather than one identical mass item.`,
      `Scale economies come from large identical output, not many ${st} micro-products.`,
    );
    add(
      `Targeting a ${st} segment means advertising to everyone in the market without selection.`,
      `Targeting selects specific segment(s), not undifferentiated everyone-in-market coverage.`,
    );
    add(
      `Niche marketing ignores ${st} detail and sells one product to the entire population.`,
      `Niche marketing uses detailed ${st} insight for a narrow subgroup.`,
    );
    add(
      `Segment marketing and mass marketing are identical for ${st} analysis because both merely involve selling goods.`,
      `Segment marketing differentiates by ${st} subgroups; mass marketing does not.`,
    );
  }

  const nicheTraits = [
    "limited funds for computer equipment",
    "no need for the latest model or program release",
    "a high need for ongoing technical support",
    "preference for refurbished rather than new equipment",
    "operation from a home office with few employees",
    "occasional rather than intensive software use",
    "willingness to accept older hardware if support is reliable",
    "priority on affordability over cutting-edge specifications",
    "requirement for setup assistance at purchase",
    "environmental preference for extending product life through reuse",
  ];
  const nicheBuyers = [
    "sole proprietors",
    "individual consumers",
    "small home offices",
    "micro-enterprises",
    "freelance consultants",
    "part-time home workers",
    "budget-conscious households",
    "community organisations with thin budgets",
    "start-up founders in shared workspaces",
    "retired learners using basic computing tasks",
  ];
  for (let i = 0; i < nicheTraits.length; i++) {
    const t = nicheTraits[i];
    const nb = nicheBuyers[i];
    add(
      `${nb.charAt(0).toUpperCase() + nb.slice(1)} with ${t} must be served through mass marketing of one undifferentiated national product.`,
      `${nb} with ${t} are a niche better served by focused offers, not pure mass marketing.`,
    );
    add(
      `Targeting ${nb} with ${t} is the same as segmentation and requires no evaluation of attractiveness.`,
      `Targeting ${nb} evaluates attractiveness; segmentation only divides the market.`,
    );
    add(
      `Positioning for ${nb} with ${t} is identical to targeting and therefore replaces the marketing mix.`,
      `Positioning creates identity; it does not replace targeting or the marketing mix.`,
    );
    add(
      `A mass-market manufacturer ignoring ${t} among ${nb} is practising niche marketing.`,
      `Ignoring specialised ${t} needs of ${nb} reflects mass marketing, not niche marketing.`,
    );
    add(
      `Economies of scale guarantee success for a tiny ${nb} niche with ${t} regardless of demand.`,
      `Scale economies do not guarantee niche success for ${nb} with ${t}.`,
    );
    add(
      `A ${nb} subgroup with ${t} is accessible even when no distribution or communication channel can reach them.`,
      `Accessibility requires reachable channels for ${nb} with ${t}.`,
    );
  }

  const extraFalse = [
    ["Segmentation and targeting are interchangeable terms for the same marketing activity.", "Segmentation divides the market; targeting selects segments to enter."],
    ["Positioning determines which segments exist before any market research is conducted.", "Segmentation identifies segments; positioning follows targeting."],
    ["Mass marketing is defined as offering different products to every segment.", "Mass marketing offers the same product broadly."],
    ["Niche marketing means ignoring subgroup differences and selling one product to all.", "Niche marketing focuses on narrow subgroups."],
    ["Segment marketing requires serving every segment in the market with equal advertising spend.", "Segment marketing focuses limited resources on one or more chosen segments."],
    ["A target market is any person who sees an advertisement, whether or not a strategy targets their needs.", "A target market is served with a strategy for specific needs and preferences."],
    ["The marketing mix is chosen before any target market is selected.", "Targeting precedes applying the marketing mix."],
    ["Measurable segments must have exact census-level precision for every individual.", "Measurability requires estimable size and purchasing power, not perfect census precision."],
    ["Profitable segments can be identified without considering revenue and cost.", "Profitability compares expected returns with the cost of serving the segment."],
    ["Accessible segments need only online presence and not distribution reach.", "Accessibility includes both communication and distribution channels."],
    ["Durable segments are those that change daily with fashion trends.", "Durability means relative stability, not daily change."],
    ["Economies of scale increase every cost proportionally with each extra unit produced.", "Some costs do not rise in direct proportion to output."],
    ["Mass marketing of soap is impossible because households differ in income.", "Soap is a textbook example of mass-marketed everyday product."],
    ["Pens and pencils are niche products unsuitable for mass marketing.", "Pens and pencils are commonly mass marketed."],
    ["Mass marketing flexibility is high when one formula must satisfy all segments.", "Mass marketing can be inflexible when segments diverge."],
    ["Niche marketing requires mass-production volume equal to a national detergent brand.", "Niche marketing focuses narrowly and often suits limited volume."],
    ["Small businesses typically choose mass marketing because they lack resources.", "Small businesses often choose niche marketing because they lack mass volume capacity."],
    ["Strategic fit is irrelevant in segment marketing because any segment should be served.", "Segment marketing focuses resources where strategic fit exists."],
    ["Positioning has no effect on the image customers hold of a product.", "Positioning creates image or identity in target minds."],
    ["Behavioural segmentation is based on city location and regional climate.", "Location is geographic; behaviour concerns buying and usage patterns."],
    ["Psychographic segmentation is defined by age and gender alone.", "Age and gender are demographic; psychographics cover attitudes and lifestyle."],
    ["Demographic segmentation measures weekend usage frequency of software.", "Usage frequency is behavioural; demographics use social traits like age and income."],
    ["Geographic segmentation sorts buyers by loyalty-program points earned.", "Loyalty points reflect behaviour, not geography."],
    ["Targeting selects all segments simultaneously without prioritisation.", "Targeting evaluates attractiveness and selects segment(s) to enter."],
    ["A market leader in a niche must be the largest firm in the entire economy.", "A niche leader can be small yet dominant within its niche."],
    ["Increased identical output always raises average cost per unit.", "Higher identical output can lower average cost per unit through shared costs."],
    ["Mass promotion to all segments in almost the same way is evidence of segment marketing.", "Nearly identical promotion to all segments indicates mass marketing."],
    ["Different products for different segments indicate mass marketing.", "Different products for segments indicate segment marketing."],
    ["More segmentation than broad segment coverage characterises mass marketing.", "More segmentation characterises niche marketing, not mass marketing."],
    ["Selecting a subgroup to enter is segmentation, not targeting.", "Selecting segment(s) to enter is targeting."],
  ];
  for (const [s, e] of extraFalse) add(s, e);

  const fillers = [
    "introductory segmentation theory",
    "standard STP terminology",
    "the textbook targeting framework",
    "basic mass versus niche theory",
    "foundational positioning theory",
    "elementary market division concepts",
    "core segmentation criteria",
    "primary targeting vocabulary",
    "initial positioning concepts",
    "fundamental scale-economy theory",
  ];
  const roles = [
    "marketing planner",
    "segment analyst",
    "niche retailer",
    "mass-market manufacturer",
    "category manager",
    "small-business owner",
    "distribution manager",
    "brand strategist",
    "market researcher",
    "product manager",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, segmentation and targeting are the same step performed by a ${r}.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} distinguishes segmentation from targeting.`,
    );
    add(
      `Under ${f}, a ${r} may ignore measurable, profitable, accessible, and durable tests when picking segments.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} requires the four criteria for viable segments.`,
    );
    add(
      `Under ${f}, mass marketing means different products for every segment.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} defines mass marketing as one product for all.`,
    );
    add(
      `Under ${f}, niche marketing sells one undifferentiated product to the entire population.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} defines niche marketing as narrow subgroup focus.`,
    );
    add(
      `Under ${f}, positioning occurs before segmentation when a ${r} designs a logo.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} places positioning after targeting.`,
    );
    add(
      `Under ${f}, economies of scale mean all costs rise proportionally with output.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} recognises some non-proportional costs at scale.`,
    );
    add(
      `Under ${f}, targeting requires no evaluation of segment attractiveness by a ${r}.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} requires attractiveness evaluation in targeting.`,
    );
    add(
      `Under ${f}, the marketing mix is chosen before any target market exists.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} applies the marketing mix after targeting.`,
    );
    add(
      `Under ${f}, geographic variables measure attitudes and values exclusively.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} treats geography as location-based segmentation.`,
    );
    add(
      `Under ${f}, a ${r} practising mass marketing tailors a unique product to every niche.`,
      `Mass marketing uses one broad offer; tailoring to every niche is not mass marketing.`,
    );
  }

  if (pool.length < 200) throw new Error(`FALSE pool only ${pool.length}, need 200`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE");

const cases = buildCases({
  subsection: "5.6",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
