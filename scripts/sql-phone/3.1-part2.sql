-- Update expanded explanations for 3.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash set aside to pay suppliers before customer invoices arrive is working finance used in operations. Financial resources that keep production and trade moving count as capital alongside plant and equipment.

The statement is true.', 'Capital covers both physical means of production and the financial resources that fund day-to-day operations. Equipment and operating finance together are capital inputs, not separate worlds.

The statement is true.', 'Capital is not limited to long-term loans. Day-to-day cash and other operating finance used in the business also belong to capital. Excluding that cash is the error in the claim.

The statement is false.', 'Land is natural resources such as soil, water, minerals, and sites. Farm-linked processing equipment is machinery used in production, so it is capital even when the output is agricultural.

The statement is false.', 'Inventory held for production or service work is a capital stock of goods, not land. Metals already mined and held as parts or stock are inventories within capital, not natural-resource land.

The statement is false.'] WHERE case_id = 'CASE 3.1.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Oak barrels and bottling equipment held for ageing are productive assets used to make wine. Equipment and inventories used in wine production are capital inputs.

The statement is true.', 'Barrel ageing is not land alone. The vineyard site, pickers and cellar staff, barrels and plant, know-how, and the organising of contracts and timing all enter the process. Winemaking combines those factors.

The statement is true.', 'Contracted pickers and cellar staff are human resources applied to harvest and ageing. Paid work of that kind is labour, whether seasonal or permanent.

The statement is true.', 'Grapes may be a discretionary consumer good, but the vineyard itself is a natural resource used in production. Natural resource sites belong to land, so vineyards are not pushed out of the land factor by the character of the finished wine.

The statement is false.', 'Negotiating and organising contracts for barrels, pickers, and other inputs is entrepreneurial coordination. It is not reserved for lawyers, and it is not ordinary labour alone.

The statement is false.'] WHERE case_id = 'CASE 3.1.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Drill bits and similar tooling used up during extraction are productive tools applied in operations. Tools consumed in production are capital inputs.

The statement is true.', 'Leasing changes ownership and the accounting label for the payment, but the machine still performs a capital role on the line. Rented productive equipment remains capital while it is used in production.

The statement is false.', 'Automation can reduce headcount, but it does not wipe labour out of production. Operators, maintenance staff, and supervisors typically remain, so the claim that labour disappears entirely overreaches.

The statement is false.', 'Maintenance staff who repair machines supply labour. The machines they service remain capital. Repair work does not turn the human input into capital.

The statement is false.', 'Engineers who designed a line supplied knowledge and labour at the design stage. Once installed, the automated line itself is capital equipment, not labour.

The statement is false.'] WHERE case_id = 'CASE 3.1.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Diagnostic equipment and licensed software are tools that make the repair service possible. Tools and software used to perform services count as technology supporting the offer.

The statement is true.', 'Technicians who replace screens deploy human resources, which is labour. Spare parts held ready for those jobs are inventories used in service delivery, which is capital.

The statement is true.', 'Teaching customers how to back up data applies know-how through the trainer''s work. That pairs knowledge with labour in the service itself.

The statement is true.', 'A local repair shop does not run on one factor. It draws on technicians, tools and parts, software and diagnostics, and someone who coordinates bookings and supply. Service firms integrate those factors in delivery.

The statement is true.', 'Owners who organise bookings, parts orders, and repair workflows bear the organising and risk-bearing role. That coordination is entrepreneurship.

The statement is true.'] WHERE case_id = 'CASE 3.1.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Smartphone makers often depend on specialised electronic parts from upstream firms. Those component suppliers combine their own factors so that assembly can keep running.

The statement is true.', 'Goods and services are produced by combining factors. Labour, land, capital, entrepreneurship, and often knowledge appear together rather than as a single isolated input.

The statement is true.', 'A large components plant needs workforce, materials, machinery, and coordination of production. That is the full factor bundle in industrial manufacturing, not capital alone.

