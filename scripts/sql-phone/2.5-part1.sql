-- Update expanded explanations for 2.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['A free market relies on private ownership, competition, and price coordination. It still needs the state for courts, defence, and other public goods that markets alone do not supply. The absolute ban on every public function is what makes the claim fail.

The statement is false.', 'Consumer sovereignty means household spending guides what firms produce. Planners are not the only decision-makers in a market system; purchasing shifts toward plant-based foods are exactly how demand steers output. The claim reverses that idea.

The statement is false.', 'In market systems, revenue and profit depend on selling what buyers want. When demand shifts, firms that expand the matching ranges protect sales and earnings. That response is the normal profit motive at work.

The statement is true.', 'Planned systems revise quotas through ministries and plans, which often lag local preference changes. Identical consumer shifts do not always rewrite quotas instantly. The words "always" and "instantaneously" overstate how planning works.

The statement is false.', 'Sales volumes and prices summarise what households are buying. Rising plant-based sales tell grocers preferences have moved, so they can adjust assortment. That information channel is a core market feature.

The statement is true.'] WHERE case_id = 'CASE 2.5.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An eco-social market can impose ecological quotas, such as a renewable share mandate, while wholesale power still clears on competitive exchanges. Quotas set the green constraint; prices still coordinate trade among generators. The two tools can run together.

The statement is true.', 'Environmental mandates set rules on fuels or emissions. Within those rules, generators can still compete on price where trading is allowed. Regulation and competition are not mutually exclusive in this design.

The statement is true.', 'Eco-social policy adds ecological goals to a market base. It does not require shutting every electricity market and switching to pure central planning. Power exchanges can continue under green rules, so the absolute ban fails.

The statement is false.', 'Once plants face fuel, capacity, and environmental constraints, dispatch still responds to market prices. Higher wholesale prices pull in more costly units; lower prices idle them. Prices remain the operational coordinator inside the legal frame.

The statement is true.', 'Social and eco-social models keep markets as the main coordination device and then layer social or ecological policy on top. They are not pure planning systems. Market mechanisms stay foundational.

The statement is true.'] WHERE case_id = 'CASE 2.5.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An eco-social market keeps prices and private trade as tools while adding environmental goals. Ecology does not force a wipe-out of all market prices or a return to pure central planning. The absolute claim fails.

The statement is false.', 'Scarcity is a limit on resources relative to wants. Ordering "infinite" output of every good does not create the inputs those goods require. Planning still faces trade-offs among scarce uses, so scarcity is not erased by decree.

The statement is false.', 'Both systems may use money, but they coordinate differently. Markets rely on prices, private ownership, and competition; planned systems rely on quotas and administrative allocation. Shared use of money does not make the systems identical.

The statement is false.', 'Moving from planning toward markets typically expands private ownership, competitive entry, and price-based coordination. That ownership and competition shift is a standard feature of transformation, not a side detail.

The statement is true.', 'Central orders do not create unlimited steel, labour, or energy. Planners must still choose among competing uses of scarce inputs. Printing quotas does not remove resource constraints.

The statement is false.'] WHERE case_id = 'CASE 2.5.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A free market economy centres on private ownership of capital, rivalry among firms, and limited state intervention beyond the legal framework. That emphasis matches the claim.

The statement is true.', 'A social market keeps competitive markets and adds social policy, welfare, and partnership institutions so that equity goals sit beside price coordination. Markets remain; social layers are added.

The statement is true.', 'An eco-social market starts from the social-market base and adds environmental sustainability as an explicit policy goal. Ecological objectives join, rather than replace, that market-and-welfare design.

The statement is true.', 'Consumer sovereignty means household spending steers production: what people buy, firms have reason to supply. Demand, not only administrative orders, shapes the product mix in market systems.

The statement is true.', 'Transformation from planning moves toward market models with private ownership and competition. It does not deepen central planning. The direction of reform matches the claim.

The statement is true.'] WHERE case_id = 'CASE 2.5.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['OECD members today are predominantly market economies with private pricing, competition, and regulation. They do not run only central plans with no private price-setting. The absolute claim fails.

The statement is false.', 'When bread is scarce relative to demand, prices tend to rise and signal producers to expand supply. Surpluses tend to push prices down and discourage further production. Those signals guide both sides of the market.

The statement is true.', 'Price liberalisation lets sellers set levels that reflect cost and demand. Competition may compress margins, but it does not drive every price to zero. Positive prices remain the normal outcome.

The statement is false.', 'Sudden free pricing can shock households used to fixed admin rates. Many transition programs therefore phase price freedom in gradually to limit affordability crises while markets form.

The statement is true.', 'When prices can rise with demand and fall with excess supply, households'' willingness to pay feeds back into production. Consumer sovereignty works more fully once prices respond to demand and cost.

The statement is true.'] WHERE case_id = 'CASE 2.5.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Even a free-market ideal still needs government for courts, defence, and other public goods. "Free market" does not mean a literal zero role for the state in every public function.

The statement is false.', 'Money can circulate in both systems. The decisive difference is coordination: markets use prices and private incentives; planned systems use quotas and directives. Shared banknotes do not make the systems identical.

The statement is false.', 'Market economies still rely on the state for law, national defence, and public goods that private rivalry alone does not provide. Banning all government activity is not what a free market means in practice or in theory.

The statement is false.', 'Circulating banknotes is not enough to equate the systems. Ownership, incentives, and whether prices or plans allocate resources still differ. The systems are not the same whenever cash exists.

The statement is false.', 'In free markets, rising and falling prices help match supply with demand without a centre setting every quantity. That decentralised coordination is a defining feature of the model.

The statement is true.'] WHERE case_id = 'CASE 2.5.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Eco-social design adds environmental standards and incentives to a market base. It does not abolish prices or reinstate pure central planning just to pursue green goals. Prices remain coordination tools.

The statement is false.', 'Co-determination, collective bargaining, and welfare aim at social peace and shared voice at work. Private firms and product-market competition continue underneath those institutions. Social partnership complements markets rather than wiping them out.

The statement is true.', 'In a social market, unions and employers negotiate labour conditions under law, but consumer demand and firm competition still drive most product allocation. Unions do not replace household demand with output quotas for every good.

The statement is false.', 'Firms can compete for customers while labour law requires worker representation or bargaining. Product-market rivalry and workplace rules operate on different margins and can coexist.

The statement is true.', 'An eco-social market keeps the social-market base and tightens environmental standards and ecological goals. Stronger green rules are added on top of, not instead of, that social-market design.

The statement is true.'] WHERE case_id = 'CASE 2.5.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mixed provision is common: childcare or schools can be publicly organised while groceries and many other consumer goods stay with private markets. Public and private sectors can sit side by side by sector.

The statement is true.', 'A social market explicitly blends social policy with market competition. Public childcare plus competitive retail fits that mixed design rather than forcing a single pure system.

The statement is true.', 'When admin prices sit below market-clearing levels, quantity demanded exceeds allocated supply. Queues, shortages, and parallel unofficial trade often follow. Exclusive state monopolies under planning faced that pattern repeatedly.

The statement is true.', 'Eco-social tools can subsidise green transport or set emissions rules while vehicle makers still compete on design, cost, and quality. Ecological policy need not end automotive rivalry.

The statement is true.', 'In competitive grocery retail, what households buy shapes assortment and shelf space. Consumer sovereignty is strongest in those paying private sectors, even when other services are public.

The statement is true.'] WHERE case_id = 'CASE 2.5.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['OECD economies today are predominantly market-based, with competition, private firms, and policy overlays. They are not pure planned systems with no market competition. The absolute claim fails.

The statement is false.', 'A social market keeps competition among firms and adds welfare and labour institutions. It does not reject all market rivalry in favour of pure central planning.

The statement is false.', 'Market reforms reallocate labour and capital; they do not create ideal jobs for everyone overnight. Transitional unemployment is a familiar cost of restructuring, so the zero-unemployment claim fails.

The statement is false.', 'Unemployment insurance and retraining sit on the labour side, while firms still compete for customers on product markets. Labour regulation and product-market competition can run in parallel.

The statement is true.', 'Social and eco-social models both start from market coordination and then add social or ecological policy. The market base remains; the overlays differ.

The statement is true.'] WHERE case_id = 'CASE 2.5.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When shoppers stop buying a brand, sales and revenue fall. Retailers who delist it are responding to that spending shift. Household purchasing power is steering assortment, which is consumer sovereignty in action.

The statement is true.', 'Delisting after a boycott follows collapsing demand and lost profit, not a central plan rewriting retail quotas. Planned economies are not required for a retailer to drop a brand. The claim misreads the mechanism.

The statement is false.', 'Falling sales threaten margin and stockturn. Profit-seeking retailers cut or delist lines that no longer pay. That revenue response is the ordinary profit motive under market pressure.

The statement is true.', 'Daily sales and price data register reputational damage as soon as baskets change. Quota revisions in a planned hierarchy usually move more slowly through ministries. Market signals travel faster here.

The statement is true.', 'A social market still uses consumer demand to allocate most private goods, while labour and social rules set additional constraints. Demand signals remain central; regulation does not replace them.

The statement is true.'] WHERE case_id = 'CASE 2.5.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Closing inefficient state plants and opening private firms takes time. Workers released in the first phase may be unemployed until new jobs appear. Transitional unemployment is a documented feature of many planned-to-market shifts.

The statement is true.', 'Social market tools such as benefits and retraining aim to cushion workers while the structure of jobs changes. Those policies address adjustment costs without blocking the move toward markets.

The statement is true.', 'Historical transitions produced sizable temporary joblessness as state employment shrank before private hiring scaled up. Instant perfect jobs for all is not how reform has typically worked.

The statement is false.', 'Short-run dislocation can coexist with longer-run efficiency gains once capital and labour move toward more productive uses. Painful restructuring does not rule out later productivity improvements under competition.

The statement is true.', 'An eco-social path adds environmental restructuring, such as closing dirty capacity or meeting green standards, on top of ordinary privatisation and liberalisation challenges. The same transition frictions appear, plus ecological ones.

The statement is true.'] WHERE case_id = 'CASE 2.5.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Planners lack complete knowledge of every local preference and cost. Misallocation of inputs and goods has been a recurring problem under planning. The claim that preferences are always known and misallocation never occurs fails.

The statement is false.', 'Eco-social design embeds ecological targets in a market framework and often uses market-based tools such as carbon prices. Green goals and market coordination are combined, not treated as opposites.

The statement is true.', 'A carbon tax changes relative prices and incentives for emissions. Wholesale and retail markets for electricity and other goods can continue. The tax does not erase all market prices or replace every outcome with a direct state order.

The statement is false.', 'Private generators and firms can still compete on cost and quality while facing environmental taxes or standards. Ecological goals constrain behaviour; they need not abolish private rivalry.

The statement is true.', 'Planned systems also used environmental rules, bans, and targets, even if coordination differed from market instruments. The claim that they never used any environmental policy at all is too absolute.

The statement is false.'] WHERE case_id = 'CASE 2.5.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ordering unlimited output does not create unlimited steel, labour, or energy. Planners still face scarce inputs and must choose among competing uses. Scarcity survives under planning.

The statement is false.', 'Central plans historically struggled to gather the dispersed preference and cost information that prices convey in markets. Perfect matching of consumer wants with zero information problems is not how planning worked in practice.

The statement is false.', 'A social market keeps private firms and competition as the core allocation mechanism and adds social policy around them. It does not abolish private enterprise in favour of pure central planning.

The statement is false.', 'Social market design typically includes welfare and income support precisely to protect vulnerable households while markets operate. Forbidding support for the poor "by definition" reverses the model''s social layer.

The statement is false.', 'Germany is the classic reference case for the social market economy: competitive markets combined with social partnership and welfare institutions. The example fits the claim.

The statement is true.'] WHERE case_id = 'CASE 2.5.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Free markets let prices emerge from supply and demand, subject to general rules. They do not require the state to set every consumer price each day. Daily admin price-setting is the opposite of free pricing.

The statement is false.', 'When cooperatives sell on open markets, revenue depends on what buyers will pay. That link replaces sole reliance on meeting plan quotas. Consumer demand becomes the commercial test.

The statement is true.', 'Agricultural transitions often moved land and farms into private hands, cooperatives, or mixed forms. Keeping 100% state ownership forever is not what those reforms typically did.

The statement is false.', 'After liberalisation, crop prices and expected profit guide what farmers plant. Higher returns pull acreage toward demanded crops; weak prices push it away. Price and profit signals steer crop choice.

The statement is true.', 'Central quotas often ignored local soil, climate, and cost information because targets came from above. Market feedback after reform lets those local advantages matter again for what is grown.

The statement is true.'] WHERE case_id = 'CASE 2.5.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If the plan orders more steel than machinery plants can absorb, unsold steel piles up. Without price feedback linking sectors, upstream quotas can overshoot downstream use. That surplus is a coordination failure of planning.

The statement is true.', 'In markets, excess supply tends to push prices down. Lower prices cut margins and discourage further output until the surplus is worked off. Price declines are the signal to shrink production.

The statement is true.', 'Firms that waste inputs or ignore paying customers lose revenue and profit. Competition rewards economising and matching supply to demand. That incentive structure is the profit motive in competitive markets.

The statement is true.', 'Market reforms replace rigid quota chains with prices and contracts between sectors. Persistent mismatches between steel and machinery demand become costly rather than administratively locked in. Feedback improves intersectoral balance.

The statement is true.', 'Steel, energy, and labour used on surplus output cannot be used elsewhere. Overproduction still burns scarce resources even when the plan ordered the tonnage. Scarcity continues under planning.

The statement is true.'] WHERE case_id = 'CASE 2.5.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Planned systems typically offered limited, assigned assortments rather than open-ended household choice. Unlimited product variety by design was not the historical pattern of planning.

The statement is false.', 'Energy-efficiency rules set a green floor for buildings. Private builders can still compete on design, location, and price above that floor. Standards and rivalry coexist.

The statement is true.', 'An eco-social model can keep housing markets while imposing ecological performance rules. It does not require abolishing all housing markets and assigning every home by central plan only.

The statement is false.', 'Regulation fixes minimum ecological performance. Above that minimum, developers still differentiate on layout, finishes, and price. The market competes on the margin beyond the floor.

The statement is true.', 'Both social and eco-social variants keep market coordination as the foundation and then add social or ecological policy. The market base is preserved in each case.

The statement is true.'] WHERE case_id = 'CASE 2.5.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Vouchers give families purchasing power that they can take to competing schools. Choice among providers sits inside a publicly funded frame. That is consumer choice among suppliers, not pure admin assignment.

The statement is true.', 'Social market logic allows government financing of a service while providers still compete for users. Public funding plus school competition fits that mixed design.

The statement is true.', 'Privatisation means transferring state-owned enterprises into private ownership through sales, listings, or similar reforms. That ownership shift is a hallmark of market transition programs.

The statement is true.', 'When families pick a school with voucher funds, their choices steer enrolment and revenue among providers. That spending power is consumer sovereignty applied to education supply.

The statement is true.', 'Eco-social policy could require environmental content in curricula while schools still compete for voucher students. Standards overlay competition; they need not cancel it.

The statement is true.'] WHERE case_id = 'CASE 2.5.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Component shortfalls and factory closures during reform displace workers before new private jobs absorb them. Historical transitions produced temporary unemployment. Instant perfect jobs for everyone is not the recorded pattern.

The statement is false.', 'Eco-social policy tightens environmental standards and incentives. It does not license firms to ignore environmental rules. The claim reverses what eco-social regulation does.

The statement is false.', 'Planned systems often struggled with rigid quotas and slow responses when local shortages appeared, as in the tractor-component bottleneck. Markets are not definitionally inferior on flexibility and consumer responsiveness; the absolute boast fails.

The statement is false.', 'Rising prices for scarce parts pull in extra supply and ration use among buyers. Hierarchical quota revisions must travel up and down ministries, which is slower. Prices aggregate local shortage information faster in competitive markets.

The statement is true.', 'Transformation introduces competition, private ownership, and price signals partly to loosen such rigid supply chains. Reducing quota rigidity is a standard aim of market reform.

The statement is true.'] WHERE case_id = 'CASE 2.5.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A free market still needs the state to enforce contracts, provide defence, and supply public goods. Absence of all government is not what the model means. Law and public goods remain.

The statement is true.', 'Complete laissez-faire with zero regulation is an ideal type. Modern economies regulate safety, externalities, and competition even when they emphasise markets. Pure zero-regulation is not the typical real-world case.

The statement is true.', 'Social market and eco-social market designs keep competitive markets and deliberately add welfare or ecological policy layers. Those overlays are intentional features of the variants.

The statement is true.', 'Planned economies allocate mainly by quotas and state ownership; free markets allocate mainly by prices and private incentives. Different names do not hide that the coordination mechanisms are distinct systems.

The statement is false.', 'Transformation liberalises prices, privatises or clarifies ownership, and expands market coordination. The move is away from central planning, not toward deeper planning.

The statement is true.'] WHERE case_id = 'CASE 2.5.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Leaving central planning typically involves factory closures, job losses, and firm restructuring before new private activity absorbs labour. Adjustment is often painful for workers and firms. The claim that it never hurts fails.

The statement is false.', 'Classical planned systems typically put major capital under state ownership and limited private capital. Requiring private ownership of capital even under classical planning reverses that institutional pattern.

The statement is false.', 'Eco-social design uses prices and market incentives, including environmental taxes, to pursue green goals. Eliminating prices entirely would discard those tools and would not remove real resource trade-offs. The absolute claim fails.

The statement is false.', 'Carbon taxes and cap-and-trade change relative prices so emitters face the cost of pollution while trade continues. Those instruments fit an eco-social framework that keeps markets and adds ecological policy.

The statement is true.', 'Eco-social ideas apply to advanced market economies that add environmental goals to social-market bases, not only to hypothetical island cases. Transformation debates and eco-social policy can speak to the same countries.

The statement is false.'] WHERE case_id = 'CASE 2.5.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Selling state telecom shares to private investors transfers ownership from the public sector to private hands. That ownership shift is privatisation in a transition reform.

The statement is true.', 'Under planning, a single state operator often held the field. Allowing new mobile entrants introduces rivalry where monopoly once stood. Competition replaces exclusive state provision.

The statement is true.', 'A legal exclusive franchise bars rival operators on the same designated routes. That statutory exclusivity creates monopoly-like local power even if other markets are competitive elsewhere.

The statement is true.', 'When households can pick among mobile plans and prices, providers must match preferences to win subscribers. Choice among competing offers strengthens consumer sovereignty in telecom.

The statement is true.', 'Competitive plan prices respond to network cost and subscriber demand. They are not locked at a single admin tariff for every user. Cost and demand shape market rates.

The statement is true.'] WHERE case_id = 'CASE 2.5.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Many countries combine market prices for most goods with targeted social transfers such as benefits or housing support. Mixing prices with transfers is routine in social market designs. The word "cannot" turns a familiar possibility into a false ban.

The statement is false.', 'Historical planned economies typically placed steel, energy, and other major industries under state ownership. That ownership pattern matches the claim for many cases.

The statement is true.', 'Planners often lacked accurate local demand information that prices convey in markets. Consumer preferences did not automatically dominate production without information problems. The absolute wording fails.

The statement is false.', 'Transformation frequently includes privatisation and price liberalisation, but the claim packages that path as what "often" happens "gradually" as if gradual reform were the typical rule. Many transitions used rapid shock liberalisation or uneven sequencing instead of a smooth gradual package, so the sentence overstates how reform usually unfolds.

The statement is false.', 'Ordering unlimited production does not create unlimited inputs. Planning still chooses among scarce steel, labour, and energy. Scarcity is not eliminated by state decree.

The statement is false.'] WHERE case_id = 'CASE 2.5.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Under planning, flats were often assigned through queues rather than sold at market prices. Central allocation replaced market housing supply and pricing in many systems. Long waits were the visible result.

The statement is true.', 'After reform, private developers build where buyers will pay and finance is available. Construction links to market demand instead of only to plan assignment. That response is market transformation in housing.

The statement is true.', 'When buyers choose location, size, and quality within their budgets, household preferences steer what gets built and sold. Consumer sovereignty in housing strengthens relative to admin assignment.

The statement is true.', 'Queues, mismatches of size and location, and informal workarounds were chronic under planned housing. Perfect matching with zero mismatch was not the recorded outcome. The words "always" and "zero" overclaim.

The statement is false.', 'After reform, higher prices in tight areas pull resources into building there; softer prices discourage overbuilding. Price signals guide how much housing is supplied and where.

The statement is true.'] WHERE case_id = 'CASE 2.5.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A social market keeps private firms competing for customers and adds social policy around that base. Calling the system "social market" does not delete competition among private firms.

The statement is false.', 'Even a free-market model still needs courts, defence, and other public functions. Banning every public role is not what free market means. The absolute ban fails.

The statement is false.', 'Market exchange rests on enforceable contracts and property rights. Governments provide that legal backbone. Requiring zero enforcement would undermine markets, not define them.

The statement is false.', 'Planned systems often blurred or suppressed private ownership of capital. Market transition typically restores or clarifies private property rights so firms and households can trade with secure title.

The statement is true.', 'Ownership links effort and risk to reward. Without that incentive, profit-seeking and responsiveness to consumers weaken, and allocation becomes less tied to paying demand. Incentives matter for market performance.

The statement is true.'] WHERE case_id = 'CASE 2.5.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ordering infinite output does not create infinite leather, labour, or factory time. Scarcity remains even if incomes are unchanged and quotas rise on paper. Pure planning does not erase limits by decree.

The statement is false.', 'When official shoe prices sit below clearing levels, queues form and excess demand spills into unofficial sellers at higher prices. Black markets are the parallel response to that mismatch.

The statement is true.', 'Chronic shortages of consumer goods were common under planning when quotas and admin prices misaligned with preferences. Perfect matching of quotas to demand was not the historical pattern.

The statement is false.', 'Market pricing aims to clear demand at prices that cover cost, reducing the gap that feeds parallel unofficial trade. Liberalisation is meant to shrink that incentive over time.

The statement is true.', 'Open-market prices rise when goods are scarce and fall when they are abundant, pulling supply toward demand more directly than fixed admin rates. That alignment is the core role of price signals.

The statement is true.'] WHERE case_id = 'CASE 2.5.25' AND tier = 'full';
