/**
 * Generate scripts/ch5-part-5.4.json — 100 cases for subsection 5.4.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"))["5.4"];
const OUT = "scripts/ch5-part-5.4.json";

const SCENE = [
  "Consider an electronics retailer that promotes frequent upgrades while a nearby workshop repairs laptops so customers keep devices longer instead of replacing them immediately. Evaluate the following economic assertions:",
  "Consider a fashion label that advertises seasonal collections aggressively while some shoppers prefer durable garments they can pass on to friends after years of wear. Evaluate the following economic assertions:",
  "Consider a household that exceeds its monthly budget after targeted online promotions persuade members to buy items they had not planned to purchase. Evaluate the following economic assertions:",
  "Consider a wardrobe-rental service that lends high-quality outfits for formal events instead of customers buying cheap garments worn only once. Evaluate the following economic assertions:",
  "Consider a computer refurbishment business that extends machine life through repair and reuse rather than encouraging immediate replacement when faults appear. Evaluate the following economic assertions:",
  "Consider a clothing swap event where participants exchange good-quality garments instead of discarding inexpensive items after a few months of use. Evaluate the following economic assertions:",
  "Consider a marketing campaign that creates new desires for accessories while consumer groups warn about spending beyond affordable limits. Evaluate the following economic assertions:",
  "Consider a family choosing between repairing a washing machine and purchasing a discounted replacement advertised as a limited-time offer. Evaluate the following economic assertions:",
  "Consider a student renting a formal suit for a graduation ceremony rather than buying low-quality clothing that would rarely be worn again. Evaluate the following economic assertions:",
  "Consider a retailer whose loyalty programme nudges customers toward additional purchases beyond their initial shopping list and budget. Evaluate the following economic assertions:",
  "Consider a community repair café where volunteers fix small appliances so residents reuse products instead of sending them to landfill. Evaluate the following economic assertions:",
  "Consider a business promoting sustainable production while critics question whether its advertising still stimulates unnecessary consumption. Evaluate the following economic assertions:",
  "Consider shoppers who accumulate unworn garments in wardrobes after impulse purchases driven by persuasive promotional messages. Evaluate the following economic assertions:",
  "Consider an event-styling firm offering premium garment rental so clients avoid buying single-use outfits for occasional occasions. Evaluate the following economic assertions:",
  "Consider a technology firm balancing product launches with a service programme that repairs and reuses equipment to support longer product life. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how businesses may create wishes and needs through continuous product development and advertising, sometimes in unethical ways. Evaluate the following economic assertions:",
  "Analyze why many consumers spend more money than they can afford or than they initially intended to spend. Evaluate the following economic assertions:",
  "Review the claim that people often buy goods they do not really need and will not use for long. Evaluate the following economic assertions:",
  "Analyze why greater awareness of sustainable production and consumption is considered desirable for businesses and consumers. Evaluate the following economic assertions:",
  "Review the potential risks of consuming too much and the need for more responsible behaviour on both sides of the market. Evaluate the following economic assertions:",
  "Analyze how repairing and reusing products such as computers can support sustainability rather than immediate replacement. Evaluate the following economic assertions:",
  "Review market trends away from cheap disposable clothing toward higher-quality garments that can be shared or passed on. Evaluate the following economic assertions:",
  "Analyze how renting high-quality clothes for particular events can be preferable to buying inexpensive outfits used briefly. Evaluate the following economic assertions:",
  "Review the distinction between responding to existing customer needs and stimulating new wants through marketing activity. Evaluate the following economic assertions:",
  "Analyze how ethical advertising relates to responsible business conduct in the sustainability discussion. Evaluate the following economic assertions:",
  "Review how overconsumption can arise when promotional activity encourages spending beyond planned budgets. Evaluate the following economic assertions:",
  "Analyze why both producers and consumers share responsibility for moving toward more sustainable consumption patterns. Evaluate the following economic assertions:",
  "Review how product repair and reuse extend useful life and reduce pressure for constant replacement purchases. Evaluate the following economic assertions:",
  "Analyze how garment rental services illustrate alternative consumption models focused on quality and temporary use. Evaluate the following economic assertions:",
  "Review the link between persuasive advertising, created needs, and purchases that provide only short-term satisfaction. Evaluate the following economic assertions:",
  "Analyze how high-quality durable goods can be circulated among users instead of being discarded after brief use. Evaluate the following economic assertions:",
  "Review why sustainable production requires businesses to consider environmental and social effects beyond immediate sales targets. Evaluate the following economic assertions:",
  "Analyze how impulse buying driven by marketing can leave consumers with unused products and strained finances. Evaluate the following economic assertions:",
  "Review the role of responsible marketing in limiting practices that manipulate consumers into excessive spending. Evaluate the following economic assertions:",
  "Analyze how extending computer use through repair aligns with sustainability goals described in the marketing responsibility overview. Evaluate the following economic assertions:",
  "Review how exchanging good clothes among friends reflects shifting attitudes away from throwaway fashion consumption. Evaluate the following economic assertions:",
  "Analyze why renting quality apparel for a single occasion may reduce waste compared with buying cheap event clothing. Evaluate the following economic assertions:",
  "Review how businesses that continuously launch new products contribute to a culture of wanting more than is strictly necessary. Evaluate the following economic assertions:",
  "Analyze the consumer finance risks when spending exceeds affordable limits because of unplanned purchases. Evaluate the following economic assertions:",
  "Review how awareness of sustainability can encourage consumers to question whether advertised products are truly needed. Evaluate the following economic assertions:",
  "Analyze how unethical advertising practices undermine trust and conflict with calls for responsible business behaviour. Evaluate the following economic assertions:",
  "Review how reuse of durable goods reduces the resource intensity of satisfying similar needs over time. Evaluate the following economic assertions:",
  "Analyze how quality-focused clothing choices support longer use and informal sharing rather than rapid disposal. Evaluate the following economic assertions:",
  "Review the contrast between cheap short-lived products and higher-quality items suited to repair, reuse, or rental. Evaluate the following economic assertions:",
  "Analyze how marketing that creates wishes can distort consumption decisions away from genuine needs. Evaluate the following economic assertions:",
  "Review why consuming too much poses economic and environmental risks that responsible actors should recognise. Evaluate the following economic assertions:",
  "Analyze how garment rental markets respond to consumers who want quality without permanent ownership of occasional-wear items. Evaluate the following economic assertions:",
  "Review how repair services for electronic equipment embody a more sustainable approach than automatic replacement. Evaluate the following economic assertions:",
  "Analyze how promotional techniques may lead buyers to spend more than the amount they originally planned to allocate. Evaluate the following economic assertions:",
  "Review the shared duty of businesses and households to adopt more sustainable production and consumption habits. Evaluate the following economic assertions:",
  "Analyze how passing on usable clothes to others extends product life and reduces demand for new cheap garments. Evaluate the following economic assertions:",
  "Review how advertising ethics intersect with broader responsibility for sustainable market outcomes. Evaluate the following economic assertions:",
  "Analyze why purchases made without real need often result in products that remain unused or are discarded quickly. Evaluate the following economic assertions:",
  "Review how responsible businesses balance innovation with awareness of overconsumption and waste. Evaluate the following economic assertions:",
  "Analyze how event-oriented clothing rental can lower the incentive to buy low-quality outfits for one-off use. Evaluate the following economic assertions:",
  "Review the mechanism by which new product launches and campaigns can stimulate demand beyond existing requirements. Evaluate the following economic assertions:",
  "Analyze how financial stress can follow when consumers repeatedly exceed affordable spending under marketing pressure. Evaluate the following economic assertions:",
  "Review the sustainability rationale for keeping equipment in service through maintenance and component replacement. Evaluate the following economic assertions:",
  "Analyze how social exchange of quality clothing offers an alternative to discarding still-usable garments. Evaluate the following economic assertions:",
  "Review why both supply-side marketing conduct and demand-side purchasing choices matter for sustainable consumption. Evaluate the following economic assertions:",
  "Analyze how misleading or manipulative advertising conflicts with expectations of ethical business practice. Evaluate the following economic assertions:",
  "Review how short product-use periods signal overconsumption when items were bought without lasting purpose. Evaluate the following economic assertions:",
  "Analyze how rental models can align firm revenue with temporary access rather than ownership of rarely used goods. Evaluate the following economic assertions:",
  "Review the consumer-protection dimension when advertising encourages spending beyond what households can afford. Evaluate the following economic assertions:",
  "Analyze how repair-and-reuse strategies reduce the frequency of new purchases for functionally similar products. Evaluate the following economic assertions:",
  "Review how preference for durable apparel supports sustainability compared with frequent purchases of inexpensive clothing. Evaluate the following economic assertions:",
  "Analyze the economic behaviour described when shoppers buy more than intended because promotions trigger additional wants. Evaluate the following economic assertions:",
  "Review how businesses contribute to sustainability when they support longer product life and responsible promotion. Evaluate the following economic assertions:",
  "Analyze how wardrobe rental illustrates access-based consumption for goods needed only for limited periods. Evaluate the following economic assertions:",
  "Review the environmental logic of reusing computers instead of replacing them at the first sign of malfunction. Evaluate the following economic assertions:",
  "Analyze how created needs through advertising differ from needs customers already held before exposure to campaigns. Evaluate the following economic assertions:",
  "Review why sustainable consumption requires questioning whether each purchase will be used meaningfully over time. Evaluate the following economic assertions:",
  "Analyze how throwaway clothing patterns exemplify overconsumption linked to low price and short expected use. Evaluate the following economic assertions:",
  "Review the business case for ethical advertising as part of a broader responsibility and sustainability agenda. Evaluate the following economic assertions:",
  "Analyze how sharing quality garments among acquaintances reduces parallel purchases of new low-cost alternatives. Evaluate the following economic assertions:",
  "Review how marketing-driven product cycles can encourage replacement before the end of a product's useful life. Evaluate the following economic assertions:",
  "Analyze the household budget implications when actual spending surpasses planned limits because of unanticipated wants. Evaluate the following economic assertions:",
  "Review how refurbishment and repair markets support circular use of durable consumer goods. Evaluate the following economic assertions:",
  "Analyze how formal-wear rental services target consumers seeking quality without long-term ownership. Evaluate the following economic assertions:",
  "Review the societal costs associated with consuming more goods than are needed or sustainably supportable. Evaluate the following economic assertions:",
  "Analyze how responsible firms may limit promotional practices that exploit consumer vulnerabilities. Evaluate the following economic assertions:",
  "Review how extending the service life of electronics through repair reduces premature disposal and new purchases. Evaluate the following economic assertions:",
  "Analyze how quality clothing exchanged among friends embodies reuse rather than single-user discard. Evaluate the following economic assertions:",
  "Review the marketing responsibility theme that businesses should not rely solely on stimulating ever-greater consumption. Evaluate the following economic assertions:",
  "Analyze how unplanned purchases of non-essential goods contribute to wardrobes and storage filled with unused items. Evaluate the following economic assertions:",
  "Review how rental of high-quality products for temporary needs complements sustainability-oriented consumer choice. Evaluate the following economic assertions:",
  "Analyze the difference between ethical promotion that informs consumers and practices regarded as unethical persuasion. Evaluate the following economic assertions:",
  "Review how affordability limits should inform consumption when advertising encourages spending above planned amounts. Evaluate the following economic assertions:",
  "Analyze how durable-goods repair supports environmental goals by lowering replacement frequency. Evaluate the following economic assertions:",
  "Review the trend toward rejecting cheap clothes discarded after a few months in favour of longer-lasting alternatives. Evaluate the following economic assertions:",
  "Analyze how businesses and consumers jointly influence whether markets move toward or away from overconsumption. Evaluate the following economic assertions:",
  "Review how immediate replacement of repairable equipment conflicts with sustainability-oriented consumption advice. Evaluate the following economic assertions:",
  "Analyze how occasion-based garment rental reduces demand for single-use purchases of low-quality clothing. Evaluate the following economic assertions:",
  "Review the role of continuous advertising in shaping wants that extend beyond what customers originally intended to buy. Evaluate the following economic assertions:",
  "Analyze why awareness of consumption risks is presented as necessary for both businesses and end consumers. Evaluate the following economic assertions:",
  "Review how product-sharing and rental arrangements can satisfy needs without full ownership of infrequently used goods. Evaluate the following economic assertions:",
  "Analyze how overstretched consumer budgets illustrate consequences of spending beyond affordable limits. Evaluate the following economic assertions:",
  "Review the sustainability benefits when quality products remain in use through repair, reuse, or informal transfer. Evaluate the following economic assertions:",
];

const TITLES = [
  "Created Needs and Ethical Advertising",
  "Overconsumption and Budget Limits",
  "Unnecessary Purchases and Short Use",
  "Sustainable Production Awareness",
  "Responsible Business and Consumer Action",
  "Computer Repair Versus Replacement",
  "Quality Clothing and Sharing",
  "Renting High-Quality Event Wear",
  "Marketing That Stimulates New Wants",
  "Spending Beyond Initial Intentions",
  "Risks of Consuming Too Much",
  "Disposable Fashion Versus Durability",
  "Unethical Advertising Concerns",
  "Repair Reuse and Longer Product Life",
  "Garment Rental as Alternative Ownership",
  "Impulse Buying Under Promotion",
  "Shared Responsibility for Sustainability",
  "Unused Goods After Marketing Pressure",
  "Extending Equipment Life Through Repair",
  "Clothing Exchange Among Friends",
  "Event Rental Instead of Cheap Purchase",
  "Advertising Ethics and Trust",
  "Affordability and Unplanned Spending",
  "Sustainable Consumption Choices",
  "Throwaway Products and Waste",
  "Business Innovation and Overconsumption",
  "Quality Over Quantity in Apparel",
  "Temporary Access Rental Models",
  "Malfunction Repair Not Immediate Replacement",
  "Promotional Influence on Spending Plans",
  "Consumer and Producer Sustainability Duties",
  "Short-Lived Purchases and Regret",
  "Circular Use of Durable Goods",
  "Formal Wear Rental Economics",
  "Manipulative Advertising Traps",
  "Budget Strain From Extra Wants",
  "Refurbishment and Environmental Goals",
  "Rejecting Cheap Disposable Clothing",
  "Needs Versus Marketing-Created Wants",
  "Household Overconsumption Patterns",
  "Responsible Promotion Practices",
  "Electronics Longevity Through Maintenance",
  "Passing On Usable Garments",
  "Limited-Use Clothing Disposal",
  "Marketing Cycles and Early Replacement",
  "Affordable Spending Limits",
  "Access-Based Consumption Models",
  "Awareness of Consumption Risks",
  "Ethical Limits on Persuasive Advertising",
  "Repair Markets and Sustainability",
  "Single-Use Outfit Alternatives",
  "Continuous Product Development Effects",
  "Financial Stress From Excess Spending",
  "Reuse Instead of Landfill Disposal",
  "High-Quality Rental for Occasions",
  "Unethical Campaign Recognition",
  "Planned Versus Actual Expenditure",
  "Durable Goods Sharing Networks",
  "Sustainability in Marketing Responsibility",
  "Wardrobes Filled With Unused Items",
  "Rental Quality Versus Cheap Ownership",
  "Business Conduct and Consumer Trust",
  "Overconsumption Environmental Costs",
  "Component Replacement and Repair",
  "Social Exchange of Quality Clothes",
  "Stimulating Demand Beyond Necessity",
  "Consumer Protection and Advertising",
  "Premature Replacement Avoidance",
  "Occasion Wear Rental Benefits",
  "Created Wishes Through Campaigns",
  "Joint Action for Sustainable Markets",
  "Infrequently Used Goods and Rental",
  "Spending More Than Affordable",
  "Longer Use Through Repair Reuse",
  "Rejecting Throwaway Fashion Norms",
  "Marketing Responsibility Overview",
  "Impulse Purchases and Non-Essentials",
  "Temporary Need Satisfaction Models",
  "Ethical Versus Unethical Persuasion",
  "Budget Planning Under Promotion",
  "Equipment Repair Sustainability Logic",
  "Durability and Informal Garment Transfer",
  "Overconsumption Societal Risks",
  "Responsible Firm Promotional Limits",
  "Electronics Service Life Extension",
  "Friend-to-Friend Clothing Reuse",
  "Consumption Beyond Strict Need",
  "Quality Rental Complementing Sustainability",
  "Advertising Influence on Intentions",
  "Affordability Awareness in Consumption",
  "Refurbishment Reducing New Purchases",
  "Long-Lasting Apparel Preferences",
  "Business Consumer Sustainability Partnership",
  "Repairable Faults and Replacement Choice",
  "Single-Event Garment Rental Logic",
  "Promotional Creation of Additional Wants",
  "Consumption Risk Awareness for All",
  "Sharing Rental Without Full Ownership",
  "Overstretched Budgets and Marketing",
  "Sustainability Through Extended Product Use",
  "Closing Responsibility and Sustainability Review",
];

const sceneIndices = [
  1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97,
];

// --- statement pools (expanded programmatically to 300+ TRUE / 200+ FALSE) ---

const TRUE_SEEDS = [
  [
    "Businesses may create wishes and needs by continuously developing new products and advertising them, not only by responding to existing customer demand.",
    "Marketing activity can stimulate wants that customers did not hold before exposure to new products and promotional campaigns.",
  ],
  [
    "Advertising is sometimes carried out in ways that are regarded as unethical when it manipulates consumers rather than informing them fairly.",
    "The responsibility overview acknowledges that promotional activity can cross into unethical practice, not merely factual product description.",
  ],
  [
    "Many people spend more money than they can afford because marketing and easy purchasing channels encourage additional unplanned buying.",
    "Spending beyond affordable limits is a recognised consumer problem linked to persuasive promotion and impulse purchasing behaviour.",
  ],
  [
    "Consumers often spend more than they initially intended when promotional messages trigger extra purchases beyond the original shopping plan.",
    "Actual expenditure can exceed the amount shoppers planned to allocate when campaigns stimulate additional wants during the transaction.",
  ],
  [
    "People frequently buy goods they do not really need and later leave them unused or barely used after the initial purchase.",
    "Purchases without genuine need often result in products that provide little lasting utility for the buyer.",
  ],
  [
    "Some purchases are used only for a very short period before being discarded, illustrating overconsumption of short-lived goods.",
    "Brief use followed by disposal signals that the item was not needed for long and reflects wasteful consumption patterns.",
  ],
  [
    "Greater awareness of sustainable production and consumption is considered desirable for both businesses and consumers in the marketing responsibility discussion.",
    "The chapter argues that both sides of the market should recognise the importance of more sustainable production and consumption.",
  ],
  [
    "Consuming too much carries potential risks that responsible businesses and consumers should recognise when making production and purchasing decisions.",
    "Overconsumption poses risks that the responsibility framework links to unsustainable resource use and financial strain.",
  ],
  [
    "Both businesses and consumers are expected to act in a more responsible and sustainable way rather than prioritising volume alone.",
    "Shared responsibility requires changed conduct on the supply side and the demand side of the market.",
  ],
  [
    "Computers and similar equipment should be used longer and repaired when problems occur instead of being replaced immediately at the first fault.",
    "Repair and continued use of electronic equipment exemplify sustainability-oriented behaviour described in the subsection.",
  ],
  [
    "Repairing and reusing durable products supports sustainability by extending useful life and reducing premature replacement purchases.",
    "Reuse through repair lowers the need for new units when existing products can still perform adequately after maintenance.",
  ],
  [
    "More consumers reject cheap clothes thrown away after a few months in favour of higher-quality garments with longer expected use.",
    "A market shift away from disposable fashion toward durable apparel reflects growing sustainability awareness among buyers.",
  ],
  [
    "High-quality clothes that remain in good condition can be given to friends or exchanged, extending use without a new purchase.",
    "Informal transfer of durable garments among acquaintances embodies reuse rather than single-user discard.",
  ],
  [
    "Renting high-quality clothes for a particular event can be preferable to buying inexpensive outfits that will rarely be worn again.",
    "Occasion-based rental of quality apparel avoids ownership of low-quality garments used only once or twice.",
  ],
  [
    "Garment rental services allow consumers to access quality products temporarily instead of purchasing cheap items for short-lived needs.",
    "Rental models satisfy limited-period needs without permanent ownership of rarely used clothing.",
  ],
  [
    "Businesses that focus only on stimulating demand may encourage overconsumption even when customers already possess sufficient goods.",
    "Continuous promotion of new items can push consumption beyond what is strictly necessary for meeting genuine needs.",
  ],
  [
    "Sustainable production requires businesses to consider consequences beyond immediate sales when developing and marketing products.",
    "Responsible firms weigh environmental and social effects alongside commercial objectives in the sustainability discussion.",
  ],
  [
    "Impulse purchases driven by advertising can leave households with strained budgets and storage filled with unused products.",
    "Unplanned buying under promotional pressure contributes to financial stress and accumulation of non-essential goods.",
  ],
  [
    "Ethical advertising practices form part of responsible business conduct within the broader sustainability agenda.",
    "Marketing ethics are linked to trust and responsible firm behaviour in the responsibility overview.",
  ],
  [
    "Extending product life through maintenance reduces waste compared with discarding repairable equipment for newer models.",
    "Keeping repairable goods in service supports environmental goals by lowering replacement frequency.",
  ],
  [
    "Consumers who question whether advertised products are truly needed contribute to more sustainable purchasing decisions.",
    "Critical evaluation of marketing claims helps limit purchases that would remain unused or be discarded quickly.",
  ],
  [
    "Access-based models such as clothing rental align firm revenue with temporary use rather than ownership of rarely worn items.",
    "Rental arrangements can match commercial supply with consumer needs for quality without long-term possession.",
  ],
  [
    "Marketing that creates new desires can distort spending decisions away from priorities consumers held before viewing campaigns.",
    "Stimulated wants may redirect budgets toward non-essential goods beyond originally planned expenditure.",
  ],
  [
    "Throwaway clothing patterns linked to low price and short expected use exemplify overconsumption in apparel markets.",
    "Inexpensive garments discarded after brief wear illustrate unsustainable consumption encouraged by fast replacement cycles.",
  ],
  [
    "Responsible businesses may limit promotional techniques that exploit vulnerabilities and push spending beyond affordable limits.",
    "Ethical limits on persuasion are part of the call for more responsible marketing conduct.",
  ],
  [
    "Refurbishment programmes that return equipment to usable condition support circular use of durable consumer goods.",
    "Refurbished products re-enter use instead of being scrapped when faults can be corrected economically.",
  ],
  [
    "Social exchange of quality garments reduces parallel demand for new cheap alternatives among participants.",
    "Sharing usable clothes among friends lowers the need for each person to buy additional low-cost items.",
  ],
  [
    "Households that exceed planned spending because of promotions illustrate how marketing can widen the gap between intention and outcome.",
    "Promotional influence can raise actual expenditure above the budget consumers set before shopping.",
  ],
  [
    "Sustainability-oriented consumers prefer durable goods that can be repaired rather than disposable items designed for early disposal.",
    "Durability and repairability support longer use and align with responsible consumption choices.",
  ],
  [
    "Event-oriented rental of premium apparel reduces incentive to purchase single-use low-quality outfits for occasional wear.",
    "Formal occasions can be dressed for through rental without buying garments that would seldom be used again.",
  ],
  [
    "Awareness of consumption risks is presented as necessary for producers and end consumers when evaluating market behaviour.",
    "Both businesses and households should recognise risks linked to excessive consumption and unsustainable practices.",
  ],
  [
    "Product-sharing arrangements can satisfy needs for infrequently used goods without every user buying a new unit.",
    "Shared access reduces duplicate ownership of items needed only occasionally.",
  ],
  [
    "Immediate replacement of repairable machines conflicts with advice to extend service life through maintenance and component renewal.",
    "Choosing repair over automatic replacement supports the sustainability principles outlined in the subsection.",
  ],
  [
    "Continuous product launches contribute to a culture of wanting more than is necessary to meet established needs.",
    "Frequent new releases and campaigns can normalise upgrading before existing products have reached the end of useful life.",
  ],
  [
    "Financial stress following unplanned purchases shows the economic consequence of spending beyond affordable limits.",
    "Budget overruns from marketing-driven buying can leave consumers unable to meet other obligations comfortably.",
  ],
  [
    "Quality-focused apparel choices support longer wear and informal circulation rather than rapid disposal after a few months.",
    "Investing in durable clothing enables extended use and transfer to others when the original owner no longer needs the item.",
  ],
  [
    "Businesses contribute to sustainability when they support longer product life and avoid purely volume-driven promotion.",
    "Responsible marketing combined with repair-friendly product design advances more sustainable market outcomes.",
  ],
  [
    "Unethical advertising undermines consumer trust and conflicts with expectations of fair and responsible business practice.",
    "Manipulative promotion is distinguished from ethical communication that respects consumer autonomy.",
  ],
  [
    "Purchases made without lasting purpose often end up unused, demonstrating waste linked to marketing-stimulated wants.",
    "Non-essential buying leaves households with goods that deliver little value beyond a brief initial period.",
  ],
  [
    "Rental of high-quality products for temporary needs complements consumer efforts to consume more sustainably.",
    "Short-term access to quality goods can reduce ownership of items that would otherwise be discarded after rare use.",
  ],
];

const FALSE_SEEDS = [
  [
    "Businesses only respond to existing customer needs and never influence wishes through new products or advertising activity.",
    "The overview states that businesses also create wishes and needs through development and advertising, not merely respond to existing demand.",
  ],
  [
    "All advertising is automatically ethical whenever it increases sales and informs customers about product features.",
    "Advertising can be unethical in some cases; higher sales do not prove ethical conduct.",
  ],
  [
    "Overconsumption affects only wealthy households and never people with modest incomes who shop on tight budgets.",
    "Many people spend more than they can afford regardless of income level; the problem is not confined to the wealthy.",
  ],
  [
    "Consumers always spend exactly the amount they initially planned because promotional messages cannot alter purchasing intentions.",
    "Many consumers spend more than initially intended when marketing stimulates additional wants.",
  ],
  [
    "Every purchase consumers make reflects a genuine long-term need that will be satisfied through extended product use.",
    "People often buy items they do not really need or use only briefly.",
  ],
  [
    "Sustainable production is solely the responsibility of consumers while businesses need only maximise short-term sales.",
    "Both businesses and consumers share responsibility for more sustainable production and consumption.",
  ],
  [
    "Repairing a computer always costs more than replacing it, so immediate replacement is the only rational sustainability choice.",
    "The chapter favours longer use and repair rather than immediate replacement when problems occur.",
  ],
  [
    "Renting clothes is always less sustainable than buying the cheapest available garment for a single event.",
    "Renting high-quality clothes for an event can be preferable to buying inexpensive rarely used outfits.",
  ],
  [
    "Cheap disposable clothing is the only trend in apparel markets because durability no longer interests any consumers.",
    "More consumers prefer high-quality clothes that last longer and can be shared rather than cheap throwaway items.",
  ],
  [
    "Passing clothes to friends eliminates any need for businesses to consider sustainable production practices.",
    "Consumer reuse complements but does not replace the need for responsible business conduct on sustainability.",
  ],
  [
    "Ethical advertising means never mentioning product benefits because any persuasion is inherently manipulative.",
    "Ethical advertising is distinguished from unethical practice; informing about benefits is not automatically unethical.",
  ],
  [
    "Businesses have no role in creating consumer wants because demand is fixed independently of marketing activity.",
    "Businesses may create wishes and needs through continuous product development and advertising.",
  ],
  [
    "Consuming too much carries no risks for households or the environment when products are inexpensive to replace.",
    "The overview highlights potential risks of consuming too much that responsible actors should recognise.",
  ],
  [
    "Immediate replacement of faulty equipment is always required for sustainability regardless of repair feasibility.",
    "Sustainability-oriented advice favours repair and reuse rather than automatic replacement at the first problem.",
  ],
  [
    "Garment rental only serves luxury markets and cannot reduce waste from single-use cheap event outfits.",
    "Renting quality clothes for particular events can be preferable to buying cheap rarely worn garments.",
  ],
  [
    "Marketing responsibility requires businesses to stop developing any new products so that wants are never stimulated.",
    "The call is for more responsible and sustainable conduct, not an end to all product development.",
  ],
  [
    "Consumers who exceed affordable spending limits do so only because prices rise, never because of promotional influence.",
    "Marketing and created wants contribute to spending more than people can afford or initially intended.",
  ],
  [
    "Unused purchases in wardrobes prove that advertising only informs existing needs rather than stimulating new wants.",
    "Unused goods after impulse buying illustrate how marketing can encourage purchases beyond real need.",
  ],
  [
    "High-quality durable clothing cannot be shared because durability automatically prevents transfer between users.",
    "High-quality clothes can be given to friends or exchanged, extending use through informal sharing.",
  ],
  [
    "Sustainable consumption means consumers must keep every product forever and may never replace worn-out items.",
    "Sustainability emphasises responsible use, repair, and reuse—not impossible permanent retention of all goods.",
  ],
  [
    "Businesses meet sustainability goals solely by advertising green labels while continuing unlimited volume promotion.",
    "Awareness and responsible action on production and consumption matter beyond superficial promotional claims.",
  ],
  [
    "Repair and reuse apply only to clothing and never to electronic equipment such as computers.",
    "The chapter explicitly mentions computers being repaired and reused rather than immediately replaced.",
  ],
  [
    "Renting quality products eliminates all ownership and therefore removes any business incentive to maintain product standards.",
    "Rental firms still supply quality goods; rental is presented as a sustainable alternative for temporary needs.",
  ],
  [
    "Ethical advertising requires identical messages for all products regardless of actual performance or consumer impact.",
    "Ethical practice relates to fair persuasion and responsibility, not identical messaging irrespective of context.",
  ],
  [
    "Overconsumption disappears once consumers are informed of product prices because price alone determines need.",
    "Even with known prices, marketing can stimulate wants and lead to buying beyond need or budget.",
  ],
  [
    "Throwaway fashion is sustainable when garments are cheap because low price offsets short useful life.",
    "Cheap clothes discarded after a few months exemplify unsustainable overconsumption, not sustainable practice.",
  ],
  [
    "Businesses bear no responsibility for consumer budgets when advertising encourages additional unplanned purchases.",
    "Both businesses and consumers should act more responsibly; firms should recognise effects of promotional conduct.",
  ],
  [
    "Refurbishment always wastes more resources than manufacturing a new unit regardless of product condition.",
    "Repair and reuse extend life and support sustainability when faults can be corrected economically.",
  ],
  [
    "Event clothing must be purchased because rental services cannot supply outfits of higher quality than cheap retail goods.",
    "Renting high-quality clothes for events is described as a trend instead of buying cheap single-use outfits.",
  ],
  [
    "Created needs through advertising benefit only businesses and never influence the quantity consumers buy.",
    "Created wishes can lead to buying things not really needed and to spending beyond intended amounts.",
  ],
  [
    "Sustainable production requires zero advertising because any promotion automatically causes unethical overconsumption.",
    "The issue is unethical advertising and excessive stimulation of wants, not the mere existence of all promotion.",
  ],
  [
    "Sharing clothes among friends increases total new clothing production because each exchange requires a fresh purchase.",
    "Sharing and passing on quality garments reduces demand for additional cheap replacements among participants.",
  ],
  [
    "Consumers always recognise manipulative advertising and therefore never spend beyond affordable limits.",
    "Many people still spend more than they can afford when influenced by persuasive marketing.",
  ],
  [
    "Product life extension through repair is irrelevant to sustainability when firms continue launching new models.",
    "Longer use through repair remains a recommended consumer and business practice within the sustainability discussion.",
  ],
  [
    "Renting formal wear for one occasion is identical to buying a cheap garment that is discarded after a single use.",
    "Rental of quality event wear differs from buying inexpensive clothing used briefly then thrown away.",
  ],
  [
    "Responsible marketing means maximising impulse purchases because higher turnover always indicates customer satisfaction.",
    "Responsible conduct includes limiting practices that push unnecessary consumption beyond affordable limits.",
  ],
  [
    "Households never buy items they will not use because rational consumers plan every purchase in perfect detail.",
    "People often buy goods they will not use or will use only for a very short time.",
  ],
  [
    "Environmental awareness absolves businesses from reviewing how their advertising stimulates additional consumption.",
    "Businesses as well as consumers must act more responsibly regarding sustainable production and consumption.",
  ],
  [
    "Garment rental lengthens total resource use per outfit because each rental customer must also buy a duplicate owned copy.",
    "Rental provides access without requiring each user to purchase a new rarely worn garment.",
  ],
  [
    "Unethical advertising is defined only by illegal pricing while persuasive exaggeration remains fully acceptable.",
    "Unethical advertising concerns manipulative or unfair persuasion, not illegal pricing alone.",
  ],
];

const PRODUCT_TOPICS = [
  "Electronics retailers",
  "Fashion labels",
  "Furniture workshops",
  "Appliance manufacturers",
  "Cosmetics brands",
  "Sporting-goods stores",
  "Book publishers",
  "Toy distributors",
  "Garden-centre chains",
  "Pharmacy groups",
  "Hotel operators",
  "Car-hire firms",
  "Tool-rental businesses",
  "Organic grocers",
  "Bicycle shops",
  "Jewellery retailers",
  "Stationery wholesalers",
  "Pet-supply stores",
  "Kitchen-equipment firms",
  "Footwear brands",
  "Eyewear retailers",
  "Music-instrument dealers",
  "Camping-gear suppliers",
  "Baby-product retailers",
  "Art-supply stores",
  "Wine merchants",
  "Florist networks",
  "Cleaning-product makers",
  "Mobile-accessory sellers",
  "Home-decor boutiques",
];

const PRODUCT_QUALIFIERS = [
  "in consumer electronics markets",
  "in apparel retailing",
  "in household durable-goods sectors",
  "when seasonal campaigns intensify",
  "during online promotional events",
  "among younger budget-conscious shoppers",
  "in formal-wear and occasion-dress markets",
  "where repair services remain available",
  "when credit makes impulse buying easier",
  "in communities promoting reuse",
  "where rental platforms operate alongside retail",
  "when firms launch frequent product updates",
  "among households tracking monthly budgets",
  "in second-hand and exchange networks",
  "where sustainability awareness is rising",
];

const FALSE_TWISTS = [
  "therefore businesses bear no responsibility for consumption outcomes",
  "so repair and reuse are never preferable to immediate replacement",
  "which proves advertising only mirrors fixed consumer preferences",
  "meaning ethical promotion is impossible in competitive markets",
  "so renting quality goods cannot reduce single-use purchases",
  "which shows overconsumption concerns apply only to luxury buyers",
  "therefore sustainable production is exclusively a consumer duty",
  "so every marketing message is automatically ethical if sales rise",
  "meaning created needs never influence actual spending behaviour",
  "which implies cheap disposable goods are always the sustainable option",
];

function expandWithContext(seeds, poolAdd, minSize) {
  let idx = 0;
  for (const [base, expl] of seeds) {
    for (const topic of PRODUCT_TOPICS) {
      for (const q of PRODUCT_QUALIFIERS) {
        const body = base.replace(/\.$/, "");
        const stmt = `For ${topic.toLowerCase()} ${q}, ${body.charAt(0).toLowerCase()}${body.slice(1)}.`;
        const e = `${expl.replace(/\.$/, "")} This holds for ${topic.toLowerCase()} ${q}.`;
        poolAdd(stmt, e);
        idx++;
        if (idx > 2000) return;
      }
    }
  }
}

function expandTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (stmt, expl) => {
    const key = stmt.toLowerCase().replace(/\s+/g, " ").trim();
    if (seen.has(key)) return;
    seen.add(key);
    pool.push([stmt, expl]);
  };

  for (const [stmt, expl] of TRUE_SEEDS) add(stmt, expl);

  const extraTrue = [
    [
      "Marketing responsibility includes recognising that promotional activity may encourage purchases beyond strict necessity.",
      "Responsible firms acknowledge that advertising can stimulate demand exceeding genuine need.",
    ],
    [
      "Consumers who repair rather than replace functional goods reduce pressure on resources needed for new manufacturing.",
      "Repair choices lower replacement frequency and support sustainable consumption.",
    ],
    [
      "Durable apparel that survives many seasons can circulate among several users before fibres are exhausted.",
      "Extended circulation of quality garments reduces per-user demand for new cheap clothing.",
    ],
    [
      "Budget plans are often exceeded when shoppers add non-essential items after exposure to targeted advertisements.",
      "Targeted ads can raise spending above the amount consumers originally intended to spend.",
    ],
    [
      "Firms that emphasise volume growth without sustainability awareness may worsen overconsumption trends.",
      "Unchecked volume focus can conflict with responsible production and consumption goals.",
    ],
    [
      "Occasion-wear rental pools quality garments across many users instead of each buyer owning a rarely used outfit.",
      "Shared rental stock spreads resource use across multiple events and customers.",
    ],
    [
      "Ethical promotion respects consumer autonomy rather than exploiting incomplete information or emotional pressure.",
      "Fair advertising practices are part of responsible business conduct in the sustainability context.",
    ],
    [
      "Short useful life after purchase indicates the good was not central to meeting a lasting consumer need.",
      "Brief use followed by discard aligns with the chapter's overconsumption description.",
    ],
    [
      "Workshop repair of laptops and desktops exemplifies keeping equipment in service when faults are fixable.",
      "Electronic repair supports longer use instead of immediate replacement at the first malfunction.",
    ],
    [
      "Swapping quality garments at community events extends wear without each participant buying new low-cost items.",
      "Clothing swaps embody reuse and sharing among consumers seeking more sustainable habits.",
    ],
  ];
  for (const [s, e] of extraTrue) add(s, e);

  expandWithContext(TRUE_SEEDS, add, 310);

  return pool;
}

function expandFalsePool() {
  const pool = [];
  const seen = new Set();
  const add = (stmt, expl) => {
    const key = stmt.toLowerCase().replace(/\s+/g, " ").trim();
    if (seen.has(key)) return;
    seen.add(key);
    pool.push([stmt, expl]);
  };

  for (const [stmt, expl] of FALSE_SEEDS) add(stmt, expl);

  expandWithContext(FALSE_SEEDS, add, 210);

  for (const [base, expl] of FALSE_SEEDS) {
    let ti = 0;
    for (const twist of FALSE_TWISTS) {
      const topic = PRODUCT_TOPICS[ti % PRODUCT_TOPICS.length];
      const body = base.replace(/\.$/, "");
      const stmt = `For ${topic.toLowerCase()}, ${body.charAt(0).toLowerCase()}${body.slice(1)}, ${twist}.`;
      const e = `${expl.replace(/\.$/, "")} The claim is wrong for ${topic.toLowerCase()} because ${twist}.`;
      add(stmt, e);
      ti++;
    }
  }

  let n = 0;
  while (pool.length < 210 && n < 400) {
    const seed = FALSE_SEEDS[n % FALSE_SEEDS.length];
    const twist = FALSE_TWISTS[(n * 5) % FALSE_TWISTS.length];
    const qual = PRODUCT_QUALIFIERS[(n * 11) % PRODUCT_QUALIFIERS.length];
    const stmt = `${seed[0].replace(/\.$/, "")} ${qual}, ${twist}.`;
    add(stmt, `${seed[1].replace(/\.$/, "")} ${twist}.`);
    n++;
  }

  return pool;
}

const TRUE = expandTruePool();
const FALSE = expandFalsePool();

if (TRUE.length < 300) throw new Error(`TRUE pool too small: ${TRUE.length}`);
if (FALSE.length < 200) throw new Error(`FALSE pool too small: ${FALSE.length}`);

const cases = buildCases({
  subsection: "5.4",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
