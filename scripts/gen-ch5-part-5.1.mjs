/**
 * Generate scripts/ch5-part-5.1.json — 100 cases for subsection 5.1.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"))["5.1"];
const OUT = "scripts/ch5-part-5.1.json";

const SCENE = [
  "Consider a wholesale stationery supplier that sells printers to corporate offices while also stocking identical models for walk-in household buyers. Evaluate the following economic assertions:",
  "Consider an IT consultancy delivering network maintenance contracts to local firms and occasional home-visit support for residents. Evaluate the following economic assertions:",
  "Consider a lumber yard supplying timber to construction companies and also selling cut boards to DIY household customers. Evaluate the following economic assertions:",
  "Consider a commercial bakery selling bulk flour sacks to restaurants while packaging smaller bags for supermarket shoppers. Evaluate the following economic assertions:",
  "Consider a vehicle dealer that leases vans to delivery firms and sells the same model to families for private transport. Evaluate the following economic assertions:",
  "Consider a software vendor licensing payroll systems to enterprises and selling simplified home budgeting applications to individuals. Evaluate the following economic assertions:",
  "Consider a cleaning company contracted by office blocks for nightly janitorial work and by households for weekly domestic visits. Evaluate the following economic assertions:",
  "Consider a textile mill shipping fabric rolls to garment manufacturers and remnant bundles to craft buyers at a market stall. Evaluate the following economic assertions:",
  "Consider a telecommunications provider selling business broadband packages to firms and residential internet plans to private households. Evaluate the following economic assertions:",
  "Consider a catering firm preparing conference lunches for corporate clients and birthday party trays for family celebrations. Evaluate the following economic assertions:",
  "Consider a chemical distributor delivering industrial solvents to factories and smaller containers of garden treatments to retail customers. Evaluate the following economic assertions:",
  "Consider a training academy offering compliance workshops to company staff and evening language courses to individual learners. Evaluate the following economic assertions:",
  "Consider a furniture maker supplying office desks to employers and dining tables to consumers through a showroom. Evaluate the following economic assertions:",
  "Consider a security firm monitoring warehouses for logistics companies and installing home alarm systems for residents. Evaluate the following economic assertions:",
  "Consider a print shop fulfilling bulk brochure orders for marketing agencies and single-copy document services for private customers. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review the marketing definition of a product as every good and service that can be exchanged to fulfil customer wishes and needs. Evaluate the following economic assertions:",
  "Analyze how marketing terminology treats both goods and services as products when they can be exchanged. Evaluate the following economic assertions:",
  "Review the distinction between business-to-business marketing and business-to-consumer marketing in product classification. Evaluate the following economic assertions:",
  "Analyze how producer products differ from consumer products according to the customer who purchases them. Evaluate the following economic assertions:",
  "Review how customers in the product definition may be other businesses or private households. Evaluate the following economic assertions:",
  "Analyze why the same physical good may be classified as a producer product or a consumer product depending on use. Evaluate the following economic assertions:",
  "Review how goods sold from one business to another are treated as producer products in B2B exchange. Evaluate the following economic assertions:",
  "Analyze how goods and services sold to consumers or private households are classified as consumer products. Evaluate the following economic assertions:",
  "Review the role of exchange in determining whether a good or service counts as a product in marketing. Evaluate the following economic assertions:",
  "Analyze how a printer purchased for office operations illustrates producer-product classification. Evaluate the following economic assertions:",
  "Review how an identical printer purchased for private home use illustrates consumer-product classification. Evaluate the following economic assertions:",
  "Analyze how computer support services sold mainly to households exemplify business-to-consumer offerings. Evaluate the following economic assertions:",
  "Review how computer support services sold to other businesses exemplify business-to-business offerings. Evaluate the following economic assertions:",
  "Analyze why marketing treats fulfilment of wishes and needs as central to the concept of a product. Evaluate the following economic assertions:",
  "Review how producer products include services exchanged between businesses as well as physical goods. Evaluate the following economic assertions:",
  "Analyze how consumer products include household services as well as goods purchased for private use. Evaluate the following economic assertions:",
  "Review the textbook scope of the term product beyond tangible merchandise alone. Evaluate the following economic assertions:",
  "Analyze how B2B exchange links producer products to business customers rather than private households. Evaluate the following economic assertions:",
  "Review how B2C exchange links consumer products to private households rather than business buyers. Evaluate the following economic assertions:",
  "Analyze why classification by end customer matters more than physical similarity of the item sold. Evaluate the following economic assertions:",
  "Review how marketing distinguishes customers as businesses or consumers when defining product types. Evaluate the following economic assertions:",
  "Analyze how exchanged services such as technical support can be products in the marketing sense. Evaluate the following economic assertions:",
  "Review how exchanged goods ranging from equipment to materials can be products when offered for sale. Evaluate the following economic assertions:",
  "Analyze the relationship between exchange value and product status in introductory marketing terminology. Evaluate the following economic assertions:",
  "Review how a single firm may simultaneously market producer products and consumer products. Evaluate the following economic assertions:",
  "Analyze why producer products are sold business-to-business while consumer products are sold business-to-consumer. Evaluate the following economic assertions:",
  "Review how private households appear as customers within the consumer-product category. Evaluate the following economic assertions:",
  "Analyze how other businesses appear as customers within the producer-product category. Evaluate the following economic assertions:",
  "Review the dual nature of products as goods and/or services in the marketing definition. Evaluate the following economic assertions:",
  "Analyze how office equipment bought by a firm differs in product classification from the same equipment bought for home use. Evaluate the following economic assertions:",
  "Review how wishes and needs provide the purpose that exchangeable offerings aim to fulfil as products. Evaluate the following economic assertions:",
  "Analyze why services delivered to corporate clients count as producer products when exchanged for payment. Evaluate the following economic assertions:",
  "Review why services delivered to residents count as consumer products when exchanged for payment. Evaluate the following economic assertions:",
  "Analyze how marketing product terminology applies to both tangible outputs and intangible support. Evaluate the following economic assertions:",
  "Review the classification logic that assigns B2B status to inter-business sales of goods and services. Evaluate the following economic assertions:",
  "Analyze the classification logic that assigns B2C status to sales directed at consumers or households. Evaluate the following economic assertions:",
  "Review how exchange distinguishes marketable products from items that are not offered for trade. Evaluate the following economic assertions:",
  "Analyze how identical catalogues may contain items that become producer or consumer products by buyer context. Evaluate the following economic assertions:",
  "Review how computer support illustrates that the same service type can serve B2C and B2B customers. Evaluate the following economic assertions:",
  "Analyze why marketing groups all exchangeable goods and services under the single term product. Evaluate the following economic assertions:",
  "Review how producer-product labelling reflects the business customer rather than the manufacturing process alone. Evaluate the following economic assertions:",
  "Analyze how consumer-product labelling reflects the household customer rather than product size alone. Evaluate the following economic assertions:",
  "Review the marketing view that customers may be organisations or private persons. Evaluate the following economic assertions:",
  "Analyze how fulfilment of needs links exchanged offerings to the product concept. Evaluate the following economic assertions:",
  "Review how fulfilment of wishes links exchanged offerings to the product concept. Evaluate the following economic assertions:",
  "Analyze why goods exchanged between firms are not automatically consumer products. Evaluate the following economic assertions:",
  "Review why goods exchanged with households are not automatically producer products. Evaluate the following economic assertions:",
  "Analyze how B2B and B2C labels describe marketing relationships rather than production technology. Evaluate the following economic assertions:",
  "Review how exchanged maintenance contracts can be products when purchased by business clients. Evaluate the following economic assertions:",
  "Analyze how exchanged maintenance contracts can be products when purchased by household clients. Evaluate the following economic assertions:",
  "Review the introductory marketing framework for classifying products by customer type and exchange. Evaluate the following economic assertions:",
  "Analyze how a firm's product portfolio may span producer goods, consumer goods, and related services. Evaluate the following economic assertions:",
  "Review why both raw materials sold to manufacturers and finished items sold to shoppers can be products. Evaluate the following economic assertions:",
  "Analyze how exchange with payment underpins product status for services as well as for goods. Evaluate the following economic assertions:",
  "Review how business buyers and household buyers anchor the producer versus consumer distinction. Evaluate the following economic assertions:",
  "Analyze why marketing treats the customer identity as decisive for B2B versus B2C product labels. Evaluate the following economic assertions:",
  "Review how identical equipment may shift between producer and consumer categories with no change in design. Evaluate the following economic assertions:",
  "Analyze how technical support sold to enterprises fits the producer-product and B2B pattern. Evaluate the following economic assertions:",
  "Review how technical support sold to residents fits the consumer-product and B2C pattern. Evaluate the following economic assertions:",
  "Analyze the marketing principle that products encompass services capable of satisfying customer demand. Evaluate the following economic assertions:",
  "Review the marketing principle that products encompass goods capable of satisfying customer demand. Evaluate the following economic assertions:",
  "Analyze how exchanged offerings must be capable of trade to qualify as products. Evaluate the following economic assertions:",
  "Review how producer products serve production or operational needs of business purchasers. Evaluate the following economic assertions:",
  "Analyze how consumer products serve personal or household needs of individual purchasers. Evaluate the following economic assertions:",
  "Review the textbook pairing of B2B with producer products and B2C with consumer products. Evaluate the following economic assertions:",
  "Analyze why marketing definitions emphasise exchange rather than ownership transfer alone. Evaluate the following economic assertions:",
  "Review how multi-channel sellers may classify each transaction by the customer involved. Evaluate the following economic assertions:",
  "Analyze how a service firm's revenue lines may separately reflect B2B and B2C product sales. Evaluate the following economic assertions:",
  "Review how goods and services together form the product set in marketing terminology. Evaluate the following economic assertions:",
  "Analyze why private households are explicit customers within the product definition. Evaluate the following economic assertions:",
  "Review why other businesses are explicit customers within the product definition. Evaluate the following economic assertions:",
  "Analyze how office-use purchases reclassify otherwise identical goods as producer products. Evaluate the following economic assertions:",
  "Review how home-use purchases reclassify otherwise identical goods as consumer products. Evaluate the following economic assertions:",
  "Analyze the marketing logic that separates product type by purchaser rather than by factory origin. Evaluate the following economic assertions:",
  "Review how exchanged computer-support hours illustrate intangible products in both B2B and B2C settings. Evaluate the following economic assertions:",
  "Analyze how marketing product concepts apply before branding or pricing decisions are considered. Evaluate the following economic assertions:",
  "Review how customer wishes and needs frame the purpose of goods and services offered as products. Evaluate the following economic assertions:",
  "Analyze why inter-business services belong with producer products in the introductory classification. Evaluate the following economic assertions:",
  "Review why household-directed services belong with consumer products in the introductory classification. Evaluate the following economic assertions:",
  "Analyze how exchangeability distinguishes market products from internal transfers not offered for sale. Evaluate the following economic assertions:",
  "Review how B2B producer products include inputs purchased by firms for further commercial activity. Evaluate the following economic assertions:",
  "Analyze how B2C consumer products include final purchases made by private households for personal use. Evaluate the following economic assertions:",
  "Review the integrated definition linking products, exchange, customers, and need fulfilment. Evaluate the following economic assertions:",
  "Analyze how marketing terminology unifies goods and services under one product concept when traded. Evaluate the following economic assertions:",
  "Review how classification examples such as office printers and home printers illustrate customer-based product labels. Evaluate the following economic assertions:",
  "Analyze how the same consultancy may record B2B contracts and B2C service calls as distinct product lines. Evaluate the following economic assertions:",
];

const TITLES = [
  "Marketing Definition of a Product",
  "Goods and Services as Products",
  "B2B Versus B2C Classification",
  "Producer Products and Business Customers",
  "Consumer Products and Household Customers",
  "Exchange and Product Status",
  "Identical Goods Different Classifications",
  "Office Printer as Producer Product",
  "Home Printer as Consumer Product",
  "Computer Support in B2C Markets",
  "Computer Support in B2B Markets",
  "Customer Types in Product Theory",
  "Fulfilling Wishes and Needs",
  "Producer Services Between Firms",
  "Consumer Services for Households",
  "Scope Beyond Tangible Goods",
  "B2B Exchange and Producer Labels",
  "B2C Exchange and Consumer Labels",
  "Customer Context Over Physical Form",
  "Business Versus Household Purchasers",
  "Technical Support as a Product",
  "Exchange Value in Marketing",
  "Dual Product Portfolios",
  "Producer Product B2B Link",
  "Consumer Product B2C Link",
  "Private Households as Customers",
  "Businesses as Product Customers",
  "Goods and Services Combined",
  "Office Equipment Classification",
  "Wishes as Product Purpose",
  "Corporate Maintenance Contracts",
  "Residential Service Products",
  "Tangible and Intangible Products",
  "Inter-Business Sales Classification",
  "Household Sales Classification",
  "Exchange Versus Non-Market Items",
  "Catalogue Items by Buyer Context",
  "Shared Service Types Across Channels",
  "Unified Product Terminology",
  "Producer Labels and Business Buyers",
  "Consumer Labels and Home Buyers",
  "Organisations and Private Persons",
  "Needs Fulfilment Through Exchange",
  "Wishes Fulfilment Through Exchange",
  "Firm-to-Firm Goods Classification",
  "Household Goods Classification",
  "Marketing Relationship Labels",
  "Business Maintenance as Product",
  "Household Maintenance as Product",
  "Introductory Product Framework",
  "Mixed Producer and Consumer Lines",
  "Materials and Finished Goods",
  "Paid Services as Products",
  "Buyer Identity and Product Type",
  "Customer Decisive Classification",
  "Identical Design Different Category",
  "Enterprise Technical Support",
  "Residential Technical Support",
  "Services Satisfying Demand",
  "Goods Satisfying Demand",
  "Trade Capability Requirement",
  "Producer Products for Operations",
  "Consumer Products for Personal Use",
  "B2B Producer B2C Consumer Pairing",
  "Exchange Emphasis in Definition",
  "Multi-Channel Transaction Labels",
  "B2B and B2C Revenue Lines",
  "Combined Goods and Service Set",
  "Explicit Household Customers",
  "Explicit Business Customers",
  "Office Use Producer Reclassification",
  "Home Use Consumer Reclassification",
  "Purchaser Not Factory Origin",
  "Intangible B2B and B2C Examples",
  "Product Concept Before Branding",
  "Customer Needs Framing Products",
  "Inter-Business Service Products",
  "Household-Directed Service Products",
  "Exchangeable Versus Internal Transfers",
  "B2B Inputs for Commercial Activity",
  "B2C Final Household Purchases",
  "Integrated Product Definition Review",
  "Unified Traded Goods and Services",
  "Printer Examples and Customer Labels",
  "Consultancy B2B and B2C Lines",
  "Wholesale and Retail Product Mix",
  "Lumber Yard Dual Customer Base",
  "Bakery Bulk and Retail Products",
  "Vehicle Leasing and Family Sales",
  "Software Enterprise and Home Editions",
  "Cleaning Contracts Across Segments",
  "Textile Mill Dual Distribution",
  "Telecom Business and Residential Plans",
  "Catering Corporate and Family Orders",
  "Chemical Industrial and Garden Sales",
  "Training Workshops and Evening Courses",
  "Furniture Office and Home Lines",
  "Security Commercial and Residential",
  "Print Shop Bulk and Single Orders",
  "Core Product Assertion Review",
  "Closing B2B B2C Distinctions",
];

const sceneIndices = [
  3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99,
];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const goods = ["printer", "computer", "desk", "vehicle", "software licence", "fabric roll", "cleaning contract", "training course", "broadband package", "catering tray"];
  const biz = ["corporate client", "manufacturing firm", "logistics company", "restaurant chain", "construction contractor", "retail chain", "hospital trust", "local authority", "export buyer", "warehouse operator"];
  const home = ["private household", "family home", "resident", "individual consumer", "household shopper", "domestic customer", "private buyer", "home user", "personal customer", "household member"];

  add(
    "In marketing terminology, a product is every good and/or service that can be exchanged in order to fulfil the wishes and needs of customers.",
    "The textbook definition treats exchangeable goods and services together as products aimed at customer wishes and needs.",
  );
  add(
    "Marketing defines a product as any good or service offered through exchange to satisfy customer wishes and needs.",
    "Exchangeable goods and services that address customer wishes and needs fall within the marketing product definition.",
  );
  add(
    "A product in marketing includes both tangible goods and intangible services when they are exchanged with customers.",
    "Goods and services alike count as products once they are exchanged to fulfil customer wishes and needs.",
  );
  add(
    "Customers of a product may be other businesses or private households according to introductory marketing terminology.",
    "The product definition explicitly allows business customers and household customers.",
  );
  add(
    "Producer products are goods and services sold from one business to another in business-to-business exchange.",
    "B2B sales of goods and services to other businesses are classified as producer products.",
  );
  add(
    "Consumer products are goods and services sold to consumers or private households in business-to-consumer exchange.",
    "B2C sales directed at consumers or households are classified as consumer products.",
  );
  add(
    "Business-to-business marketing relates to producer products exchanged between firms.",
    "Producer products are linked to B2B marketing because the purchaser is another business.",
  );
  add(
    "Business-to-consumer marketing relates to consumer products sold to private households.",
    "Consumer products are linked to B2C marketing because the purchaser is a consumer or household.",
  );
  add(
    "A printer bought for office use by a business is classified as a producer product even if an identical model exists for home buyers.",
    "Office purchase by a business makes the printer a producer product regardless of identical home models.",
  );
  add(
    "A printer bought for private home use is classified as a consumer product even when the same model is sold to offices.",
    "Home purchase by a household makes the printer a consumer product regardless of identical office models.",
  );
  add(
    "Computer support services sold mainly to private households illustrate consumer products in a service form.",
    "Household-directed computer support is a B2C consumer product in service form.",
  );
  add(
    "Computer support services sold to other businesses illustrate producer products in a service form.",
    "Business-directed computer support is a B2B producer product in service form.",
  );
  add(
    "Exchange is required in the marketing sense for a good or service to be treated as a product.",
    "Products must be capable of exchange; items not offered for trade fall outside the definition.",
  );
  add(
    "Services such as maintenance contracts can be products when they are exchanged to fulfil customer needs.",
    "Exchanged services that satisfy needs qualify as products alongside goods.",
  );
  add(
    "Goods such as equipment and materials can be products when exchanged to fulfil customer wishes and needs.",
    "Exchanged goods that satisfy wishes and needs are products within marketing terminology.",
  );

  for (let i = 0; i < goods.length; i++) {
    const g = goods[i];
    const b = biz[i];
    const h = home[i];
    add(
      `A ${g} sold to a ${b} is a producer product because the purchaser is another business operating commercially.`,
      `Sales to business customers classify the ${g} as a B2B producer product.`,
    );
    add(
      `A ${g} sold to a ${h} is a consumer product because the purchaser is a private household or individual consumer.`,
      `Sales to household customers classify the ${g} as a B2C consumer product.`,
    );
    add(
      `The same ${g} may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer.`,
      `Identical ${g} models shift between producer and consumer labels with the customer, not the design.`,
    );
    add(
      `When a firm exchanges a ${g} with a ${b}, the transaction is business-to-business and the item is a producer product.`,
      `B2B exchange with a business buyer makes the ${g} a producer product.`,
    );
    add(
      `When a firm exchanges a ${g} with a ${h}, the transaction is business-to-consumer and the item is a consumer product.`,
      `B2C exchange with a household buyer makes the ${g} a consumer product.`,
    );
    add(
      `Marketing classifies a ${g} sold for commercial operations to a ${b} as a producer product rather than a consumer product.`,
      `Commercial use by a business purchaser defines the ${g} as a producer product.`,
    );
    add(
      `Marketing classifies a ${g} sold for personal or domestic use to a ${h} as a consumer product rather than a producer product.`,
      `Personal or domestic use by a household purchaser defines the ${g} as a consumer product.`,
    );
    add(
      `A ${g} exchanged to fulfil the operational needs of a ${b} counts as a product in the producer category.`,
      `Operational needs of a business buyer place an exchanged ${g} among producer products.`,
    );
    add(
      `A ${g} exchanged to fulfil the personal wishes of a ${h} counts as a product in the consumer category.`,
      `Personal wishes of a household buyer place an exchanged ${g} among consumer products.`,
    );
    add(
      `Producer products include a ${g} when it is sold from one business to a ${b} for further commercial activity.`,
      `Inter-business sale of a ${g} to a ${b} is a textbook producer product case.`,
    );
    add(
      `Consumer products include a ${g} when it is sold to a ${h} for private consumption or domestic use.`,
      `Household sale of a ${g} to a ${h} is a textbook consumer product case.`,
    );
    add(
      `The marketing term product covers a ${g} whether the exchange is B2B with a ${b} or B2C with a ${h}.`,
      `A ${g} remains a product in either channel; only the producer versus consumer label changes with the buyer.`,
    );
    add(
      `A consultancy may list a ${g} under producer products when invoicing a ${b} and under consumer products when invoicing a ${h}.`,
      `Customer identity on the invoice determines whether the same ${g} is recorded as producer or consumer.`,
    );
    add(
      `Fulfilment of customer wishes and needs is the purpose that makes an exchanged ${g} a product in marketing terminology.`,
      `Wishes and needs give the exchanged ${g} its role as a product rather than a non-market item.`,
    );
    add(
      `Exchange value arises when a ${g} is traded with a ${b} or a ${h} to satisfy identifiable customer demand.`,
      `Traded ${g} offerings create exchange value whether the buyer is a business or a household.`,
    );
  }

  const serviceTypes = [
    "network maintenance",
    "payroll processing",
    "equipment leasing",
    "staff training",
    "security monitoring",
    "document printing",
    "cloud storage",
    "legal advice",
    "pest control",
    "landscaping",
  ];
  const serviceBiz = [
    "insurance company",
    "accounting partnership",
    "shipping line",
    "engineering plant",
    "data centre operator",
    "advertising agency",
    "property manager",
    "law firm",
    "food processor",
    "school district",
  ];
  const serviceHome = [
    "retired couple",
    "young professional",
    "suburban family",
    "student renter",
    "self-employed artisan",
    "weekend gardener",
    "first-time buyer",
    "community volunteer",
    "pensioner household",
    "urban flat owner",
  ];

  for (let i = 0; i < serviceTypes.length; i++) {
    const svc = serviceTypes[i];
    const b = serviceBiz[i];
    const h = serviceHome[i];
    add(
      `${svc.charAt(0).toUpperCase() + svc.slice(1)} sold to a ${b} is a producer product because the service is exchanged business-to-business.`,
      `B2B ${svc} for a business customer is classified as a producer product.`,
    );
    add(
      `${svc.charAt(0).toUpperCase() + svc.slice(1)} sold to a ${h} is a consumer product because the service is exchanged business-to-consumer.`,
      `B2C ${svc} for a household customer is classified as a consumer product.`,
    );
    add(
      `An exchanged ${svc} contract with a ${b} fulfils business needs and therefore counts as a product in marketing terms.`,
      `Business-need fulfilment through exchanged ${svc} makes the service a product sold B2B.`,
    );
    add(
      `An exchanged ${svc} visit for a ${h} fulfils household wishes and therefore counts as a product in marketing terms.`,
      `Household-wish fulfilment through exchanged ${svc} makes the service a product sold B2C.`,
    );
    add(
      `Producer products encompass ${svc} when one firm provides it to a ${b} under a commercial contract.`,
      `${svc} under a commercial contract to a ${b} is a producer product service.`,
    );
    add(
      `Consumer products encompass ${svc} when a firm provides it to a ${h} for personal or domestic benefit.`,
      `${svc} for personal or domestic benefit to a ${h} is a consumer product service.`,
    );
    add(
      `The same firm may sell ${svc} as a B2B producer product to a ${b} and as a B2C consumer product to a ${h}.`,
      `Dual-channel ${svc} sales illustrate producer and consumer labels driven by customer type.`,
    );
    add(
      `Marketing treats ${svc} as a product whenever it is exchanged, whether the buyer is a ${b} or a ${h}.`,
      `Exchange of ${svc} with either business or household buyers keeps it within the product concept.`,
    );
    add(
      `A ${b} purchasing ${svc} engages in business-to-business exchange for a producer product service.`,
      `B2B purchase of ${svc} by a ${b} yields a producer product classification.`,
    );
    add(
      `A ${h} purchasing ${svc} engages in business-to-consumer exchange for a consumer product service.`,
      `B2C purchase of ${svc} by a ${h} yields a consumer product classification.`,
    );
    add(
      `${svc.charAt(0).toUpperCase() + svc.slice(1)} illustrates that intangible offerings can be products when traded to satisfy customer needs.`,
      `Intangible ${svc} counts as a product once exchanged to satisfy needs.`,
    );
    add(
      `Exchange of ${svc} creates a marketing product because payment transfers the service to a customer with unmet wishes or needs.`,
      `Paid transfer of ${svc} to a customer with unmet wishes or needs defines a marketing product.`,
    );
  }

  const materialTypes = [
    "steel sheet",
    "timber beam",
    "chemical solvent",
    "textile yarn",
    "plastic pellet",
    "paper reel",
    "glass panel",
    "rubber gasket",
    "aluminium ingot",
    "copper wire",
  ];
  for (let i = 0; i < materialTypes.length; i++) {
    const m = materialTypes[i];
    const b = biz[i];
    const h = home[i];
    add(
      `Bulk ${m} delivered to a ${b} for manufacturing is a producer product sold through B2B exchange.`,
      `Manufacturing inputs such as ${m} sold to a ${b} are producer products.`,
    );
    add(
      `Retail ${m} sold in small quantities to a ${h} for a DIY project is a consumer product sold through B2C exchange.`,
      `Household DIY purchases of ${m} by a ${h} are consumer products.`,
    );
    add(
      `The identical ${m} specification may be a producer product in wholesale trade and a consumer product in a hobby shop.`,
      `Wholesale ${m} to firms and retail ${m} to households differ only by customer classification.`,
    );
    add(
      `Marketing includes ${m} among products when it is exchanged to fulfil the production needs of a ${b}.`,
      `Production needs of a ${b} satisfied by exchanged ${m} define a producer product.`,
    );
    add(
      `Marketing includes ${m} among products when it is exchanged to fulfil the personal project wishes of a ${h}.`,
      `Personal project wishes of a ${h} satisfied by exchanged ${m} define a consumer product.`,
    );
    add(
      `A supplier records ${m} as a producer product on invoices to a ${b} and as a consumer product on receipts to a ${h}.`,
      `Invoice customer type determines producer versus consumer labelling for the same ${m}.`,
    );
    add(
      `Exchange of ${m} between businesses for further processing exemplifies producer products in goods form.`,
      `Inter-firm ${m} sales for processing are producer products in goods form.`,
    );
    add(
      `Exchange of ${m} with a household for non-commercial use exemplifies consumer products in goods form.`,
      `Household ${m} purchases for non-commercial use are consumer products in goods form.`,
    );
  }

  const extraTrue = [
    ["Private households are recognised customers when firms market consumer products.", "Households are explicit customers in the consumer-product definition."],
    ["Other businesses are recognised customers when firms market producer products.", "Businesses are explicit customers in the producer-product definition."],
    ["A firm's product set may simultaneously contain B2B producer lines and B2C consumer lines.", "One firm may operate both producer and consumer product lines at once."],
    ["Classification as producer or consumer product depends on who buys the item, not on whether it is a good or a service.", "Buyer identity drives producer versus consumer labels for both goods and services."],
    ["Items not offered for exchange fall outside the marketing definition of a product.", "Without exchange, goods and services are not products in the marketing sense."],
    ["Marketing uses the term product before considering branding, packaging, or promotional strategy.", "Product is a foundational concept prior to branding or promotion decisions."],
    ["Wishes and needs provide the customer-centred rationale for treating exchanged offerings as products.", "Customer wishes and needs anchor the rationale for product status."],
    ["A good exchanged between two companies to support production is always a producer product.", "Inter-company production support goods are producer products."],
    ["A good exchanged with a household for personal enjoyment is always a consumer product.", "Household personal-enjoyment goods are consumer products."],
    ["B2B labels describe sales where the customer is another business purchasing for organisational use.", "B2B applies when a business customer buys for organisational use."],
    ["B2C labels describe sales where the customer is a consumer or private household.", "B2C applies when a consumer or household is the customer."],
    ["Producer products can be services such as outsourced payroll as well as physical components.", "Producer products span services like outsourced payroll and physical components."],
    ["Consumer products can be services such as home tutoring as well as finished retail goods.", "Consumer products span services like home tutoring and finished retail goods."],
    ["The marketing product concept is broader than manufactured merchandise alone.", "Products are broader than manufactured merchandise in marketing terminology."],
    ["Exchange with customers distinguishes products from internal allocations that never enter a market.", "Market exchange with customers distinguishes products from internal allocations."],
    ["A wholesaler's sales to retailers are producer products because the buyers are businesses.", "Wholesale sales to retail businesses are B2B producer products."],
    ["A retailer's sales to shoppers are consumer products because the buyers are households or individuals.", "Retail sales to shoppers are B2C consumer products."],
    ["Identical specifications do not force identical producer or consumer labels if buyers differ.", "Buyer difference can change labels even when specifications are identical."],
    ["Computer support for enterprises is B2B because the customers are other businesses.", "Enterprise computer support customers are businesses, making the service B2B."],
    ["Computer support for residents is B2C because the customers are private households.", "Residential computer support customers are households, making the service B2C."],
    ["Marketing groups all exchangeable offerings that satisfy demand under the single heading product.", "All exchangeable demand-satisfying offerings are products in marketing."],
    ["A service firm may earn revenue from producer products and consumer products in the same reporting period.", "Mixed B2B and B2C service revenue can coexist in one firm."],
    ["Goods used in office operations purchased by an employer are producer products.", "Employer office purchases classify goods as producer products."],
    ["Goods used in private homes purchased by a family are consumer products.", "Family home purchases classify goods as consumer products."],
    ["The purchaser's identity is the decisive criterion for B2B versus B2C product classification.", "Purchaser identity is decisive for B2B versus B2C labels."],
    ["Products must be capable of fulfilling wishes or needs of the customer who acquires them.", "Customer wish or need fulfilment is required of products."],
    ["A maintenance contract with a factory is a producer product service exchanged B2B.", "Factory maintenance contracts are B2B producer product services."],
    ["A maintenance contract with a homeowner is a consumer product service exchanged B2C.", "Homeowner maintenance contracts are B2C consumer product services."],
    ["Marketing terminology treats exchange as the gateway to product status for goods and services alike.", "Exchange is the gateway to product status for goods and services."],
    ["Producer-product classification follows business customers even when the item is a finished good.", "Finished goods sold to businesses remain producer products."],
    ["Consumer-product classification follows household customers even when the item is an industrial-grade good.", "Industrial-grade goods sold to households can still be consumer products."],
  ];
  for (const [s, e] of extraTrue) add(s, e);

  const fillers = [
    "introductory marketing",
    "standard marketing terminology",
    "the textbook product framework",
    "basic B2B B2C theory",
    "foundational product theory",
    "elementary marketing classification",
    "core product definitions",
    "primary marketing vocabulary",
    "initial product concepts",
    "fundamental exchange theory",
  ];
  const roles = [
    "operations manager",
    "procurement officer",
    "household buyer",
    "facility director",
    "retail purchaser",
    "plant supervisor",
    "domestic client",
    "commercial tenant",
    "home office worker",
    "inventory controller",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, any exchanged good or service that satisfies a customer is classified as a product.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} treats exchanged demand-satisfying offerings as products.`,
    );
    add(
      `Under ${f}, producer products are those sold to business customers such as a firm employing a ${r}.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} links producer products to business customers.`,
    );
    add(
      `Under ${f}, consumer products are those sold to households or individuals such as a ${r} buying for personal use.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} links consumer products to household customers.`,
    );
    add(
      `Under ${f}, B2B exchange with a business purchaser creates a producer product label.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} assigns producer labels to B2B exchange.`,
    );
    add(
      `Under ${f}, B2C exchange with a household purchaser creates a consumer product label.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} assigns consumer labels to B2C exchange.`,
    );
    add(
      `Under ${f}, the same catalogue item may be a producer product when bought by a ${r} acting for a company.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} allows producer labels when a ${r} buys for a company.`,
    );
    add(
      `Under ${f}, the same catalogue item may be a consumer product when bought by a ${r} for private domestic use.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} allows consumer labels when a ${r} buys for domestic use.`,
    );
    add(
      `Under ${f}, services exchanged for payment qualify as products alongside tangible goods.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} includes paid services within the product concept.`,
    );
    add(
      `Under ${f}, wishes and needs explain why customers acquire exchanged products.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} ties product purpose to customer wishes and needs.`,
    );
    add(
      `Under ${f}, items never offered for sale to an external customer are not products.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} excludes non-traded items from the product definition.`,
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

  const goods = ["printer", "computer", "desk", "vehicle", "software licence", "fabric roll", "cleaning contract", "training course", "broadband package", "catering tray"];
  const biz = ["corporate client", "manufacturing firm", "logistics company", "restaurant chain", "construction contractor", "retail chain", "hospital trust", "local authority", "export buyer", "warehouse operator"];
  const home = ["private household", "family home", "resident", "individual consumer", "household shopper", "domestic customer", "private buyer", "home user", "personal customer", "household member"];

  add(
    "In marketing terminology, a product refers only to physical goods and excludes services from the definition.",
    "Products include both goods and services when they are exchanged to fulfil customer wishes and needs.",
  );
  add(
    "Producer products are defined by whether an item is manufactured in a factory rather than by the customer who purchases it.",
    "Producer products are defined by B2B sale to another business, not by the manufacturing location.",
  );
  add(
    "Consumer products are defined by retail packaging size rather than by whether the buyer is a household or business.",
    "Consumer products are defined by B2C sale to consumers or households, not by packaging size.",
  );
  add(
    "A printer is always a consumer product because households are the most visible end users of printers.",
    "A printer bought for office use by a business is a producer product even if identical home models exist.",
  );
  add(
    "A printer is always a producer product because printers are produced by manufacturers for commercial supply chains.",
    "A printer bought for private home use is a consumer product even when the same model is sold to offices.",
  );
  add(
    "Computer support services cannot be products because services lack physical form.",
    "Services such as computer support are products when exchanged to fulfil customer wishes and needs.",
  );
  add(
    "Free after-sales advice is a product because it satisfies customer needs even without payment.",
    "Exchange is required; free advice not offered for trade falls outside the marketing product definition.",
  );
  add(
    "Internal office supplies moved between departments of the same company are products in the marketing sense.",
    "Items not offered for external exchange are not products in marketing terminology.",
  );
  add(
    "B2B and B2C labels describe production technology rather than the identity of the customer.",
    "B2B and B2C describe whether the customer is a business or a household, not production technology.",
  );
  add(
    "Customers of products can only be private households, not other businesses.",
    "Customers may be other businesses or private households according to the product definition.",
  );
  add(
    "Customers of products can only be other businesses, not private households.",
    "Customers may be private households or other businesses according to the product definition.",
  );
  add(
    "Goods given as gifts with no exchange are still products because they fulfil recipient wishes.",
    "Without exchange, gifted goods are not products in the marketing sense.",
  );
  add(
    "A good becomes a consumer product whenever it is small enough to be carried home by an individual.",
    "Consumer products are defined by household or consumer purchase, not by physical size alone.",
  );
  add(
    "A good becomes a producer product whenever it is heavy or bulky regardless of who buys it.",
    "Producer products are defined by business purchase, not by weight or bulk alone.",
  );
  add(
    "Services provided only to businesses are consumer products because the ultimate beneficiaries are people.",
    "Services sold to businesses are producer products in B2B exchange.",
  );

  for (let i = 0; i < goods.length; i++) {
    const g = goods[i];
    const b = biz[i];
    const h = home[i];
    add(
      `A ${g} sold to a ${b} is a consumer product because every sale ultimately serves human needs.`,
      `Sales to a business customer classify the ${g} as a B2B producer product, not a consumer product.`,
    );
    add(
      `A ${g} sold to a ${h} is a producer product because the seller is a business firm.`,
      `Sales to a household customer classify the ${g} as a B2C consumer product, not a producer product.`,
    );
    add(
      `The same ${g} must keep one fixed product label for all buyers because the design never changes.`,
      `Identical ${g} models can be producer or consumer products depending on the buyer.`,
    );
    add(
      `A ${g} is not a product unless it is a manufactured physical good.`,
      `A ${g} can be a product when exchanged as a good or service to fulfil customer wishes and needs.`,
    );
    add(
      `Exchange is irrelevant to whether a ${g} counts as a product if customers desire it strongly enough.`,
      `Exchange is required for a ${g} to count as a product in marketing terminology.`,
    );
    add(
      `Marketing excludes a ${g} from products when sold to a ${b} because businesses do not have wishes or needs.`,
      `Business customers have operational wishes and needs that exchanged ${g} offerings can fulfil as products.`,
    );
    add(
      `Marketing excludes a ${g} from products when sold to a ${h} because households only receive gifts, not products.`,
      `Household customers acquire consumer products such as a ${g} through B2C exchange.`,
    );
    add(
      `A ${g} transferred internally between branches of one corporation remains a marketed product.`,
      `Internal transfers not offered for external exchange are not products in the marketing sense.`,
    );
    add(
      `B2B classification of a ${g} depends on the seller's industry rather than on the ${b} purchaser.`,
      `B2B classification depends on the business purchaser, not solely on the seller's industry.`,
    );
    add(
      `B2C classification of a ${g} depends on colourful retail branding rather than on the ${h} purchaser.`,
      `B2C classification depends on the household purchaser, not on retail branding alone.`,
    );
    add(
      `A ${g} sold to a ${b} is B2C because money changes hands in the transaction.`,
      `Payment alone does not make the sale B2C; a business buyer implies B2B and a producer product.`,
    );
    add(
      `A ${g} sold to a ${h} is B2B because the seller is a registered company.`,
      `The seller's company status does not make a household sale B2B; it remains B2C with a consumer product.`,
    );
    add(
      `Producer products include only raw materials, so a finished ${g} sold to a ${b} cannot be a producer product.`,
      `Producer products include goods and services sold to businesses, including a finished ${g} for a ${b}.`,
    );
    add(
      `Consumer products include only luxury items, so a routine ${g} sold to a ${h} cannot be a consumer product.`,
      `Consumer products include ordinary goods and services sold to households, including a ${g} for a ${h}.`,
    );
    add(
      `A ${g} becomes a product only after advertising creates demand rather than when it is exchanged.`,
      `A ${g} is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.`,
    );
  }

  const serviceTypes = [
    "network maintenance",
    "payroll processing",
    "equipment leasing",
    "staff training",
    "security monitoring",
    "document printing",
    "cloud storage",
    "legal advice",
    "pest control",
    "landscaping",
  ];
  const serviceBiz = [
    "insurance company",
    "accounting partnership",
    "shipping line",
    "engineering plant",
    "data centre operator",
    "advertising agency",
    "property manager",
    "law firm",
    "food processor",
    "school district",
  ];
  const serviceHome = [
    "retired couple",
    "young professional",
    "suburban family",
    "student renter",
    "self-employed artisan",
    "weekend gardener",
    "first-time buyer",
    "community volunteer",
    "pensioner household",
    "urban flat owner",
  ];

  for (let i = 0; i < serviceTypes.length; i++) {
    const svc = serviceTypes[i];
    const b = serviceBiz[i];
    const h = serviceHome[i];
    add(
      `${svc.charAt(0).toUpperCase() + svc.slice(1)} for a ${b} is a consumer product because services are always final consumption.`,
      `Business-purchased ${svc} is a B2B producer product, not a consumer product.`,
    );
    add(
      `${svc.charAt(0).toUpperCase() + svc.slice(1)} for a ${h} is a producer product because the provider is a commercial firm.`,
      `Household-purchased ${svc} is a B2C consumer product, not a producer product.`,
    );
    add(
      `${svc} cannot be a product because customers cannot take possession of it like a physical good.`,
      `Intangible ${svc} can be a product when exchanged to fulfil customer wishes and needs.`,
    );
    add(
      `Complimentary ${svc} provided without charge to a ${b} still counts as a marketed product.`,
      `Without exchange, complimentary ${svc} is not a product in marketing terminology.`,
    );
    add(
      `${svc} sold to a ${b} is classified B2C when the contract is long term.`,
      `A business buyer of ${svc} remains B2B regardless of contract length.`,
    );
    add(
      `${svc} sold to a ${h} is classified B2B when the provider holds a business licence.`,
      `A household buyer of ${svc} remains B2C regardless of the provider's licence.`,
    );
    add(
      `Internal ${svc} performed by employees for their own employer is a producer product sold B2B.`,
      `Internal non-market ${svc} is not a product; producer products require exchange with an external business customer.`,
    );
    add(
      `${svc} fulfils needs and therefore is a product even when no payment or exchange occurs.`,
      `Need fulfilment alone is insufficient without exchange for ${svc} to be a product.`,
    );
    add(
      `A ${b} buying ${svc} receives a consumer product because services are consumed immediately.`,
      `Immediate consumption does not reclassify ${svc} sold to a ${b} as a consumer product.`,
    );
    add(
      `A ${h} buying ${svc} receives a producer product because the firm produces the service.`,
      `Production by the firm does not make household ${svc} a producer product.`,
    );
    add(
      `${svc} is excluded from products because only goods appearing on a warehouse shelf qualify.`,
      `${svc} qualifies as a product when exchanged, alongside tangible goods.`,
    );
    add(
      `Producer products exclude ${svc} because producer products must be physical components only.`,
      `Producer products include services such as ${svc} sold B2B to businesses.`,
    );
  }

  const materialTypes = [
    "steel sheet",
    "timber beam",
    "chemical solvent",
    "textile yarn",
    "plastic pellet",
    "paper reel",
    "glass panel",
    "rubber gasket",
    "aluminium ingot",
    "copper wire",
  ];
  for (let i = 0; i < materialTypes.length; i++) {
    const m = materialTypes[i];
    const b = biz[i];
    const h = home[i];
    add(
      `Wholesale ${m} sold to a ${b} is a consumer product because the buyer will eventually resell to shoppers.`,
      `Wholesale ${m} to a business buyer is a producer product in B2B exchange regardless of later resale.`,
    );
    add(
      `Retail ${m} sold to a ${h} is a producer product because it may be used in a home workshop.`,
      `Retail ${m} to a household buyer is a consumer product in B2C exchange.`,
    );
    add(
      `${m} is not a product when exchanged because it is an intermediate input rather than a finished item.`,
      `Intermediate ${m} can still be a product when exchanged to fulfil business customer needs.`,
    );
    add(
      `Identical ${m} must be labelled a consumer product in every market channel to avoid customer confusion.`,
      `Identical ${m} can be a producer product for a ${b} and a consumer product for a ${h}.`,
    );
    add(
      `A ${b} purchasing ${m} engages in B2C exchange because the buyer is the final user of the material.`,
      `A business buyer purchasing ${m} engages in B2B exchange for a producer product.`,
    );
    add(
      `A ${h} purchasing ${m} engages in B2B exchange because the seller is a wholesale distributor.`,
      `A household buyer purchasing ${m} engages in B2C exchange for a consumer product.`,
    );
    add(
      `${m} sold without monetary payment to a ${b} is still a product because value is transferred.`,
      `Exchange in the marketing sense requires trade; non-monetary gifts of ${m} are not products.`,
    );
    add(
      `Bulk ${m} is automatically a producer product and small ${m} is automatically a consumer product regardless of buyer.`,
      `Buyer identity, not quantity alone, determines whether ${m} is a producer or consumer product.`,
    );
  }

  const extraFalse = [
    ["Products must be durable goods that last more than one year to qualify in marketing.", "Products include non-durable goods and services exchanged with customers."],
    ["Only final goods sold to households can fulfil customer wishes and needs in marketing theory.", "Business customers also have wishes and needs fulfilled by producer products."],
    ["A business cannot be a customer in the marketing product definition.", "Customers may be other businesses as well as private households."],
    ["A household cannot be a customer in the marketing product definition.", "Customers may be private households as well as other businesses."],
    ["Producer products are sold only by manufacturers and never by retailers.", "Producer products are defined by B2B customers, not by whether the seller is a manufacturer."],
    ["Consumer products are sold only by retailers and never by service firms.", "Consumer products are defined by B2C customers, including services sold to households."],
    ["B2B marketing applies whenever two businesses communicate, even without an exchanged product.", "B2B marketing relates to producer products exchanged between firms."],
    ["B2C marketing applies whenever an advertisement reaches a television audience.", "B2C marketing relates to consumer products sold to households or consumers."],
    ["Exchange value exists only for goods that can be stored in inventory.", "Services exchanged with customers also carry exchange value as products."],
    ["Wishes and needs matter only for consumer products, not for producer products.", "Producer products also aim to fulfil business customer wishes and needs."],
    ["A product loses product status once it is consumed by the customer.", "Consumption after purchase does not retroactively remove product status at the time of exchange."],
    ["Goods produced for a firm's own use are products because they satisfy internal needs.", "Goods not offered for external exchange are not products in marketing terminology."],
    ["Identical office and home printers must share one product label because the model number is the same.", "Identical models can be producer or consumer products depending on the buyer."],
    ["Computer support to businesses is B2C because technicians interact with individual employees.", "Computer support sold to businesses is B2B as a producer product."],
    ["Computer support to households is B2B because the provider is a registered business.", "Computer support sold to households is B2C as a consumer product."],
    ["Marketing limits products to goods that appear in a printed catalogue.", "Products include exchanged services even when they are not pictured in a catalogue."],
    ["A producer product becomes a consumer product when resold second-hand to a household.", "Second-hand resale can be B2C, but the original B2B producer label applied at the first business sale."],
    ["Free samples distributed in a supermarket are products because they create customer interest.", "Free samples without exchange are not products in the marketing definition."],
    ["Charitable donations of goods are products because recipients benefit from them.", "Donations without market exchange are not products in marketing terminology."],
    ["A firm classifies all its output as producer products because it is a producer by name.", "Classification depends on the customer; consumer-directed sales are consumer products."],
  ];
  for (const [s, e] of extraFalse) add(s, e);

  const fillers = [
    "introductory marketing",
    "standard marketing terminology",
    "the textbook product framework",
    "basic B2B B2C theory",
    "foundational product theory",
    "elementary marketing classification",
    "core product definitions",
    "primary marketing vocabulary",
    "initial product concepts",
    "fundamental exchange theory",
  ];
  const roles = [
    "operations manager",
    "procurement officer",
    "household buyer",
    "facility director",
    "retail purchaser",
    "plant supervisor",
    "domestic client",
    "commercial tenant",
    "home office worker",
    "inventory controller",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, services are excluded from products because only warehouse stock counts.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} includes exchanged services as products alongside goods.`,
    );
    add(
      `Under ${f}, a ${r} buying for a company still receives a consumer product because individuals place the order.`,
      `A ${r} buying for a company receives a producer product in B2B exchange.`,
    );
    add(
      `Under ${f}, a ${r} buying for private domestic use receives a producer product because the seller is incorporated.`,
      `A ${r} buying for domestic use receives a consumer product in B2C exchange.`,
    );
    add(
      `Under ${f}, exchange is optional if the offering strongly satisfies customer wishes.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} requires exchange for product status.`,
    );
    add(
      `Under ${f}, B2B labels depend on factory machinery rather than on the purchaser.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} ties B2B labels to business purchasers.`,
    );
    add(
      `Under ${f}, B2C labels depend on advertising media rather than on household purchasers.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} ties B2C labels to household purchasers.`,
    );
    add(
      `Under ${f}, identical catalogue items cannot change between producer and consumer labels.`,
      `${f.charAt(0).toUpperCase() + f.slice(1)} allows label changes when the buyer changes.`,
    );
    add(
      `Under ${f}, only goods with a barcode qualify as products.`,
      `Barcodes are not required; exchanged goods and services qualify as products.`,
    );
    add(
      `Under ${f}, internal transfers to a ${r}'s department are marketed products.`,
      `Internal non-market transfers are not products in marketing terminology.`,
    );
    add(
      `Under ${f}, gifts without payment are products when recipients express wishes.`,
      `Gifts without exchange are not products despite recipient wishes.`,
    );
  }

  if (pool.length < 200) throw new Error(`FALSE pool only ${pool.length}, need 200`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE");

const cases = buildCases({
  subsection: "5.1",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