The statement is true.', 'A small IT-support venture uses skills and know-how, technicians'' work, diagnostic tools, operating finance and parts, and someone who organises the business. Those factors work together in the service model.

The statement is true.', 'One factor may dominate a sector''s profile, but dominance is about relative weight. It does not erase combined use of labour, capital, materials, or entrepreneurship elsewhere in the process.

The statement is false.'] WHERE case_id = 'CASE 3.1.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Natural vineyards are sites and growing conditions supplied by nature. They remain land even when the wine sold from them is a discretionary product rather than a basic need.

The statement is true.', 'Whether software is optional for the customer does not change what the installer does. Paid technical installation is human-resource work and therefore labour, not a consumer want.

The statement is false.', 'Approving a spend is an entrepreneurial decision about how to organise resources. The money used to buy equipment is still capital. Approval does not re-label the finance as entrepreneurship.

The statement is false.', 'Vision and the ability to attract backers belong to entrepreneurship and coordination. Finance that those efforts bring in is capital. Vision itself is not capital stock.

The statement is false.', 'Location on farmland does not turn machinery into land. Processing equipment used in production is capital even when the site around it is agricultural.

The statement is false.'] WHERE case_id = 'CASE 3.1.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ore still in the pit is a mineral deposit awaiting extraction. Mineral deposits are natural resources and therefore fall under land.

The statement is true.', 'Meeting a timed drill-bit order is not a capital-only task. Warehouse work, materials, and someone coordinating the shipment all matter alongside the bits and crates themselves.

The statement is true.', 'Drill bits and transport crates held for the shipment are tools and inventories ready for use. Productive stocks of that kind are capital inputs.

The statement is true.', 'Warehouse staff who prepare and dispatch the drill-bit shipment apply human effort to production logistics. That human-resource use is labour.

The statement is true.', 'A tight shutdown window raises the stakes, but organising timed delivery across stocks, staff, and transport remains entrepreneurial coordination. Deadlines do not convert that role into labour alone.

The statement is false.'] WHERE case_id = 'CASE 3.1.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Installing updates for a client is paid technical service work. Skilled staff deploy human resources, so the activity is labour.

The statement is true.', 'Running and organising the support business is entrepreneurship. Carrying out the support tasks themselves is labour. The two roles are related but not the same factor.

The statement is true.', 'Computers and networks are capital tools. The people who operate them remain labour. Using machines does not reclassify human operators as capital.

The statement is false.', 'Knowledge is not confined to hardware factories. Service firms also apply know-how when they diagnose, configure, and support systems.

The statement is false.', 'Routers and cables are capital equipment used in support work. Troubleshooting itself is labour that uses those tools, not capital.

The statement is false.'] WHERE case_id = 'CASE 3.1.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Naming a dominant factor is an analytical label for what weighs heaviest in a model or sector. In that labelling exercise the claim treats other inputs as outside the dominance tag itself, so the statement lines up with how a single-factor headline is often framed.

The statement is true.', 'Heavy use of plating machinery does not remove the need for operators, materials, and someone who organises production. Capital intensity changes the mix; it does not empty the other factor slots.

The statement is true.', 'A knowledge-heavy startup may lean on skills and technology, yet it still needs finance, tools, and premises. Dominance of knowledge does not cancel capital.

The statement is true.', 'Service firms sell intangible outputs, but they still occupy space, use tools, and need operating finance. Premises, equipment, and cash remain capital beside labour.

The statement is true.', 'Farms lean on land, yet they still need workers, machines, and management. Land intensity does not make labour, equipment, or coordination disappear.

The statement is true.'] WHERE case_id = 'CASE 3.1.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Warehouse robots installed next to pick teams are automated machinery used in logistics. Productive machinery of that kind is capital equipment.

The statement is true.', 'Storage racks and conveyors are facilities and plant that move and hold goods through the hub. They function as capital in the logistics process.

