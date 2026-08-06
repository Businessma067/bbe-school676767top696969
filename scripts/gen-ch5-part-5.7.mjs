/**
 * Generate scripts/ch5-part-5.7.json — 100 cases for subsection 5.7 (The marketing mix).
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"))["5.7"];
const OUT = "scripts/ch5-part-5.7.json";

const SCENE = [
  "Consider a consumer electronics firm offering several laptop variants, monitors, and printers while refreshing packaging colours for one model. Evaluate the following economic assertions:",
  "Consider a regional ice-cream producer adding new flavours within its existing range and later introducing a yogurt line. Evaluate the following economic assertions:",
  "Consider a cosmetics business that relies on a recognisable brand symbol, stable quality standards, and occasional relaunches of packaging. Evaluate the following economic assertions:",
  "Consider a household detergent manufacturer whose mature product shows high market share in a slow-growing market. Evaluate the following economic assertions:",
  "Consider a start-up launching an innovative fitness tracker with heavy advertising, low introductory prices, and online-only sales. Evaluate the following economic assertions:",
  "Consider a bakery chain selling through own shops while also supplying selected supermarkets via a wholesaler. Evaluate the following economic assertions:",
  "Consider a fashion retailer running seasonal sales events, window displays, and social-media campaigns for a new collection. Evaluate the following economic assertions:",
  "Consider a beverage company using charm pricing on supermarket shelves and trade discounts for large retailers. Evaluate the following economic assertions:",
  "Consider a software firm offering cloud subscriptions, technical support services, and tailored business packages. Evaluate the following economic assertions:",
  "Consider a car-parts supplier with three business units serving mobile devices, automotive systems, and power modules respectively. Evaluate the following economic assertions:",
  "Consider a book publisher selling through bookshops, online platforms, and direct school supply contracts. Evaluate the following economic assertions:",
  "Consider a snack producer whose fad product peaks quickly, declines within months, and faces elimination from the range. Evaluate the following economic assertions:",
  "Consider a hotel group harmonising room rates, loyalty discounts, brochure advertising, and reservation channels. Evaluate the following economic assertions:",
  "Consider a furniture retailer combining showroom display, home-delivery logistics, and finance instalment offers. Evaluate the following economic assertions:",
  "Consider a pharmaceutical firm investing in personal selling to doctors while maintaining strict product quality and brand trust. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review the marketing mix as a harmonised blend of product, price, place, and promotion tools. Evaluate the following economic assertions:",
  "Analyze how the four Ps of the marketing mix support meeting targeted customers' needs and wants. Evaluate the following economic assertions:",
  "Review Figure 15 on the four elements of the marketing mix based on market research. Evaluate the following economic assertions:",
  "Analyze the product element of the marketing mix as the first P covering goods and services offered. Evaluate the following economic assertions:",
  "Review how product lines and product-mix width relate to a business's product strategy. Evaluate the following economic assertions:",
  "Analyze the role of brands in product differentiation, recognition, and loyalty within the product P. Evaluate the following economic assertions:",
  "Review minor packaging and colour changes as a relaunch within product-mix alteration. Evaluate the following economic assertions:",
  "Analyze line extension versus mix extension within product-mix expansion strategies. Evaluate the following economic assertions:",
  "Review product-mix strategies of expansion, alteration, and contraction in Figure 16. Evaluate the following economic assertions:",
  "Analyze the product life cycle model of introduction, growth, maturity, and decline stages. Evaluate the following economic assertions:",
  "Review how sales volume and profit patterns differ across product life cycle stages. Evaluate the following economic assertions:",
  "Analyze the Boston Consulting Group matrix using relative market share and market growth. Evaluate the following economic assertions:",
  "Review BCG categories of stars, question marks, cash cows, and poor dogs. Evaluate the following economic assertions:",
  "Analyze how a question mark arises from low relative share in a rapidly growing market. Evaluate the following economic assertions:",
  "Review how stars combine strong market share with continued market growth. Evaluate the following economic assertions:",
  "Analyze cash cows as high-share products in markets with low growth. Evaluate the following economic assertions:",
  "Review poor dogs as products with low share and low market growth near decline. Evaluate the following economic assertions:",
  "Analyze the price element of the marketing mix as the amount customers pay for the offering. Evaluate the following economic assertions:",
  "Review how introductory prices may be set low to attract customers at product launch. Evaluate the following economic assertions:",
  "Analyze cost-plus pricing as a price tool that adds a markup to production costs. Evaluate the following economic assertions:",
  "Review penetration pricing as a strategy that sets a low price to gain market share quickly. Evaluate the following economic assertions:",
  "Analyze price skimming as setting a high initial price before lowering it over time. Evaluate the following economic assertions:",
  "Review competitive pricing that aligns the offering's price with rival products in the market. Evaluate the following economic assertions:",
  "Analyze psychological pricing such as charm prices that influence customer perceptions. Evaluate the following economic assertions:",
  "Review discounts, payment terms, and allowances as tools within the price P. Evaluate the following economic assertions:",
  "Analyze the place element of the marketing mix as distribution to a convenient location for customers. Evaluate the following economic assertions:",
  "Review direct distribution where a business sells products without intermediaries to buyers. Evaluate the following economic assertions:",
  "Analyze indirect distribution through wholesalers and retailers to reach final consumers. Evaluate the following economic assertions:",
  "Review how wholesalers purchase in bulk and resell to retailers within distribution channels. Evaluate the following economic assertions:",
  "Analyze how retailers make products available to end customers at the point of purchase. Evaluate the following economic assertions:",
  "Review online sales channels as part of place decisions alongside physical outlets. Evaluate the following economic assertions:",
  "Analyze how place decisions focus on customer access rather than the firm's own headquarters location. Evaluate the following economic assertions:",
  "Review the promotion element of the marketing mix as communicating a message to promote sales. Evaluate the following economic assertions:",
  "Analyze advertising as a promotional tool that informs and persuades target customers. Evaluate the following economic assertions:",
  "Review sales promotion activities such as sales events and short-term incentives. Evaluate the following economic assertions:",
  "Analyze personal selling as direct promotional contact between sales staff and customers. Evaluate the following economic assertions:",
  "Review public relations as promotion that builds a favourable image of the business or brand. Evaluate the following economic assertions:",
  "Analyze heavy promotional spending during the introduction phase of the product life cycle. Evaluate the following economic assertions:",
  "Review how promotion in the growth stage supports maintaining a star's market position. Evaluate the following economic assertions:",
  "Analyze how reduced promotion spending may accompany cash-cow products in low-growth markets. Evaluate the following economic assertions:",
  "Review the basic marketing-mix idea of providing a good at an affordable price at a convenient place. Evaluate the following economic assertions:",
  "Analyze how market research underpins decisions across all four Ps of the marketing mix. Evaluate the following economic assertions:",
  "Review how product-mix contraction eliminates products or lines when relaunch seems unpromising. Evaluate the following economic assertions:",
  "Analyze economies of scale during the growth stage as output rises and average costs may fall. Evaluate the following economic assertions:",
  "Review how increased competition in maturity can lower prices and raise promotional costs. Evaluate the following economic assertions:",
  "Analyze how a fad product may have a very short life cycle withdrawn in under a year. Evaluate the following economic assertions:",
  "Review detergents and toothpaste as examples of products with long maturity phases. Evaluate the following economic assertions:",
  "Analyze how brands can render trust and safety of choice for customers when travelling abroad. Evaluate the following economic assertions:",
  "Review how a business specialising in one product line contrasts with diversifying product-mix width. Evaluate the following economic assertions:",
  "Analyze increasing the depth of a product line through additional variants within one line. Evaluate the following economic assertions:",
  "Review how major product changes differ from minor relaunches when customer needs shift. Evaluate the following economic assertions:",
  "Analyze how the product P remains at the heart of marketing as the most important decision. Evaluate the following economic assertions:",
  "Review how the four Ps interact when a promotional event coincides with a temporary price reduction. Evaluate the following economic assertions:",
  "Analyze how place convenience supports the marketing-mix goal of accessible purchase locations. Evaluate the following economic assertions:",
  "Review how promotional messages should align with the targeted segment's needs identified in research. Evaluate the following economic assertions:",
  "Analyze how a harmonised marketing mix blends tools rather than optimising one P in isolation. Evaluate the following economic assertions:",
  "Review how line extension increases depth while mix extension increases the number of product lines. Evaluate the following economic assertions:",
  "Analyze how elimination of a product line reflects contraction within the product-mix strategy. Evaluate the following economic assertions:",
  "Review how a product nearing decline may show falling sales and profits with low market growth. Evaluate the following economic assertions:",
  "Analyze how stars require continued investment in promotion and production facilities. Evaluate the following economic assertions:",
  "Review how cash cows generate high revenues with lower investment as market growth slows. Evaluate the following economic assertions:",
  "Analyze how poor dogs combine low relative market share with low market growth. Evaluate the following economic assertions:",
  "Review price differentiation that charges different prices to distinct customer groups or channels. Evaluate the following economic assertions:",
  "Analyze list price and trade discounts as components of the overall price decision. Evaluate the following economic assertions:",
  "Review selective distribution that limits outlets to maintain brand positioning and service quality. Evaluate the following economic assertions:",
  "Analyze intensive distribution that places products in many outlets to maximise customer convenience. Evaluate the following economic assertions:",
  "Review exclusive distribution through a limited number of specialised retail partners. Evaluate the following economic assertions:",
  "Analyze sales force deployment as part of the promotion mix for business customers. Evaluate the following economic assertions:",
  "Review how packaging and labelling form part of the product P alongside the core good or service. Evaluate the following economic assertions:",
  "Analyze how services such as technical support count as products within the first P. Evaluate the following economic assertions:",
  "Review how a USP can be reinforced through brand symbols and consistent global presentation. Evaluate the following economic assertions:",
  "Analyze how product portfolio decisions map onto BCG categories across different market conditions. Evaluate the following economic assertions:",
  "Review how profits tend to peak in the maturity stage of the product life cycle. Evaluate the following economic assertions:",
  "Analyze introduction-phase losses from development costs before sales revenues begin. Evaluate the following economic assertions:",
  "Review how promotional tools communicate the intended message behind the marketing mix. Evaluate the following economic assertions:",
  "Analyze how place and promotion together influence whether customers encounter the product offer. Evaluate the following economic assertions:",
  "Review how price and product quality signals interact in customer perceptions of value. Evaluate the following economic assertions:",
  "Analyze how altering an existing product range differs from eliminating it from the portfolio. Evaluate the following economic assertions:",
  "Review how a business unit portfolio may address different segments with distinct product characteristics. Evaluate the following economic assertions:",
  "Analyze how the marketing mix provides goods at affordable prices in convenient places with clear messages. Evaluate the following economic assertions:",
  "Review how relative market share is plotted against market growth in the BCG matrix framework. Evaluate the following economic assertions:",
  "Analyze how low introductory prices and heavy promotion can accompany the launch phase. Evaluate the following economic assertions:",
  "Review how channel partners extend place reach when a firm chooses indirect distribution. Evaluate the following economic assertions:",
  "Analyze how brand loyalty encourages repeat purchase within the product element of the mix. Evaluate the following economic assertions:",
  "Review how contraction removes underperforming lines when alteration and relaunch are insufficient. Evaluate the following economic assertions:",
  "Analyze how the four Ps must be coordinated to meet the targeted market's needs and wants. Evaluate the following economic assertions:",
];

const sceneIndices = [
  1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73,
];

const TITLES = [
  "Marketing Mix Four Ps Overview",
  "Harmonised Blend of Marketing Tools",
  "Product P at the Heart of Marketing",
  "Product Lines and Mix Width",
  "Brands and Product Differentiation",
  "Relaunch Versus Major Alteration",
  "Line Extension Within a Product Line",
  "Mix Extension Adding New Lines",
  "Product-Mix Expansion Strategies",
  "Product-Mix Alteration and Contraction",
  "Introduction Stage of Product Life Cycle",
  "Growth Stage Sales and Profit Patterns",
  "Maturity Stage Profit Peak",
  "Decline Stage Falling Sales",
  "BCG Matrix Relative Share and Growth",
  "Question Marks in Growing Markets",
  "Stars and Strong Market Position",
  "Cash Cows in Low-Growth Markets",
  "Poor Dogs Near Decline",
  "Price P and Customer Payments",
  "Introductory Low Pricing at Launch",
  "Cost-Plus Pricing Markup Logic",
  "Penetration Pricing for Market Share",
  "Price Skimming on New Products",
  "Competitive Pricing Against Rivals",
  "Psychological Charm Pricing",
  "Discounts and Payment Terms",
  "Place P and Distribution Channels",
  "Direct Distribution Without Intermediaries",
  "Indirect Distribution Through Retailers",
  "Wholesaler Role in Distribution",
  "Retailer Access for Final Customers",
  "Online and Physical Place Channels",
  "Customer Access Not Firm Location",
  "Promotion P and Communicating Messages",
  "Advertising as Promotional Tool",
  "Sales Promotion and Sales Events",
  "Personal Selling to Customers",
  "Public Relations and Brand Image",
  "Heavy Promotion in Introduction",
  "Promotion Investment for Stars",
  "Reduced Promotion for Cash Cows",
  "Affordable Price and Convenient Place",
  "Market Research Across Four Ps",
  "Product Elimination After Failed Relaunch",
  "Economies of Scale in Growth",
  "Competition Pressure in Maturity",
  "Short Life Cycle of Fad Products",
  "Long Maturity of Everyday Products",
  "Global Brand Recognition Abroad",
  "Specialisation Versus Diversification",
  "Increasing Depth of a Product Line",
  "Major Changes Beyond Relaunch",
  "Product as Most Important P",
  "Interaction of Price and Promotion",
  "Place Convenience for Customers",
  "Promotion Aligned With Segments",
  "Harmonised Mix Not Single P",
  "Line Depth Versus Mix Width",
  "Contraction Eliminating Product Lines",
  "Decline Stage Low Growth Pattern",
  "Star Investment Requirements",
  "Cash Cow Revenue With Lower Spend",
  "Poor Dog Low Share Low Growth",
  "Price Differentiation Across Groups",
  "List Price and Trade Discounts",
  "Selective Distribution Strategy",
  "Intensive Distribution Coverage",
  "Exclusive Distribution Partners",
  "Sales Force in Promotion Mix",
  "Packaging Within Product P",
  "Services Counted as Products",
  "Brand Symbols and Global USP",
  "Portfolio Mapping on BCG Matrix",
  "Profit Peaking in Maturity",
  "Introduction Losses Before Sales",
  "Promotional Message Communication",
  "Place and Promotion Customer Reach",
  "Price Quality Perception Link",
  "Alteration Versus Elimination",
  "Business Units and Segments",
  "Affordable Accessible Communicated Offer",
  "BCG Axes Share and Growth",
  "Launch Pricing and Promotion Mix",
  "Indirect Channels Extend Place",
  "Brand Loyalty and Repeat Purchase",
  "Contraction When Relaunch Fails",
  "Coordinated Four Ps for Targets",
  "Product Portfolio Three Units",
  "Fad Withdrawal Within One Year",
  "Detergent Indefinite Maturity Trap",
  "Question Mark Becomes Star Path",
  "Cash Cow Becomes Poor Dog Shift",
  "Mix Extension Yogurt Ice Cream",
  "Line Extension New Ice Flavours",
  "Relaunch Packaging Colour Change",
  "Wholesaler Bakery Supermarket Supply",
  "Charm Pricing Supermarket Shelves",
  "Showroom Delivery Finance Place Mix",
  "Doctor Personal Selling Promotion",
  "Cloud Support Tailored Software Products",
  "Integrated Marketing Mix Assertions",
];

function pair(stmt, expl) {
  return [stmt, expl];
}

function buildTruePool() {
  const pool = [];

  const add = (stmt, expl) => pool.push(pair(stmt, expl));

  // Marketing mix overview
  add(
    "A marketing mix is a harmonised blend of marketing tools that best meets the needs and wants of customers in the targeted market.",
    "The textbook defines the marketing mix as a coordinated blend of tools aligned with targeted customer needs.",
  );
  add(
    "The marketing mix consists of the four elements product, price, place, and promotion, commonly called the four Ps.",
    "Product, price, place, and promotion are the four Ps forming the marketing mix.",
  );
  add(
    "The basic idea of the marketing mix is to provide a good at an affordable price at a convenient place and communicate a message to promote sales.",
    "Affordable price, convenient place, and promotional communication embody the core marketing-mix idea.",
  );
  add(
    "Decisions across the four Ps of the marketing mix are based on market research findings about the targeted market.",
    "Market research underpins marketing-mix decisions for the targeted market.",
  );
  add(
    "Each of the four Ps comprises several tools that marketers can combine within the overall marketing mix.",
    "Every P contains multiple tools that form part of the harmonised mix.",
  );
  add(
    "A harmonised marketing mix coordinates product, price, place, and promotion rather than treating each P independently.",
    "The mix is harmonised across all four elements to meet customer needs.",
  );
  add(
    "The four Ps framework helps a business align what it sells, what it charges, where it is sold, and how it is promoted.",
    "Product, price, place, and promotion cover offering, charge, distribution, and communication.",
  );
  add(
    "Marketing-mix planning seeks to satisfy targeted customers' needs and wants through a coordinated set of tools.",
    "Customer needs and wants in the target market guide the marketing mix.",
  );

  // Product P — core
  add(
    "The product element of the marketing mix refers to all goods and services that are offered by a business.",
    "The first P covers every good and service the business offers.",
  );
  add(
    "Product is at the heart of marketing and represents the most important decision of a business within the four Ps.",
    "The textbook places product at the centre as the most important marketing decision.",
  );
  add(
    "Most businesses offer not just one product but a range of products within their portfolio.",
    "Businesses typically manage a portfolio of products rather than a single item.",
  );
  add(
    "Products that are very similar, such as several slightly different laptop computers, represent a product line.",
    "Similar variants like different laptops form one product line.",
  );
  add(
    "A business can specialise in just one product line or diversify by offering different product lines such as laptops and monitors.",
    "Firms may focus on one line or diversify across multiple lines.",
  );
  add(
    "Increasing the number of different product lines widens the product mix of a business.",
    "Adding lines increases product-mix width through diversification.",
  );
  add(
    "Offering only laptop computers illustrates specialising in a single product line within the product mix.",
    "A single-line focus is a product-mix specialisation strategy.",
  );
  add(
    "Services such as technical support and online help count as products within the product element of the marketing mix.",
    "Services are included in the product P alongside physical goods.",
  );
  add(
    "Packaging, labelling, and colour variants can form part of the product decision within the marketing mix.",
    "Product decisions encompass packaging and presentation features.",
  );
  add(
    "A business may offer goods, related services, and tailored software solutions as distinct products in its portfolio.",
    "Goods, services, and tailored solutions can each appear as products in the portfolio.",
  );

  // Brands
  add(
    "Brands are created to support product differentiation within the product element of the marketing mix.",
    "Brands help distinguish offerings and support differentiation.",
  );
  add(
    "A brand consists of a name or a few words and/or a symbol and/or a sign that distinguishes a product or business.",
    "Brands combine names, words, symbols, or signs for distinction.",
  );
  add(
    "Brands are intended to build a USP, brand recognition, and brand loyalty among customers.",
    "Brands support USP, recognition, and loyalty objectives.",
  );
  add(
    "Some brands look the same worldwide with consistent colour and font to maintain global recognition.",
    "Global brands use consistent visual identity across markets.",
  );
  add(
    "Brands serve as a guarantee of stable quality and a maintained level of quality across markets.",
    "Brands signal consistent quality standards to customers.",
  );
  add(
    "Brands can render trust and safety of choice for customers who seek familiar products abroad.",
    "Familiar brands provide reassurance and perceived safety when travelling.",
  );
  add(
    "Brand loyalty encourages customers to repurchase products associated with a trusted name or symbol.",
    "Loyalty flows from trusted brand identity and repeated satisfactory purchase.",
  );
  add(
    "A recognisable brand symbol can reinforce the USP communicated through the wider marketing mix.",
    "Symbols support USP communication within the product P.",
  );

  // Product-mix strategies
  add(
    "Minor changes such as different packaging or colours are called a relaunch within product-mix alteration.",
    "Relaunches involve minor packaging or colour changes rather than full redesign.",
  );
  add(
    "When a relaunch is not enough to keep customers satisfied, major changes or elimination from the line may be necessary.",
    "Insufficient relaunches may require major alteration or product elimination.",
  );
  add(
    "Adding new products to an existing product line is a line extension, such as producing more flavours of ice cream.",
    "Line extension deepens an existing line with additional variants.",
  );
  add(
    "Adding a new product line to the portfolio is a mix extension, such as yogurts in addition to ice cream.",
    "Mix extension widens the portfolio by adding a new line.",
  );
  add(
    "Line extension increases the depth of a product line by adding variants within that line.",
    "Depth grows when more variants join one existing line.",
  );
  add(
    "Mix extension increases the number of product lines offered by the business.",
    "Width grows when a new line is added to the portfolio.",
  );
  add(
    "Product-mix expansion can occur through line extension or mix extension strategies.",
    "Expansion uses either deeper lines or additional lines.",
  );
  add(
    "Altering existing products over time creates a new range instead of the previous one within alteration strategy.",
    "Alteration replaces or refreshes an existing range when needs change.",
  );
  add(
    "Eliminating products or whole lines from the range reflects contraction within the product-mix strategy.",
    "Contraction removes products or lines that no longer fit the portfolio.",
  );
  add(
    "A business may eliminate a product from its range when a relaunch does not seem promising.",
    "Unpromising relaunch prospects can lead to product elimination.",
  );
  add(
    "Product-mix strategies include expansion, alteration, and contraction as shown in the textbook framework.",
    "Expansion, alteration, and contraction are the three product-mix strategy groups.",
  );
  add(
    "Specialising in one sort of product by offering just one product line narrows the product-mix width.",
    "Single-line specialisation keeps product-mix width narrow.",
  );
  add(
    "Diversifying production by offering different product lines increases the width of the product mix.",
    "Multiple lines diversify and widen the product mix.",
  );

  // PLC
  add(
    "The product life cycle is a theoretical model of stages over a product's life span that differ in sales volume and profit.",
    "PLC stages vary in sales volume and profit over the product's life.",
  );
  add(
    "Before market introduction there are no sales, yet product development costs mean the introduction phase starts with a loss.",
    "Pre-launch development costs create initial losses in introduction.",
  );
  add(
    "After product launch, introductory prices may be low and heavy promotion may keep costs above sales early in introduction.",
    "Low intro prices and promotion spending can prolong introduction losses.",
  );
  add(
    "Towards the end of the introduction phase, revenues can exceed costs and a small profit may emerge.",
    "Introduction can end with revenues surpassing costs for a modest profit.",
  );
  add(
    "During the growth period, sales increase more rapidly than costs and average costs may fall due to economies of scale.",
    "Growth brings faster sales gains and possible unit-cost reductions from scale.",
  );
  add(
    "Business profit usually rises during the growth stage and peaks in the maturity stage of the product life cycle.",
    "Profits typically grow through growth and peak at maturity.",
  );
  add(
    "In the maturity stage, market growth slows while the product may still hold a high market share.",
    "Maturity combines slower market growth with often high share.",
  );
  add(
    "During decline, sales fall and profits fall, sometimes rapidly, as the product nears the end of its life cycle.",
    "Decline features falling sales and profits as the cycle ends.",
  );
  add(
    "The duration of product life cycle stages varies enormously across different product categories.",
    "PLC length differs widely between product types.",
  );
  add(
    "Some products such as detergents, toothpaste, or perfumes may have a long or seemingly indefinite maturity phase.",
    "Everyday products can remain in maturity for extended periods.",
  );
  add(
    "Fad products may have a very short life cycle and be withdrawn in less than a year.",
    "Fads can complete their cycle and exit within months.",
  );
  add(
    "Increased competition in maturity often causes lower prices and higher promotional costs, pressuring profits.",
    "Maturity competition can cut prices and raise promotion expense.",
  );

  // BCG
  add(
    "The Boston Consulting Group matrix classifies products using relative market share and market growth.",
    "BCG positions products by relative share and market growth.",
  );
  add(
    "A product with low relative market share in a rapidly growing market is classified as a question mark.",
    "Low share plus high growth defines a question mark.",
  );
  add(
    "During introduction a product can be a question mark with low share in a growing market.",
    "Introduction-phase products may appear as question marks on the BCG matrix.",
  );
  add(
    "As market share rises in a still-growing market, a product may become a star in the BCG matrix.",
    "Growing share in a growing market can produce a star.",
  );
  add(
    "Stars are valuable because of their strong market position in a growing market.",
    "Stars combine strength with continued market growth.",
  );
  add(
    "Businesses invest in promotion and production facilities to maintain a star's strong position.",
    "Stars require ongoing promotional and capacity investment.",
  );
  add(
    "When market growth slows but market share remains high, a product may become a cash cow.",
    "High share with low growth characterises a cash cow.",
  );
  add(
    "Cash cows usually receive lower investment because market growth has become low while revenues stay high.",
    "Low growth reduces investment needs while revenues remain substantial for cash cows.",
  );
  add(
    "As a product nears decline with low market growth and relatively low share, it increasingly becomes a poor dog.",
    "Low growth and low share near decline align with poor dogs.",
  );
  add(
    "Poor dogs combine low relative market share with low market growth in the BCG framework.",
    "Poor dogs sit in the low-share, low-growth quadrant.",
  );
  add(
    "Stars occupy high relative market share combined with high market growth on the BCG matrix.",
    "High share and high growth define the star quadrant.",
  );
  add(
    "Question marks occupy low relative market share combined with high market growth on the BCG matrix.",
    "Low share with high growth defines question marks.",
  );

  // Price P
  add(
    "The price element of the marketing mix refers to the amount customers pay for the goods or services offered.",
    "Price is what customers pay for the business's offering.",
  );
  add(
    "Affordable price is part of the basic marketing-mix idea alongside convenient place and promotional communication.",
    "Affordable pricing supports the core mix objective of accessible value.",
  );
  add(
    "Introductory prices may be set low at product launch to attract customers during the introduction phase.",
    "Low launch prices help attract early customers in introduction.",
  );
  add(
    "Cost-plus pricing adds a markup to production costs when setting the selling price of a product.",
    "Cost-plus pricing builds price from costs plus a markup.",
  );
  add(
    "Penetration pricing sets a relatively low price to gain market share quickly after launch.",
    "Penetration pricing uses low price to build share fast.",
  );
  add(
    "Price skimming sets a high initial price that may be lowered later as competition increases.",
    "Skimming starts high and may reduce price over time.",
  );
  add(
    "Competitive pricing aligns the product's price with rival offerings in the same market.",
    "Competitive pricing references prices charged by competitors.",
  );
  add(
    "Psychological pricing uses prices such as €9.99 to influence customer perceptions of affordability.",
    "Charm prices like €9.99 are psychological pricing tools.",
  );
  add(
    "Discounts, payment terms, and trade allowances form part of the price tools within the marketing mix.",
    "Price P includes discounts, terms, and allowances.",
  );
  add(
    "List price and negotiated trade discounts together shape the effective price paid by channel customers.",
    "Channel pricing combines list price with trade discounts.",
  );
  add(
    "Price differentiation charges different prices to distinct customer groups or distribution channels.",
    "Segment or channel differences can justify differentiated prices.",
  );
  add(
    "A temporary price reduction during a sales event is a price decision linked to promotional activity.",
    "Sale pricing interacts with promotional campaigns in the mix.",
  );
  add(
    "Finance instalment offers spread customer payments over time as part of the overall price package.",
    "Instalment terms shape how customers meet the price obligation.",
  );
  add(
    "Loyalty discounts reward repeat customers and form part of the price element of the marketing mix.",
    "Loyalty discounts are price tools encouraging repeat purchase.",
  );

  // Place P
  add(
    "The place element of the marketing mix concerns where and how the product is made available to customers.",
    "Place covers distribution and customer access to the offering.",
  );
  add(
    "A convenient place for customers to buy supports the basic marketing-mix objective of accessible purchase.",
    "Customer convenience in purchase location is central to place decisions.",
  );
  add(
    "Place decisions focus on customer access and distribution channels rather than the firm's own office location.",
    "Place is about reaching customers, not where the firm is headquartered.",
  );
  add(
    "Direct distribution sells products to customers without using intermediaries such as wholesalers or retailers.",
    "Direct distribution bypasses intermediaries between producer and buyer.",
  );
  add(
    "Indirect distribution uses intermediaries such as wholesalers and retailers to reach final consumers.",
    "Intermediaries carry products to end customers in indirect distribution.",
  );
  add(
    "Wholesalers purchase products in bulk and resell them to retailers within a distribution channel.",
    "Wholesalers bulk-buy and supply retailers downstream.",
  );
  add(
    "Retailers make products available to end customers at shops, supermarkets, or other points of sale.",
    "Retailers provide final customer access in the channel.",
  );
  add(
    "Online sales platforms can serve as a place channel alongside physical shops for the same product.",
    "E-commerce complements physical outlets within place strategy.",
  );
  add(
    "Selling through own shops is an example of direct distribution within the place element of the mix.",
    "Own retail outlets exemplify direct distribution.",
  );
  add(
    "Supplying supermarkets through a wholesaler illustrates indirect distribution in the place P.",
    "Wholesaler-to-retailer routes show indirect distribution.",
  );
  add(
    "Intensive distribution places products in many outlets to maximise convenience for customers.",
    "Wide outlet coverage reflects intensive distribution.",
  );
  add(
    "Selective distribution limits the number of outlets to protect brand positioning and service standards.",
    "Fewer selected outlets characterise selective distribution.",
  );
  add(
    "Exclusive distribution uses a very limited number of specialised partners to sell the product.",
    "Exclusive arrangements restrict outlet numbers sharply.",
  );
  add(
    "Home-delivery logistics extend place convenience after a customer purchases from a showroom.",
    "Delivery services extend place convenience beyond the initial outlet.",
  );
  add(
    "Distribution channel analysis can reveal weaknesses and encourage alternative channels in place planning.",
    "Channel review supports place improvements and alternatives.",
  );

  // Promotion P
  add(
    "The promotion element of the marketing mix covers communicating a message in order to promote the sale of the product.",
    "Promotion communicates messages that encourage product sales.",
  );
  add(
    "Advertising informs and persuades target customers as a promotional tool within the marketing mix.",
    "Advertising is a core promotional communication tool.",
  );
  add(
    "Sales promotion includes short-term incentives and sales events designed to stimulate purchase.",
    "Sales events and incentives belong to sales promotion.",
  );
  add(
    "Personal selling involves direct contact between sales staff and customers to promote the product.",
    "Face-to-face selling is personal selling within promotion.",
  );
  add(
    "Public relations activities build a favourable image of the business or brand among stakeholders.",
    "PR shapes favourable perceptions as part of promotion.",
  );
  add(
    "Businesses may spend heavily on promotion through advertisements and sales events during product introduction.",
    "Introduction often features substantial advertising and sales-event spending.",
  );
  add(
    "Promotional spending in the growth stage helps maintain a star product's strong market position.",
    "Growth-stage promotion supports stars' competitive position.",
  );
  add(
    "Cash-cow products in low-growth markets usually receive lower promotional investment than stars.",
    "Low-growth cash cows need less promotional spending than stars.",
  );
  add(
    "Window displays and social-media campaigns are promotional tools communicating the product message.",
    "Displays and social media carry promotional messages.",
  );
  add(
    "Brochure advertising and reservation campaigns can coordinate promotion with price and place decisions.",
    "Brochures and campaigns integrate promotion with other Ps.",
  );
  add(
    "A sales force calling on business customers is part of the promotion mix for organisational buyers.",
    "B2B personal selling is a promotional tool for business markets.",
  );
  add(
    "Promotional messages should reflect the needs of the targeted segment identified through market research.",
    "Segment needs guide promotional messaging content.",
  );
  add(
    "Increased competition near decline may raise promotional costs as firms fight for remaining demand.",
    "Late-cycle competition can push promotional spending higher.",
  );

  // Cross-P integration
  add(
    "Market research findings inform product design, pricing levels, distribution channels, and promotional messages together.",
    "Research supports coordinated decisions across all four Ps.",
  );
  add(
    "A harmonised marketing mix aligns affordable price, convenient place, suitable product, and clear promotional message.",
    "All four Ps must align to deliver the mix objective.",
  );
  add(
    "Different business units may offer products with distinct characteristics and cycles that address separate customer segments.",
    "Separate units can target different segments with tailored products.",
  );
  add(
    "Used equipment sales, support services, and tailored software can coexist as distinct products in one portfolio.",
    "Portfolios may combine goods and services as separate products.",
  );

  // Programmatic expansions — unique numbered variants
  const categories = [
    "household cleaners",
    "sportswear",
    "organic cereals",
    "office stationery",
    "garden tools",
    "pet food",
    "skincare creams",
    "kitchen appliances",
    "children's toys",
    "bicycle accessories",
  ];
  categories.forEach((cat, i) => {
    add(
      `Adding a new flavour variant within an existing ${cat} range is a line extension that deepens the product line.`,
      `New variants within one ${cat} line illustrate line extension deepening the line.`,
    );
    add(
      `Introducing an entirely new ${cat} product line alongside an existing range is a mix extension widening the portfolio.`,
      `A separate ${cat} line added to the portfolio is mix extension increasing width.`,
    );
    add(
      `Refreshing ${cat} packaging colours without changing the core formula is a relaunch within product-mix alteration.`,
      `Packaging colour changes for ${cat} exemplify minor relaunch alteration.`,
    );
    add(
      `Removing an underperforming ${cat} variant from the range reflects contraction in the product-mix strategy.`,
      `Eliminating a weak ${cat} variant is product-mix contraction.`,
    );
    add(
      `A ${cat} brand symbol and consistent label design support differentiation and recognition in the product P.`,
      `Brand symbols on ${cat} support differentiation within the product element.`,
    );
    add(
      `Low introductory pricing for a new ${cat} product can attract first buyers during the introduction life-cycle stage.`,
      `Launch pricing for new ${cat} can support introduction-stage customer acquisition.`,
    );
    add(
      `Selling ${cat} through both a company website and partner retailers combines online and indirect place channels.`,
      `Website plus retailer partners blend online place with indirect distribution for ${cat}.`,
    );
    add(
      `Seasonal sales events promoting ${cat} are sales-promotion tools within the promotion element of the mix.`,
      `Seasonal events for ${cat} are promotional sales-promotion activities.`,
    );
  });

  const plcStages = [
    ["introduction", "development costs can exceed early revenues", "Introduction can show losses while development and launch costs dominate."],
    ["introduction", "heavy advertising may accompany the first sales period", "Introductory promotion spending supports early awareness building."],
    ["growth", "sales rise faster than costs as output expands", "Growth-stage sales growth can outpace cost increases."],
    ["growth", "economies of scale may reduce average unit costs", "Higher output in growth can lower average costs per unit."],
    ["maturity", "profit often reaches its peak relative to earlier stages", "Maturity is commonly the profit peak in the PLC model."],
    ["maturity", "competition may force lower prices and higher promotion spending", "Mature markets face competitive price and promotion pressure."],
    ["decline", "sales volume tends to fall as customer interest wanes", "Decline features declining sales as demand weakens."],
    ["decline", "profits usually fall alongside shrinking sales volume", "Declining sales in the final stage typically reduce profits."],
  ];
  plcStages.forEach(([stage, fact, expl], i) => {
    add(`During the ${stage} stage of the product life cycle, ${fact}.`, expl);
  });

  const bcgTypes = [
    ["question mark", "low relative market share", "high market growth", "Question marks combine low share with high growth."],
    ["star", "high relative market share", "high market growth", "Stars combine high share with high growth."],
    ["cash cow", "high relative market share", "low market growth", "Cash cows combine high share with low growth."],
    ["poor dog", "low relative market share", "low market growth", "Poor dogs combine low share with low growth."],
  ];
  bcgTypes.forEach(([type, share, growth, expl]) => {
    add(
      `In the BCG matrix, a ${type} has ${share} in a market with ${growth}.`,
      expl,
    );
  });

  const priceTools = [
    ["cost-plus pricing", "adding a standard markup to unit production costs"],
    ["penetration pricing", "setting a deliberately low launch price to build share"],
    ["price skimming", "charging a high price initially before gradual reductions"],
    ["competitive pricing", "matching or responding to rival price levels"],
    ["psychological pricing", "using charm prices that appear slightly below round numbers"],
    ["trade discounts", "reducing the list price for bulk channel purchasers"],
    ["loyalty discounts", "rewarding repeat purchasers with preferential prices"],
    ["instalment terms", "allowing customers to pay the price over several periods"],
  ];
  priceTools.forEach(([tool, desc]) => {
    add(`${tool.charAt(0).toUpperCase() + tool.slice(1)} involves ${desc} within the price P.`, `${tool} is a recognised price tool in the marketing mix.`);
  });

  const placeTools = [
    ["direct distribution", "selling without intermediaries to the final buyer"],
    ["indirect distribution", "using wholesalers and retailers to reach customers"],
    ["intensive distribution", "placing the product in many convenient outlets"],
    ["selective distribution", "limiting outlets to protect service quality and image"],
    ["exclusive distribution", "appointing only a few specialised selling partners"],
    ["online distribution", "making the product purchasable through digital channels"],
  ];
  placeTools.forEach(([tool, desc]) => {
    add(`${tool.charAt(0).toUpperCase() + tool.slice(1)} means ${desc} within the place element.`, `${tool} describes a place or distribution approach in the mix.`);
  });

  const promoTools = [
    ["advertising", "paid mass communication to inform and persuade buyers"],
    ["sales promotion", "short-term incentives such as coupons or sales events"],
    ["personal selling", "direct sales contact tailored to individual customers"],
    ["public relations", "building favourable publicity and corporate image"],
    ["window displays", "in-store visual promotion at the point of sale"],
    ["social-media campaigns", "digital communication reaching targeted online audiences"],
  ];
  promoTools.forEach(([tool, desc]) => {
    add(`${tool.charAt(0).toUpperCase() + tool.slice(1)} serves as ${desc} in the promotion P.`, `${tool} is a promotional tool within the marketing mix.`);
  });

  const segments = [
    "students",
    "families with young children",
    "retirees",
    "fitness enthusiasts",
    "home-office workers",
    "budget-conscious shoppers",
    "premium buyers",
    "rural households",
    "urban commuters",
    "small-business owners",
  ];
  segments.forEach((seg) => {
    add(
      `Market research on ${seg} can guide product features, price levels, distribution outlets, and promotional messages in the marketing mix.`,
      `Research on ${seg} informs coordinated decisions across all four Ps.`,
    );
    add(
      `A promotional message tailored to ${seg} should align with the product and price offered through chosen place channels.`,
      `Segment-focused promotion must align with product, price, and place for ${seg}.`,
    );
    add(
      `Affordable pricing for ${seg} supports the marketing-mix goal of offering value at a convenient place with clear communication.`,
      `Affordable price for ${seg} fits the core marketing-mix objective.`,
    );
    add(
      `Brand trust is especially valuable for ${seg} who rely on familiar names when choosing among competing offers.`,
      `Familiar brands provide reassurance valued by ${seg}.`,
    );
    add(
      `Selective distribution may suit premium offers targeted at ${seg} when service quality must be controlled.`,
      `Selective outlets can protect quality when targeting ${seg}.`,
    );
    add(
      `Personal selling may be effective for ${seg} when the product requires detailed explanation before purchase.`,
      `Complex offers to ${seg} can benefit from personal selling.`,
    );
    add(
      `A relaunch with updated packaging can refresh appeal among ${seg} without launching an entirely new product line.`,
      `Packaging relaunch can renew interest among ${seg} within alteration strategy.`,
    );
    add(
      `Line extension with a budget variant can attract ${seg} within an existing product line without widening the whole mix.`,
      `Budget variants for ${seg} deepen the line through line extension.`,
    );
  });

  const units = [
    "mobile-device components",
    "automotive control modules",
    "medical diagnostic parts",
    "memory-card modules",
    "power-supply units",
    "tablet display assemblies",
    "driver-assistance sensors",
    "industrial machine controls",
  ];
  units.forEach((unit) => {
    add(
      `A separate business unit supplying ${unit} may address a distinct segment with its own product characteristics and cycle.`,
      `${unit} units can target different segments with tailored products.`,
    );
    add(
      `Portfolio analysis may classify ${unit} as a question mark, star, cash cow, or poor dog depending on share and growth.`,
      `${unit} can map to different BCG categories by market conditions.`,
    );
    add(
      `Technical support services related to ${unit} count as products within the product element of the marketing mix.`,
      `Support for ${unit} is a product offering, not merely promotion.`,
    );
  });

  const channels = [
    "supermarket chains",
    "specialist boutiques",
    "factory outlet stores",
    "e-commerce marketplaces",
    "catalogue mail order",
    "trade fairs",
    "pharmacy counters",
    "department stores",
  ];
  channels.forEach((ch) => {
    add(
      `Selling through ${ch} is a place decision about which distribution channel reaches target customers.`,
      `${ch} represent a place or channel choice in the marketing mix.`,
    );
    add(
      `Promotional displays coordinated with ${ch} can reinforce the product message at the point of purchase.`,
      `In-channel promotion at ${ch} links place and promotion decisions.`,
    );
  });

  return pool;
}

function buildFalsePool() {
  const pool = [];
  const add = (stmt, expl) => pool.push(pair(stmt, expl));

  add(
    "The marketing mix consists of only product and promotion because price and place are determined entirely by competitors.",
    "All four Ps—product, price, place, and promotion—form the marketing mix.",
  );
  add(
    "Product is the least important element of the marketing mix because pricing decisions alone determine sales.",
    "Product is described as the most important decision and at the heart of marketing.",
  );
  add(
    "Place in the marketing mix refers primarily to the geographic location of the business headquarters.",
    "Place concerns customer access and distribution, not the firm's headquarters location.",
  );
  add(
    "Promotion in the marketing mix means reducing the list price until stock is cleared from the warehouse.",
    "Promotion covers communication tools such as advertising, not price cuts alone.",
  );
  add(
    "A product line consists of completely unrelated goods such as laptops and restaurant meals grouped for accounting convenience.",
    "A product line contains very similar products, not unrelated categories.",
  );
  add(
    "Mix extension adds new variants within one existing line, such as another flavour in the same ice-cream range.",
    "That describes line extension; mix extension adds a new product line.",
  );
  add(
    "Line extension widens the product mix by adding an entirely new product line such as yogurts beside ice cream.",
    "Adding a new line is mix extension; line extension deepens one existing line.",
  );
  add(
    "A relaunch always requires eliminating the product from the product line and replacing it with a new category.",
    "Relaunch involves minor changes such as packaging or colours, not automatic elimination.",
  );
  add(
    "Minor packaging changes are classified as mix extension because they alter how the product line is presented.",
    "Minor packaging or colour changes are relaunches within alteration, not mix extension.",
  );
  add(
    "Brand loyalty is unrelated to the product element and belongs exclusively to the promotion P of the marketing mix.",
    "Brands support differentiation within the product P and build loyalty there.",
  );
  add(
    "Brands consist only of production patents and contain no name, symbol, or sign visible to customers.",
    "Brands include names, words, symbols, or signs distinguishing the product.",
  );
  add(
    "During introduction the product life cycle always shows peak profit because early buyers pay premium prices.",
    "Introduction typically starts with losses from development and launch costs.",
  );
  add(
    "The decline stage is characterised by the highest sales volume and peak profit in the product life cycle.",
    "Decline features falling sales and profits, not peaks.",
  );
  add(
    "Maturity always lasts less than one year before every product automatically enters decline.",
    "Maturity can last months or years; some products remain mature indefinitely.",
  );
  add(
    "A question mark in the BCG matrix has high relative market share and low market growth.",
    "Question marks have low relative share in a rapidly growing market.",
  );
  add(
    "A star in the BCG matrix combines low relative market share with low market growth.",
    "Stars have high relative share in a high-growth market.",
  );
  add(
    "A cash cow has low relative market share in a rapidly growing market and requires heavy expansion investment.",
    "Cash cows have high share in low-growth markets and usually receive lower investment.",
  );
  add(
    "A poor dog has high relative market share and high market growth and is the most valuable portfolio position.",
    "Poor dogs have low share and low growth near decline, unlike valuable stars.",
  );
  add(
    "The BCG matrix plots absolute market share against production cost per unit rather than relative share and growth.",
    "BCG uses relative market share and market growth, not cost per unit.",
  );
  add(
    "Penetration pricing sets a very high initial price to skim revenue from early adopters only.",
    "High initial pricing describes skimming; penetration uses a low price to gain share.",
  );
  add(
    "Price skimming means launching with a low price to maximise volume in the first month of sales.",
    "Skimming starts with a high price; low launch pricing aligns with penetration.",
  );
  add(
    "Cost-plus pricing ignores production costs and sets price only according to competitor advertisements.",
    "Cost-plus pricing adds a markup to production costs.",
  );
  add(
    "Psychological pricing requires every product to be sold at a round number such as €10.00 without exception.",
    "Psychological pricing often uses charm prices like €9.99, not only round numbers.",
  );
  add(
    "Wholesalers sell products directly to final consumers at retail shops they operate under their own brand only.",
    "Wholesalers resell to retailers; retailers typically serve final consumers.",
  );
  add(
    "Retailers purchase products in bulk from producers and resell exclusively to other wholesalers downstream.",
    "Retailers sell to end customers; bulk resale to other wholesalers is the wholesaler role.",
  );
  add(
    "Direct distribution always requires at least two intermediaries between producer and customer.",
    "Direct distribution sells without intermediaries.",
  );
  add(
    "Indirect distribution means the producer delivers every product personally to each household without any retailer.",
    "Indirect distribution uses intermediaries such as wholesalers and retailers.",
  );
  add(
    "Online sales channels belong to the promotion P because they only advertise products without enabling purchase.",
    "Online platforms are place channels that make products available for purchase.",
  );
  add(
    "Personal selling is a price tool because sales staff negotiate discounts that permanently replace promotion.",
    "Personal selling is a promotional tool involving direct sales contact.",
  );
  add(
    "Advertising is classified under place because it determines which warehouse stores the finished goods.",
    "Advertising is a promotional communication tool, not a distribution decision.",
  );
  add(
    "Public relations is a product-mix contraction strategy that eliminates underperforming brands from the portfolio.",
    "Public relations builds image within promotion; contraction eliminates products or lines.",
  );
  add(
    "Economies of scale in the growth stage always raise average unit costs as output increases.",
    "Growth may lower average costs through economies of scale as output rises.",
  );
  add(
    "Cash cows receive the highest promotional investment because market growth in their segment remains rapid.",
    "Cash cows are in low-growth markets and usually receive lower promotional investment.",
  );
  add(
    "Stars no longer require promotional or production investment once they first achieve high market share.",
    "Stars need continued investment in promotion and facilities to maintain position.",
  );
  add(
    "Product-mix contraction means adding new flavours within an existing ice-cream line to increase depth.",
    "Adding flavours is line extension; contraction eliminates products or lines.",
  );
  add(
    "Increasing product-mix width means adding more variants within the same single product line only.",
    "Width increases with more lines; depth increases variants within one line.",
  );
  add(
    "Specialising in one product line diversifies the product mix by increasing the number of different lines offered.",
    "Specialising narrows focus to one line; diversification adds different lines.",
  );
  add(
    "A harmonised marketing mix can ignore customer needs in the targeted market if promotion spending is high enough.",
    "The mix is designed to meet targeted customers' needs and wants, not ignore them.",
  );
  add(
    "Market research informs only the product P and has no role in price, place, or promotion decisions.",
    "Market research underpins decisions across all four Ps.",
  );
  add(
    "Fad products typically remain in maturity for decades like detergents and toothpaste before any decline occurs.",
    "Fads have short life cycles and may be withdrawn in under a year.",
  );
  add(
    "Detergents and toothpaste are cited as examples of products with very short fad-like life cycles under one year.",
    "These products may have long or indefinite maturity phases, unlike fads.",
  );

  const traps = [
    ["line extension", "mix extension", "Adding yogurts beside an ice-cream line", "Adding a new line is mix extension, not line extension."],
    ["mix extension", "line extension", "Adding another flavour within the same ice-cream line", "Adding variants within one line is line extension."],
    ["relaunch", "contraction", "Changing packaging colours on an existing shampoo bottle", "Packaging colour change is relaunch alteration, not contraction."],
    ["contraction", "line extension", "Eliminating a weak product from the portfolio", "Elimination is contraction, not line extension."],
    ["question mark", "cash cow", "Low share in a fast-growing market at launch", "That position is a question mark, not a cash cow."],
    ["cash cow", "star", "High share when market growth has slowed", "High share with low growth is a cash cow, not a star."],
    ["star", "poor dog", "High share while the market is still growing", "High share with high growth is a star, not a poor dog."],
    ["poor dog", "question mark", "Low share with low market growth near decline", "Low share and low growth define a poor dog."],
    ["penetration pricing", "price skimming", "A low launch price to build market share quickly", "Low launch price for share is penetration, not skimming."],
    ["price skimming", "penetration pricing", "A high initial price later reduced over time", "High initial price is skimming, not penetration."],
    ["direct distribution", "indirect distribution", "Selling only through the firm's own shops", "Own shops illustrate direct, not indirect, distribution."],
    ["indirect distribution", "direct distribution", "Supplying supermarkets through a wholesaler", "Wholesaler routes are indirect, not direct, distribution."],
    ["advertising", "place", "Television commercials communicating product benefits", "Television ads are promotion, not place."],
    ["place", "promotion", "Making a product available in supermarket aisles", "Supermarket availability is place, not promotion."],
    ["personal selling", "public relations", "Sales representatives visiting business clients", "Visiting sales staff perform personal selling, not PR alone."],
    ["public relations", "sales promotion", "Press releases building corporate reputation", "PR builds image; sales promotion uses short-term incentives."],
    ["introduction", "maturity", "Losses from development costs before sales take off", "Development losses occur in introduction, not maturity."],
    ["growth", "decline", "Rapid sales increases with falling average costs", "Rapid sales growth characterises growth, not decline."],
    ["maturity", "introduction", "Profit peaking while market growth slows", "Profit peak with slower growth fits maturity, not introduction."],
    ["decline", "growth", "Falling sales and profits as demand weakens", "Falling sales and profits indicate decline, not growth."],
  ];
  traps.forEach(([wrong, right, example, fix]) => {
    add(
      `${example} is classified as ${wrong} rather than ${right} in the marketing-mix framework.`,
      fix,
    );
  });

  const categories = [
    "breakfast cereals",
    "running shoes",
    "smart watches",
    "energy drinks",
    "hair conditioners",
    "LED light bulbs",
    "travel backpacks",
    "frozen pizzas",
    "mobile phone cases",
    "washing powders",
  ];
  categories.forEach((cat) => {
    add(
      `Because ${cat} are physical goods, services such as installation or support cannot be counted in the product P for that business.`,
      "The product P includes services as well as goods offered by the business.",
    );
    add(
      `A global ${cat} brand guarantees that product quality may vary sharply between countries without affecting brand recognition.`,
      "Brands serve as a guarantee of stable quality maintained across markets.",
    );
    add(
      `Selling ${cat} exclusively through wholesalers means the business uses direct distribution with no intermediaries.`,
      "Wholesaler channels indicate indirect distribution, not direct.",
    );
    add(
      `Setting a low introductory price for new ${cat} is an example of price skimming aimed only at early luxury buyers.`,
      "Low introductory pricing aligns with penetration or launch pricing, not skimming.",
    );
    add(
      `Removing an outdated ${cat} model after failed relaunch attempts is an example of product-mix expansion through mix extension.`,
      "Elimination after failed relaunch is contraction, not expansion.",
    );
    add(
      `A ${cat} product with high market share in a no-growth market is a question mark requiring maximum market-growth investment.`,
      "High share in a low-growth market is a cash cow, not a question mark.",
    );
    add(
      `Promoting ${cat} through social-media posts is a place decision because it chooses the warehouse where stock is stored.`,
      "Social-media promotion is a promotional tool, not a place or warehouse decision.",
    );
    add(
      `Charm pricing of ${cat} at €9.99 is a promotional message and not part of the price element of the marketing mix.`,
      "Charm pricing is a psychological pricing tool within the price P.",
    );
  });

  const falsePrice = [
    ["Trade discounts", "raise the list price for small retail buyers compared with large chains"],
    ["Loyalty discounts", "eliminate the need for any promotional communication with customers"],
    ["Instalment terms", "remove the price element because payment is deferred to future periods"],
    ["Competitive pricing", "sets price without reference to any rival products in the market"],
    ["Cost-plus pricing", "sets price by copying competitor advertisements rather than adding markup to costs"],
  ];
  falsePrice.forEach(([tool, wrong]) => {
    add(`${tool} ${wrong}.`, `${tool} is a price tool with a distinct role described in the marketing-mix framework.`);
  });

  const falsePlace = [
    ["Intensive distribution", "restricts a product to a single exclusive outlet in each city"],
    ["Selective distribution", "places the product in every possible outlet without limitation"],
    ["Exclusive distribution", "requires selling through as many supermarkets as possible nationwide"],
    ["Online distribution", "prevents customers from purchasing because it only displays product photographs"],
    ["Home delivery", "belongs to promotion because it communicates advertising messages to households"],
  ];
  falsePlace.forEach(([tool, wrong]) => {
    add(`${tool} ${wrong}.`, `${tool} relates to customer access within the place element.`);
  });

  const falsePromo = [
    ["Sales events", "set the permanent list price for all future years of the product"],
    ["Brochure advertising", "determines which factory machine produces each product unit"],
    ["Window displays", "replace the need for any product or price decision in the marketing mix"],
    ["Sales force visits", "are classified as place tools because they transport goods to retailers"],
    ["Social-media campaigns", "are product-mix contraction because they remove old lines from sale"],
  ];
  falsePromo.forEach(([tool, wrong]) => {
    add(`${tool} ${wrong}.`, `${tool} functions as a promotional communication tool in the mix.`);
  });

  const falseSegments = [
    "students",
    "retirees",
    "premium buyers",
    "budget shoppers",
    "rural customers",
    "business clients",
    "young families",
    "commuters",
  ];
  falseSegments.forEach((seg) => {
    add(
      `Market research on ${seg} informs only promotion decisions and cannot influence product, price, or place choices.`,
      `Market research underpins decisions across all four Ps, including for ${seg}.`,
    );
    add(
      `A familiar brand offers no reassurance to ${seg} because brands belong exclusively to the promotion P.`,
      `Brands support product differentiation and can reassure ${seg}, not only promotion.`,
    );
    add(
      `Low introductory pricing aimed at ${seg} is classified as product-mix contraction because it reduces revenue per unit.`,
      `Introductory low pricing is a price decision, not product-mix contraction.`,
    );
    add(
      `Selling through channels preferred by ${seg} is a promotion activity because it communicates advertising slogans only.`,
      `Channel choice for ${seg} is a place decision about customer access.`,
    );
    add(
      `Personal selling to ${seg} is a price tool because sales staff set the permanent list price for all future years.`,
      `Personal selling is promotional contact, not the sole determinant of list price.`,
    );
    add(
      `A product line aimed at ${seg} must contain unrelated categories such as food and machinery to count as one line.`,
      `A product line contains similar products, even when targeting ${seg}.`,
    );
  });

  const falseBcg = [
    ["high share and high growth", "a poor dog requiring no further investment"],
    ["low share and high growth", "a cash cow with low promotional needs"],
    ["high share and low growth", "a question mark needing rapid market expansion"],
    ["low share and low growth", "a star with the strongest market position"],
  ];
  falseBcg.forEach(([pos, wrong]) => {
    add(
      `In the BCG matrix, a product with ${pos} is classified as ${wrong}.`,
      `BCG classification does not match that share-growth combination.`,
    );
  });

  const falsePlc = [
    ["introduction", "peak profit before any sales have occurred"],
    ["growth", "the lowest sales volume of the entire life cycle"],
    ["maturity", "losses caused mainly by pre-launch development spending"],
    ["decline", "the highest promotional spending because market growth is fastest"],
  ];
  falsePlc.forEach(([stage, wrong]) => {
    add(
      `The ${stage} stage of the product life cycle is characterised by ${wrong}.`,
      `That pattern does not match the textbook description of the ${stage} stage.`,
    );
  });

  const extraFalseTopics = [
    ["product bundling", "a promotion tool that replaces all place decisions in the marketing mix"],
    ["loss leaders", "products sold above cost to maximise immediate profit on every unit"],
    ["exclusive agencies", "retailers that must stock every competing brand in the same category"],
    ["push strategy", "marketing that relies only on customer pull without any sales-force contact"],
    ["pull strategy", "marketing that ignores end-customer demand and sells only to wholesalers"],
    ["product depth", "the number of different product lines offered by a business"],
    ["product width", "the number of variants within a single product line"],
    ["skimming pricing", "setting a permanently low price from launch with no later increases"],
    ["penetration pricing", "setting the highest possible price at launch to target only luxury buyers"],
    ["sales promotion", "a permanent reduction in production costs rather than a communication tool"],
    ["public relations", "a price discount offered only to employees of the firm"],
    ["direct mail", "a place decision about warehouse layout rather than promotional contact"],
    ["vending machines", "promotional posters displayed inside retail shop windows"],
    ["franchising", "a product-mix contraction strategy that eliminates all existing brands"],
    ["own-brand labels", "brands that guarantee identical quality to every premium competitor automatically"],
    ["after-sales service", "excluded from the product P because only tangible goods count as products"],
    ["warranty offers", "classified exclusively as promotion because they communicate advertising slogans"],
    ["distribution intensity", "irrelevant to place decisions because customers always buy online"],
    ["market skimming", "identical to competitive pricing with no initial premium period"],
    ["cash discounts", "promotional brochures handed to customers at the point of sale"],
  ];
  extraFalseTopics.forEach(([term, wrong]) => {
    add(
      `${term.charAt(0).toUpperCase() + term.slice(1)} is ${wrong}.`,
      `${term} has a distinct role within the marketing-mix framework.`,
    );
    add(
      `Marketing theory treats ${term} as ${wrong}.`,
      `${term} is defined differently in the standard marketing-mix overview.`,
    );
  });

  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

if (TRUE.length < 300) throw new Error(`TRUE pool too small: ${TRUE.length}`);
if (FALSE.length < 200) throw new Error(`FALSE pool too small: ${FALSE.length}`);
if (SCENE.length < 15) throw new Error(`SCENE too small: ${SCENE.length}`);
if (THEORY.length < 85) throw new Error(`THEORY too small: ${THEORY.length}`);
if (TITLES.length < 100) throw new Error(`TITLES too small: ${TITLES.length}`);

const cases = buildCases({
  subsection: "5.7",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
