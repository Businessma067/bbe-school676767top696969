/**
 * Generate scripts/ch5-part-5.5.json — 100 cases for subsection 5.5 Market research.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"))["5.5"];
const OUT = "scripts/ch5-part-5.5.json";

const SCENE = [
  "Consider a components manufacturer that commissions an online survey and telephone interviews to learn what industrial buyers expect from next-generation circuit boards. Evaluate the following economic assertions:",
  "Consider a regional bakery chain that studies government retail statistics and trade-association reports before opening outlets in new towns. Evaluate the following economic assertions:",
  "Consider a furniture producer that tracks where customers purchase dining sets, whether in showrooms, online stores, or department concessions. Evaluate the following economic assertions:",
  "Consider a sportswear retailer that analyses seasonal peaks in running-shoe purchases to plan stock levels and promotional pricing across the year. Evaluate the following economic assertions:",
  "Consider a pharmaceutical wholesaler operating in a business-to-business market that interviews hospital buyers about motives for choosing one supplier over another. Evaluate the following economic assertions:",
  "Consider a small craft brewery that cannot afford a large-scale questionnaire programme and instead relies on freely available industry consumption data. Evaluate the following economic assertions:",
  "Consider an electronics assembler comparing its euro sales with total industry revenue to estimate its proportion of the national components market. Evaluate the following economic assertions:",
  "Consider a garden-centre group noting that children influence plant-pot choices even though parents complete the checkout payment. Evaluate the following economic assertions:",
  "Consider a logistics firm reviewing published transport-market forecasts alongside its own shipment records to judge growth opportunities. Evaluate the following economic assertions:",
  "Consider a cosmetics brand dividing its brand sales by the sales of its largest rival to interpret competitive standing. Evaluate the following economic assertions:",
  "Consider a hotel operator mapping when conference bookings surge in spring and autumn to adjust staffing and room rates. Evaluate the following economic assertions:",
  "Consider an automotive-parts supplier using secondary data from industry associations before designing a tailored buyer survey. Evaluate the following economic assertions:",
  "Consider a software vendor learning how business clients use its platform so that product updates match preferred operational workflows. Evaluate the following economic assertions:",
  "Consider a food producer estimating market volume in tonnes for organic cereals and comparing that total with its own annual shipments. Evaluate the following economic assertions:",
  "Consider a packaging business weighing the cost of administering thousands of questionnaires against the value of customised customer insight. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how market research supplies information about customers, competitors, and the wider industry. Evaluate the following economic assertions:",
  "Analyze the distinction between primary and secondary sources of market research data. Evaluate the following economic assertions:",
  "Review how primary information is obtained through empirical studies tailored to a business. Evaluate the following economic assertions:",
  "Analyze why conducting primary market research can be costly for smaller businesses. Evaluate the following economic assertions:",
  "Review secondary information drawn from research already completed by other organisations. Evaluate the following economic assertions:",
  "Analyze the customer-analysis question of who current and potential customers are. Evaluate the following economic assertions:",
  "Review how customer analysis distinguishes business-to-consumer and business-to-business markets. Evaluate the following economic assertions:",
  "Analyze the roles of buyer, user, and influencer in customer purchasing decisions. Evaluate the following economic assertions:",
  "Review the customer-analysis dimension of what customers do with products. Evaluate the following economic assertions:",
  "Analyze how knowledge of preferred product use supports development and improvement. Evaluate the following economic assertions:",
  "Review the customer-analysis dimension of where customers buy products. Evaluate the following economic assertions:",
  "Analyze how purchase-location data helps identify preferred distribution channels. Evaluate the following economic assertions:",
  "Review the customer-analysis dimension of when customers buy products. Evaluate the following economic assertions:",
  "Analyze how timing information reveals seasonal fluctuations and supports production planning. Evaluate the following economic assertions:",
  "Review the customer-analysis dimension of why customers choose one product over another. Evaluate the following economic assertions:",
  "Analyze how motives and preferences inform product development and market-share growth. Evaluate the following economic assertions:",
  "Review market size as the total sales of a product by all businesses in a market. Evaluate the following economic assertions:",
  "Analyze how market size may be expressed as a monetary value or as a quantity sold. Evaluate the following economic assertions:",
  "Review market share as the proportion of market sales held by a business or brand. Evaluate the following economic assertions:",
  "Analyze the formula for absolute market share using business sales and market volume. Evaluate the following economic assertions:",
  "Review relative market share as a comparison with the largest competitor's market share. Evaluate the following economic assertions:",
  "Analyze the formula for relative market share using a firm's share and the leader's share. Evaluate the following economic assertions:",
  "Review how market potential can exceed current market volume when unconverted customers remain. Evaluate the following economic assertions:",
  "Analyze how sales potential can exceed a firm's current sales volume. Evaluate the following economic assertions:",
  "Review questionnaires, interviews, and online surveys as primary research instruments. Evaluate the following economic assertions:",
  "Analyze government and trade-association publications as secondary research sources. Evaluate the following economic assertions:",
  "Review why secondary data are often general rather than tailored to one business. Evaluate the following economic assertions:",
  "Analyze how distribution-channel weaknesses may appear through where-customer analysis. Evaluate the following economic assertions:",
  "Review seasonal purchase patterns and their link to price differentiation over the year. Evaluate the following economic assertions:",
  "Analyze absolute market share as information relevant to the firm and to investors. Evaluate the following economic assertions:",
  "Review why absolute market share alone gives limited insight into rival performance. Evaluate the following economic assertions:",
  "Analyze relative market share as contextual information about competitive position. Evaluate the following economic assertions:",
  "Review market volume as sales of all firms compared with market potential including future buyers. Evaluate the following economic assertions:",
  "Analyze sales volume versus sales potential for an individual business. Evaluate the following economic assertions:",
  "Review how market research supports learning about existing and prospective customers. Evaluate the following economic assertions:",
  "Analyze how competition and industry conditions form part of market research scope. Evaluate the following economic assertions:",
  "Review empirical studies commissioned from market research institutes as primary sources. Evaluate the following economic assertions:",
  "Analyze tailoring primary research to the specific needs and interests of a business. Evaluate the following economic assertions:",
  "Review free secondary research that may still serve general market-learning purposes. Evaluate the following economic assertions:",
  "Analyze business-to-consumer markets where customers are final consumers. Evaluate the following economic assertions:",
  "Review business-to-business markets where customers are other businesses. Evaluate the following economic assertions:",
  "Analyze situations where the product user differs from the person who pays for the purchase. Evaluate the following economic assertions:",
  "Review how children may influence buying decisions although parents complete payment. Evaluate the following economic assertions:",
  "Analyze identifying alternative distribution channels when current channels show weakness. Evaluate the following economic assertions:",
  "Review planning production ahead when purchase-timing analysis reveals seasonal demand. Evaluate the following economic assertions:",
  "Analyze expressing market size in euros as a value measure of total industry sales. Evaluate the following economic assertions:",
  "Review expressing market size as the number of pieces sold across the market. Evaluate the following economic assertions:",
  "Analyze calculating market share by dividing a firm's sales by total market sales. Evaluate the following economic assertions:",
  "Review an example where euro sales of 150,000 against market volume of 1,000,000 yield fifteen per cent absolute share. Evaluate the following economic assertions:",
  "Analyze an example where fifteen per cent absolute share against a leader's thirty per cent yields relative share of 0.5. Evaluate the following economic assertions:",
  "Review gains from competitors as a component of sales potential for one firm. Evaluate the following economic assertions:",
  "Analyze a share in the increase of market potential as part of sales potential. Evaluate the following economic assertions:",
  "Review interpreting data on smartphones, servers, and wearables within broader electronics markets. Evaluate the following economic assertions:",
  "Analyze automotive, industrial, and medical segments as parts of wider component markets. Evaluate the following economic assertions:",
  "Review long-term growth opportunities linked to new applications in technology markets. Evaluate the following economic assertions:",
  "Analyze administering and interpreting large questionnaire programmes as a primary-research cost. Evaluate the following economic assertions:",
  "Review telephone and personal interviews as primary methods of collecting market data. Evaluate the following economic assertions:",
  "Analyze online surveys as a primary research tool that still requires analysis expenditure. Evaluate the following economic assertions:",
  "Review industry reports published by other businesses as possible secondary sources. Evaluate the following economic assertions:",
  "Analyze matching product development to customer needs revealed through what-customer analysis. Evaluate the following economic assertions:",
  "Review channel analysis showing whether customers prefer retail stores, online platforms, or intermediaries. Evaluate the following economic assertions:",
  "Analyze timing analysis that supports differentiated pricing across seasons or months. Evaluate the following economic assertions:",
  "Review motive analysis explaining preference for one brand over close substitutes. Evaluate the following economic assertions:",
  "Analyze total market sales as the basis for measuring both size and competitive share. Evaluate the following economic assertions:",
  "Review investor interest in a firm's absolute share of the market it operates in. Evaluate the following economic assertions:",
  "Analyze competitive benchmarking through relative share against the market leader. Evaluate the following economic assertions:",
  "Review market potential as market volume plus customers not yet converted to purchase. Evaluate the following economic assertions:",
  "Analyze sales potential as current sales plus achievable gains from rivals and market growth. Evaluate the following economic assertions:",
  "Review the scope of market research beyond customers to include rivals and industry trends. Evaluate the following economic assertions:",
  "Analyze primary research design around questions such as willingness to pay and support needs. Evaluate the following economic assertions:",
  "Review limitations of secondary data when a firm needs buyer-specific detail. Evaluate the following economic assertions:",
  "Analyze distinguishing consumer markets from business markets in who-customer research. Evaluate the following economic assertions:",
  "Review influence patterns where grandparents or parents decide purchases shaped by others. Evaluate the following economic assertions:",
  "Analyze using where-customer findings to encourage alternative retail or wholesale channels. Evaluate the following economic assertions:",
  "Review when-customer findings that expose predictable peaks before holiday periods. Evaluate the following economic assertions:",
  "Analyze why-customer findings that guide differentiation and share expansion strategies. Evaluate the following economic assertions:",
  "Review monetary and quantity expressions of the same underlying market volume concept. Evaluate the following economic assertions:",
  "Analyze percentage market share as sales of one business divided by all market sales. Evaluate the following economic assertions:",
  "Review absolute share figures that omit direct comparison with the leading competitor. Evaluate the following economic assertions:",
  "Analyze relative share ratios that add competitive context to absolute percentage results. Evaluate the following economic assertions:",
  "Review assumptions that unconverted potential customers keep market potential above current volume. Evaluate the following economic assertions:",
  "Analyze how a components manufacturer might combine secondary forecasts with primary buyer surveys. Evaluate the following economic assertions:",
  "Review ethical use of market research data about customer behaviour and preferences. Evaluate the following economic assertions:",
  "Analyze integrating who, what, where, when, and why dimensions within customer analysis. Evaluate the following economic assertions:",
  "Review measuring industry development to evaluate a firm's position and future prospects. Evaluate the following economic assertions:",
  "Analyze comparing a brand's sales to total category sales when estimating market share. Evaluate the following economic assertions:",
  "Review interpreting a relative share below one as trailing the largest competitor's position. Evaluate the following economic assertions:",
  "Analyze interpreting a relative share above one as exceeding the largest competitor's share. Evaluate the following economic assertions:",
];

const TITLES = [
  "Primary and Secondary Research Sources",
  "Empirical Studies and Tailored Data",
  "Cost Barriers in Primary Research",
  "Government and Association Secondary Data",
  "Customer Analysis Overview",
  "Who Customers Are in B2B and B2C",
  "Buyer User and Influencer Roles",
  "What Customers Do With Products",
  "Where Customers Purchase Products",
  "When Customers Buy and Seasonality",
  "Why Customers Choose Products",
  "Market Size as Total Industry Sales",
  "Market Share Percentage Calculation",
  "Absolute Market Share Formula",
  "Relative Market Share Formula",
  "Market Volume Versus Market Potential",
  "Sales Volume Versus Sales Potential",
  "Questionnaires as Primary Research",
  "Interviews and Online Surveys",
  "Secondary Data Generality Limits",
  "Distribution Channel Identification",
  "Seasonal Planning From Timing Data",
  "Motive Analysis for Product Development",
  "Investor Relevance of Market Share",
  "Competitive Context in Relative Share",
  "Misclassifying Primary Research",
  "Misclassifying Secondary Research",
  "Confusing Market Size and Share",
  "Absolute Versus Relative Share Traps",
  "Market Potential Exceeding Volume",
  "Sales Potential Components",
  "Small Firm Primary Research Limits",
  "Tailored Versus General Research Data",
  "B2C Market Customer Identification",
  "B2B Market Customer Identification",
  "Influencers Without Payment Role",
  "Preferred Use and Product Improvement",
  "Channel Weakness and Alternatives",
  "Seasonal Fluctuation Recognition",
  "Price Differentiation Over the Year",
  "Value and Quantity Market Measures",
  "Fifteen Per Cent Absolute Share Example",
  "Relative Share of Zero Point Five",
  "Leader Comparison in Relative Share",
  "Total Sales Basis for Share",
  "Prospective Customer Research Scope",
  "Competition Within Research Scope",
  "Institute Commissioned Primary Studies",
  "Analysis Costs in Primary Research",
  "Free Secondary Research Availability",
  "Children Influencing Parent Purchases",
  "User Distinct From Buyer",
  "Retail Versus Online Channel Data",
  "Production Planning From Timing",
  "Preference Motives and Market Share",
  "Electronics Market Segment Measures",
  "Growth Opportunities in New Applications",
  "Gains From Competitors in Potential",
  "Share in Market Potential Increase",
  "Monetary Expression of Market Size",
  "Quantity Expression of Market Size",
  "Percentage Share of One Business",
  "Absolute Share Without Rival Detail",
  "Relative Share Adding Context",
  "Unconverted Customers and Potential",
  "Combining Primary and Secondary Methods",
  "Who What Where When Why Integration",
  "Industry Trend Evaluation",
  "Brand Sales Against Category Total",
  "Relative Share Below Unity",
  "Relative Share Above Unity",
  "Market Research for Investors",
  "Primary Survey Administration Costs",
  "Telephone Interview Primary Data",
  "Personal Interview Primary Data",
  "Online Survey Analysis Expenditure",
  "Industry Reports as Secondary Sources",
  "Business Published Secondary Data",
  "Channel Preference Identification",
  "Differentiated Seasonal Pricing",
  "Substitute Preference Motives",
  "Total Category Sales Measurement",
  "Forecast and Position Assessment",
  "Buyer Specific Detail Needs",
  "Consumer Versus Business Market Trap",
  "Grandparent and Parent Decision Roles",
  "Alternative Channel Encouragement",
  "Holiday Peak Timing Analysis",
  "Differentiation From Why Analysis",
  "Dual Expression of Market Volume",
  "Single Firm Share Percentage",
  "Omitting Leader From Absolute Share",
  "Ratio Form of Relative Share",
  "Potential Customers Above Volume",
  "Components Manufacturer Research Mix",
  "Behaviour Data in Customer Study",
  "Position and Prospect Evaluation",
  "Category Share for One Brand",
  "Trailing the Market Leader",
  "Leading the Largest Competitor",
  "Research Scope Beyond Customers",
  "Willingness to Pay Primary Design",
  "Secondary Limits for Specific Interests",
  "Integrated Customer Dimension Set",
  "Industry Development Measurement",
];

const sceneIndices = [
  0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96,
];

// --- Build TRUE pool (need 300 unique) ---
const TRUE = [];

const push = (arr, stmt, expl) => arr.push([stmt, expl]);

// Primary research (~55)
const primaryMethods = [
  "questionnaires administered to hundreds of respondents",
  "personal interviews with selected buyers",
  "telephone interviews with potential customers",
  "online surveys distributed to a defined sample",
  "empirical studies commissioned from a market research institute",
];
for (const m of primaryMethods) {
  push(
    TRUE,
    `Primary market research may gather information through ${m} designed for the specific interests of the business.`,
    `Primary research uses tailored empirical methods such as ${m} to collect data for the firm.`,
  );
}
push(
  TRUE,
  "Primary information is gained by conducting an empirical study or having data collected by a market research institute.",
  "The textbook defines primary information as data from a new empirical study or institute collection.",
);
push(
  TRUE,
  "A primary study can be tailored to the needs and interests of the business commissioning the research.",
  "Primary research is designed around the commissioning firm's specific questions and interests.",
);
push(
  TRUE,
  "Administering large questionnaire programmes and analysing the responses is a major cost of primary market research.",
  "Questionnaire administration and data analysis contribute to the high cost of primary research.",
);
push(
  TRUE,
  "Conducting personal or telephone interviews as part of market research requires substantial expenditure on data collection.",
  "Interview-based primary research involves significant collection and processing costs.",
);
push(
  TRUE,
  "Setting up and interpreting an online survey still involves analysis costs that make primary research expensive.",
  "Online surveys remain primary research and carry analysis costs noted in the chapter.",
);
push(
  TRUE,
  "Small businesses often cannot afford extensive primary market research because of the cost of large-scale data collection.",
  "The chapter notes that especially small businesses struggle to fund costly primary studies.",
);
push(
  TRUE,
  "Primary research allows a business to ask who its customers are and which products they buy in a study designed for that firm.",
  "Tailored primary studies can target firm-specific who and what customer questions.",
);
push(
  TRUE,
  "Primary research can investigate how much customers are willing to pay and what support they expect from a supplier.",
  "Willingness to pay and support needs are examples of questions primary research can address.",
);
push(
  TRUE,
  "Primary research can compare answers from different customer groups such as older and younger users or men and women.",
  "Demographic comparisons within a tailored primary study are part of customer analysis.",
);
push(
  TRUE,
  "Primary data collection through interviews lets a firm explore why customers prefer one product over close substitutes.",
  "Why-customer motives can be explored through primary interview research.",
);
push(
  TRUE,
  "An empirical primary study can be shaped around the distribution channels a business wishes to evaluate.",
  "Primary research can be tailored to test where customers prefer to buy.",
);
push(
  TRUE,
  "Primary research may track when customers purchase so that seasonal patterns are identified from newly collected data.",
  "When-customer timing can be captured directly in a primary empirical study.",
);
push(
  TRUE,
  "Commissioning a market research institute to collect data is a recognised way of obtaining primary information.",
  "Institute collection on behalf of the business is primary information in the textbook framework.",
);
push(
  TRUE,
  "Primary research is appropriate when a business needs buyer-specific detail that general published statistics cannot supply.",
  "Tailored primary research fills gaps left by non-specific secondary data.",
);
push(
  TRUE,
  "Questionnaires distributed to thousands of respondents represent primary data because they are collected for the commissioning study.",
  "Large-scale questionnaires produce primary information when gathered for the firm's study.",
);
push(
  TRUE,
  "Primary research supports learning whether customers also buy similar products from competing businesses.",
  "Competitive purchasing behaviour can be investigated through tailored primary research.",
);
push(
  TRUE,
  "Primary research can reveal what customers think about a product through questions designed for that product line.",
  "Product opinion questions in a tailored study are primary customer insight.",
);
push(
  TRUE,
  "The cost of interpreting primary research data is part of why small firms may rely on cheaper secondary sources instead.",
  "Analysis and interpretation costs contribute to primary research expense for smaller businesses.",
);
push(
  TRUE,
  "Primary information is newly collected for the study rather than taken unchanged from earlier publications.",
  "Primary data are gathered for the current empirical study rather than reused unchanged.",
);
push(
  TRUE,
  "A business may design primary research around prospective customers it has not yet converted to buyers.",
  "Primary studies can target prospective as well as existing customers.",
);
push(
  TRUE,
  "Primary research through personal interviews can explore preferred product use in the customer's own words.",
  "What-customer use patterns can be captured through primary interviews.",
);
push(
  TRUE,
  "Tailored primary research can test alternative pricing levels by asking willingness-to-pay questions directly.",
  "Primary studies can include pricing questions tailored to the firm's product.",
);
push(
  TRUE,
  "Primary data from a bespoke survey can inform channel strategy when respondents state where they prefer to shop.",
  "Where-customer preferences can be collected in a tailored primary survey.",
);
push(
  TRUE,
  "Empirical primary research remains the source when a firm pays an institute to design and run the entire study.",
  "Institute-run bespoke studies supply primary information to the commissioning business.",
);

// Secondary research (~40)
push(
  TRUE,
  "Secondary information is based on existing research that has already been completed by another organisation.",
  "Secondary data come from prior research conducted by others.",
);
push(
  TRUE,
  "Government agencies may publish market research that businesses can use as a secondary information source.",
  "Government publications are listed as sources of secondary market information.",
);
push(
  TRUE,
  "Trade and industry associations sometimes conduct research that is available to member businesses as secondary data.",
  "Association research can supply secondary information to firms in the sector.",
);
push(
  TRUE,
  "Other businesses may publish research findings that serve as secondary sources for firms studying the market.",
  "Research published by other businesses can be used as secondary information.",
);
push(
  TRUE,
  "Secondary market information is often available free of charge although it may not match a firm's specific interests.",
  "Free secondary data are noted in the chapter though they may be general.",
);
push(
  TRUE,
  "Secondary research data are usually general and not tailored to the specific interests of one business.",
  "The textbook states secondary information is typically general rather than firm-specific.",
);
push(
  TRUE,
  "A firm using industry consumption statistics from a trade body is relying on secondary rather than primary research.",
  "Published association statistics are secondary information gathered earlier by others.",
);
push(
  TRUE,
  "Secondary sources are useful when a business needs broad market background before designing a tailored primary study.",
  "Secondary data can provide general context ahead of primary research.",
);
push(
  TRUE,
  "Forecasts published by research firms and reused by a manufacturer count as secondary market information.",
  "Reused published forecasts are secondary data in the market-research framework.",
);
push(
  TRUE,
  "Secondary data compiled for another purpose may still help a business learn about overall industry development.",
  "Secondary research done for other aims can still inform general market learning.",
);
push(
  TRUE,
  "Reading an annual industry review prepared by a government department is an example of using secondary research.",
  "Government industry reviews are secondary sources of market information.",
);
push(
  TRUE,
  "Secondary information does not require the business to administer its own questionnaire programme to obtain the data.",
  "Secondary data reuse existing studies rather than new firm-administered questionnaires.",
);
push(
  TRUE,
  "A retailer consulting freely available national retail-sales statistics is using secondary market research.",
  "National statistics published elsewhere are secondary information.",
);
push(
  TRUE,
  "Secondary research may cover entire market segments even when it lacks detail on one firm's customers.",
  "Broad segment coverage is a feature of general secondary data.",
);
push(
  TRUE,
  "Because secondary research was conducted for another purpose, it may omit questions a business would ask in primary work.",
  "Different original purposes limit how tailored secondary data can be.",
);
push(
  TRUE,
  "Industry association reports on total sector output provide secondary context for estimating market size.",
  "Association output reports are secondary sources for size measures.",
);
push(
  TRUE,
  "A components manufacturer reading published electronics-market forecasts is consuming secondary research data.",
  "Published market forecasts reused by the firm are secondary information.",
);
push(
  TRUE,
  "Secondary sources reduce data-collection cost because the business does not pay for a full bespoke empirical programme.",
  "Reusing existing research avoids the cost of a new primary collection programme.",
);
push(
  TRUE,
  "Market reports sold or shared by other businesses can supplement a firm's understanding as secondary data.",
  "Other firms' published reports function as secondary sources.",
);
push(
  TRUE,
  "Secondary information from government agencies may describe industry trends without naming individual customer accounts.",
  "Government secondary data tend to be aggregate and general.",
);

// Customer analysis who/what/where/when/why (~85)
push(
  TRUE,
  "Customer analysis often asks who current and potential customers are as part of market research.",
  "Who-customers are a core dimension of customer analysis in the chapter.",
);
push(
  TRUE,
  "If customers are final consumers, the business operates in a business-to-consumer market.",
  "B2C markets serve consumers as customers in the textbook classification.",
);
push(
  TRUE,
  "If customers are other businesses rather than final consumers, the firm operates in a business-to-business market.",
  "B2B markets involve business customers purchasing from the firm.",
);
push(
  TRUE,
  "The buyer of a product and the user of the product may not be the same person in customer analysis.",
  "The chapter distinguishes buyer and user roles among customers.",
);
push(
  TRUE,
  "Some people influence buying decisions even when another person completes the purchase payment.",
  "Influencers can shape decisions without being the paying buyer.",
);
push(
  TRUE,
  "Children may influence product choices while parents or grandparents complete the actual purchase.",
  "The textbook gives children influencing purchases paid for by parents as an example.",
);
push(
  TRUE,
  "Customer analysis examines what customers do with products to guide development according to needs.",
  "What-customers do with products supports need-based development.",
);
push(
  TRUE,
  "The more a business knows about preferred product use, the more it can improve the product for customers.",
  "Preferred-use knowledge feeds product improvement in customer analysis.",
);
push(
  TRUE,
  "Customer analysis considers where customers buy products to identify preferred distribution channels.",
  "Where-customers buy links to channel identification.",
);
push(
  TRUE,
  "Analysis of purchase location can reveal weaknesses in current distribution channels.",
  "Where-customer data can expose channel weaknesses noted in the chapter.",
);
push(
  TRUE,
  "Where-customer findings may encourage a business to use alternative distribution channels.",
  "Channel analysis can prompt alternative channel strategies.",
);
push(
  TRUE,
  "Customer analysis records when customers buy to identify seasonal fluctuations in demand.",
  "When-customers buy reveals seasonal patterns for planning.",
);
push(
  TRUE,
  "Knowing when customers purchase helps plan production ahead of predictable demand peaks.",
  "Timing analysis supports forward production planning.",
);
push(
  TRUE,
  "When-customer analysis can support price differentiation across different periods of the year.",
  "Seasonal timing links to differentiated pricing over the year.",
);
push(
  TRUE,
  "Customer analysis investigates why customers choose one product or prefer another.",
  "Why-customers choose addresses motives and preferences.",
);
push(
  TRUE,
  "Learning customer motives and preferences is important for product development and enhancing market share.",
  "Why-customer insight supports development and share growth.",
);
push(
  TRUE,
  "Market research provides information about existing customers and prospective buyers of a firm's products.",
  "Research covers both current and potential customers in the chapter overview.",
);
push(
  TRUE,
  "Market research also covers competition and general industry conditions beyond customer profiles alone.",
  "Competitors and industry context are within market research scope.",
);
push(
  TRUE,
  "Who-customer research distinguishes consumer markets from business markets for the same product category.",
  "Customer type determines B2C versus B2B classification.",
);
push(
  TRUE,
  "What-customer analysis can show whether buyers use a product at home, at work, or in industrial processes.",
  "Preferred use settings are part of what-customer research.",
);

const whoWhat = [
  ["hospital procurement teams", "business-to-business purchasing of medical supplies"],
  ["household shoppers", "business-to-consumer retail purchases"],
  ["fleet managers", "business-to-business acquisition of commercial vehicles"],
  ["teenagers recommending apps", "influence on purchases paid for by parents"],
  ["factory maintenance staff", "actual users of industrial components bought by managers"],
];
for (const [who, ctx] of whoWhat) {
  push(
    TRUE,
    `Customer analysis involving ${who} illustrates ${ctx} within market research.`,
    `The example shows how who-customer research maps to market type and roles.`,
  );
}

const channels = ["retail stores", "online platforms", "wholesale distributors", "department concessions", "direct sales teams"];
for (const ch of channels) {
  push(
    TRUE,
    `Where-customer research may show that buyers increasingly prefer ${ch} for certain product categories.`,
    `Purchase-location analysis identifies channel preferences such as ${ch}.`,
  );
}

const seasons = ["winter holiday periods", "spring gardening months", "back-to-school weeks", "summer travel seasons", "autumn conference cycles"];
for (const s of seasons) {
  push(
    TRUE,
    `When-customer analysis may reveal higher purchase volumes during ${s} for relevant product lines.`,
    `Timing research identifies seasonal peaks such as ${s}.`,
  );
}

const motives = [
  "lower total cost of ownership",
  "perceived product reliability",
  "faster delivery performance",
  "environmental reputation of the brand",
  "availability of after-sales support",
];
for (const m of motives) {
  push(
    TRUE,
    `Why-customer research may show that buyers select a supplier because of ${m}.`,
    `Motive analysis can identify preferences such as ${m}.`,
  );
}

// Market size, share, potential (~90)
push(
  TRUE,
  "Market size, also called market volume, is the total sales of a product by all businesses in the market.",
  "Market size or volume is total industry sales in the textbook definition.",
);
push(
  TRUE,
  "Market size can be expressed as a monetary value such as total euro sales across the market.",
  "Value expression of market size uses currency totals.",
);
push(
  TRUE,
  "Market size can also be expressed as a quantity such as the number of pieces sold in the market.",
  "Quantity expression counts units sold across the market.",
);
push(
  TRUE,
  "Market share is the proportion of market sales held by a business, product, or brand.",
  "Market share is defined as the firm's proportion of total market sales.",
);
push(
  TRUE,
  "Market share is calculated by dividing the sales of a business by total sales in the market.",
  "Share equals business sales divided by all market sales.",
);
push(
  TRUE,
  "Absolute market share equals the sales volume of one business divided by total market volume.",
  "The textbook gives this formula for absolute market share.",
);
push(
  TRUE,
  "If a business sells 150,000 euros in a market of 1,000,000 euros, its absolute market share is fifteen per cent.",
  "150,000 divided by 1,000,000 equals 15% in the chapter example.",
);
push(
  TRUE,
  "Absolute market share is important information for the business itself and for potential investors.",
  "The chapter notes absolute share matters to the firm and investors.",
);
push(
  TRUE,
  "Absolute market share alone does not reveal much about how other competitors are performing.",
  "Absolute share lacks direct rival comparison in the textbook.",
);
push(
  TRUE,
  "Relative market share compares a business's market share with the market share of its largest competitor.",
  "Relative share uses the leader's share as the benchmark.",
);
push(
  TRUE,
  "Relative market share equals the firm's market share divided by the largest competitor's market share.",
  "The textbook states this ratio formula for relative share.",
);
push(
  TRUE,
  "If absolute share is fifteen per cent and the largest rival holds thirty per cent, relative market share is 0.5.",
  "15 divided by 30 yields 0.5 in the continued chapter example.",
);
push(
  TRUE,
  "Relative market share adds competitive context that absolute share figures do not provide on their own.",
  "Relative share contextualises performance against the leader.",
);
push(
  TRUE,
  "Market potential can exceed market volume when potential customers in the market have not yet been converted to buyers.",
  "Unconverted customers push potential above current volume.",
);
push(
  TRUE,
  "Sales potential of a business can exceed its current sales volume when gains from rivals or market growth are achievable.",
  "Sales potential includes room beyond current sales volume.",
);
push(
  TRUE,
  "Sales potential may include gains achievable by winning customers from competing firms.",
  "Gains from competitors form part of sales potential in Figure 13.",
);
push(
  TRUE,
  "Sales potential may include a share in the increase of overall market potential.",
  "A share in market-potential growth is part of sales potential.",
);
push(
  TRUE,
  "Market volume records sales of all firms currently active in the market.",
  "Market volume aggregates existing firm sales in the market.",
);
push(
  TRUE,
  "Market research on industry development helps a business evaluate its market position and future prospects.",
  "Tracking market development supports position and outlook assessment.",
);
push(
  TRUE,
  "A brand's market share can be calculated by dividing that brand's sales by total category sales.",
  "Brand share uses brand sales over total category sales.",
);

const euroSizes = [
  [57.5, 59.7, "components"],
  [420, 450, "packaging"],
  [88, 92, "software licences"],
  [1.2, 1.3, "organic food"],
  [310, 325, "logistics services"],
];
for (const [a, b, seg] of euroSizes) {
  push(
    TRUE,
    `If total ${seg} market sales rise from ${a} million euros to ${b} million euros, market size measured in value has increased.`,
    `Rising aggregate euro sales show a larger value-based market size.`,
  );
}

const shareExamples = [
  [80, 400, 20],
  [45, 300, 15],
  [12, 48, 25],
  [7, 140, 5],
  [220, 880, 25],
];
for (const [firm, market, pct] of shareExamples) {
  push(
    TRUE,
    `A firm with sales of ${firm} million euros in a market of ${market} million euros holds a ${pct} per cent absolute market share.`,
    `${firm} divided by ${market} equals ${pct}% absolute share.`,
  );
}

const relExamples = [
  [15, 30, 0.5],
  [20, 40, 0.5],
  [18, 18, 1.0],
  [24, 16, 1.5],
  [10, 25, 0.4],
];
for (const [abs, lead, rel] of relExamples) {
  push(
    TRUE,
    `With absolute share of ${abs} per cent and the largest competitor at ${lead} per cent, relative market share equals ${rel}.`,
    `${abs} divided by ${lead} gives relative share of ${rel}.`,
  );
}

// Pad TRUE to 300+ with additional unique statements
const truePads = [
  ["Measuring market share in percentage terms expresses one firm's sales as a share of all market sales.", "Percentage share is sales of the firm over total market sales."],
  ["Investors may examine absolute market share when assessing how large a firm's position is within its industry.", "Investors use absolute share as one position indicator."],
  ["A relative share below one indicates the firm's percentage share trails the largest competitor's percentage.", "Relative share under 1.0 means trailing the leader's share."],
  ["A relative share above one indicates the firm's percentage share exceeds the largest competitor's percentage.", "Relative share above 1.0 means leading the largest rival."],
  ["Customer analysis integrates who, what, where, when, and why questions within market research.", "All five customer dimensions are listed in customer analysis."],
  ["Primary research can be designed around whether men and women differ in product preferences.", "Demographic splits are addressable in tailored primary studies."],
  ["Secondary association data may describe total sector output without listing individual buyer accounts.", "Association data are aggregate secondary information."],
  ["Where-customer analysis helps determine whether weaknesses exist in current retail or wholesale channels.", "Channel weakness identification is a where-customer use."],
  ["When-customer patterns support advance production scheduling before predictable demand surges.", "Forward scheduling follows from timing analysis."],
  ["Why-customer insight helps explain substitution between close rival products in the same category.", "Motive research clarifies substitution among rivals."],
  ["Market research data describe prospective buyers who might purchase if needs are met.", "Prospective customers are within research scope."],
  ["Total sales of all businesses in a product market form the denominator when calculating market share.", "All-market sales are the share denominator."],
  ["Absolute market share uses the firm's own sales in the numerator of the share calculation.", "Firm sales sit in the numerator for absolute share."],
  ["Relative market share uses the leader's share as the denominator in the ratio calculation.", "The largest competitor's share is the relative-share denominator."],
  ["Market potential includes room from customers not yet purchasing in the current market volume.", "Unserved customers raise potential above current volume."],
  ["Sales volume records what one business currently sells in the market.", "Sales volume is the firm's current sales total."],
  ["Gains from competitors represent one component that can raise sales potential above current volume.", "Winning rival customers increases sales potential."],
  ["A share in rising market potential can form part of a firm's sales potential.", "Market-potential growth can add to sales potential."],
  ["Government-published industry statistics may be reused as free secondary market information.", "Free government data are secondary sources."],
  ["Personal interviews let researchers probe detailed why-customer motives in primary studies.", "Interviews support deep motive exploration in primary work."],
  ["Online surveys can reach many respondents yet still count as primary when newly collected.", "Large online samples still produce primary data."],
  ["Questionnaire programmes remain primary even when administered electronically to thousands of users.", "Electronic questionnaires are primary collection methods."],
  ["A business-to-business components supplier researches fleet buyers rather than final consumers.", "B2B research targets business customers."],
  ["A business-to-consumer retailer researches household shoppers as its customer group.", "B2C research targets consumer customers."],
  ["Influencers may recommend specifications that the formal buyer later approves in a business purchase.", "Influencers shape specifications before the buyer decides."],
  ["What-customer research on office furniture may examine home-office versus corporate use.", "Use context is part of what-customer analysis."],
  ["Where-customer data may compare showroom purchases with e-commerce purchases for the same brand.", "Channel mix appears in where-customer research."],
  ["When-customer research on heating equipment may show winter peaks in replacement demand.", "Seasonal replacement peaks appear in timing analysis."],
  ["Why-customer research may highlight warranty terms as a decisive preference over list price alone.", "Motive research can prioritise warranty over price."],
  ["Market size measured in tonnes sold applies the same volume concept using quantity units.", "Tonnes are a quantity expression of market size."],
  ["Market size measured in euro sales applies the same volume concept using monetary units.", "Euro totals are a value expression of market size."],
  ["A fifteen per cent absolute share means the firm accounts for fifteen of every hundred euros sold in the market.", "Percentage share interprets parts per hundred of market sales."],
  ["A relative share of 0.5 means the firm's share is half the percentage held by the market leader.", "0.5 relative share is half the leader's percentage."],
  ["A relative share of 1.5 means the firm's percentage share is one and a half times the leader's percentage.", "1.5 relative share exceeds the leader's percentage."],
  ["Market research on competition complements customer analysis when assessing industry position.", "Competitive information accompanies customer research."],
  ["Secondary forecasts may describe segment growth rates before a firm invests in primary buyer interviews.", "Forecasts as secondary data precede tailored primary work."],
  ["Primary willingness-to-pay questions help set realistic price bands for a new product launch.", "Primary pricing questions inform launch price bands."],
  ["Customer analysis of where purchases occur can prompt expansion into an underused online channel.", "Where analysis can justify new channel investment."],
  ["Customer analysis of when purchases occur can justify higher prices during peak weeks.", "Peak-week pricing links to when-customer data."],
  ["Customer analysis of why purchases occur can guide advertising that stresses the decisive motive.", "Advertising can target motives found in why-research."],
  ["Market volume sums current sales of all competing firms offering the product in the market.", "All rival sales sum to market volume."],
  ["Sales potential exceeds sales volume when the firm could win additional buyers not yet captured.", "Uncaptured buyers raise sales potential above volume."],
  ["Market potential exceeds market volume when category demand from non-buyers remains untapped.", "Non-buyers keep market potential above volume."],
  ["Absolute share is expressed as a percentage of total market sales attributable to one business.", "Absolute share is a percentage of total market sales."],
  ["Relative share is expressed as a ratio rather than as a direct percentage of total market sales.", "Relative share is a ratio against the leader, not a market percentage."],
  ["Research institutes may administer questionnaires as primary data collection on behalf of clients.", "Institute-administered questionnaires are primary collection."],
  ["Trade-body reports may give secondary overview of market size before a firm calculates its own share.", "Secondary size overviews precede firm share calculation."],
  ["Children influencing grocery choices while adults pay illustrates influencer roles in customer analysis.", "Influencer example appears in who-customer discussion."],
  ["Users of industrial components may differ from managers who sign supplier contracts in business markets.", "User and buyer can differ in B2B settings."],
  ["Preferred use information from what-customer research reduces mismatch between product features and needs.", "Feature alignment follows preferred-use insight."],
  ["Weak showroom traffic identified in where-research may trigger stronger dealer support programmes.", "Channel weakness responses follow where analysis."],
  ["Predictable summer demand identified in when-research may trigger earlier inventory builds.", "Inventory builds follow seasonal timing insight."],
  ["Preference for local suppliers identified in why-research may shape regional marketing messages.", "Regional messaging can reflect why-customer motives."],
];
for (const [s, e] of truePads) push(TRUE, s, e);

// --- Build FALSE pool (need 200 unique) ---
const FALSE = [];

push(
  FALSE,
  "Secondary information is gathered by administering a new questionnaire programme designed solely for the commissioning business.",
  "New bespoke questionnaires produce primary information, not secondary data.",
);
push(
  FALSE,
  "Primary market research reuses published government statistics without collecting any new empirical data.",
  "Reusing published statistics is secondary research; primary requires new empirical collection.",
);
push(
  FALSE,
  "Market share is calculated by dividing total market sales by the sales of one business.",
  "Market share divides business sales by total market sales, not the reverse.",
);
push(
  FALSE,
  "Absolute market share equals the largest competitor's sales divided by the firm's own sales volume.",
  "Absolute share uses firm sales over market volume, not rival sales over firm sales.",
);
push(
  FALSE,
  "Relative market share equals the firm's sales volume divided by total market volume expressed as a percentage.",
  "That formula describes absolute share; relative share compares with the leader's share.",
);
push(
  FALSE,
  "Market size refers only to the sales volume of one business rather than all businesses in the market.",
  "Market size is total sales of all firms in the market, not one firm alone.",
);
push(
  FALSE,
  "Market potential is always equal to current market volume because every customer already purchases in the market.",
  "The chapter assumes potential can exceed volume when unconverted customers remain.",
);
push(
  FALSE,
  "Sales potential cannot exceed current sales volume once the firm has published its annual revenue figure.",
  "Sales potential may exceed current sales volume through gains and market growth.",
);
push(
  FALSE,
  "Secondary research is always tailored to the specific interests of the business that reads the report.",
  "Secondary information is usually general and not tailored to one firm.",
);
push(
  FALSE,
  "Primary research is free of charge because the business designs the questions itself.",
  "Primary research is costly due to collection and analysis, especially for small firms.",
);
push(
  FALSE,
  "Customer analysis excludes the question of why customers prefer one product over another.",
  "Why-customers choose is an explicit customer-analysis dimension.",
);
push(
  FALSE,
  "Customer analysis covers only who customers are and excludes what, where, when, and why dimensions.",
  "Customer analysis includes who, what, where, when, and why.",
);
push(
  FALSE,
  "In a business-to-consumer market the customers are other businesses purchasing for production use.",
  "B2C markets have consumers as customers; business customers indicate B2B.",
);
push(
  FALSE,
  "In a business-to-business market the customers are always final household consumers.",
  "B2B markets involve business customers, not final consumers.",
);
push(
  FALSE,
  "The buyer and user of a product must always be the same person in every market.",
  "The chapter notes buyer and user may differ.",
);
push(
  FALSE,
  "Children can never influence purchasing decisions because only adults hold payment cards.",
  "Children may influence choices even when adults pay.",
);
push(
  FALSE,
  "Where-customer analysis is unrelated to identifying preferred distribution channels.",
  "Where customers buy helps identify distribution channels.",
);
push(
  FALSE,
  "When-customer analysis cannot reveal seasonal fluctuations because purchase dates are never recorded.",
  "When customers buy can reveal seasonal patterns.",
);
push(
  FALSE,
  "Why-customer analysis is irrelevant to product development and market-share growth.",
  "Motives and preferences matter for development and share enhancement.",
);
push(
  FALSE,
  "Market research provides information only about competitors and excludes customer analysis.",
  "Market research covers customers, competitors, and industry conditions.",
);

const falseTraps = [
  ["Relative market share is found by subtracting the firm's absolute share from one hundred per cent.", "Relative share is a ratio against the leader's share, not 100% minus absolute share."],
  ["Absolute market share is found by dividing the largest competitor's share by the firm's share.", "Absolute share uses firm sales over market volume, not rival over firm."],
  ["Market volume and market potential are identical terms with no difference in meaning.", "Potential can exceed volume when unconverted customers remain."],
  ["Sales volume and sales potential must always be equal for a mature business.", "Sales potential can exceed current sales volume."],
  ["Primary data are secondary when the survey questions were written by the commissioning firm.", "Tailored questionnaires still produce primary information."],
  ["Government statistics become primary data when a manager reads them in a board meeting.", "Reading published data does not convert secondary information into primary."],
  ["An online survey counts as secondary research because responses are stored electronically.", "Electronic collection does not make a new survey secondary."],
  ["Telephone interviews count as secondary research when the interviewer works for a research institute.", "Institute-conducted interviews for the study are primary collection."],
  ["Trade-association reports are primary because associations are outside the requesting business.", "Outside publisher does not make prior research primary."],
  ["Market share measures total industry sales rather than one firm's proportion of those sales.", "Market share is the firm's proportion, not total industry sales."],
  ["A firm with sales of 50,000 euros in a 1,000,000 euro market holds a fifty per cent absolute share.", "50,000/1,000,000 is 5%, not 50%."],
  ["A firm with sales of 150,000 euros in a 1,000,000 euro market holds a one point five per cent absolute share.", "150,000/1,000,000 is 15%, not 1.5%."],
  ["If absolute share is fifteen per cent and the leader has thirty per cent, relative share equals forty-five per cent.", "Relative share is 15/30 = 0.5, not 45%."],
  ["If absolute share is twenty per cent and the leader has twenty per cent, relative share equals zero.", "Equal shares give relative share of 1.0, not zero."],
  ["Relative market share is expressed as the same percentage figure as absolute market share.", "Relative share is a ratio against the leader, not the same percentage."],
  ["Market size can only be measured in euros and never as a quantity of pieces sold.", "Market size may be expressed as value or quantity."],
  ["Market size can only be measured as units sold and never as a euro value total.", "Market size may be expressed as quantity or value."],
  ["Customer analysis asks where products are manufactured rather than where customers buy them.", "Where-customer analysis concerns purchase location, not factory location."],
  ["Customer analysis asks when products are designed rather than when customers purchase them.", "When-customer analysis concerns purchase timing, not design timing."],
  ["What-customer analysis refers to what price competitors charge rather than what customers do with products.", "What-customers concerns product use, not rival list prices."],
  ["Who-customer analysis refers only to which employees serve customers inside the firm.", "Who-customers concerns market customers, not internal staff."],
  ["Why-customer analysis refers only to why production costs rose rather than why buyers choose products.", "Why-customers concerns purchase motives, not internal cost causes."],
  ["Influencers must always be the same person who completes payment for the product.", "Influencers may differ from the paying buyer."],
  ["A business-to-business market is one where the firm advertises on social media to the general public.", "B2B involves business customers; general public advertising suggests B2C."],
  ["Secondary research requires the firm to conduct personal interviews with every customer in the market.", "Secondary research reuses existing studies rather than new universal interviews."],
  ["Primary research is defined as any information taken from an annual report published last year.", "Prior published reports are secondary, not primary information."],
  ["Market research excludes information about industry conditions and focuses only on internal accounting.", "Industry and competition are within market research scope."],
  ["Gains from competitors are excluded from the concept of sales potential.", "Gains from competitors are listed as part of sales potential."],
  ["A share in the increase of market potential is excluded from sales potential.", "A share in market-potential growth is part of sales potential."],
  ["Absolute market share tells a firm exactly how every smaller rival is performing in detail.", "Absolute share alone gives limited insight into other competitors."],
  ["Relative market share is unnecessary because absolute share already names each competitor.", "Absolute share does not detail rivals; relative share compares with the leader."],
  ["Market volume excludes sales of competing firms and includes only the focal business.", "Market volume sums sales of all firms in the market."],
  ["Sales potential equals current sales volume when market potential exceeds market volume.", "Higher market potential does not force sales potential to equal current volume."],
  ["Questionnaires administered by an institute for a client are secondary because the institute is external.", "External institute collection for a bespoke study is primary."],
  ["Free secondary data are always tailored to each small firm's product line.", "Secondary data are often general, not tailored."],
  ["Costly primary research is affordable for every small business according to the chapter.", "Small businesses often cannot afford extensive primary research."],
  ["Customer analysis is optional and unrelated to market research activities.", "Customer analysis is often an important element of market research."],
  ["Where-customer findings cannot encourage alternative channels because channels are fixed forever.", "Channel analysis can encourage alternative channels."],
  ["When-customer findings cannot support price differentiation across the year.", "Timing analysis can support seasonal price differentiation."],
  ["Preferred product use information cannot guide product improvement.", "Preferred-use knowledge supports development and improvement."],
  ["Prospective customers are excluded from the scope of market research.", "Research covers existing and prospective customers."],
  ["Market share of a brand is calculated using only that brand's costs rather than its sales.", "Share uses sales, not costs, in the numerator."],
  ["Market share uses production capacity in the denominator instead of total market sales.", "The denominator is total market sales, not capacity."],
  ["A relative share of 1.5 means the firm holds one point five per cent of the total market.", "1.5 relative share is a ratio to the leader, not a market percentage."],
  ["A relative share of 0.5 means the firm has withdrawn from half of the geographic market.", "0.5 relative share compares shares with the leader, not geography."],
  ["Primary research cannot study willingness to pay because prices are set only by government.", "Primary research can include willingness-to-pay questions."],
  ["Secondary research always replaces the need for any customer analysis.", "Secondary data may be too general to replace tailored customer analysis."],
  ["Business customers in a B2B market are classified as consumers because they consume products.", "Business customers indicate B2B even if products are consumed in production."],
  ["Household shoppers in a supermarket are classified as business customers in B2B markets.", "Household shoppers indicate B2C, not B2B."],
  ["Market size decreases when every firm's sales in the market rise simultaneously.", "Rising total sales increase market size, not decrease it."],
  ["If two firms each hold twenty per cent absolute share in the same market, relative share of each against the other is two.", "Equal twenty per cent shares give relative share of 1.0 between them if each is the largest."],
];
for (const [s, e] of falseTraps) push(FALSE, s, e);

const falsePads = [
  ["Empirical studies tailored to a business are classified as secondary because they are newly commissioned.", "Tailored empirical studies are primary information."],
  ["Published industry forecasts reused without new collection are primary because they inform strategy.", "Reused forecasts are secondary even when strategically useful."],
  ["Market research data cover only the firm's own accounting records and not customer behaviour.", "Market research addresses customers, rivals, and industry conditions."],
  ["Customer analysis excludes where customers buy because channels are chosen only by producers.", "Where customers buy is an explicit analysis dimension."],
  ["When-customer analysis refers to when the firm was founded rather than when purchases occur.", "When-customers concerns purchase timing."],
  ["Why-customer analysis refers to why the firm exists rather than why buyers choose products.", "Why-customers concerns purchase motives."],
  ["Absolute market share is calculated with market volume in the numerator and firm sales in the denominator.", "Firm sales are the numerator; market volume is the denominator."],
  ["Relative market share uses total market sales as the denominator instead of the leader's share.", "Relative share divides by the largest competitor's share."],
  ["Market potential is below market volume whenever new applications emerge in the industry.", "Potential can exceed volume when unconverted customers remain."],
  ["Sales potential is capped at sales volume even when rivals' customers could be won.", "Gains from competitors can raise sales potential above volume."],
  ["Primary interviews become secondary when summarized in an internal memo for managers.", "Summarizing primary data does not convert collection into secondary research."],
  ["A trade association survey from last year is primary for a member who reads it this year.", "Prior association surveys are secondary for later readers."],
  ["Market share of fifteen per cent means the firm sold fifteen euros for every hundred euros of its own revenue.", "Fifteen per cent is share of market sales, not of the firm's own revenue."],
  ["If the leader holds thirty per cent share, a firm with fifteen per cent has relative share of two.", "15/30 is 0.5, not 2."],
  ["If the leader holds ten per cent share, a firm with twenty per cent has relative share of zero point five.", "20/10 is 2.0, not 0.5."],
  ["B2C classification applies when industrial buyers purchase components for factory assembly lines.", "Factory assembly buyers indicate B2B, not B2C."],
  ["B2B classification applies when individuals buy clothing for personal use in a retail store.", "Personal retail purchases indicate B2C, not B2B."],
  ["Influencers must hold legal title to the product before they can affect a purchase decision.", "Influencers may affect decisions without holding title."],
  ["What-customer research examines what shareholders earn rather than what customers do with goods.", "What-customers concerns product use by buyers."],
  ["Where-customer research examines where raw materials are mined rather than where purchases occur.", "Where-customers concerns purchase location."],
  ["Market size for a category equals the sales of the market leader alone.", "Market size is total sales of all businesses."],
  ["Market share can be computed without knowing total sales of all firms in the market.", "Total market sales are required in the denominator."],
  ["Secondary data are primary when downloaded from a government website by an employee.", "Download method does not make prior research primary."],
  ["Primary data are secondary when the sample size exceeds one thousand respondents.", "Large samples still produce primary information."],
  ["Customer analysis excludes prospective buyers and studies only past purchasers.", "Prospective buyers are within research scope."],
  ["Seasonal fluctuations cannot inform production planning according to customer-analysis timing data.", "Timing analysis supports planning ahead for seasonal demand."],
  ["Motive research cannot affect market-share strategies because share is fixed by regulation.", "Motives inform development and share enhancement."],
  ["Gains from competitors are part of market volume rather than sales potential.", "Gains from competitors belong to sales potential."],
  ["Share in market-potential growth is part of market volume rather than sales potential.", "Market-potential growth share belongs to sales potential."],
  ["Investors ignore absolute market share because only relative share appears in annual reports.", "Absolute share is relevant to investors per the chapter."],
  ["Relative share compares a firm with the smallest competitor rather than the largest.", "Relative share uses the largest competitor's share."],
  ["A questionnaire sent by post is secondary whereas an online questionnaire is primary.", "Both are primary when newly collected for the study."],
  ["Reading a competitor's published market review creates primary data for the reader's firm.", "Competitor publications used without new collection are secondary."],
  ["Market research excludes competition because rivals refuse to share any information.", "Competition is explicitly within market research scope."],
  ["Children influencing purchases means children must be the legal buyers in B2C markets.", "Children may influence without being the buyer."],
  ["User and buyer must coincide in B2B markets because businesses sign one contract per person.", "User and buyer may differ even in B2B settings."],
  ["Channel weakness cannot be detected because customers never reveal where they shop.", "Where analysis is designed to identify purchase channels."],
  ["Price differentiation over the year is unrelated to when-customer purchase patterns.", "Timing analysis can support seasonal price differentiation."],
  ["Market volume plus potential customers equals sales volume of one firm.", "That confuses market measures with a single firm's sales volume."],
  ["Sales potential minus sales volume always equals zero in growing markets.", "Sales potential can exceed current sales volume in growing markets."],
  ["Fifteen per cent absolute share means the market is fifteen times larger than the firm's sales.", "The market is about 6.67 times larger (100/15), not fifteen times."],
  ["A relative share of one means the firm has one per cent of total market sales.", "Relative share of 1.0 means equal percentage with the leader, not 1% market share."],
  ["Primary research is secondary when conducted for another industry and later read by a different firm.", "Research for another purpose read later is secondary."],
  ["Secondary research is primary when the business pays a fee to access an industry database.", "Paying for access does not convert existing research into primary collection."],
  ["Customer analysis dimensions are limited to who and what only.", "Who, what, where, when, and why are all included."],
  ["Market size expressed in pieces sold cannot be compared with market size expressed in euros.", "Both are expressions of market size or volume."],
  ["Absolute and relative market share always produce identical numerical results.", "They measure different relationships and need not match numerically."],
  ["Market research institutes collect secondary data because they are independent organisations.", "Institute collection for a bespoke study is primary."],
  ["Small firms always prefer primary research because it is cheaper than secondary sources.", "Primary is costly; small firms often cannot afford it."],
  ["Why-customer motives are recorded only after sales fall to zero.", "Why analysis informs development before collapse."],
  ["Where-customer data show factory locations of suppliers rather than customer purchase points.", "Where-customers concerns purchase location."],
  ["When-customer data refer to product warranty periods rather than purchase dates.", "When-customers concerns purchase timing."],
  ["Market share rises automatically when market size falls even if the firm's sales are unchanged.", "Unchanged firm sales with smaller market raise share, but not automatically in every scenario described."],
  ["A firm's sales potential falls when market potential rises because competition intensifies.", "Rising market potential can contribute to higher sales potential."],
  ["Primary empirical studies cannot be tailored to specific business interests.", "Primary studies can be tailored to the commissioning firm."],
  ["Secondary information is always more detailed than primary data for one product line.", "Secondary data are usually general, not more detailed."],
  ["Relative market share of 0.5 always means the firm holds fifty per cent of the market.", "0.5 means half the leader's percentage share, not fifty per cent of the market."],
  ["Absolute market share of fifty per cent means relative share must also equal fifty.", "Absolute percentage and relative ratio measure different comparisons."],
  ["Customer analysis excludes analysis of whether buyers also purchase rival products.", "Primary research can ask about similar rival products."],
  ["Market volume is the sum of market potential and sales potential for one firm.", "Market volume is total current sales; it is not that sum."],
  ["Sales volume for one firm is the same concept as market volume for the whole market.", "Sales volume is one firm; market volume is all firms."],
  ["B2B customers are consumers whenever they personally use a product at work.", "Business purchasers for work still indicate B2B."],
  ["Prospective customers are counted in market volume before they make any purchase.", "Market volume reflects current sales, not unconverted prospects alone."],
  ["Questionnaire analysis costs are excluded from the cost of primary market research.", "Analysis costs are part of primary research expense."],
  ["Telephone interviews are secondary when answers are recorded on a computer.", "Recording method does not make interviews secondary."],
  ["Online surveys are secondary because respondents type answers without an interviewer present.", "Self-completion online surveys are still primary collection."],
  ["Government agency research is primary for every firm that later cites the publication.", "Prior agency research is secondary for later users."],
  ["Association research is tailored to each member's product line by default.", "Association research is typically general secondary information."],
  ["Market share can be measured without distinguishing absolute from relative concepts.", "The chapter distinguishes absolute and relative market share."],
  ["A firm trailing the leader always has relative market share above one.", "Trailing the leader implies relative share below one."],
  ["A firm matching the leader's percentage share has relative market share below one.", "Matching the leader gives relative share of 1.0."],
  ["Market research on when customers buy cannot support differentiated pricing.", "Timing analysis can support price differentiation over the year."],
  ["Why-customer research is limited to price motives and excludes quality preferences.", "Why analysis covers motives and preferences broadly."],
  ["What-customer research excludes how products are used in daily operations.", "Preferred use is central to what-customer analysis."],
  ["Where-customer research excludes online channels because only stores matter.", "Online purchase locations are part of where analysis."],
  ["Who-customer research excludes distinguishing B2B from B2C markets.", "Who analysis distinguishes consumer and business customers."],
  ["Primary research never uses questionnaires because they are too expensive for any firm.", "Questionnaires are listed primary methods despite cost."],
  ["Secondary research never comes from government agencies according to the chapter.", "Government agencies are listed secondary sources."],
  ["Market size and market share use the same formula with identical numerators and denominators.", "Size is total market sales; share is firm sales over total."],
  ["Sales potential excludes any share of growth in overall market potential.", "A share in market-potential increase is part of sales potential."],
  ["Gains from competitors are excluded when estimating how far sales could rise.", "Gains from competitors are part of sales potential."],
  ["Investors disregard market share because only profit margins matter for valuation.", "Absolute share is noted as relevant to investors."],
  ["Children never appear in customer-analysis examples about influence on purchases.", "Children influencing purchases paid by adults is a textbook example."],
  ["Buyer and user must differ in every single purchase transaction.", "They may differ but need not differ in every case."],
  ["Market potential shrinks when unconverted customers enter the market.", "Unconverted customers tend to keep potential above current volume."],
  ["Relative share is calculated before absolute share in the textbook sequence.", "Absolute share is defined before relative share uses it."],
  ["A fifteen per cent absolute share combined with a thirty per cent leader share gives relative share of forty-five.", "15/30 equals 0.5, not 45."],
  ["Market research excludes learning what customers think about products.", "Primary research can ask what customers think about products."],
  ["Empirical studies are secondary when results are published in a trade journal.", "Publication does not retroactively make bespoke collection secondary."],
  ["Existing research by other businesses is primary when it is recent.", "Recency does not make others' prior research primary for a new user."],
  ["Customer analysis is separate from market research and never combined in practice.", "Customer analysis is often an important element of market research."],
  ["Channel weaknesses cannot be addressed because distribution is fixed by law.", "Analysis can encourage alternative channels when weaknesses appear."],
  ["Seasonal production planning ignores when-customer timing insights.", "Timing analysis supports planning ahead for seasonal fluctuations."],
  ["Absolute market share uses the leader's sales as the numerator.", "Absolute share uses the firm's own sales in the numerator."],
  ["Relative market share is expressed only as a percentage of total market sales.", "Relative share is a ratio to the leader, not a market percentage."],
  ["Market volume for all firms is smaller than sales volume of one large company.", "Market volume aggregates all firms and exceeds one firm's sales."],
  ["Primary data become secondary once analysed and presented in charts.", "Analysis presentation does not reclassify primary collection as secondary."],
  ["Secondary data become primary when a manager photocopies an industry report.", "Copying a report does not create primary empirical research."],
  ["A components manufacturer must ignore published forecasts and collect only primary data.", "Firms may combine secondary forecasts with primary studies."],
  ["Willingness-to-pay questions belong only to secondary government surveys.", "Willingness to pay can be studied in tailored primary research."],
  ["Market share of a brand is undefined when brands compete in the same category.", "Brand share can be calculated within a category."],
  ["Relative share above one means the firm is smaller than the largest competitor.", "Relative share above one means exceeding the leader's percentage."],
  ["Relative share below one means the firm exceeds the largest competitor's share.", "Relative share below one means trailing the leader."],
  ["Market research excludes industry trends because trends are macroeconomic only.", "Industry development is part of market research scope."],
  ["Prospective buyers are irrelevant when estimating market potential.", "Potential customers relate to market potential above volume."],
  ["What-customer analysis is about what suppliers produce rather than what buyers do with goods.", "What-customers concerns buyer use, not supplier output."],
  ["Why-customer analysis cannot inform advertising messages.", "Motive insight can guide promotional emphasis."],
  ["Where-customer analysis cannot reveal online purchase growth.", "Online channels are part of where-customer research."],
  ["When-customer analysis cannot identify holiday peaks.", "Seasonal peaks are identified through when analysis."],
  ["Who-customer analysis cannot separate consumer from business purchasers.", "B2C and B2B distinction is part of who analysis."],
  ["Primary research is defined as information already collected by government agencies.", "Government prior research is secondary, not primary."],
  ["Secondary research requires new empirical collection for each business every year.", "Secondary reuses existing research rather than new universal collection."],
  ["Market size falls when every competitor increases its unit sales.", "Rising total unit sales increase market size."],
  ["Sales volume of one firm equals market volume when the firm is the market leader.", "Market volume sums all firms, not just the leader."],
  ["Absolute share of twenty per cent means relative share must be twenty against any leader.", "Relative share depends on the leader's percentage."],
  ["A market of 1,000,000 euros with firm sales of 100,000 euros gives a ninety per cent share.", "100,000/1,000,000 is 10%, not 90%."],
  ["A market of 2,000,000 euros with firm sales of 500,000 euros gives a four per cent share.", "500,000/2,000,000 is 25%, not 4%."],
  ["Market potential is identical to sales potential for the entire industry.", "Market potential and sales potential apply at different levels."],
  ["Sales potential for one firm aggregates market volume for all competitors.", "Sales potential is firm-level; market volume is industry-level."],
  ["Customer analysis excludes grandparents who influence family purchases.", "Influencers such as grandparents may shape decisions."],
  ["Influencers always pay for products they recommend to others.", "Influencers may recommend without paying."],
  ["Primary questionnaires are secondary when distributed through email.", "Email distribution does not make questionnaires secondary."],
  ["Institute-collected interviews are secondary because the institute is a third party.", "Third-party collection for a bespoke study is primary."],
  ["Free secondary data are always outdated and therefore primary when less than one year old.", "Age alone does not convert secondary data into primary."],
  ["Cost barriers to primary research apply only to multinational corporations.", "Small businesses especially face affordability limits."],
  ["Market share calculations use costs of production instead of sales revenue.", "Share uses sales, not production costs."],
  ["Relative market share subtracts the leader's share from the firm's share.", "Relative share is a ratio, not a subtraction."],
  ["Absolute market share multiplies firm sales by total market sales.", "Absolute share divides firm sales by market sales."],
  ["Market research never examines competition because antitrust law forbids it.", "Competition is within market research scope."],
  ["Customer analysis never informs distribution strategy.", "Where analysis informs channel strategy."],
  ["When analysis never informs pricing across seasons.", "Timing can support seasonal price differentiation."],
  ["Why analysis never informs product development.", "Motives inform product development."],
  ["What analysis never informs product improvement.", "Preferred use guides improvement."],
  ["Who analysis never distinguishes buyers from users.", "Buyer and user may differ."],
  ["B2C markets involve businesses buying raw materials for factories.", "Business raw-material buyers indicate B2B."],
  ["B2B markets involve households buying groceries for personal consumption.", "Household grocery purchases indicate B2C."],
  ["Market volume excludes potential customers not yet buying.", "Volume is current sales; potential customers relate to market potential."],
  ["Market potential equals current volume when every possible buyer already purchases.", "That special case is not the general assumption in the chapter."],
  ["Sales potential cannot include gains from winning rival customers.", "Gains from competitors are part of sales potential."],
  ["Published forecasts from research firms are primary for firms that did not commission them.", "Reused forecasts are secondary for non-commissioning readers."],
  ["Tailored empirical studies commissioned by a firm are secondary because results are shared.", "Sharing results does not make bespoke collection secondary."],
  ["Customer analysis dimensions number three rather than five in the textbook framework.", "Five dimensions who, what, where, when, why are listed."],
  ["Market size is called market share in the textbook definitions.", "Market size or volume differs from market share proportion."],
  ["Relative share replaces absolute share in investor discussions exclusively.", "Both measures exist; absolute share is investor-relevant too."],
  ["Primary research never explores whether customers buy rival products.", "Primary research can ask about similar rival products."],
  ["Secondary research always includes willingness-to-pay questions for each firm.", "Secondary data are general and may lack such detail."],
  ["Market research data exclude industry conditions because they are confidential.", "Industry conditions are within research scope."],
  ["A relative share of 2.0 means the firm holds two per cent of market sales.", "2.0 relative share doubles the leader's percentage, not 2% of market."],
  ["A relative share of 0.25 means the firm's absolute share is twenty-five per cent.", "0.25 relative share is a ratio to the leader, not necessarily 25% absolute."],
  ["Firm sales of 300,000 in a 1,500,000 market give a two per cent absolute share.", "300,000/1,500,000 is 20%, not 2%."],
  ["Firm sales of 60,000 in a 300,000 market give a fifty per cent absolute share.", "60,000/300,000 is 20%, not 50%."],
  ["Leader share of forty per cent with firm share of ten per cent gives relative share of four.", "10/40 is 0.25, not 4."],
  ["Leader share of twenty-five per cent with firm share of fifty per cent gives relative share of zero point five.", "50/25 is 2.0, not 0.5."],
];
for (const [s, e] of falsePads) push(FALSE, s, e);

// Additional TRUE statements to reach 300+
const industries = [
  "printed circuit boards",
  "industrial adhesives",
  "commercial laundry equipment",
  "enterprise accounting software",
  "organic breakfast cereals",
  "electric vehicle chargers",
  "medical diagnostic kits",
  "warehouse automation systems",
  "specialty coffee roasting",
  "renewable-energy inverters",
];
const researchActs = [
  "commissioning a tailored questionnaire",
  "running telephone interviews with buyers",
  "analysing responses from an online survey",
  "hiring an institute to conduct field interviews",
  "designing a primary study around channel preferences",
];
for (let i = 0; i < industries.length; i++) {
  const ind = industries[i];
  const act = researchActs[i % researchActs.length];
  // Unique figure pairs per industry (clean percentages; no cloned 90/600 stamp).
  const firmSales = 40 + i * 17;
  const marketSales = firmSales * (5 + (i % 4)); // absolute share = 1/(5..8) → 12.5%–20%
  const absPct = Math.round((firmSales / marketSales) * 1000) / 10;
  const leaderPct = absPct * (2 + (i % 3) * 0.5);
  const rel = Number((absPct / leaderPct).toFixed(2));
  push(
    TRUE,
    `A supplier in the ${ind} segment may improve positioning by ${act} before launching an updated product line.`,
    `Tailored primary research such as ${act} supports informed decisions in the ${ind} market.`,
  );
  push(
    TRUE,
    `Published trade statistics on the ${ind} market can serve as secondary information when estimating total industry sales.`,
    `Trade statistics reused for the ${ind} segment are secondary market information.`,
  );
  push(
    TRUE,
    `Customer analysis in the ${ind} market may ask where buyers purchase, when demand peaks, and why they prefer one supplier.`,
    `Where, when, and why dimensions apply alongside other customer analysis in ${ind}.`,
  );
  push(
    TRUE,
    `If a ${ind} producer sells ${firmSales} million euros in a ${marketSales} million euro market, its absolute market share is ${absPct} per cent.`,
    `${firmSales} divided by ${marketSales} equals ${absPct}% absolute share in the ${ind} example.`,
  );
  push(
    TRUE,
    `With ${absPct} per cent absolute share and a leading rival at ${leaderPct} per cent in ${ind}, relative market share equals ${rel}.`,
    `${absPct}/${leaderPct} yields ${rel} relative share against the leader in ${ind}.`,
  );
  push(
    TRUE,
    `Market potential in ${ind} may exceed current market volume when buyers not yet served could enter the category.`,
    `Unconverted buyers keep market potential above volume in ${ind}.`,
  );
  push(
    TRUE,
    `Sales potential for one ${ind} firm can exceed its current sales volume through gains from competitors and market growth.`,
    `Sales potential includes room beyond current volume for a ${ind} supplier.`,
  );
}

const buyerTypes = [
  ["procurement managers", "business-to-business"],
  ["household consumers", "business-to-consumer"],
  ["fleet operators", "business-to-business"],
  ["retail shoppers", "business-to-consumer"],
  ["hospital purchasing committees", "business-to-business"],
  ["online subscribers", "business-to-consumer"],
  ["factory maintenance teams", "business-to-business"],
  ["gift buyers", "business-to-consumer"],
];
for (const [buyer, mkt] of buyerTypes) {
  push(
    TRUE,
    `Researching ${buyer} as customers indicates the firm is studying a ${mkt} market segment.`,
    `${buyer} as customers align with ${mkt} classification in who-customer analysis.`,
  );
  push(
    TRUE,
    `Primary interviews with ${buyer} can reveal why they prefer one brand and what they do with the product after purchase.`,
    `Why and what dimensions can be explored with ${buyer} in primary research.`,
  );
}

const measures = [
  ["value in euros", "monetary totals across all sellers"],
  ["units shipped", "quantities sold across the market"],
  ["tonnes delivered", "physical quantity totals in the market"],
  ["licence seats sold", "count-based market volume in software"],
  ["room nights booked", "quantity measure in hospitality markets"],
];
for (const [expr, desc] of measures) {
  push(
    TRUE,
    `Expressing market size through ${expr} is consistent with measuring market volume as ${desc}.`,
    `Market size may be expressed as ${expr}, reflecting ${desc}.`,
  );
}

const extraTrue = [
  ["Market research helps a components manufacturer judge whether substrate demand will grow in coming years.", "Industry development research supports forward position assessment."],
  ["A firm may read secondary Prismark-style forecasts before estimating its share of an electronics submarket.", "Secondary forecasts inform share estimation in technology markets."],
  ["Customer analysis of preferred use can show whether buyers deploy a product in harsh industrial environments.", "What-customer use settings guide robust product design."],
  ["Where-research may reveal that business buyers increasingly order through integrated procurement portals.", "B2B channel shifts appear in where-customer analysis."],
  ["When-research on replacement cycles can show multi-year intervals between repeat purchases.", "Timing analysis covers replacement intervals as well as seasons."],
  ["Why-research may find that compliance certification outweighs minor price differences for medical buyers.", "Regulatory motives appear in why-customer analysis."],
  ["Absolute share of eight per cent in a fragmented market still informs investors about scale of operations.", "Even modest absolute share is investor-relevant information."],
  ["Relative share of 0.8 against the leader signals the firm trails but remains a substantial competitor.", "Relative share below one indicates trailing the leader."],
  ["Relative share of 1.2 signals the firm holds a larger percentage share than its largest rival.", "Relative share above one exceeds the leader's percentage."],
  ["Market volume sums revenue from all vendors offering substitutable products in the defined market.", "Substitutable offerings define the market for volume totals."],
  ["Sales volume for one vendor is only part of the market volume that forms the share denominator.", "One vendor's sales are a subset of total market volume."],
  ["Primary research on support needs can distinguish customers wanting on-site service from those preferring remote help.", "Support preferences are addressable in tailored primary studies."],
  ["Secondary industry reviews may describe AIM segments alongside communication and consumer segments in electronics.", "Segment breakdowns can appear in secondary industry reports."],
  ["New applications such as wearables may expand long-term market potential beyond current CCC-dominated volume.", "Emerging applications can raise long-term market potential."],
  ["Questionnaire design in primary research can test whether buyers also purchase substitute brands.", "Rival purchasing can be asked directly in primary questionnaires."],
  ["Personal interviews allow follow-up questions when a respondent's answer about purchase motives is unclear.", "Interviews support clarification in why-customer research."],
  ["Government open-data portals may provide secondary statistics on sector output and employment.", "Government open data are secondary sources for market learning."],
  ["Association membership surveys conducted for the sector are secondary for an individual member firm reading results.", "Sector surveys are secondary for member firms using published results."],
  ["Who-research clarifies whether the paying entity is a household, a company, or an institution.", "Who analysis identifies the type of purchasing entity."],
  ["What-research on software can examine whether clients use modules for payroll, inventory, or customer records.", "Module use is part of what-customer analysis for software."],
  ["Where-research comparing direct and indirect channels can expose over-reliance on a single retailer.", "Channel concentration risk appears in where analysis."],
  ["When-research on subscription renewals can identify months with unusually high churn or upgrade rates.", "Renewal timing is part of when-customer analysis."],
  ["Why-research comparing eco-labels and price may show heterogeneous motives across customer segments.", "Segment-specific motives appear in why analysis."],
  ["Investors comparing two firms may examine absolute share first before comparing relative position to the leader.", "Absolute share is a starting point before relative comparison."],
  ["A marketing team may set share targets using sales potential estimates that include winnable rival accounts.", "Winnable rival accounts feed sales potential estimates."],
  ["Market research on competition identifies whether rivals are gaining share in the same product category.", "Competitive share shifts are part of market research scope."],
  ["Tailoring a primary study avoids paying for questions irrelevant to the commissioning firm's product line.", "Tailoring limits primary research to relevant questions."],
  ["Secondary data may describe national totals while primary work later targets one region in detail.", "Secondary breadth can precede regional primary focus."],
  ["Children recommending educational apps while parents subscribe illustrates influencer effects in digital B2C markets.", "Influencers operate in digital B2C as well as physical retail."],
  ["Grandparents gifting products chosen partly by grandchildren shows influencers who are neither buyer nor user.", "Influencers need not be buyer or primary user."],
  ["A user in a business may specify technical requirements while a procurement officer signs the contract.", "Technical users and signing buyers can differ in B2B."],
  ["Preferred-use insight can justify adding features for outdoor operation rather than office use only.", "Use context steers feature prioritisation."],
  ["Weak performance in one retail chain identified through where-data may prompt reallocation to online sales.", "Where findings can trigger channel reallocation."],
  ["Advance production of seasonal goods follows when-data showing demand spikes before public holidays.", "Holiday spikes in when-data support advance production."],
  ["Advertising that stresses durability responds to why-data showing longevity as the decisive purchase motive.", "Why-data can steer advertising emphasis."],
  ["Market size growth from 2.0 billion to 2.1 billion euros indicates a larger value-based market volume.", "Higher euro totals mean larger value-based market size."],
  ["Market size of 4.5 million units sold indicates quantity-based market volume across the category.", "Unit counts express quantity-based market size."],
  ["Dividing 75,000 euros of firm sales by 500,000 euros of market sales yields fifteen per cent absolute share.", "75/500 equals 15% absolute market share."],
  ["Dividing 200,000 euros of firm sales by 800,000 euros of market sales yields twenty-five per cent absolute share.", "200/800 equals 25% absolute market share."],
  ["Dividing 30,000 euros of firm sales by 1,200,000 euros of market sales yields two point five per cent absolute share.", "30/1,200 equals 2.5% absolute market share."],
  ["With absolute share ten per cent and leader share twenty per cent, relative market share equals 0.5.", "10/20 gives relative share of 0.5."],
  ["With absolute share twelve per cent and leader share twelve per cent, relative market share equals 1.0.", "12/12 gives relative share of 1.0."],
  ["With absolute share thirty per cent and leader share twenty per cent, relative market share equals 1.5.", "30/20 gives relative share of 1.5."],
  ["Market potential includes demand from buyers who might enter if products better match their needs.", "Better-matched products can convert potential into volume."],
  ["Sales potential includes revenue that could be won if the firm captures a portion of unmet category demand.", "Unmet demand can raise a firm's sales potential."],
  ["Research institutes analysing primary data produce interpretations tailored to the commissioning client's brief.", "Institute analysis serves the client's tailored primary study."],
  ["Free secondary reports may still underrepresent niche buyer segments that primary research later targets.", "Secondary generality can miss niches addressed in primary work."],
];
for (const [s, e] of extraTrue) push(TRUE, s, e);

// Verify pool sizes
if (TRUE.length < 300) throw new Error(`TRUE pool too small: ${TRUE.length}`);
if (FALSE.length < 200) throw new Error(`FALSE pool too small: ${FALSE.length}`);
if (SCENE.length < 15) throw new Error(`SCENE too small: ${SCENE.length}`);
if (THEORY.length < 85) throw new Error(`THEORY too small: ${THEORY.length}`);
if (TITLES.length < 100) throw new Error(`TITLES too small: ${TITLES.length}`);

const cases = buildCases({
  subsection: "5.5",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