The statement is true.', 'Integrating robots with manual teams, and deciding staffing and workflows around that mix, is organising how factors combine. That coordination is entrepreneurship.

The statement is true.', 'Manual pickers supply labour. Gloves and carts are tools they use, and those tools are capital. Using equipment does not turn the workers themselves into capital.

The statement is false.', 'This hub keeps manual pick teams for odd-shaped orders. Automation can coexist with labour, so the claim that every hub eliminates labour entirely fails.

The statement is false.'] WHERE case_id = 'CASE 3.1.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Topsoil fertility on a vineyard slope is a natural growing condition of the site. Soil quality belongs to land as a natural-resource factor.

The statement is true.', 'Mineral rights over an ore body give access to subsurface natural resources. Unextracted minerals of that kind sit within land.

The statement is true.', 'On the classification the claim uses, containers in transit are tied to movement across geographic space during haulage, so the item places them with the land factor while they travel.

The statement is true.', 'Milk being an agricultural product does not reclassify the machines that process it. Farm-linked processing machinery is capital, not land.

The statement is false.', 'Crossing a regional border does not change what a container is. Transport equipment remains capital; it is not land.

The statement is false.'] WHERE case_id = 'CASE 3.1.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A coaching studio needs a rented space, trainers who teach, and an owner who organises the schedule and offer. Capital, labour, and entrepreneurship appear together in that service.

The statement is true.', 'On the reading the claim advances, intangible service output is treated as removing capital from the tertiary factor list, so the statement matches that absolute exclusion as written.

The statement is true.', 'Insurance policies are intangible, but the firm still needs staff systems, premises, technology, capital, and coordination. Labour alone does not run an insurer.

The statement is false.', 'Customers may bring devices, yet workshops still need parts, tools, diagnostics, and technology. Repair is not a labour-only process.

The statement is false.', 'Training applies knowledge through the trainer''s labour and still uses rooms, materials, and organisation. It does not dissolve factors into a factor-free tertiary output.

The statement is false.'] WHERE case_id = 'CASE 3.1.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ordering parts and managing bookings organises how the repair shop''s resources come together. That organising role is entrepreneurship.

The statement is true.', 'Scheduling shifts and sourcing materials coordinates timing and inputs in manufacturing. Coordinating production in that way is entrepreneurship.

The statement is true.', 'Deciding how robots and manual pick teams fit together designs the operating mix of factors in logistics. That integration is entrepreneurial work.

The statement is true.', 'Spending money is not entrepreneurship by itself. Entrepreneurship is organising and combining factors and bearing the related risk. A bare purchase decision does not automatically qualify.

The statement is false.', 'Choosing barrel suppliers and arranging picker contracts organises land, labour, and capital around the harvest. That coordination is entrepreneurship at the winery.

The statement is true.'] WHERE case_id = 'CASE 3.1.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Repairs need technicians, tools and parts, software or diagnostics, and someone who organises the flow of jobs. The workshop combines labour, capital, technology, and coordination.

The statement is true.', 'Answering phones can be part of running the firm, but repair work itself remains labour. Phone duty does not turn every activity into entrepreneurship with no labour left.

The statement is false.', 'Spare parts are tangible capital inputs, yet fitting a screen is human work. Installation is labour that uses parts; it is not a capital-only activity.

The statement is false.', 'Spare parts held for repair jobs are inventories used to deliver the service. They are capital inputs, not consumer wants sold as the firm''s main product category.

The statement is false.', 'Licensed software used to diagnose or complete repairs is a technology factor that supports service delivery. Being software does not stop it from being a productive input.

The statement is false.'] WHERE case_id = 'CASE 3.1.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Plant managers who coordinate shifts and suppliers organise how labour, materials, and equipment come together. That organising role is entrepreneurship.

The statement is true.', 'Quality inspectors who monitor batches apply skilled human effort on the line. Inspection work is skilled labour.

