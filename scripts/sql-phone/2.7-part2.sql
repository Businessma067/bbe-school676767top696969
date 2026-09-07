-- Update expanded explanations for 2.7-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['A monopoly is the sole seller of the market demand curve. That curve slopes downward, so higher price means lower quantity demanded. The firm picks a price-quantity pair on that curve rather than accepting a flat market price.

The statement is true.', 'Price takers face a horizontal demand at the going market price. A sole concession holder facing the whole market demand curve can move price by changing quantity. That is price-making power, not price-taking.

The statement is true.', 'When close substitutes are far away, buyers have little ability to switch. A local monopoly-like concession can then sustain a price above marginal cost. Distant alternatives do not erase that local market power by themselves.

The statement is true.', 'A cartel is collusion among separate firms that try to act like one monopolist on price or output. That joint coordination is generally illegal under competition law. The aim is the monopoly outcome without a single legal merger.

The statement is true.', 'Price takers accept the market clearing price as given. They do not each pick that clearing price on their own, and they do not need to set it without watching rivals. The claim reverses how competitive pricing works.

The statement is false.'] WHERE case_id = 'CASE 2.7.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A big harvest can shift market supply and change the exchange price. Each small farmer still sells at that posted price and cannot move it alone. Seasonal supply shifts and price-taking behaviour can coexist.

The statement is true.', 'Grades tell buyers that lots meeting the same standard are interchangeable. That cuts perceived quality differences across farms. Homogeneity is what the competitive model needs, and grading pushes the market toward it.

The statement is true.', 'When many farms each hold a tiny share, one farmer''s extra truckload barely moves the market. Individual influence on price stays negligible. That supports treating each seller as a price taker.

The statement is true.', 'Once wheat is graded to the same specification, mill buyers treat lots from different farms as the same product. Homogeneity is judged from the buyer''s side. Standardised grades deliver that view.

The statement is true.', 'Being sold in a store does not decide market structure. Luxury handbags are branded and differentiated, while graded wheat is a near-homogeneous commodity. Store shelves alone do not make handbags near-perfect competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cartel price fixing keeps prices artificially high. When authorities break that agreement, rivals can undercut again and prices tend to fall toward competitive levels. Buyers gain from that restored rivalry.

The statement is true.', 'Standardised commodities with many small sellers often look near-perfectly competitive. Concentrated industries with few firms are where secret cartels can form. The two structures are different, and the contrast is real.

The statement is true.', 'Public fines raise the expected cost of collusion. Managers who see heavy penalties have more reason to avoid secret price meetings. Deterrence is part of why authorities announce the sanctions.

The statement is true.', 'Oligopoly allows independent pricing and strategic rivalry. What the law targets is collusive agreement among rivals, not competition itself. Firms may set prices on their own without a cartel pact.

The statement is true.', 'Cartel penalties exist to stop collusion and protect competition for buyers. They do not protect firms'' private right to fix prices together. The claim reverses the purpose of enforcement.

The statement is false.'] WHERE case_id = 'CASE 2.7.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market structure is product-specific and geography-specific. A few global phone makers can be oligopoly while many local shops sell cases competitively. Different layers of the chain need not share one structure.

The statement is true.', 'The relevant market for urgent local prescriptions can be the town itself. One pharmacy there is monopoly-like for that local demand even if drug makers compete worldwide. Global rivalry elsewhere does not erase local sole supply.

The statement is true.', 'Perfect competition needs many sellers, free entry, and price taking. A single global monopolist is the opposite structure. Price taking comes from many rivals, not from one firm owning everything.

The statement is false.', 'Geographic boundaries often decide whether buyers have real substitutes. Local pharmacies, parking lots, and utilities can have market power that a purely global lens would miss. Analysis does not treat every market as global by default.

The statement is false.', 'Drivers who need the terminal lot may not treat distant city parks as close substitutes. On-site exclusivity can still create local monopoly-like power. Other cities'' parks do not automatically make terminal parking perfect competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Monopoly and local monopoly-like cases centre on one dominant seller and few close substitutes. Regulators often watch prices or entry when that power is strong. The summary matches the chapter definition.

The statement is true.', 'A cartel is coordinated price or output fixing among rivals that should compete. In oligopoly that collusion is typically illegal. The label is about joint fixing, not ordinary independent rivalry.

The statement is true.', 'Oligopoly means a small number of large firms. Each firm knows rivals may react to its price or output choice. Strategic interdependence is the core idea.

The statement is true.', 'Perfect competition combines many sellers, a homogeneous product, free entry, and price taking. Standardised farm grades are the usual near-perfect textbook examples. The summary lines up with those assumptions.

The statement is true.', 'Fewer sellers, tougher entry, and stronger differentiation each weaken buyers'' ability to switch. Market power therefore tends to rise along those dimensions. The direction matches standard structure-conduct intuition.

The statement is true.'] WHERE case_id = 'CASE 2.7.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Pipelines have large fixed costs and declining average cost over a wide range. One network can then serve demand more cheaply than several parallel lines. That cost pattern is the natural monopoly-like logic.

The statement is true.', 'Where rivalry is impractical, authorities often regulate access charges instead. Capping transport tariffs limits the pipeline operator''s ability to exploit exclusivity. That oversight is a standard response to monopoly-like networks.

The statement is true.', 'Transmission and retail can be separate layers. Exclusive pipeline rights need not wipe out competition among firms that buy transport and sell gas to households. Retail monopoly does not follow automatically from pipeline exclusivity.

The statement is false.', 'Homogeneous molecules describe the product, not the number of pipeline owners. Statutory exclusivity still leaves one network operator. That is the opposite of many-seller perfect competition.

The statement is false.', 'Buried pipelines are sunk, costly infrastructure. Duplicate corridors are hard to finance and often blocked by exclusivity. Entry is deterred, not invited overnight.

The statement is false.'] WHERE case_id = 'CASE 2.7.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One firm holding every lift under an exclusive lease is the only seller of mountain transport in that valley. Skiers on site have no rival lift operator to switch to. That is local monopoly-like power.

The statement is true.', 'Tourism concessions can still create market power that authorities review. Private leisure use does not exempt exclusive operators from pricing or franchise oversight. The absolute claim that oversight never applies is wrong.

The statement is false.', 'Weather may shift demand from day to day, but the sole operator still faces the valley''s demand curve. Changing snow does not turn exclusivity into price-taking behaviour. A price taker needs many rivals, not variable weather.

The statement is false.', 'Exclusive leases and heavy fixed costs block duplicate cable systems on the same routes. Rivals cannot appear overnight under those conditions. Exclusivity deters entry rather than inviting many networks.

The statement is false.', 'Alternatives in other valleys matter only if skiers actually switch. When visitors stay put, those distant options do not discipline local lift prices. Captive demand preserves monopoly-like power.

The statement is false.'] WHERE case_id = 'CASE 2.7.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cement is heavy and expensive to haul far. High transport costs shrink the effective geographic market around each plant cluster. Few local plants then dominate, which strengthens regional oligopoly.

The statement is true.', 'Independent undercutting without a collusive pact is ordinary rivalry. Competition law targets coordinated fixing, not unilateral price cuts. Three rivals may lawfully compete on price.

The statement is true.', 'When each firm watches and answers rivals'' published quotes, pricing is strategic. That mutual awareness is the interdependence that defines oligopoly. Responsive list prices fit the pattern.

The statement is true.', 'Secret quotas that divide or limit output among rivals are classic cartel tools. They replace independent competition with joint restriction. That conduct is illegal under competition rules.

The statement is true.', 'Oligopoly means a small number of firms dominate the relevant market. Three plants covering most regional demand is exactly that concentration. The structure label fits.

The statement is true.'] WHERE case_id = 'CASE 2.7.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Many farmers deliver interchangeable graded beet to the same co-op. No single grower can force a better purchase price alone. Interchangeability and small shares keep individual pricing power low.

The statement is true.', 'Slight shape differences do not create luxury branding. Grading exists to treat beet as a standardised commodity, not as a fashion oligopoly. The leap from roots to luxury brands is wrong.

The statement is false.', 'Living plants do not decide market structure. Many sellers of standardised beet describe competitive supply, not monopoly. Delivery to a co-op does not prove a single seller.

The statement is false.', 'Seasonal supply may move the market price, but each small farmer still takes that price. A surge does not give every grower global price-making power. Tiny market shares stay tiny.

The statement is false.', 'National sugar prices form at broader markets and exchanges. Individual beet farmers accept the co-op or market purchase price. They do not each set the national price before delivery.

The statement is false.'] WHERE case_id = 'CASE 2.7.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Exclusive rights mean only one publisher can deliver that paper door to door in the district. Early-morning subscribers who want that service have no rival carrier under the same franchise. Close substitutes for that delivery channel are missing.

The statement is true.', 'Exclusive contracts that shut rivals out of a concentrated local market can raise competition concerns. Authorities may examine whether foreclosure harms buyers. Oversight of exclusivity is therefore possible.

The statement is true.', 'The exclusive publisher faces local demand for its subscription package and can choose price along that curve. It does not take a competitive market price as given. That is price-making behaviour.

The statement is true.', 'One publisher with exclusive district delivery is the sole seller of that home-delivery service. Limited local substitutes create monopoly-like power inside the district. The structure follows from exclusivity.

The statement is true.', 'Online news is a substitute for some readers even if the physical route stays exclusive. That outside option can limit how high print subscription prices can go. Delivery exclusivity does not erase digital competition.

The statement is true.'] WHERE case_id = 'CASE 2.7.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Duopoly means two dominant sellers. Two engine makers supplying most of the large commercial market fit that label, and duopoly is a special case of oligopoly. The classification matches the facts.

The statement is true.', 'Secret price coordination between the two suppliers replaces independent rivalry with joint fixing. That is cartel conduct and is illegal under competition law. Two is enough for a cartel.

The statement is true.', 'Developing jet engines requires huge research and testing outlays. Those sunk costs keep most potential entrants out. High barriers help lock in the few-firm oligopoly.

The statement is true.', 'Airlines shopping for large engines deal with a handful of makers. Wheat markets, by contrast, have many small farmers. Concentrated engine supply is structurally different from commodity agriculture.

The statement is true.', 'Long development cycles force each maker to watch the other''s launch timing and capacity plans. Mutual awareness of strategic moves is oligopoly interdependence. The industry fits that pattern.

The statement is true.'] WHERE case_id = 'CASE 2.7.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Large sunk networks make a second parallel system wasteful or unprofitable. One operator can then serve demand at lower cost than duplicates. That cost barrier supports natural monopoly-like structure.

The statement is true.', 'Barriers that keep rivals out reduce competition, they do not increase it. Incumbent market power typically rises when entry is blocked. The claim reverses the effect.

The statement is false.', 'Perfect competition assumes free entry. Permanent legal barriers contradict that assumption rather than strengthen it. Barriers move the market away from the competitive ideal.

The statement is false.', 'Statutory exclusivity grants one operator the route and keeps rivals out. Seller count falls, not rises, so perfect competition does not emerge from exclusivity. The direction is backward.

The statement is false.', 'Easy entry and many sellers are exactly what prevent one firm from setting the market price alone. Price taking follows from that structure. The guarantee claimed here is the opposite of what competition delivers.

The statement is false.'] WHERE case_id = 'CASE 2.7.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If cargo can move to another port at reasonable cost, shippers have an outside option. That threat can limit how high the exclusive crane operator can set tariffs. Substitute terminals matter when rerouting is feasible.

The statement is true.', 'Exclusivity means only one crane operator works that berth. Ships already tied to the terminal cannot hire a second on-site rival. Same-berth substitutes are absent by design.

The statement is true.', 'Crane systems are capital-intensive. Financing a duplicate set at the same terminal is rarely attractive under exclusivity. High fixed cost reinforces the single-operator structure.

The statement is true.', 'Exclusive concessions can confer local market power over captive ship calls. Port authorities may therefore review or cap crane tariffs. Oversight is a common response to that power.

The statement is true.', 'Standardised containers describe the cargo, not the number of crane firms. One exclusive concession still leaves a single operator. That is monopoly-like locally, not perfect competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Futures markets with many growers and processors are classic price-taking settings. Cement with a few regional plants is concentrated oligopoly. The contrast in structure and behaviour is real.

The statement is true.', 'When many participants trade at a clearing price, one grower''s lot barely moves the market. Individual pricing influence stays small. That is why participants act as price takers.

The statement is true.', 'The national futures price emerges from aggregate clearing, not from each grower''s private decree. Farmers take the posted contract price. They do not each set it before every month.

The statement is false.', 'Sale by weight is a commodity feature, not luxury branding. Fashion oligopoly rests on differentiation and few houses, which potatoes lack. Weight alone proves nothing about luxury structure.

The statement is false.', 'One exchange listing contracts is a trading venue, not a monopoly seller of potatoes. Many growers still trade as price takers. Standardisation supports competition, not monopoly.

The statement is false.'] WHERE case_id = 'CASE 2.7.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secret retail price fixing among rival houses replaces independent competition with joint coordination. That is cartel conduct and is illegal. Brand prestige does not legalise collusion.

The statement is true.', 'Perfect competition assumes buyers see rivals'' goods as perfect substitutes. Luxury design and brand loyalty mean handbags are differentiated. That contradicts the homogeneous-product assumption.

The statement is true.', 'A handful of houses dominating premium segments is few-firm concentration. Products are differentiated by design and brand, which fits differentiated oligopoly. The structure label matches.

The statement is true.', 'Limited editions and brand campaigns are chosen with rivals in mind. Each house watches how others position and launch. That strategic rivalry is typical of oligopoly.

The statement is true.', 'Building a luxury brand takes large marketing and reputation investment. New houses find entry hard, so concentration among incumbents persists. Barriers reinforce the oligopoly.

The statement is true.'] WHERE case_id = 'CASE 2.7.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mining cartels inflate input prices for battery and materials buyers. Enforcement aims to break that coordination so prices reflect competition again. Downstream buyers are the intended beneficiaries.

The statement is true.', 'Secret quota deals that limit each producer''s exports are coordinated output restriction. That is cartel behaviour among rivals. Competition authorities treat it as illegal.

The statement is true.', 'Firms may announce capacity plans on their own without agreeing quotas. Independent rivalry of that kind can remain lawful oligopoly conduct. Collusion requires coordination, not mere publicity.

The statement is true.', 'By capping competitive expansion, colluders keep supply tighter and prices higher. The joint goal mimics a monopoly outcome. Restricting output is the mechanism.

The statement is true.', 'Extraction from the earth does not decide structure. Lithium supply is often concentrated among few producers, which fits oligopoly more than perfect competition. Geology alone proves nothing about many price takers.

The statement is false.'] WHERE case_id = 'CASE 2.7.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['In the model, homogeneity means buyers treat one seller''s unit as identical to another''s. Perfect substitutes follow from that perception. The definition is about buyer view, not packaging alone.

The statement is true.', 'Brand advertising that builds loyalty tells buyers products differ. Loyalty is differentiation, which undermines homogeneity. The competitive assumption weakens when brands matter.

The statement is true.', 'Grade standards align quality so mills can switch among farms easily. Wheat from different growers becomes a close substitute. That is why graded grain is a textbook homogeneous example.

The statement is true.', 'If products are homogeneous, buyers switch to cheaper rivals immediately. One seller cannot raise price far above the market without losing customers. Homogeneity constrains price rises, it does not guarantee them.

The statement is false.', 'Differentiated retail goods vary by brand and style. Standardised grain grades sit closer to homogeneity. Retail differentiation is a weaker, not stronger, fit.

The statement is false.'] WHERE case_id = 'CASE 2.7.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When households can switch retailers, one supplier that raises price alone loses customers. Switching disciplines individual pricing power in open retail markets. That constraint is real where rivals are accessible.

The statement is true.', 'Wires and retail are different layers. A monopoly-like transmission grid can sit beside many retailers that buy wholesale power and compete for households. Coexistence of those structures is common.

The statement is true.', 'Concentration matters. A dominant generator or congested regional seller need not be a price taker even if small retailers take wholesale quotes. Not every participant is always a price taker.

The statement is false.', 'Consumer protection, licensing, and market rules can remain even with many registered suppliers. Seller count does not erase oversight by itself. Regulation and rivalry often coexist.

The statement is false.', 'Two national brands is few-firm concentration, not many price takers. Homogeneous energy does not turn a duopoly of retailers into perfect competition. Brand count alone fails the many-seller test.

The statement is false.'] WHERE case_id = 'CASE 2.7.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The only bridge at the gorge, held under exclusive rights, is the sole seller of that crossing. Drivers on that route lack a rival operator. That is monopoly-like local market power.

The statement is true.', 'Distant crossings matter only if drivers actually use them. When everyone stays on the exclusive bridge, those distant options do not discipline local tolls. Captive traffic preserves power.

The statement is false.', 'Asphalt is an input, not a market-structure test. An exclusive franchise operator faces the route''s demand curve and can set tolls. Standardised road material does not force price taking.

The statement is false.', 'Exclusivity and a single span leave one operator at that gorge. Drivers do not face many interchangeable bridge firms on the identical crossing. The "always many" claim is false.

The statement is false.', 'Building rival spans at the same gorge is costly and often blocked by franchise rights. High capital cost deters immediate duplication. Five overnight rivals are not encouraged by those costs.

The statement is false.'] WHERE case_id = 'CASE 2.7.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Alliances can blur into market division if partners stop competing on key routes. Regulators review cooperation to keep that line from being crossed. Scrutiny protects competitive freight markets.

The statement is true.', 'Reviewed capacity sharing may be allowed when rates and customers still face rivalry. Secret freight-rate cartels are a different, illegal category. Lawful operational cooperation is not the same as collusive rate fixing.

The statement is true.', 'Secret agreements that fix customer freight rates among lines are classic cartel conduct. They replace independent pricing with joint fixing. Competition law forbids that coordination.

The statement is true.', 'A small number of global carriers dominate container shipping. Each must weigh rivals'' capacity and schedule moves. That few-firm pattern is oligopoly.

The statement is true.', 'Independent schedules and unilateral undercutting are ordinary rivalry. Without a collusive rate pact, that conduct remains lawful oligopoly competition. Independence is what keeps it legal.

The statement is true.'] WHERE case_id = 'CASE 2.7.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Identical grades mean buyers treat corn from different silos as interchangeable. That perception is the homogeneous-product assumption. Grade identity supports it.

The statement is true.', 'Corn clearing with many sellers is near-competitive. Global container shipping with few lines is oligopoly. The structures differ sharply, and the contrast is correct.

The statement is true.', 'Many sellers, a homogeneous grade, and a common clearing price match the near-perfect competition template. Weekly exchange trading of identical corn is a standard textbook case. The approximation fits.

The statement is true.', 'Numerous participants mean one silo''s sale barely moves the clearing price. Individual influence stays small. Participants therefore act as price takers.

The statement is true.', 'The national clearing price forms from aggregate bids and offers. Individual silo owners take that price rather than decree it each week. They do not each set the national corn price.

The statement is false.'] WHERE case_id = 'CASE 2.7.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Exclusive launches and bundles are chosen with rivals'' responses in mind. Three platforms watching each other''s strategies is oligopoly rivalry. Those tools reflect interdependence.

The statement is true.', 'Many indie studios can compete in software while only a few hardware platforms dominate. Layers of the industry need not share one structure. Platform oligopoly can coexist with numerous developers.

The statement is true.', 'Secret hardware price fixing among the three platforms would be coordinated collusion. That is illegal cartel conduct. Platform branding does not legalise it.

The statement is true.', 'Physical discs do not create many sellers. Three dominant platforms remain oligopoly even if discs are tangible goods. Perfect competition needs many price takers, not a count of three.

The statement is false.', 'Network effects and platform investment raise entry barriers. New console makers rarely appear by the dozen each year. Those forces deter entry rather than guarantee it.

The statement is false.'] WHERE case_id = 'CASE 2.7.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Self-haul is an outside option only when households really use it. If almost everyone sticks with curbside pickup, distant dumps do not discipline fees. Constraint requires actual switching.

The statement is true.', 'The sole franchisee faces local demand for collection and can choose the fee along that curve. It does not take a competitive market price as given. That is price-making.

The statement is true.', 'Driving on public roads does not remove municipal fee oversight. Exclusive service contracts often remain subject to franchise rules or rate review. Public roads are irrelevant to that regulation question.

The statement is false.', 'An exclusive contract bars rival collectors from the same municipal route. Households do not face many interchangeable firms each week. Exclusivity contradicts the "always many" claim.

The statement is false.', 'Homogeneous bags describe the waste, not the number of collectors. One exclusive contractor is still a sole seller of the service. That is monopoly-like locally, not perfect competition.

The statement is false.'] WHERE case_id = 'CASE 2.7.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secret meetings that lock in identical prices are coordinated fixing among rivals. That coordination is illegal cartel conduct. Parallel outcomes reached by agreement are the problem.

The statement is true.', 'Authorities often examine emails, meetings, and other communications when prices move together. Parallel prices alone do not prove healthy competition, and records are not ignored. The claim is backward.

The statement is false.', 'Identical prices can arise from independent matching in oligopoly. Proof of cartel usually needs evidence of coordination, not prices alone. Automatic proof without further evidence is too strong.

The statement is false.', 'Public price matching can be lawful rivalry when each firm decides alone. Cartel rules typically target collusive agreement, not every matched quote worldwide. The absolute "per se everywhere" claim fails.

The statement is false.', 'Oligopoly is a market structure. Cartel is illegal collusion. Three independent price setters remain oligopolists, not automatic cartel members. Independence keeps the distinction.

The statement is false.'] WHERE case_id = 'CASE 2.7.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Local utilities often have one dominant seller, few close substitutes, and costly or legal entry barriers. That combination produces monopoly-like power. The summary matches the chapter pattern.

The statement is true.', 'Oligopoly is few firms that watch each other''s moves. Pricing and output choices can be strategic because rivals may react. Interdependence is the defining feature.

The statement is true.', 'Cartels coordinate rivals'' prices or output secretly or jointly to approach monopoly results. That coordination is illegal under competition law. The aim is the monopoly outcome without lawful merger.

The statement is true.', 'Standardised crops with many small growers are the usual near-perfect examples. Each farmer takes the exchange or co-op price. Homogeneity and tiny shares deliver price taking.

The statement is true.', 'Fewer sellers, higher barriers, and more differentiation each reduce buyers'' switching options. Market power tends to rise along those dimensions. The comparative ranking matches the chapter intuition.

The statement is true.'] WHERE case_id = 'CASE 2.7.50' AND tier = 'full';
