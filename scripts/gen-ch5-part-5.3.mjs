/**
 * Generate scripts/ch5-part-5.3.json — 100 cases for subsection 5.3.
 * Product orientation vs market orientation, CRM, personal data sensitivity.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"))["5.3"];
const OUT = "scripts/ch5-part-5.3.json";

const SCENE = [
  "Consider a consumer electronics manufacturer that engineers advanced specifications first and only later designs promotional campaigns around those technical features. Evaluate the following economic assertions:",
  "Consider a regional supermarket chain that analyses household shopping patterns before adjusting product ranges and weekly promotional offers. Evaluate the following economic assertions:",
  "Consider a neighbourhood bakery that refines recipes and packaging before testing whether local customers actually prefer sweeter or healthier alternatives. Evaluate the following economic assertions:",
  "Consider a fashion retailer that surveys changing style preferences each season before commissioning new garment lines from suppliers. Evaluate the following economic assertions:",
  "Consider a software firm that stores customer account histories to email personalised upgrade suggestions and loyalty coupons. Evaluate the following economic assertions:",
  "Consider a hotel group that registers guest preferences through loyalty cards in order to tailor room offers and repeat-stay discounts. Evaluate the following economic assertions:",
  "Consider a dental practice that emails appointment reminders and oral-care product information to patients who joined its membership scheme. Evaluate the following economic assertions:",
  "Consider a furniture workshop that invests in craftsmanship and material quality before researching whether buyers want modular or traditional designs. Evaluate the following economic assertions:",
  "Consider an online grocer that tracks purchase histories so it can recommend items aligned with each shopper's dietary preferences. Evaluate the following economic assertions:",
  "Consider a fitness studio that offers members discounted classes after recording attendance patterns through personal accounts on its booking platform. Evaluate the following economic assertions:",
  "Consider a catering business that prioritises recipe refinement and portion consistency before surveying corporate clients about menu preferences. Evaluate the following economic assertions:",
  "Consider a bookshop that analyses reading-category sales data before deciding which new titles to stock for the coming quarter. Evaluate the following economic assertions:",
  "Consider a vehicle repair garage that emails service reminders and seasonal maintenance coupons to motorists registered on its customer database. Evaluate the following economic assertions:",
  "Consider a cosmetics producer that emphasises laboratory formulation and product features before studying shifting consumer beauty trends. Evaluate the following economic assertions:",
  "Consider a travel agency that records family holiday preferences so it can propose tailored package deals when school vacations approach. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how product-oriented and market-oriented businesses differ in where they place initial emphasis when developing offerings. Evaluate the following economic assertions:",
  "Analyze the contrast between focusing on product features and focusing on customers' needs and wants in marketing orientation. Evaluate the following economic assertions:",
  "Review why many businesses have moved from product orientation towards a market-oriented approach over recent decades. Evaluate the following economic assertions:",
  "Analyze how a product-oriented business mainly relies on the quality of product features to succeed in the market. Evaluate the following economic assertions:",
  "Review the market-oriented advantage of anticipating changing customer needs and responding earlier than product-oriented rivals. Evaluate the following economic assertions:",
  "Analyze how product-oriented and market-oriented firms may pursue identical marketing objectives yet follow different strategic paths. Evaluate the following economic assertions:",
  "Review Figure 10 comparing product orientation with market orientation on focus, selling logic, and customer emphasis. Evaluate the following economic assertions:",
  "Analyze why suitability of product versus market orientation depends on the product itself and the number of competitors. Evaluate the following economic assertions:",
  "Review the warning that markets and customer expectations should not be neglected even when product quality is strong. Evaluate the following economic assertions:",
  "Analyze customer relationship management as a practice aimed at creating long-term relationships with customers. Evaluate the following economic assertions:",
  "Review how CRM systems retain customer data to mail or email newsletters, coupons, and product information. Evaluate the following economic assertions:",
  "Analyze why sensitive use of personal customer data has become indispensable in modern marketing practice. Evaluate the following economic assertions:",
  "Review how personal accounts and loyalty cards lead customers to give up anonymity willingly for discounts and special offers. Evaluate the following economic assertions:",
  "Analyze how businesses collect data on customers and buying behaviours to tailor offers to personal preferences. Evaluate the following economic assertions:",
  "Review the product-oriented view that a good product sells itself through its features rather than through market adaptation. Evaluate the following economic assertions:",
  "Analyze the market-oriented principle of producing what customers need and want rather than what engineers prefer. Evaluate the following economic assertions:",
  "Review how CRM encourages customers to return and buy again through ongoing communication and targeted incentives. Evaluate the following economic assertions:",
  "Analyze the role of customer focus when a business tailors newsletters and coupons using stored personal data. Evaluate the following economic assertions:",
  "Review why personal data sensitivity matters when firms build detailed profiles from loyalty schemes and online accounts. Evaluate the following economic assertions:",
  "Analyze how market-oriented firms analyse customers' needs and wants before tailoring products to fulfil requirements. Evaluate the following economic assertions:",
  "Review how product-oriented businesses think about selling only after the product and its specifications have been defined. Evaluate the following economic assertions:",
  "Analyze the strategic timing advantage market-oriented competitors gain when customer preferences begin to shift. Evaluate the following economic assertions:",
  "Review how identical marketing objectives can coexist with different orientation choices across competing businesses. Evaluate the following economic assertions:",
  "Analyze the dependence of orientation choice on competitive intensity and characteristics of the product category. Evaluate the following economic assertions:",
  "Review CRM data uses including mailing product information that encourages repeat purchases from known customers. Evaluate the following economic assertions:",
  "Analyze why customers often accept reduced anonymity when loyalty cards deliver tangible price benefits. Evaluate the following economic assertions:",
  "Review the collection of buying-behaviour records as a foundation for personalised marketing offers. Evaluate the following economic assertions:",
  "Analyze product orientation emphasis on production and product features as distinct from customer needs focus. Evaluate the following economic assertions:",
  "Review market orientation emphasis on customers' needs and wants when deciding what to produce and promote. Evaluate the following economic assertions:",
  "Analyze how sensitive handling of personal data supports sustainable CRM rather than undermining customer trust. Evaluate the following economic assertions:",
  "Review the long-term relationship goal that distinguishes CRM from one-off transactional selling. Evaluate the following economic assertions:",
  "Analyze how tailored offers reflect stored knowledge of individual customer preferences and past purchases. Evaluate the following economic assertions:",
  "Review why neglecting market changes undermines even firms with historically strong product specifications. Evaluate the following economic assertions:",
  "Analyze the product-oriented selling logic that quality features will attract buyers without deep market research. Evaluate the following economic assertions:",
  "Review the market-oriented response pattern when competitors still centre decisions on internal product specifications. Evaluate the following economic assertions:",
  "Analyze CRM communication channels such as email newsletters that keep customers informed about relevant products. Evaluate the following economic assertions:",
  "Review personal data topics linked to loyalty programmes that trade privacy for discounts and special offers. Evaluate the following economic assertions:",
  "Analyze how businesses balance customer data collection with the need for sensitive use of personal information. Evaluate the following economic assertions:",
  "Review orientation differences when both approaches may target customer satisfaction or market share objectives. Evaluate the following economic assertions:",
  "Analyze why market-oriented businesses tailor products after analysing requirements rather than before contact with buyers. Evaluate the following economic assertions:",
  "Review product-oriented reliance on feature quality as the primary route to market success. Evaluate the following economic assertions:",
  "Analyze early response to changing needs and wants as a competitive edge for market-oriented firms. Evaluate the following economic assertions:",
  "Review the contextual factors—product type and competitor numbers—that shape orientation suitability. Evaluate the following economic assertions:",
  "Analyze CRM retention tactics including coupons designed to bring customers back for additional purchases. Evaluate the following economic assertions:",
  "Review willing surrender of anonymity through registered accounts that unlock personalised pricing benefits. Evaluate the following economic assertions:",
  "Analyze buying-behaviour databases as inputs to customised product information and promotional targeting. Evaluate the following economic assertions:",
  "Review the shift from product-first thinking towards customer-needs analysis in contemporary marketing practice. Evaluate the following economic assertions:",
  "Analyze why customer expectations remain relevant even when internal teams favour specification-led development. Evaluate the following economic assertions:",
  "Review CRM's role in sustaining repeat business through informed contact rather than isolated transactions. Evaluate the following economic assertions:",
  "Analyze sensitive personal data handling as a prerequisite for ethical CRM in loyalty-driven businesses. Evaluate the following economic assertions:",
  "Review product versus market orientation as competing starting points within the same broader marketing framework. Evaluate the following economic assertions:",
  "Analyze how stored customer records enable mailing or emailing tailored product information at scale. Evaluate the following economic assertions:",
  "Review loyalty mechanisms through which customers exchange identifiable data for discounts and preferential offers. Evaluate the following economic assertions:",
  "Analyze tailoring promotional content to personal preferences after collecting behavioural purchase data. Evaluate the following economic assertions:",
  "Review the product-oriented sequence of defining specifications before considering how the offering will be sold. Evaluate the following economic assertions:",
  "Analyze market-oriented sequencing that places customer needs analysis ahead of final product design choices. Evaluate the following economic assertions:",
  "Review competitive dynamics when product-oriented rivals respond later to shifts already anticipated by market-oriented firms. Evaluate the following economic assertions:",
  "Analyze identical objective sets—such as profitability targets—across firms with different orientation starting points. Evaluate the following economic assertions:",
  "Review orientation suitability judgments tied to product characteristics and competitive market structure. Evaluate the following economic assertions:",
  "Analyze CRM long-term relationship aims beyond immediate single-sale customer interactions. Evaluate the following economic assertions:",
  "Review personal data sensitivity as an indispensable concern when CRM systems store identifiable customer information. Evaluate the following economic assertions:",
  "Analyze customer willingness to register personal accounts when loyalty benefits offset reduced anonymity. Evaluate the following economic assertions:",
  "Review behavioural data collection practices that support customised offers aligned with prior purchasing patterns. Evaluate the following economic assertions:",
  "Analyze product orientation focus on production capabilities and internal feature development priorities. Evaluate the following economic assertions:",
  "Review market orientation focus on external customer requirements when shaping product and service bundles. Evaluate the following economic assertions:",
  "Analyze the marketing assertion that markets and customer expectations should not be neglected by any orientation. Evaluate the following economic assertions:",
  "Review CRM-enabled repeat purchase encouragement through ongoing newsletters and targeted coupon distribution. Evaluate the following economic assertions:",
  "Analyze sensitive use requirements for personal data gathered via loyalty cards and online customer accounts. Evaluate the following economic assertions:",
  "Review tailored offer logic when businesses match promotions to recorded individual customer preferences. Evaluate the following economic assertions:",
  "Analyze product-oriented belief that superior features reduce the need for extensive customer adaptation. Evaluate the following economic assertions:",
  "Review market-oriented practice of adjusting offerings when evidence shows evolving customer needs and wants. Evaluate the following economic assertions:",
  "Analyze CRM data retention purposes linked to mailing, emailing, and informing customers about relevant products. Evaluate the following economic assertions:",
  "Review personal data trade-offs where customers accept identification for discounts and special promotional access. Evaluate the following economic assertions:",
  "Analyze buying-behaviour records as a basis for personalised marketing communication and offer design. Evaluate the following economic assertions:",
  "Review decades-long business movement from specification-led product orientation towards needs-led market orientation. Evaluate the following economic assertions:",
  "Analyze why orientation choice remains contingent rather than universally prescribing one approach for every firm. Evaluate the following economic assertions:",
  "Review CRM relationship-building contrasted with short-term selling that ignores stored customer histories. Evaluate the following economic assertions:",
  "Analyze indispensable sensitive handling of personal data within modern customer relationship programmes. Evaluate the following economic assertions:",
  "Review product and market orientation side by side on focus, selling philosophy, and customer engagement. Evaluate the following economic assertions:",
  "Analyze how market-oriented competitors gain timing advantages when customer preferences start to change. Evaluate the following economic assertions:",
  "Review loyalty-card programmes as voluntary exchanges of anonymity for tangible customer price advantages. Evaluate the following economic assertions:",
  "Analyze CRM-supported tailoring of offers using collected data on customers and their buying behaviours. Evaluate the following economic assertions:",
  "Review product-oriented sequencing that prioritises internal specification work before promotional planning begins. Evaluate the following economic assertions:",
  "Analyze market-oriented workflows that begin with needs analysis and end with customised product fulfilment. Evaluate the following economic assertions:",
  "Review the principle that strong products alone cannot justify ignoring evolving market and customer expectations. Evaluate the following economic assertions:",
  "Analyze long-term CRM relationship goals supported by newsletters, coupons, and informed product communication. Evaluate the following economic assertions:",
  "Review personal data sensitivity obligations when businesses maintain detailed identifiable customer profiles. Evaluate the following economic assertions:",
];

const TITLES = [
  "Product Orientation Versus Market Orientation",
  "Focus on Features or Customer Needs",
  "Identical Objectives With Different Orientations",
  "Market-Oriented Anticipation of Change",
  "Product Quality as Primary Market Strategy",
  "Neglecting Customer Expectations",
  "CRM Long-Term Relationship Goals",
  "Sensitive Use of Personal Data",
  "Loyalty Cards and Voluntary Anonymity",
  "Tailoring Offers to Customer Preferences",
  "Product-First Specification Development",
  "Needs Analysis Before Product Design",
  "Competitive Timing in Market Orientation",
  "Orientation Suitability and Product Type",
  "CRM Newsletters and Repeat Purchases",
  "Buying Behaviour Data Collection",
  "Product Orientation Selling Logic",
  "Market Orientation Production Principle",
  "Shifting From Product to Market Focus",
  "Customer Focus in CRM Practice",
  "Personal Data Trade-Offs in Loyalty Schemes",
  "Feature Quality Versus Market Adaptation",
  "Early Response to Changing Wants",
  "Competitor Count and Orientation Choice",
  "CRM Coupons and Customer Retention",
  "Registered Accounts and Special Offers",
  "Behavioural Data for Personalised Marketing",
  "Production Focus in Product Orientation",
  "Customer Needs Focus in Market Orientation",
  "Indispensable Personal Data Sensitivity",
  "Long-Term CRM Versus One-Off Sales",
  "Tailored Product Information by Email",
  "Market Changes Despite Strong Specifications",
  "Specification-Led Development Traps",
  "Market-Oriented Response Advantages",
  "CRM Communication and Repeat Visits",
  "Privacy Exchange for Discount Benefits",
  "Balancing Data Collection and Sensitivity",
  "Shared Objectives Across Orientations",
  "Needs-Led Product Tailoring",
  "Feature Reliance in Product Orientation",
  "Anticipating Shifts in Customer Wants",
  "Contextual Orientation Suitability",
  "Coupon-Driven CRM Retention",
  "Willing Anonymity Surrender via Loyalty",
  "Purchase History and Custom Offers",
  "Contemporary Market Orientation Shift",
  "Persistent Customer Expectation Relevance",
  "CRM Sustaining Repeat Business",
  "Ethical Handling of CRM Personal Data",
  "Orientation Starting Points in Marketing",
  "Mailing Tailored Product Information",
  "Loyalty Mechanisms and Identifiable Data",
  "Personalised Promotions From Behaviour Data",
  "Specifications Before Selling Plans",
  "Customer Analysis Before Design Choices",
  "Later Response by Product-Oriented Rivals",
  "Profitability Targets Across Orientations",
  "Product and Competitor Orientation Factors",
  "CRM Beyond Immediate Transactions",
  "Personal Data in Identifiable CRM Systems",
  "Account Registration for Loyalty Benefits",
  "Behavioural Records for Offer Design",
  "Internal Feature Priorities in Production",
  "External Requirements in Market Orientation",
  "Universal Market Expectation Attention",
  "Newsletter-Led Repeat Purchase Encouragement",
  "Sensitive Data Rules for Loyalty Programmes",
  "Preference-Matched Promotional Targeting",
  "Feature Superiority Beliefs in Product Orientation",
  "Evolving Needs and Offer Adjustment",
  "CRM Data for Customer Communication",
  "Identification for Discount Access",
  "Buying Patterns in Marketing Tailoring",
  "Decades of Orientation Movement",
  "Contingent Rather Than Universal Orientation",
  "CRM Contrast With Short-Term Selling",
  "Sensitive Personal Data in CRM Programmes",
  "Side-by-Side Orientation Comparison",
  "Timing Edge for Market-Oriented Firms",
  "Loyalty Price Advantages and Privacy",
  "CRM Tailoring From Behavioural Data",
  "Specification Work Before Promotion",
  "Needs-Led Workflow Sequencing",
  "Strong Products and Market Attention",
  "CRM Newsletters Coupons and Communication",
  "Detailed Profiles and Data Sensitivity",
  "Product Orientation Misclassification Traps",
  "Market Orientation Misclassification Traps",
  "CRM Purpose and Data Retention",
  "Loyalty Programme Privacy Trade-Offs",
  "Orientation Focus Distinctions Review",
  "Customer Wants and Competitive Response",
  "Repeat Purchase CRM Mechanics",
  "Personal Data Indispensable Sensitivity",
  "Tailored Offers From Stored Records",
  "Product-Led Versus Needs-Led Sequencing",
  "Market Expectations Neglect Warning",
  "CRM Long-Term Relationship Framework",
  "Sensitive CRM Data Handling Standards",
  "Orientation Choice and Competitive Structure",
  "Integrated Product-Market Orientation Review",
  "Comprehensive CRM and Orientation Synthesis",
];

const sceneIndices = [
  3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59,
  63, 67, 71, 75, 79, 83, 87, 91, 95, 99,
];

function dedupePairs(pairs) {
  const seen = new Set();
  const out = [];
  for (const [s, e] of pairs) {
    const norm = s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    if (seen.has(norm)) continue;
    seen.add(norm);
    out.push([s, e]);
  }
  return out;
}

function buildTruePool() {
  const pairs = [
    ["A product-oriented business focuses on the product and its specifications first and later thinks about how to sell it.", "Product orientation places product specifications ahead of selling plans."],
    ["A market-oriented business will first analyse customers' needs and wants and then tailor products to fulfil these requirements.", "Market orientation begins with needs analysis before product tailoring."],
    ["Product-oriented and market-oriented businesses may pursue identical marketing objectives even when their strategic starting points differ.", "Orientation differs in process, not necessarily in stated objectives such as market share."],
    ["A product-oriented business mainly relies on the quality of the features of the product to be successful in the market.", "Product orientation trusts feature quality as the primary route to market success."],
    ["The market-oriented approach has the advantage of anticipating changing needs and wants and responding to market changes earlier than product-oriented competitors.", "Market-oriented firms can react to shifts before specification-led rivals adjust."],
    ["Which orientation is more suitable for a business largely depends on the product itself and the number of competitors in the market.", "Product characteristics and competitive intensity shape orientation suitability."],
    ["Markets and the expectations of customers should not be neglected even when a firm emphasises internal product development.", "Customer and market expectations remain relevant regardless of orientation emphasis."],
    ["Customer relationship management aims at creating a long-term relationship with customers rather than treating each sale as isolated.", "CRM prioritises sustained relationships over one-off transactions."],
    ["CRM systems keep customer data so the business can mail or email newsletters, coupons, and product information to encourage repeat purchases.", "Stored data supports ongoing communication that brings customers back."],
    ["Sensitive use of personal customer data is indispensable when businesses build detailed CRM profiles.", "Personal data must be handled carefully within CRM programmes."],
    ["By using personal accounts and loyalty cards, customers often give up their anonymity willingly in order to receive discounts and special offers.", "Loyalty benefits lead many customers to accept identifiable registration voluntarily."],
    ["Many businesses collect data on their customers and their buying behaviours so they can tailor offers to personal preferences.", "Behavioural data enables personalised promotional tailoring."],
    ["Product orientation emphasises focus on production and product features rather than on customers' needs and wants at the initial stage.", "Product orientation centres internal features and production before external needs analysis."],
    ["Market orientation emphasises focus on customers' needs and wants when deciding what to produce and promote.", "Market orientation places customer requirements at the centre of decisions."],
    ["Over recent decades many businesses have moved from a product-oriented approach towards a market-oriented approach.", "The chapter notes a broad shift towards market orientation over time."],
    ["A product-oriented business may believe that a good product sells itself through its features and quality.", "Product orientation often assumes superior features reduce heavy selling effort."],
    ["Market orientation aligns with producing what customers need and want rather than what internal teams prefer in isolation.", "Market-oriented firms produce to fulfil identified customer requirements."],
    ["CRM encourages customers to return and buy again through informed contact supported by stored personal records.", "Ongoing CRM communication supports repeat purchasing behaviour."],
    ["Personal data sensitivity has become a very important topic as businesses expand loyalty-driven marketing programmes.", "Growing CRM data use raises the importance of sensitive personal data handling."],
    ["Tailored offers reflect stored knowledge of individual customer preferences derived from purchase histories and account data.", "Personalisation follows from collected behavioural and preference records."],
    ["A market-oriented firm analyses requirements before tailoring products, whereas a product-oriented firm defines specifications before selling.", "The sequencing of analysis versus specification distinguishes the two orientations."],
    ["Identical profitability or market-share objectives can coexist with different orientation choices across competing firms.", "Objectives may match even when orientation processes diverge."],
    ["Product-oriented competitors may respond to market changes later than market-oriented rivals who anticipated shifting wants.", "Timing of response to change favours market-oriented businesses."],
    ["CRM newsletters and coupons sent by email use retained customer data to maintain contact between purchase occasions.", "Email communication uses stored data to sustain customer relationships."],
    ["Loyalty cards link identifiable customers to discounts, illustrating willing exchange of anonymity for tangible benefits.", "Registered loyalty participation trades privacy for price advantages."],
    ["Buying-behaviour records help businesses match promotional content to what individual customers are likely to value.", "Past purchase patterns guide customised offer design."],
    ["Neglecting evolving customer expectations undermines success even when product specifications remain technically strong.", "Strong features alone do not remove the need to heed market expectations."],
    ["Market-oriented businesses tailor products after analysing needs, placing customer focus ahead of final specification choices.", "Needs analysis precedes tailoring in market orientation."],
    ["Product-oriented businesses think about selling only after the product and its specifications have been defined internally.", "Selling plans follow specification work in product orientation."],
    ["Sensitive handling of personal data supports sustainable CRM rather than eroding trust built through long-term relationships.", "Ethical data use underpins durable CRM relationships."],
    ["CRM aims at long-term relationships supported by mailing or emailing product information that encourages customers to return.", "Long-term CRM uses communication channels to drive repeat business."],
    ["Customers who register personal accounts often accept reduced anonymity because loyalty schemes deliver discounts and special offers.", "Tangible loyalty benefits motivate voluntary identifiable registration."],
    ["Businesses tailor offers to personal preferences after collecting data on customers and their buying behaviours.", "Behavioural databases enable preference-aligned promotions."],
    ["Suitability of product versus market orientation is contingent on product type and competitive conditions rather than fixed by rule.", "Orientation choice depends on context rather than universal prescription."],
    ["Product orientation centres production and feature development before external customer needs receive detailed attention.", "Internal production and features lead in product-oriented planning."],
    ["Market orientation places customers' needs and wants at the forefront when shaping what the business will offer.", "Customer needs and wants guide market-oriented offering design."],
    ["CRM retention tactics include coupons designed to bring registered customers back for additional purchases.", "Coupon distribution through CRM channels encourages repeat visits."],
    ["Personal data sensitivity matters because CRM systems retain identifiable information for ongoing marketing contact.", "Identifiable CRM records require careful sensitive use of personal data."],
    ["Market-oriented firms gain an edge by responding earlier when customer needs and wants begin to change.", "Early response to shifting wants is a market-orientation advantage."],
    ["Product-oriented firms mainly bet on feature quality rather than on continuous market adaptation for success.", "Feature quality is the primary bet in product orientation."],
    ["Registered loyalty programmes illustrate how customers willingly surrender anonymity to obtain price benefits.", "Loyalty registration is a voluntary privacy trade-off for discounts."],
    ["Stored customer histories enable businesses to email tailored product information aligned with prior interests.", "Email tailoring uses recorded purchase and preference histories."],
    ["Both orientations may target customer satisfaction, yet product orientation still prioritises specifications before selling.", "Shared satisfaction goals do not erase orientation sequencing differences."],
    ["Market and customer expectations should not be neglected because competitive markets punish firms that ignore shifting wants.", "Ignoring expectations risks market failure even with strong products."],
    ["CRM long-term relationship goals distinguish ongoing contact from single-transaction selling approaches.", "CRM contrasts relationship building with one-off sales focus."],
    ["Collecting buying-behaviour data supports tailoring offers that reflect individual customer preferences.", "Behavioural collection enables preference-based offer customisation."],
    ["Product-oriented selling logic assumes that superior features attract buyers with limited prior market research.", "Good-product logic reduces reliance on upfront needs analysis."],
    ["Market-oriented workflows begin with understanding requirements and end with products shaped to fulfil them.", "Market orientation sequences needs study before product tailoring."],
    ["Sensitive use of personal data is indispensable when loyalty cards and accounts identify individual customers.", "Identifiable loyalty data demands sensitive handling practices."],
    ["Anticipating changing needs gives market-oriented businesses a timing advantage over specification-led rivals.", "Anticipation supports earlier adjustment than product-oriented response."],
    ["Many firms shifted orientation emphasis as competitive markets made customer adaptation more critical over time.", "Competitive pressure contributed to broader movement towards market orientation."],
  ];

  const poFocus = [
    "product and its specifications",
    "quality of the features of the product",
    "internal production capabilities",
    "technical specifications of the offering",
    "laboratory formulation and feature set",
    "craftsmanship embedded in the product",
    "engineering performance metrics",
    "material quality and build standards",
    "product design conceived internally",
    "feature improvements developed in-house",
  ];

  const moFocus = [
    "customers' needs and wants",
    "shifting customer preferences",
    "recorded purchase histories",
    "identified market requirements",
    "evolving buyer expectations",
    "segment-specific customer demands",
    "feedback gathered from target buyers",
    "preferences expressed through loyalty accounts",
    "requirements revealed by market research",
    "wants signalled through repeat purchase patterns",
  ];

  const products = [
    "consumer electronics",
    "household groceries",
    "seasonal fashion garments",
    "business software packages",
    "hotel accommodation services",
    "dental care services",
    "home furniture ranges",
    "online grocery deliveries",
    "fitness class memberships",
    "corporate catering menus",
    "bookshop inventory selections",
    "vehicle maintenance services",
    "cosmetic beauty products",
    "family holiday packages",
    "artisan bakery products",
  ];

  const crmChannels = [
    "email newsletters",
    "posted coupon mailings",
    "loyalty-card discount alerts",
    "personalised product-information emails",
    "registered-account promotional messages",
    "repeat-stay offer notifications",
    "membership-scheme communications",
    "targeted coupon distributions",
    "seasonal reminder mailings",
    "tailored upgrade suggestions",
  ];

  const crmGoals = [
    "encourage customers to return and buy again",
    "maintain contact between purchase occasions",
    "strengthen long-term customer relationships",
    "support repeat purchasing behaviour",
    "keep customers informed about relevant products",
    "reward loyal buyers with ongoing incentives",
    "sustain engagement beyond single transactions",
    "build durable commercial relationships with buyers",
    "prompt additional visits through informed contact",
    "foster continuity rather than one-off sales",
  ];

  let i = 0;
  for (const focus of poFocus) {
    pairs.push([
      `In product orientation, managers emphasise the ${focus} before they develop detailed plans for selling the finished offering.`,
      `Product orientation places ${focus} ahead of selling strategy in the development sequence.`,
    ]);
    pairs.push([
      `A product-oriented team may refine the ${focus} extensively before surveying whether buyers value those priorities.`,
      `Specification-led work on ${focus} precedes market validation in product orientation.`,
    ]);
    i++;
    pairs.push([
      `Product-oriented planning treats ${focus} as the primary basis for believing the offering will succeed commercially.`,
      `Commercial confidence in product orientation rests heavily on ${focus}.`,
    ]);
  }

  for (const focus of moFocus) {
    pairs.push([
      `Market-oriented planning begins by studying ${focus} before final product specifications are locked in.`,
      `Market orientation starts with analysis of ${focus} prior to specification decisions.`,
    ]);
    pairs.push([
      `A market-oriented business tailors its offering after examining ${focus} rather than assuming internal preferences suffice.`,
      `Tailoring follows examination of ${focus} in market-oriented development.`,
    ]);
    pairs.push([
      `Market-oriented managers adjust promotions when ${focus} indicate that prior assumptions no longer hold.`,
      `Shifts in ${focus} trigger promotional adjustment under market orientation.`,
    ]);
  }

  const industries = [
    "hospitality",
    "retail fashion",
    "business software",
    "consumer electronics",
    "food service",
    "financial services",
    "healthcare supplies",
    "home improvement",
    "automotive after-sales",
    "education technology",
    "leisure travel",
    "specialty cosmetics",
  ];

  for (let pi = 0; pi < products.length; pi++) {
    const product = products[pi];
    const sector = industries[pi % industries.length];
    pairs.push([
      `For ${product} supplied in ${sector} markets, orientation fit depends on the offering itself and how many rivals compete in that category.`,
      `Orientation suitability for ${product} in ${sector} hinges on product traits and competitor numbers.`,
    ]);
    pairs.push([
      `A ${sector} supplier of ${product} may share profitability objectives with rivals yet follow different orientation paths.`,
      `Identical objectives can coexist with different orientations in ${sector} ${product} markets.`,
    ]);
    pairs.push([
      `Even when ${product} quality is high in ${sector}, markets and customer expectations should not be neglected by the supplier.`,
      `Strong ${product} features in ${sector} do not justify ignoring market and customer expectations.`,
    ]);
  }

  for (const channel of crmChannels) {
    for (const goal of crmGoals) {
      if (pairs.length >= 320) break;
      pairs.push([
        `CRM programmes may use ${channel} to ${goal} among customers whose data the business retains responsibly.`,
        `${channel} within CRM can ${goal} when personal data is used sensitively.`,
      ]);
    }
  }

  const orientationScenarios = [
    ["a software firm releasing features only after internal testing", "market research showed declining demand for the planned upgrade"],
    ["a bakery emphasising recipe quality before surveying breakfast preferences", "customer feedback revealed preference for smaller portion sizes"],
    ["a clothing retailer stocking designs buyers did not request", "trend analysis indicated shifting colour preferences among shoppers"],
    ["an electronics supplier prioritising engineering specifications", "client surveys highlighted compatibility concerns with existing systems"],
    ["a hotel chain renovating rooms before guest satisfaction reviews", "guest feedback identified noise reduction as the top priority"],
    ["a cosmetics brand launching fragrances without focus-group input", "consumer panels favoured lighter scents than the laboratory prototype"],
    ["a furniture maker refining wood finishes internally", "showroom visitors requested modular storage configurations"],
    ["a streaming service adding channels engineers preferred", "viewing data showed stronger interest in documentary content"],
    ["a car-hire firm expanding fleet specifications", "corporate clients requested more fuel-efficient compact vehicles"],
    ["a training provider designing courses around instructor expertise", "employer interviews showed demand for shorter certification modules"],
    ["a beverage company reformulating packaging before taste tests", "blind tastings favoured a less sweet recipe than planned"],
    ["a garden-centre chain ordering stock from supplier catalogues", "local buyers asked for more drought-resistant plant varieties"],
  ];
  for (let si = 0; si < orientationScenarios.length; si++) {
    const [productFocus, marketSignal] = orientationScenarios[si];
    const ind = industries[si % industries.length];
    pairs.push([
      `In ${ind} markets, a business that prioritises ${productFocus} illustrates product orientation starting from internal specifications.`,
      `Product orientation in ${ind} begins with internal product focus rather than leading with ${marketSignal}.`,
    ]);
    pairs.push([
      `When ${marketSignal} in ${ind}, a market-oriented rival may adapt its offer sooner than a specification-led competitor.`,
      `Market orientation in ${ind} supports earlier adaptation when customer signals such as ${marketSignal} emerge.`,
    ]);
    pairs.push([
      `CRM data in ${ind} showing repeat purchases can help a market-oriented firm tailor follow-up offers after ${marketSignal}.`,
      `CRM in ${ind} supports tailored follow-up when firms respond to signals like ${marketSignal}.`,
    ]);
    pairs.push([
      `Customers in ${ind} who register for loyalty benefits may accept reduced anonymity in exchange for personalised offers after ${marketSignal}.`,
      `Loyalty registration in ${ind} can trade some anonymity for tailored communication following market signals.`,
    ]);
  }

  const pool = dedupePairs(pairs);
  if (pool.length < 300) {
    throw new Error(`TRUE pool too small: ${pool.length}`);
  }
  return pool;
}

function buildFalsePool() {
  const pairs = [
    ["A product-oriented business first analyses customers' needs and wants before defining product specifications.", "Product orientation focuses on the product first; needs analysis leads in market orientation."],
    ["Market-oriented businesses define specifications first and only later consider whether buyers want those features.", "Market orientation analyses needs before tailoring products, not after locking specifications."],
    ["Product-oriented and market-oriented businesses must always pursue completely different marketing objectives.", "The chapter states their objectives may even be identical despite different orientation processes."],
    ["A product-oriented business ignores product quality and relies solely on aggressive advertising without strong features.", "Product orientation mainly relies on feature quality rather than abandoning it for advertising alone."],
    ["Market-oriented businesses cannot anticipate changing needs because they focus only on current specifications.", "Market orientation specifically anticipates and responds to changing needs earlier than product-oriented rivals."],
    ["Orientation suitability is identical for every product regardless of competitive conditions or product characteristics.", "Suitability depends on the product itself and the number of competitors."],
    ["Strong product specifications allow a business to ignore markets and customer expectations entirely.", "Markets and customer expectations should not be neglected even with strong products."],
    ["Customer relationship management aims only at single-transaction sales without building long-term customer relationships.", "CRM aims at creating long-term relationships rather than isolated transactions."],
    ["CRM systems delete customer data immediately after each purchase so no newsletters or coupons can be sent later.", "CRM retains data to mail or email newsletters, coupons, and product information for repeat business."],
    ["Sensitive use of personal data is optional and unnecessary when businesses operate loyalty programmes.", "Sensitive use of personal data is described as indispensable in modern CRM practice."],
    ["Loyalty cards and personal accounts always preserve full customer anonymity without any identifiable records.", "Customers often give up anonymity willingly through loyalty cards and accounts for discounts."],
    ["Businesses cannot tailor offers to personal preferences because collecting buying-behaviour data is prohibited in CRM.", "Businesses collect behavioural data specifically to tailor offers to personal preferences."],
    ["Product orientation and market orientation differ only in advertising slogans rather than in development focus.", "Orientation differs in whether focus starts with product features or customers' needs and wants."],
    ["Market orientation means producing whatever engineers prefer without reference to customer requirements.", "Market orientation produces what customers need and want after analysing requirements."],
    ["CRM discourages repeat purchases by avoiding contact between one sale and the next.", "CRM uses ongoing contact to encourage customers to return and buy again."],
    ["Personal data sensitivity became irrelevant once loyalty programmes began offering discounts.", "Personal data sensitivity remains a very important and indispensable topic."],
    ["A market-oriented business believes a good product sells itself without studying customer needs.", "The good-product-sells-itself logic aligns with product orientation, not market orientation."],
    ["Product-oriented firms tailor products to fulfil requirements identified through upfront needs analysis.", "Product-oriented firms focus on specifications first; tailoring after needs analysis is market orientation."],
    ["Businesses have universally abandoned market orientation and returned entirely to product orientation.", "Many businesses moved towards market orientation over recent decades, not away from it."],
    ["CRM newsletters and coupons are unrelated to stored customer data and require no personal records.", "CRM keeps data specifically to mail or email newsletters, coupons, and product information."],
    ["Customers never willingly surrender anonymity because loyalty discounts are always worthless.", "Customers often give up anonymity willingly to receive discounts and special offers."],
    ["Buying-behaviour data is collected only for tax reporting and not for marketing tailoring.", "Behavioural data is collected to tailor offers to personal preferences."],
    ["Market-oriented competitors respond later to change because they wait for engineers to finish specifications.", "Market-oriented firms respond earlier; product-oriented rivals may adjust later."],
    ["Product orientation places customers' needs and wants ahead of production and product features at the initial stage.", "Product orientation focuses on production and product features before needs analysis."],
    ["Orientation choice is fixed by law so every firm in a sector must use market orientation.", "Orientation suitability depends on product and competitors rather than universal legal mandate."],
    ["CRM long-term relationships require no communication because customers automatically return without contact.", "CRM uses newsletters, coupons, and product information to encourage return purchases."],
    ["Sensitive personal data handling matters only for government agencies and not for commercial CRM programmes.", "Sensitive use of personal data is indispensable for businesses using CRM data."],
    ["Identical marketing objectives prove that two firms must also share the same orientation starting point.", "Identical objectives can coexist with different orientation processes."],
    ["Market-oriented firms never collect customer data because data collection contradicts customer focus.", "Market-oriented CRM collects behavioural data to tailor offers responsibly."],
    ["Product-oriented businesses never advertise because they assume buyers discover features without promotion.", "Product orientation thinks about selling later; it does not eliminate selling altogether."],
    ["Loyalty programmes force anonymity on customers who cannot access discounts without remaining unidentified.", "Customers willingly give up anonymity to obtain discounts and special offers."],
    ["Tailored offers ignore personal preferences because CRM stores only aggregate industry statistics.", "CRM collects individual behavioural data to tailor offers to personal preferences."],
    ["Neglecting customer expectations is recommended when product specifications are technically advanced.", "Customer and market expectations should not be neglected."],
    ["CRM is identical to a single promotional campaign with no aim of sustaining relationships over time.", "CRM aims at long-term relationships rather than one-off campaigns alone."],
    ["Personal accounts and loyalty cards never record buying behaviour usable for later marketing contact.", "Accounts and cards support data collection on buying behaviours for tailored offers."],
    ["Market orientation eliminates the need to consider product quality because only customer opinions matter.", "Market orientation tailors to needs but does not discard product quality considerations."],
    ["Product orientation means ignoring production entirely and focusing only on customer service scripts.", "Product orientation emphasises production and product features, not service scripts alone."],
    ["Anticipating changing needs is a disadvantage of market orientation because it creates unnecessary adaptation costs.", "Anticipating change is presented as an advantage of market orientation."],
    ["Competitor numbers have no bearing on whether product or market orientation is more suitable.", "The number of competitors influences which orientation is more suitable."],
    ["Emailing coupons to registered customers contradicts CRM because coupons undermine long-term relationships.", "CRM uses coupons and newsletters to support long-term repeat relationships."],
    ["Sensitive data use means publishing all customer records publicly to maximise transparency.", "Sensitive use means careful handling, not public disclosure of personal records."],
    ["Market-oriented firms define products first and only ask customers whether they like the result afterwards.", "Market orientation analyses needs and wants before tailoring products to fulfil requirements."],
    ["Product-oriented firms never think about how to sell because superior features eliminate any selling activity.", "Product-oriented firms think about selling later, not that selling never occurs."],
    ["CRM data retention is pointless because customers never return after receiving a newsletter.", "CRM aims to bring customers back through informed contact supported by retained data."],
    ["Loyalty discounts are unrelated to personal accounts because discounts apply anonymously to every visitor.", "Personal accounts and loyalty cards tie identifiable customers to discount benefits."],
    ["Buying-behaviour records cannot inform tailored offers because preferences never change after one purchase.", "Tailoring uses behavioural records reflecting evolving personal preferences."],
    ["Both orientations always require different profitability targets that make objectives incompatible.", "Marketing objectives may be identical even when orientation processes differ."],
    ["Market orientation prohibits collecting personal data because customer focus means ignoring purchase histories.", "Market-oriented CRM collects data to tailor offers while handling it sensitively."],
    ["Product orientation is defined by mailing coupons before any product specifications are considered.", "Product orientation begins with product focus; CRM coupons use retained data later."],
    ["Customer expectations matter only for market-oriented firms and never for product-oriented businesses.", "Markets and customer expectations should not be neglected by any orientation."],
  ];

  const traps = [
    ["reverses orientation sequencing", "Orientation sequencing differs: product-first versus needs-first."],
    ["confuses CRM with one-off selling", "CRM builds long-term relationships rather than isolated transactions."],
    ["denies data retention in CRM", "CRM retains customer data for ongoing newsletters and coupons."],
    ["claims anonymity is preserved in loyalty schemes", "Loyalty cards and accounts often involve willing anonymity surrender."],
    ["treats orientation objectives as always different", "Objectives may be identical across orientations."],
    ["ignores market expectation relevance", "Customer and market expectations should not be neglected."],
    ["mislabels product orientation as needs-first", "Product orientation focuses on product and specifications first."],
    ["mislabels market orientation as specification-first", "Market orientation analyses needs before tailoring products."],
    ["denies sensitive data importance", "Sensitive use of personal data is indispensable."],
    ["claims tailoring without behavioural data", "Businesses collect buying-behaviour data to tailor offers."],
  ];

  const subjects = [
    "consumer electronics retailers",
    "regional supermarket chains",
    "fashion garment suppliers",
    "software subscription providers",
    "hotel loyalty programmes",
    "dental membership schemes",
    "furniture manufacturers",
    "online grocery platforms",
    "fitness studio operators",
    "corporate catering firms",
    "independent bookshops",
    "vehicle service garages",
    "cosmetics producers",
    "travel agencies",
    "artisan bakeries",
  ];

  for (const subject of subjects) {
    pairs.push([
      `${subject} using product orientation must first analyse every customer's needs before engineering any product specifications.`,
      `Product orientation focuses on the product first; needs analysis leads market orientation, not product orientation.`,
    ]);
    pairs.push([
      `${subject} practising market orientation can ignore customer expectations whenever internal feature quality is high.`,
      `Markets and customer expectations should not be neglected even with strong features.`,
    ]);
    pairs.push([
      `${subject} with identical profitability targets must also follow identical product-versus-market orientation processes.`,
      `Identical objectives can coexist with different orientation starting points.`,
    ]);
    pairs.push([
      `CRM at ${subject} requires deleting all personal records after each transaction to protect anonymity permanently.`,
      `CRM retains data to mail or email newsletters, coupons, and product information for repeat business.`,
    ]);
    pairs.push([
      `Loyalty programmes at ${subject} preserve complete customer anonymity while still delivering personalised coupons.`,
      `Customers often willingly give up anonymity through loyalty cards and accounts for discounts.`,
    ]);
    pairs.push([
      `${subject} cannot tailor offers because collecting buying-behaviour data is unrelated to CRM practice.`,
      `Businesses collect behavioural data to tailor offers to personal preferences.`,
    ]);
    pairs.push([
      `Market-oriented ${subject} always respond later to changing wants because they wait for finished specifications.`,
      `Market-oriented firms anticipate and respond earlier than product-oriented competitors.`,
    ]);
    pairs.push([
      `Product-oriented ${subject} never rely on feature quality and depend only on coupons without strong offerings.`,
      `Product orientation mainly relies on the quality of product features for market success.`,
    ]);
  }

  for (const subject of subjects) {
    for (const [wrong, expl] of traps) {
      pairs.push([
        `Managers at ${subject} may ${wrong} if orientation and CRM principles are misunderstood.`,
        `${expl} The error would misapply orientation or CRM concepts at ${subject}.`,
      ]);
      pairs.push([
        `A common misconception at ${subject} is that firms ${wrong} when balancing product focus with customer data use.`,
        `${expl} This misconception misstates orientation or CRM practice at ${subject}.`,
      ]);
    }
  }

  const pool = dedupePairs(pairs);
  if (pool.length < 200) {
    throw new Error(`FALSE pool too small: ${pool.length}`);
  }
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE");

const cases = buildCases({
  subsection: "5.3",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