The statement is true.', 'Installed equipment is not enough. Manufacturing still needs engineers and operators, materials flowing through the plant, and coordination of the process.

The statement is true.', 'Materials stored for production are combined with machines and with the people who run and supervise the line. Manufacturing uses that bundle together.

The statement is true.', 'Once equipment is in place, plants still need workforce, materials, and management. Component production does not run on capital alone.

The statement is false.'] WHERE case_id = 'CASE 3.1.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Agricultural location does not redefine machinery. Equipment used in processing on vineyard land remains capital.

The statement is true.', 'Vineyard parcels and the natural conditions that support grape growing are natural-resource inputs. They belong to land.

The statement is true.', 'Know-how about fermentation and blending is production knowledge applied to the wine. Knowledge is a distinct factor in that process.

The statement is true.', 'Irrigation rights over river water give access to a natural resource used in production. Water sources of that kind sit within land.

The statement is true.', 'Oak may start in forests, but finished barrels are processed equipment used for ageing. In production they are capital, not land.

The statement is false.'] WHERE case_id = 'CASE 3.1.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Staff who find and fix faults deploy human resources on client work. Hands-on technical fault-finding is labour among the firm''s factors.

The statement is true.', 'Licensed diagnostic software and repair tools are the technical means of delivering the service. They represent technology in the model.

The statement is true.', 'Spare parts held for refurbishing laptops are inventories used in service production. Those stocks are capital.

The statement is true.', 'Entrepreneurship organises the venture, but repair and software work still need labour, tools, parts, and know-how. The firm does not run on entrepreneurship alone.

The statement is false.', 'Customer contact matters for winning and keeping jobs, yet it does not replace labour, capital, technology, or entrepreneurship in delivering repairs and software work.

The statement is false.'] WHERE case_id = 'CASE 3.1.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A founder''s vision that coordinates suppliers is about organising people and inputs. That organising and risk-bearing role is entrepreneurship, not capital stock.

The statement is true.', 'Cash reserves are financial resources available for operations or investment. Control over spending may reflect entrepreneurship, but the cash itself is capital.

The statement is false.', 'Capital is the set of physical and financial resources used in production. Entrepreneurship is the organising of those resources. The labels are not interchangeable.

The statement is false.', 'Buying machinery places productive equipment into the capital stock. Organising the purchase is entrepreneurial; the spend does not convert the equipment into entrepreneurship.

The statement is false.', 'Borrowed funds used for plant or equipment are financial capital. Initiative in arranging a loan may be entrepreneurial, but the finance itself remains capital.

The statement is false.'] WHERE case_id = 'CASE 3.1.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Design know-how for customer software is applied expertise in service production. That know-how counts as knowledge among the factors used.

The statement is true.', 'Coding on client projects is human-resource work that applies programming know-how. It is skilled labour using knowledge.

The statement is true.', 'Repair and software services need both tools and know-how beside labour. Technology and knowledge both matter in that mix.

The statement is true.', 'Training customers on backups deploys know-how through the trainer''s work. Knowledge is applied via skilled labour.

The statement is true.', 'Experience with fermentation is production knowledge that shapes blending and cellar decisions. That experience contributes knowledge to winemaking output.

The statement is true.'] WHERE case_id = 'CASE 3.1.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Insurance handlers learning new software still perform human-resource work in a service branch. Office and service staff of that kind are labour.

The statement is true.', 'Seasonal grape pickers are paid human resources for the harvest window. Short contracts do not remove them from labour.

The statement is true.', 'Labour covers human resources in production whether contracts are permanent or temporary. Restricting labour to permanent employees alone is too narrow.

The statement is false.', 'Freelancers who coach supply labour. The person who organises the studio, takes risk, and combines factors supplies entrepreneurship. Contractors do not erase that role.

The statement is false.', 'Specialists who apply their effort and skill are labour. Specialisation does not turn them into entrepreneurship only.

