-- Update expanded explanations for 2.7-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['In perfect competition each firm is tiny relative to the market. Raising or cutting its own output alone does not move the market price, so the firm takes the prevailing price as given.

The statement is true.', 'Graded grain on an exchange can look close to perfect competition. Retail clothing is differentiated by brand, cut, and style, so the leap from commodity grades to every clothing market worldwide does not hold.

The statement is false.', 'Perfect competition is a many-seller model. One dominant seller that sets price for the whole market is monopoly structure, not perfect competition.

The statement is false.', 'The standard perfect competition model assumes buyers and sellers know the relevant prices. Deliberately incomplete information about rival prices is the opposite of that assumption.

The statement is false.', 'Perfect competition assumes a homogeneous product and free entry. Heavy differentiation and permanent legal entry barriers contradict both of those features.

The statement is false.'] WHERE case_id = 'CASE 2.7.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The town has only one licensed piped-water supplier for every household. Within that local market boundary, a single seller is monopoly-like.

The statement is true.', 'Monopoly is about dominance in a defined market. Global control of every related product is not required for a firm to be a monopolist in piped water locally.

The statement is false.', 'An exclusive licence can still confer market power even if the utility serves a public purpose. Public ownership or public-spirited goals do not, by themselves, erase that power.

The statement is false.', 'Pipes and networks involve large sunk costs. Those costs deter entry; they do not make rival networks costless once one set of pipes exists.

The statement is false.', 'Exclusive supply rights create monopoly-like conditions. They do not, by themselves, force the seller to price at marginal cost unless regulation requires that rule.

The statement is false.'] WHERE case_id = 'CASE 2.7.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Oligopoly means few large sellers. Each firm knows rivals can retaliate, so price and plan choices often take those reactions into account.

The statement is true.', 'Secret coordinated price fixing among rivals is cartel conduct and is generally illegal. Signing public minutes does not turn that coordination into a lawful cartel.

The statement is false.', 'Phones are physical goods, but structure depends on how many firms dominate. Three national carriers serving most subscribers is oligopoly, not perfect competition.

The statement is false.', 'Publishing list prices on websites does not remove mutual dependence. With few dominant carriers, each still watches how the others respond.

The statement is false.', 'Oligopoly means few sellers. Duopoly (exactly two) is only a special case; the definition is not limited to two firms worldwide.

The statement is false.'] WHERE case_id = 'CASE 2.7.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Authorities look for signs of collusion, including records of secret meetings and suspicious parallel pricing patterns among rivals.

The statement is true.', 'Oligopolists may compete independently. When they instead collude on price or output, that collusion is cartel conduct rather than ordinary rivalry.

The statement is true.', 'Many small bakeries competing openly on price are a competitive market. That pattern is the opposite of cartel collusion.

The statement is false.', 'Cartels coordinate to soften rivalry and push prices or output toward a joint monopoly-like outcome. They do not aim to force members to undercut each other daily.

The statement is false.', 'Anti-cartel policy targets collusive fixing of prices or output. It does not exist mainly to guarantee every firm an identical legal market share.

The statement is false.'] WHERE case_id = 'CASE 2.7.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Standardised wheat grades make the product homogeneous across sellers. That supports treating agricultural commodity exchanges as near-perfect competition examples.

The statement is true.', 'Clothes are physical goods, but retail clothing differs by brand and design. Physical form alone does not make every clothing shop worldwide perfect competition.

The statement is false.', 'Few dominant luxury houses that compete on design are oligopoly with differentiation. Monopolistic competition usually describes many sellers with product variety, not a handful of dominant houses. Treating those two structures as interchangeable labels for the same few-firm luxury market overstates the classification.

The statement is false.', 'Perfect competition needs many sellers. Two farmers on an exchange would be a duopoly, even though wheat is a crop.

The statement is false.', 'Farmers at a large exchange are price takers. No single farmer sets the national clearing price alone each morning.

The statement is false.'] WHERE case_id = 'CASE 2.7.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An exclusive parking concession leaves one operator for on-site terminal parking. That is monopoly-like power at that site.

The statement is true.', 'Without rivals inside the concession, the operator can sustain prices above competitive levels unless regulation constrains them.

The statement is true.', 'For captive on-terminal parking, the relevant geographic market can be drawn tightly around the airport curb. One concessionaire can then be dominant in that narrow market.

The statement is true.', 'Perfect competition requires many sellers of the same service. Many operators at the identical terminal curb would be needed for that structure, which an exclusive concession rules out.

The statement is true.', 'Drivers who need on-site airport parking have no close substitute seller at that same terminal curb lot under exclusivity.

The statement is true.'] WHERE case_id = 'CASE 2.7.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When cereal brands watch and react to each other''s promotions, that mutual awareness is oligopoly interdependence.

The statement is true.', 'Differentiation and oligopoly can coexist. Few dominant cereal brands remain oligopoly even when products are differentiated; differentiation does not require perfect competition.

The statement is false.', 'Similar box dimensions do not make branded cereals a homogeneous commodity. Wheat grading rules for bulk grain do not govern differentiated breakfast cereal markets.

The statement is false.', 'Physical goods on shelves can still be sold in oligopoly. Four-brand dominance with promotional rivalry is not perfect competition.

The statement is false.', 'Secret agreements to set identical prices among rivals are cartel conduct. Privacy of the meeting, or the absence of a government witness, does not make that lawful.

The statement is false.'] WHERE case_id = 'CASE 2.7.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An exclusive franchise on a route removes rival operators on that same line. Passengers then lack a close substitute seller for that route service.

The statement is true.', 'Monopoly-like conditions can come from natural cost advantages or from law. A statutory exclusive franchise is the legal route to single-seller structure.

The statement is true.', 'Exclusive franchise power can push fares above competitive levels. Regulators may therefore cap fares to protect riders.

The statement is true.', 'A legal barrier that blocks competing operators on the same lines reinforces the local single-seller structure.

The statement is true.', 'Exclusivity on the same routes is single-seller structure. Free choice among routes does not turn an exclusive franchise into many-seller perfect competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Perfect competition is defined against features such as lasting brand loyalty. Heavy advertising that creates strong brand loyalty is exactly the contrast the homogeneous-product assumption rules out, so naming that force sharpens and strengthens how the model''s assumptions are stated in an audit.

The statement is true.', 'Many small firms selling an identical wheat grade are numerous price takers with a homogeneous product. That setup approximates perfect competition.

The statement is true.', 'Free entry and exit without barriers is one of the standard conditions in the perfect competition model.

The statement is true.', 'Perfect competition typically assumes full information about relevant prices. Requiring deliberate misinformation about rival prices is not part of the efficient competitive model.

The statement is false.', 'Competitive firms in the perfect competition model are price takers with negligible individual share. Holding at least ten percent and acting as price makers contradicts that assumption.

The statement is false.'] WHERE case_id = 'CASE 2.7.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An illegal cartel rests on secret coordination of prices or output. Open independent capacity rivalry is different from that collusive conduct.

The statement is true.', 'When few large steel producers announce capacity plans with an eye on rivals, that signalling reflects strategic interdependence typical of oligopoly.

The statement is true.', 'Monopoly means one dominant seller. Three large firms sharing concentrated output are oligopoly, and monopoly does not mean more than ten firms.

The statement is false.', 'Homogeneous steel can still be sold under oligopoly when only a few producers dominate national output. Homogeneity alone does not create perfect competition.

The statement is false.', 'International trade in metals does not automatically create many domestic price-taking firms. Three concentrated producers remain oligopoly-like at home.

The statement is false.'] WHERE case_id = 'CASE 2.7.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When travel to another pharmacy is costly, the relevant market for prescriptions can be local. Distant rivals then matter less for day-to-day choice.

The statement is true.', 'Local market power does not rule out regulation. Price or margin rules can still limit what the pharmacy charges.

The statement is true.', 'Many pharmacies competing on the same village square would restore near-perfect competition locally. Geographic isolation is what prevents that pattern here.

The statement is true.', 'A sole nearby outlet twenty kilometres from the next option can exercise local monopoly-like power because isolation raises the cost of switching.

The statement is true.', 'Limited alternatives can allow higher prices. Distance alone does not force the pharmacy to charge marginal cost on every prescription.

The statement is false.'] WHERE case_id = 'CASE 2.7.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Two dominant carriers on one thin route are a duopoly. Duopoly is a special case of oligopoly.

The statement is true.', 'Matching fares can arise from watching rivals and competing, without a secret agreement. Parallel prices alone are not proof of an illegal cartel.

The statement is true.', 'With only two carriers, each watches the other''s fares. That mutual awareness differs from many small price-taking sellers in a competitive market.

The statement is true.', 'Rapid fare matching shows each carrier responds to the other. That is strategic interdependence between the two sellers.

The statement is true.', 'Secret fare fixing among rivals is cartel conduct and is generally illegal. Having only two carriers on the route does not legalise a secret agreement.

The statement is false.'] WHERE case_id = 'CASE 2.7.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Homogeneous specs plus thousands of small vendors leave any one shop with little power to set price above the going rate.

The statement is true.', 'Unique handmade cases differentiate by artist, while standardised bulk cases are interchangeable across many sellers. On a platform where variety and seller identity matter to buyers, artisan listings can still operate among many small vendors under shared platform rules, which is how the claim ranks them within near-perfect competitive conditions.

The statement is true.', 'Interchangeable third-party listings still compete with each other. Buyers do not always choose only the platform owner''s own listing.

The statement is false.', 'Price taking in the competitive model requires many sellers. Exactly one seller on the platform would be monopoly-like, not price-taking competition.

The statement is false.', 'A platform logo on screen does not make each small vendor a monopolist. Hosting many sellers is not automatic monopoly for those shops.

The statement is false.'] WHERE case_id = 'CASE 2.7.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secret meetings to fix wholesale bean prices among rival roasters are classic cartel behaviour and are illegal.

The statement is true.', 'Four regional roasters before collusion is a few-firm market. That oligopoly structure is where cartel temptation among rivals can arise.

The statement is true.', 'Independent oligopoly rivalry and illegal cartel collusion are different. Collusion is not the same label as lawful competitive conduct.

The statement is false.', 'Competition law targets collusion to protect buyers. It does not protect rivals'' right to fix prices jointly in private meetings.

The statement is false.', 'Cartels aim to reduce rivalry and raise joint prices toward a monopoly-like outcome. They do not force members to undercut each other daily.

The statement is false.'] WHERE case_id = 'CASE 2.7.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A cartel is illegal collusion among oligopolists to coordinate prices or output instead of competing independently.

The statement is true.', 'Perfect competition features many price takers, a homogeneous product, and free entry. Standardised agriculture is a common near-perfect example.

The statement is true.', 'Oligopoly is few large interdependent sellers. Mobile carriers and concentrated brands are standard illustrations.

The statement is true.', 'Monopoly is one dominant seller. Requiring at least twenty sellers each with five percent share describes a fragmented market, not monopoly.

The statement is false.', 'Fewer competing sellers typically raise market power, not lower it. The claim reverses that relationship.

The statement is false.'] WHERE case_id = 'CASE 2.7.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Where cost conditions make one network natural-monopoly-like, regulators often set rules in place of head-to-head competition.

The statement is true.', 'The perfect competition model assumes many sellers of an identical product. Applied to transmission, that means many sellers of identical cable services in one neighbourhood, which is precisely the many-seller assumption the model uses.

The statement is true.', 'Legal exclusivity over regional transmission lines leaves a single grid operator. That is monopoly-like network infrastructure.

The statement is true.', 'Natural monopoly-like conditions favour one provider with declining average cost over the relevant demand. They do not require fifty rival networks in parallel.

The statement is false.', 'Duplicating parallel grids is often more costly than one shared network. That cost fact reinforces single-network structure rather than forcing perfect competition in transmission.

The statement is false.'] WHERE case_id = 'CASE 2.7.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When two premium phone makers align launch timing and pricing with an eye on each other, that interdependence is oligopoly rivalry and can raise tacit coordination concerns.

The statement is true.', 'Two firms selling most premium smartphones is duopoly-like dominance. That fits oligopoly with strategic launch behaviour.

The statement is true.', 'Strategic product cycles between two premium vendors show mutual awareness of timing. That resemblance to oligopoly interdependence holds.

The statement is true.', 'Many small phone-case sellers on a platform form a fragmented accessories market. That fragmented structure is what the claim uses to define, by contrast, how concentrated premium handset manufacturing is organised.

The statement is true.', 'An illegal cartel needs evidence of a secret price or output agreement. Parallel public launches alone are not enough.

The statement is true.'] WHERE case_id = 'CASE 2.7.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Hundreds of farmers at a weekly clearing auction leave any one farmer unable to move the clearing price alone.

The statement is true.', 'Identical grade standards strip out quality differences. That reduced differentiation supports the homogeneous-product competitive model.

The statement is true.', 'Each small farmer takes the co-op clearing price as given. That is price-taking behaviour week by week.

The statement is true.', 'Wheat grown outdoors can still be a standardised commodity. Outdoor production does not make wheat markets mirror luxury handbag oligopoly.

The statement is false.', 'Two farmers total would be a duopoly. Being a crop does not turn two sellers into many-seller perfect competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Strategic tariff responses among few large carriers mark oligopoly. Many-firm perfect competition lacks that mutual strategic focus.

The statement is true.', 'Three firms hauling most national rail freight and watching each other''s tariffs fit oligopoly, not perfect competition.

The statement is true.', 'A cartel requires coordinated action to fix prices or divide markets illegally. That coordinated step is what distinguishes cartel from lawful rivalry.

The statement is true.', 'Three firms in oligopoly can still price independently. Concentration alone does not automatically create a legal cartel without an agreement.

The statement is false.', 'Publishing tariffs publicly can be ordinary independent pricing. It is not per se illegal cartel conduct when each firm sets its own schedule.

The statement is false.'] WHERE case_id = 'CASE 2.7.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A price-taking firm faces a market price it cannot usefully raise alone. Charging much above that price loses customers to rivals selling the same commodity.

The statement is true.', 'Agricultural commodity markets with many farmers are the textbook illustration of price-taking among numerous small producers.

The statement is true.', 'Free entry in the competitive long-run model attracts firms when profits are high and pushes economic profit toward normal levels.

The statement is true.', 'Homogeneous products with many sellers prevent one firm from choosing any price it likes without losing customers. Homogeneity does not create unilateral price-setting power.

The statement is false.', 'Price takers accept the posted market price. They do not negotiate a bespoke market price above that level with each customer.

The statement is false.'] WHERE case_id = 'CASE 2.7.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Local monopoly-like network operators often face service or price rules. Regulation is a response to that market power.

The statement is true.', 'A single wired broadband plant on every street, with no duplicate cable network, is monopoly-like infrastructure locally.

The statement is true.', 'An exclusive wired footprint, especially when duplication is costly, can confer local monopoly-like power over cable broadband access.

The statement is true.', 'Wireless or fibre rivals can still compete for retail customers even if only one cable plant exists on the street. Substitute technologies limit that power.

The statement is true.', 'Duplicating a second wired plant involves high sunk cost. That discourages a second network and supports natural monopoly-like conditions.

The statement is true.'] WHERE case_id = 'CASE 2.7.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Public price matching without a secret agreement can be lawful competitive parallelism. Parallel prices alone need not prove cartel.

The statement is true.', 'Matching litre prices within an hour shows each chain reacts to the other. That interdependent decision-making is characteristic of oligopoly.

The statement is true.', 'Two dominant chains on a motorway corridor are duopoly-like. Visible strategic pricing fits that structure.

The statement is true.', 'Corridor duopoly pricing among two chains differs from a commodity wheat auction with many price-taking farmers. Seller count and interdependence are not the same.

The statement is true.', 'Selling the same national fuel grade does not turn many independent rural stations into oligopoly. Oligopoly requires few dominant interdependent sellers, not merely a shared product grade.

The statement is false.'] WHERE case_id = 'CASE 2.7.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Research joint ventures that share technology can be lawful when members still compete on product prices. Sharing R&D is not automatically price-fixing collusion.

The statement is true.', 'Oligopoly becomes a cartel when coordination replaces independent rivalry on price or output. That shift from competition to collusion is the key change.

The statement is true.', 'Authorities do assess joint ventures. Cooperation can still harm product-market competition, so it is not ignored by default.

The statement is false.', 'Lawful consortium activity does not require rivals to publish identical downstream prices each week. Identical pricing would look like collusion, not a condition of legality.

The statement is false.', 'Not every form of cooperation is an illegal cartel. Legality depends on what firms coordinate and how it affects competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fifty vendors selling identical grade A eggs at a common posted price approximate perfect competition: many sellers, homogeneous product, shared price.

The statement is true.', 'Open stalls with many interchangeable sellers leave any one vendor little room to set a higher price alone.

The statement is true.', 'Giving an exclusive franchise to one egg vendor would remove the many-seller structure and create a monopoly-like market at that site.

The statement is true.', 'Vendors take the posted market price as given. They do not each set the city-wide egg price independently before the market opens.

The statement is false.', 'Grade A is a quality standard. Different fonts on labels do not turn homogeneous grade A eggs into oligopoly.

The statement is false.'] WHERE case_id = 'CASE 2.7.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Three national mobile operators serving most subscribers are few interdependent sellers. That fits oligopoly, not perfect competition.

The statement is true.', 'Many wheat farmers selling a standard grade at auction are numerous price takers with a homogeneous product. That approximates near-perfect competition in the commodity market.

The statement is true.', 'One firm with exclusive piped-water rights in a town is a single local seller. That is monopoly-like local structure.

The statement is true.', 'Secret wholesale meetings to coordinate prices remain illegal cartel conduct. Matching notebooks does not make collusion lawful.

The statement is false.', 'Similar packaging does not prove thousands of price-taking cereal producers. Few dominant brands can still control the aisle despite look-alike boxes.

The statement is false.'] WHERE case_id = 'CASE 2.7.25' AND tier = 'full';
