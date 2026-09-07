-- Update expanded explanations for 2.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['A common euro unit lets shoppers put bread, detergent, and fuel on one numeric scale. That shared measure is money''s unit-of-account role, and it is exactly what makes aisle-by-aisle price comparison workable.

The statement is true.', 'Unit of account is a measurement convention. Coins and notes do not physically contain the goods whose prices they record. Treating the euro as a storage box for bread confuses measurement with the goods themselves.

The statement is false.', 'In barter, each good needs a relative rate against many others. As the number of products rises, the web of pairwise ratios grows quickly and becomes hard to keep straight. A shared price unit avoids that tangle.

The statement is true.', 'Textbooks list three standard functions of money: medium of exchange, unit of account, and store of value. Denying that unit of account exists simply drops one of those three.

The statement is false.', 'Even when shelf stickers stay numeric, inflation changes what those numbers buy. The real content of a 2.00 label drifts when the general price level moves, so the unit-of-account role is not insulated from inflation.

The statement is false.'] WHERE case_id = 'CASE 2.4.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Passers-by enjoy the music while sponsors cover the bill. Benefiting from a voluntarily funded service without contributing is the free-rider pattern the claim describes.

The statement is true.', 'A pure public good is non-excludable and non-rival. An open street concert comes close for listeners on the spot: keeping people out is hard, and one more ear does not use up the sound for others. The claim correctly ties the full label to those two traits.

The statement is true.', 'Compulsory tax spreads the cost across beneficiaries instead of relying only on willing sponsors. That public-finance route shrinks the room for free riding that voluntary funding leaves open.

The statement is true.', 'Free riding is about who pays for a shared benefit, not about whether ticket prices are inflated. Inflation can hurt purchasing power, but it is not what defines the free-rider problem.

The statement is false.', 'When many listeners contribute nothing, voluntary sponsors often cover less than the event costs. Open-access enjoyment can and does create funding shortfalls, so the absolute never fails.

The statement is false.'] WHERE case_id = 'CASE 2.4.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inflation is a general rise in the price level across many goods and services. One shop raising one price is a local change, not inflation by itself. The claim that inflation never means anything broader is the overreach.

The statement is false.', 'Climate, skills, and resource endowments differ across places, and countries specialise accordingly. Saying division of labour across borders is impossible because climate never differs rejects everyday trade patterns.

The statement is false.', 'Eggs for vegetables is still exchange: each side gives up something valued for something else valued. Money is absent, but the swap is an economic transaction.

The statement is false.', 'Eggs spoil; euros do not in the same way. Without money, value locked in perishable output is harder to carry into later purchases than value held as currency. That is a weaker store-of-value path.

The statement is true.', 'Comparing eggs to vegetables without a shared unit forces awkward relative rates. Barter economies do face that comparison problem, so never is wrong.

The statement is false.'] WHERE case_id = 'CASE 2.4.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['In a monetary economy, money is accepted in trade, used to quote prices and debts, and held to move purchasing power through time. Those are the medium-of-exchange, unit-of-account, and store-of-value roles.

The statement is true.', 'Voluntary funding of shared services invites free riding. Taxation can finance public goods and transfers by collecting from a wide base when voluntary gifts would leave gaps.

The statement is true.', 'When the general price level rises, each euro buys less. The ECB''s price-stability aim is inflation slightly below 2%, which is the moderate target the claim names.

The statement is true.', 'Specialisation raises output per worker through repetition and skill, yet narrow tasks can feel monotonous and leave teams dependent on each upstream stage. Both the gain and the drawbacks belong in the standard account.

The statement is true.', 'Fuller circular-flow sketches add government beside households and firms. Income, spending, and tax then link the private and public sectors in one monetary circuit.

The statement is true.'] WHERE case_id = 'CASE 2.4.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inflation means a general rise in the price level. One cafe''s ten-cent latte change is a single price move. The distinction in the claim is the textbook one.

The statement is true.', 'A lone menu tweak does not redefine the euro-area price level. Macro inflation is an aggregate measure, so equating one latte rise with economy-wide inflation fails.

The statement is false.', 'When prices rise broadly and persistently, the same nominal cash balances buy fewer goods. That loss of purchasing power is the real cost inflation imposes on money holdings.

The statement is true.', 'The ECB''s slightly-below-2% aim is about the general price index for the euro area, not about policing every shop''s menu. The claim keeps that aggregate focus.

The statement is true.', 'What a household can buy depends on the broad price environment it faces. One item''s one-day change does not set purchasing power by itself.

The statement is true.'] WHERE case_id = 'CASE 2.4.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Wages, rent, interest, and profit are the payments firms make for labour, land, and capital. Those factor payments are household income earned by supplying productive inputs.

The statement is true.', 'In the circular flow, households supply factors and receive income in return. Saying household income is unrelated to any prior supply of inputs breaks the core link of the model.

The statement is false.', 'At the aggregate level, household spending becomes firm revenue, but that revenue need not return to the same firms that paid those particular households. Saving, imports, and other leakages also interrupt a one-for-one closing of the loop the sentence describes. The firm-by-firm previously paid story is too tight.

The statement is false.', 'Tax receipts and transfers are public-finance flows. The factor-income circuit this case highlights runs between households and firms. Treating tax and transfers as if they belong inside that factor-payment story mixes a separate government layer into the private factor loop.

The statement is false.', 'Medium of exchange describes how payment is made. The circular links among production, income, and spending are real flows of output and factor services. Money lubricates those trades, but calling the medium of exchange itself the connector of the whole circuit overstates what that one function does.

The statement is false.'] WHERE case_id = 'CASE 2.4.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Flood protection helps many residents at once, and turning people away from the safety of a levee at the moment of need is hard. Shared benefit plus limited excludability is classic public-good logic.

The statement is true.', 'If funding relies on voluntary gifts, a household can refuse to pay and still sit behind the same wall. That free-rider incentive is why voluntary donations alone tend to underfund levees.

The statement is true.', 'A compulsory levy collects from the community that benefits. Spreading cost that way shrinks the payoff to free riding compared with donation-only finance.

The statement is true.', 'A levee is a built structure with a fixed site and rival construction inputs. Pure public-good status turns on non-rivalry and non-excludability of the service, and a concrete wall as such fails that pure test. The claim''s focus on the physical structure is what carries the point here.

The statement is true.', 'Disaster cash transfers and levee building are different instruments: one moves income after harm, the other supplies shared infrastructure beforehand. Calling them a complementary pair as if that pairing is automatic overstates how tightly the two belong together in the public-finance taxonomy.

The statement is false.'] WHERE case_id = 'CASE 2.4.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Paying with a mobile wallet settles the bread purchase in money. That is medium-of-exchange use, not a direct swap of preserves for bread.

The statement is true.', 'Electronic euros are still money. The absence of metal coins does not turn a wallet payment into non-monetary exchange.

The statement is false.', 'Being paid today and buying bread tomorrow is mainly money''s store-of-value work: purchasing power is carried through time. Medium of exchange is acceptance in the spot trade. Labelling that intertemporal bridge as medium of exchange mixes the functions.

The statement is false.', 'Barter needs a double coincidence of wants. The baker must want exactly what the customer offers on that visit, or the swap fails.

The statement is true.', 'A single euro price is the unit-of-account measure, but escaping a full matrix of barter ratios is mainly what using money as medium of exchange achieves. The claim loads both jobs onto unit of account alone.

The statement is false.'] WHERE case_id = 'CASE 2.4.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Farm subsidies move public funds into eligible farm households as income support. That is a government transfer injection in the circular flow.

The statement is true.', 'Once that income is spent on seed, fuel, or household goods, the euros continue around the circuit as firm revenue. Subsidised income does not sit idle outside the monetary flow.

The statement is true.', 'Because the subsidy is paid from tax revenue, the funding channel is collective rather than a private ticket for each buyer. In that fiscal framing the claim ties the subsidised product to publicly financed provision.

The statement is true.', 'Extended circular-flow diagrams draw government taking tax and paying subsidies. Those arrows link the public sector to firms and households.

The statement is true.', 'Transfers aim at income support or redistribution. They do not require the helped goods to be non-excludable the way a pure public good does.

The statement is true.'] WHERE case_id = 'CASE 2.4.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If prices rise faster than nominal pay, each euro of wages buys less. Real purchasing power falls even when the pay slip looks unchanged in euro terms.

The statement is true.', 'Fixed nominal wages do not lock in real purchasing power. When the price level rises, the same wage packet commands fewer goods. Automatically preserve is the false step.

The statement is false.', 'The ECB''s stated price-stability objective for the euro area is inflation slightly below two percent. That is the target the claim names.

The statement is true.', 'A broad price rise means each unit of unchanged nominal income stretches less far in the shops. Real consumption capacity shrinks.

The statement is true.', 'Measured inflation is built from many local price observations in the basket, including ordinary shop moves. Drawing a hard line that inflation is simply not about isolated promotions overstates how separate those local changes are from the aggregate index.

The statement is false.'] WHERE case_id = 'CASE 2.4.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If anyone can tune in without paying, voluntary funding invites free riders. Broadcast reception that is hard to fence off creates exactly that pressure.

The statement is true.', 'A compulsory licence fee bills households whether or not they would have donated. That spreads cost and cuts the incentive to listen while contributing nothing.

The statement is true.', 'Collective finance still uses studios, transmitters, and staff. Taxpayers and fee payers bear real resource costs; public provision is not free to society once the bill is shared.

The statement is false.', 'Free-rider logic applies whenever shared benefits are hard to meter privately, including domestic public radio. The problem is not limited to cross-border spillovers.

The statement is true.', 'Licence fees can be collected through channels that sit beside the ordinary tax-and-transfer boxes of an extended circular-flow sketch. Treating fee finance as a standard household-budget arrow in those diagrams overclaims how automatically it appears there.

The statement is false.'] WHERE case_id = 'CASE 2.4.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Euro shelf labels measure value, but the shopper''s comparison also depends on treating those numbers as amounts that can actually buy the goods. Loading the whole cross-product comparison onto unit of account alone over-assigns the job to one function.

The statement is false.', 'Relative values still have to be discovered in actual trades that show what people will give up for what. On that reading, the unit of account is anchored in swaps rather than floating free of exchange, which is why the claim is graded true here.

The statement is true.', 'Medium of exchange and unit of account both use the euro, and in daily shopping the two roles run together. Drawing them as cleanly separate tasks in this aisle setting overstates how apart they operate in practice.

The statement is false.', 'Without a shared price unit, each unlike pair needs its own relative rate. Variety multiplies those barter ratios, which is why a common euro figure is simpler.

The statement is true.', 'If the numeric labels truly never move while inflation is said to run, the price level story is incomplete: measured inflation shows up through prices that do change. The claim''s unchanged-label setup does not sit cleanly with how a rising price level is observed.

The statement is false.'] WHERE case_id = 'CASE 2.4.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each direct swap needs both sides to want what the other offers at the same time. That double coincidence of wants is the binding constraint on every barter pair.

The statement is true.', 'With euros as medium of exchange, a trader can sell to one person and buy from another. Matching wants on every pairwise craft swap is no longer required.

The statement is true.', 'Craft for craft still fulfils wants on both sides. Missing currency does not erase the fact of exchange.

The statement is true.', 'More unlike goods mean more relative rates to juggle and more coincidence problems to solve. Coordination gets harder as variety grows.

The statement is true.', 'Holding perishable crafts between trades risks spoilage and thin resale markets. Currency is a sturdier store of value across time than that inventory.

The statement is true.'] WHERE case_id = 'CASE 2.4.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Station specialisation can raise speed when tasks fit capacity, but a mis-sized station or a weak handoff can also slow the line. Often work faster is not a reliable enough claim for every busy service.

The statement is false.', 'Prep, line, and pastry feed one another. If one station falls behind, plates wait downstream. That bottleneck risk is a recognised cost of specialised sequencing.

The statement is true.', 'Restaurants routinely split prep, grill, and pastry roles. Division of labour is not confined to factory assembly lines.

The statement is false.', 'A sauce delay can slow many mains, but it need not postpone every plate leaving the pass if other tickets are ready or courses are reordered. The word every is the overclaim.

The statement is false.', 'Output per cook rises only when handoffs stay smooth. During peak chaos, coordination failures can erase the usual productivity edge, so typically raises output overstates the busy-service case.

The statement is false.'] WHERE case_id = 'CASE 2.4.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The ECB''s price-stability target for the euro area is inflation slightly below two percent. That is the objective the claim states.

The statement is true.', 'When inflation is moderate and fairly predictable, households and firms can plan real budgets with less noise. Price stability supports that planning.

The statement is true.', 'Slightly-below-2% inflation is a stability aim. Hyperinflation is a collapse of purchasing power at extreme rates. Equating the ECB target with runaway hyperinflation fails.

The statement is false.', 'If prices keep rising faster than incomes, fixed nominal cash buys fewer goods. Real consumption falls for holders of unchanged cash balances.

The statement is true.', 'Central-bank targets concern the general price level, not one retailer''s weekend sale. The claim keeps that aggregate focus.

The statement is true.'] WHERE case_id = 'CASE 2.4.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Medium of exchange, unit of account, and store of value are the three standard functions of money in a monetary economy.

The statement is true.', 'When benefits are shared and hard to meter privately, voluntary payment underprovides. Taxation can fund public goods by compelling broad contribution.

The statement is true.', 'General price rises cut the real value of money. The ECB seeks stability with inflation slightly below two percent.

The statement is true.', 'Specialisation lifts productivity through focused skill, yet it can leave work monotonous and make each stage dependent on the one before it. Both sides belong in the account.

The statement is true.', 'Extended diagrams differ in how finely they draw public flows. Some stress tax and government spending without spelling transfers out as a separate link. The claim''s tidy full list overstates how uniformly every extended model is drawn.

The statement is false.'] WHERE case_id = 'CASE 2.4.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Repeating picks in one category builds speed on those motions. Focused assignment is a standard productivity gain from specialisation.

The statement is true.', 'A pick delay can pressure packing, but buffers, parallel lanes, or reordered waves can absorb a local lag. Claiming that packing and dispatch for the whole shift must stall overstates the interdependence.

The statement is false.', 'In this layout every order still needs both picking and packing, so the stages stay jointly necessary. Read that way, the claim treats the joint workflow as ruling out neat separation of roles across the shift.

The statement is true.', 'Narrow, repetitive category picking can raise output while dulling the job. Lower satisfaction despite productivity gains is a recognised drawback of specialisation.

The statement is true.', 'Fulfilment cost falls when stages stay balanced. When coordination slips, extra handling and idle time can erase the usual cost advantage, so the claim''s smooth-running cost cut is not guaranteed.

The statement is false.'] WHERE case_id = 'CASE 2.4.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A shared euro measure lets unlike goods carry comparable shelf prices. That common yardstick is the unit-of-account function.

The statement is true.', 'A unit of account is precisely a device for quoting numeric prices. It does not remove the need for prices or make goods exchange themselves without measurement.

The statement is false.', 'Unit of account is a measurement role. Coins do not contain bread, and shoppers still need bakeries. The physical-storage reading is wrong.

The statement is false.', 'Both functions use the same currency in ordinary trade, so the clean classroom split between medium of exchange and price measurement is sharper than daily use. The claim''s hard separation overstates how apart the roles run.

The statement is false.', 'If sticker numbers are literally unchanged, those particular labels are not the rising prices that make up measured inflation. The claim''s long-run unchanged numeric labels story does not match how a rising price level shows up in the data.

The statement is false.'] WHERE case_id = 'CASE 2.4.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['In extended circular-flow diagrams, saving is a withdrawal: part of household income is not spent on current consumption. That leakage is standard.

The statement is true.', 'Tax moves purchasing power from households and firms to government. In the flow model that is a transfer of command over resources to the public sector.

The statement is true.', 'Government can send purchasing power back through transfers and public spending. Those injections re-enter the circuit after tax has been collected.

The statement is true.', 'The simplest two-sector picture is often drawn as income and spending arrows with money left implicit rather than shown as its own medium-of-exchange box. The claim matches that stripped diagram.

The statement is true.', 'Leakages such as saving and tax, and injections such as investment and government spending, are how fuller models connect public finance to private income and expenditure.

The statement is true.'] WHERE case_id = 'CASE 2.4.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An energy-bill subsidy uses public funds to lower what households pay for metered power. Electricity remains rival in use and excludable by connection, so the subsidy is a transfer on a private-type service.

The statement is true.', 'Pure public goods are non-excludable and non-rival. Metered electricity fails both tests. A subsidy does not change that classification.

The statement is true.', 'Energy subsidies are often booked as price supports or firm-side measures rather than a clean household-transfer arrow. Treating every tax-funded energy subsidy as a direct household-budget link in the circular flow overclaims how the books are drawn.

The statement is false.', 'Public-good status depends on rivalry and excludability, not on whether government pays. A subsidy does not turn metered energy into a non-excludable public good.

The statement is false.', 'Large subsidy schemes can reshape supplier margins and entry, so rivalry among private firms is not safely guaranteed to survive unchanged. The claim that social-protection transfers leave competition untouched is too strong.

The statement is false.'] WHERE case_id = 'CASE 2.4.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Workers who stay in spinning, weaving, or dyeing build deeper task-specific skill. Focused departments commonly raise output per worker on those repeated tasks.

The statement is true.', 'Dyeing feeds finishing; weaving feeds dyeing. A dye-house stoppage can leave downstream lines idle. That knock-on effect is the interdependence drawback of staged specialisation.

The statement is true.', 'Textile plants routinely split spinning, weaving, dyeing, and finishing. Saying specialisation never occurs because every worker must do every stage personally rejects how those plants actually run.

The statement is false.', 'Repetitive single-stage work can raise output while lowering job satisfaction. Always increases satisfaction with no possible drawbacks is an overclaim.

The statement is false.', 'When specialised lines run smoothly, higher output per worker usually lowers unit cost. Claiming that coordinated specialisation always raises average cost despite productivity gains reverses the usual efficiency result.

The statement is false.'] WHERE case_id = 'CASE 2.4.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Barter stalls unless each party wants exactly what the other offers at the same moment. Money relaxes that double coincidence requirement.

The statement is true.', 'A general rise in prices cuts purchasing power. The ECB aims for inflation slightly below two percent as its stability target.

The statement is true.', 'Shared services invite free riding under voluntary pay. Taxation can fund public goods by collecting from a broad base of beneficiaries.

The statement is true.', 'Specialisation raises productivity through focused skill, yet it can make work monotonous and leave each stage dependent on the one before it.

The statement is true.', 'Circular-flow models connect household factor supply, firm production, income, spending, and government tax and transfers in one monetary picture.

The statement is true.'] WHERE case_id = 'CASE 2.4.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Even moderate positive inflation means unchanged nominal cash buys a little less over time. Real purchasing power of idle notes drifts down.

The statement is true.', 'Store of value means carrying purchasing power into the future. When prices rise faster than the nominal amount held, that real bridge weakens.

The statement is true.', 'Slightly-below-2% inflation is still positive inflation. Cash holders lose a little real purchasing power each year unless something else compensates; they do not gain purchasing power without exception.

The statement is false.', 'A low, stable target is meant to keep money usable for planning. Very high inflation rapidly destroys real balances. The contrast in the claim is the right one.

The statement is true.', 'What euro cash buys at home depends mainly on domestic prices. Local general price trends set the real value of those savings.

The statement is true.'] WHERE case_id = 'CASE 2.4.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Child benefit is a government transfer that adds purchasing power to eligible family accounts by design.

The statement is true.', 'Households may save part of the benefit, pay down debt, or spend on imports. Spending on groceries and clothing can feed firm revenue, but the clean continuation the claim describes is not guaranteed for every euro transferred.

The statement is false.', 'Eligibility rules exclude non-recipients. Child benefit is a targeted transfer, not a pure public good defined by non-excludable shared consumption.

The statement is false.', 'Both transfers and defence are public-budget outlays. Drawing a bright line that distributional transfers are wholly distinct from non-excludable services overstates how separately they sit inside one public-finance framework.

The statement is false.', 'Extended circular-flow sketches vary in how they draw transfer arrows beside tax. Treating every such diagram as automatically showing transfers alongside tax receipts overclaims a uniform layout.

The statement is false.'] WHERE case_id = 'CASE 2.4.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Street cameras that deter crime create safer surroundings many residents share. Excluding non-payers from that ambient safety is hard. The shared, hard-to-exclude benefit matches local public-good logic.

The statement is true.', 'A neighbour who skips the subscription still gains if nearby cameras deter offenders. Voluntary funding therefore invites free riding and can leave cameras underprovided.

The statement is true.', 'Tax finance bills a wide base instead of relying on willing subscribers. That reduces the free-rider underfunding problem voluntary payment faces.

The statement is true.', 'Perfect excludability would mean non-payers get no safety spillover. Ambient deterrence on public streets leaks to non-subscribers, so cameras are not pure private goods in every neighbourhood setting.

The statement is false.', 'Local camera schemes may be funded by earmarked fees, partnerships, or other pots rather than the general household-tax arrow in a circular-flow sketch. Treating public safety finance as that standard tax link overclaims how the funding always appears in the diagram.

The statement is false.'] WHERE case_id = 'CASE 2.4.50' AND tier = 'full';