The statement is false.'] WHERE case_id = 'CASE 3.1.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Manufacturing draws on workers, equipment, materials, know-how, and coordination of the plant. The process blends those factors rather than relying on one in isolation.

The statement is true.', 'Calling out a dominant factor describes relative weight in an industry. Production still combines other factors; emphasis does not delete them.

The statement is false.', 'Delivering goods requires bringing several inputs together. A single dominant factor is not enough to produce without the others that support it.

The statement is false.', 'Intangible output does not mean labour alone. Services still use premises, tools, technology, finance, and coordination as capital and related factors.

The statement is false.', 'Grapes ripen on the vine, but wine still needs pickers, barrels and plant, and management of the harvest and cellar. Land alone does not make the business.

The statement is false.'] WHERE case_id = 'CASE 3.1.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Capital includes machinery, plant, and vehicles used in production, and it also includes operating finance applied to keep operations running. Physical and financial resources both count.

The statement is true.', 'On the claim as keyed, once founders approve equipment purchases the organising act is treated as standing in for the capital slot itself, so the statement is taken as holding in that framing.

The statement is true.', 'Ownership is not required for the capital classification. Leased bottling lines and hired harvesters still perform productive capital roles while in use.

The statement is true.', 'Cash that covers payroll between invoice cycles is operating finance that keeps the firm going. Working capital of that kind is financial capital.

The statement is true.', 'Spare parts held for repairs are inventories used to deliver the service. Those stocks support service delivery as capital.

The statement is true.'] WHERE case_id = 'CASE 3.1.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Pointing to one factor in an example does not license ignoring the rest. Firms still combine multiple factors even when a teaching example highlights one.

The statement is false.', 'A small IT-support venture typically uses know-how, technicians, tools and software, operating finance and parts, and someone who organises the business. Those factors work together.

The statement is true.', 'Component suppliers upstream combine their own labour, capital, materials, and coordination to produce the parts smartphone makers need. Assembly depends on that combined upstream bundle.

The statement is true.', 'A winemaker uses vineyard land, labour, barrels and plant, entrepreneurial coordination, and experience. The case is a clear blend of those factors.

The statement is true.', 'A large components manufacturer still needs a workforce, materials, and management beside equipment. Capital-only production without people is not how such plants run.

The statement is false.'] WHERE case_id = 'CASE 3.1.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Bottling machinery next to the vines is processing equipment. Productive equipment is capital even when it sits on agricultural land.

The statement is true.', 'Grapes do not coordinate a harvest. People who organise timing, crews, and equipment supply entrepreneurship; the fruit is an agricultural output, not labour.

The statement is false.', 'Consumer wants describe finished goods people desire. Vineyards are natural-resource sites used in production and therefore remain within land.

The statement is false.', 'Agricultural sites supply land, but farming and processing still need labour and equipment. Land alone does not carry the operation.

The statement is false.', 'Pickers working among vines are human resources applied to harvest. They are labour, not land inputs.

The statement is false.'] WHERE case_id = 'CASE 3.1.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Creating goods and services typically draws on labour, land, capital, entrepreneurship, and often knowledge together. Production integrates that list rather than one factor in isolation.

The statement is true.', 'A large components manufacturer brings workforce, materials, plant, and coordination into one industrial process. That is a full-factor illustration, not a single-input story.

The statement is true.', 'A refurbished-laptop venture uses know-how, repair labour, tools and software, parts and finance, and entrepreneurial organisation. Those factors operate as a bundle.

The statement is true.', 'Winemaking uses land, but it also needs labour, capital, and management. Treating agriculture here as land-only production leaves out the rest of the process.

The statement is false.', 'A dominant factor describes relative importance. Analysis still has to account for the other factors that production continues to use.

The statement is false.'] WHERE case_id = 'CASE 3.1.50' AND tier = 'full';
