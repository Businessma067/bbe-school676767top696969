-- Update expanded explanations for 2.6-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['A trade is voluntary only when each side expects to be better off after exchanging. That mutual expected gain is what brings buyers and sellers into a market transaction in the first place.

The statement is true.', 'A market is any arrangement that brings willing buyers and sellers together. Online listings that connect people across a country still count, even when nobody bargains face to face.

The statement is false.', 'Markets can clear through negotiated or posted prices set by private parties. Government agencies sometimes regulate or set prices, but that is not a requirement for a market to exist.

The statement is false.', 'Prices do more than record a sale. They signal how scarce a good is relative to demand and guide how much buyers want and how much sellers offer.

The statement is false.', 'Services such as repairs are traded for money just like goods. Intangibility does not stop buyers and sellers from forming a market.

The statement is false.'] WHERE case_id = 'CASE 2.6.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Larger weekend crowds raise willingness to pay for herbs, which shifts demand right. With supply unchanged, the new intersection sits at a higher equilibrium price.

The statement is true.', 'Higher wholesale costs make each bunch less profitable at the old selling price, so the stall offers fewer herbs at each price, a leftward supply shift. Raising the selling price can restore some of that incentive to sell.

The statement is true.', 'A price above equilibrium leaves quantity supplied larger than quantity demanded, so stock piles up rather than clearing faster. Buyers do not prefer a higher price for its own sake.

The statement is false.', 'Rival stalls give buyers substitutes. That competition constrains how high any one seller can push price, even when each stall posts its own list.

The statement is false.', 'Stronger Saturday demand typically supports a higher equilibrium price, not an automatic cut. Cutting price would be the response to weak demand or surplus, not to a demand boom.

The statement is false.'] WHERE case_id = 'CASE 2.6.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['As price rises, some buyers who were just willing to buy at the old price stop buying. Fewer buyers remain active, so quantity demanded falls and the demand curve slopes down.

The statement is true.', 'To isolate the effect of own price on quantity demanded, other determinants such as income, tastes, and related prices must be held fixed. That is what ceteris paribus means in the law of demand.

The statement is true.', 'Holding other factors fixed, a higher ticket price reduces quantity demanded along the demand curve. Prestige or taste changes would be separate demand shifters, not the own-price effect itself.

The statement is false.', 'Other things equal, a lower coat price raises quantity demanded. Quality concerns would be a taste or information shift, not the usual own-price movement along demand.

The statement is false.', 'The law of demand says that, other things equal, quantity demanded falls when price rises, and rises when price falls. The claim reverses that relationship.

The statement is false.'] WHERE case_id = 'CASE 2.6.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Quantity demanded is one price-quantity pair on the curve. Demand names the whole schedule of those pairs across prices.

The statement is true.', 'A demand schedule plots as a downward-sloping curve: higher price, lower quantity demanded. An upward slope is the usual shape of supply, not demand.

The statement is false.', 'A demand schedule records how much buyers would purchase at each price. What sellers would offer belongs on a supply schedule.

The statement is false.', 'A change in income shifts the entire demand curve. Movement along the curve comes from a change in the good''s own price, holding other determinants fixed.

The statement is false.', 'Even for essentials, quantity demanded typically falls if price rises enough. Buyers economise, substitute, or buy less when the good becomes dearer.

The statement is false.'] WHERE case_id = 'CASE 2.6.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Snowfall forecasts change how valuable skiing looks this week. That non-price factor raises quantity demanded at each rental rate, shifting the demand curve right without needing a change in the posted price itself.

The statement is true.', 'Holding other factors fixed, a higher rental rate reduces quantity demanded along the demand curve. Holiday budgets may shift demand, but that is a separate change, not the own-price effect of a rate increase.

The statement is false.', 'Cheaper rivals are substitutes. At the shop''s unchanged rate, some customers switch away, so quantity demanded at that shop falls.

The statement is false.', 'A price above equilibrium creates surplus: more gear offered than customers take at that rate. Stock sits, it does not clear faster.

The statement is false.', 'A rightward peak-season demand shift with limited supply raises equilibrium rental rates. Lower rates are not the usual result of stronger demand.

The statement is false.'] WHERE case_id = 'CASE 2.6.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Other things equal, a higher market price makes extra production more rewarding, so producers offer a larger quantity. That direct price-quantity link is the law of supply.

The statement is true.', 'The upward slope comes from sellers offering more when price rises. Buyer demand behaviour belongs on the demand side and does not define why supply slopes up.

The statement is false.', 'At very low prices, covering variable costs becomes harder, so quantity supplied tends to be small, not maximal. Producers do not pour out maximum output when the selling price is unattractive.

The statement is false.', 'A technology change shifts the whole supply curve. Movement along the curve comes from a change in the good''s own price, with other supply determinants held fixed.

The statement is false.', 'Other things equal, higher wheat prices raise quantity supplied. Cost rises that track input prices are a separate supply shift, not the own-price law of supply.

The statement is false.'] WHERE case_id = 'CASE 2.6.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A supply schedule pairs higher prices with larger quantities offered. Plotted, those pairs trace an upward-sloping supply curve.

The statement is true.', 'Quantity supplied is one point on the curve at a given price. Supply names the whole relationship across prices. The terms are not interchangeable.

The statement is false.', 'Other things equal, higher prices raise the incentive to offer more units, so quantity supplied rises. Margins typically improve with price when costs are unchanged.

The statement is false.', 'Buyer purchase plans belong on a demand schedule. A supply schedule lists how much producers are willing to offer at each price.

The statement is false.', 'A rise in the good''s own price moves the market along the existing supply curve to a larger quantity supplied. A leftward shift would require a change in a non-price supply determinant.

The statement is false.'] WHERE case_id = 'CASE 2.6.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['At the intersection, quantity demanded equals quantity supplied. Plans match, so the bakery is not systematically short of rolls or left with a lasting pile of unsold ones.

The statement is true.', 'Early meetings raise office workers'' willingness to buy morning bread, which is a demand shift. Opening earlier may help meet that demand, but the driver is not a supply shift with demand unchanged.

The statement is false.', 'Dearer flour raises bakers'' costs and shifts supply left. Customer demand for bread does not jump right simply because an input got costlier.

The statement is false.', 'A price above equilibrium creates surplus: more baked than customers buy at that price. Stock lingers instead of selling out faster.

The statement is false.', 'Other things equal, a higher bread price raises quantity supplied along the supply curve. Costlier flour is a separate leftward supply shift, not the own-price effect of dearer bread.

The statement is false.'] WHERE case_id = 'CASE 2.6.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The demand and supply curves cross at one price-quantity pair. That intersection is the graphical picture of market equilibrium.

The statement is true.', 'Equilibrium price is defined as the price at which buyers want exactly as much as sellers offer. Quantity demanded equals quantity supplied there.

The statement is true.', 'With no surplus or shortage at that price, there is no immediate force from excess stock or unmet demand pushing price up or down.

The statement is true.', 'When quantity demanded and quantity supplied diverge, price tends to rise or fall. Those adjustments shrink the gap and move the market toward equilibrium.

The statement is true.', 'At equilibrium, the traded amount equals both quantity demanded and quantity supplied. That common quantity is the equilibrium quantity.

The statement is true.'] WHERE case_id = 'CASE 2.6.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Below the equilibrium price, buyers want more than sellers offer at that price. The gap is a shortage.

The statement is true.', 'When goods are scarce relative to demand at the posted price, buyers bid against each other. That competition pushes price up toward equilibrium.

The statement is true.', 'Unsold stock means sellers are offering more than buyers take. To clear inventory, sellers cut price, which puts downward pressure toward equilibrium.

The statement is true.', 'Above the equilibrium price, sellers offer more than buyers willingly purchase. The excess is a surplus.

The statement is true.', 'When plans diverge, rising or falling prices change quantity demanded and quantity supplied until they meet again. Price is the coordination device.

The statement is true.'] WHERE case_id = 'CASE 2.6.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['At equilibrium rent, quantity demanded matches quantity supplied. Listings neither accumulate week after week nor vanish into persistent shortage.

The statement is true.', 'New construction adds rental units at each rent, shifting supply right. With demand fixed, the new intersection is at a lower equilibrium rent.

The statement is true.', 'A lower asking rent raises quantity demanded along the demand curve. Tenants do not prefer higher rents for their own sake.

The statement is false.', 'Flats sitting vacant for weeks mean quantity supplied exceeds quantity demanded at the asking rent. That is a surplus, which points to rent above equilibrium, not below it.

The statement is false.', 'Strong tenant competition is excess demand at the current rent, which tends to push equilibrium rent up unless supply expands enough to offset it. Fear of regulation is not the standard market mechanism here.

The statement is false.'] WHERE case_id = 'CASE 2.6.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Surplus is defined by that imbalance: at the going price, sellers offer more than buyers take.

The statement is true.', 'Unsold stock leads sellers to shade price to attract buyers. That competition exerts downward pressure on price.

The statement is true.', 'A price above equilibrium leaves quantity supplied larger than quantity demanded, which is surplus, not shortage. Buyers do not create shortage by craving higher prices.

The statement is false.', 'Empty shelves and instant sell-outs mean buyers want more than is available at the posted price. That pattern signals shortage, while surplus shows up as lingering unsold stock.

The statement is false.', 'A bumper harvest shifts supply right. At the old price, that can create surplus unless demand rises enough to match. Larger supply does not automatically clear the market.

The statement is false.'] WHERE case_id = 'CASE 2.6.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Queues and goods vanishing quickly mean more people want to buy at the posted price than sellers can provide. That is the visible face of shortage.

The statement is true.', 'A ceiling below equilibrium keeps price from rising to clear the market. Quantity demanded stays above quantity supplied, so shortage can persist.

The statement is true.', 'Below equilibrium, buyers want more than is offered. The excess demand lasts until price rises (or some other adjustment restores balance).

The statement is true.', 'When units are scarce relative to demand, buyers bid against each other. That competition pushes price upward.

The statement is true.', 'Quantity supplied exceeding quantity demanded is surplus. Shortage is the opposite imbalance: quantity demanded exceeds quantity supplied.

The statement is false.'] WHERE case_id = 'CASE 2.6.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tickets vanishing in minutes at the posted price means many more buyers want seats than the organiser is offering at that price. Quantity demanded exceeds quantity supplied.

The statement is true.', 'People line up overnight because they expect seats to run out at the official price. Queues are a response to anticipated shortage.

The statement is true.', 'When official tickets are scarce at a low posted price, resale markets usually clear at higher prices, not below the sold-out rate. Scarcity supports a premium, not a forced cut.

The statement is false.', 'Extra performances add seats, which is a rightward supply shift. Audience dislike of more shows is not the usual story, and demand does not shift left just because capacity expands.

The statement is false.', 'A higher official price lowers quantity demanded along the demand curve and typically eases shortage. It does not enlarge the gap by keeping more buyers in the market.

The statement is false.'] WHERE case_id = 'CASE 2.6.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Income is a non-price determinant of demand. When income changes, quantity demanded at each price changes, so the whole curve shifts. Own-price changes alone move along a fixed curve.

The statement is true.', 'Inferior goods lose buyers when incomes rise, as people trade up. Demand at each price falls, which is a leftward shift.

The statement is true.', 'Discretionary electronics are typically normal goods. Lower household income reduces demand for them, shifting demand left, not right.

The statement is false.', 'For normal goods, higher income raises demand at each price, a rightward shift. Buyers do not automatically save every extra euro and abandon the good.

The statement is false.', 'A pay rise that raises coffee demand with supply fixed pushes equilibrium price up. Richer buyers do not force discounts through stronger demand alone.

The statement is false.'] WHERE case_id = 'CASE 2.6.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Stronger brand preference raises how much buyers want at each price. That is a rightward demand shift for the advertised good.

The statement is true.', 'Taste shifts move demand, and with a given supply that changes the intersection. Seasonal fashion can therefore move clothing equilibrium prices within a year.

The statement is true.', 'A health-driven preference for oat milk raises quantity demanded at each price, shifting demand for oat beverages right.

The statement is true.', 'If rivals become fashionable, some buyers leave the original good. Demand for it falls at each price, a leftward shift.

The statement is true.', 'Negative publicity changes buyer willingness to purchase, which is a demand shift. Producer feelings do not turn publicity into a supply shifter by themselves.

The statement is false.'] WHERE case_id = 'CASE 2.6.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If many more visitors want slots than the route can offer at the posted fee, quantity demanded exceeds quantity supplied. That imbalance is a shortage.

The statement is true.', 'Awards raise awareness and preference for Styrian tastings. At the same ticket prices, more people want to book, so demand shifts right.

The statement is true.', 'A rightward demand shift with constrained supply moves the intersection to a higher equilibrium fee. Stronger demand meets limited capacity.

The statement is true.', 'A higher fee reduces quantity demanded along the demand curve. That shrinks excess demand and can ease the shortage at the old low price.

The statement is true.', 'Longer opening hours expand how many tours can be sold, which is a supply increase. Tourists do not typically demand fewer tastings simply because hours stretch.

The statement is false.'] WHERE case_id = 'CASE 2.6.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When a substitute''s price changes, demand for the firm''s own product can shift, changing equilibrium quantity and price. Watching rival prices is therefore commercially relevant.

The statement is true.', 'The substitute''s price is a related-goods determinant. Its change shifts the demand curve. Movement along the curve comes only from the good''s own price.

The statement is true.', 'Streaming is a substitute for cinema visits. Cheaper subscriptions pull some viewers away, lowering demand for tickets at each cinema price.

The statement is true.', 'Tea and coffee are substitutes, not complements. Dearer tea typically raises coffee demand as some drinkers switch, rather than lowering it.

The statement is false.', 'Petrol and public transport are often substitutes for getting around. Higher petrol prices typically raise demand for buses and trains, a rightward shift, not a leftward one driven by travel becoming undesirable in general.

The statement is false.'] WHERE case_id = 'CASE 2.6.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Consoles and compatible games are used together. Dearer consoles mean fewer platforms in homes, so demand for matching titles falls at each game price.

The statement is true.', 'A leftward demand shift for the paired good, with supply unchanged, lowers the equilibrium quantity traded. Costlier complements can produce that outcome.

The statement is true.', 'Cheaper flights encourage more travel, which raises demand for complementary services such as airport parking and nearby hotels.

The statement is true.', 'Printers and ink are complements. Cheaper printers put more devices in use, raising demand for cartridges at each ink price.

The statement is true.', 'Cross-price effects for complements change how much buyers want of the related good. That is a demand shift. It does not directly move the supply curve of the related good.

The statement is true.'] WHERE case_id = 'CASE 2.6.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Diesel buses become more expensive to run when fuel spikes, so electric buses look relatively more attractive. Demand for electric buses rises at each purchase price.

The statement is true.', 'A purchase subsidy lowers the effective price buyers face, so municipalities want more electric buses at each market list price. That is a rightward demand shift.

The statement is true.', 'More battery capacity lowers production costs and increases quantity supplied at each bus price. With demand unchanged, equilibrium price falls.

The statement is true.', 'If demand shifts right while price is stuck, quantity demanded exceeds quantity supplied at that price. The imbalance is shortage, not surplus.

The statement is false.', 'At an equilibrium contract price, quantity demanded equals quantity supplied. Systematic delivery of buses cities refuse to run would mean plans do not match, which is not equilibrium.

The statement is false.'] WHERE case_id = 'CASE 2.6.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Higher energy costs shift supply left. With demand fixed, the new intersection is typically at a higher equilibrium price.

The statement is true.', 'Wages are an input cost for distribution. Higher wages reduce quantity supplied at each service price, shifting supply left.

The statement is true.', 'Cheaper components lower unit costs, so producers offer more at each price. Supply shifts right and, with demand unchanged, equilibrium price falls.

The statement is true.', 'Input costs are supply shifters. They move the whole curve. Movement along the curve comes from a change in the product''s own selling price.

The statement is false.', 'Cheaper steel lowers producers'' costs and shifts furniture supply right. It does not, by itself, shift demand left through weaker expected quality.

The statement is false.'] WHERE case_id = 'CASE 2.6.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lower unit costs make production more profitable at each market price, so quantity supplied rises. That is a rightward supply shift, not a leftward one.

The statement is true.', 'Better irrigation raises orchard productivity, so growers can offer more fruit at each price. Supply shifts right.

The statement is true.', 'Automation that sorts parcels more cheaply raises quantity of delivery services offered at each price. Supply shifts right.

The statement is true.', 'Technology changes the position of the supply curve. A change in the good''s own price alone traces movement along a given curve.

The statement is true.', 'With demand fixed, a rightward supply shift lowers equilibrium price. Technology-driven abundance does not raise the clearing price by itself.

The statement is false.'] WHERE case_id = 'CASE 2.6.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A rightward supply shift with demand unchanged moves the intersection down the demand curve. Equilibrium price can fall.

The statement is true.', 'The same rightward supply shift raises the equilibrium quantity when demand is fixed. More is traded at the new clearing point.

The statement is true.', 'Dearer raw materials raise costs and shift supply left. That leftward push can partially cancel the rightward effect of the new line.

The statement is true.', 'More capacity increases quantity available at prior prices, so excess demand is less likely. Shortage risk falls after a successful expansion.

The statement is true.', 'Extra efficient capacity lowers unit cost and raises quantity supplied at each price. That is precisely a rightward supply shift.

The statement is true.'] WHERE case_id = 'CASE 2.6.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each new bakery adds loaves at each price. Market quantity supplied rises, so market supply shifts right.

The statement is true.', 'When several suppliers leave, market supply shifts left. At the old stable prices, quantity demanded can exceed the smaller quantity supplied, producing shortage.

The statement is true.', 'Low-cost entrants expand market supply. With demand roughly stable for standardised goods, equilibrium price tends to fall.

The statement is true.', 'Fewer farmers growing the crop reduces market quantity supplied at each harvest price. That is a leftward supply shift.

The statement is true.', 'Market supply aggregates every seller''s offers at each price. Ignoring smaller rivals understates total supply.

The statement is false.'] WHERE case_id = 'CASE 2.6.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If next month''s costs look lower, producing later can be cheaper. Some output is postponed, so current quantity supplied falls at today''s prices, a leftward shift.

The statement is true.', 'Expecting future scarcity often encourages producers to produce more now, or at least keep supplying, rather than shut down entirely. Halting all current output is not the standard response.

The statement is false.', 'If tomorrow''s wheat price is expected to be higher, farmers often hold grain back for later sale. Current market supply tends to fall, not rise through dumping.

The statement is false.', 'Expectations are a supply shifter. They change how much is offered at today''s prices. Movement along today''s curve comes from a change in today''s own price.

The statement is false.', 'Goods placed in storage are withheld from today''s market. That storage choice reduces current supply relative to releasing the stock now.

The statement is false.'] WHERE case_id = 'CASE 2.6.25' AND tier = 'full';
