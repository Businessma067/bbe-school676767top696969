-- Update expanded explanations for 2.6-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['A large expected harvest raises how many pickers vineyards want under contract at each wage. That non-wage change increases labour offered into the August contract market, which is a rightward supply shift for seasonal picker labour.

The statement is true.', 'Contracts locked in early fix some labour before sugar levels spike and demand for pickers jumps. With more workers already secured, the gap between quantity demanded and quantity supplied at the rush is smaller, so shortage risk falls.

The statement is true.', 'At a wage below the market-clearing level, employers want more labour than workers are willing to supply. Quantity demanded exceeds quantity supplied, so vineyards can fail to fill all picker slots.

The statement is true.', 'Higher wages in competing fruit regions pull workers away from Styria. At each Styrian wage, fewer pickers remain available locally, which is a leftward shift of Styrian labour supply.

The statement is true.', 'The wage is the own-price of labour. Along an upward-sloping labour supply curve, a higher offered day rate raises the quantity of pickers willing to work, other things equal.

The statement is true.'] WHERE case_id = 'CASE 2.6.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When demand and supply both move, each shift pushes price in its own direction. The final price change is therefore ambiguous until you compare how large the two shifts are.

The statement is true.', 'Equilibrium is the intersection of demand and supply. After simultaneous shifts, the new curves cross at a different point, and that new intersection is what you read for the changed price and quantity.

The statement is true.', 'A rightward demand shift raises willingness to pay at each quantity. A leftward supply shift cuts quantity offered at each price. Both forces push the clearing price up, so equilibrium price is likely to rise.

The statement is true.', 'A rightward demand shift raises quantity traded at the new equilibrium. A rightward supply shift does the same. Together they raise equilibrium quantity even if the price change remains ambiguous.

The statement is true.', 'A disaster can destroy capacity (supply left) while also changing what people want to buy (demand). Both curves can therefore move in the same period, not only one at a time.

The statement is true.'] WHERE case_id = 'CASE 2.6.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A binding ceiling keeps price below the clearing level, so quantity demanded exceeds quantity supplied. When money price cannot allocate the scarce units, waiting lists, queues, or other non-price devices often appear.

The statement is true.', 'If the legal maximum sits above the market-clearing price, sellers and buyers still meet below the cap. The ceiling never binds, so it does not change the equilibrium outcome.

The statement is true.', 'Controlled rents below the open-market clearing level reduce the return on letting. Over time landlords may withdraw units or cut maintenance that keeps flats lettable, so fewer units remain available to lease.

The statement is true.', 'A ceiling below equilibrium creates shortage: at the capped price, quantity demanded exceeds quantity supplied. The claim reverses that imbalance by saying supply exceeds demand.

The statement is false.', 'A below-equilibrium ceiling blocks price from rising to clear shortage. Surplus is the opposite imbalance (excess supply), and the binding problem here is shortage, not surplus that needs a falling price.

The statement is false.'] WHERE case_id = 'CASE 2.6.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A long waiting list means more households want controlled flats than are available at the regulated rent. That is excess demand: quantity demanded exceeds quantity supplied at that price.

The statement is true.', 'When the controlled rent sits below the open-market clearing rent, the cap binds. Quantity demanded exceeds quantity supplied, so available controlled flats remain scarce over time.

The statement is true.', 'If regulated rents lag rising costs, landlords earn a weaker return on upkeep. They may cut or redirect maintenance spending toward uses that pay better, which can worsen quality and availability.

The statement is true.', 'At a binding low rent, flats are scarce, not abundant. Tenants still face search time, waiting lists, and other non-price costs even though the money rent is capped.

The statement is false.', 'Open-market leases at higher rates show that the uncontrolled clearing rent lies above the controlled cap, not below it. The higher free-market ads place the equilibrium above the regulated rent.

The statement is false.'] WHERE case_id = 'CASE 2.6.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A floor above the clearing price leaves quantity supplied larger than quantity demanded. Price cannot legally fall to wipe out that excess supply, so the surplus persists.

The statement is true.', 'Agricultural floors often create unsold output. Official purchase schemes buy the excess at the support price so the surplus is absorbed rather than left on the private market.

The statement is true.', 'At a binding high minimum, sellers offer more than buyers want at that price. Quantity supplied exceeds quantity demanded, which is surplus.

The statement is true.', 'If the legal minimum sits below the market-clearing price, trade still occurs above the floor. The floor never constrains the price, so it is not binding.

The statement is true.', 'A floor meant to help sellers can leave stock unsold because the high price creates surplus. Intent to protect sellers does not clear inventories immediately; the imbalance can remain.

The statement is false.'] WHERE case_id = 'CASE 2.6.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Wages are the price of labour. They balance how much work people offer with how much employers want to hire, just as prices coordinate goods markets.

The statement is true.', 'Labour demand slopes downward in the wage. When a mandated wage rises above the clearing level, employers move up that demand curve and hire fewer hours or workers.

The statement is true.', 'If the legal minimum sits below the market-clearing wage, actual wages can still clear above the floor. The floor does not bind, so employment and wage outcomes stay at the market equilibrium.

The statement is true.', 'A wage floor above the clearing wage creates surplus labour: more people want jobs than employers hire at that wage. That imbalance often shows up as unemployment, not the elimination of unemployment.

The statement is false.', 'At a binding minimum wage, quantity supplied of labour exceeds quantity demanded. Not every willing worker finds a job; some remain unmatched at the floor.

The statement is false.'] WHERE case_id = 'CASE 2.6.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Feed is an input. When feed costs jump, producing each litre is less profitable at a given farmgate price, so farmers offer less milk at each price. That is a leftward supply shift.

The statement is true.', 'A glut means quantity supplied exceeds quantity demanded at the prevailing price. Tightening the quota cuts deliveries, shrinks the excess supply, and moves the market closer to balance.

The statement is true.', 'With farmgate price fixed and feed costs higher, margins shrink. Farmers typically cut output that is no longer profitable; they do not expand production to celebrate.

The statement is false.', 'A quota that limits deliveries caps how much milk may enter the market. It restricts quantity supplied; it does not force extra production or raise supply.

The statement is false.', 'Extra milk at an unchanged demand and old farmgate price leaves more milk than buyers want. That imbalance is surplus (excess supply), not shortage.

The statement is false.'] WHERE case_id = 'CASE 2.6.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inflation is a rise in the general price level, not one item alone. Price indices average many goods and services so the measure tracks that broad movement.

The statement is true.', 'Interest-rate and related monetary choices often respond to inflation data. Central banks therefore watch price indices when setting those policies.

The statement is true.', 'If the same typical basket costs more month after month, households experience a higher general price level. That is how inflation shows up in everyday purchases.

The statement is true.', 'When prices rise and cash earns no interest, each unit of money buys fewer goods. Real purchasing power of idle balances falls even under moderate inflation.

The statement is true.', 'A one-day discount on a single product is a relative price cut, not a sustained rise in the overall price level. Inflation is economy-wide and persistent, not a shop-floor sale.

The statement is false.'] WHERE case_id = 'CASE 2.6.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A crop failure can spike one food price while other prices stay put. Monetary expansion that lifts spending across many markets raises the general price level. Those are different phenomena.

The statement is true.', 'New money spent promptly adds to aggregate demand. If real supply cannot keep pace, that extra spending bids up prices across goods and services.

The statement is true.', 'When money grows faster than real output, more nominal spending chases a slower-growing volume of goods. That imbalance tends to push the general price level up faster.

The statement is true.', 'Holding other factors fixed, a larger money supply raises, not reduces, nominal spending power against limited goods. Spending pressure rises with the money stock in that setting.

The statement is false.', '"Too much money chasing too few goods" describes inflationary pressure from excess money relative to output. Deflation is a falling general price level, the opposite idea.

The statement is false.'] WHERE case_id = 'CASE 2.6.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Supplier invoices rising across many shops point to a broad increase in costs and prices, not one isolated item. That pattern is upward pressure on the general price level.

The statement is true.', 'Cash earns little or nothing while goods cost more. When prices rise faster than any interest on idle balances, each euro of savings buys less in real terms.

The statement is true.', 'Financing repairs with newly issued notes puts spending power into the economy. That spending can arrive before bridges and related output expand, so demand may lead supply temporarily.

The statement is true.', 'Fast note growth without matching real output growth means more money chasing a similar volume of goods. That gap feeds inflationary pressure on the price level.

The statement is true.', 'Extra money raises spending only if goods can absorb it without large price jumps. Policymakers therefore ask whether capacity and output can meet the extra demand.

The statement is true.'] WHERE case_id = 'CASE 2.6.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Costlier credit discourages borrowing for consumption and investment. Weaker spending cools the demand that was bidding prices up, so inflationary pressure eases.

The statement is true.', 'Higher deposit and bond returns make saving more attractive relative to spending now. Households and firms often postpone purchases, shifting demand toward later periods.

The statement is true.', 'Mortgages and equipment loans become more expensive when policy rates rise. That higher financing cost is one channel through which rate increases restrain spending.

The statement is true.', 'Tightening seeks to slow nominal spending growth so money and credit do not outrun what the economy can produce sustainably. Aligning money growth with real capacity is the stabilising aim.

The statement is true.', 'When inflation stays above target for a sustained stretch, central banks often raise policy rates to cool demand. That response is standard monetary practice against persistent overshoots.

The statement is true.'] WHERE case_id = 'CASE 2.6.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tighter policy lifts mortgage rates. At higher borrowing costs, fewer households take new housing loans, so quantity demanded for those loans falls.

The statement is true.', 'Rate changes alter spending only after firms and households adjust plans. Because those effects arrive with lags, central banks must weigh timing carefully when they tighten.

The statement is true.', 'Tightening means making monetary conditions stricter. Raising key policy rates or slowing money growth are the usual tools for that stance.

The statement is true.', 'Higher financing costs make equipment loans more expensive, which typically discourages investment. Investment slows rather than accelerates when rates rise.

The statement is false.', 'Spending is not fixed with respect to interest rates. Tightening can cool demand over time and thereby reduce inflationary pressure.

The statement is false.'] WHERE case_id = 'CASE 2.6.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When deposit rates rise with policy rates, saving earns more relative to spending today. Some household funds move into deposits instead of immediate consumption.

The statement is true.', 'Delaying the flat purchase means the household does not take a mortgage now. Current quantity demanded for housing credit therefore falls.

The statement is true.', 'Rate rises are used to cool spending that feeds inflation, not to accelerate it. The policy aim is restraint, not a spending boom.

The statement is false.', 'Fewer competing buyers weaken demand for homes. Weaker demand typically eases upward pressure on equilibrium prices; it does not push prices higher.

The statement is false.', 'A higher reference rate raises the interest charged on a given loan size. Monthly borrowing costs rise, they do not fall.

The statement is false.'] WHERE case_id = 'CASE 2.6.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['With supply fixed and upward sloping, a rightward demand shift creates a new intersection higher and farther right on the supply curve. Equilibrium price and quantity both rise along that supply path.

The statement is true.', 'A higher equilibrium price makes extra units profitable. Along the supply curve, quantity supplied rises with price; producers do not cut quantity when price rises.

The statement is false.', 'More buyers at each price is a demand shifter: the whole demand curve moves right. Movement along the curve is caused by a change in the good''s own price, not by entry of new buyers.

The statement is false.', 'Stronger demand with unchanged supply raises both equilibrium price and quantity. The claim that both fall reverses the standard comparative-static result.

The statement is false.', 'After the shift, price adjusts until quantity demanded again equals quantity supplied at the new equilibrium. The imbalance is temporary, not permanent excess supply.

The statement is false.'] WHERE case_id = 'CASE 2.6.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equilibrium always equates quantity demanded and quantity supplied. After supply falls, that common quantity is simply lower, cleared at a higher price.

The statement is true.', 'The leftward supply shift raises the clearing price. Along a downward-sloping demand curve, buyers then take a smaller quantity at that higher price.

The statement is true.', 'Less supply at each price, with demand unchanged, pushes the intersection up and left. Equilibrium price rises and equilibrium quantity falls.

The statement is true.', 'Disruptions cut what sellers can offer at each price. That is a supply shift even if tastes and other demand factors stay fixed.

The statement is true.', 'With demand fixed and downward sloping, a leftward supply shift creates a new intersection higher on the demand curve. Price rises and quantity falls along that demand path.

The statement is true.'] WHERE case_id = 'CASE 2.6.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['More people raise quantity demanded at the old price, creating excess demand. Price then rises toward a new equilibrium that clears the larger demand.

The statement is true.', 'Extra residents want more rides at each fare. That non-price change shifts the demand curve for public transport to the right.

The statement is true.', 'More local renters shift housing demand right. If supply responds slowly, the new intersection has a higher equilibrium rent.

The statement is true.', 'Population is a non-price determinant of demand. Demographic change shifts the demand curve; movement along the curve comes from a change in the good''s own price.

The statement is false.', 'Fewer residents typically mean less demand at each price, a leftward shift. A shrinking town does not automatically shift demand right just because some people remain.

The statement is false.'] WHERE case_id = 'CASE 2.6.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A per-unit tax adds to the cost of each unit sold. At any given market price, sellers keep less after tax, so they offer less. That is a leftward supply shift.

The statement is true.', 'A leftward supply shift with demand unchanged lowers the equilibrium quantity traded. Legal liability on producers therefore can shrink market volume below the old equilibrium.

The statement is true.', 'Higher after-tax costs mean sellers need a higher market price to cover the same quantity as before, not a lower one. The claim reverses the cost logic.

The statement is false.', 'Less supply with stable demand typically raises the price buyers pay. Buyer price does not fall when producer taxes cut quantity supplied.

The statement is false.', 'A cost-changing tax shifts the supply curve. Movement along supply comes from a change in the good''s own price, not from the tax itself.

The statement is false.'] WHERE case_id = 'CASE 2.6.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A per-unit subsidy lowers the net cost of producing each unit. At any given market price, farmers keep more, so they are willing to supply more output. That is a rightward supply shift.

The statement is true.', 'More supply with demand unchanged typically lowers the equilibrium price and raises quantity. Subsidies do not raise equilibrium price through a rightward supply shift alone.

The statement is false.', 'A subsidy is a payment that changes producers'' net costs. A price ceiling is a legal maximum on the price buyers may pay. They are different tools and do not both cap buyer prices identically.

The statement is false.', 'Better margins from subsidies encourage more output at each price, expanding supply. They do not cut quantity supplied by confusing producers.

The statement is false.', 'Production subsidies act on sellers'' costs and shift supply. They do not shift buyer demand left for the subsidised good.

The statement is false.'] WHERE case_id = 'CASE 2.6.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Drought cuts yields, so less of the crop is available at each price. That reduction in seller offerings is a leftward supply shift for the affected harvest.

The statement is true.', 'Imports add another source of the good. Extra foreign shipments can raise total quantity supplied at each price and partially offset a domestic leftward shift.

The statement is true.', 'When supply drops suddenly and demand cannot adjust at once, the clearing price jumps. Short-run food markets often show sharp spikes after such leftward supply shocks.

The statement is true.', 'Frost that damages orchards cuts fruit supply. With demand largely unchanged, the new equilibrium has a higher fruit price.

The statement is true.', 'Weather changes what producers can harvest; it is a supply-side shock. Changes in tastes are demand shifters. The two are not the same.

The statement is false.'] WHERE case_id = 'CASE 2.6.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If buyers expect a lower price soon, waiting looks better than buying now. Current quantity demanded can therefore fall even before today''s price changes.

The statement is true.', 'Expecting higher petrol prices later encourages filling tanks and cans today. At today''s price, quantity demanded rises, which is a rightward shift of current demand.

The statement is true.', 'Anticipated higher income raises willingness to commit to durables now. Demand for appliances and similar goods can shift right before the income actually arrives.

The statement is true.', 'Expectations are a non-price demand shifter. They move the whole demand curve; movement along the curve comes from a change in the good''s own price.

The statement is false.', 'Panic buying means more purchases at the current official price, a rightward demand shift. It is not a leftward shift that would cut demand.

The statement is false.'] WHERE case_id = 'CASE 2.6.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['As in goods markets, labour market equilibrium is the wage at which the quantity of labour workers offer equals the quantity employers want to hire.

The statement is true.', 'When workers are scarce relative to hiring needs, employers compete for them. That bidding raises wages toward the level that clears the labour market.

The statement is true.', 'Higher wages usually draw more people into work or extra hours along the labour supply curve. Quantity supplied of labour typically rises, not falls, when wages rise, other things equal.

The statement is false.', 'A skill shortage is excess demand for labour, like a goods shortage. It creates upward wage pressure, not a surplus with downward pressure.

The statement is false.', 'Firms hire up to where the wage matches the value of marginal product. If the wage rises above that marginal value, hiring becomes less profitable and quantity demanded falls, not rises.

The statement is false.'] WHERE case_id = 'CASE 2.6.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fewer imports cut total domestic supply at each price. With demand unchanged, the new equilibrium typically has a higher price.

The statement is true.', 'Trade links domestic markets to foreign supply. Shocks abroad can raise domestic prices and cut quantities; global markets do not fully isolate domestic equilibrium.

The statement is false.', 'Finding alternate suppliers restores or rebuilds supply over time. That is a supply-side recovery, not a permanent leftward shift of demand.

The statement is false.', 'Port closures delay the arrival of components, reducing supply available for assembly. That is a supply disruption, not a rightward demand shift for those parts.

The statement is false.', 'Missing imported parts constrain production. Quantity supplied of finished goods falls when key inputs are scarce; it does not rise.

The statement is false.'] WHERE case_id = 'CASE 2.6.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A change in the good''s own price moves buyers or sellers along an existing curve. Changes in income, costs, tastes, and similar factors shift the curves. Keeping those ideas separate is basic market analysis.

The statement is true.', 'When money growth outpaces real output, spending pressure can raise the price level. Raising interest rates tightens policy, cools that spending, and can ease the inflation.

The statement is true.', 'A ceiling below equilibrium leaves quantity demanded above quantity supplied (shortage). A floor above equilibrium leaves quantity supplied above quantity demanded (surplus). Those are the standard binding outcomes.

The statement is true.', 'Income, tastes, and related-goods prices shift demand. Input costs and technology shift supply. Those lists match the usual non-price determinants on each side.

The statement is true.', 'Surplus puts downward pressure on price; shortage puts upward pressure. Price adjustment continues until quantity demanded and quantity supplied meet again at equilibrium.

The statement is true.'] WHERE case_id = 'CASE 2.6.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Higher policy rates feed into higher mortgage rates. Costlier loans reduce quantity demanded for housing, so housing demand slows as part of the anti-inflation stance.

The statement is true.', 'Economy-wide inflation comes from excess money relative to overall output. One industry expanding supply does not cancel that general price pressure across many markets.

The statement is true.', 'Higher bean costs shift café supply left while rising commuter traffic shifts demand right. Both forces push the clearing price up, but how far it moves depends on the relative size of the two shifts, so the price change is ambiguous without knowing those magnitudes.

The statement is true.', 'Markets use prices to coordinate buyers and sellers. Taxes, subsidies, and interest rates are policy tools that change incentives and can alter those market outcomes.

The statement is true.', 'A festival surge shifts demand right while venue capacity stays fixed. With more buyers competing for the same seats, equilibrium ticket price tends to rise, not fall.

The statement is false.'] WHERE case_id = 'CASE 2.6.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Higher deposit rates make saving more attractive relative to spending today. Some household funds shift into deposits instead of immediate purchases.

The statement is true.', 'When current spending cools after rate rises, fewer bids chase goods and services. That eases demand-side pressure on the general price level.

The statement is true.', 'Cheaper credit raises quantity demanded for interest-sensitive purchases such as homes and cars. Demand for those goods can shift right when rates fall.

The statement is true.', 'Lower rates stimulate borrowing and spending. If spare capacity exists, output can rise, but policymakers may still accept some upward price pressure as part of that stimulus trade-off.

The statement is true.', 'Mortgage and deposit rates are market prices for credit and saving. Households comparing those rates are using price signals inside those markets, not operating outside them.

The statement is false.'] WHERE case_id = 'CASE 2.6.50' AND tier = 'full';
